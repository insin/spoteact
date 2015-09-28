require('bootstrap/dist/css/bootstrap.css')
require('../assets/styles/main.css')
require('../assets/styles/fonts.css')

var React = require('react')
var {Router} = require('react-router')

var routes = require('./routes')

React.render(<Router routes={routes}/>, document.getElementById('app'))
