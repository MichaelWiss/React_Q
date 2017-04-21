var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


//load foundation
require('style!css!foundation-sites/dist/foundation.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

// ReactDOM.render(
//  <p>Boilerplate 3 Project</p>
//   document.getElementById('app')
// );

require('./redux-example.jsx');
// require('./redux.todo-example.jsx');
