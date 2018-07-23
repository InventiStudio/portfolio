---
title:       'Project case study: ZapytajCoacha'
slug:        project-zapytajcoacha
alternate:
  pl:        projekt-zapytajcoacha
cover:       zco/cover.png
miniCover:   zco/cover--mini.png
date:        2018-07-23
description: Case study of the project we've made for coach Marzena Peplińska. The goal was to create custom booking management system and admin panel for writing blog posts. We have designed and developed three applications - Vue.js marketing website, Vue.js admin panel and Node.js back-end API.
---

## The goal was to create custom booking management system and admin panel for writing blog posts.

For coach Marzena Peplińska we have designed and developed three applications - **Vue.js marketing page**, **Vue.js admin panel** and **Node.js back-end API**.  

[Here's the live site](https://zapytajcoacha.pl) if you want to take a look!

## Client's feedback

<div class="blog-post__client-feedback">
  <img src="/static/testimonials/henrykpeplinski.jpg" alt="Client's photo" />
  <p>
    Henryk Pepliński
    <br>
    <a href="https://zapytajcoacha.pl" target="_blank">ZapytajCoacha</a>
  </p>
</div>

“Professionals looking for very challenging tasks! They are not afraid of anything related to their work. Punctuality and flexibility ideally suited to the customer. The experience and knowledge of people from [InventiStudio](https://inventi.studio) means that I will always come back to them if in need of a new web application or other IT service.”

## Scope of the project

![Vue.js front-end, Node.js back-end, UI & UX design](/static/blog/zco/scope.png)

## Colors

Here's the color palette we've used!

![Colors](/static/blog/zco/colors.png)

## Typography

We've used sans-serif **Lato** font for majority of the apps' content.  
**Lora** serif font was used for blog posts' content, to provide optimal readability.

![Typography](/static/blog/zco/typography.png)

## Responsiveness

As **responsiveness** is a major part of a good **user experience**, we've put a great effort in desiging the marketing website so that it looks perfect on **all devices**. 

<div class="blog-post__section--full-w">
  <img src="/static/blog/zco/vuejs-marketing-page-responsiveness.png" alt="Vue.js marketing website - Responsiveness" />
</div>

## Booking system

Major part of all three applications is the **custom booking system**. User is presented with a simple form, where she can book an online meeting.  

We've used great a 3rd party library for **datepicker** component - [vuejs-datepicker](https://github.com/charliekassel/vuejs-datepicker). It supports a variety of languages, which was a crucial requirement, as the website's default language is polish.

```pug
.small-12.medium-3.columns
  label(for="dateFrom") Date of consultation
  Datepicker(
    v-model="dateFrom",
    id="dateFrom",
    name="dateFrom",
    placeholder="1 September 2017",
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
  small.error(v-if="!isDateFromValid") Date of consultation is required.
```

For the **form validation** we're using a fantastic [vuelidate](https://github.com/monterail/vuelidate) lib, which is a core of [our Vue.js starter kit](https://github.com/InventiStudio/vue-starter-kit) we use for every project!

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

Here's a peak at admin's part of booking system...

![Vue.js admin panel - Booking system](/static/blog/zco/vuejs-admin-panel-booking.png)

...and here's the client part:

<div class="blog-post__section--full-w">
  <img src="/static/blog/zco/vuejs-marketing-page-booking.png" alt="Vue.js marketing website - Booking system" />
</div>

## Blog

Blog is one of the best resources for **great SEO**, that's why we put a great focus on building robust, custom blogging system.  

We usualy use [Prerender](https://prerender.io/) for making webapp's content fully accessible for crawlers. There's of course also [Nuxt.js](https://nuxtjs.org/), which is a powerful tool for not only better SEO, but also for better user experience. For this case however, we decided it would have been a bit of an overkill to use Nuxt.js. ;)

![Vue.js marketing website - Blog](/static/blog/zco/vuejs-marketing-page-blog.png)

We've also built an admin panel section for writing blog posts. We used Quill's [Vue.js implementation](https://github.com/surmon-china/vue-quill-editor) for WYSIWYG editor.

<div class="blog-post__section--full-w">
  <img src="/static/blog/zco/vuejs-admin-panel-blog.png" alt="Vue.js admin panel - Blog" />
</div>

## Node.js Rest API

We have developed a **Node.js back-end** JSON Rest API for "gluing" both front-end apps together.  

We used [Koa.js framework](http://koajs.com/), together with [Sequelize ORM](http://docs.sequelizejs.com/) for PostgreSQL database. Other great library worth mentioning is [schema-inspector](https://github.com/Atinux/schema-inspector), which greatly helps us to sanitize and validate requests' payload.  

Here's a peak at the source code of one of booking system's controllers:

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
