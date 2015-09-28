require('./LeftNav.css')

var React = require('react')

var LeftNav = React.createClass({
  render() {
    return <div id="main-nav">
      <a href="/" id="logo" class="logo"></a>
      <ul id="nav-items">
        <li><a href class="spoticon-search-32 standard-menu-item"><span>Search</span></a></li>
        <li><a href class="spoticon-browse-32 standard-menu-item"><span>Browse</span></a></li>
        <li><a href class="spoticon-radio-32 standard-menu-item"><span>Radio</span></a></li>
        <li><a href class="spoticon-collection-32 standard-menu-item"><span>Your Music</span></a></li>
        <li><a href class="spoticon-follow-32 standard-menu-item"><span>Follow</span></a></li>
      </ul>
    </div>
  }
})

module.exports = LeftNav
