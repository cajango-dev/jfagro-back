const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    raca: { type: String, required: true },
    peso: { type: Number, required: true },
});

module.exports = mongoose.model('Animal', AnimalSchema);