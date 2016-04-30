import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

let createStoreWithMiddleware;

if (process.env.NODE_ENV === 'production') {
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
  )(createStore)
} else {
  const loggerMiddleware = createLogger()
  createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore)
}

function configureStore(initialState) {
  let store = createStoreWithMiddleware(rootReducer, initialState)
  return store;
}

export default configureStore
