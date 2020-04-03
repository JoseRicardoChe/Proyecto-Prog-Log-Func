const { Schema, model } = require("mongoose");
//Se guarda los datos en una constante para el formulario
//crear la base de datos de las notas
const NoteSchema = new Schema(
  {
    title: {type: String, required: true},
    description: {type: String,required: true},
    user: {type: String, required: true}
  },
  {
    timestamps: true
  }
);
//mongo db crea el modelo
module.exports = model("Note", NoteSchema);
