import {applyMiddleware, createStore} from 'redux'
import createLogger  from 'redux-logger'
import promise from 'redux-promise-middleware'
import reducer from './reducers'


const logger = createLogger();
const middleware = applyMiddleware(promise(), logger)

export default createStore(reducer, middleware)