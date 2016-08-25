import {combineReducers} from 'redux'

import emp from './empReducer'
import user from './userReducer'

export default combineReducers({
	emp,user
})