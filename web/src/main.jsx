var React = require('react')
var ReactDOM = require('react-dom');
var Fluxxor = require('fluxxor');
var stores = require('./stores.js');
var actions = require('./actions.js');
var App = require('./app.jsx');

var flux = new Fluxxor.Flux(stores, actions);

ReactDOM.render(
  <App flux={flux} />,
  document.getElementById('app')
);
