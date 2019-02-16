---
title:       Jak poprawiliśmy czytelność naszego funkcyjnego kodu
slug:        jak-poprawilismy-czytelnosc-naszego-funkcyjnego-kodu
tags:        'JAVASCRIPT · PROGRAMOWANIE FUNKCYJNE'
alternate:
  en:        how-we-improved-readability-of-our-functional-code
cover:       how-we-improved-readability-of-our-functional-code__cover.jpg
miniCover:   how-we-improved-readability-of-our-functional-code__cover--mini.jpg
date:        2017-09-21
description: Jedną z ważniejszych zasad pozwalających na pisanie deterministycznego, łatwego w debugowaniu kodu, jest unikanie efektów ubocznych. Oczywistym wyborem, jeżeli chcemy owe założenie spełnić, jest korzystanie z paradygmatu funkcyjnego. Ten jednak niesie ze sobą zagrożenie w postaci nieczytelności kodu.
---

## Problem

Jedną z ważniejszych zasad pozwalających na pisanie deterministycznego, łatwego w debugowaniu kodu, jest unikanie efektów ubocznych. Oczywistym wyborem, jeżeli chcemy owe założenie spełnić, jest korzystanie z paradygmatu funkcyjnego. Ten jednak niesie ze sobą zagrożenie w postaci nieczytelności kodu. Problem ten jest szczególnie widoczny w sytuacjach, w których na danych wejściowych wykonujemy serie transformacji.

W tym artykule chcielibyśmy przyjrzeć się dostępnym rozwiązaniom i wymienić ich wady oraz zalety.

## 1. Tradycyjne złożenie funkcji, czyli zagnieżdżenie wywołań

Zagnieżdzenie wywołań znane z lekcji matematyki jest rozwiązaniem, które pierwsze przychodzi do głowy.

```javascript
3 2 1 data  // order of calls
h(g(f(x)))
```

To na co należy zwrócić uwagę już na samym początku, to odwrócona kolejność wywołań, co w rzeczywistych zastosowaniach będzie wiązało się ze znaczną utratą czytelności kodu. Spójrzmy na bardziej realny przykład.

```javascript
ctx.send(sortBy(getProp('name'), mapWithArticles(articles, getOnlyAdults(parseData(response)))))
```

lub też

```javascript
ctx.send(
  sortBy(
    getProp('name'),
    mapWithArticles(
      articles,
      getOnlyAdults(
        parseData(
          response
        )
      )
    )
  )
)
```

Nie trzeba chyba specjalnie tłumaczyć dlaczego czytelność jest niska, a samo rozwiązanie nie najlepsze.

## 2. Użycie tymczasowych zmiennych/stałych

Drugim podejściem jest użycie tymczasowych zmiennych przechowujących wyniki kolejnych transformacji.

```javascript
const parsedData = parseData(response)
const onlyAdults = getOnlyAdults(parsedData)
const adultsMappedWithArticles = mapWithArticles(articles, onlyAdults)
const sortedAdultsMappedWithArticles = sortBy(getProp('name'), adultsMappedWithArticles)
ctx.send(sortedAdultsMappedWithOhScrewThisShit)
```

W stosunku do pierwszego rozwiązania uzyskaliśmy ciąg wywołań z góry do dołu, co jest znacznie czytelniejsze. Utworzyliśmy jednak serię zupełnie niepotrzebnych stałych, które wykorzystane zostały tylko w jednym miejscu (w kolejnej transformacji). Ponadto wpadamy w pułapkę nazewnictwa. Albo będziemy wymyślać długie i złożone nazwy dla kolejnych danych wynikowych, albo, zmęczeni tym, zaczniemy nazywać je byle jak. Oba scenariusze nie napawają optymizmem.

## 3. Użycie jednej zmiennej

Modyfikując nieco podejście opisane powyżej możemy stworzyć jedną zmienną, która po kolei będzie przechowywać wyniki transformacji.

```javascript
let temp
temp = parseData(response)
temp = getOnlyAdults(temp)
temp = mapWithArticles(articles, temp)
temp = sortBy(getProp('name'), temp)
ctx.send(temp)
```

Pozbyliśmy się serii zmiennych oraz kłopotów z nazewnictwem. Pojawił się jednak inny problem. Wprowadziliśmy mutującą zmienną. Przecież nie o to nam chodziło, kiedy decydowaliśmy się na pisanie funkcyjnego kodu, prawda?

## 4. Rozwijanie funkcji i kompozycja

Rozwijanie funkcji polega na zastąpieniu funkcji wieloargumentowej funkcją, która przyjmuje jeden argument i zwraca kolejną funkcję, która działa w sposób podobny jak poprzednia.

```javascript
f(a,b,c) => f(a)(b)(c)
sortBy(getProp('name'))(data)
```

