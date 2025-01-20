let pokemonData = [];
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

const pokemonList = [
    {
        nickname: "Chop",
        species: "#475 - Gallade",
        description: "This Blue False Swiper Was Caught In Paldea",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Gallade.webp",
        tags: ["Favourite", "Fighting", "Psychic", "SV"]
    },
    {
        nickname: "Chedder",
        species: "#0805 - Stakataka",
        description: "This Yellow Wall Was Caught In The SWSH DlC, after 55 encounters",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Chedder.jpeg",
        tags: ["Favourite", "Ultra Beast", "Rock", "Steel", "SwSh"]
    },
    {
        nickname: "Moonlight",
        species: "#609 - Chandelure",
        description: "This Flaming Candle Was Caught In Kitakami",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Moonlight.png",
        tags: ["Favourite", "Fire", "Ghost", "SV"]
    },
    {
        nickname: "Jiggly",
        species: "#0039 - Jigglypuff",
        description: "This puffball was caught in Paldea",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Jiggly.png",
        tags: ["Fairy", "Normal", "SV"]
    },
    {
        nickname: "Aqua Antis",
        species: "#0055 - Golduck",
        description: "The Infamous Aqua Antis, Found in the SWSH DLC between my favourite shiny and my target",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Aqua%20Antis.png",
        tags: ["Water", "SwSh"]
    },
    {
        nickname: "APE",
        species: "#0057 - Primeape",
        description: "This fighter was found in Paldea while looking for a Breloom",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Primape.png",
        tags: ["Fighting", "SV"]
    },
    {
        nickname: "Anger",
        species: "#0057 - Primeape",
        description: "This warrior was found in Paldea while looking for a Breloom, right after APE",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Primape.png",
        tags: ["Fighting", "SV"]
    },
    {
        nickname: "Fury",
        species: "#0058 - Growlithe",
        description: "This hotshot was found in Paldea",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Fury.png",
        tags: ["Fire", "SV"]
    },
    {
        nickname: "Legend",
        species: "#0059 - Arcanine",
        description: "Fury's older brother, also found in Paldea",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Legendary.png",
        tags: ["Fire", "SV"]
    },
    {
        nickname: "Slow",
        species: "#0079 - Slowpoke",
        description: "This Simple Creature Was Caught In Paldea",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Slow.png",
        tags: ["Water", "Psychic", "SV"]
    },
    {
        nickname: "Grapé",
        species: "#0080 - Slowbro",
        description: "Grapé is just as slow as Slow, but looks like a grape, caught in Paldea",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Slowbro.png",
        tags: ["Water", "Psychic", "SV"]
    },
    {
        nickname: "Clover",
        species: "#0084 - Doduo",
        description: "This sili birb was caught at Blueberry Acadamy",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Clover.png",
        tags: ["Normal", "Flying", "SV"]
    },
    {
        nickname: "Dodrio, Formally Lucky",
        species: "#0085 - Dodrio",
        description: "My first caught shiny, caught in PoGo",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Lucky.png",
        tags: ["Normal", "Flying", "PoGo", "Favourite"]
    },
    {
        nickname: "Mint",
        species: "#0088 - Grimer",
        description: "This suprisingly nice smelling pile of poison was found while hunting Ditto in Paldea",
        imageUrl: "https://github.com/Rosesandthorns/Rosies-Shinies/blob/main/images/Mint.png",
        tags: ["Poison", "SV"]
    },
    {
        nickname: "Rotten",
        species: "#0089 - Muk",
        description: "Mint's rotten cousin, Rotten was found while hunting Ditto in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Poison", "SV"]
    },
    {
        nickname: "Volté",
        species: "#0100 - Voltorb",
        description: "This shocking orb was found in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Electric", "SV"]
    },
    {
        nickname: "Electro",
        species: "#0101 - Electrode",
        description: "This shocking behemith was found in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Electric", "SV"]
    },
    {
        nickname: "Sap",
        species: "#0103 - Alolan Exeggutor",
        description: "No one ever told sap to keep her head out of the clouds when at blueberry academy",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Grass", "Dragon", "SV"]
    },
    {
        nickname: "Summer",
        species: "#0103 - Exeggutor",
        description: "Summer loved the sun so much, she tried to reach for it, *almost there*. caught at blueberry academy",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Grass", "Dragon", "SV"]
    },
    {
        nickname: "Koffing",
        species: "#0109 - Koffing",
        description: "I caught this over a year ago in Kitakami, No clue why it's not named~",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Poison", "SV"]
    },
    {
        nickname: "Horseshoe",
        species: "#0128 - Paldean Tauros",
        description: "This raging tauros was for my first playthrough of violet, caught him on the second day of the game's release",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Fighting", "Favourite", "SV"]
    },
    {
        nickname: "lavander",
        species: "#0131 - Lapras",
        description: "This lapras was found in the chilly seas of the polar biome in Blueberry Academy",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Ice", "Water", "SV"]
    },
    {
        nickname: "Bloby",
        species: "#0132 - Ditto",
        description: "This shapeshifter kept me busy on hunting in Paldea for a few days",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Normal", "SV"]
    },
    {
        nickname: "Iggly",
        species: "#0174 - Igglybuff",
        description: "Aww, what a cuti- wait why do you have competitive and copycat-    Found in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Normal", "Fairy", "SV"]
    },
    {
        nickname: "Fluffy",
        species: "#0179 - Mareep",
        description: "Fluffy is what would happen if cotten candy was alive, found in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Electric", "SV"]
    },
    {
        nickname: "Flaffy",
        species: "#0180 - Flaaffy",
        description: "No, nor the name or species is a typo, thats how Flaaffy is spelt, its weird, caught in paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Electric", "SV"]
    },
    {
        nickname: "Shine",
        species: "#0183 - Marill",
        description: "this green orb was caught in Paldea, do you think you can use it to awaken Primal Rayquaza?",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Water", "Fairy", "SV"]
    },
    {
        nickname: "Golden",
        species: "#0184 - Azumaril",
        description: "My first boosted odds shiny of Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Water", "Fairy", "SV"]
    },
    {
        nickname: "Sudo",
        species: "#0185 - Sudowoodo",
        description: "This is a natural tree of Paldea, what do you mean its a Pokemon?",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Rock", "SV"]
    },
    {
        nickname: "Green",
        species: "#0187 - Hoppip",
        description: "This Hoppip is said to have flown over all of Paldea until it got sunburnt, and then turned green",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Grass", "Flying", "SV"]
    },
    {
        nickname: "Hoppy",
        species: "#0188 - Skiploom",
        description: "The legend of Green may have been wrong, but you Cant deny the legend of Hoppy getting sunburnt in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Grass", "Flying", "SV"]
    },
    {
        nickname: "Jumpy",
        species: "#0189 - Jumpluff",
        description: "Jumpy is the living embodiment of :3. bringing :3 to Paldea to this day",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Grass", "Flying", "SV"]
    },
    {
        nickname: "Poffy",
        species: "#0194 - Wooper",
        description: "This pink goof has no thoughts at any given time, caught in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Water", "Ground", "SV"]
    },
    {
        nickname: "King",
        species: "#0199 - Slowking",
        description: "This queen is slaying all gender norms in Paldea, slay Queen!",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Water", "Psychic", "SV"]
    },
    {
        nickname: "Forret",
        species: "#0205 - Forretress",
        description: "This is how the great crator of Paldea was formed",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Bug", "Steel", "SV"]
    },
    {
        nickname: "Dun",
        species: "#0206 - Dunsparce",
        description: "This snake was found in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Normal", "SV"]
    },
    {
        nickname: "Present",
        species: "#0225 - Deibird",
        description: "Present is almost always late for Christmas in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Ice", "Flying", "SV"]
    },
    {
        nickname: "Nick",
        species: "#0225 - Delibird",
        description: "Present's twin, caught in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Ice", "Flying", "SV"]
    },
    {
        nickname: "Dour",
        species: "#0228 - Houndour",
        description: "This dark puppy was found in a cave in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Fire", "Dark", "SV"]
    },
    {
        nickname: "Doom",
        species: "#0229 - Houndoom",
        description: "Doom was caught in the depths of Poco Path",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Fire", "Dark", "SV"]
    },
    {
        nickname: "Radaz",
        species: "#0258 - Mudkip",
        description: "PINK FISH was found in Blueberry Academy",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Water", "Ground", "SV"]
    },
    {
        nickname: "Pooch",
        species: "#0261 - Poochyena",
        description: "this yellow doggo was found in Kitakami while hatching eggs for Blueberry",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Dark", "SV"]
    },
    {
        nickname: "Peckish",
        species: "#0285 - Shroomish",
        description: "Caught in Paldea. this took, **8 hours.**",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Grass", "SV"]
    },
    {
        nickname: "Boxer",
        species: "#0296 - Makuhita",
        description: "I dont even remember catching this one, but its from Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Fighting", "SV"]
    },
    {
        nickname: "Emerald",
        species: "#0302 - Sableye",
        description: "This gem was found in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Dark", "Ghost", "SV"]
    },
    {
        nickname: "Spoey",
        species: "#0325 - Spoink",
        description: "Bouncing all the way from Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["psychic", "SV"]
    },
    {
        nickname: "Grum",
        species: "#0326 - Grumpig",
        description: "A psychic pig from Paldea, neat",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["psychic", "SV"]
    },
    {
        nickname: "Swab",
        species: "#0334 - Altaria",
        description: "How is this a dragon     From Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["flying", "dragon", "SV"]
    },
    {
        nickname: "Cory",
        species: "#031 - Corphish",
        description: "This Corphish was found in Kitakami",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Water", "SV"]
    },
    {
        nickname: "Ivy",
        species: "#0373 - Salamance",
        description: "Palkias Weakness, from Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["dragon", "flying", "SV"]
    },
    {
        nickname: "Lightning",
        species: "#0403 - Shinx",
        description: "Shinx was my first shiny actually, back in Gen 4, anyways this one is from Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["electric", "SV"]
    },
    {
        nickname: "Static",
        species: "#0403 - Shinx",
        description: "From Paldea, nothing else to say",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["electric", "SV"]
    },
    {
        nickname: "Sparse",
        species: "#0418 - Buizel",
        description: "I got the name from the sparse reef in Subnatica, this one is from Paldea though",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["water", "SV"]
    },
    {
        nickname: "Savior",
        species: "#0418 - Buizel",
        description: "I barely remember this one, Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["water", "SV"]
    },
    {
        nickname: "Excadrill",
        species: "#0530 - Excadrill",
        description: "Excadrill",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["ground, steel", "SV"]
    },
    {
        nickname: "Dream",
        species: "#0570 - Zoura",
        description: "Found him in Paldea, disquised as a Maschiff",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["dark", "SV"]
    },
    {
        nickname: "Blueberry",
        species: "#0570 - Hisuian Zoira",
        description: "My first sucsessful masuda hunt, hatched in SV",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["Ghost", "normal", "Favourite", "SV"]
    },
    {
        nickname: "Nightmare",
        species: "#0571 - Zoroark",
        description: "Found haunting dreams in Paldea",
        imageUrl: "https://via.placeholder.com/200",
        tags: ["dark", "SV"]
    },
    {
    nickname: "Mushrö",
    species: "#0591 - Amoonguss",
    description: "Caught this and 3 others in paldea in the span of 2 minutes",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Poison", "SV"]
    },
    {
    nickname: "Lunar",
    species: "#0607 - Litwik",
    description: "Found her in Kitakami",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Fire", "SV"]
    },
    {
    nickname: "Volcano",
    species: "#0637 - Volcarona",
    description: "Used to hatch eggs for me for a bit, from Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Fire", "SV"]
    },
    {
    nickname: "Fletch",
    species: "#0662 - Fletchinder",
    description: "Also used to hatch eggs for me for a bit, From Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Flying", "SV"]
    },
    {
    nickname: "Lit",
    species: "#0667 - Litleo",
    description: "I have no memory of this - from Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Normal", "SV"]
    },
    {
    nickname: "Pyroar",
    species: "#0668 - Pyroar",
    description: "Honestly I dont remember any of the pyroar line it would appear, from Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Normal", "SV"]
    },
    {
    nickname: "Redemtion",
    species: "#0672 - Skiddo",
    description: "The brought back Paldean shiny",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "SV"]
    },
    {
    nickname: "Lil Leaf",
    species: "#0672 - Skiddo",
    description: "A skiddo a day keeps the sadness away, from Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "SV"]
    },
    {
    nickname: "Momento",
    species: "#0673 - Gogoat",
    description: "I dont know why I named it is, I dont regret it though, from Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "SV"]
    },
    {
    nickname: "Lucha",
    species: "#0701 - Hawlucha",
    description: "A wreastler at heart, from Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "Flying", "SV"]
    },
    {
    nickname: "Token",
    species: "#0706 - Goodra",
    description: "My first shiny from a brand new game, caught on the release date of SV",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Favourite", "SV"]
    },
    {
    nickname: "Frost",
    species: "#0713 - Avalugg",
    description: "Why is the home model giant at the time of writing this, caught in Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Morgan",
    species: "#0730 - Prismarina",
    description: "Caught him in Blueberry academy",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Fairy", "SV"]
    },
    {
    nickname: "Zazu",
    species: "#0733 - Toucannon",
    description: "Bisexual bird, found at Blueberry Academy",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "SV"]
    },
    {
    nickname: "Chargi",
    species: "#0737 - Charjabug",
    description: "Caught in Kitakami, no history on this one",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Electric", "SV"]
    },
    {
    nickname: "Volt",
    species: "#0738 - Vikavolt",
    description: "Ace of my dlc team for SV",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Electric", "SV"]
    },
    {
    nickname: "Brawler",
    species: "#0739 - Crabrawler",
    description: "Always looking for a fight, found in Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "SV"]
    },
    {
    nickname: "Kamal",
    species: "#0740 - Crabominable",
    description: "Never looking for a fight, Found in Blueberry Academy",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "Ice", "SV"]
    },
    {
    nickname: "Cutie",
    species: "#0742 - Cutiefly",
    description: "So hard to see, yet such a nice shiny, Kitamaki",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Fairy", "SV"]
    },
    {
    nickname: "Rocky",
    species: "#0744 - Rockruff",
    description: "No memory of this one :p, Paldea",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "SV"]
    },
    {
    nickname: "Marine",
    species: "#0747 - Mareanie",
    description: "While making this I realized Mareanie is a mix of Marine and Meanie...",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Poison", "SV"]
    },
    {
    nickname: "Toxic",
    species: "#0748 - Toxapex",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Poison", "SV"]
    },
    {
    nickname: "Salandit",
    species: "#0757 - Salandit",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Poison", "SV"]
    },
    {
    nickname: "Ghosty",
    species: "#0769 - Sandygast",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Ghost", "SV"]
    },
    {
    nickname: "Shinyghast",
    species: "#0769 - Sandygast",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Ghost", "SV"]
    },
    {
    nickname: "Sandy",
    species: "#0770 - Palossand",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Ghost", "SV"]
    },
    {
    nickname: "Starlight",
    species: "#0774 - Minior",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Flying", "SV"]
    },
    {
    nickname: "Biter",
    species: "#0833 - Chewtle",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Dred",
    species: "#0834 - Drednaw",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Lactose",
    species: "#0868 - Milcery",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "SV"]
    },
    {
    nickname: "Waddles",
    species: "#0915 - Lechonk",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Oinky",
    species: "#0916 - oinkologne",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Webber",
    species: "#0917 - tarountula",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "SV"]
    },
    {
    nickname: "Silky",
    species: "#0917 - tarountula",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "SV"]
    },
    {
    nickname: "Spiderman",
    species: "#918 - Spidops",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "SV"]
    },
    {
    nickname: "Kicks",
    species: "#0920 - lokix",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Dark", "SV"]
    },
    {
    nickname: "Paw",
    species: "#0922 - Pawmo",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Dark", "SV"]
    },
    {
    nickname: "Smiles",
    species: "#0942 - Maschiff",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "SV"]
    },
    {
    nickname: "Twig",
    species: "#0946 - Bramblin",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Grass", "SV"]
    },
    {
    nickname: "Toed",
    species: "#0948 - Toedscool",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Ground", "SV"]
    },
    {
    nickname: "scruel",
    species: "#0949 - Toedscruel",
    description: "The name is not missing a capital, I don't know why either",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "ground", "SV"]
    },
    {
    nickname: "Jolly",
    species: "#0950 - Klawf",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "SV"]
    },
    {
    nickname: "Seeds",
    species: "#0951 - Capsakid",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "SV"]
    },
    {
    nickname: "Scorch",
    species: "#0952 - Scovillan",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Fire", "SV"]
    },
    {
    nickname: "Richy",
    species: "#0953 - Rellor",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "SV"]
    },
    {
    nickname: "Acient",
    species: "#0954 - Rabsca",
    description: "I don't know how I mispelled 'ancient' so much",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Psychic", "SV"]
    },
    {
    nickname: "Spinny",
    species: "#0955 - Flittle",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "SV"]
    },
    {
    nickname: "Karen",
    species: "#0956 - Espathra",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "SV"]
    },
    {
    nickname: "Peral",
    species: "#0963 - Finizen",
    description: "I couldn't spell apparently...",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "zen",
    species: "#0963 - Finizen",
    description: "Why and how is it not capitalized",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Splash",
    species: "#0964 - Palafin",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Speds",
    species: "#0965 - Varoom",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Steel", "SV"]
    },
    {
    nickname: "Orth",
    species: "#0968 - Orthworm",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "SV"]
    },
    {
    nickname: "Amigo",
    species: "#0973 - Flamigo",
    description: "Why is this fighting type? Caught in SV",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Flying", "Fighting", "SV"]
    },
    {
    nickname: "Amend",
    species: "#0976 - Veluza",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Dozo",
    species: "#0977 - Dondozo",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Sushie",
    species: "#0978 - Tatsugiri",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Dragon", "SV"]
    },
    {
    nickname: "Spook",
    species: "#0979 - Annihilape",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Fighting", "SV"]
    },
    {
    nickname: "Fari",
    species: "#0981 - Farigiraf",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Dudun",
    species: "#0982 - Dudunsparce",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Sharpie",
    species: "#0983 - Kingambit",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Steel", "SV"]
    },
    {
    nickname: "Silver",
    species: "#0990 - Iron Treads",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Ground", "SV"]
    },
    {
    nickname: "Chrome",
    species: "#0991 - Iron Bundle",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Water", "SV"]
    },
    {
    nickname: "Warrior",
    species: "#0992 - Iron Hands",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "Electric", "SV"]
    },
    {
    nickname: "lantern",
    species: "#0993 - Iron Jugulis",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Flying", "SV"]
    },
    {
    nickname: "Mothlight",
    species: "#0994 - Iron Moth",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Poison", "SV"]
    },
    {
    nickname: "Thorns",
    species: "#0995 - Iron Thorns",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Electric", "SV"]
    },
    {
    nickname: "Gimmi",
    species: "#0999 - Gimmighoul",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "SV"]
    },
    {
    nickname: "Ribben",
    species: "#1006 - Iron Valiant",
    description: "I am just noticing i spelt Ribbon wrong over 2 years later",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "Fighting", "SV"]
    },
    {
    nickname: "Syrup",
    species: "#1011 - Dipplin",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Grass", "SV"]
    },
    {
    nickname: "Staples",
    species: "#1018 - Archaludon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Dragon", "SV"]
    },
    {
    nickname: "Si-fi",
    species: "#0055 - Golduck",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Jade",
    species: "#0067 - Machoke",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "PLA"]
    },
    {
    nickname: "Bolt",
    species: "#0081 - Magnemite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Steel", "SV"]
    },
    {
    nickname: "Jean",
    species: "#0112 - Rhydon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Rock", "SV"]
    },
    {
    nickname: "Dice",
    species: "#0123 - Scyther",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Flying", "SV"]
    },
    {
    nickname: "Flip",
    species: "#0129 - Magikarp",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Legendary",
    species: "#0130 - Gyarados",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Flying", "SV"]
    },
    {
    nickname: "Snowy",
    species: "#0133 - Eevee",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Jolt",
    species: "#0135 - Jolteon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Static",
    species: "#0103 - Porygon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Snorlax",
    species: "#0143 - Snorlax",
    description: "This Snorlax was my first SwSh shiny",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SwSh"]
    },
    {
    nickname: "Puff",
    species: "#01 - ",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "PLA"]
    },
    {
    nickname: "Eve",
    species: "#0196 - Espeon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "SV"]
    },
    {
    nickname: "Midnight",
    species: "#0197 - Umbreon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "SV"]
    },
    {
    nickname: "Slice",
    species: "#0212 - Scizor ",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Steel", "SV"]
    },
    {
    nickname: "Cross",
    species: "#0214 - Heracross",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Fighting", "SV"]
    },
    {
    nickname: "Pop",
    species: "#0215 -  Sneasel",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Ice", "SV"]
    },
    {
    nickname: "Sleepy",
    species: "#0260 - Ralts",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "Fairy", "SV"]
    },
    {
    nickname: "Twist",
    species: "#0261 - Kirlia",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "Fairy", "SV"]
    },
    {
    nickname: "Velvet",
    species: "#0355 - Duskull",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "SV"]
    },
    {
    nickname: "Hoover",
    species: "#0364 - Sealeo",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Water", "PLA"]
    },
    {
    nickname: "Flint",
    species: "#0390 - Chimchar",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Starter", "SV"]
    },
    {
    nickname: "Pearl",
    species: "#0393 - Piplup",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Starter", "PLA"]
    },
    {
    nickname: "Beethoven",
    species: "#0401 - Kricketot",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "PLA"]
    },
    {
    nickname: "Thunder",
    species: "#0404 - Luxio",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Storm",
    species: "#0405 - Luxray",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Rosie",
    species: "#0407 - Roserade",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Poison", "PLA"]
    },
    {
    nickname: "Strawberry",
    species: "#0435 - Skuntank",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Dark", "PLA"]
    },
    {
    nickname: "Penny",
    species: "#0437 - Bronzong",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Psychic", "SV"]
    },
    {
    nickname: "Bella",
    species: "#0440 - Happiny",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "PLA"]
    },
    {
    nickname: "Crag",
    species: "#0453 - Croagunk",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Fighting", "SV"]
    },
    {
    nickname: "Toxicroak",
    species: "#0454 - Toxicroak",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Fighting", "SV"]
    },
    {
    nickname: "Snowflake",
    species: "#0474 - Porygon-Z",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Plasma",
    species: "#0479 - Rotom",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Ghost", "SV"]
    },
    {
    nickname: "Abyss",
    species: "#0628 - Hisuian Braviary",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "Flying", "SV"]
    },
    {
    nickname: "Yellow",
    species: "#0712 - Bergmite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Chilly",
    species: "#0712 - Bergmite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Lust",
    species: "#0528 - Swoobat",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "Flying", "SwSh"]
    },
    {
    nickname: "Yellowstone",
    species: "#0879 - Copperajah",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "SwSh"]
    },
    {
    nickname: "Queen",
    species: "#0075 - Alolan Graveler",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Electric", "SV"]
    },
    {
    nickname: "Butterscotch",
    species: "#0026 - Raichu",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Psychic", "SWSh"]
    },
    {
    nickname: "Sonar",
    species: "#0048 - Venonat",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Poison", "SV"]
    },
    {
    nickname: "Tempo",
    species: "#0163 - Hoothoot",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "SV"]
    },
    {
    nickname: "Hedwig",
    species: "#0164 - Noctowl",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "SV"]
    },
    {
    nickname: "Plasma",
    species: "#0181 - Ampharos",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Orbet",
    species: "#0211 - Qwillfish",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Poison", "SwSh"]
    },
    {
    nickname: "Glitch",
    species: "#0233 - Porgon2",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Green Apple",
    species: "#0234 - Stantler",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Rabaz",
    species: "#0260 - Swampert",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Ground", "SV"]
    },
    {
    nickname: "Lovely",
    species: "#0370 - Luvdisc",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Shifu",
    species: "#0619 - Mienfoo",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "SV"]
    },
    {
    nickname: "Autumn",
    species: "#0709 - Trevenant",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Grass", "SV"]
    },
    {
    nickname: "Mudé",
    species: "#0749 - Mudbray",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "SV"]
    },
    {
    nickname: "Agent",
    species: "#0752 - Araquanid",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Bug", "SwSh"]
    },
    {
    nickname: "Tock",
    species: "#0962 - Bombirder",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Flying", "SV"]
    },
    {
    nickname: "Earl Grey",
    species: "#0854 - Authentic Sinistea",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "SV"]
    },
    {
    nickname: "Bronze",
    species: "#0823 - Corviknight",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Flying", "Steel", "SV"]
    },
    {
    nickname: "Bronze",
    species: "#0823 - Corviknight",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Flying", "Steel", "SV"]
    },
    {
    nickname: "Lime",
    species: "#0027 - Sandshrew",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "SV"]
    },
    {
    nickname: "Naught",
    species: "#0074 - Geodude",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Ground", "SV"]
    },
    {
    nickname: "Pink",
    species: "#0147 - Dratini",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "SV"]
    },
    {
    nickname: "Blue",
    species: "#0167 - Spinarak",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Poison", "SV"]
    },
    {
    nickname: "Moonbound",
    species: "#0216 - Teddiursa",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Deli",
    species: "#0225 - Delibird",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Flying", "SV"]
    },
    {
    nickname: "Flya",
    species: "#0330 - Flygon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Dragon", "SV"]
    },
    {
    nickname: "Uranium",
    species: "#0436 - Bronzor",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Psychic", "SV"]
    },
    {
    nickname: "Claw",
    species: "#0693 - Clawitzer",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Bannana",
    species: "#0810 - Grookey",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "SV"]
    },
    {
    nickname: "Chilly",
    species: "#0875 - Eiscue",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Jessica",
    species: "#0195 - Quagsire",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Ground", "SV"]
    },
    {
    nickname: "Fauna",
    species: "#0357 - Tropius",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Flying", "SV"]
    },
    {
    nickname: "Pawn",
    species: "#0624 - Pawniard",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Steel", "SV"]
    },
    {
    nickname: "Apple Pie",
    species: "#0842 - Appletun",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Dragon", "SV"]
    },
    {
    nickname: "Derpy",
    species: "#0928 - Smoliv",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Normal", "SV"]
    },
    {
    nickname: "Char-Chi",
    species: "#0935 - Charcadet",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "SV"]
    },
    {
    nickname: "Purple",
    species: "#0943 - Mabosstiff",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "SV"]
    },
    {
    nickname: "Phantom",
    species: "#0442 - Spiritomb",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Dark", "Favourite", "SV"]
    },
    {
    nickname: "Energy",
    species: "#0100 - Hisuian Voltorb",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Electric", "SV"]
    },
    {
    nickname: "Beryl",
    species: "#0246 - Larvitar",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Ground", "SV"]
    },
    {
    nickname: "Flame",
    species: "#0608 - Lamoert",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Fire", "SV"]
    },
    {
    nickname: "Nosey",
    species: "#0299 - Nosepass",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "SV"]
    },
    {
    nickname: "Cloak",
    species: "#0361 - Snorunt",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Compass",
    species: "#0476 - Probopass",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Steel", "SV"]
    },
    {
    nickname: "Dasie",
    species: "#0970 - Glimmora",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Poison", "SV"]
    },
    {
    nickname: "Electrode",
    species: "#0101 - Hisuian Electrode",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Grass", "SV"]
    },
    {
    nickname: "Rufflet",
    species: "#0627 - Rufflet",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "Pla"]
    },
    {
    nickname: "Abra",
    species: "#0063 - Abra",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "PLA"]
    },
    {
    nickname: "Kadabra",
    species: "#0064 - Kadabra",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "PLA"]
    },
    {
    nickname: "Chance",
    species: "#0133 - Chansey",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Flop",
    species: "#0130 - Gyarados",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Flying", "SV"]
    },
    {
    nickname: "Darky",
    species: "#0198 - Murkrow",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Flying", "SV"]
    },
    {
    nickname: "Floaté",
    species: "#0419 - Floatzel",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Flying", "SV"]
    },
    {
    nickname: "Krow",
    species: "#0430 - Honchkrow",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Flying", "SV"]
    },
    {
    nickname: "Lemon",
    species: "#0463 - Lickilicky",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "PLA"]
    },
    {
    nickname: "Shade",
    species: "#0092 - Ghastly",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Poison", "Pla"]
    },
    {
    nickname: "Gul",
    species: "#0316 - Gulpin",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "SV"]
    },
    {
    nickname: "Twig",
    species: "#0387 - Turtwig",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "PLA", "Starter"]
    },
    {
    nickname: "Beach",
    species: "#0369 - Relicanth",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Rock", "Favourite", "SwSh"]
    },
    {
    nickname: "Toxic",
    species: "#0849 - Toxitricity",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Electric", "SwSh"]
    },
    {
    nickname: "Leah",
    species: "#0270 - Lotad",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Grass", "SV"]
    },
    {
    nickname: "Droop",
    species: "#0271 - Lombre",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Grass", "SV"]
    },
    {
    nickname: "Marty",
    species: "#0272 - Ludicolo",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Grass", "SV"]
    },
    {
    nickname: "Blaze",
    species: "#0391 - Monferno",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Fighting", "Starter", "SV"]
    },
    {
    nickname: "Fault",
    species: "#0436 - Bronzor",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Psychic", "SV"]
    },
    {
    nickname: "Bloom",
    species: "#0585 - Deerling",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Grass", "SV"]
    },
    {
    nickname: "Bubbles",
    species: "#0657 - Frogadier",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Starter", "SV"]
    },
    {
    nickname: "Rogue",
    species: "#0658 - Greninja",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Dark", "Starter", "SV"]
    },
    {
    nickname: "Rachel",
    species: "#0739 - Crabrawler",
    description: "Plaeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "SV"]
    },
    {
    nickname: "Koka",
    species: "#0958 - Tinkatuff",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "Steel", "SV"]
    },
    {
    nickname: "Dane",
    species: "#0965 - Varoom",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Poison", "SV"]
    },
    {
    nickname: "Motar",
    species: "#0966 - Revavroom",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Poison", "SV"]
    },
    {
    nickname: "Serpant",
    species: "#1019 - Hydrapple",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Dragon", "SV"]
    },
    {
    nickname: "Inferno",
    species: "#0392 - Infernape",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Fighting", "Starter", "SV"]
    },
    {
    nickname: "Palm",
    species: "#0103 - Exeggutor",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Psychic", "SV"]
    },
    {
    nickname: "Night",
    species: "#0164 - Noctowl",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "SV"]
    },
    {
    nickname: "Golden",
    species: "#0250 - Ho-Oh",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Flying", "SwSh", "Legendary", "Favourite"]
    },
    {
    nickname: "Shock",
    species: "#0403 - Shinx",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Clawy",
    species: "#0693 - Clawitzer",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Bowtie",
    species: "#0722 - Rowlet",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Flying", "Starter", "SV"]
    },
    {
    nickname: "Heart",
    species: "#0782 - Jangmo-o",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "SV"]
    },
    {
    nickname: "Rose Quartz",
    species: "#0783 - Hakamo-o",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Fighting", "SV"]
    },
    {
    nickname: "Eclipse",
    species: "#0792 - Lunala",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "Ghost", "SwSh", "Favourite", "Legendary"]
    },
    {
    nickname: "Shockasaur",
    species: "#0880 - Dracozolt",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Dragon", "Swsh", "Fossil"]
    },
    {
    nickname: "Wiskers",
    species: "#0882 - Dracovish",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fossil", "Water", "Dragon", "Swsh", "Favourite"]
    },
    {
    nickname: "Shelly",
    species: "#0139 - Omastar",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Water", "SwSh", "Fossil"]
    },
    {
    nickname: "Aero",
    species: "#0142 - Aerodactyl",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Flying", "SwSh", "Fossil"]
    },
    {
    nickname: "Icicle",
    species: "#0881 - Arctozolt",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Ice", "SwSh", "Fossil"]
    },
    {
    nickname: "Frox",
    species: "#0883 - Arctovish",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Ice", "SwSh", "Fossil"]
    },
    {
    nickname: "Fishius",
    species: "#0883 - Arctovish",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Ice", "SwSh", "Fossil"]
    },
    {
    nickname: "Spike",
    species: "#0028 - Sandslash",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "SV"]
    },
    {
    nickname: "Rocky",
    species: "#0074 - Geodude",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Ground", "SV"]
    },
    {
    nickname: "Gem",
    species: "#0356 - Dusclops",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "SV"]
    },
    {
    nickname: "Mustard",
    species: "#0849 - Mudbray",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "SV"]
    },
    {
    nickname: "Clay",
    species: "#0750 - Mudsdale",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "SV"]
    },
    {
    nickname: "Foilage",
    species: "#0069 - Bellsprout",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Poison", "SV"]
    },
    {
    nickname: "Diamond",
    species: "#0703 - Carbink",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Fairy", "SV"]
    },
    {
    nickname: "Pike",
    species: "#0731 - Pikipek",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "SV"]
    },
    {
    nickname: "Sarry",
    species: "#0070 - Weepinbell",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Poison", "SV"]
    },
    {
    nickname: "Honey",
    species: "#0749 - Mudbray",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "SV"]
    },
    {
    nickname: "Morka",
    species: "#0877 - Morpeko",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Dark", "SV"]
    },
    {
    nickname: "Sugar",
    species: "#0861 - Grimmsnarl",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Fairy", "Favourite", "SV"]
    },
    {
    nickname: "Star",
    species: "#0396 - Starly",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "SV"]
    },
    {
    nickname: "Mozart",
    species: "#0402 - Kricketune",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "SV"]
    },
    {
    nickname: "Fergus",
    species: "#0590 - Foongus",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Poison", "SV"]
    },
    {
    nickname: "Theo",
    species: "#0811 - Thwackey",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Starter", "SV"]
    },
    {
    nickname: "Shade",
    species: "#0157 - Hisuian Typhlosion",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Ghost", "Starter", "PLA"]
    },
    {
    nickname: "Journey",
    species: "#0874 - Stonjourner",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "SV"]
    },
    {
    nickname: "Rory",
    species: "#0931 - Squawkabilly",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "SV"]
    },
    {
    nickname: "Ori",
    species: "#0741 - Oricorio",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Flying", "Fire", "SV"]
    },
    {
    nickname: "Wyrm",
    species: "#0840 - Applin",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Dragon", "SV"]
    },
    {
    nickname: "Sky",
    species: "#0841 - Flapple",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Dragon", "SV"]
    },
    {
    nickname: "Indigo",
    species: "#0937 - Ceruledge",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Ghost", "SV"]
    },
    {
    nickname: "Noodle",
    species: "#0944 - Shroodle",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Normal", "SV"]
    },
    {
    nickname: "Hocus",
    species: "#0065 - Alakazam",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "PLA"]
    },
    {
    nickname: "Tessa",
    species: "#0365 - Walrein",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Water", "PLA"]
    },
    {
    nickname: "Tabba",
    species: "#0901 - Ursaluna",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Normal", "SV"]
    },
    {
    nickname: "Husk",
    species: "#0947 - Brambleghast",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Ghost", "SV"]
    },
    {
    nickname: "Calamari",
    species: "#0224 - Octillery",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "PLA"]
    },
    {
    nickname: "Gilded",
    species: "#0205 - Forretress",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Steel", "SV"]
    },
    {
    nickname: "Toya",
    species: "#0754 - Lurantis",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "SV"]
    },
    {
    nickname: "Muck",
    species: "#0980 - Clodsire",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Ground", "SV"]
    },
    {
    nickname: "Salad",
    species: "#0757 - Salandit",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Fire", "SV"]
    },
    {
    nickname: "Pako",
    species: "#0765 - Oranguru",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Psychic", "SV"]
    },
    {
    nickname: "Cupa",
    species: "#0247 - Pupitar",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Ground", "SV"]
    },
    {
    nickname: "Latte",
    species: "#0924 - Tandemaus",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Dunny",
    species: "#0982 - Dununsparce",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Flutter",
    species: "#0987 - Flutter Mane",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Fairy", "SV", "Paradox"]
    },
    {
    nickname: "Brood",
    species: "#0985 - Scream Tail",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "Psychic", "Paradox", "SV"]
    },
    {
    nickname: "Virtue",
    species: "#0049 - Venomoth",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["bug", "Poison", "SV"]
    },
    {
    nickname: "Venom",
    species: "#0049 - Venomoth",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Poison", "SV"]
    },
    {
    nickname: "Alta",
    species: "#0334 - Altaria",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Flying", "SV"]
    },
    {
    nickname: "Girl Boss",
    species: "#0443 - Gible",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Ground", "SV"]
    },
    {
    nickname: "Zwelly",
    species: "#0634 - Zweilous",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Dragon", "SV"]
    },
    {
    nickname: "Agore",
    species: "#0986 - Brute Bonnet",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Dark", "Paradox", "SV"]
    },
    {
    nickname: "Brute",
    species: "#0986 - Brute Bonnet",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Dark", "Paradox", "SV"]
    },
    {
    nickname: "Solarflare",
    species: "#0988 - Slither Wing",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Fighting", "SV"]
    },
    {
    nickname: "Olive",
    species: "#0635 - Hydreigon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Dragon", "SV"]
    },
    {
    nickname: "Salt",
    species: "#0934 - Gargancl",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "SV"]
    },
    {
    nickname: "Shine",
    species: "#0970 - Glimmora",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Poison", "SV"]
    },
    {
    nickname: "Dominari",
    species: "#0984 - Great Tusk",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Fighting", "SV"]
    },
    {
    nickname: "Ion",
    species: "#0989 - Sandy Shocks",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Ground", "SV"]
    },
    {
    nickname: "Burning Sun",
    species: "#10005 - Roaring Moon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Dark", "Paradox", "SV"]
    },
    {
    nickname: "Poke",
    species: "#0025 - Pikachu",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "PLA"]
    },
    {
    nickname: "Perry",
    species: "#0047 - Parasect",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Bug", "PLA"]
    },
    {
    nickname: "Silver",
    species: "#0078 - Rapidash",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Alpha", "PLA"]
    },
    {
    nickname: "Bluetooth",
    species: "#0093 - Haunter",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Poison", "SV"]
    },
    {
    nickname: "Volo",
    species: "#0198 - Murkrow",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Flying", "PLA"]
    },
    {
    nickname: "Mirra",
    species: "#0198 - Murkrow",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Flying", "PLA"]
    },
    {
    nickname: "Qwil",
    species: "#0211 - Hisuian Qwilfish",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Poison", "PLA"]
    },
    {
    nickname: "Qwilly",
    species: "#0211 - Hisuian Qwilfish",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Poison", "PLA"]
    },
    {
    nickname: "Silk",
    species: "#0265 - Wurmple",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "PLA"]
    },
    {
    nickname: "Egg",
    species: "#0268 - Cascoon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "PLA"]
    },
    {
    nickname: "Aqua",
    species: "#0388 - Grotle",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Starter", "PLA"]
    },
    {
    nickname: "Captin",
    species: "#0397 - Staravia",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "PLA"]
    },
    {
    nickname: "Feather",
    species: "#0397 - Staravia",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "PLA"]
    },
    {
    nickname: "Piolit",
    species: "#0398 - Staraptor",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "PLA"]
    },
    {
    nickname: "Key",
    species: "#0404 - Luxio",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "PLA"]
    },
    {
    nickname: "Para",
    species: "#0441 - Chattot",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "Alpha", "PLA"]
    },
    {
    nickname: "Eaties",
    species: "#0446 - Munchlax",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "PLA"]
    },
    {
    nickname: "Flytrap",
    species: "#0455 - Carnivine",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Alpha", "PLA"]
    },
    {
    nickname: "Sherbert",
    species: "#0712 - Bergmite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "PLA"]
    },
    {
    nickname: "Charm",
    species: "#0267 - Beautifly",
    description: "My first shiny on the switch",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Flying", "PLA", "Favourite"]
    },
    {
    nickname: "Razor",
    species: "#0461 - Weavile",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Ice", "SV"]
    },
    {
    nickname: "Steel",
    species: "#0208 - Steelix",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "Steel", "PLA"]
    },
    {
    nickname: "Blackberry",
    species: "#0571 - Hisuian Zoroark",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Ghost", "Alpha", "PLA"]
    },
    {
    nickname: "Reaper",
    species: "#0487 - Giratina",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Dragon", "Legendary", "SwSh"]
    },
    {
    nickname: "Ashen",
    species: "#0038 - Ninetales",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Alpha", "PLA"]
    },
    {
    nickname: "Pumpkin",
    species: "#0041 - Zubat",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Flying", "PLA"]
    },
    {
    nickname: "Batty",
    species: "#0042 - Golbat",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Flying", "PLA"]
    },
    {
    nickname: "Anas Blue",
    species: "#0054 - Psyduck",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "PLA"]
    },
    {
    nickname: "Onyx",
    species: "#0095 - Onix",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Ground", "PLA"]
    },
    {
    nickname: "Lime",
    species: "#0108 - Lickitung",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "PLA"]
    },
    {
    nickname: "Slaybat",
    species: "#0169 - Crobat",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Flying", "PLA"]
    },
    {
    nickname: "Pin",
    species: "#0172 - Pichu",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "PLA"]
    },
    {
    nickname: "Yolk",
    species: "#0176 - Togetic",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "Flying", "PLA"]
    },
    {
    nickname: "Fraze",
    species: "#0362 - Glalie",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "PLA"]
    },
    {
    nickname: "Tres",
    species: "#0364 - Sealeo",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Water", "PLA"]
    },
    {
    nickname: "Flight",
    species: "#0396 - Starly",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "PLA"]
    },
    {
    nickname: "Ivy",
    species: "#0406 - Budew",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Poison", "PLA"]
    },
    {
    nickname: "Elliott",
    species: "#0444 - Gabite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Ground", "Alpha", "PLA"]
    },
    {
    nickname: "Chompa",
    species: "#0445 - Garchomp",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "Ground", "PLA"]
    },
    {
    nickname: "Potas",
    species: "#0449 - Hippopotas",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "PLA"]
    },
    {
    nickname: "Boldu",
    species: "#0450 - Hippowdon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "PLA"]
    },
    {
    nickname: "Angel",
    species: "#0456 - Finizin",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "PLA"]
    },
    {
    nickname: "Doom",
    species: "#0477 - Dusknoir",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "PLA"]
    },
    {
    nickname: "Ravanger",
    species: "#0903 - Sneasler",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "Poison", "PLA"]
    },
    {
    nickname: "Melmetal",
    species: "#0809 - Melmetal",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Mythical", "PoGO"]
    },
    {
    nickname: "Azelea",
    species: "#0829 - Gossifleur",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Favourite", "SwSh"]
    },
    {
    nickname: "Skotch",
    species: "#0851 - Centiskorch",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "Bug", "SwSh"]
    },
    {
    nickname: "Galla",
    species: "#0055 - Golduck",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Electron",
    species: "#0082 - Magneton",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Steel", "SV"]
    },
    {
    nickname: "Goose",
    species: "#0102 - Exeggcute",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Psychic", "SV"]
    },
    {
    nickname: "Duck",
    species: "#0103 - Alolan Exeggutor",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Dragon", "SV"]
    },
    {
    nickname: "Bio",
    species: "#0152 - Chikorita",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Starter", "SV"]
    },
    {
    nickname: "Foilage",
    species: "#0153 - Bayleef",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Starter", "SV"]
    },
    {
    nickname: "Beachball",
    species: "#0183 - Marill",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Fairy", "SV"]
    },
    {
    nickname: "Presto",
    species: "#0418 - Buizel",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Bronze",
    species: "#0437 - Bronzong",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Psychic", "SV"]
    },
    {
    nickname: "Forest",
    species: "#0673 - Gogoat",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "SV"]
    },
    {
    nickname: "Chorus",
    species: "#0747 - Mareanie",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Water", "SV"]
    },
    {
    nickname: "Sports",
    species: "#0766 - Passimian",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "SV"]
    },
    {
    nickname: "Teacup",
    species: "#0878 - Cufant",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "SV"]
    },
    {
    nickname: "Gulf",
    species: "#0959 - Tinkaton",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "Steel", "SV"]
    },
    {
    nickname: "Mr. Wiggles",
    species: "#0960 - Wiglett",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Meltan",
    species: "#0808 - Meltan",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Mythical", "PoGo"]
    },
    {
    nickname: "Sweet",
    species: "#0134 - Vapoureon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Essence",
    species: "#0677 - Espurr",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "SV"]
    },
    {
    nickname: "Meow Meow",
    species: "#0678 - Meowstic",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "SV"]
    },
    {
    nickname: "Champion",
    species: "#0068 - Machamp",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fighting", "PLA"]
    },
    {
    nickname: "Sunny",
    species: "#0136 - Flareon",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "PLA"]
    },
    {
    nickname: "Anchove",
    species: "#0223 - Remoraid",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "PLA"]
    },
    {
    nickname: "Charger",
    species: "#0239 - Elekid",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "PLA"]
    },
    {
    nickname: "Krick",
    species: "#0401 - Kricketot",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "PLA"]
    },
    {
    nickname: "Hank",
    species: "#0449 - Hippopotas",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "PLA"]
    },
    {
    nickname: "Circles",
    species: "#0201 - Unown",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Psychic", "Alpha", "PLA"]
    },
    {
    nickname: "Rhyme",
    species: "#0866 - Mr. Rime",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Psychic", "PLA"]
    },
    {
    nickname: "Waffles",
    species: "#0780 - Dranmpa",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Dragon", "SwSh"]
    },
    {
    nickname: "Ragnarock",
    species: "#0075 - Graveler",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Ground", "Alpha", "PLA"]
    },
    {
    nickname: "Vector",
    species: "#0071 - Victreebel",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Poison", "SV"]
    },
    {
    nickname: "Blaine",
    species: "#0778 - Mimikyu",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "Fairy", "SV"]
    },
    {
    nickname: "Sunshine",
    species: "#0695 - Helioisk",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Normal", "SwSh"]
    },
    {
    nickname: "Granitarus",
    species: "#0408 - Cranidos",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Fossil", "SV"]
    },
    {
    nickname: "Stega",
    species: "#0409 - Rampardos",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Fossil", "SV"]
    },
    {
    nickname: "Sludge",
    species: "#0704 - Goomy",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "SV"]
    },
    {
    nickname: "Wigoo",
    species: "#0705 - Sligoo",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "SV"]
    },
    {
    nickname: "Frosty",
    species: "#0361 - Snorunt",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "PLA"]
    },
    {
    nickname: "Quirl",
    species: "#0397 - Staravia",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Flying", "PLA"]
    },
    {
    nickname: "Timber",
    species: "#0400 - Bibarel",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Water", "PLA"]
    },
    {
    nickname: "Chime",
    species: "#0148 - Dragonair",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dragon", "SV"]
    },
    {
    nickname: "Aria",
    species: "#0168 - Ariados",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Poison", "SV"]
    },
    {
    nickname: "Pinecone",
    species: "#0204 - Pineco",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "SV"]
    },
    {
    nickname: "Jane",
    species: "#0232 - Donphan",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ground", "SV"]
    },
    {
    nickname: "Tyrent",
    species: "#0248 - Tyranitar",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Dark", "SV"]
    },
    {
    nickname: "Brelee",
    species: "#0286 - Breloom",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Fighting", "SV"]
    },
    {
    nickname: "Belsmart",
    species: "#0374 - Beldum",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Psychic", "SV"]
    },
    {
    nickname: "Tango",
    species: "#0375 - Metang",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Psychic", "SV"]
    },
    {
    nickname: "Metaverse",
    species: "#0376 - Metagross",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Psychic", "SV"]
    },
    {
    nickname: "Brevis",
    species: "#0447 - Riolu",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Fighting", "SV"]
    },
    {
    nickname: "Ferro Vulpis",
    species: "#0448 - Lucario",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Fighting", "SV"]
    },
    {
    nickname: "Frozin",
    species: "#0478 - Froslass",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Ghost", "SV"]
    },
    {
    nickname: "Season",
    species: "#0586 - Sawsbuck",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Grass", "SV"]
    },
    {
    nickname: "Snö",
    species: "#0712 - Bergmite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Coldaa",
    species: "#0712 - Bergmite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: ":3",
    species: "#0712 - Bergmite",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Necklace",
    species: "#0764 - Comfey",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fairy", "SV"]
    },
    {
    nickname: "Nym",
    species: "#0919 - Nymble",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "SV"]
    },
    {
    nickname: "Polly",
    species: "#0921 - Pawmi",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Watt",
    species: "#0940 - Wattrel",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Flying", "SV"]
    },
    {
    nickname: "Kilowatt",
    species: "#0941 - Killowattrel",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "Flying", "SV"]
    },
    {
    nickname: "Jet",
    species: "#0974 - Cetoddle",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Titan",
    species: "#0975 - Cetitan",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "SV"]
    },
    {
    nickname: "Paris",
    species: "#0046 - Paras",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Bug", "PLA"]
    },
    {
    nickname: "Charlie",
    species: "#0077 - Ponyta",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Fire", "PLA"]
    },
    {
    nickname: "Seaweed",
    species: "#0503 - Hisuian Samurott",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Dark", "PLA"]
    },
    {
    nickname: "Wisder",
    species: "#0899 - Wyrndeer",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "Psychic", "PLA"]
    },
    {
    nickname: "Machette",
    species: "#0900 - Kleavor",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Bug", "Rock", "PLA"]
    },
    {
    nickname: "Wally",
    species: "#0365 - Walrein",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Water", "PLA"]
    },
    {
    nickname: "Skore",
    species: "#0451 - Skorupi",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Bug", "PLA"]
    },
    {
    nickname: "Haunt",
    species: "#0055 - Golduck",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "King",
    species: "#0076 - Golem",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Rock", "Ground", "SV"]
    },
    {
    nickname: "Dewlong",
    species: "#0087 - Dewgong",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Ice", "SV"]
    },
    {
    nickname: "Shells",
    species: "#0090 - Shellder",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "SV"]
    },
    {
    nickname: "Cressa",
    species: "#0091 - Cloyster",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Ice", "SV"]
    },
    {
    nickname: "Eli",
    species: "#0125 - Elikid",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Swally",
    species: "#0317 - Swalot",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "SV"]
    },
    {
    nickname: "Zango",
    species: "#0335 - Normal",
    description: "Zango here has the rare mark",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "SV"]
    },
    {
    nickname: "Frosa",
    species: "#0873 - Frosmoth",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ice", "Bug", "SV"]
    },
    {
    nickname: "Gholden",
    species: "#1000 - Gholdengo",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Steel", "Ghost", "SV"]
    },
    {
    nickname: "Vampire",
    species: "#0041 - Zubat",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Poison", "Flying", "PLA"]
    },
    {
    nickname: "Shelly",
    species: "#0422 - Shellos",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "PLA"]
    },
    {
    nickname: "Luna",
    species: "#0431 - Glameow",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Normal", "PLA"]
    },
    {
    nickname: "Leaf",
    species: "#0459 - Snowver",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Ice", "PLA"]
    },
    {
    nickname: "Overgloom",
    species: "#0904 - Overqwil",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Dark", "Poison", "PLA"]
    },
    {
    nickname: "Aqua",
    species: "#0226 - Mantine",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Water", "Flying", "PLA"]
    },
    {
    nickname: "Charger",
    species: "#466 - Electivire",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Electric", "SV"]
    },
    {
    nickname: "Reef",
    species: "#0864 - Cursola",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Ghost", "SwSh"]
    },
    {
    nickname: "Vira",
    species: "#0640 - Virizion",
    description: "Placeholder",
    imageUrl: "https://via.placeholder.com/200",
    tags: ["Grass", "Fighting", "Legendary", "SwSh"]
    }
];

