const mongoose = require('mongoose');
const Animal = require('./models/Animal'); // Supondo que você tenha um modelo de Animal

const seedDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/jfagro');

        // Limpar a coleção de animais (opcional)
        await Animal.deleteMany({});

        // Inserir dados iniciais
        const animais = [
            {
                nome: 'Vaca 1',
                inseminacoes: [
                    { data: '2023-01-01', responsavel: 'João Silva' },
                    { data: '2023-03-15', responsavel: 'Maria Souza' },
                ],
            },
            {
                nome: 'Vaca 2',
                inseminacoes: [
                    { data: '2023-02-10', responsavel: 'Carlos Oliveira' },
                ],
            },
        ];

        await Animal.insertMany(animais);
        console.log('Banco de dados populado com sucesso!');
    } catch (err) {
        console.error('Erro ao popular o banco de dados:', err);
    } finally {
        mongoose.connection.close();
    }
};

seedDatabase();