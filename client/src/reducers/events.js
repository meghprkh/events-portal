import { combineReducers } from 'redux'
import { LOAD_EVENTS_REQUEST, LOAD_EVENTS_FAILURE, LOAD_EVENTS_SUCCESS } from '../actions'
import { LOADING, LOADED, ERROR } from '../constants'

function status(state = LOADING, action) {
  switch (action.type) {
    case LOAD_EVENTS_REQUEST:
      return LOADING;
    case LOAD_EVENTS_FAILURE:
      return ERROR;
    case LOAD_EVENTS_SUCCESS:
      return LOADED;
    default:
      return state;
  }
}

function data(state = [], action) {
  switch (action.type) {
    case LOAD_EVENTS_SUCCESS:
      return action.data
    default:
      return state;
  }
}

export default combineReducers({
  status,
  data
})
