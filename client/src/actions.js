import fetch from 'isomorphic-fetch'

export function loadData(url, action) {
  return dispatch => {
    dispatch({type: action + '_REQUEST'})
    return fetch(url)
            .then(response => {
              if (!response.ok) throw 'Network error!'
              return response.json();
            })
            .then(data => {
              dispatch({
                type: action + '_SUCCESS',
                data
              })
            })
            .catch(error => {
              console.log(error)
              dispatch({type: action + '_FAILURE'})
            })
  }
}


export const LOAD_EVENTS_REQUEST = 'LOAD_EVENTS_REQUEST'
export const LOAD_EVENTS_FAILURE = 'LOAD_EVENTS_FAILURE'
export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS'

export function loadEvents() {
  return loadData('/api/event', 'LOAD_EVENTS')
}


export const LOAD_EVENT_REQUEST = 'LOAD_EVENT_REQUEST'
export const LOAD_EVENT_FAILURE = 'LOAD_EVENT_FAILURE'
export const LOAD_EVENT_SUCCESS = 'LOAD_EVENT_SUCCESS'

export function loadEvent(id) {
  return loadData('/api/event/' + id, 'LOAD_EVENT')
}


export const ROUTE_CHANGE = 'ROUTE_CHANGE'

export function changeRoute(path, ctx) {
  return {
    type: ROUTE_CHANGE,
    path,
    ctx
  }
}
