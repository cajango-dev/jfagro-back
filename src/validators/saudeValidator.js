const Joi = require('joi');

// Schema para validação de registros de saúde
const schemaRegistroSaude = Joi.object({
    animalId: Joi.string().required(),
    tipo: Joi.string().valid('Vacina', 'Tratamento', 'Pesagem').required(),
    descricao: Joi.string().required(),
    data: Joi.date().iso().required(),
    peso: Joi.number().min(0).required(),
    frequenciaCardiaca: Joi.number().min(0),
    temperatura: Joi.number().min(0),
    condicaoCorporal: Joi.number().min(1).max(5),
    observacoes: Joi.string(),
});

module.exports = { schemaRegistroSaude };