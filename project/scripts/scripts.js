document.addEventListener('DOMContentLoaded', () => {
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');
    const form = document.getElementById('contact-form');

    // Set current year
    currentYearElement.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedElement.textContent += document.lastModified;

    // Handle form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Save form data to localStorage
        const formData = { name, email, message };
        localStorage.setItem('formData', JSON.stringify(formData));

        // Display thank you message
        alert(`Thank you for your message, ${name}!`);
        form.reset();
    });
});
