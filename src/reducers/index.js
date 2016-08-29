import {combineReducers} from 'redux'

import season from './seasonReducer'
import league from './leagueReducer'
import round from './roundReducer'


export default combineReducers({
	season,league, round
})