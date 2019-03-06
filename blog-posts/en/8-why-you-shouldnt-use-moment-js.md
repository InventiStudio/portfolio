---
title:       Why you shouldn't use Moment.js...
slug:        why-you-shouldnt-use-moment-js
tags:        'JAVASCRIPT · MOMENT.JS · DATE · TIME'
alternate:
  pl:        dlaczego-nie-powinienes-uzywac-moment-js
cover:       why-you-shouldnt-use-moment-js__cover.jpg
miniCover:   why-you-shouldnt-use-moment-js__cover--mini.jpg
date:        2019-03-07
description: ...or, at least, what you should remember when using it. The most popular JS DateTime library that gave us everything we wanted so much from native Date API. If it is much better than native API, why do we tell you not to use it?
isProject:   false
---

...or, at least, what you should remember when using it.

JavaScript's built-in Date object is far from ideal, let's face it. We could spent a lot of time talking about Date API methods like `getYear`, however we believe everything has been told in that matter. Every of us, at some time realized that or has been warned by older friends if was lucky enough. Whatever the reason was, at the end we all reached for external library, and the choice was obvious - Moment.js. The most popular JS DateTime library that gave us everything we wanted so much from native Date API.

If it is much better than native API, why do we tell you not to use it?

## 1. It's slow

Some time ago we've been working on our client's project optimization. Without delving into details, we had an function that had to be able to process more than 10 000 short timeframes. We found quickly that most burdensome part of whole loop is parsing ISO8601 dates that we got from database, literally `moment(ISO8601_DATE_HERE)`. It was quite shocking since we weren't using any custom format, just typical ISO. It became even more shocking when we noticed that `moment(new Date(ISO8601_DATE_HERE))` is actually faster... about 7 times faster. Wait, what?

<figure>
  <video id="what-vid" width="100%" autoplay muted loop controls>
      <source src="//i.imgur.com/sHwm0zE.mp4" type="video/mp4"></source>
  </video>
  <figcaption>Source: Imgur</figcaption>
</figure>

After that we decided to do more Moment.js performance testing and compare it with orthers solutions. Take a look:

<figure>
  <bar-chart v-bind:data="{ labels: ['Parse ISO', 'Parse EPOCH', 'Format', 'Add 6 months', 'Is same day', 'Is before'], series: [{ name: 'Moment.js', data: [ 8.633, 0.971, 4.644, 0.849, 1.253, 0.177 ] }, { name: 'Day.js', data: [ 0.529, 0.560, 2.841, 3.044, 1.117, 1.128 ] }, { name: 'Luxon', data: [ 4.536, 1.215, 3.440, 3.141, 2.897, 0.177 ] }, { name: 'JS-Joda', data: [ 8.295, 0.691 , 1.423, 0.180, 0.679, 0.129 ] }, { name: 'Date-Fns', data: [ 1.144, 0.166 , 2.315, 0.693, 0.518, 0.339 ] }, { name: 'Native API', data: [ 0.268, 0.212, 0.613, 0.082, 0.035, 0.087 ] }] }"></bar-chart>
  <figcaption>Comparison of time required to perform common operations x 100 000 [s]</figcaption>
</figure>

#### ISO 8601 Parsing

