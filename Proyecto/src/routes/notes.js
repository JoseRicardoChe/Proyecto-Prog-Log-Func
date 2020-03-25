const express = require('express');
const router =express.Router();

const Note = require('../models/Note');
//rutas para que el usuario pueda ver un formulario
router.get('/notes/add', (req, res)=>{
res.render('notes/new-note');
});
//se recibe los datos en el servidor
//metodos para recorrer la base de datos conectada
router.post('/notes/new-note', async (req,res)=>{
    const{title,description}=req.body;
    const errors =[];
    //funcion if verifica si esta disponible o no el titulo
    if(!title){
        errors.push({text: ' El titulo es obligatorio'});
    }
    if(!description){
        errors.push({text: 'El Descripcion es obligatorio'});
    }
    //para retornar errores
    if(errors.length > 0){
       res.render('notes/new-note',{
           errors,
           title,
           description
       });
    }else {
        const newNote = new Note({title, description});
        //para guardar la base de datos
        await newNote.save();
        res.redirect('/notes');
    }
});

//se consulta la base de datos
router.get('/notes', async (req, res) => {
  const notes = await Note.find().sort({date:'desc'});
  res.render('notes/all-notes', { notes });
});
module.exports = router;