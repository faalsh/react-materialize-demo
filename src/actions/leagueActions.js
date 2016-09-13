import * as types from './actionTypes';
import axios from "axios";

function fetchWithAuth(url){
	return axios.get(url, {headers:{'X-Mashape-Key': ''}})
}

export function fetchLeagues(){


	return {

		type: types.FETCH_LEAGUES,
		payload: fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues")
	}
}

export function fetchSeasons(league){


	return {

		type: types.FETCH_SEASONS,
		meta: {league:league},
		payload: fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons")
	}
}


export function fetchRounds(league, season){

	return {

		type: types.FETCH_ROUNDS,
		meta: {league: league, season:season},
		payload: fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds")
	}
}

export function fetchMatches(league, season, round){

	return {

		type: types.FETCH_MATCHES,
		meta: {league: league, season:season, round:round},
		payload: fetchWithAuth("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/"+league+"/seasons/"+season+"/rounds/"+round+"/matches")
	}
}
