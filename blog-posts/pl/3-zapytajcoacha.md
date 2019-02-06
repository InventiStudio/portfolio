---
title:       'Case study projektu: ZapytajCoacha'
slug:        projekt-zapytajcoacha
alternate:
  en:        project-zapytajcoacha
cover:       zco/cover.png
miniCover:   zco/cover--mini.png
date:        2018-07-23
description: Case study projektu, który wykonaliśmy dla pani Marzeny Peplińskiej. Naszym zadaniem było stworzenie spersonalizowanego systemu zarządzania rezerwacjami i panelu administracyjnego do pisania postów na blogu. Zaprojektowaliśmy i wdrożylismy trzy aplikacje - stronę marketingową Vue.js, panel administracyjny Vue.js i back-end API Node.js.
---

## Naszym zadaniem było stworzenie spersonalizowanego systemu zarządzania rezerwacjami i panelu administracyjnego do pisania postów na blogu.

Dla pani Marzeny Peplińskiej zaprojektowaliśmy i wdrożyliśmy trzy aplikacje - **stronę marketingową Vue.js**, **panel administracyjny Vue.js** oraz **back-end API Node.js**.  

[Tutaj](https://zapytajcoacha.pl) możesz zobaczyć stronę na żywo!

## Zakres projektu

Zapewnilismy usługi z zakresu front-endu Vue.js, back-endu Node.js oraz projektowania UI i UX.

<blog-scope v-bind:active-scopes="['vue', 'node', 'design']"></blog-scope>

## Kolory

Oto paleta kolorów, z której korzystaliśmy!  

![Kolory](/static/blog/zco/colors.png)

## Typografia

Użyliśmy bezszeryfowej czcionki **Lato** do większości treści w aplikacji.
Szeryfowa czcionka **Lora** została użyta do zawartości blog postów, aby zapewnić optymalną czytelność.  

![Typografia](/static/blog/zco/typography.png)

## Responsywność

Jako, że **responsywność** jest głównym czynnikiem zapewniającym dobry **UX**, dołożyliśmy wszelkich starań, aby zaprojektować stronę marketingową tak, aby wyglądała idealnie na **wszystkich urządzeniach**.

<div class="blog-post__section--full-w">
  <img src="/static/blog/zco/vuejs-marketing-page-responsiveness.png" alt="Strona marketingowa Vue.js - Responsywność" />
</div>

## System zarządzania rezerwacjami 

Główną częścią wszystkich trzech aplikacji jest **spersonalizowany system rezerwacji**. Użytkownik otrzymuje prosty formularz, w którym może zarezerwować spotkanie on-line.  

Użyliśmy świetnej biblioteki dla **datepicker'ów** - [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker). Obsługuje wiele języków, co było kluczowym wymogiem, ponieważ domyślnym językiem witryny jest język polski.  

```pug
.small-12.medium-3.columns
  label(for="dateFrom") Data konsultacji
  Datepicker(
    v-model="dateFrom",
    id="dateFrom",
    name="dateFrom",
    placeholder="1 Września 2017",
    language="pl",
    format="d MMMM yyyy",
    :full-month-name="true",
    :monday-first="true",
    :input-class="['cf__input', { 'input--error': !isDateFromValid }]",
    :disabled="disabledDates",
    @selected="hour = ''",
    @changedMonth="getNewAvailabilities",
    @changedYear="getNewAvailabilities",
  )
  small.error(v-if="!isDateFromValid") Data konsultacji jest wymagana 
```

Do **walidowania formularzy** korzystamy z fantastycznej biblioteki [vuelidate](https://github.com/monterail/vuelidate), która jest podstawą [naszego starter-kit'u Vue.js](https://github.com/InventiStudio/vue-starter-kit), którego to używamy w każdym projekcie!

```javascript
validations: {
  firstName: { required },
  lastName: { required },
  email: { required, email },
  dateFrom: { isValidDate() { return moment(this.dateFrom).isValid() } },
  hour: { required },
  contactType: { required },
  consultationType: { required },
  message: { required },
  isFirst: { required },
  isTerms: { required, isAccepted() { return this.isTerms } },
  consultationForm: [
    'firstName',
    'lastName',
    'email',
    'dateFrom',
    'hour',
    'contactType',
    'consultationType',
    'message',
    'isFirst',
    'isTerms',
  ],
}
```

Oto urywek części administracyjnej systemu zarządzania rezerwacjami...

![Panel administracyjny Vue.js - System zarządzania rezerwacjami](/static/blog/zco/vuejs-admin-panel-booking.png)

...a tutaj część kliencka:

<div class="blog-post__section--full-w">
  <img src="/static/blog/zco/vuejs-marketing-page-booking.png" alt="Strona marketingowa Vue.js - System zarządzania rezerwacjami" />
</div>

## Blog
 
Blog jest jednym z najlepszych sposobów na **świetne SEO**, dlatego położyliśmy duży nacisk na zbudowanie solidnego, spersonalizowanego systemu blogowania.  

Zazwyczaj używamy [Prerender'a](https://prerender.io/), aby zawartość aplikacji była w pełni dostępna dla robotów. Oczywiście istnieje również [Nuxt.js](https://nuxtjs.org/), które jest potężnym narzędziem nie tylko dla lepszego pozycjonowania, ale także dla lepszego UX'u. W tym przypadku jednak zdecydowaliśmy, że użycie Nuxt.js byłoby sporą przesadą. ;)  

![Strona marketingowa Vue.js - Blog](/static/blog/zco/vuejs-marketing-page-blog.png)

Zbudowaliśmy również sekcję panelu administracyjnego do pisania postów na blogu. Użyliśmy Quilla [(implementacja we Vue.js)](https://github.com/surmon-china/vue-quill-editor) dla edytora WYSIWYG.  

<div class="blog-post__section--full-w">
  <img src="/static/blog/zco/vuejs-admin-panel-blog.png" alt="Panel administracyjny Vue.js - Blog" />
</div>

## Restowe API Node.js

Wdrożyliśmy **Restowe API Node.js** do "sklejenie" obu aplikacji front-endowych razem.  

Użyliśmy [frameworku Koa.js](http://koajs.com/) wraz z [ORM'em Sequelize](http://docs.sequelizejs.com/) dla bazy danych PostgreSQL. Inną świetną biblioteką, o której warto również wspomnieć, jest [schema-inspector](https://github.com/Atinux/schema-inspector), która bardzo pomaga nam przy walidacji zapytań.  

Oto kawałek kodu źródłowego jednego z kontrolerów systemu rezerwacji:  

```javascript
export default router.controller('/availabilities', (ctrl) => {
  ctrl
    .post('/', auth, async (ctx, next) => {
      const { body } = ctx.request
      validate
        .run(body, {
          dateFrom: {
            type: 'string',
            exec(schema, _dateFrom) {
              const isValidDate = moment(_dateFrom).isValid()
              const isAfterNow = moment(_dateFrom).isAfter(moment())
              const isSameDay = moment(_dateFrom).isSame(moment(body.dateTo), 'day')
              if (!isValidDate) this.report('must be valid date', 422)
              if (!isAfterNow) this.report('must not be past date', 422)
              if (!isSameDay) this.report('must be same day', 422)
            },
          },
          dateTo: {
            type: 'string',
            exec(schema, _dateTo) {
              const isValidDate = moment(_dateTo).isValid()
              const isAfter = moment(_dateTo).isAfter(moment(body.dateFrom))
              if (!isValidDate) this.report('must be valid date', 422)
              if (!isAfter) this.report('must be after \'dateFrom\'', 422)
            },
          },
        })
        .throwIfInvalid()
      const dateFrom = moment(body.dateFrom).startOf('hour')
      const dateTo = moment(body.dateTo).startOf('hour')
      const isAlready = await Availability.findOne({ where: { dateFrom: { $between: [
        moment(dateFrom).startOf('day').format(), moment(dateFrom).endOf('day').format(),
      ] } } })
      if (isAlready) error.throw({ name: 'UniqueConstraintError', data: { dateFrom: ['must be unique day'] } })
      const availability = await Availability.create({ dateFrom, dateTo })
      ctx
        .success(availability)
        .withStatus(201)
        .then(await next)
    })
```

## Opinia klienta

<div class="blog-post__client-feedback">
  <img src="/static/testimonials/henrykpeplinski.jpg" alt="Zdjęcie klienta" />
  <p>
    Henryk Pepliński
    <br>
    <a href="https://zapytajcoacha.pl" target="_blank">ZapytajCoacha</a>
  </p>
</div>

“Profesjonaliści, szukający bardzo wymagających zadań! Nie boją się niczego, co związane jest z ich pracą. Terminowość i elastyczność idealnie dopasowana pod klienta. Doświadczenie i wiedza ludzi z [InventiStudio](https://inventi.studio) sprawia, że zawsze będę do nich wracał w razie potrzeby nowej aplikacji webowej lub innej usługi IT.”
