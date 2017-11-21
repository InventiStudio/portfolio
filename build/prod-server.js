const express = require('express')
const compression = require('compression')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

app.use(compression())
app.use('/static', express.static(path.join(__dirname, '../dist', '/static')))

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../dist') })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`) // eslint-disable-line no-console
})
