const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
  //esta funcion encuentra la autentificacion del usuario y lo redirecciona 
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Not Authorized.');
  res.redirect('/users/signin');
};

module.exports = helpers;
