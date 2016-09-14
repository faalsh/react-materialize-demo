import * as types from '../actions/actionTypes';


export default function reducer(state={
	fetching: false,
    fetched: false,
    error: null,
    league: null,
    season: null,
    rounds: [],
    
}, action){
	switch(action.type){
		case types.FETCH_ROUNDS_PENDING: {
			return {...state, fetching: true, league: action.meta.league, season: action.meta.season, rounds:[]}
		}
		case types.FETCH_ROUNDS_REJECTED: {
			return {...state, fetching: false}
		}
		case types.FETCH_ROUNDS_FULFILLED: {
			return {...state, fetching: false, fetched: true, league: action.meta.league, season: action.meta.season, rounds: action.payload.data.data.rounds}
		}
		case types.FETCH_LEAGUES_FULFILLED:
		case types.FETCH_SEASONS_FULFILLED: {
			return {...state,  fetched: false, league: null, season:null,  rounds: []}
		}

		default: 
			return state;
	} 
}