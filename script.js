// script.js
console.log(pokemonList); // To ensure data is loaded

function updatePokemonCount(count) {
    const countElement = document.getElementById("pokemon-count");
    if (countElement) {
        countElement.textContent = `Displaying ${count} Pokémon`;
    }
}

function updateTotalPokemonCount() {
    const totalCountElement = document.getElementById("total-pokemon-count");
    if (totalCountElement) {
        const uniquePokemon = new Set(pokemonList.map(pokemon =>
            pokemon.species.replace(/(Hisuian|Galarian|Paldean|Alolan)\s+/i, '')
        )).size;
        totalCountElement.textContent = `Total Unique Pokémon: ${uniquePokemon}/989`;
    }
}

function displayPokemon(startIndex, count = 16) {
    const pokemonContainer = document.getElementById("pokemon-container");
    if (!pokemonContainer) {
        console.error("Pokemon container element not found!");
        return;
    }

    const searchQuery = searchInput.value.trim().toLowerCase();
    let filteredPokemon = originalPokemonList;

    if (searchQuery) {
        filteredPokemon = originalPokemonList.filter(pokemon =>
            pokemon.nickname.toLowerCase().includes(searchQuery) ||
            pokemon.species.toLowerCase().includes(searchQuery) ||
            (pokemon.tags && pokemon.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
        );
    }

    pokemonContainer.innerHTML = ''; // Clear the container before displaying new cards

    const remaining = filteredPokemon.length - startIndex;
    const loadCount = Math.min(count, remaining);

    for (let i = startIndex; i < startIndex + loadCount; i++) {
        if (i >= filteredPokemon.length) break;
        const pokemon = filteredPokemon[i];

        if (!pokemon || !pokemon.nickname || !pokemon.imageUrl) {
            console.warn(`Invalid data for Pokémon at index ${i}`, pokemon);
            continue;
        }

        const card = document.createElement("div");
        card.classList.add("pokemon-card");

        const tagsHtml = pokemon.tags.map(tag => `<span class="tag ${tag.toLowerCase().replace(/ /g, '-')}">${tag}</span>`).join(' ');

        card.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.nickname}">
            <h3>${pokemon.nickname}</h3>
            <p>${pokemon.species}</p>
            <p>${pokemon.description}</p>
            <div class="tags">${tagsHtml}</div>
        `;

        pokemonContainer.appendChild(card);
    }

    updatePokemonCount(filteredPokemon.length);
}

function checkScroll() {
    let debounceTimer;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomPosition = document.documentElement.scrollHeight;

        if (scrollPosition >= bottomPosition - 200) {
            const searchQuery = searchInput.value.trim().toLowerCase();
            const startIndex = displayedPokemon;
            const count = 16;

            if (!searchQuery) {
                displayPokemon(startIndex, count);
                displayedPokemon += count;
            }
        }
    }, 100);
}

document.getElementById('pokemon-count').textContent = `Displaying ${pokemonList.length} Pokémon`;
document.getElementById('total-pokemon-count').textContent = `Total Unique Pokémon: ${pokemonList.length}`;
