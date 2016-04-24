var React = require('react')
var Fluxxor = require("fluxxor")
var FluxMixin = Fluxxor.FluxMixin(React);

var GithubUserInput = React.createClass({
  mixins: [FluxMixin],

  getInitialState: function() {
    return {username: ''};
  },

  handleChange: function(event) {
    this.setState({username: event.target.value});
  },

  render: function() {
    return (
      <p>Github username: <input type="text" onChange={this.handleChange} /><button onClick={this.fetchRepositories}>Fetch</button></p>
    );
  },

  fetchRepositories: function() {
    this.getFlux().actions.getRepositories(this.state.username);
  }
});

module.exports = GithubUserInput;
