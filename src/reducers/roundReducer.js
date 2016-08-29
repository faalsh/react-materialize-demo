import * as types from '../actions/actionTypes';


export default function reducer(state={
	fetching: false,
    fetched: false,
    error: null,
    rounds: [],
    
}, action){
	switch(action.type){
		case types.FETCH_ROUNDS_PENDING: {
			return {...state, fetching: true}
		}
		case types.FETCH_ROUNDS_REJECTED: {
			return {...state, fetching: false}
		}
		case types.FETCH_ROUNDS_FULFILLED: {
			return {...state, fetching: false, fetched: true, rounds: action.payload.data.data.rounds}
		}
		default: 
			return state;
	} 
}