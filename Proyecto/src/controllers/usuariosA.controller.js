const graficas = {};
//modelo a relacionar User y Note
const User = require("../models/User");
const Evidencias = require("../models/Note");
//metodos
// Todos los usuarios por genero
graficas.Usexo = (req, res, sexo) =>
User.countDocuments({ sexo: sexo }, (err, count) => count);

// Todos los usuarios por carrera
graficas.Ucarrera = (req, res, carrera) =>
User.countDocuments({ carrera: carrera }, (err, count) => count);

//todos los usuarios por semestres
graficas.Usemestre = (req, res, semestre) =>
User.countDocuments({ semestre: semestre }, (err, count) => count);

// Todos los usuarios creados
graficas.Utotaluser = (req, res) =>
User.countDocuments((err, count) => count);

//total de objetivos creadas por los usuarios
graficas.Eobjetos = (req, res) =>
Evidencias.countDocuments((err, count) => count);

module.exports = graficas;