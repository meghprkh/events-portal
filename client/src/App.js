import React, { PropTypes } from 'react'
import { Location, Locations, Link } from 'react-router-component';

import Header from './components/dumb/Header'
import Login from './components/smart/Login'
import IndexPage from './components/dumb/'

import request from 'superagent-use'
request.use(req => req.type('form'))
request.use(require('superagent-prefix')('/api'))
window.request = request

const MainPage = props => (
  <div>
    This is home page
    <br/>
    {props.loggedInAs != 'none' && <span>Hi {props.name}, you are logged in as {props.loggedInAs}</span>}
    <br/>
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

const Logout = React.createClass({
  componentWillMount() {
    request.get(`/${this.props.loggedInAs}/logout`).end((err, res) => {
      if (!err) this.props.onLogout();
    });
  },
  render() {{
    return <span/>
  }}
})

const App = React.createClass({
  getInitialState() {
    return {
      loggedInAs: 'none',
      email: '',
      name: ''
    };
  },
  onLogin(type, email, name) {
    this.setState({loggedInAs: type, email, name}, () => router.navigate('/'));
  },
  onLogout() {
    this.setState(this.getInitialState(), () => router.navigate('/'));
  },
  render () {
    const { loggedInAs, name, email } = this.state;
    return (
      <div>
        <Header loggedInAs={loggedInAs}/>
        <Locations hash ref={ref => window.router = ref}>
          <Location path="/" handler={MainPage}
                    loggedInAs={loggedInAs} name={name} email={email}/>
          <Location path="/logout" handler={Logout} onLogout={this.onLogout}
                    loggedInAs={loggedInAs} name={name} email={email}/>
          <Location path={/\/(user|group)\/login/} urlPatternOptions={['type']}
                    handler={Login} onLogin={this.onLogin}
                    loggedInAs={loggedInAs} name={name} email={email}/>
          <Location path="/users/:username(/)" handler={UserPage} auth={true}/>
        </Locations>
      </div>
    )
  }
})

export default App
