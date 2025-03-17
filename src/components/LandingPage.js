import React from 'react';
import './LandingPage.css'; // Importing CSS for the landing page
const LandingPage = () => {
    return (React.createElement("div", { className: "landing-container" },
        React.createElement("header", { className: "landing-header" },
            React.createElement("h1", null, "Welcome to JFAgro"),
            React.createElement("nav", null,
                React.createElement("a", { href: "/login" }, "Login"),
                React.createElement("a", { href: "/register" }, "Register"))),
        React.createElement("main", { className: "landing-main" },
            React.createElement("section", null,
                React.createElement("h2", null, "About Us"),
                React.createElement("p", null, "JFAgro is dedicated to providing innovative solutions for agricultural management. Our platform helps farmers optimize their operations, manage livestock, and track health records efficiently.")),
            React.createElement("section", null,
                React.createElement("h2", null, "Our Services"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Livestock Management"),
                    React.createElement("li", null, "Health Tracking"),
                    React.createElement("li", null, "Data Analytics"),
                    React.createElement("li", null, "Consultation Services"))),
            React.createElement("section", null,
                React.createElement("h2", null, "Contact Us"),
                React.createElement("p", null, "Email: contact@jfagro.com"),
                React.createElement("p", null, "Phone: (123) 456-7890"))),
        React.createElement("footer", { className: "landing-footer" },
            React.createElement("p", null, "\u00A9 2023 JFAgro. All rights reserved."))));
};
export default LandingPage;
