var redux = require('redux');

console.log('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

// Name reducer and action generators
// ----------------------------------

var nameReducer = (state= 'Anonymous', action) => {
    switch (action.type) {
    	case 'CHANGE_NAME':
    	  return action.name
    	default:
    	 return state;
    }
};

var changeName = (name) => {
   return {
   	type : 'CHANGE_NAME',
   	name
   }
};

// Hobbies reducer and action generators
// --------------------------------------

var hobbiesReducer = (state = [], action) => {
      switch(action.type) {
      	case 'ADD_HOBBY':
   	      return [
            ...state,
            {
              id: nextHobbyId++,
              hobby: action.hobby	
            }
          ];
          case 'REMOVE_HOBBY':
         return state.filter((hobby) => hobby.id !== action.id)
        default:
         return state;
     }
};

var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby
	}
};

var removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
	}
}
// Movie reducer and action generators
// ----------------------------------

var moviesReducer = (state = [], action) => {
    switch (action.type) {
    	case 'ADD_MOVIE':
    	    return [
            ...state,
            {
            	id: nextMovieId++,
            	title: action.title,
            	genre: action.genre
            }
   	   	  ]
    	case "REMOVE_MOVIE":
    	  return state.filter((movie) => movie.id !== action.id)

    	default: 
    	  return state;
    }
};

var addMovie = (title, genre) => {
	return {
		type: 'ADD_MOVIE',
		title,
		genre
	}
};

var removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	}
}

var reducer = redux.combineReducers({
	name: nameReducer,
	hobbies: hobbiesReducer,
	movies: moviesReducer
})

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	console.log('Name is', state.name);
	document.getElementById('app').innerHTML = state.name;

	console.log('New state', store.getState());
})

var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));

store.dispatch({
   type: 'REMOVE_HOBBY',
   id: 2
});

store.dispatch(changeName('Emily'));

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Mad Max',
	genre: 'Action'
});

store.dispatch({
	type: 'ADD_MOVIE',
	title: 'Rogue One',
	genre: 'Action'
});

store.dispatch({
	type: 'REMOVE_MOVIE',
	id: 1
});
