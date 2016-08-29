import * as types from './actionTypes';
import axios from "axios";
// import leagues from '../data/leagues.json'

const config = {
  headers: {'X-Mashape-Key': ''}
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
		payload: axios.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons", config)
	}
}


export function fetchRounds(league, season){


	return {

		type: types.FETCH_ROUNDS,
		payload: axios.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds", config)
	}
}
