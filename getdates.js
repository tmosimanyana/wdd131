document.addEventListener("DOMContentLoaded", function() {
  // Dynamically set the current year in the footer
  const currentYearElement = document.getElementById('currentyear');
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;

  // Dynamically set the last modified date in the footer
  const lastModifiedElement = document.getElementById('lastModified');
  lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
});
