require('./InfoBar.css')

var React = require('react')

var InfoBar = React.createClass({
  render() {
    return <div class="header-bar">
      <div class="container">
        <div class="pull-left">
          <span>Created by: <a href="https://play.spotify.com/user/spotify_espa%C3%B1a">SpotifyenEspañol</a></span>
          <span>• </span>
          <span>67 songs</span><span>, </span>
          <span>4 hr 28 min</span>
        </div>
      </div>
    </div>
  }
})

module.exports = InfoBar
