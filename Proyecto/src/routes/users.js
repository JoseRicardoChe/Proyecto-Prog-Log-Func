//programacion funcional
const router = require("express").Router();

const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
  perfil,
  editar
} = require("../controllers/users.controller");

// Helpers
const { isAuthenticated } = require("../helpers/auth");

// rutas para el usario pueda logearse y para registrarse
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

//perfil
router.get("/users/perfil", isAuthenticated, perfil);

//editar
router.get("/users/actualizar", isAuthenticated, editar);


module.exports = router;
