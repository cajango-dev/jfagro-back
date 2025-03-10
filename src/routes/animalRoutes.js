const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Animais
 *   description: Gestão de animais da pecuária
 */

/**
 * @swagger
 * /animais:
 *   get:
 *     summary: Retorna a lista de animais
 *     tags: [Animais]
 *     responses:
 *       200:
 *         description: Lista de animais
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Animal'
 */
router.get('/animais', (req, res) => {
res.json([{ id: 1, nome: 'Boi 1', raca: 'Nelore' }]);
});

/**
 * @swagger
 * /animais:
 *   post:
 *     summary: Adiciona um novo animal
 *     tags: [Animais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Animal'
 *     responses:
 *       201:
 *         description: Animal criado com sucesso
 */
router.post('/animais', (req, res) => {
res.status(201).json({ message: 'Animal criado!' });
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Animal:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID do animal
 *         nome:
 *           type: string
 *           description: Nome do animal
 *         raca:
 *           type: string
 *           description: Raça do animal
 *       example:
 *         id: 1
 *         nome: 'Boi 1'
 *         raca: 'Nelore'
 */

module.exports = router;