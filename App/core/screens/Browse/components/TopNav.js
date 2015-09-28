require('./TopNav.css')

var React = require('react')

var TopNav = React.createClass({
  render() {
    return <div class="local-nav">
      <div class="navbar">
        <ul class="nav">
          <li class="active"><a href>Overview</a></li>
          <li><a href>Charts</a></li>
          <li><a href>Genres &amp; Moods</a></li>
          <li><a href>New Releases</a></li>
        </ul>
      </div>
    </div>
  }
})

module.exports = TopNav
