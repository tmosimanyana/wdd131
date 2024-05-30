document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
    });
});
