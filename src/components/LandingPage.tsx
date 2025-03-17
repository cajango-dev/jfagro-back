import React from 'react';
import './LandingPage.css'; // Importing CSS for the landing page

const LandingPage: React.FC = () => {
    return (
        <div className="landing-container">
            <header className="landing-header">
                <h1>Welcome to JFAgro</h1>
                <nav>
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </nav>
            </header>
            <main className="landing-main">
                <section>
                    <h2>About Us</h2>
                    <p>JFAgro is dedicated to providing innovative solutions for agricultural management. Our platform helps farmers optimize their operations, manage livestock, and track health records efficiently.</p>
                </section>
                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>Livestock Management</li>
                        <li>Health Tracking</li>
                        <li>Data Analytics</li>
                        <li>Consultation Services</li>
                    </ul>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>Email: contact@jfagro.com</p>
                    <p>Phone: (123) 456-7890</p>
                </section>
            </main>
            <footer className="landing-footer">
                <p>&copy; 2023 JFAgro. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
