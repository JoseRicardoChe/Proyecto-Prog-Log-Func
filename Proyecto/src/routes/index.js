//creando las rutas metodos.
const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => {
res.render('index'); 
});

//metodo para dirreccionar la pagina
router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
