---
title:       'Case study projektu: Promis'
slug:        projekt-promis
tags:        'VUE.JS · SVG · RESPONSYWNOŚĆ · FRONT‑END · UI · UX'
alternate:
  en:        project-promis
cover:       promis/cover.png
miniCover:   promis/cover--mini.png
date:        2019-01-29
description: Case study projektu, który stworzyliśmy dla Promis - francuskiej platformy ubezpieczeniowej. Celem było zaprojektowanie i wdrożenie front-endowej aplikacji Vue.js.
---

## Cel

Promis został wybrany przez główny inkubator w Paryżu - Le Village, sponsorowany przez bank Le Crédit Agricole. Jest to francuska platforma typu insurtech, której celem jest udzielanie najlepszych porad osobom niezależnym (prawnikom, liberalnym lekarzom, freelancerom) w zakresie ich potrzeb ubezpieczeniowych i sprzedaży tych ubezpieczeń jako pośrednik.

Klient zwrócił się do InventiStudio, aby pomóc im w zaprojektowaniu i wdrożeniu aplikacji front-endowej, używając Vue.js.

<a href="//promis.fr/" target="_blank">Oto strona na żywo</a>.

## Zakres projektu

Zapewnilismy usługi z zakresu front-endu Vue.js oraz projektowania UI i UX.

<blog-scope v-bind:active-scopes="['vue', 'design']"></blog-scope>

## Projekt UI & UX

### Kolory

<blog-color-palette v-bind:colors="[{ name: 'Chateau Green', hex: '#37b64d' }, { name: 'Portage', hex: '#8582f3' }, { name: 'Scorpion', hex: '#5c5c5c' }, { name: 'Red', hex: '#e40000' }]">
</blog-color-palette>

### Typografia

W aplikacji została użyta bezszeryfowa czcionka **Barlow**.

![Typografia](/static/blog/promis/typography.png)

## Vue.js front-end

### Responsywność

Jednym z wymogów projektu była **responsywność**, jako że większość użytkowników może przeglądać aplikację na urządzeniach mobilnych. Zadbaliśmy o to, by Promis wyglądał idealnie na wszystkich urządzeniach, czy to w wersji **na telefonach**, **na tabletach** czy **na dużych ekranach**.

<figure>
  <div class="blog-post__section--full-w">
    <img src="/static/blog/promis/vuejs-front-end-responsiveness.png" alt="Vue.js front-end - Responsywność" />
  </div>
  <figcaption>Responsywność aplikacji Vue.js na telefonach, tabletach i dużych ekranach.</figcaption>
</figure>

### Koło postępu SVG

Sekcja "Our assets" była jedną z najtrudniejszych części implementacji interfejsu. Składa się ze slidera po lewej stronie i koła postępu SVG po prawej stronie, reprezentującego cechy Promisa w czterech punktach.

<figure>
  <div class="blog-post__browser-frame">
    <img src="/static/blog/promis/svg-progress-circle.png" alt="Koło postępu SVG" />
  </div>
  <figcaption>Spersonalizowane koło postępu SVG.</figcaption>
</figure>

Cała magia kryje się w atrybutach `stroke-dasharray` i `stroke-dashoffset`, króre można bardzo łatwo zbindować z danymi komponentu:

```html
<!-- template -->
<circle
  :class="['our-assets__circle--filled', isCircleTransitioned && 'our-assets__circle--filled-transitioned']"
  :stroke-dasharray="circleDashArray"
  :stroke-dashoffset="circleDashOffset"
  stroke-linecap="round"
  stroke-linejoin="round"
  stroke-width="3.5"
  r="208"
  cx="210"
  cy="210"
></circle>
```

### Wykres kołowy SVG

Kolejny element interfejsu wykorzystujący SVG - tym razem **wykres kołowy SVG**. Stworzyliśmy go z pomocą <a href="//d3js.org/" target="_blank">biblioteki d3.js</a>, która, ze względu na swoją impreatywność, jest bardzo pomocna w tak niestandardowych przypadkach.

Wykres kołowy prezentuje różne rodzaje ubezpieczeń, których wagę odzwierciedla intensywność koloru.

<figure>
  <div class="blog-post__browser-frame">
    <img src="/static/blog/promis/svg-donut-pie-chart.png" alt="Wykres kołowy SVG" />
  </div>
  <figcaption>Wykres kołowy SVG stworzony z pomocą d3.js.</figcaption>
</figure>

## Opinia klienta

<div class="blog-post__client-feedback">
  <img src="/static/testimonials/vincentstammbach.jpeg" alt="Założyciel i CTO, Promis" />
  <p>
    <strong>Vincent Stammbach</strong>
    <br>
    Założyciel i CTO, <a href="//promis.fr/" target="_blank">Promis</a>
  </p>
</div>

<p class="indent">“Świetna robota w Promis - gratulacje! To pierwszy raz kiedy outsourcujemy projekt IT poza Francję i był to idealny wybór! Mieliśmy bardzo dobrą komunikację (pisemną i ustną) w języku angielskim, z odpowiednim poziomem pytań / informacji zwrotnych / raportowania. InventiStudio posiadają niesamowite umiejętności w zakresie programowania front-endu (HTML / CSS / JS ES6 / Vue.js / Webpack), a było kilka naprawdę trudnych aspektów! Bardzo dokładne przełożyli projekty graficzne (pliki Sketch) na właściwą aplikację. Doskonale też rozumieją wytyczne i kwestionują zastosowane rozwiązania, z profesjonalnymi opiniami w kwestii UI i UX.

<p class="indent">PS. Właśnie rozpoczęliśmy kolejny wspólny projekt. Mamy nadzieję, że współpraca będzie tak dobra jak w poprzednim!”</p>
