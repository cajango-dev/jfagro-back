"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./LandingPage.css"); // Importing CSS for the landing page
const LandingPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "landing-container", children: [(0, jsx_runtime_1.jsxs)("header", { className: "landing-header", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Welcome to JFAgro" }), (0, jsx_runtime_1.jsxs)("nav", { children: [(0, jsx_runtime_1.jsx)("a", { href: "/login", children: "Login" }), (0, jsx_runtime_1.jsx)("a", { href: "/register", children: "Register" })] })] }), (0, jsx_runtime_1.jsxs)("main", { className: "landing-main", children: [(0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "About Us" }), (0, jsx_runtime_1.jsx)("p", { children: "JFAgro is dedicated to providing innovative solutions for agricultural management. Our platform helps farmers optimize their operations, manage livestock, and track health records efficiently." })] }), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Our Services" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Livestock Management" }), (0, jsx_runtime_1.jsx)("li", { children: "Health Tracking" }), (0, jsx_runtime_1.jsx)("li", { children: "Data Analytics" }), (0, jsx_runtime_1.jsx)("li", { children: "Consultation Services" })] })] }), (0, jsx_runtime_1.jsxs)("section", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Contact Us" }), (0, jsx_runtime_1.jsx)("p", { children: "Email: contact@jfagro.com" }), (0, jsx_runtime_1.jsx)("p", { children: "Phone: (123) 456-7890" })] })] }), (0, jsx_runtime_1.jsx)("footer", { className: "landing-footer", children: (0, jsx_runtime_1.jsx)("p", { children: "\u00A9 2023 JFAgro. All rights reserved." }) })] }));
};
exports.default = LandingPage;
