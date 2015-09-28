require('./MiniCard.css')

var React = require('react')

var MiniCard = React.createClass({
  propTypes: {
    genre: React.PropTypes.object.isRequired
  },
  render() {
    var {image, name} = this.props.genre
    return <div class="col-sm-3 col-md-3 col-lg-2 media default image-grid genre">
      <a href="#">
        <div class="genreImage" style={{backgroundImage: `url('${image}')`}}>
          <div class="name">
            <span>{name}</span>
          </div>
        </div>
      </a>
    </div>
  }
})

module.exports = MiniCard
