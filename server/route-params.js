var models = require('./models')

module.exports = app => {
  app.param('user_id', function (req, res, next, id) {
    models.User.findById(id).then(user => {
      req.puser = user
      next()
    }).catch(err => {
      console.error(err)
      next(err)
    })
  })

  app.param('group_id', function (req, res, next, id) {
    models.Group.findById(id).then(group => {
      req.pgroup = group
      next()
    }).catch(err => {
      console.error(err)
      next(err)
    })
  })

  app.param('event_id', function (req, res, next, id) {
    models.Event.findById(id).then(event => {
      req.pevent = event
      console.log('hi1')
      next()
    }).catch(err => {
      console.log('hi')
      console.error(err)
      next(err)
    })
  })
}
