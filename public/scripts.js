// URL base da API
const API_URL = 'http://localhost:3000/api';

// Função para exibir mensagens de erro/sucesso
function showMessage(message, isError = false) {
const messageDiv = document.createElement('div');
messageDiv.textContent = message;
messageDiv.style.color = isError ? 'red' : 'green';
messageDiv.style.marginTop = '10px';
document.querySelector('.container').appendChild(messageDiv);

setTimeout(() => {
    messageDiv.remove();
}, 3000);
}


// Logout
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
});



// Login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

try {
const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, senha }),
});

const data = await response.json();

if (response.ok) {
    localStorage.setItem('token', data.token);
    window.location.href = 'index.html'; // Redirecionar para a página inicial
} else {
    showMessage(data.message || 'Erro no login', true);
}
} catch (err) {
    showMessage('Erro ao conectar com o servidor', true);
}
});
}

// Registro
if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch(`${API_URL}/auth/registrar`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha }),
        });

        const data = await response.json();

        if (response.ok) {
        showMessage('Usuário registrado com sucesso!');
        setTimeout(() => {
            window.location.href = 'login.html'; // Redirecionar para a tela de login
        }, 2000);
        } else {
        showMessage(data.message || 'Erro no registro', true);
        }
    } catch (err) {
        showMessage('Erro ao conectar com o servidor', true);
    }
    });
}

// Verificar autenticação ao carregar a página inicial
if (window.location.pathname === '/index.html') {
    const token = localStorage.getItem('token');

    if (!token) {
        window.location.href = 'login.html'; // Redirecionar para a tela de login
    } else {
        // Carregar dados do gráfico (se necessário)
        carregarDadosDoGrafico();
    }
}

// Função para carregar dados do gráfico
async function carregarDadosDoGrafico() {
    try {
        const response = await fetch(`${API_URL}/saude/1/peso`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao carregar dados');
    }

    const { labels, dados } = await response.json();

    const ctx = document.getElementById('pesoChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Peso (kg)',
                data: dados,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
        }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
            }
        }
        }
    });
    } catch (err) {
        showMessage('Erro ao carregar dados do gráfico', true);
    }
}

// Função para carregar dados do gráfico com filtro
async function carregarDadosDoGrafico(dataInicio, dataFim) {
    try {
        const url = `${API_URL}/saude/1/peso?dataInicio=${dataInicio}&dataFim=${dataFim}`;
        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });

    if (!response.ok) {
        throw new Error('Erro ao carregar dados');
    }

        const { labels, dados } = await response.json();

        const ctx = document.getElementById('pesoChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Peso (kg)',
                data: dados,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2
        }]
        },
        options: {
            scales: {
                y: {
                beginAtZero: true
            }
        }
        }
    });
    } catch (err) {
    showMessage('Erro ao carregar dados do gráfico', true);
    }
}

// Filtro de datas
if (document.getElementById('filtrar')) {
    document.getElementById('filtrar').addEventListener('click', () => {
        const dataInicio = document.getElementById('dataInicio').value;
        const dataFim = document.getElementById('dataFim').value;
            carregarDadosDoGrafico(dataInicio, dataFim);
    });
}

// Verificar autenticação ao carregar a página inicial
if (window.location.pathname === '/index.html') {
    const token = localStorage.getItem('token');

    if (!token) {
    window.location.href = 'login.html'; // Redirecionar para a tela de login
        } else {
    // Carregar dados do gráfico (se necessário)
    carregarDadosDoGrafico();
}
}