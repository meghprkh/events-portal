var router = require('express').Router();
var passport = require('passport');
var models = require('./models');
var middleware = require('./middleware');
require('./route-params.js')(router)

router.get('/', (req, res) => {
  if (req.user && req.user.type == 'User') {
    models.Group.findAll({
      attributes: { exclude: ['password'] },
      include: [{
        model: models.User,
        where: {id: req.user.id},
        required: false,
        attributes: ['id']
      }]
    }).then(gs => {
      var groups = gs.map(g => {
        var group = g.toJSON()
        if (group.users.length) group.subscribed = true;
        else group.subscribed = false;
        group.users = undefined;
        return group
      })
      res.send(groups)
    });
  } else {
    models.Group.findAll({
      attributes: { exclude: ['password'] }
    }).then(groups => {
      res.send(groups)
    })
  }
})

router.get('/:group_id', (req, res) => {
  var group = req.pgroup.toJSON();
  if (req.user && req.user.type == 'User') {
    req.pgroup.hasUser(req.user).then(subscribed => {
      group.subscribed = subscribed;
      res.send(group)
    })
  }
  else res.send(group)
})

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
