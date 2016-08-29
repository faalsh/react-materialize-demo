import * as types from '../actions/actionTypes';


export default function reducer(state={
	fetching: false,
    fetched: false,
    error: null,
    leagues: [],
    
}, action){
	switch(action.type){
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