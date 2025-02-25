const express = require('express');
const path = require('path');
const animalRoutes = require('./src/routes/animalRoutes');
const saudeRoutes = require('./src/routes/saudeRoutes');
const piqueteRoutes = require('./src/routes/piqueteRoutes'); // Importar as rotas de piquetes
const swaggerConfig = require('./src/swagger');

const app = express();
const PORT = 3000;

// Middleware para JSON
app.use(express.json());

// Rotas
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