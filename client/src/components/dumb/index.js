import React from 'react'
import Header from './Header';
import Login from './Login'
import GroupDisplay from './GroupDisplay'
import EventDisplay from './EventDisplay'

const MyAwesomeReactComponent = () => (
  <div>
    <Header loggedInAs='user'/>
    <Login />
    <GroupDisplay groupList={[{name: 'Web-Dev Club',
      description: 'Web Development club of IIIT'},
      {name: 'Music Club', description: 'Music club of IIIT'}]} />
    <EventDisplay eventList={[{name: 'Music Club concert', description: 'Concert',
    date: '30/04/2016', isGoing: true}, {name: 'Web Dev Quiz', description: 'agegwe', date: '1234', isGoing: false}]}
    isUser={true} />
  </div>
);

export default MyAwesomeReactComponent;
