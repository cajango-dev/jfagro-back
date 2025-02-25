const express = require('express');
const router = express.Router();
const { registrarSaude, consultarHistorico, calcularGanhoPesoMedio, obterDadosPeso } = require('../controllers/saudeController');

/**
 * @swagger
 * tags:
 *   name: Saúde
 *   description: Gestão da saúde dos animais
 */

/**
 * @swagger
 * /saude:
 *   post:
 *     summary: Registrar um novo tratamento ou vacina
 *     tags: [Saúde]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegistroSaude'
 *     responses:
 *       201:
 *         description: Registro de saúde adicionado com sucesso
 */
router.post('/saude', registrarSaude);

/**
 * @swagger
 * /saude/{animalId}:
 *   get:
 *     summary: Consultar histórico de saúde de um animal
 *     tags: [Saúde]
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do animal
 *     responses:
 *       200:
 *         description: Histórico de saúde do animal
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/RegistroSaude'
 */
router.get('/saude/:animalId', consultarHistorico);

/**
 * @swagger
 * /saude/{animalId}/ganho-peso:
 *   get:
 *     summary: Calcular ganho de peso médio de um animal
 *     tags: [Saúde]
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do animal
 *     responses:
 *       200:
 *         description: Ganho de peso médio calculado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 animalId:
 *                   type: string
 *                 ganhoTotal:
 *                   type: number
 *                   description: Ganho de peso total no período (em kg)
 *                 ganhoPesoMedio:
 *                   type: number
 *                   description: Ganho de peso médio por dia (em kg/dia)
 *                 dias:
 *                   type: number
 *                   description: Período total em dias
 *       400:
 *         description: Dados insuficientes para calcular o ganho de peso
 */
router.get('/saude/:animalId/ganho-peso', calcularGanhoPesoMedio);

/**
 * @swagger
 * /saude/{animalId}/peso:
 *   get:
 *     summary: Obter dados de peso de um animal para gráficos
 *     tags: [Saúde]
 *     parameters:
 *       - in: path
 *         name: animalId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do animal
 *     responses:
 *       200:
 *         description: Dados de peso para gráficos
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 labels:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Datas das pesagens
 *                 dados:
 *                   type: array
 *                   items:
 *                     type: number
 *                   description: Pesos registrados
 */
router.get('/saude/:animalId/peso', obterDadosPeso);

module.exports = router;