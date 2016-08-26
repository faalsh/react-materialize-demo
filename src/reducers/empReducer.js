import * as types from '../actions/actionTypes';

export default function reducer(state={
	name: "",
	age: 0
}, action){
	switch(action.type){
		case types.EMP_CHANGE_NAME: {
			return {...state, name: action.payload}
		}
		case types.EMP_CHANGE_AGE: {
			return {...state, age: action.payload}
		}
		default: 
			return state;
	}
}