// Pokémon data array
const pokemonList = [
    {
        nickname: "Chop",
        species: "#475 - Gallade",
        description: "Placeholder description for Gallade.",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Placeholder",
        species: "Placeholder",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Placeholder",
        species: "#Placeholder - Placeholder",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Placeholder",
        species: "Placeholder",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    }
];

let displayedPokemon = 0; // Tracks the number of Pokémon displayed
const batchSize = 2; // Number of Pokémon to load per batch

// DOM Elements
const pokemonContainer = document.getElementById("pokemon-container");
const searchInput = document.getElementById("search");

// Function to display Pokémon cards
function displayPokemon() {
    for (let i = displayedPokemon; i < displayedPokemon + batchSize; i++) {
        if (i >= pokemonList.length) break; // Stop if all Pokémon are displayed
        const pokemon = pokemonList[i];

        // Create card element
        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        // Card content
        card.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.nickname}">
            <h3>${pokemon.nickname}</h3>
            <p>${pokemon.species}</p>
            <p>${pokemon.description}</p>
        `;

        pokemonContainer.appendChild(card); // Add card to the container
    }
    displayedPokemon += batchSize; // Update displayed Pokémon count
}

// Function to filter Pokémon based on search
function filterPokemon() {
    const searchQuery = searchInput.value.toLowerCase();
    const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.nickname.toLowerCase().includes(searchQuery) ||
        pokemon.species.toLowerCase().includes(searchQuery)
    );

    pokemonContainer.innerHTML = ""; // Clear current cards
    displayedPokemon = 0;

    // Display filtered Pokémon
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

// Function to handle infinite scroll
function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (nearBottom) {
        displayPokemon();
    }
}

// Attach event listeners
window.onload = () => {
    displayPokemon(); // Display initial batch of Pokémon
    window.addEventListener("scroll", handleScroll); // Add scroll listener
};
searchInput.addEventListener("input", filterPokemon); // Attach search functionality
