const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const bcrypt = require("bcryptjs");

//crear la base de datos de usuario
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  sexo: { type: String, required: true },
  carrera: { type: String, required: true },
  semestre: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now }
});
//metodos para verificar la contraseña correcta
UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
