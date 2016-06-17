import React, { Component } from 'react'

import DumbLogin from '../dumb/Login'

const Login = React.createClass({
  onTabChange(index) {
    if (index == 1) router.navigate('/user/login');
    else if (index == 2) router.navigate('/group/login');
  },
  onSubmit(username, password) {
    const { type, onLogin } = this.props;
    request.post(`/${type}/login`)
           .send({ username, password})
           .end((err, res) => {
             if (!err) onLogin(type, res.body.email, res.body.name);
           });
  },
  render() {
    const { type, loggedInAs } = this.props;
    return (
      <div>
        {loggedInAs != 'none' && (
          <span>You are already logged in. You may want to go back to <a href='#/'>home page</a></span>
        )}
        {loggedInAs == 'none' && (
          <DumbLogin onSubmit={e => {
              e.preventDefault();
              this.onSubmit(e.target.email.value, e.target.password.value);
            }} tab={type == 'user' ? 1 : 2} onTabChange={this.onTabChange}/>
        )}
      </div>
    )
  }
});

export default Login
