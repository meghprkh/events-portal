var express = require('express');
var app = express();
var passport = require('passport');
var ensureAuthenticated = require('connect-ensure-login').ensureAuthenticated();

var middleware = require('./middleware');

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

require('./auth.js')(app)
app.use('/group', require('./group.js'))
app.use('/event', require('./event.js'))
require('./route-params.js')(app)

app.get('/', (req, res) => {
  res.render('home', { user: req.user });
});

app.get('/profile', ensureAuthenticated, (req, res) => {
  res.render('profile', { user: req.user });
});

app.get('/group/:group_id', (req, res) => {
  res.render('profile', { user: req.pgroup });
});

app.get('/user/groups', middleware.isUser, (req, res) => {
  req.user.getGroups().then(groups => {
    res.send(groups);
    console.log(groups)
  })
});

app.get('/user/subscribe/:group_id', middleware.isUser, (req,res) => {
  req.user.addGroup(req.pgroup).then(() => res.send('Success'));
})

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
