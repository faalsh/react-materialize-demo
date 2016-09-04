import * as types from './actionTypes';
import axios from "axios";
// import leagues from '../data/leagues.json'

const config = {
  headers: {'X-Mashape-Key': 'I2TlMv3VIZmshP2FVfjpAxTAT0Rsp12q4fyjsnQhPbcSmDag1W'}
};


export function fetchLeagues(){


	return {

		type: types.FETCH_LEAGUES,
		payload: axios.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues", config)
	}
}

export function fetchSeasons(league){


	return {

		type: types.FETCH_SEASONS,
		meta: {league:league},
		payload: axios.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons", config)
	}
}


export function fetchRounds(league, season){


	return {

		type: types.FETCH_ROUNDS,
		meta: {league: league, season:season},
		payload: axios.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds", config)
	}
}
