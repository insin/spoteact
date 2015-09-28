require('./MusicStrip.css')

var React = require('react')
var {Link} = require('react-router')

var BigCard = require('./BigCard')

var MusicStrip = React.createClass({
  getInitialState() {
    return {
      featuredPlaylists: []
    }
  },
  componentDidMount() {
    window.fetch('http://localhost:3000/featuredPlaylist')
      .then(res => res.json())
      .then(playlists => this.setState({featuredPlaylists: playlists.slice(0, 4)}))
  },
  render() {
    var {featuredPlaylists} = this.state
    return <div id="musicStrip">
      <div class="section-divider">
        <div id="featuredPlaylistLabel">¡Dale play y disfruta!</div>
        <div class="section-auxiliary">
          <button class="button button-icon-only disabled spoticon-chevron-left-16"></button>
          <button class="button button-icon-only spoticon-chevron-right-16"></button>
        </div>
      </div>
      <div id="featuredPlaylists">
        <div class="row">
          <div class="crsl-inner">
            {featuredPlaylists.map(playlist => <BigCard key={playlist.id} playlist={playlist}/>)}
          </div>
        </div>
      </div>
    </div>
  }
})

module.exports = MusicStrip
