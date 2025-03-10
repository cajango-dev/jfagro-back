const jwt = require('jsonwebtoken');

const autenticar = (req, res, next) => {
const token = req.header('Authorization');

if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não fornecido.' });
}

try {
    const decoded = jwt.verify(token, 'secreto');
    req.usuario = decoded;
    next();
} catch (err) {
    res.status(400).json({ message: 'Token inválido.' });
}
};

module.exports = autenticar;