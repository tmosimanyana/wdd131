// script.js

// Increment counter using localStorage
if(localStorage.getItem('reviewCounter')) {
    let counter = parseInt(localStorage.getItem('reviewCounter'));
    counter++;
    localStorage.setItem('reviewCounter', counter);
} else {
    localStorage.setItem('reviewCounter', 1);
}
