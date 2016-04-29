import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadEvents } from '../actions'
import { LOADING, LOADED, ERROR } from '../constants'

class Root extends Component {
  componentDidMount() {
    this.props.dispatch(loadEvents())
  }

  render() {
    const { status, data } = this.props;
    return (
      <div>
        {status === LOADING && <p>Loading</p>}
        {status !== ERROR && data.map(event => (
          <div key={event.id}>
            <h1>{event.name}</h1>
            <h3>{event.description}</h3>
            <p>On {event.date}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default connect(state => {
  return state.events
})(Root)
