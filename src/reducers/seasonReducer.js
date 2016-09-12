import * as types from '../actions/actionTypes';


export default function reducer(state={
	fetching: false,
    fetched: false,
    error: null,
    league: null,
    seasons: [],
    
}, action){
	switch(action.type){
		case types.FETCH_SEASONS_PENDING: {
			return {...state, fetching: true, league: action.meta.league, seasons:[]}
		}
		case types.FETCH_SEASONS_REJECTED: {
			return {...state, fetching: false}
		}
		case types.FETCH_SEASONS_FULFILLED: {
			return {...state, fetching: false, fetched: true, league: action.meta.league, seasons: action.payload.data.data.seasons}
		}
		default: 
			return state;
	} 
}