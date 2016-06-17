import React from 'react'

import GroupList from '../dumb/GroupDisplay'

const Groups = React.createClass({
  getInitialState() {
    return {data: []}
  },
  componentWillMount() {
    request.get('/group').end((err, res) => !err && this.setState({data: res.body}));
  },
  toggleState(id, to) {
    request.get(`/group/${id}/${to}`).end((err, res) => !err && this.setState({
      data: this.state.data.map(el => {
        if (el.id == id) el.subscribed = (to == 'subscribe') ? true : false;
        return el;
      })
    }))
  },
  render() {
    const { loggedInAs } = this.props;
    const { data } = this.state;
    return (
      <GroupList groupList={data} isUser={loggedInAs == 'user'} toggleState={this.toggleState}/>
    )
  }
})

export default Groups
