const mongoose = require('mongoose');
const Animal = require('./models/Animal'); // Supondo que você tenha um modelo de Animal

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

module.exports = {
    registrarInseminacao,
    buscarInseminacoesPorAnimal,
    deletarInseminacao,
};