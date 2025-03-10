const express = require('express');
const path = require('path');
const connectDB = require('./src/config/db');
const logger = require('./src/config/logger')
const authRoutes = require('./src/routes/authRoutes');
const animalRoutes = require('./src/routes/animalRoutes');
const saudeRoutes = require('./src/routes/saudeRoutes');
const piqueteRoutes = require('./src/routes/piqueteRoutes');
const swaggerConfig = require('./src/swagger');

const app = express();

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

console.log("Tentando conectar ao banco de dados...");
// Conectar ao banco de dados
connectDB()
    .then(() => {
        console.log("Conexão ao banco de dados estabelecida com sucesso.");
    })
    .catch(err => {
        console.error("Erro ao conectar ao banco de dados:", err);
    });


console.log("Iniciando o servidor...");
// Iniciar o servidor

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
    console.log(`Documentação Swagger em http://localhost:${PORT}/api-docs`);
});
