const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const cors = require('cors');
const path = require ('path');

//investigar más sobre esto
//Crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use(express.static('public'));
app.use('/login', express.static('public'));

//Lecutra y parseo del body, es decir la información que se mandaría en un input o en el mismo body de postman, por ej
app.use(express.json()); //middleware

//Rutas
app.use('/api/auth', require('./routes/authRoute'));
app.use('/api/events', require('./routes/eventsRoute'));


app.get('*', (req, res) => { res.sendFile(path.resolve(__dirname, 'public', 'index.html')); });




//Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})

