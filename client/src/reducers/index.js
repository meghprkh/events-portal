import { combineReducers } from 'redux'
import events from './events'
import event from './event'
import routing from './routing'

export default combineReducers({
  events,
  event,
  routing
})
