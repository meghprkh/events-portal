var express = require('express');
var app = express();
var passport = require('passport');

require('./passport_setup');

app.use(express.static('public'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('connect-flash')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

var api = require('express').Router();
require('./route-params.js')(api)
api.use('/user', require('./user.js'))
api.use('/group', require('./group.js'))
api.use('/event', require('./event.js'))
app.use('/api', api)

module.exports = (PORT) => {
  app.listen(PORT)
}
