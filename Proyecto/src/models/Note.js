const mongoose= require('mongoose');
const {Schema} = mongoose;
//Se guarda los datos en una constante para el formulario
const NotesSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now }
});

//mongo db crea el modelo
module.exports = mongoose.model('Note',NotesSchema)
