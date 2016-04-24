var React = require('react')
var Fluxxor = require("fluxxor")
var FluxMixin = Fluxxor.FluxMixin(React);
var GithubUserInput = require('./github-user-input.jsx')
var RepositoryList = require('./repository-list.jsx')


var App = React.createClass({
  mixins: [FluxMixin],
  render: function() {
    return (
      <div>
        <GithubUserInput />
        <RepositoryList />
      </div>
    )
  }
}) 

module.exports = App;
