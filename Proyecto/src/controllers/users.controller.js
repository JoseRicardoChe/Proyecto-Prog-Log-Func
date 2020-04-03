const usersCtrl = {};

// modelos
const User = require('../models/User');

const passport = require("passport");

//verificar la contraseña
usersCtrl.singup = async (req, res) => {
  let errors = [];
  const { name, email, sexo, carrera,semestre, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "La Contraseña no coincide." });
  }
  if (password.length < 4) {
    errors.push({ text: "La contraseña debe tener al menos 4 Caracteres" });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      sexo,
      carrera,
      semestre,
      password,
      confirm_password
    });
  } else {
    //Buscar coinsidencias por correo
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "El Correo Electronico esta en Uso");
      res.redirect("/users/signup");
    } else {
      // Guardar el nuevo usuario
      const newUser = new User({ name, email,sexo,carrera,semestre,password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "Registro Exitoso.");
      res.redirect("/users/signin");
    }
  }
};

//autentificacion de las notas por el usuario
usersCtrl.signin = passport.authenticate("local", {
    successRedirect: "/notes",
    failureRedirect: "/users/signin",
    failureFlash: true
  });
//para realizar la salida en la plataforma
usersCtrl.logout = (req, res) => {
  req.logout();//Cerrar sesión
  req.flash("success_msg", "Estas Desconectado Ahora.");
  res.redirect("/users/signin");
};

//controladores del perfil, actualizar 
usersCtrl.editar = async (req, res) => {
  res.render("users/actualizar");
};

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.renderSignUpForm = (req, res) => {
  res.render('users/signup');
};

usersCtrl.renderSigninForm = (req, res) => {
  res.render("users/signin");
};

usersCtrl.perfil = async (req, res) => {
  res.render("users/perfil");
};


module.exports = usersCtrl;