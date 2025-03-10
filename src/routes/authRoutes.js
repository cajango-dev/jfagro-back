const express = require('express');
const router = express.Router();
const { registrarUsuario, login } = require('../controllers/authController');

/**
 * @swagger
 * tags:
 *   name: Autenticação
 *   description: Gerenciamento de usuários e login
 */

/**
 * @swagger
 * /auth/registrar:
 *   post:
 *     summary: Registrar um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *           example:
 *             nome: "João Silva"
 *             email: "joao@example.com"
 *             senha: "senha123"
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Usuário já existe
 */
router.post('/auth/registrar', registrarUsuario);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login do usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *           example:
 *             email: "joao@example.com"
 *             senha: "senha123"
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       400:
 *         description: Usuário não encontrado ou senha incorreta
 */
router.post('/auth/login', login);

module.exports = router;