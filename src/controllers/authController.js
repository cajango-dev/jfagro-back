const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const dbQueries = require('../config/dbQueries'); // Importando as funções de consulta ao banco de dados

const registrarUsuario = async (req, res) => {
    console.log("Iniciando o registro do usuário...");
    const { nome, email, senha } = req.body;

    // Verificar se o usuário já existe
    const usuarioExistente = await dbQueries.buscarUsuarioPorEmail(email);
    if (usuarioExistente) {
        console.log("Usuário já existe:", email);
        return res.status(400).json({ message: 'Usuário já existe' });
    }

    // Criptografar a senha
    const senhaCriptografada = bcrypt.hashSync(senha, 10);

    // Salvar o usuário no banco de dados
    await dbQueries.registrarUsuario(nome, email, senhaCriptografada);
    console.log("Usuário registrado com sucesso:", email);

    res.status(201).json({ message: 'Usuário registrado com sucesso!', usuario: { nome, email } });
};


const login = async (req, res) => {
    console.log("Iniciando o login do usuário...");
    const { email, senha } = req.body;

    // Verificar se o usuário existe
    const usuario = await dbQueries.buscarUsuarioPorEmail(email);
    if (!usuario) {
        console.log("Usuário não encontrado:", email);
        return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    // Verificar a senha
    const senhaValida = bcrypt.compareSync(senha, usuario.senha);
    if (!senhaValida) {
        console.log("Senha incorreta para o usuário:", email);
        return res.status(400).json({ message: 'Senha incorreta' });
    }

    // Gerar token JWT
    const token = jwt.sign({ id: usuario.id, email: usuario.email }, 'secreto', { expiresIn: '1h' });
    console.log("Login bem-sucedido para o usuário:", email);

    res.json({ message: 'Login bem-sucedido!', token });
};


module.exports = { registrarUsuario, login };
