// custom middleware to check auth state
function isAuthenticated(req, res, next) {
  if (!/\/auth\//.test(req.url) && req.url !== "/home") {
    if (!req.session.isAuthenticated) {
      return res.redirect("/home"); // redirect to sign-in route
    }
  }
  next();
}

module.exports = {
  isAuthenticated,
};
