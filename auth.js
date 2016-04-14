var passport = require('passport');

module.exports = function (app) {
  app.get('/login', (req, res) => res.render('login', {error: req.flash('error')}))

  app.post('/login',
    passport.authenticate('local', { successReturnToOrRedirect: '/',
                                     failureRedirect: '/login',
                                     failureFlash: true})
  );

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
}
