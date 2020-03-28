const graficas = {};
//PROGRAMACION FUNCIONAL
//modelo a relacionar
const User = require("../models/User");
//metodos puras.

// Usuarios por genero
graficas.Usexo = (req, res, sexo) =>
User.countDocuments({ sexo: sexo }, (err, count) => count);


// Usuarios por carrera
graficas.Ucarrera = (req, res, carrera) =>
User.countDocuments({ carrera: carrera }, (err, count) => count);

module.exports = graficas;