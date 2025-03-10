const mongoose = require('mongoose');

const ReproducaoSchema = new mongoose.Schema({
    animalId: { type: mongoose.Schema.Types.ObjectId, ref: 'Animal', required: true },
    dataInseminacao: { type: Date, required: true },
    reprodutor: { type: String, required: true },
    dataParto: { type: Date },
    desmame: { type: Date },
});

module.exports = mongoose.model('Reproducao', ReproducaoSchema);