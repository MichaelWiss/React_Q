var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: []
};
var nextHobbyId = 1;
var reducer = (state = stateDefault, action) => {
   // state = state || {name: 'Anonymous'};
  
   switch (action.type) {
   	case 'CHANGE_NAME':
   	   return {
          ...state,
          name: action.name
   	   };
   	   case 'ADD_HOBBY':
   	   return {
          ...state,
          hobbies: [
            ...state.hobbies,
            {
              id: nextHobbyId++,
              hobby: action.hobby	
            }
          ]
   	   };
   	   default:
   	     return state;
   }

};



var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('Name is', state.name);
	document.getElementById('app').innerHTML = state.name;
})

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch({
	type: 'CHANGE_NAME',
	name: 'Michael'
});

store.dispatch({
   type: 'ADD_HOBBY',
   hobby: 'Running'
});

store.dispatch({
   type: 'CHANGE_NAME',
   name: 'Emily'
});