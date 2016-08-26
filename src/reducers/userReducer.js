import * as types from '../actions/actionTypes';


export default function reducer(state={
	name: "initial name",
	age: 0,
	toggled: false,
	fetching: false,
    fetched: false,
    error: null,
    leagues: [],
}, action){
	switch(action.type){
		case types.USER_CHANGE_NAME: {
			return {...state, name: action.payload}
		}
		case types.USER_CHANGE_AGE: {
			return {...state, age: action.payload}
		}
		case types.USER_TOGGLE: {
			return {...state, toggled: !state.toggled}
		}
		case types.FETCH_USER_PENDING: {
			return {...state, fetching: true}
		}
		case types.FETCH_USER_REJECTED: {
			return {...state, fetching: false, error: action.payload}
		}
		case types.FETCH_USER_FULFILLED: {
			return {...state, fetching: false, fetched: true}
		}
		case types.FETCH_LEAGUES_PENDING: {
			return {...state, fetching: true}
		}
		case types.FETCH_LEAGUES_REJECTED: {
			return {...state, fetching: false}
		}
		case types.FETCH_LEAGUES_FULFILLED: {
			return {...state, fetching: false, fetched: true, leagues: action.payload.data.data.leagues}
		}
		default: 
			return state;
	}
}