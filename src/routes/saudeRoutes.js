const express = require('express');
const router = express.Router();
const { registrarSaude, consultarHistorico } = require('../controllers/saudeController');

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
 * components:
 *   schemas:
 *     RegistroSaude:
 *       type: object
 *       properties:
 *         animalId:
 *           type: string
 *           description: ID do animal
 *         tipo:
 *           type: string
 *           description: Tipo de registro (vacina, tratamento, etc.)
 *         descricao:
 *           type: string
 *           description: Descrição do registro
 *         data:
 *           type: string
 *           format: date
 *           description: Data do registro
 *       example:
 *         animalId: '1'
 *         tipo: 'Vacina'
 *         descricao: 'Vacina contra aftosa'
 *         data: '2023-10-01'
 */

module.exports = router;