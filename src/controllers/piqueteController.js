const piquetes = []; // Lista de piquetes
const rotacoes = []; // Histórico de rotações

// Cadastrar um novo piquete
const cadastrarPiquete = (req, res) => {
const { numero, tamanho, capacidade } = req.body;
const piquete = { numero, tamanho, capacidade, animais: [] };
piquetes.push(piquete);
res.status(201).json({ message: 'Piquete cadastrado!', piquete });
};

// Registrar animais em um piquete
const registrarAnimaisNoPiquete = (req, res) => {
const { numeroPiquete, animais } = req.body;
const piquete = piquetes.find((p) => p.numero === numeroPiquete);

if (!piquete) {
    return res.status(404).json({ message: 'Piquete não encontrado' });
}

piquete.animais = animais; // Atualiza a lista de animais no piquete
res.json({ message: 'Animais registrados no piquete!', piquete });
};

// Rotacionar animais entre piquetes
const rotacionarAnimais = (req, res) => {
const { origem, destino, animais } = req.body;

const piqueteOrigem = piquetes.find((p) => p.numero === origem);
const piqueteDestino = piquetes.find((p) => p.numero === destino);

if (!piqueteOrigem || !piqueteDestino) {
    return res.status(404).json({ message: 'Piquete de origem ou destino não encontrado' });
}

// Remove animais do piquete de origem
piqueteOrigem.animais = piqueteOrigem.animais.filter((animal) => !animais.includes(animal));

// Adiciona animais ao piquete de destino
piqueteDestino.animais = [...piqueteDestino.animais, ...animais];

// Registra a rotação no histórico
rotacoes.push({ origem, destino, animais, data: new Date() });

res.json({ message: 'Rotação realizada com sucesso!', rotacoes });
};

// Consultar histórico de rotações
const consultarRotacoes = (req, res) => {
res.json(rotacoes);
};

module.exports = { cadastrarPiquete, registrarAnimaisNoPiquete, rotacionarAnimais, consultarRotacoes };