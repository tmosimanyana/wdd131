// Get current year and populate in footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get document last modified date and populate in footer
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
