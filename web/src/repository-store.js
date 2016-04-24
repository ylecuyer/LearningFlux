var Fluxxor = require('fluxxor');
var superagent = require('superagent')
var constants = require('./constants.js')

var RepositoryStore = Fluxxor.createStore({

  initialize: function() {
    this.repositories = []

    this.bindActions(
      constants.GET_REPOSITORIES, this.fetchRepositories 
    )
  },

  fetchRepositories: function(playload) {
    var username = playload.username;
      
    superagent
      .get('https://api.github.com/users/'+username+'/repos')
      .end(this.onSuccess);
  },

  onSuccess: function(err, res) {
    
      if (err == null) {
        this.repositories = res.body 
      }
      else {
        this.repositories = []
      }

      this.emit('change');
  },

  getRepositories: function() {
    return this.repositories
  }

})

module.exports = RepositoryStore;
