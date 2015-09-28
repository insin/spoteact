var path = require('path')

var express = require('express')
var webpack = require('webpack')

var config = require('./webpack.config')

var app = express()
var compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3001, '0.0.0.0', function(err) {
  if (err) {
    console.error('Error starting React dev server')
    console.error(err.stack)
    process.exit(1)
  }
  console.log('React dev server listening at http://localhost:3001')
})
