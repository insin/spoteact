require('./GenresMoods.css')

var React = require('react')

var MiniCard = require('./MiniCard')

var GenresMoods = React.createClass({
  getInitialState() {
    return {
      genres: []
    }
  },
  componentDidMount() {
    window.fetch('http://localhost:3000/genres')
      .then(res => res.json())
      .then(genres => this.setState({genres}))
  },
  render() {
    var {genres} = this.state
    return <div>
      <div class="section-divider genres-section">
        <div>Genres &amp; Moods</div>
      </div>
      <div id="genresAndMoods">
        <div class="row mini-container">
          {genres.map(genre => <MiniCard key={genre.name} genre={genre}/>)}
        </div>
      </div>
    </div>
  }
})

module.exports = GenresMoods
