import { combineReducers } from 'redux'
import { LOAD_EVENT_REQUEST, LOAD_EVENT_FAILURE, LOAD_EVENT_SUCCESS } from '../actions'
import { LOADING, LOADED, ERROR } from '../constants'

function status(state = LOADING, action) {
  switch (action.type) {
    case LOAD_EVENT_REQUEST:
      return LOADING;
    case LOAD_EVENT_FAILURE:
      return ERROR;
    case LOAD_EVENT_SUCCESS:
      return LOADED;
    default:
      return state;
  }
}

function data(state = [], action) {
  switch (action.type) {
    case LOAD_EVENT_SUCCESS:
      return action.data
    default:
      return state;
  }
}

export default combineReducers({
  status,
  data
})
