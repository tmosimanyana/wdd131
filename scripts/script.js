document.addEventListener('DOMContentLoaded', function() {
    // Populate Product Name select options
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' }
    ];

    const productNameSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productNameSelect.appendChild(option);
    });
});
