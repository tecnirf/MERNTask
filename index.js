const express = require('express');
//requiere el archivo de conexion de la DB
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el servidor express
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar cors
app.use(cors());
/* app.use(cors({ credentials: true, origin: true }));
app.options("*", cors()); */


// Habilita a la app a usar JSON por medio de express
app.use(express.json({ extended: true }));

// Puerto de la app
const port = process.env.PORT || 4000;

// Importar rutas

app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// Definir la página principal desde index.js
//app.get('/', (req, res) => {
//    res.send('Hola Mundo')
//});


// Arrancar la app
app.listen(port, "0.0.0.0", () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
});