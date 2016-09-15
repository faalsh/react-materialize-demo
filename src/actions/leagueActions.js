import * as types from './actionTypes';
import axios from "axios";
import leagues from '../data/leagues.json'
import seasons from '../data/seasons.json'
import rounds from '../data/rounds.json'
import matches from '../data/matches.json'

const DEV = false;

function fetchWithAuth(url){

	if(!DEV) {
		return axios.get(url, {headers:{'X-Mashape-Key': 'I2TlMv3VIZmshP2FVfjpAxTAT0Rsp12q4fyjsnQhPbcSmDag1W'}})
	} else if (url.indexOf('matches') > 0 ) {
		return new Promise((resolve, reject) => {
			resolve({data:matches})
		})
	} else if (url.indexOf('rounds') > 0 ) {
		return new Promise((resolve, reject) => {
			resolve({data:rounds})
		})
	} else if (url.indexOf('seasons') > 0 ) {
		return new Promise((resolve, reject) => {
			resolve({data:seasons})
		})
	} else {
		return new Promise((resolve, reject) => {
			resolve({data:leagues})
		})
	}
	
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
