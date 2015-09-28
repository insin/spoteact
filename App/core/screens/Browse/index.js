require('./Browse.css')

var React = require('react')

var TopNav = require('./components/TopNav')
var MusicStrip = require('./components/MusicStrip')
var GenresMoods = require('./components/GenresMoods')

var Browse = React.createClass({
  getInitialState() {
    return {
      name: 'Browse'
    }
  },
  componentDidMount() {
    setTimeout(() => this.setState({name: 'Introduction to React'}), 2000)
  },
  render() {
    return <div class="Browse">
      <h1 class="main-header">{this.state.name}</h1>
      <TopNav/>
      <MusicStrip/>
      <GenresMoods/>
    </div>
  }
})

module.exports = Browse
