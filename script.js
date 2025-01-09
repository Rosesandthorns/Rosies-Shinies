let pokemonData = [];
let displayedPokemon = 0;

const pokemonContainer = document.getElementById("pokemon-container");

const pokemonList = [
    {
        nickname: "Chop",
        species: "#475 - Gallade",
        description: "This Blue False Swiper Was Caught In Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Chedder",
        species: "#0805 - Stakataka",
        description: "This Yellow Wall Was Caught In The SWSH DlC, after 55 encounters",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Moonlight",
        species: "#609 - Chandelure",
        description: "This Flaming Candle Was Caught In Kitakami",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Jiggly",
        species: "#0039 - Jigglypuff",
        description: "This puffball was caught in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Aqua Antis",
        species: "#0055 - Golduck",
        description: "The Infamous Aqua Antis, Found in the SWSH DLC between my favourite shiny and my target",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "APE",
        species: "#0057 - Primeape",
        description: "This fighter was found in Paldea while looking for a Breloom",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Anger",
        species: "#0057 - Primeape",
        description: "This warrior was found in Paldea while looking for a Breloom, right after APE",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Fury",
        species: "#0058 - Growlithe",
        description: "This hotshot was found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Legend",
        species: "#0059 - Arcanine",
        description: "Fury's other brother, also found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Slow",
        species: "#0079 - Slowpoke",
        description: "This Simple Creature Was Caught In Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Grapé",
        species: "#0080 - Slowbro",
        description: "Grapé is just as slow as Slow, but looks like a grape, caught in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Clover",
        species: "#0084 - Doduo",
        description: "This sili birb was caught at Blueberry Acadamy",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Dodrio, Formally Lucky",
        species: "#0085 - Dotrio",
        description: "My first caught shiny, caught in PoGo",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Mint",
        species: "#0088 - Grimer",
        description: "This suprisingly nice smelling pile of poison was found while hunting Ditto in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Rotten",
        species: "#0089 - Muk",
        description: "Mint's rotten cousin, Rotten was found while hunting Ditto in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Volté",
        species: "#0100 - Voltorb",
        description: "This shocking orb was found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Electro",
        species: "#0101 - Electrode",
        description: "This shocking behemith was found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Sap",
        species: "#0103 - Alolan Exeggutor",
        description: "No one ever told sap to keep her head out of the clouds when at blueberry academy",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Summer",
        species: "#0103 - Exeggutor",
        description: "Summer loved the sun so much, she tried to reach for it, *almost there*. caught at blueberry academy",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Koffing",
        species: "#0109 - Koffing",
        description: "I caught this over a year ago in Kitakami, No clue why it's not named~",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Horseshoe",
        species: "#0128 - Paldean Tauros",
        description: "This raging tauros was for my first playthrough of violet, caught him on the second day of the game's release",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "lavander",
        species: "#0131 - Lapras",
        description: "This lapras was found in the chilly seas of the polar biome in Blueberry Academy",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Bloby",
        species: "#0132 - Ditto",
        description: "This shapeshifter kept me busy on hunting in Paldea for a few days",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Iggly",
        species: "#0174 - Igglybuff",
        description: "Aww, what a cuti- wait why do you have competitive and copycat-    Found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Fluffy",
        species: "#0179 - Mareep",
        description: "Fluffy is what would happen if cotten candy was alive, found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Flaffy",
        species: "#0180 - Flaaffy",
        description: "No, nor the name or species is a typo, thats how Flaaffy is spelt, its weird, caught in paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Shine",
        species: "#0183 - Maril",
        description: "this green orb was caught in Paldea, do you think you can use it to awaken Primal Rayquaza?",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Golden",
        species: "#0184 - Azumaril",
        description: "My first boosted odds shiny of Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Sudo",
        species: "#0185 - Sudowoodo",
        description: "This is a natural tree of Paldea, what do you mean its a Pokemon?",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Green",
        species: "#0187 - Hoppip",
        description: "This Hoppip is said to have flown over all of Paldea until it got sunburnt, and then turned green",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Hoppy",
        species: "#0188 - Skiploom",
        description: "The legend of Green may have been wrong, but you Cant deny the legend of Hoppy getting sunburnt in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Jumpy",
        species: "#0189 - Jumpluff",
        description: "Jumpy is the living embodiment of :3. bringing :3 to Paldea to this day",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Poffy",
        species: "#0194 - Wooper",
        description: "This pink goof has no thoughts at any given time, caught in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "King",
        species: "#0199 - Slowking",
        description: "This queen is slaying all gender norms in Paldea, slay Queen!",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Forret",
        species: "#0205 - Forretress",
        description: "This is how the great crator of Paldea was formed",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Dun",
        species: "#0206 - Dunsparce",
        description: "This snake was found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Present",
        species: "#0225 - Deibird",
        description: "Present is almost always late for Christmas in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Nick",
        species: "#0225 - Delibird",
        description: "Present's twin, caught in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Dour",
        species: "#0228 - Houndour",
        description: "This dark puppy was found in a cave in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Doom",
        species: "#0229 - Houndoom",
        description: "Doom was caught in the depths of Poco Path",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Radaz",
        species: "#0258 - Mudkip",
        description: "PINK FISH       was found in Blueberry Academy",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Pooch",
        species: "#0261 - Poochyena",
        description: "this yellow doggo was found in Kitakami while hatching eggs for Blueberry",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Peckish",
        species: "#0285 - Shroomish",
        description: "Caught in Paldea. this took, **8 hours.**",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Boxer",
        species: "#0296 - Makuhita",
        description: "I dont even remember catching this one, but its from Paldea",
        imageUrl: "https://via.placeholder.com/200"
    },
    {
        nickname: "Emerald",
        species: "#0302 - Sableye",
        description: "This gem was found in Paldea",
        imageUrl: "https://via.placeholder.com/200"
    }
];

// Function to display Pokémon cards
function displayPokemon(count = 16) {
    const remaining = pokemonList.length - displayedPokemon;
    const loadCount = Math.min(count, remaining);

    for (let i = displayedPokemon; i < displayedPokemon + loadCount; i++) {
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

    displayedPokemon += loadCount;
}

// Function to remove cards outside the viewport
function deloadPokemon() {
    const cards = document.querySelectorAll(".pokemon-card");
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.bottom < -300 || rect.top > window.innerHeight + 300) {
            card.remove();
        }
    });
}

// Handle scroll events to load more and deload Pokémon
let isScrolling = false;
function checkScroll() {
    if (isScrolling) return;
    isScrolling = true;

    requestAnimationFrame(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomPosition = document.documentElement.scrollHeight;

        if (scrollPosition >= bottomPosition - 200) {
            displayPokemon(16);
        }

        deloadPokemon();
        isScrolling = false;
    });
}

// Initialize the page
window.onload = () => {
    displayPokemon(16); // Load initial Pokémon
    window.addEventListener("scroll", checkScroll);
};
