export default function reducer(state={
	name: "",
	age: 0
}, action){
	switch(action.type){
		case "EMP_CHANGE_NAME": {
			return {...state, name: action.payload}
		}
		case "EMP_CHANGE_AGE": {
			return {...state, age: action.payload}
		}
		default: 
			return state;
	}
}