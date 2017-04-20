var redux = require('redux');

console.log('Starting redux example');


var reducer = (state = {name:'Anonymous'}, action) => {
   // state = state || {name: 'Anonymous'};
  
   switch (action.type) {
   	case 'CHANGE_NAME':
   	   return {
          ...state,
          name: action.name
   	   };
   	   default:
   	     return state;
   }

};

var store = redux.createStore(reducer);

//subscribe to changes
store.subscribe(() => {
	var state = store.getState();
	console.log('Name is', state.name);
})

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Michael'
});

store.dispatch({
   type: 'CHANGE_NAME',
   name: 'Emily'
});