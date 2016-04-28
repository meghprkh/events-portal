var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var models = require('./models')

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use('user', new LocalStrategy(
  function(username, password, cb) {
    models.User.findOne({
      where: {
        username: username,
        password: password
      }
    }).then(user => {
      if (!user) return cb(null, false, 'Incorrect credentials!');
      user.type = 'User'
      return cb(null, user);
    }).catch(err => {
      return cb(err);
    });
  }));

passport.use('group', new LocalStrategy(
  function(username, password, cb) {
    models.Group.findOne({
      where: {
        username: username,
        password: password
      }
    }).then(user => {
      if (!user) return cb(null, false, 'Incorrect credentials!');
      user.type = 'Group'
      return cb(null, user);
    }).catch(err => {
      return cb(err);
    });
  }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, {id: user.id, type: user.type});
});

passport.deserializeUser(function(uid, cb) {
  models[uid.type].findById(uid.id).then(user => {
    user.type = uid.type
    return cb(null, user);
  }).catch(err => {
    return cb(err)
  });
});
