const winston = require('winston');

const logger = winston.createLogger({
    level: 'info', // Nível mínimo de log
    format: winston.format.combine(
        winston.format.timestamp(), // Adiciona timestamp aos logs
        winston.format.json() // Formata os logs como JSON
    ),
    transports: [
        // Logs no console
        new winston.transports.Console(),
        // Logs em arquivo
        new winston.transports.File({ filename: 'logs/combined.log' }),
        // Logs de erro em arquivo separado
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    ],
});

module.exports = logger;