var express = require('express');
var app = express();
var passport = require('passport');

require('./passport_setup');

app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(require('connect-flash')());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', require('./user.js'))
app.use('/group', require('./group.js'))
app.use('/event', require('./event.js'))
require('./route-params.js')(app)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
