const files      = require('./files')
const bodyParser = require('body-parser')

module.exports = function serve() {
  return [
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    function middleware(req, res) {
      res.end('FEED')
    },
  ]
}

