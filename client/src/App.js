import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Root from './components'

const store = configureStore();

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Root/>
      </Provider>
    )
  }
})

export default App
