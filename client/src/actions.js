import fetch from 'isomorphic-fetch'

export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST'
export const LOAD_EVENTS_FAILURE = 'LOAD_EVENTS_FAILURE'
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS'

export function loadEvents() {
  return dispatch => {
    dispatch({type: LOAD_EVENTS_REQUEST})
    return fetch('/api/event')
            .then(response => {
              if (!response.ok) throw 'Network error!'
              return response.json();
            })
            .then(events => {
              dispatch({
                type: LOAD_EVENTS_SUCCESS,
                data: events
              })
            })
            .catch(error => {
              console.log(error)
              dispatch({type: LOAD_EVENTS_FAILURE})
            })
  }
}
