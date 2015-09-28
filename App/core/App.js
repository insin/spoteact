require('./App.css')

var React = require('react')

var LeftNav = require('./LeftNav')

var App = React.createClass({
  render() {
    return <div id="wrapper">
      <LeftNav/>
      <div id="main" class="container-fluid">
        {this.props.children}
      </div>
    </div>
  }
})

module.exports = App
