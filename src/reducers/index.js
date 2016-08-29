import {combineReducers} from 'redux'

import season from './seasonReducer'
import league from './leagueReducer'

export default combineReducers({
	season,league
})