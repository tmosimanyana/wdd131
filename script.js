// script.js

// Product array data source
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averageRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averageRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averageRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averageRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averageRating: 5.0
    }
  ];
  
  // Function to populate product select options
  function populateProductOptions() {
      const select = document.getElementById('productName');
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id; // Using id as value
          option.textContent = product.name;
          select.appendChild(option);
      });
  }
  
  // Call the function to populate options on page load
  window.onload = populateProductOptions;
  
  // Function to increment review counter using localStorage
  function incrementReviewCounter() {
      if(localStorage.getItem('reviewCounter')) {
          let counter = parseInt(localStorage.getItem('reviewCounter'));
          counter++;
          localStorage.setItem('reviewCounter', counter);
      } else {
          localStorage.setItem('reviewCounter', 1);
      }
  }
  
  // Call the function to increment counter on review submission confirmation page
  incrementReviewCounter();
  