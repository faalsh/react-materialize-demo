export default function reducer(state={
	name: "initial name",
	age: 0,
	toggled: false
}, action){
	switch(action.type){
		case "USER_CHANGE_NAME": {
			return {...state, name: action.payload}
		}
		case "USER_CHANGE_AGE": {
			return {...state, age: action.payload}
		}
		case "USER_TOGGLE": {
			return {...state, toggled: !state.toggled}
		}
		default: 
			return state;
	}
}