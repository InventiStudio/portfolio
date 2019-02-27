---
title:       'Project case study: Promis'
slug:        project-promis
tags:        'VUE.JS · SVG · RESPONSIVE · FRONT‑END · UI · UX'
alternate:
  pl:        projekt-promis
cover:       promis/cover.png
miniCover:   promis/cover--mini.png
date:        2019-01-29
description: Case study of the project we've made for Promis - French insurtech platform. The goal was to design and develop a Vue.js front-end application of insurtech platform.
isProject:   true
---

## Goal

Promis have been selected by the main incubator in Paris - Le Village, sponsored by Le Crédit Agricole bank. It is a French insurtech platform aiming at giving the best advice to independents (lawyers, liberal doctors, freelances) in regard to their insurance needs and selling those insurances as a broker. 

The client turned to InventiStudio to help them design and develop front-end application.

<p><a href="//promis.fr/" target="_blank">Here's the live site</a>, take a look!<p>

## Scope

We provided Vue.js front-end development and UI & UX design services. 

<blog-scope v-bind:active-scopes="['vue', 'design']"></blog-scope>

## UI & UX design

### Color palette

<blog-color-palette v-bind:colors="[{ name: 'Chateau Green', hex: '#37b64d' }, { name: 'Portage', hex: '#8582f3' }, { name: 'Scorpion', hex: '#5c5c5c' }, { name: 'Red', hex: '#e40000' }]">
</blog-color-palette>

### Typography

**Barlow** sans-serif font has been used for the whole app's content.

![Typography](/static/blog/promis/typography.png)

## Vue.js front-end

### Responsiveness

One of the requirements was to make Promis **responsive**, as majority of users might look up the app on mobile devices. We made sure Promis looks perfect on all devices, be it **mobile**, **tablet** or **desktop**. 

<figure>
  <div class="blog-post__section--full-w">
    <img src="/static/blog/promis/vuejs-front-end-responsiveness.png" alt="Vue.js front-end - Responsiveness" />
  </div>
  <figcaption>Vue.js front-end app responsiveness on mobile, tablet and desktop.</figcaption>
</figure>

### SVG progress circle

The "Our Assets" section was one of the trickiest (and fun!) parts of the interface implementation. It consists of a slider on the left side and an **SVG progress circle** on the right, representing the assets of Promis in four points.

<figure>
  <div class="blog-post__browser-frame">
    <img src="/static/blog/promis/svg-progress-circle.png" alt="SVG progress circle" />
  </div>
  <figcaption>Custom SVG progress circle.</figcaption>
</figure>

It's all about the `stroke-dasharray` and `stroke-dashoffset` attributes, which we can easily bind to component data:

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

### SVG donut pie chart

Yet another SVG-powered piece of UI - this time **SVG donut pie chart**. We've made this one using <a href="//d3js.org/" target="_blank">d3.js library</a>, which, because of it's imperative nature, is really helpful in such a custom cases.

The pie chart consists of various types of insurances, with colour intensity representing the importance of given insurance field.

<figure>
  <div class="blog-post__browser-frame">
    <img src="/static/blog/promis/svg-donut-pie-chart.png" alt="SVG donut pie chart" />
  </div>
  <figcaption>SVG donut pie chart made with d3.js.</figcaption>
</figure>

## Client's feedback

<div class="blog-post__client-feedback">
  <img src="/static/testimonials/vincentstammbach.jpeg" alt="Co-Founder & CTO, Promis" />
  <p>
    <strong>Vincent Stammbach</strong>
    <br>
    Co-Founder & CTO, <a href="//promis.fr/" target="_blank">Promis</a>
  </p>
</div>

<p class="indent">“Excellent job done on Promis - congratulations! It is the first time I am outsourcing IT jobs outside of France and it was a perfect match! We had a very good communication (both written and spoken) in English, with the appropriate level of questions / feedback / reporting. InventiStudio have an awesome skills in front development (HTML / CSS / JS ES6 / Vue.js / Webpack) and there were some really tricky parts! They did a very reliable transcription of the design (Sketch files) to web pages and have excellent understanding of the instructions and challenge of the guidelines when required, with a true UI & UX design view and opinion.</p>

<p class="indent">PS. We have just started a second project together. Hope it will be as good as the first one!”</p>
