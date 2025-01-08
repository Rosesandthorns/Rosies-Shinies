let pokemonData = [];
let displayedPokemon = 0;

const pokemonContainer = document.getElementById("pokemon-container");
const loadMoreButton = document.getElementById("load-more");

const pokemonList = [
    {
        nickname: "Starlight",
        species: "#025 - Pikachu",
        description: "This Pikachu has a golden shiny hue and is known for its cheerful personality.",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Nebula",
        species: "#094 - Gengar",
        description: "Nebula has a ghostly purple glow and surprises opponents with its powerful moves.",
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

function loadMore() {
    displayPokemon();
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

window.onload = displayPokemon;
