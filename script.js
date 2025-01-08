let currentIndex = 0;
const itemsPerPage = 2; // Number of Pokémon to display per page

// Function to render Pokémon cards
function renderPokemon() {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = ""; // Clear previous content

    const endIndex = Math.min(currentIndex + itemsPerPage, pokemonData.length);
    for (let i = currentIndex; i < endIndex; i++) {
        const pokemon = pokemonData[i];
        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        card.innerHTML = `
            <div class="pokemon-image">
                <img src="${pokemon.imgSrc}" alt="${pokemon.name}">
            </div>
            <div class="pokemon-info">
                <p class="nickname">${pokemon.nickname}</p>
                <p class="subtitle">${pokemon.number} - ${pokemon.name}</p>
                <p class="description">${pokemon.description}</p>
            </div>
        `;

        container.appendChild(card);
    }

    // If we've loaded all Pokémon, hide the "Load More" button
    if (currentIndex + itemsPerPage >= pokemonData.length) {
        document.getElementById("load-more").style.display = "none";
    }
}

// Function to load more Pokémon
function loadMore() {
    currentIndex += itemsPerPage;
    renderPokemon();
}

// Function to filter Pokémon based on search input
function filterPokemon() {
    const query = document.getElementById("search").value.toLowerCase();
    const filteredData = pokemonData.filter(pokemon => 
        pokemon.nickname.toLowerCase().includes(query) ||
        pokemon.name.toLowerCase().includes(query)
    );
    currentIndex = 0; // Reset to start
    renderFilteredPokemon(filteredData);
}

// Function to render filtered Pokémon
function renderFilteredPokemon(filteredData) {
    const container = document.getElementById("pokemon-container");
    container.innerHTML = ""; // Clear previous content

    filteredData.forEach(pokemon => {
        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        card.innerHTML = `
            <div class="pokemon-image">
                <img src="${pokemon.imgSrc}" alt="${pokemon.name}">
            </div>
            <div class="pokemon-info">
                <p class="nickname">${pokemon.nickname}</p>
                <p class="subtitle">${pokemon.number} - ${pokemon.name}</p>
                <p class="description">${pokemon.description}</p>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initial render of Pokémon
renderPokemon();
