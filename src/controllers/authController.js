const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Simulando um "banco de dados" de usuários em memória
const usuarios = [];

// Registrar um novo usuário
const registrarUsuario = (req, res) => {
const { nome, email, senha } = req.body;

// Verificar se o usuário já existe
const usuarioExistente = usuarios.find((user) => user.email === email);
if (usuarioExistente) {
    return res.status(400).json({ message: 'Usuário já existe' });
}

// Criptografar a senha
const senhaCriptografada = bcrypt.hashSync(senha, 10);

// Salvar o usuário
const novoUsuario = { id: usuarios.length + 1, nome, email, senha: senhaCriptografada };
usuarios.push(novoUsuario);

res.status(201).json({ message: 'Usuário registrado com sucesso!', usuario: novoUsuario });
};

// Login do usuário
const login = (req, res) => {
const { email, senha } = req.body;

// Verificar se o usuário existe
const usuario = usuarios.find((user) => user.email === email);
if (!usuario) {
    return res.status(400).json({ message: 'Usuário não encontrado' });
}

// Verificar a senha
const senhaValida = bcrypt.compareSync(senha, usuario.senha);
if (!senhaValida) {
    return res.status(400).json({ message: 'Senha incorreta' });
}

// Gerar token JWT
const token = jwt.sign({ id: usuario.id, email: usuario.email }, 'secreto', { expiresIn: '1h' });

res.json({ message: 'Login bem-sucedido!', token });
};

module.exports = { registrarUsuario, login };