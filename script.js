console.log("Page loaded");
window.addEventListener("scroll", () => {
    console.log("Scrolled");
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

    if (nearBottom) {
        console.log("Near bottom, loading more Pokémon");
        displayPokemon();
    }
});
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
        nickname: "Placeholder",
        species: "Placeholder",
        description: "Placeholder",
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
        species: "Placeholder",
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
