import { createStore , applyMiddleware } from 'redux'
import reducers from '@reducers/reducers'
import thunk from 'redux-thunk'


/**
 * Middleware 
 */
/* let nuboxMiddleware = ({ getState }) =>{
  return (next) => (action) => {
    next(action)
    return 
  }
}  */

const createStoreWithMiddleware = applyMiddleware(thunk/* ,nuboxMiddleware */)(createStore)
const store = createStoreWithMiddleware(reducers)
export default store
