var passport = require('passport');

module.exports = function (app) {
  app.get('/group/login', (req, res) => res.render('group-login', {error: req.flash('error')}))

  app.post('/group/login',
    passport.authenticate('group', { successReturnToOrRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: true})
  );

  app.get('/group/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
}
