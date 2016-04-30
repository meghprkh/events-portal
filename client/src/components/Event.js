import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadEvent } from '../actions'
import { LOADING, LOADED, ERROR } from '../constants'

class Root extends Component {
  componentDidMount() {
    this.props.dispatch(loadEvent(this.props.id))
  }

  render() {
    const { status, data } = this.props;
    return (
      <div>
        <h1>Event page</h1>
        {status === LOADING && <p>Loading</p>}
        {status !== ERROR && (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
            <p>On {data.date}</p>
          </div>
        )}
      </div>
    )
  }
}

export default connect(state => {
  return {
    ...state.event,
    id: state.routing.ctx.params['event_id']
  }
})(Root)
