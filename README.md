# [InventiStudio Portfolio](https://inventi.studio)

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
