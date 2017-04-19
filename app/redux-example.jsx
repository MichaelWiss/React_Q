var redux = require('redux');

console.log('Starting redux example');


var reduce = (state = 'Anonymous', action) => {
   // state = state || {name: 'Anonymous'};
}
var store = redux.createStore(reducer);