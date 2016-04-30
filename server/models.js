var Sequelize = require('sequelize')
var sequelize = new Sequelize('itproj', 'itproj_user', 'password');

var User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

exports.User = User

var Group = sequelize.define('group', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: Sequelize.STRING
});

exports.Group = Group

var Event = sequelize.define('event', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

exports.Event = Event;

User.belongsToMany(Group, {through: 'UserGroup'});
Group.belongsToMany(User, {through: 'UserGroup'});
Event.belongsTo(Group);
Group.hasMany(Event);
User.belongsToMany(Event, {through: 'UserEvent'})
Event.belongsToMany(User, {through: 'UserEvent'})

var users;

// Create Sample models
sequelize.sync().then(() => {
  return User.bulkCreate([
    {id: 1, username: 'megh@gmail.com', password: 'password', name: 'Megh'},
    {id: 2, username: 'sourabh@gmail.com', password: 'password', name: 'Sourabh'}
  ], {ignoreDuplicates: true});
}).then((usersIn) => {
  users = usersIn;
  return Group.bulkCreate([
    {id: 1, username: 'webdev@gmail.com', password: 'password', name: 'Web-dev club', description: 'This is the web-dev club'},
    {id: 2, username: 'music@gmail.com', password: 'password', name: 'Music club', description: 'This is the music club'}
  ], {ignoreDuplicates: true});
}).then(() => {
  return Event.bulkCreate([
    {id: 1, name: 'Web Dev Quiz', date: Date.now(), description: 'Portal created by MTG', groupId: 1},
    {id: 2, name: 'Music Club concert', date: Date.now(), description: 'Concert by members of the music club', groupId: 2}
  ], {ignoreDuplicates: true});
}).then(() => users[0].addGroup(1))
.then(() => users[1].addGroup(2))
.then(() => users[0].addEvents([1, 2]))
.then(() => users[1].addEvents(2))
.then(() => {
  console.log('> Sample models created successfully');
});
