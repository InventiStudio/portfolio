// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    mocha: true
  },
  extends: 'airbnb-base',
  plugins: [
    'html' // required to lint *.vue files
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // custom rules
  rules: {
    quotes: [ 2, 'single' ],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'key-spacing': 0,
    // no limit for line length
    'max-len': 0,
    // any other console.* will raise an error
    'no-console': [
      'error',
      { allow: [ 'warn', 'error' ] }
    ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
     // does not understand Webpack's aliases
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    // for Piteł ;*
    'no-multi-spaces': 0,
    // allow to reasign object keys, e.g *.prototype
    'no-param-reassign': [
      'error',
      { props: false }
    ],
    'no-shadow': 0,
    // allow e.g 'window.__example' name
    'no-underscore-dangle': 0,
    semi: ["error", "never"]
  }
}
