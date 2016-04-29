import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore)

function configureStore(initialState) {
  let store = createStoreWithMiddleware(rootReducer, initialState)
  return store;
}

export default configureStore
