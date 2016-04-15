var router = require('express').Router();
var passport = require('passport');
var models = require('./models');

router.get('/', (req, res) => {
  models.Group.findAll().then(groups => {
    res.send(groups)
  })
})

router.post('/login',
  passport.authenticate('group'),
  (req, res) => {
    res.send(req.user)
  }
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router
