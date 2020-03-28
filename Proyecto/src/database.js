//Conexion de la Base de datos
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/probd',{
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})

.then(db => console.log('Db Conexion exitosa'))
.catch( err=> console.error(err));
