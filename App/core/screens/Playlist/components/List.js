require('./List.css')

var React = require('react')

var List = React.createClass({
  propTypes: {
    playlist: React.PropTypes.array.isRequired
  },
  render() {
    var {playlist} = this.props
    return <div class="playlist-list">
      <div class="row playlist-field-head">
        <div class="col-sm-4 col-sm-offset-1">SONG</div>
        <div class="col-sm-3">ARTIST</div>
        <div class="col-sm-3">ALBUM</div>
        <div class="col-sm-1 col-time"></div>
      </div>
      {playlist.map(item => <div class="row playlist-field" key={item.song}>
        <div class="col-sm-1">+</div>
        <div class="col-sm-4">{item.song}</div>
        <div class="col-sm-3">{item.artist}</div>
        <div class="col-sm-3">{item.album}</div>
        <div class="col-sm-1">{item.duration}</div>
      </div>)}
    </div>
  }
})

module.exports = List
