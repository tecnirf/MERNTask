const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true // Eliminar espacio antes y despues del string
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true // Un unico correo que se puede registrar 
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    registro: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Usuario', UsuariosSchema);