W połączeniu z kompozycją, znaną na przykład z biblioteki [Ramda](http://ramdajs.com/), możemy uzyskać następujący efekt:

```javascript
const result = R.compose(
  R.sortBy(R.prop('name')),  // 4
  mapWithArticles(articles), // 3
  getOnlyAdults,             // 2
  parseData,                 // 1
)(response)                  // dane
ctx.send(result)             // 5
```

Pozbyliśmy się mutującej zmiennej, jednak zamiast tego wróciliśmy do wywoływania funkcji od prawej do lewej (w naszym przypadku od dołu do góry). Jeżeli następnie wykorzystujemy gdzieś te dane (ctx.send) jest to szczególnie mylące. Całość kodu czytamy od góry do dołu, nagle odwracamy flow, by po przeczytaniu wnętrza kompozycji odwrócić flow ponownie. Takie rozwiązanie może być mylące*.

**Oczywiście istnieją sytuacje, gdzie takie zachowanie jest pożądane, np. komponowanie interfejsu w jsx*

## 5. Kompozycja ltr (od lewej do prawej)

Na całe szczęście wiele bibliotek dostarcza nam metody umożliwiające kompozycje w naturalnym dla nas kierunku. W ramdzie istnieje ona pod nazwą `pipe`.

```javascript
const result = R.pipe(
  parseData,                 // 1
  getOnlyAdults,             // 2
  mapWithArticles(articles), // 3
  R.sortBy(R.prop('name')),  // 4
)(response)                  // dane
ctx.send(result)             // 5
```

Jest znacznie lepiej. Jedyny mankament, jaki wciąż pozostaje to przekazywanie danych **wejściowych** dopiero na końcu.

## 6. Pipeline operator

Dla nas, to rozwiązanie to niedościgniony wzór. Zasada działania operatora jest bardzo prosta.

```elixir
# Elixir
a |> b => b(a)
a |> b |> c => c(b(a))
```

Dzięki temu możemy kompozycję zastąpić następującym kodem:

```javascript
const result = response        // dane
  |> parseData                 // 1
  |> getOnlyAdults             // 2
  |> mapWithArticles(articles) // 3
  |> R.sortBy(R.prop('name'))  // 4
ctx.send(result)               // 5
```

Niestety pipeline operator nie jest dostępny w JS. Co prawda [istnieje](https://github.com/tc39/proposal-pipeline-operator) inicjatywa (którą bardzo popieramy!), aby dołączyć go do kolejnej wersji standardu EcmaScript, jednak przyjdzie nam na to jeszcze poczekać.

**W międzyczasie, nic nie stoi na przeszkodzie, aby własnoręcznie stworzyć prosty kod, który wzorując się na zaletach pipeline operatora, pozwoli nam w wygodny i czytelny sposób "chainować" funkcje.**

## 7. @inventistudio/using-js

**TL;DR**: Rozwiązanie, które stworzymy poniżej krok po kroku, dostępne jest na **[npm](https://www.npmjs.com/package/@inventistudio/using-js)** oraz na **[githubie](https://github.com/InventiStudio/using-js)**, więc jeżeli nie masz ochoty przechodzić przez proces tworzenia, a jedynie potrzebujesz gotowego, działającego rozwiązania, to odsyłamy Cie tam.

### Co chcemy uzyskać?

Warto zacząć od zdefiniowania założeń, jakie ma spełniać nasze rozwiązanie, aby być dla nas czytelne.

* Dane powinny być przekazywane na początku, tj. przed serią transformacji
* Funkcje powinny być dodawane w kolejności od lewej do prawej (od góry do dołu)
* Każda kolejna funkcja powinna operować na wyniku funkcji poprzedniej, w szczególnym przypadku, pierwsza funkcja na przekazanych danych
* Cały ciąg wywołań powinien na końcu zwracać przetworzone dane

Znając warunki, zastanówmy się, w jaki sposób jesteśmy w stanie je spełnić.

### Jak chcemy to uzyskać?

Przede wszystkim musimy odrzucić możliwość zdefiniowania własnego operatora. Nie jest to wykonalne w JSie, a nawet jeżeli byłoby, to mogłoby prowadzić do nieporozumień. Kod mógłby być nieczytelny dla osób postronnych, które nie znałyby zdefiniowanego przez nas operatora.

Posłużmy się tym, co w JSie jest dostępne i dobrze znane. Do wykorzystania mamy funkcje i obiekty.

Na "gołych" danych nie będziemy w stanie zdefiniować potrzebnych metod, więc na pewno musimy najpierw "ubrać" przekazane dane w obiekt, w którym zdefiniujemy potrzebne funkcje operujące na przekazanych danych.

```javascript
function using(data) {
  return {
    do(func) {
      return using(func(data))
    },
  }
}
```

Zasada działania powyższego kodu jest bardzo prosta. Funkcja `using` zwraca nam obiekt. Należy traktować ją jak narzędzie do pakowania. Zwrócony obiekt (pakunek) zawiera metodę `do`, której jako argument przekazujemy funkcję `func` mającą operować na danych. Jej wynik jest ponownie opakowywany za pomocą `using` i zwracany.

Stworzony fragment kodu możemy wykorzystać w poniższy sposób:

```javascript
const result = using(response)
  .do(something)
  .do(somethingElse)
  .do(oneMoreThing)
```

Należy jednak zauważyć, iż skoro `do` zawsze zwraca obiekt, to cały ten kod powoduje przypisanie do stałej `result` opakowania, a nie faktycznego wyniku. W związku z tym musimy dodać jeszcze jedną metodę.

```javascript
function using(data) {
  return {
    do(func) {
      return using(func(data))
    },
    value() {
      return data
    },
  }
}
```

W tym momencie dokładając `.value()` na końcu wywołania, otrzymamy faktyczny wynik. Przepiszmy zatem nasz przykład z początku artykułu.

```javascript
const result = using(response)   // dane
  .do(parseData)                 // 1
  .do(getOnlyAdults)             // 2
  .do(mapWithArticles(articles)) // 3
  .do(R.sortBy(R.prop('name')))  // 4
  .value()
ctx.send(result)                 // 5
```

Otrzymaliśmy czytelny, prosty w rozumieniu i utrzymaniu kod. Bardzo dobrze współpracuje on z Ramdą, ale nic nie stoi na przeszkodzie, aby używać go z dowolną funkcyjną biblioteką lub własnym kodem.

### Co dalej?

W zasadzie moglibyśmy na tym poprzestać. Pozbyliśmy się nadmiaru zmiennych, wyeliminowaliśmy mutacje, uzyskaliśmy ciąg wywołań od lewej do prawej, który operuje na danych przekazanych na samym początku. **Jednak tematem artykułu jest poprawienie czytelności kodu, a w tej materii zdecydowanie można zrobić więcej.**

### Transformacje warunkowe

W miarę, gdy nasz kod się rozrasta, gdy zwiększa się lista funkcjonalności, pojawiają się sytuacje, w których czasami (w zależności od zdefiniowanego warunku) chcielibyśmy coś zrobić z danymi, a czasami nie. Szczególnie częste jest to podczas tworzenia API, w którym chcemy dać klientowi możliwość kontrolowania odpowiedzi za pomocą parametrów zapytania. Co wtedy robimy? Używamy ifów, elsów i switchy.

```javascript
const { limit, includes } = params

let users = await getUsers()

if (limit) {
    users = R.take(limit)(users)
}
if (includes.articles) {
    users = R.map(includeArticles)(users)
}
if (includes.comments) {
    users = R.map(includeComments)(users)
}

ctx.send(users)
```

Wygląda znajomo? O ile taki kod jest dość zrozumiały, to na pewno da się go poprawić. Szczególnie, że doprowadzamy w nim do mutacji. Zauważmy, że każda mutacja wykonywana jest na zmiennej `users`, która albo zawiera pobranych użytkowników, albo już przetworzone dane (np. jeżeli klient przekazał zarówno limit, jak i chęć dołączenia artykułów do każdego użytkownika, to mapa wywołująca funkcję `includeArticles` działa na danych zwróconych przez `R.take`)

Dodajmy więc do `using` metodę `doIf`, która zadziała podobnie, lecz w nieco bardziej funkcyjny sposób.

```javascript
function using(data) {
  return {
    do(func) {
      return using(func(data))
    },
  	doIf(condition, func) {
      return condition ? this.do(func) : this
    },
    value() {
      return data
    },
  }
}
```

Teraz przedstawiony wcześniej przykład możemy zapisać tak:

```javascript
const { limit, includes } = params

const users = using(await getUsers())
  .doIf(limit, R.take(limit))
  .doIf(includes.articles, R.map(includeArticles))
  .doIf(includes.comments, R.map(includeComments))
  .value()

ctx.send(users)
```

Prawda, że wygląda lepiej?

### Nic więcej nie da się poprawić?

Zawsze można coś napisać lepiej, dołożyć kolejne użyteczne metody. W naszej bibliotece [**using-js**](https://github.com/InventiStudio/using-js) w stosunku do powyższego kodu:

* dodaliśmy metodę `doUnless`, która wywołuje transformacje jedynie, gdy warunek jest nieprawdziwy.
* pozwoliliśmy na przekazywanie funkcji jako `condition` zarówno w funkcji `doIf`, jak i `doUnless`. Jest to niezwykle przydatne w przypadku bardziej złożonych warunków uzależnionych od samych danych
* dodaliśmy metodę `switch`, która pozwala na wybranie jednej z dostępnych metod na podstawie przekazanej wartości.
* napisaliśmy testy 😎

Zapraszamy do **[przetestowania](https://github.com/InventiStudio/using-js)**!

## Podsumowanie

Jeden kod można napisać na wiele sposobów. I choć czytelność poszczególnych rozwiązań jest przede wszystkim kwestią gustu, to jednak wydaje nam się, że niektóre wypadają lepiej od reszty. Liczymy mocno (i z niecierpliwością czekamy) na pipeline operator w JavaScripcie. Póki jednak nie jest on dostępny będziemy korzystać z zaproponowanego na końcu rozwiązania. Nam wydaje się to najlepszym wyjściem.
