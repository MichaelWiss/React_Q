var nameReducer = (state= 'Anonymous', action) => {
    switch (action.type) {
    	case 'CHANGE_NAME':
    	  return action.name;
    	default:
    	 return state;
    };
};

var nextHobbyId = 1;

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
         return state.filter((hobby) => hobby.id !== action.id);
        default:
         return state;
     }
};