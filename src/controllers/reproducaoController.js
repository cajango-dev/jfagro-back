const Reproducao = require('../models/Reproducao');

const registrarInseminacao = async (req, res) => {
const { animalId, dataInseminacao, reprodutor } = req.body;

try {
    const novaInseminacao = new Reproducao({ animalId, dataInseminacao, reprodutor });
    await novaInseminacao.save();
    res.status(201).json({ message: 'Inseminação registrada com sucesso!', inseminacao: novaInseminacao });
    } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar inseminação', error: err.message });
    }
};

module.exports = { registrarInseminacao };