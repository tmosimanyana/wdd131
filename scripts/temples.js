const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    // Add more temple objects here...
  ];
  
  // Function to create temple cards
  function createTempleCard(temple) {
      const card = document.createElement('div');
      card.classList.add('temple-card');
      
      const img = document.createElement('img');
      img.src = temple.imageUrl;
      img.alt = temple.templeName;
      img.loading = 'lazy';
      
      const name = document.createElement('h3');
      name.textContent = temple.templeName;
      
      const location = document.createElement('p');
      location.textContent = `Location: ${temple.location}`;
      
      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      
      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area} sq ft`;
      
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      
      return card;
  }
  
  // Function to display temples based on filter
  function displayTemples(filter) {
      const main = document.querySelector('main
  