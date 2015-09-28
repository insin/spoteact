require('./Header.css')

var React = require('react')

var Header = React.createClass({
  propTypes: {
    playlist: React.PropTypes.object.isRequired
  },
  render() {
    var {image, name, desc, followers} = this.props.playlist
    return <div class="header-container">
      <div class="col-1">
        <div class="media-image-internal" style={{backgroundImage: `url('${image}'`}}/>
      </div>
      <div class="col-2">
        <div class="playlist">PLAYLIST</div>
        <div class="playlist-title">{name}</div>
        <div class="playlist-desc">{desc}</div>
        <div class="action-buttons">
          <button class="play-btn btn btn-small">PLAY</button>
          <button class="follow-btn btn btn-small">FOLLOW</button>
          <button class="more-btn btn"></button>
        </div>
      </div>
      <div class="col-3">
        <div class="stats">
          <div>FOLLOWERS</div>
          <div>{followers}</div>
        </div>
      </div>
    </div>
  }
})

module.exports = Header
