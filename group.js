var router = require('express').Router();
var passport = require('passport');
var models = require('./models');
var middleware = require('./middleware');

router.get('/', (req, res) => {
  models.Group.findAll().then(groups => {
    res.send(groups)
  })
})

router.get('/:group_id', (req, res) => res.send(req.group))

router.get('/:group_id/subscribe', middleware.isUser, (req, res) => {
  req.user.addGroup(req.pgroup).then(() => res.send());
})

router.get('/:group_id/unsubscribe', middleware.isUser, (req, res) => {
  req.user.removeGroup(req.pgroup).then(() => res.send());
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
