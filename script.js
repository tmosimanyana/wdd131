// JavaScript to populate Product Name options
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            id: 'fc-1888',
            name: 'Flux Capacitor',
            averageRating: 4.5
        },
        {
            id: 'fc-2050',
            name: 'Power Laces',
            averageRating: 4.7
        },
        {
            id: 'fs-1987',
            name: 'Time Circuits',
            averageRating: 3.5
        },
        {
            id: 'ac-2000',
            name: 'Low Voltage Reactor',
            averageRating: 3.9
        },
        {
            id: 'jj-1969',
            name: 'Warp Equalizer',
            averageRating: 5.0
        }
    ];

    const select = document.getElementById('product');
    products.forEach(function(product) {
        const option = document.createElement('option');
        option.text = product.name;
        option.value = product.id;
        select.add(option);
    });
});

// JavaScript to track number of reviews completed
document.addEventListener('DOMContentLoaded', function() {
    let counter = localStorage.getItem('reviewCounter') || 0;
    localStorage.setItem('reviewCounter', parseInt(counter) + 1);
});
