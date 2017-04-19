var redux = require('redux');

console.log('Starting redux example');


var reducer = (state = {name:'Anonymous'}, action) => {
   // state = state || {name: 'Anonymous'};
   console.log('New action', action);
   switch (action.type) {
   	case 'CHANGE_NAME';
   	   return {
          ...state,
          name: action.name
   	   };
   	   default:
   	     return state;
   }

};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
	type: 'CHANGE_NAME',
	name: 'Michael'
};
store.dispatch(action);

console.log('Name should be Michael', store.getState());