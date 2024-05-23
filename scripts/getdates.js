body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #A8CFFF; /* Light blue from Botswana flag */
    color: #000; /* Black for text */
}

header {
    background-color: #3498db; /* Sky blue color */
    color: #fff; /* Text color */
    padding: 1rem;
    text-align: center;
}

header h1 {
    font-family: 'Pacifico', cursive;
    font-size: 2rem;
    color: #fff; /* White */
}

header .highlight {
    color: #1abc9c; /* Turquoise color */
}

nav {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
}

nav a {
    color: #fff; /* White */
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
}

nav a:hover {
    background-color: #1abc9c; /* Turquoise color on hover */
}

main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    max-width: 1200px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.card {
    background-color: #fff; /* White from Botswana flag */
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card img {
    width: 200px;
    height: auto;
    margin-bottom: 1rem;
    border-radius: 8px;
}

h2 {
    color: #000; /* Black from Botswana flag */
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
    border-bottom: 2px solid #3498db; /* Sky blue underline */
    padding-bottom: 0.5rem;
}

footer {
    background-color: #000; /* Black from Botswana flag */
    color: #fff;
    text-align: center;
    padding: 1rem;
    margin-top: auto;
}

footer p {
    margin: 0.5rem 0;
}

p span {
    color: #3498db; /* Sky blue color */
}
