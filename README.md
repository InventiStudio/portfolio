<p align="center">
  <img alt="InventiStudio Portfolio" src="static/logo-trans-white.svg" />
</p>

# [InventiStudio](https://inventi.studio) Portfolio

<p><a href="https://inventi.studio" target="_blank">InventiStudio</a> is a web development agency based in Wrocław, Poland. We excel at building modern web applications, providing Vue.js front‑end, Node.js back‑end and UI/UX design services for enterprises, companies and startups. <a href="mailto:hello@inventi.studio">Get in touch with us</a>!<p>

![https://img.shields.io/travis/InventiStudio/portfolio.svg](https://img.shields.io/travis/InventiStudio/portfolio.svg)

#### Table of Contents
- [Setup](#setup)
- [Development](#development)
- [Production](#production)

## Setup
#### Requirements
- [NodeJS](https://nodejs.org), *>= 8.0.0*
- [Yarn](https://yarnpkg.com/lang/en/), *>= 0.21.3*

## Development
```bash
# Clone repo and install deps
$ git clone git@github.com:InventiStudio/portfolio.git
$ cd portfolio
$ yarn
```

```bash
# Run dev server with hot reload at localhost:8080
yarn dev
```

#### Linters
```bash
# Run Sass linter
yarn lint:sass

# Run JavaScript linter
yarn lint:es

# Run all linters
yarn lint
```

#### Tests
```bash
# Run Unit tests
yarn test:unit

# Run e2e tests
yarn test:e2e
```

## Production
```bash
# Build for production with minification
yarn build

# Build for production and view the bundle analyzer report
yarn build --report

# Run production server at localhost:8080
yarn start
```
