require('./BigCard.css')

var React = require('react')
var {Link} = require('react-router')

var BigCard = React.createClass({
  propTypes: {
    playlist: React.PropTypes.object.isRequired
  },
  render() {
    var {playlist} = this.props
    var {image, name, desc} = playlist
    return <div class="mo-wrapper col-lg-2 col-md-3 col-sm-3">
      <div class="mo-image-wrapper">
        <Link to={`/playlist/${playlist.id}`} state={{playlist}}>
          <div class="mo-image" style={{backgroundImage: `url('${image}')`}}/>
        </Link>
      </div>
      <div class="mo-info description">
        <div class="mo-info-wrapper">
          <a class="mo-title" title="Discover Weekly" href="">
            <span class="mo-title-border">
              {name}
            </span>
          </a>
          <div class="mo-description">{desc}</div>
        </div>
      </div>
    </div>
  }
})

module.exports = BigCard
