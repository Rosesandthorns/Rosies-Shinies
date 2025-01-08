let pokemonData = [];
let displayedPokemon = 0;

const pokemonContainer = document.getElementById("pokemon-container");

const pokemonList = [
    {
        nickname: "Chop",
        species: "#0475 - Gallade",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Placeholder",
        species: "#Placeholder - Placeholder",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    }
    // Add more shiny Pokémon as you like, just follow the same format
];

function displayPokemon() {
    for (let i = displayedPokemon; i < displayedPokemon + 2; i++) {
        if (i >= pokemonList.length) break;
        const pokemon = pokemonList[i];

        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        card.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.nickname}">
            <h3>${pokemon.nickname}</h3>
            <p>${pokemon.species}</p>
            <p>${pokemon.description}</p>
        `;

        pokemonContainer.appendChild(card);
    }
    displayedPokemon += 2;
}

function filterPokemon() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.nickname.toLowerCase().includes(searchQuery) ||
        pokemon.species.toLowerCase().includes(searchQuery)
    );

    displayedPokemon = 0;
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

// Infinite scroll functionality
function checkScroll() {
    const scrollPosition = window.innerHeight + window.scrollY;
    const bottomPosition = document.documentElement.scrollHeight;

    if (scrollPosition >= bottomPosition - 100) {  // 100px from the bottom to trigger load more
        displayPokemon();
    }
}

// Load the first batch of Pokémon
window.onload = () => {
    displayPokemon();
    window.addEventListener("scroll", checkScroll); // Add scroll event listener
};
