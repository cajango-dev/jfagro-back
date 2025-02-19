const historicoSaude = []; // Simulando um "banco de dados" em memória

// Registrar um novo tratamento ou vacina
const registrarSaude = (req, res) => {
const { animalId, tipo, descricao, data } = req.body;
const registro = { animalId, tipo, descricao, data };
historicoSaude.push(registro);
res.status(201).json({ message: 'Registro de saúde adicionado!', registro });
};

// Consultar histórico de saúde de um animal
const consultarHistorico = (req, res) => {
const { animalId } = req.params;
const historico = historicoSaude.filter((registro) => registro.animalId === animalId);
res.json(historico);
};

module.exports = { registrarSaude, consultarHistorico };