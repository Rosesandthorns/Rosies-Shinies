let displayedPokemon = 0;

const pokemonContainer = document.getElementById("pokemon-container");
const searchInput = document.getElementById("search");

function updatePokemonCount(count) {
    const countElement = document.getElementById("pokemon-count");
    if (countElement) {
        countElement.textContent = `Displaying ${count}/${pokemonList.length} Pokémon`;
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

const originalPokemonList = [...pokemonList]; // Store original list

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
    if (!pokemonContainer) {
        console.error("Pokemon container element not found!");
        return;
    }

    const searchQuery = searchInput.value.trim().toLowerCase();
    let filteredPokemon = pokemonList;

    if (searchQuery) {
        filteredPokemon = originalPokemonList.filter(pokemon =>
            pokemon.nickname.toLowerCase().includes(searchQuery) ||
            pokemon.species.toLowerCase().includes(searchQuery) ||
            (pokemon.tags && pokemon.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
        );
    }

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

// Improved debounce logic for infinite scroll
let debounceTimer;
function checkScroll() {
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

// Update the displayed Pokémon count
document.getElementById('pokemon-count').textContent = `Displaying ${pokemonList.length} Pokémon`;
document.getElementById('total-pokemon-count').textContent = `Total Unique Pokémon: ${pokemonList.length}`;
