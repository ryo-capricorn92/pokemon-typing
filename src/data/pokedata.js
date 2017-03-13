var pokemonList = {
  bulbasaur: {
    name: "bulbasaur",
    type: [ "grass", "poison" ],
    stage: 0,
    hp: 65,
    attack: 45,
    defense: 45,
    speed: 38,
    moves: pokemonMoves.poke['bulbasaur']
  },
  ivysaur: {
    name: "ivysaur",
    type: [ "grass", "poison" ],
    stage: 1,
    hp: 72,
    attack: 52,
    defense: 52,
    speed: 46,
    moves: pokemonMoves.poke['ivysaur']
  },
  venusaur: {
    name: "venusaur",
    type: [ "grass", "poison" ],
    stage: 3,
    hp: 82,
    attack: 74,
    defense: 80,
    speed: 57,
    moves: pokemonMoves.poke['venusaur']
  },
  charmander: {
    name: "charmander",
    type: [ "fire" ],
    stage: 0,
    hp: 62,
    attack: 44,
    defense: 38,
    speed: 49,
    moves: pokemonMoves.poke['charmander']
  },
  charmeleon: {
    name: "charmeleon",
    type: [ "fire" ],
    stage: 1,
    hp: 71,
    attack: 53,
    defense: 47,
    speed: 57,
    moves: pokemonMoves.poke['charmeleon']
  },
  charizard: {
    name: "charizard",
    type: [ "fire", "flying" ],
    stage: 3,
    hp: 81,
    attack: 65,
    defense: 58,
    speed: 68,
    moves: pokemonMoves.poke['charizard']
  },
  squirtle: {
    name: "squirtle",
    type: [ "water" ],
    stage: 0,
    hp: 64,
    attack: 40,
    defense: 48,
    speed: 37,
    moves: pokemonMoves.poke['squirtle']
  },
  wartortle: {
    name: "wartortle",
    type: [ "water" ],
    stage: 1,
    hp: 72,
    attack: 48,
    defense: 57,
    speed: 45,
    moves: pokemonMoves.poke['wartortle']
  },
  blastoise: {
    name: "blastoise",
    type: [ "water" ],
    stage: 3,
    hp: 82,
    attack: 59,
    defense: 69,
    speed: 56,
    moves: pokemonMoves.poke['blastoise']
  },
  chikorita: {
    name: "chikorita",
    type: [ "grass" ],
    stage: 0,
    hp: 65,
    attack: 40,
    defense: 49,
    speed: 38,
    moves: pokemonMoves.poke['chikorita']
  },
  bayleef: {
    name: "bayleef",
    type: [ "grass" ],
    stage: 1,
    hp: 72,
    attack: 47,
    defense: 57,
    speed: 46,
    moves: pokemonMoves.poke['bayleef']
  },
  meganium: {
    name: "meganium",
    type: [ "grass" ],
    stage: 3,
    hp: 82,
    attack: 58,
    defense: 68,
    speed: 57,
    moves: pokemonMoves.poke['meganium']
  },
  cyndaquil: {
    name: "cyndaquil",
    type: [ "fire" ],
    stage: 0,
    hp: 62,
    attack: 43,
    defense: 38,
    speed: 49,
    moves: pokemonMoves.poke['cyndaquil']
  },
  quilava: {
    name: "quilava",
    type: [ "fire" ],
    stage: 1,
    hp: 71,
    attack: 52,
    defense: 47,
    speed: 57,
    moves: pokemonMoves.poke['quilava']
  },
  typhlosian: {
    name: "typhlosian",
    type: [ "fire" ],
    stage: 3,
    hp: 81,
    attack: 66,
    defense: 58,
    speed: 68,
    moves: pokemonMoves.poke['typhlosian']
  },
  totodile: {
    name: "totodile",
    type: [ "water" ],
    stage: 0,
    hp: 67,
    attack: 43,
    defense: 43,
    speed: 37,
    moves: pokemonMoves.poke['totodile']
  },
  croconaw: {
    name: "croconaw",
    type: [ "water" ],
    stage: 1,
    hp: 75,
    attack: 51,
    defense: 52,
    speed: 45,
    moves: pokemonMoves.poke['croconaw']
  },
  feraligator: {
    name: "feraligator",
    type: [ "water" ],
    stage: 3,
    hp: 85,
    attack: 64,
    defense: 63,
    speed: 56,
    moves: pokemonMoves.poke['feraligator']
  },
  treecko: {
    name: "treecko",
    type: [ "grass" ],
    stage: 0,
    hp: 62,
    attack: 43,
    defense: 38,
    speed: 51,
    moves: pokemonMoves.poke['treecko']
  },
  grovyle: {
    name: "grovyle",
    type: [ "grass" ],
    stage: 1,
    hp: 67,
    attack: 54,
    defense: 43,
    speed: 66,
    moves: pokemonMoves.poke['grovyle']
  },
  sceptile: {
    name: "sceptile",
    type: [ "grass" ],
    stage: 3,
    hp: 77,
    attack: 65,
    defense: 54,
    speed: 79,
    moves: pokemonMoves.poke['sceptile']
  },
  torchic: {
    name: "torchic",
    type: [ "fire" ],
    stage: 0,
    hp: 65,
    attack: 48,
    defense: 37,
    speed: 38,
    moves: pokemonMoves.poke['torchic']
  },
  combusken: {
    name: "combusken",
    type: [ "fire", "fighting" ],
    stage: 1,
    hp: 72,
    attack: 60,
    defense: 46,
    speed: 44,
    moves: pokemonMoves.poke['combusken']
  },
  blaziken: {
    name: "blaziken",
    type: [ "fire", "fighting" ],
    stage: 3,
    hp: 82,
    attack: 76,
    defense: 51,
    speed: 57,
    moves: pokemonMoves.poke['blaziken']
  },
  mudkip: {
    name: "mudkip",
    type: [ "water" ],
    stage: 0,
    hp: 67,
    attack: 45,
    defense: 40,
    speed: 35,
    moves: pokemonMoves.poke['mudkip']
  },
  marshtomp: {
    name: "marshtomp",
    type: [ "water", "ground" ],
    stage: 1,
    hp: 77,
    attack: 53,
    defense: 51,
    speed: 40,
    moves: pokemonMoves.poke['marshtomp']
  },
  swampert: {
    name: "swampert",
    type: [ "water", "ground" ],
    stage: 3,
    hp: 92,
    attack: 66,
    defense: 62,
    speed: 46,
    moves: pokemonMoves.poke['swampert']
  },
  turtwig: {
    name: "turtwig",
    type: [ "grass" ],
    stage: 0,
    hp: 70,
    attack: 44,
    defense: 46,
    speed: 30,
    moves: pokemonMoves.poke['turtwig']
  },
  grotle: {
    name: "grotle",
    type: [ "grass" ],
    stage: 1,
    hp: 80,
    attack: 53,
    defense: 54,
    speed: 33,
    moves: pokemonMoves.poke['grotle']
  },
  torterra: {
    name: "torterra",
    type: [ "grass", "ground" ],
    stage: 3,
    hp: 90,
    attack: 64,
    defense: 65,
    speed: 44,
    moves: pokemonMoves.poke['torterra']
  },
  chimchar: {
    name: "chimchar",
    type: [ "fire" ],
    stage: 0,
    hp: 64,
    attack: 45,
    defense: 37,
    speed: 47,
    moves: pokemonMoves.poke['chimchar']
  },
  monferno: {
    name: "monferno",
    type: [ "fire", "fighting" ],
    stage: 1,
    hp: 74,
    attack: 56,
    defense: 41,
    speed: 58,
    moves: pokemonMoves.poke['monferno']
  },
  infernape: {
    name: "infernape",
    type: [ "fire", "fighting" ],
    stage: 3,
    hp: 80,
    attack: 70,
    defense: 52,
    speed: 72,
    moves: pokemonMoves.poke['infernape']
  },
  piplup: {
    name: "piplup",
    type: [ "water" ],
    stage: 0,
    hp: 69,
    attack: 44,
    defense: 43,
    speed: 35,
    moves: pokemonMoves.poke['piplup']
  },
  prinplup: {
    name: "prinplup",
    type: [ "water" ],
    stage: 1,
    hp: 74,
    attack: 53,
    defense: 52,
    speed: 40,
    moves: pokemonMoves.poke['prinplup']
  },
  empoleon: {
    name: "empoleon",
    type: [ "water", "steel" ],
    stage: 3,
    hp: 84,
    attack: 67,
    defense: 65,
    speed: 46,
    moves: pokemonMoves.poke['empoleon']
  },
  snivy: {
    name: "snivy",
    type: [ "grass" ],
    stage: 0,
    hp: 65,
    attack: 38,
    defense: 44,
    speed: 48,
    moves: pokemonMoves.poke['snivy']
  },
  servine: {
    name: "servine",
    type: [ "grass" ],
    stage: 1,
    hp: 72,
    attack: 46,
    defense: 55,
    speed: 59,
    moves: pokemonMoves.poke['servine']
  },
  serperior: {
    name: "serperior",
    type: [ "grass" ],
    stage: 3,
    hp: 80,
    attack: 55,
    defense: 66,
    speed: 75,
    moves: pokemonMoves.poke['serperior']
  },
  tepig: {
    name: "tepig",
    type: [ "fire" ],
    stage: 0,
    hp: 75,
    attack: 43,
    defense: 38,
    speed: 38,
    moves: pokemonMoves.poke['tepig']
  },
  pignite: {
    name: "pignite",
    type: [ "fire", "fighting" ],
    stage: 1,
    hp: 87,
    attack: 67,
    defense: 44,
    speed: 44,
    moves: pokemonMoves.poke['pignite']
  },
  emboar: {
    name: "emboar",
    type: [ "fire", "fighting" ],
    stage: 3,
    hp: 97,
    attack: 74,
    defense: 49,
    speed: 49,
    moves: pokemonMoves.poke['emboar']
  },
  oshawott: {
    name: "oshawott",
    type: [ "water" ],
    stage: 0,
    hp: 70,
    attack: 46,
    defense: 38,
    speed: 38,
    moves: pokemonMoves.poke['oshawott']
  },
  dewott: {
    name: "dewott",
    type: [ "water" ],
    stage: 1,
    hp: 80,
    attack: 57,
    defense: 46,
    speed: 46,
    moves: pokemonMoves.poke['dewott']
  },
  samurott: {
    name: "samurott",
    type: [ "water" ],
    stage: 3,
    hp: 90,
    attack: 75,
    defense: 55,
    speed: 51,
    moves: pokemonMoves.poke['samurott']
  },
  chespin: {
    name: "chespin",
    type: [ "grass" ],
    stage: 0,
    hp: 70,
    attack: 43,
    defense: 43,
    speed: 34,
    moves: pokemonMoves.poke['chespin']
  },
  quilladin: {
    name: "quilladin",
    type: [ "grass" ],
    stage: 1,
    hp: 73,
    attack: 50,
    defense: 55,
    speed: 45,
    moves: pokemonMoves.poke['quilladin']
  },
  chesnaught: {
    name: "chesnaught",
    type: [ "grass", "fighting" ],
    stage: 3,
    hp: 86,
    attack: 62,
    defense: 67,
    speed: 48,
    moves: pokemonMoves.poke['chesnaught']
  },
  fennekin: {
    name: "fennekin",
    type: [ "fire" ],
    stage: 0,
    hp: 62,
    attack: 42,
    defense: 40,
    speed: 46,
    moves: pokemonMoves.poke['fennekin']
  },
  braixen: {
    name: "braixen",
    type: [ "fire" ],
    stage: 1,
    hp: 72,
    attack: 54,
    defense: 48,
    speed: 53,
    moves: pokemonMoves.poke['braixen']
  },
  delphox: {
    name: "delphox",
    type: [ "fire", "psychic" ],
    stage: 3,
    hp: 80,
    attack: 63,
    defense: 60,
    speed: 70,
    moves: pokemonMoves.poke['delphox']
  },
  froakie: {
    name: "froakie",
    type: [ "water" ],
    stage: 0,
    hp: 63,
    attack: 45,
    defense: 36,
    speed: 52,
    moves: pokemonMoves.poke['froakie']
  },
  frogadier: {
    name: "frogadier",
    type: [ "water" ],
    stage: 1,
    hp: 69,
    attack: 53,
    defense: 42,
    speed: 67,
    moves: pokemonMoves.poke['frogadier']
  },
  greninja: {
    name: "greninja",
    type: [ "water", "dark" ],
    stage: 3,
    hp: 78,
    attack: 68,
    defense: 51,
    speed: 80,
    moves: pokemonMoves.poke['greninja']
  },
  rowlet: {
    name: "rowlet",
    type: [ "grass", "flying" ],
    stage: 0,
    hp: 76,
    attack: 42,
    defense: 42,
    speed: 36,
    moves: pokemonMoves.poke['rowlet']
  },
  dartrix: {
    name: "dartrix",
    type: [ "grass", "flying" ],
    stage: 1,
    hp: 81,
    attack: 53,
    defense: 53,
    speed: 41,
    moves: pokemonMoves.poke['dartrix']
  },
  decidueye: {
    name: "decidueye",
    type: [ "grass", "ghost" ],
    stage: 3,
    hp: 81,
    attack: 70,
    defense: 61,
    speed: 51,
    moves: pokemonMoves.poke['decidueye']
  },
  litten: {
    name: "litten",
    type: [ "fire" ],
    stage: 0,
    hp: 65,
    attack: 47,
    defense: 35,
    speed: 51,
    moves: pokemonMoves.poke['litten']
  },
  torracat: {
    name: "torracat",
    type: [ "fire" ],
    stage: 1,
    hp: 75,
    attack: 58,
    defense: 40,
    speed: 62,
    moves: pokemonMoves.poke['torracat']
  },
  incineroar: {
    name: "incineroar",
    type: [ "fire", "dark" ],
    stage: 3,
    hp: 90,
    attack: 67,
    defense: 62,
    speed: 46,
    moves: pokemonMoves.poke['incineroar']
  },
  popplio: {
    name: "popplio",
    type: [ "water" ],
    stage: 0,
    hp: 67,
    attack: 45,
    defense: 43,
    speed: 35,
    moves: pokemonMoves.poke['popplio']
  },
  brionne: {
    name: "brionne",
    type: [ "water" ],
    stage: 1,
    hp: 72,
    attack: 57,
    defense: 54,
    speed: 40,
    moves: pokemonMoves.poke['brionne']
  },
  primarina: {
    name: "primarina",
    type: [ "water", "fairy" ],
    stage: 3,
    hp: 82,
    attack: 62,
    defense: 65,
    speed: 46,
    moves: pokemonMoves.poke['primarina']
  },
  // NAME: {
  //   name: NAME,
  //   type: [ "TYPE" ],
  //   hp: INT,
  //   attack: INT,
  //   defense: INT,
  //   speed: INT,
  //   moves: pokemonMoves.poke['NAME']
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
