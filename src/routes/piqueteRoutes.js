const express = require('express');
const router = express.Router();
const { cadastrarPiquete, registrarAnimaisNoPiquete, rotacionarAnimais, consultarRotacoes } = require('../controllers/piqueteController');

/**
 * @swagger
 * tags:
 *   name: Piquetes
 *   description: Gestão de piquetes e rotação de animais
 */

/**
 * @swagger
 * /piquetes:
 *   post:
 *     summary: Cadastrar um novo piquete
 *     tags: [Piquetes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Piquete'
 *     responses:
 *       201:
 *         description: Piquete cadastrado com sucesso
 */
router.post('/piquetes', cadastrarPiquete);

/**
 * @swagger
 * /piquetes/animais:
 *   post:
 *     summary: Registrar animais em um piquete
 *     tags: [Piquetes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegistroAnimaisPiquete'
 *     responses:
 *       200:
 *         description: Animais registrados no piquete
 */
router.post('/piquetes/animais', registrarAnimaisNoPiquete);

/**
 * @swagger
 * /piquetes/rotacionar:
 *   post:
 *     summary: Rotacionar animais entre piquetes
 *     tags: [Piquetes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RotacaoAnimais'
 *     responses:
 *       200:
 *         description: Rotação realizada com sucesso
 */
router.post('/piquetes/rotacionar', rotacionarAnimais);

/**
 * @swagger
 * /piquetes/rotacoes:
 *   get:
 *     summary: Consultar histórico de rotações
 *     tags: [Piquetes]
 *     responses:
 *       200:
 *         description: Histórico de rotações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rotacao'
 */
router.get('/piquetes/rotacoes', consultarRotacoes);

/**
 * @swagger
 * components:
 *   schemas:
 *     Piquete:
 *       type: object
 *       properties:
 *         numero:
 *           type: string
 *           description: Número do piquete
 *         tamanho:
 *           type: number
 *           description: Tamanho do piquete em hectares
 *         capacidade:
 *           type: integer
 *           description: Capacidade máxima de animais no piquete
 *       example:
 *         numero: 'P1'
 *         tamanho: 5
 *         capacidade: 50
 *
 *     RegistroAnimaisPiquete:
 *       type: object
 *       properties:
 *         numeroPiquete:
 *           type: string
 *           description: Número do piquete
 *         animais:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de IDs dos animais
 *       example:
 *         numeroPiquete: 'P1'
 *         animais: ['1', '2', '3']
 *
 *     RotacaoAnimais:
 *       type: object
 *       properties:
 *         origem:
 *           type: string
 *           description: Número do piquete de origem
 *         destino:
 *           type: string
 *           description: Número do piquete de destino
 *         animais:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de IDs dos animais
 *       example:
 *         origem: 'P1'
 *         destino: 'P2'
 *         animais: ['1', '2', '3']
 *
 *     Rotacao:
 *       type: object
 *       properties:
 *         origem:
 *           type: string
 *           description: Número do piquete de origem
 *         destino:
 *           type: string
 *           description: Número do piquete de destino
 *         animais:
 *           type: array
 *           items:
 *             type: string
 *           description: Lista de IDs dos animais
 *         data:
 *           type: string
 *           format: date-time
 *           description: Data da rotação
 *       example:
 *         origem: 'P1'
 *         destino: 'P2'
 *         animais: ['1', '2', '3']
 *         data: '2023-10-01T12:00:00Z'
 */

module.exports = router;