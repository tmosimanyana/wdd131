// script.js
// Add your JavaScript code here

// This is just a placeholder for any JavaScript functionality required
// such as dynamically populating the product options or tracking form submissions

// Example code for dynamically populating product options
window.addEventListener('DOMContentLoaded', (event) => {
    const productSelect = document.getElementById('product');
    const products = [
        { id: '1', name: 'Product 1' },
        { id: '2', name: 'Product 2' },
        { id: '3', name: 'Product 3' },
        { id: '4', name: 'Product 4' }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Example code for tracking form submissions
document.querySelector('form').addEventListener('submit', (event) => {
    // Add code to track form submissions
    // For example, you can use localStorage to keep track of form submissions
    // Increment a counter every time the form is submitted
});
