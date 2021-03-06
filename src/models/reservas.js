const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaReservas = new Schema({
    pelicula: {
        type: String,
        trim: true
        
    },

    hora: {
        type: String,
        trim: true,
    },

    fila: {
        type: String,
        trim: true,
        
    },

    columnaPeli: {
        type: String,
        trim: true,
        
    },

    codigo: {
        type: String,
        trim: true,
    },

    sala: {
        type: String,
        trim: true,
    },

    fecha: {
        type: Date,
        
    },

    precio:{
        type: String
    }




});

module.exports = mongoose.model('reservas', schemaReservas);