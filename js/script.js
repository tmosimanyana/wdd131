document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        // Add more products as needed
    ];

    const productSelect = document.getElementById("productName");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Local Storage for review count
    const form = document.getElementById("reviewForm");
    form.addEventListener("submit", () => {
        let reviewCount = localStorage.getItem("reviewCount") || 0;
        reviewCount++;
        localStorage.setItem("reviewCount", reviewCount);
    });
});