It took Moment.js almost 9 seconds to parse 100 000 ISO 8601 dates while Day.js needed only 0.5 second. They have similiar API, but under the hood they work differently. Day.js uses smart trick. [It detects](https://github.com/iamkun/dayjs/blob/dev/src/index.js#L53) if there is `Z` at the end of passed String. If so it just uses Native `new Date(String)`. On the other hand Moment.js, Luxon and JS-Joda uses its own regex solution. Worth of noticing fact is Date.parse handles ISO 8601 properly since ES5 so if you need to support e.g IE9 (I hope to you'll never have to 😬) you should probably avoid both Day.js and Date-Fns.

#### EPOCH Time Parsing

No surprises here. All libraries deal with it pretty nice, but if you are speed deamon, Date-Fns is your friend.

#### Formatting

Since there is no true format function in Date API, even native-based libraries like Date-Fns ends with more or less complex custom solution. First that comes to our mind is probably regex and that's okay since it's valid and common solution used, for example, by Moment.js. However the most efficient library in this test, JS-Joda, [does it differently](https://github.com/js-joda/js-joda/blob/master/src/format/DateTimeFormatterBuilder.js#L862). It uses custom function with a lot of `if`s and `charAt`s and it seems to be faster than regex-based solutions.

#### Math

DateTime Math is really tough thing, there is no doubt about it, and is this case Moment.js did really well, unlike to Day.js and Luxon. However, again JS-Joda appears to be the winner of math competition.

#### Comparisons

It's clearly visible that checking if both dates has same day is more complex that just checking if first date was before second. It's because it can't be done just by comparing timestamps.

It's quite strange to me that Luxon did so bad here. We did some basic perf tests inside my chrome dev tools and it looks like most of time is used by `startOf` and `endOf` functions, which seems to be obvious. However, I'm unable to find the reason why they are so slow. It needs deeper digging. Anyway, all other libraries had fine results.

When it comes to the `Is before` test, which should be easy we can notice, that Day.js is struggling with it. It's because [it uses](https://github.com/iamkun/dayjs/blob/dev/src/index.js#L109) `endOf` inside its `isBefore` function and doesn't check if second parameter `unit` has been passed, unlike moment, which [does it](https://github.com/moment/moment/blob/develop/src/lib/moment/compare.js#L23).

## 2. It's heavy

Moment.js by default weights 232 kB (66 kB gzipped), which - according to the analysis by [Yoshihide Jimbo](https://github.com/jmblog/how-to-optimize-momentjs-with-webpack) - can be reduced to about 68 kB (23 kB gzipped) by ignoring locales using Webpack. It doesn't support tree-shaking because of its design so it doesn't seem that we can reduce it more.

<figure>
  <bar-chart v-bind:data="{ labels: ['Moment.js', 'Luxon', 'Day.js', 'Date-Fns', 'JS-Joda'], series: [{ name: 'Size [kB]', data: [232, 64, 6, 30, 208] }, { name: 'Gzipped size [kB]', data: [66, 18, 3, 7, 39] }] }"></bar-chart>
  <figcaption>Comparison of weights [kB]</figcaption>
</figure>

JS-Joda is slightly lighter than Moment.js (well, gzipped almost 2 times), but we should mention here, that it's really big library that contains periods and timezones (both not included in basic Moment.js - plugins required).

The difference is even bigger when it comes to Luxon, Day.js and Date-Fns. The last mentioned has tree-shaking support so for most cases it should take much more less space. And last but not least, even without tree-shaking, Day.js weights 3 kB minified & gzipped. This 22 times lower than Moment.js.

It doesn't really matter if we're talking about Back-End usage, but for sure it should be taken into consideration when it comes to the Front-End. Long loading time means lower user satisfaction and worse SEO.

## 3. It's mutable

Let's say that you are building calendar app and you want to create timeframe to fetch incoming events.

```javascript
const startedAt = moment()
const endedAt   = startedAt.add(1, 'year')

console.log(startedAt) // > 2020-02-09T13:39:07+01:00
console.log(endedAt)   // > 2020-02-09T13:39:07+01:00
```

All manipulation methods both mutate and return reference to mutated object, which seems to be more error-prone idea than just mutating, since you are not getting an error. `endedAt === undefined` would warn you at some point that something is wrong.

```javascript
const init   = moment()
const add    = init.add(1, 'year')
const sub    = init.subtract(10, 'months')
const start  = init.startOf('year')
const end    = init.endOf('year')
const utc    = init.utc()
const local  = init.local()
const offset = init.utcOffset(480)
```

All these variables reference to the same object. Fortunately, there is a simple solution.

```javascript
const startedAt = moment()
const endedAt   = moment(startedAt).add(1, 'year')
```

Passing Moment.js object as an argument to `moment()` method creates new instance. Keep in mind that every time you are using Moment.js.

## 4. It's hard to debug

If input data are good everything is fully predictable and works nice (skipping situations in which we forget about mutating functions, of course). However, sometimes we are making mistakes, we are humans after all. It would be nice to be warned by library that something is not ok with our data.

Let's look at the example. We have an object called `person`, which has one field, `lastVisitedAt`. You can think about it as of JSON returned by server API.

```javascript
const person = { lastVisitedAt: '2017-11-11T00:00:00.000Z' }
moment(person.lastVsitedAt).format() // > '2019-02-08T16:01:45+01:00'
```

Did you notice that last visit date of our person is different than date returned by Moment.js? Why? Well, I made a typo. It should be `lastV**i**sitedAt`. By its design, `moment(undefined)` does not throw an error. It behaves like `moment()` instead.

Let's check more values.

```javascript
moment().format()          // > 2019-02-08T17:07:22+01:00
moment(undefined).format() // > 2019-02-08T17:07:22+01:00
moment(null).format()      // > Invalid date
moment({}).format()        // > 2019-02-08T17:07:22+01:00
moment("").format()        // > Invalid date
moment([]).format()        // > 2019-02-08T17:07:22+01:00
moment(NaN).format()       // > Invalid date
moment(0).format()         // > 1970-01-01T01:00:00+01:00
```

It looks like only `NULL`, empty string and `NaN` are invalid. Quite inconsistent. Moreover, no error is thrown, instead Moment.js returns `Invalid Date` object (which is instance of Date btw.).

```javascript
moment().toISOString()          // >  2019-02-08T16:14:10.835Z
moment(undefined).toISOString() // >  2019-02-08T16:14:10.835Z
moment(null).toISOString()      // >  null
moment({}).toISOString()        // >  2019-02-08T16:14:10.836Z
moment("").toISOString()        // >  null
moment([]).toISOString()        // >  2019-02-08T16:14:10.836Z
moment(NaN).toISOString()       // >  null
moment(0).toISOString()         // >  1970-01-01T00:00:00.000Z
```

When using `toISOString()` Moment.js behaves differently. Instead of `Invalid Date` we get `null`. Under the hood, Moment.js creates its own invalid object and apparently these methods thread it differently.

```javascript
moment()          // >  moment("2019-02-08T17:21:46.584")
moment(undefined) // >  moment("2019-02-08T17:21:46.584")
moment(null)      // >  moment.invalid(/* NaN */)
moment({})        // >  moment("2019-02-08T17:21:46.584")
moment("")        // >  moment.invalid(/* NaN */)
moment([])        // >  moment("2019-02-08T17:21:46.584")
moment(NaN)       // >  moment.invalid(/* NaN */)
moment(0)         // >  moment("1970-01-01T01:00:00.000")
```

To summarize: `Undefined` is not invalid attribute for `moment()` function, but `null` is. Anyway Moment.js won't throw you an error even if you'll pass `null`. Instead of that you'll get native Invalid Date object, null or custom object, depends on the situation. 🤯

## On the other hand...

...moment.js has a lot of advantages that we can't omit. It has big community which leads to fast bug detecting and fixing. Moreover you can find a lot of external libraries that add various functionalities (e.g [moment-business-days](https://github.com/kalmecak/moment-business-days)). Another thing is wide timezone support, which is better than in other DateTime libraries.

## Alternatives

Upgrading from native Date API to Moment.js was a big improvement, there is no doubt, but does it mean it can't be better? Of course not, but hey... what actually does it mean "better"? Well, that depends on your needs.

If size is crucial I'd recommend to try Date-Fns or Day.js. For back-end and projects that do a lot of error-prone parsings and/or manipulations Luxon or JS-Joda seem to be best choices. If wide support and a lot of plugins are things that you need, stick with Moment.js, but we aware of its issues!


|                                                           | Size (gzip) [kB]                                             | To. Speed [s] | Tree-shaking | Immutable | Error throwing | TZ Support |
| --------------------------------------------------------- | ------------------------------------------------------------ | ---------- | ------------ | --------- | -------------- | ---------- |
| [Moment.js](https://momentjs.com)                         | 232 (66) or [68 (26)](https://github.com/jmblog/how-to-optimize-momentjs-with-webpack) |      16.527      | <img src="/static/blog/no.svg" alt="❌" />            | <img src="/static/blog/no.svg" alt="❌" />         | <img src="/static/blog/no.svg" alt="❌" />              | <img src="/static/blog/yes.svg" alt="✅" />          |
| [Day.js](https://github.com/iamkun/dayjs)                 | 6 (3)                                                        |      9.219      | <img src="/static/blog/no.svg" alt="❌" />            | <img src="/static/blog/yes.svg" alt="✅" />         | <img src="/static/blog/no.svg" alt="❌" />              | <img src="/static/blog/no.svg" alt="❌" /> [^1]      |
| [Luxon](https://moment.github.io/luxon/)                  | 64 (18)                                                      |      15.406      | <img src="/static/blog/no.svg" alt="❌" />            | <img src="/static/blog/yes.svg" alt="✅" />         | <img src="/static/blog/yes.svg" alt="✅" /> [^2]             | <img src="/static/blog/yes.svg" alt="✅" /> [^3]        |
| [JS-Joda](https://js-joda.github.io/js-joda/)             | 208 (39)                                                     |      11.397      | <img src="/static/blog/no.svg" alt="❌" />            | <img src="/static/blog/yes.svg" alt="✅" />         | <img src="/static/blog/yes.svg" alt="✅" />              | <img src="/static/blog/yes.svg" alt="✅" />          |
| [Date-Fns](https://github.com/date-fns/date-fns)          | 30 (7)                                                       |    5.175        | <img src="/static/blog/yes.svg" alt="✅" />            | <img src="/static/blog/yes.svg" alt="✅" />         | <img src="/static/blog/no.svg" alt="❌" />              | <img src="/static/blog/no.svg" alt="❌" />          |
| Native Date                                               | -                                                       |      1.297      | -           | <img src="/static/blog/no.svg" alt="❌" />         | <img src="/static/blog/no.svg" alt="❌" />              | <img src="/static/blog/no.svg" alt="❌" />          |

[^1]: There is [pull request](https://github.com/iamkun/dayjs/pull/325) adding TimeZone plugin
[^2]: It requires `Settings.throwOnInvalid = true;`
[^3]: It may need a [polyfill](https://moment.github.io/luxon/docs/manual/matrix.html) to work in old browsers without Intl API support

If such a comparison is not enough for you, take a look on basic code example (or [run it online! ](https://repl.it/@piotrekfracek/DateTime)). I've sorted them by similarities to moment.js API.

```javascript
const moment                                 = require('moment');
const dayjs                                  = require('dayjs')
const { DateTime }                           = require('luxon')
const { ZonedDateTime, DateTimeFormatter }   = require('js-joda')
const { parse, addYears, subMonths, format } = require('date-fns')

const iso = '2011-10-11T13:00:00.000Z';

// Moment
const from    = moment(iso)
const to      = moment(from).add(1, 'year').subtract(6, 'months')
const format  = 'YYYY-MM-DD [at] HH:mm'
const fromStr = from.format(format)
const toStr   = to.format(format)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00

// Day.js
const from    = dayjs(iso)
const to      = from.add(1, 'year').subtract(6, 'months')
const format  = 'YYYY-MM-DD [at] HH:mm'
const fromStr = from.format(format)
const toStr   = to.format(format)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00

// Luxon
const from    = DateTime.fromISO(iso)
const to      = from.plus({ year: 1 }).minus({ month: 6 })
const format  = "yyyy-MM-dd 'at' HH:mm"
const fromStr = from.toFormat(format)
const toStr   = to.toFormat(format)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00

// JS-Joda
const from    = ZonedDateTime.parse(iso)
const to      = from.plusYears(1).minusMonths(6)
const format  = DateTimeFormatter.ofPattern("y-MM-d 'at' H:mm")
const fromStr = from.format(format)
const toStr   = to.format(format)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00

// Date-Fns
const from    = parse(iso)
const to      = subMonths(addYears(from, 1), 6) // or you can use any chain tool, e.g @inventistudio/using-js
const formatS = "YYYY-MM-DD [at] HH:mm"
const fromStr = format(from, formatS)
const toStr   = format(to, formatS)
const str     = `From ${fromStr} to ${toStr}`
console.log(str) // > From 2011-10-11 at 13:00 to 2012-04-11 at 13:00
```

Of course, we don't take into consideration a lot of things that can do the difference, e.g license or popularity, however we believe that amount of informations is a good start!

## TL;DR

Moment.js is heavy, slow, mutable and hard to debug, still yet it has some advantages. However you should consider using different library, e.g JS-Joda, Luxon, Date-Fns or Day.js, depending on your needs. And even if you decide to stick with Moment.js, be aware of few things, e.g `moment(undefined)` will give you valid date.

