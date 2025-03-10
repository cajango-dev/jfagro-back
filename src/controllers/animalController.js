const Animal = require('../models/Animal');

const registrarAnimal = async (req, res) => {
    const { nome, raca, peso } = req.body;

try {
    const novoAnimal = new Animal({ nome, raca, peso });
    await novoAnimal.save();
    res.status(201).json({ message: 'Animal registrado com sucesso!', animal: novoAnimal });
    } catch (err) {
    res.status(500).json({ message: 'Erro ao registrar animal', error: err.message });
    }
};

module.exports = { registrarAnimal };