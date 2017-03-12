var pokemonList = {
  bulbasaur: {
    name: "bulbasaur",
    type: [ "grass", "poison" ],
    hp: 65,
    attack: 45,
    defense: 45,
    speed: 38,
    moves: [
      "power whip",
      "giga drain",
      "sleep powder",
      "leech seed"
    ]
  },
  ivysaur: {
    name: "ivysaur",
    type: [ "grass", "poison" ],
    hp: 72,
    attack: 52,
    defense: 52,
    speed: 46,
    moves: [
      "power whip",
      "hidden power",
      "sleep powder",
      "sludge bomb"
    ]
  },
  venusaur: {
    name: "venusaur",
    type: [ "grass", "poison" ],
    hp: 82,
    attack: 74,
    defense: 80,
    speed: 57,
    moves: [
      "hidden power",
      "earthquake",
      "synthesis",
      "giga drain"
    ]
  },
  charmander: {
    name: "charmander",
    type: [ "fire" ],
    hp: 62,
    attack: 44,
    defense: 38,
    speed: 49,
    moves: [
      "overheat",
      "dragon pulse",
      "flamethrower",
      "hidden power"
    ]
  },
  charmeleon: {
    name: "charmeleon",
    type: [ "fire" ],
    hp: 71,
    attack: 53,
    defense: 47,
    speed: 57,
    moves: [
      "overheat",
      "dragon pulse",
      "flamethrower",
      "hidden power"
    ]
  },
  charizard: {
    name: "charizard",
    type: [ "fire", "flying" ],
    hp: 81,
    attack: 65,
    defense: 58,
    speed: 68,
    moves: [
      "air slash",
      "roost",
      "fire blast",
      "earthquake"
    ]
  },
  squirtle: {
    name: "squirtle",
    type: [ "water" ],
    hp: 64,
    attack: 40,
    defense: 48,
    speed: 37,
    moves: [
      "scald",
      "rapid spin",
      "ice beam",
      "aqua jet"
    ]
  },
  wartortle: {
    name: "wartortle",
    type: [ "water" ],
    hp: 72,
    attack: 48,
    defense: 57,
    speed: 45,
    moves: [
      "hydro pump",
      "rapid spin",
      "aqua jet",
      "toxic",
    ]
  },
  blastoise: {
    name: "blastoise",
    type: [ "water" ],
    hp: 82,
    attack: 59,
    defense: 69,
    speed: 56,
    moves: [
      "toxic",
      "rapid spin",
      "aura sphere",
      "scald"
    ]
  },
  chikorita: {
    name: "chikorita",
    type: [ "grass" ],
    hp: 65,
    attack: 40,
    defense: 49,
    speed: 38,
    moves: [
      "giga drain",
      "leech seed",
      "reflect",
      "light screen"
    ]
  },
  bayleef: {
    name: "bayleef",
    type: [ "grass" ],
    hp: 72,
    attack: 47,
    defense: 57,
    speed: 46,
    moves: [
      "synthesis",
      "giga drain",
      "toxic",
      "light screen"
    ]
  },
  meganium: {
    name: "meganium",
    type: [ "grass" ],
    hp: 82,
    attack: 58,
    defense: 68,
    speed: 57,
    moves: [
      "synthesis",
      "toxic",
      "giga drain",
      "dragon tail"
    ]
  },
  cyndaquil: {
    name: "cyndaquil",
    type: [ "fire" ],
    hp: 62,
    attack: 43,
    defense: 38,
    speed: 49,
    moves: [
      "flamethrower",
      "extrasensory",
      "hidden power",
      "eruption"
    ]
  },
  quilava: {
    name: "quilava",
    type: [ "fire" ],
    hp: 71,
    attack: 52,
    defense: 47,
    speed: 57,
    moves: [
      "extrasensory",
      "flamethrower",
      "hidden power",
      "eruption"
    ]
  },
  typhlosian: {
    name: "typhlosian",
    type: [ "fire" ],
    hp: 81,
    attack: 66,
    defense: 58,
    speed: 68,
    moves: [
      "hidden power",
      "eruption",
      "focus blast",
      "fire blast"
    ]
  },
  totodile: {
    name: "totodile",
    type: [ "water" ],
    hp: 67,
    attack: 43,
    defense: 43,
    speed: 37,
    moves: [
      "swords dance",
      "dragon dance",
      "waterfall",
      "superpower"
    ]
  },
  croconaw: {
    name: "croconaw",
    type: [ "water" ],
    hp: 75,
    attack: 51,
    defense: 52,
    speed: 45,
    moves: [
      "aqua jet",
      "ice punch",
      "dragon dance",
      "waterfall"
    ]
  },
  feraligator: {
    name: "feraligator",
    type: [ "water" ],
    hp: 85,
    attack: 64,
    defense: 63,
    speed: 56,
    moves: [
      "swords dance",
      "crunch",
      "aqua jet",
      "earthquake"
    ]
  },
  treecko: {
    name: "treecko",
    type: [ "grass" ],
    hp: 62,
    attack: 43,
    defense: 38,
    speed: 51,
    moves: [
      "leaf storm",
      "hidden power",
      "leech seed",
      "endeavor"
    ]
  },
  grovyle: {
    name: "grovyle",
    type: [ "grass" ],
    hp: 67,
    attack: 54,
    defense: 43,
    speed: 66,
    moves: [
      "hidden power",
      "leaf storm",
      "giga drain",
      "endeavor"
    ]
  },
  sceptile: {
    name: "sceptile",
    type: [ "grass" ],
    hp: 77,
    attack: 65,
    defense: 54,
    speed: 79,
    moves: [
      "hidden power",
      "focus blast",
      "leaf storm",
      "giga drain"
    ]
  },
  torchic: {
    name: "torchic",
    type: [ "fire" ],
    hp: 65,
    attack: 48,
    defense: 37,
    speed: 38,
    moves: [
      "hidden power",
      "fire pledge",
      "scratch",
      "growl"
    ]
  },
  combusken: {
    name: "combusken",
    type: [ "fire", "fighting" ],
    hp: 72,
    attack: 60,
    defense: 46,
    speed: 44,
    moves: [
      "sky uppercut",
      "shadow claw",
      "flare blitz",
      "hidden power"
    ]
  },
  blaziken: {
    name: "blaziken",
    type: [ "fire", "fighting" ],
    hp: 82,
    attack: 76,
    defense: 51,
    speed: 57,
    moves: [
      "high jump kick",
      "flare blitz",
      "swords dance",
      "stone edge"
    ]
  },
  mudkip: {
    name: "mudkip",
    type: [ "water" ],
    hp: 67,
    attack: 45,
    defense: 40,
    speed: 35,
    moves: [
      "hydro pump",
      "sludge wave",
      "earth power",
      "ice beam"
    ]
  },
  marshtomp: {
    name: "marshtomp",
    type: [ "water", "ground" ],
    hp: 77,
    attack: 53,
    defense: 51,
    speed: 40,
    moves: [
      "stealth rock",
      "earthquake",
      "superpower",
      "ice punch"
    ]
  },
  swampert: {
    name: "swampert",
    type: [ "water", "ground" ],
    hp: 92,
    attack: 66,
    defense: 62,
    speed: 46,
    moves: [
      "earthquake",
      "ice beam",
      "scald",
      "stealth rock"
    ]
  },
  turtwig: {
    name: "turtwig",
    type: [ "grass" ],
    hp: 70,
    attack: 44,
    defense: 46,
    speed: 30,
    moves: [
      "stealth rock",
      "toxic",
      "seed bomb",
      "leech seed"
    ]
  },
  grotle: {
    name: "grotle",
    type: [ "grass" ],
    hp: 80,
    attack: 53,
    defense: 54,
    speed: 33,
    moves: [
      "leech seed",
      "toxic",
      "seed bomb",
      "reflect"
    ]
  },
  torterra: {
    name: "torterra",
    type: [ "grass", "ground" ],
    hp: 90,
    attack: 64,
    defense: 65,
    speed: 44,
    moves: [
      "synthesis",
      "stealth rock",
      "earthquake",
      "stone edge"
    ]
  },
  chimchar: {
    name: "chimchar",
    type: [ "fire" ],
    hp: 64,
    attack: 45,
    defense: 37,
    speed: 47,
    moves: [
      "hidden power",
      "fake out",
      "overheat",
      "stealth rock"
    ]
  },
  monferno: {
    name: "monferno",
    type: [ "fire", "fighting" ],
    hp: 74,
    attack: 56,
    defense: 41,
    speed: 58,
    moves: [
      "hidden power",
      "vacuum wave",
      "u-turn",
      "stealth rock"
    ]
  },
  infernape: {
    name: "infernape",
    type: [ "fire", "fighting" ],
    hp: 80,
    attack: 70,
    defense: 52,
    speed: 72,
    moves: [
      "mach punch",
      "stealth rock",
      "thunder punch",
      "fire blast"
    ]
  },
  piplup: {
    name: "piplup",
    type: [ "water" ],
    hp: 69,
    attack: 44,
    defense: 43,
    speed: 35,
    moves: [
      "yawn",
      "scald",
      "stealth rock",
      "hidden power"
    ]
  },
  prinplup: {
    name: "prinplup",
    type: [ "water" ],
    hp: 74,
    attack: 53,
    defense: 52,
    speed: 40,
    moves: [
      "scald",
      "yawn",
      "defog",
      "stealth rock"
    ]
  },
  empoleon: {
    name: "empoleon",
    type: [ "water", "steel" ],
    hp: 84,
    attack: 67,
    defense: 65,
    speed: 46,
    moves: [
      "hydro pummp",
      "defog",
      "stealth rock",
      "ice beam"
    ]
  },
  snivy: {
    name: "snivy",
    type: [ "grass" ],
    hp: 65,
    attack: 38,
    defense: 44,
    speed: 48,
    moves: [
      "giga drain",
      "hidden power",
      "leech seed",
      "leaf storm"
    ]
  },
  servine: {
    name: "servine",
    type: [ "grass" ],
    hp: 72,
    attack: 46,
    defense: 55,
    speed: 59,
    moves: [
      "leaf storm",
      "hidden power",
      "giga drain",
      "slam"
    ]
  },
  serperior: {
    name: "serperior",
    type: [ "grass" ],
    hp: 80,
    attack: 55,
    defense: 66,
    speed: 75,
    moves: [
      "leaf storm",
      "giga drain",
      "slam",
      "hidden power"
    ]
  },
  tepig: {
    name: "tepig",
    type: [ "fire" ],
    hp: 75,
    attack: 43,
    defense: 38,
    speed: 38,
    moves: [
      "wild charge",
      "head smash",
      "flare blitz",
      "superpower"
    ]
  },
  pignite: {
    name: "pignite",
    type: [ "fire", "fighting" ],
    hp: 87,
    attack: 67,
    defense: 44,
    speed: 44,
    moves: [
      "wild charge",
      "head smash",
      "superpower",
      "flame charge"
    ]
  },
  emboar: {
    name: "emboar",
    type: [ "fire", "fighting" ],
    hp: 97,
    attack: 74,
    defense: 49,
    speed: 49,
    moves: [
      "sucker punch",
      "wild charge",
      "superpower",
      "flare blitz"
    ]
  },
  oshawott: {
    name: "oshawott",
    type: [ "water" ],
    hp: 70,
    attack: 46,
    defense: 38,
    speed: 38,
    moves: [
      "x-scissor",
      "swords dance",
      "waterfall",
      "aqua jet"
    ]
  },
  dewott: {
    name: "dewott",
    type: [ "water" ],
    hp: 80,
    attack: 57,
    defense: 46,
    speed: 46,
    moves: [
      "waterfall",
      "swords dance",
      "aqua jet",
      "x-scissor"
    ]
  },
  samurott: {
    name: "samurott",
    type: [ "water" ],
    hp: 90,
    attack: 75,
    defense: 55,
    speed: 51,
    moves: [
      "megahorn",
      "superpower",
      "waterfall",
      "swords dance"
    ]
  },
  chespin: {
    name: "chespin",
    type: [ "grass" ],
    hp: 70,
    attack: 43,
    defense: 43,
    speed: 34,
    moves: [
      "curse",
      "stone edge",
      "synthesis",
      "seed bomb"
    ]
  },
  quilladin: {
    name: "quilladin",
    type: [ "grass" ],
    hp: 73,
    attack: 50,
    defense: 55,
    speed: 45,
    moves: [
      "seed bomb",
      "gyro ball",
      "synthesis",
      "curse"
    ]
  },
  chesnaught: {
    name: "chesnaught",
    type: [ "grass", "fighting" ],
    hp: 86,
    attack: 62,
    defense: 67,
    speed: 48,
    moves: [
      "synthesis",
      "spiky shield",
      "hammer arm",
      "roar"
    ]
  },
  fennekin: {
    name: "fennekin",
    type: [ "fire" ],
    hp: 62,
    attack: 42,
    defense: 40,
    speed: 46,
    moves: [
      "fire blast",
      "will-o-wisp",
      "hypnosis",
      "grass knot"
    ]
  },
  braixen: {
    name: "braixen",
    type: [ "fire" ],
    hp: 72,
    attack: 54,
    defense: 48,
    speed: 53,
    moves: [
      "fireblast",
      "psyshock",
      "grass knot",
      "will-o-wisp"
    ]
  },
  delphox: {
    name: "delphox",
    type: [ "fire", "psychic" ],
    hp: 80,
    attack: 63,
    defense: 60,
    speed: 70,
    moves: [
      "psychic",
      "dazzling gleam",
      "flamethrower",
      "calm mind"
    ]
  },
  froakie: {
    name: "froakie",
    type: [ "water" ],
    hp: 63,
    attack: 45,
    defense: 36,
    speed: 52,
    moves: [
      "u-turn",
      "waterfall",
      "quick attack",
      "power-up punch"
    ]
  },
  frogadier: {
    name: "frogadier",
    type: [ "water" ],
    hp: 69,
    attack: 53,
    defense: 42,
    speed: 67,
    moves: [
      "taunt",
      "u-turn",
      "hydro pump",
      "ice beam"
    ]
  },
  greninja: {
    name: "greninja",
    type: [ "water", "dark" ],
    hp: 78,
    attack: 68,
    defense: 51,
    speed: 80,
    moves: [
      "spikes",
      "hidden power",
      "surf",
      "ice beam"
    ]
  },
  rowlet: {
    name: "rowlet",
    type: [ "grass", "flying" ],
    hp: 76,
    attack: 42,
    defense: 42,
    speed: 36,
    moves: [
      "hidden power",
      "curse",
      "fury attack",
      "nasty plot"
    ]
  },
  dartrix: {
    name: "dartrix",
    type: [ "grass", "flying" ],
    hp: 81,
    attack: 53,
    defense: 53,
    speed: 41,
    moves: [
      "steel wing",
      "grass knot",
      "round",
      "nature power"
    ]
  },
  decidueye: {
    name: "decidueye",
    type: [ "grass", "ghost" ],
    hp: 81,
    attack: 70,
    defense: 61,
    speed: 51,
    moves: [
      "leaf blade",
      "swords dance",
      "sucker punch",
      "roost"
    ]
  },
  litten: {
    name: "litten",
    type: [ "fire" ],
    hp: 65,
    attack: 47,
    defense: 35,
    speed: 51,
    moves: [
      "bulk up",
      "protect",
      "lick",
      "body slam"
    ]
  },
  torracat: {
    name: "torracat",
    type: [ "fire" ],
    hp: 75,
    attack: 58,
    defense: 40,
    speed: 62,
    moves: [
      "hidden power",
      "nasty plot",
      "bite",
      "revenge"
    ]
  },
  incineroar: {
    name: "incineroar",
    type: [ "fire", "dark" ],
    hp: 90,
    attack: 67,
    defense: 62,
    speed: 46,
    moves: [
      "darkest lariat",
      "u-turn",
      "flare blitz",
      "fake out"
    ]
  },
  popplio: {
    name: "popplio",
    type: [ "water" ],
    hp: 67,
    attack: 45,
    defense: 43,
    speed: 35,
    moves: [
      "hidden power",
      "protect",
      "confide",
      "blizzard"
    ]
  },
  brionne: {
    name: "brionne",
    type: [ "water" ],
    hp: 72,
    attack: 57,
    defense: 54,
    speed: 40,
    moves: [
      "charm",
      "scald",
      "hidden power",
      "bubble beam"
    ]
  },
  primarina: {
    name: "primarina",
    type: [ "water", "fairy" ],
    hp: 82,
    attack: 62,
    defense: 65,
    speed: 46,
    moves: [
      "encore",
      "moonblast",
      "scald",
      "light screen"
    ]
  },
  // NAME: {
  //   name: NAME,
  //   type: [ "TYPE" ],
  //   hp: INT,
  //   attack: INT,
  //   defense: INT,
  //   speed: INT,
  //   moves: [
  //     ""
  //   ]
  // },
}

