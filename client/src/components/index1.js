import React from 'react'
import MyGroups from './dumb/MyGroups'

const MyAwesomeReactComponent = () => (
  <div>
    <MyGroups groupList={[{name: 'Web Dev Club', description: 'MTG', isMember: true},
    {name: 'Music Club', description: 'Music Club of IIIT', isMember: false}]} />
  </div>
);

export default MyAwesomeReactComponent;
