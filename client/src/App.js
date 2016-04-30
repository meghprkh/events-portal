import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Root from './components'
import Event from './components/Event'
import { changeRoute } from './actions'
import page from 'page'

const store = configureStore();

const App = React.createClass({
  componentDidMount() {
    page('/', changeRoute)
    page('/events', changeRoute)
    page('/event/:event_id', changeRoute)
    page()
  },
  paths: {
    '/': <Root/>,
    '/event': <Event/>
  },
  render () {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
})

export default App
