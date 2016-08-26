import * as types from './actionTypes';
import axios from "axios";
// import leagues from '../data/leagues.json'

const config = {
  headers: {'X-Mashape-Key': 'KEY_HERE'}
};

export function changeUserName(name){
	return {
		type: types.USER_CHANGE_NAME,
		payload: name
	}
}

export function changeUserAge(age){ 
	return {
		type: types.USER_CHANGE_AGE,
		payload: age
	}
}

export function toggle(){
	return {
		type: types.USER_TOGGLE
	}
}

export function fetchUser(){

	return {

		type: types.FETCH_USER,
		payload: axios.get("http://rest.learncode.academy/api/test123/tweets")
	}
}

export function fetchLeagues(){


	return {

		type: types.FETCH_LEAGUES,
		payload: axios.get("https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues", config)
	}
}

 