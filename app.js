const express = require('express');
const path = require('path');
const logger = require('./src/config/logger')
const authRoutes = require('./src/routes/authRoutes');
const animalRoutes = require('./src/routes/animalRoutes');
const saudeRoutes = require('./src/routes/saudeRoutes');
const piqueteRoutes = require('./src/routes/piqueteRoutes');
const swaggerConfig = require('./src/swagger');

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Middleware para logging de erros
app.use((err, req, res, next) => {
    logger.error(`${err.message}`);
    res.status(500).json({ message: 'Erro interno no servidor' });
});

// Redirecionar para login.html ao acessar a raiz
app.get('/', (req, res) => {
    res.redirect('/login.html');
});

// Rotas
app.use('/api', authRoutes); // Usar as rotas de autenticação
app.use('/api', animalRoutes);
app.use('/api', saudeRoutes);
app.use('/api', piqueteRoutes); // Usar as rotas de piquetes

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Swagger
swaggerConfig(app);

// Iniciar servidor
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
console.log(`Documentação Swagger em http://localhost:${PORT}/api-docs`);
});