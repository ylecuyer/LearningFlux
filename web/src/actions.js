var constants = require('./constants.js')

var actions = {
  getRepositories: function(username) {
    this.dispatch(constants.GET_REPOSITORIES, {username: username})
  }
}

module.exports = actions;
