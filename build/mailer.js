const Sparkpost  = require('sparkpost')
const bodyParser = require('body-parser')
const keys       = require('../keys.private')
const sparkpost  = new Sparkpost(keys.SPARKPOST_KEY)

module.exports = function() {
  return [
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json(),
    function(req, res) {
      const { template_id, recipients, substitution_data } = req.body
      sparkpost.transmissions
        .send({
          content: { template_id },
          recipients,
          substitution_data,
        })
        .then(data => res.status(200).end(JSON.stringify(data)))
        .catch(err => res.status(err.statusCode).end(JSON.stringify(err)))
    }
  ]
}

