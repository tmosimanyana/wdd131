// JavaScript code for populating Product Name options dynamically
const products = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" }
];

const productNameSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productNameSelect.appendChild(option);
});

// JavaScript code for populating Overall Rating radio buttons dynamically
const ratingFieldset = document.getElementById("rating");

for (let i = 1; i <= 5; i++) {
    const input = document.createElement("input");
    input.type = "radio";
    input.id = "rating" + i;
    input.name = "rating";
    input.value = i;

    const label = document.createElement("label");
    label.htmlFor = "rating" + i;
    label.textContent = i + " ☆";

    ratingFieldset.appendChild(input);
    ratingFieldset.appendChild(label);
    ratingFieldset.appendChild(document.createElement("br"));
}

// JavaScript code for localStorage to keep track of the number of reviews completed
if (window.location.pathname === "/review.html") {
    let reviewsCompleted = localStorage.getItem("reviewsCompleted") || 0;
    reviewsCompleted++;
    localStorage.setItem("reviewsCompleted", reviewsCompleted);
}

