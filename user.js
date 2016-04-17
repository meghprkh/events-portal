var router = require('express').Router();
var passport = require('passport');
var middleware = require('./middleware');

router.get('/', middleware.isUser, (req, res) => {
  res.send(req.user);
})

router.get('/groups', middleware.isUser, (req, res) => {
  req.user.getGroups().then(groups => {
    res.send(groups);
  })
});

router.get('/events', middleware.isUser, (req, res) => {
  req.user.getEvents().then(events => {
    res.send(events);
  })
});

router.post('/login',
  passport.authenticate('user'),
  (req, res) => {
    res.send(req.user)
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router
