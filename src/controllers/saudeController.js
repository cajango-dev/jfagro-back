const historicoSaude = [];

// Registrar um novo registro de saúde
const registrarSaude = (req, res) => {
const { animalId, tipo, descricao, data, peso, frequenciaCardiaca, temperatura, condicaoCorporal, observacoes } = req.body;
const registro = { animalId, tipo, descricao, data, peso, frequenciaCardiaca, temperatura, condicaoCorporal, observacoes };
historicoSaude.push(registro);
res.status(201).json({ message: 'Registro de saúde adicionado!', registro });
};

// Consultar histórico de saúde de um animal
const consultarHistorico = (req, res) => {
const { animalId } = req.params;
const historico = historicoSaude.filter((registro) => registro.animalId === animalId);
res.json(historico);
};

// Calcular ganho de peso médio de um animal
const calcularGanhoPesoMedio = (req, res) => {
const { animalId } = req.params;

// Filtra os registros de saúde do animal que contêm peso
const registros = historicoSaude.filter(
  (registro) => registro.animalId === animalId && registro.peso
);

// Verifica se há dados suficientes para calcular o ganho de peso
if (registros.length < 2) {
  return res.status(400).json({ message: 'Dados insuficientes para calcular o ganho de peso' });
}

// Ordena os registros por data (do mais antigo para o mais recente)
registros.sort((a, b) => new Date(a.data) - new Date(b.data));

// Extrai os pesos e as datas dos registros
const pesos = registros.map((registro) => registro.peso);
const datas = registros.map((registro) => registro.data);

// Calcula o ganho de peso médio
const ganhoTotal = pesos[pesos.length - 1] - pesos[0];
const dias = (new Date(datas[datas.length - 1]) - new Date(datas[0])) / (1000 * 60 * 60 * 24); // Diferença em dias
const ganhoPesoMedio = ganhoTotal / dias; // Ganho de peso médio por dia

res.json({ animalId, ganhoTotal, ganhoPesoMedio, dias });
};

// Exportar as funções
module.exports = { registrarSaude, consultarHistorico, calcularGanhoPesoMedio };