const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');
//inicializacion
const app = express();
require('./database'); 

//seccion de configuracion
app.set('port', process.env.PORT || 3000);
app.set('views',path.join(__dirname, 'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// funciones ejecutadas al servidor
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//variables globales

//Rutas para el servidor
app.use(require('./routes/index'));
app.use(require('./routes/notes'));
app.use(require('./routes/users'));
 


// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Servidor Inicializado
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});