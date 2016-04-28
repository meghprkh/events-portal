module.exports = {
  isUser: (req, res, next) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) res.sendStatus(401);
    if (req.user && req.user.type == 'User') next();
    else res.send(401);
  },
  isGroup: (req, res, next) => {
    if (!req.isAuthenticated || !req.isAuthenticated()) res.sendStatus(401);
    if (req.user && req.user.type == 'Group') next();
    else res.send(401);
  }
}
