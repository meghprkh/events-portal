var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

var models = require('./models')

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy(
  function(username, password, cb) {
    models.User.findOne({
      where: {
        username: username,
        password: password
      }
    }).then(user => {
      if (!user) return cb(null, false, 'Incorrect credentials!');
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
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  models.User.findById(id).then(user => {
    return cb(null, user);
  }).catch(err => {
    return cb(err)
  });
});