var pokemonListOptions = [];

for (var key in pokemonList) {
  pokemonListOptions.push(key);
}

var pokemonTypes = {
  normal: {
    nulls: [ 'ghost' ],
    weaknesses: [ 'fighting' ],
    buffers: []
  },
  fire: {
    nulls: [],
    weaknesses: [ 'water', 'ground', 'rock' ],
    buffers: [ 'fire', 'grass', 'ice', 'bug', 'steel', 'fairy' ]
  },
  water: {
    nulls: [],
    weaknesses: [ 'electric', 'grass' ],
    buffers: [ 'fire', 'water', 'ice', 'steel' ]
  },
  electric: {
    nulls: [],
    weaknesses: [ 'ground' ],
    buffers: [ 'electric', 'flying', 'steel' ]
  },
  grass: {
    nulls: [],
    weaknesses: [ 'fire', 'ice', 'poison', 'flying', 'bug' ],
    buffers: [ 'water', 'electric', 'grass', 'ground' ]
  },
  ice: {
    nulls: [],
    weaknesses: [ 'fire', 'fighting', 'rock', 'steel' ],
    buffers: [ 'ice' ]
  },
  fighting: {
    nulls: [],
    weaknesses: [ 'flying', 'psychic', 'fairy' ],
    buffers: [ 'bug', 'rock', 'dark' ]
  },
  poison: {
    nulls: [],
    weaknesses: [ 'ground', 'psychic' ],
    buffers: [ 'grass', 'fighting', 'poison', 'bug', 'fairy' ]
  },
  ground: {
    nulls: [ 'electric' ],
    weaknesses: [ 'water', 'grass', 'ice' ],
    buffers: [ 'poison', 'rock' ]
  },
  flying: {
    nulls: [ 'ground' ],
    weaknesses: [ 'electric', 'ice', 'rock' ],
    buffers: [ 'grass', 'fighting', 'bug' ]
  },
  psychic: {
    nulls: [],
    weaknesses: [ 'bug', 'ghost', 'dark' ],
    buffers: [ 'fighting', 'psychic' ]
  },
  bug: {
    nulls: [],
    weaknesses: [ 'fire', 'flying', 'rock' ],
    buffers: [ 'grass', 'fighting', 'ground' ]
  },
  rock: {
    nulls: [],
    weaknesses: [ 'water', 'grass', 'fighting', 'ground', 'steel' ],
    buffers: [ 'normal', 'fire', 'poison', 'flying' ]
  },
  ghost: {
    nulls: [ 'normal', 'fighting' ],
    weaknesses: [ 'ghost', 'dark' ],
    buffers: [ 'poison', 'bug' ]
  },
  dragon: {
    nulls: [],
    weaknesses: [ 'ice', 'dragon', 'fairy' ],
    buffers: [ 'fire', 'water', 'electric', 'grass' ]
  },
  dark: {
    nulls: [ 'psychic' ],
    weaknesses: [ 'fighting', 'bug', 'fairy' ],
    buffers: [ 'ghost', 'dark' ]
  },
  steel: {
    nulls: [ 'poison' ],
    weaknesses: [ 'fire', 'fighting', 'ground' ],
    buffers: [ 'normal', 'grass', 'ice', 'flying', 'psychic', 'bug', 'rock', 'dragon', 'steel', 'fairy' ]
  },
  fairy: {
    nulls: [ 'dragon' ],
    weaknesses: [ 'poison', 'steel' ],
    buffers: [ 'fighting', 'bug', 'dark' ]
  }
}
