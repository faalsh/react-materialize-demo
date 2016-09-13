import * as types from '../actions/actionTypes';


export default function reducer(state={
	fetching: false,
    fetched: false,
    error: null,
    league: null,
    season: null,
    round: null,
    matches: [],
    
}, action){
	switch(action.type){
		case types.FETCH_MATCHES_PENDING: {
			return {...state, fetching: true, league: action.meta.league, season: action.meta.season, round: action.meta.round, matches:[]}
		}
		case types.FETCH_MATCHES_REJECTED: {
			return {...state, fetching: false}
		}
		case types.FETCH_MATCHES_FULFILLED: {
			return {...state, fetching: false, fetched: true, league: action.meta.league, 
				season: action.meta.season, round: action.meta.round, matches: action.payload.data.data.matches}
		}
		default: 
			return state;
	} 
}