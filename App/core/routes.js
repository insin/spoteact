var React = require('react')
var {Route, IndexRoute} = require('react-router')

var App = require('./App')
var Browse = require('./screens/Browse')
var Playlist = require('./screens/Playlist')

module.exports = <Route path="/" component={App}>
  <IndexRoute component={Browse}/>
  <Route path="playlist/:id" component={Playlist}/>
</Route>
