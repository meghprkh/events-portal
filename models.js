var Sequelize = require('sequelize')
var sequelize = new Sequelize('itproj', 'itproj_user', 'password');

var User = sequelize.define('user', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  displayName: Sequelize.STRING
});

exports.User = User


// Create Sample models
sequelize.sync().then(() => {
  return User.bulkCreate([
    {username: 'megh@gmail.com', password: 'password', displayName: 'Megh'},
    {username: 'sourabh@gmail.com', password: 'password', displayName: 'Sourabh'}
  ]);
}).then(() => {
  console.log('> Sample models created successfully');
});
