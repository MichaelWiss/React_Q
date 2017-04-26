var redux = require('redux');
var axios = require('axios');





var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('New state', store.getState());

	if (state.map.isFetching) {
	 document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
     document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>';
  }
});

var currentState = store.getState();
console.log('currentState', currentState);

fetchLocation();


store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Mad Max', 'Action'));

store.dispatch(addMovie('Rogue One', 'Action'));

store.dispatch(removeMovie(2));
