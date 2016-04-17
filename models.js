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


// Create Sample models
sequelize.sync().then(() => {
  return User.bulkCreate([
    {username: 'megh@gmail.com', password: 'password', name: 'Megh'},
    {username: 'sourabh@gmail.com', password: 'password', name: 'Sourabh'}
  ], {ignoreDuplicates: true});
}).then(() => {
  return Group.bulkCreate([
    {username: 'webdev@gmail.com', password: 'password', name: 'Web-dev club', description: 'This is the web-dev club'},
    {username: 'music@gmail.com', password: 'password', name: 'Music club', description: 'This is the music club'}
  ], {ignoreDuplicates: true});
}).then(() => {
  return Event.bulkCreate([
    {id: 1, name: 'Web Dev Quiz', date: Date.now(), description: 'Portal created by MTG'},
    {id: 2, name: 'Music Club concert', date: Date.now(), description: 'Concert by members of the music club'}
  ], {ignoreDuplicates: true});
}).then(() => {
  console.log('> Sample models created successfully');
});
