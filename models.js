var Sequelize = require('sequelize')
var sequelize = new Sequelize('itproj', 'itproj_user', 'password');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  displayName: Sequelize.STRING
});

exports.User = User

var Group = sequelize.define('group', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  displayName: Sequelize.STRING
});

exports.Group = Group

User.belongsToMany(Group, {through: 'UserGroup'});
Group.belongsToMany(User, {through: 'UserGroup'});


// Create Sample models
sequelize.sync().then(() => {
  return User.bulkCreate([
    {username: 'megh@gmail.com', password: 'password', displayName: 'Megh'},
    {username: 'sourabh@gmail.com', password: 'password', displayName: 'Sourabh'}
  ]);
}).then(() => {
  return Group.bulkCreate([
    {username: 'webdev@gmail.com', password: 'password', displayName: 'Web-dev club'},
    {username: 'music@gmail.com', password: 'password', displayName: 'Music club'}
  ]);
}).then(() => {
  console.log('> Sample models created successfully');
});
