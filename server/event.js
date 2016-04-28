var router = require('express').Router();
var models = require('./models');
var middleware = require('./middleware')
require('./route-params.js')(router)

router.get('/', (req, res) => {
  models.Event.findAll().then(events => res.send(events));
})

router.get('/:event_id', (req, res) => {
  res.send(req.pevent)
})

router.get('/:event_id/going', middleware.isUser, (req, res) => {
  req.user.addEvent(req.pevent).then(() => res.send())
})

router.get('/:event_id/notgoing', middleware.isUser, (req, res) => {
  req.user.removeEvent(req.pevent).then(() => res.send())
})

module.exports = router
