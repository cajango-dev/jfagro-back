import express from 'express';
import path from 'path';
import connectDB from '../src/config/db.js';
import logger from '../src/config/logger.js';
import authRoutes from '../src/routes/authRoutes.js';
import animalRoutes from '../src/routes/animalRoutes.js';
import saudeRoutes from '../src/routes/saudeRoutes.js';
import piqueteRoutes from '../src/routes/piqueteRoutes.js';
import swaggerConfig from '../src/swagger.js';

const app = express();

// Middleware para JSON
app.use(express.json());

// Middleware para logging de erros
app.use((err, req, res, next) => {
    logger.error(`${err.message}`);
    res.status(500).json({ message: 'Erro interno no servidor' });
});

// Serve the landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'landing.html'));
});

// Rotas
app.use('/api', authRoutes); // Usar as rotas de autenticação
app.use('/api', animalRoutes);
app.use('/api', saudeRoutes);
app.use('/api', piqueteRoutes); // Usar as rotas de piquetes

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, '../public')));

// Swagger
swaggerConfig(app);

console.log("Tentando conectar ao banco de dados...");
connectDB()
    .then(() => {
        console.log("Conexão ao banco de dados estabelecida com sucesso.");
    })
    .catch(err => {
        console.error("Erro ao conectar ao banco de dados:", err);
        // Do not shut down the server
    });

console.log("Iniciando o servidor...");
// Iniciar o servidor

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
    console.log(`Documentação Swagger em http://localhost:${PORT}/api-docs`);
});
