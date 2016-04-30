import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Events from './Events'
import Event from './Event'
import { changeRoute } from '../actions'
import page from 'page'

const EVENT_PAGE = 'EVENT_PAGE'
const EVENTS_PAGE = 'EVENTS_PAGE'

const App = React.createClass({
  componentDidMount: function() {
    const { dispatch } = this.props;
    page('/', ctx => {
      dispatch(changeRoute(EVENTS_PAGE, ctx))
    })
    page('/events', ctx => {
      dispatch(changeRoute(EVENTS_PAGE, ctx))
    })
    page('/event/:event_id', ctx => {
      dispatch(changeRoute(EVENT_PAGE, ctx))
    })
    page()
  },
  render () {
    var pathComponents = {
      [EVENT_PAGE]: (<Event/>),
      [EVENTS_PAGE]: (<Events/>),
    }
    return (
      <div>
        {pathComponents[this.props.routing.path]}
      </div>
    )
  }
})

export default connect(state => state)(App)
