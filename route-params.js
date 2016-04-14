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
}
