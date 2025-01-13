let pokemonData = [];
let displayedPokemon = 0;

const pokemonContainer = document.getElementById("pokemon-container");
const searchInput = document.getElementById("search");

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
        tags: ["Psychic", "Water", "SwSh"]
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
        species: "#0085 - Dotrio",
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
        species: "#0183 - Maril",
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
        tags: ["ghost, normal", "Favourites", "SV"]
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
    species: "# - ",
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
    species: "#0995 - Iron Throns",
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
    tags: ["Steel", "Dragom", "SV"]
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
    species: "#0135 - jolteon",
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
];
const originalPokemonList = [...pokemonList]; // Store original list

// Function to display Pokémon cards
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

        card.innerHTML = `
            <img src="${pokemon.imageUrl}" alt="${pokemon.nickname}">
            <h3>${pokemon.nickname}</h3>
            <p>${pokemon.species}</p>
            <p>${pokemon.description}</p>
        `;

        pokemonContainer.appendChild(card);
    }
}

// Function to filter Pokémon based on search input
function filterPokemon() {
    const searchQuery = searchInput.value.trim().toLowerCase();

    // Filter the Pokémon list based on the search query
    const filteredPokemon = originalPokemonList.filter(pokemon =>
        pokemon.nickname.toLowerCase().includes(searchQuery) ||
        pokemon.species.toLowerCase().includes(searchQuery) ||
        (pokemon.tags && pokemon.tags.some(tag => tag.toLowerCase().includes(searchQuery)))
    );

    // Clear the container
    pokemonContainer.innerHTML = "";
    displayedPokemon = 0;

    // Display filtered Pokémon
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

// Improved debounce logic
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

// Initial load
window.onload = () => {
    displayPokemon(0, 16);
    displayedPokemon += 16;
    window.addEventListener("scroll", checkScroll);
    searchInput.addEventListener("input", filterPokemon);
};
