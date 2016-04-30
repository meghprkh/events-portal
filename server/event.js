var router = require('express').Router();
var models = require('./models');
var middleware = require('./middleware')
require('./route-params.js')(router)

router.get('/', (req, res) => {
  if (req.user && req.user.type == 'User') {
    models.Event.findAll({
      include: [{
        model: models.User,
        where: {id: req.user.id},
        required: false,
        attributes: ['id']
      }]
    }).then(es => {
      var events = es.map(e => {
        var event = e.toJSON()
        if (event.users.length) event.going = true;
        else event.going = false;
        event.users = undefined;
        return event
      })
      res.send(events)
    });
  }
  else models.Event.findAll().then(events => res.send(events));
})

router.get('/:event_id', (req, res) => {
  var event = req.pevent.toJSON();
  if (req.user && req.user.type == 'User') {
    req.pevent.hasUser(req.user).then(going => {
      event.going = going;
      res.send(event)
    })
  }
  else res.send(event)
})

router.get('/:event_id/going', middleware.isUser, (req, res) => {
  req.user.addEvent(req.pevent).then(() => res.send())
})

router.get('/:event_id/notgoing', middleware.isUser, (req, res) => {
  req.user.removeEvent(req.pevent).then(() => res.send())
})

module.exports = router
