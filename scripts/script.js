document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified).toLocaleDateString();

    document.getElementById('copyright-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;
});
