const express = require('express');
const router =express.Router();
//rutas  ingresar
router.get('/users/signin', (req,res)=>{
res.render('users/signin');
});

//RUTA PARA AUDENTIFICARSE
router.get('/users/signup', (req,res)=>{
res.render('users/signup');
});
module.exports =router;