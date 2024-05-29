document.addEventListener('DOMContentLoaded', function () {
    const productArray = [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
        { id: 3, name: "Product C" },
        { id: 4, name: "Product D" }
    ];

    const productSelect = document.getElementById('productName');

    productArray.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const reviewCounter = localStorage.getItem('reviewCounter') || 0;
    localStorage.setItem('reviewCounter', parseInt(reviewCounter) + 1);
});
