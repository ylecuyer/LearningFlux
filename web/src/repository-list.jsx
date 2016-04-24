var React = require('react')
var Fluxxor = require("fluxxor")
var FluxMixin = Fluxxor.FluxMixin(React)
var StoreWatchMixin = Fluxxor.StoreWatchMixin

var RepositoryList = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("RepositoryStore")],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
      repositories: flux.store("RepositoryStore").getRepositories()
    };
  },

  render: function() {
    return (
      <ul>
        {
          this.state.repositories.map(function(repository) {
            return <li>{repository.name}</li>
          })
        }
      </ul>
    )
  }
}) 

module.exports = RepositoryList;
