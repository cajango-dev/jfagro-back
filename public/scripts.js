// JavaScript code for handling form submissions

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        // Send login data to the server
        fetch('/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, senha }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to the dashboard or home page
                window.location.href = '/dashboard';
            } else {
                // Show error message
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });

    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        // Send registration data to the server
        fetch('/auth/registrar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, senha }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to the login page
                window.location.href = '/login';
            } else {
                // Show error message
                alert(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
}); // Closing brace for the DOMContentLoaded event listener
