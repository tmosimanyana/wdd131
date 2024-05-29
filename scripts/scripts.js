document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: '1', name: 'Product 1' },
        { id: '2', name: 'Product 2' },
        { id: '3', name: 'Product 3' },
        { id: '4', name: 'Product 4' }
    ];

    const productSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

