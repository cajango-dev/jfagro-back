const mongoose = require('mongoose');
const Animal = require('../models/Animal'); // Supondo que você tenha um modelo de Animal


// Função para registrar uma inseminação
const registrarInseminacao = async (animalId, dataInseminacao, responsavel) => {
    try {
        const inseminacao = await Animal.findByIdAndUpdate(
            animalId,
            {
                $push: {
                    inseminacoes: {
                        data: dataInseminacao,
                        responsavel: responsavel,
                    },
                },
            },
            { new: true }
        );
        return inseminacao;
    } catch (err) {
        console.error('Erro ao registrar inseminação:', err);
        throw err;
    }
};

// Função para buscar todas as inseminações de um animal
const buscarInseminacoesPorAnimal = async (animalId) => {
    try {
        const animal = await Animal.findById(animalId);
        return animal.inseminacoes;
    } catch (err) {
        console.error('Erro ao buscar inseminações:', err);
        throw err;
    }
};

// Função para deletar uma inseminação
const deletarInseminacao = async (animalId, inseminacaoId) => {
    try {
        const animal = await Animal.findByIdAndUpdate(
            animalId,
            {
                $pull: {
                    inseminacoes: { _id: inseminacaoId },
                },
            },
            { new: true }
        );
        return animal;
    } catch (err) {
        console.error('Erro ao deletar inseminação:', err);
        throw err;
    }
};

const User = require('../models/User'); // Importando o modelo de usuário

// Função para registrar um usuário
const registrarUsuario = async (nome, email, senha) => {
    const novoUsuario = new User({ nome, email, senha });
    await novoUsuario.save();
};

// Função para buscar um usuário por email
const buscarUsuarioPorEmail = async (email) => {
    return await User.findOne({ email });
};

module.exports = {
    registrarInseminacao,
    buscarInseminacoesPorAnimal,
    deletarInseminacao,
    registrarUsuario, // Adicionando a função de registrar usuário
    buscarUsuarioPorEmail, // Adicionando a função de buscar usuário

    registrarInseminacao,
    buscarInseminacoesPorAnimal,
    deletarInseminacao,
};
