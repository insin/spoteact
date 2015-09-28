var React = require('react')

var Header = require('./components/Header')
var InfoBar = require('./components/InfoBar')
var List = require('./components/List')

var Playlist = React.createClass({
  getInitialState() {
    return {
      playlist: this.props.location.state.playlist
    }
  },
  render() {
    var {playlist} = this.state
    return <div class="Playlist">
      <Header playlist={playlist}/>
      <InfoBar/>
      <List playlist={playlist.playlist}/>
    </div>
  }
})

module.exports = Playlist
