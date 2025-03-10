const express = require("express");
const router = express.Router();
const { registrarInseminacao } = require("../controllers/reproducaoController");

/**
 * @swagger
 * /reproducao/inseminacao:
 *   post:
 *     summary: Registra uma nova inseminação
 *     description: Endpoint para registrar uma nova inseminação no sistema.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               animalId:
 *                 type: string
 *                 description: ID do animal
 *               dataInseminacao:
 *                 type: string
 *                 format: date
 *                 description: Data da inseminação (formato YYYY-MM-DD)
 *               responsavel:
 *                 type: string
 *                 description: Nome do responsável pela inseminação
 *             example:
 *               animalId: "12345"
 *               dataInseminacao: "2023-10-01"
 *               responsavel: "João Silva"
 *     responses:
 *       201:
 *         description: Inseminação registrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Inseminação registrada com sucesso"
 *       400:
 *         description: Erro na requisição
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Dados inválidos"
 *       500:
 *         description: Erro no servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Erro ao registrar inseminação"
 */
router.post("/reproducao/inseminacao", registrarInseminacao);

module.exports = router;
