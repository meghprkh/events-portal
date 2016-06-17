import React from 'react'

import EventList from '../dumb/EventDisplay'

const Events = React.createClass({
  getInitialState() {
    return {data: []}
  },
  componentWillMount() {
    request.get('/event').end((err, res) => !err && this.setState({data: res.body}));
  },
  toggleState(id, to) {
    request.get(`/event/${id}/${to}`).end((err, res) => !err && this.setState({
      data: this.state.data.map(el => {
        if (el.id == id) el.going = (to == 'going') ? true : false;
        return el;
      })
    }))
  },
  render() {
    const { loggedInAs } = this.props;
    const { data } = this.state;
    return (
      <EventList eventList={data} isUser={loggedInAs == 'user'} toggleState={this.toggleState}/>
    )
  }
})

export default Events
