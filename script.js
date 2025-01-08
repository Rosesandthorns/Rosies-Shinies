let pokemonData = [];
let displayedPokemon = 0;

const pokemonContainer = document.getElementById("pokemon-container");

const pokemonList = [
    {
        nickname: "Chop",
        species: "#475 - Gallade",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Bat",
        species: "#475 - Gallade",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Placeholder",
        species: "Placeholder - Placeholder",
        description: "Placeholder",
        imageUrl: "https://via.placeholder.com/200"
    }
    // Add more shiny Pokémon as you like, just follow the same format
];

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

window.onload = displayPokemon;
