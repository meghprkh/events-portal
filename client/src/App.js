import React, { PropTypes } from 'react'
import { Location, Locations, Link } from 'react-router-component';

import Header from './components/dumb/Header'

const MainPage = props => (
  <div>
    This is home page<br/>
    <Link href='/users/megh'>Go to user page</Link>
  </div>
)

const UserPage = props => (
  <div>
    Hi {props.username} <br/>
    {props.auth && 'Props work too'} <br/>
    <Link href='/'>Home</Link>
  </div>
)


const App = React.createClass({
  render () {
    return (
      <div>
        <Header/>
        <Locations hash>
          <Location path="/" handler={MainPage} />
          <Location path="/users/:username(/)" handler={UserPage} auth={true}/>
        </Locations>
      </div>
    )
  }
})

export default App
