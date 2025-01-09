let displayedPokemon = 0; // Tracks the number of displayed Pokémon
const pokemonContainer = document.getElementById("pokemon-container");

const pokemonList = [
    {
        nickname: "Chop",
        species: "#475 - Gallade",
        description: "A strong and noble Pokémon with sharp blades for arms.",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Nebula",
        species: "#094 - Gengar",
        description: "Nebula has a ghostly purple glow and surprises opponents with its powerful moves.",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Sparks",
        species: "#025 - Pikachu",
        description: "Sparks shines bright with its golden fur, sparking joy in every battle.",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Aqua",
        species: "#130 - Gyarados",
        description: "This shiny Gyarados has a fearsome red hue, radiating power and strength.",
        imageUrl: "https://via.placeholder.com/200"
    }
    // Add more Pokémon as needed
];

// Display Pokémon cards
function displayPokemon() {
    pokemonList.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        card.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.nickname}">
            <h3>${pokemon.nickname}</h3>
            <p>${pokemon.species}</p>
            <p>${pokemon.description}</p>
        `;

        pokemonContainer.appendChild(card);
    });
}

// Filter Pokémon by search query
function filterPokemon() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.nickname.toLowerCase().includes(searchQuery) ||
        pokemon.species.toLowerCase().includes(searchQuery)
    );

    // Clear the container and display filtered Pokémon
    pokemonContainer.innerHTML = "";
    filteredPokemon.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        card.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.nickname}">
            <h3>${pokemon.nickname}</h3>
            <p>${pokemon.species}</p>
            <p>${pokemon.description}</p>
        `;

        pokemonContainer.appendChild(card);
    });
}

// Initialize the page with all Pokémon displayed
window.onload = displayPokemon;