const originalPokemonList = [...pokemonList]; // Store the original list

function displayPokemon(startIndex, count = 16) {
    if (!pokemonContainer) {
        console.error("Pokemon container element not found!");
        return;
    }

    const searchQuery = searchInput.value.trim().toLowerCase();
    let filteredPokemon = pokemonList;

    if (searchQuery) {
        filteredPokemon = pokemonList.filter(pokemon =>
            pokemon.nickname.toLowerCase().includes(searchQuery) ||
            pokemon.species.toLowerCase().includes(searchQuery) ||
            (pokemon.tags && pokemon.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
        );
    }

    const remaining = filteredPokemon.length - startIndex;
    const loadCount = Math.min(count, remaining);
    const toLoad = Math.ceil(loadCount / 4) * 4;

    for (let i = startIndex; i < startIndex + toLoad; i++) {
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

function filterPokemon() {
    const searchQuery = searchInput.value.trim().toLowerCase();

    // Filter the Pokémon list based on the search query
    const filteredPokemon = pokemonList.filter(pokemon =>
        pokemon.nickname.toLowerCase().includes(searchQuery) ||
        pokemon.species.toLowerCase().includes(searchQuery) ||
        (pokemon.tags && pokemon.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
    );

    // Clear the container and reset the displayed count
    pokemonContainer.innerHTML = "";
    displayedPokemon = 0;

    // Display filtered Pokémon
    filteredPokemon.forEach(pokemon => {
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
    });

    updatePokemonCount(filteredPokemon.length);
}

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

// Initial load for showcase page
window.onload = () => {
    if (window.location.pathname.includes("index.html")) {
        displayPokemon(0, 16);  // Load first 16 Pokémon on the showcase page
        displayedPokemon += 16;

        window.addEventListener("scroll", checkScroll);
        searchInput.addEventListener("input", filterPokemon);
        updatePokemonCount(pokemonList.length);
        updateTotalPokemonCount(); // Update the total Pokémon count
    }
};
3. Carousel Logic (Only for home.html)
If you still want to use the carousel on home.html, make sure the carousel logic is in a section of your script that only runs on home.html. You can conditionally run the carousel code by checking the page path, like this:

javascript
Copy
Edit
if (window.location.pathname.includes("home.html")) {
    // Initialize carousel here
    $('#random-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    });
}
