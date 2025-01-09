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
        nickname: "Nebula",
        species: "#094 - Gengar",
        description: "Nebula has a ghostly purple glow and surprises opponents with its powerful moves.",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Bolt",
        species: "#025 - Pikachu",
        description: "An electric type with an energetic personality.",
        imageUrl: "https://via.placeholder.com/200"
    }
    // Add more Pokémon objects here
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

window.addEventListener("scroll", () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (nearBottom) {
        displayPokemon();
    }
});

window.onload = displayPokemon;
