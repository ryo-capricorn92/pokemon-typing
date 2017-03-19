var pokemonList = {
  bulbasaur: {
    index: 001,
    name: "bulbasaur",
    type: [ "grass", "poison" ],
    hp: 65,
    attack: 45,
    defense: 45,
    speed: 38,
    evolution: {
      stage: 0,
      next: "bulbasaur",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['bulbasaur']
  },
  ivysaur: {
    index: 002,
    name: "ivysaur",
    type: [ "grass", "poison" ],
    hp: 72,
    attack: 52,
    defense: 52,
    speed: 46,
    evolution: {
      stage: 1,
      next: "venusaur",
      method: "level",
      level: 32
    }
    moves: pokemonMoves.poke['ivysaur']
  },
  venusaur: {
    index: 003,
    name: "venusaur",
    type: [ "grass", "poison" ],
    stage: 3,
    hp: 82,
    attack: 74,
    defense: 80,
    speed: 57,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['venusaur']
  },
  charmander: {
    index: 004,
    name: "charmander",
    type: [ "fire" ],
    hp: 62,
    attack: 44,
    defense: 38,
    speed: 49,
    evolution: {
      stage: 0,
      next: "charmeleon",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['charmander']
  },
  charmeleon: {
    index: 005,
    name: "charmeleon",
    type: [ "fire" ],
    hp: 71,
    attack: 53,
    defense: 47,
    speed: 57,
    evolution: {
      stage: 1,
      next: "charizard",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['charmeleon']
  },
  charizard: {
    index: 006,
    name: "charizard",
    type: [ "fire", "flying" ],
    hp: 81,
    attack: 65,
    defense: 58,
    speed: 68,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['charizard']
  },
  squirtle: {
    index: 007,
    name: "squirtle",
    type: [ "water" ],
    hp: 64,
    attack: 40,
    defense: 48,
    speed: 37,
    evolution: {
      stage: 0,
      next: "wartortle",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['squirtle']
  },
  wartortle: {
    index: 008,
    name: "wartortle",
    type: [ "water" ],
    hp: 72,
    attack: 48,
    defense: 57,
    speed: 45,
    evolution: {
      stage: 1,
      next: "blastoise",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['wartortle']
  },
  blastoise: {
    index: 009,
    name: "blastoise",
    type: [ "water" ],
    hp: 82,
    attack: 59,
    defense: 69,
    speed: 56,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['blastoise']
  },
  chikorita: {
    index: 152,
    name: "chikorita",
    type: [ "grass" ],
    hp: 65,
    attack: 40,
    defense: 49,
    speed: 38,
    evolution: {
      stage: 0,
      next: "bayleef",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['chikorita']
  },
  bayleef: {
    index: 153,
    name: "bayleef",
    type: [ "grass" ],
    hp: 72,
    attack: 47,
    defense: 57,
    speed: 46,
    evolution: {
      stage: 1,
      next: "meganium",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['bayleef']
  },
  meganium: {
    index: 154,
    name: "meganium",
    type: [ "grass" ],
    hp: 82,
    attack: 58,
    defense: 68,
    speed: 57,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['meganium']
  },
  cyndaquil: {
    index: 155,
    name: "cyndaquil",
    type: [ "fire" ],
    hp: 62,
    attack: 43,
    defense: 38,
    speed: 49,
    evolution: {
      stage: 0,
      next: "quilava",
      method: "level",
      level: 14
    }
    moves: pokemonMoves.poke['cyndaquil']
  },
  quilava: {
    index: 156,
    name: "quilava",
    type: [ "fire" ],
    hp: 71,
    attack: 52,
    defense: 47,
    speed: 57,
    evolution: {
      stage: 1,
      next: "typhlosian",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['quilava']
  },
  typhlosian: {
    index: 157,
    name: "typhlosian",
    type: [ "fire" ],
    hp: 81,
    attack: 66,
    defense: 58,
    speed: 68,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['typhlosian']
  },
  totodile: {
    index: 158,
    name: "totodile",
    type: [ "water" ],
    hp: 67,
    attack: 43,
    defense: 43,
    speed: 37,
    evolution: {
      stage: 0,
      next: "croconaw",
      method: "level",
      level: 18
    }
    moves: pokemonMoves.poke['totodile']
  },
  croconaw: {
    index: 159,
    name: "croconaw",
    type: [ "water" ],
    hp: 75,
    attack: 51,
    defense: 52,
    speed: 45,
    evolution: {
      stage: 1,
      next: "feraligator",
      method: "level",
      level: 30
    }
    moves: pokemonMoves.poke['croconaw']
  },
  feraligator: {
    index: 160,
    name: "feraligator",
    type: [ "water" ],
    hp: 85,
    attack: 64,
    defense: 63,
    speed: 56,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['feraligator']
  },
  treecko: {
    index: 252,
    name: "treecko",
    type: [ "grass" ],
    hp: 62,
    attack: 43,
    defense: 38,
    speed: 51,
    evolution: {
      stage: 0,
      next: "grovyle",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['treecko']
  },
  grovyle: {
    index: 253,
    name: "grovyle",
    type: [ "grass" ],
    hp: 67,
    attack: 54,
    defense: 43,
    speed: 66,
    evolution: {
      stage: 1,
      next: "sceptile".
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['grovyle']
  },
  sceptile: {
    index: 254,
    name: "sceptile",
    type: [ "grass" ],
    hp: 77,
    attack: 65,
    defense: 54,
    speed: 79,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['sceptile']
  },
  torchic: {
    index: 255,
    name: "torchic",
    type: [ "fire" ],
    hp: 65,
    attack: 48,
    defense: 37,
    speed: 38,
    evolution: {
      stage: 0,
      next: "combusken",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['torchic']
  },
  combusken: {
    index: 256,
    name: "combusken",
    type: [ "fire", "fighting" ],
    hp: 72,
    attack: 60,
    defense: 46,
    speed: 44,
    evolution: {
      stage: 1,
      next: "blaziken",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['combusken']
  },
  blaziken: {
    index: 257,
    name: "blaziken",
    type: [ "fire", "fighting" ],
    hp: 82,
    attack: 76,
    defense: 51,
    speed: 57,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['blaziken']
  },
  mudkip: {
    index: 258,
    name: "mudkip",
    type: [ "water" ],
    hp: 67,
    attack: 45,
    defense: 40,
    speed: 35,
    evolution: {
      stage: 0,
      next: "marshtomp",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['mudkip']
  },
  marshtomp: {
    index: 259,
    name: "marshtomp",
    type: [ "water", "ground" ],
    hp: 77,
    attack: 53,
    defense: 51,
    speed: 40,
    evolution: {
      stage: 1,
      next: "swampert",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['marshtomp']
  },
  swampert: {
    index: 260,
    name: "swampert",
    type: [ "water", "ground" ],
    hp: 92,
    attack: 66,
    defense: 62,
    speed: 46,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['swampert']
  },
  turtwig: {
    index: 387,
    name: "turtwig",
    type: [ "grass" ],
    hp: 70,
    attack: 44,
    defense: 46,
    speed: 30,
    evolution: {
      stage: 0,
      next: "grotle",
      method: "level",
      level: 18
    }
    moves: pokemonMoves.poke['turtwig']
  },
  grotle: {
    index: 388,
    name: "grotle",
    type: [ "grass" ],
    hp: 80,
    attack: 53,
    defense: 54,
    speed: 33,
    evolution: {
      stage: 1,
      next: "torterra",
      method: "level",
      level: 32
    }
    moves: pokemonMoves.poke['grotle']
  },
  torterra: {
    index: 389,
    name: "torterra",
    type: [ "grass", "ground" ],
    hp: 90,
    attack: 64,
    defense: 65,
    speed: 44,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['torterra']
  },
  chimchar: {
    index: 390
    name: "chimchar",
    type: [ "fire" ],
    hp: 64,
    attack: 45,
    defense: 37,
    speed: 47,
    evolution: {
      stage: 0,
      next: "monferno",
      method: "level",
      level: 14
    }
    moves: pokemonMoves.poke['chimchar']
  },
  monferno: {
    index: 391,
    name: "monferno",
    type: [ "fire", "fighting" ],
    hp: 74,
    attack: 56,
    defense: 41,
    speed: 58,
    evolution: {
      stage: 1,
      next: "infernape",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['monferno']
  },
  infernape: {
    index: 392,
    name: "infernape",
    type: [ "fire", "fighting" ],
    hp: 80,
    attack: 70,
    defense: 52,
    speed: 72,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['infernape']
  },
  piplup: {
    index: 393,
    name: "piplup",
    type: [ "water" ],
    hp: 69,
    attack: 44,
    defense: 43,
    speed: 35,
    evolution: {
      stage: 0,
      next: "prinplup",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['piplup']
  },
  prinplup: {
    index: 394,
    name: "prinplup",
    type: [ "water" ],
    hp: 74,
    attack: 53,
    defense: 52,
    speed: 40,
    evolution: {
      stage: 1,
      next: "empoleon",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['prinplup']
  },
  empoleon: {
    index: 395,
    name: "empoleon",
    type: [ "water", "steel" ],
    hp: 84,
    attack: 67,
    defense: 65,
    speed: 46,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['empoleon']
  },
  snivy: {
    index: 495,
    name: "snivy",
    type: [ "grass" ],
    hp: 65,
    attack: 38,
    defense: 44,
    speed: 48,
    evolution: {
      stage: 0,
      next: "servine",
      method: "level",
      level: 17
    }
    moves: pokemonMoves.poke['snivy']
  },
  servine: {
    index: 496,
    name: "servine",
    type: [ "grass" ],
    hp: 72,
    attack: 46,
    defense: 55,
    speed: 59,
    evolution: {
      stage: 1,
      next: "serperior",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['servine']
  },
  serperior: {
    index: 497,
    name: "serperior",
    type: [ "grass" ],
    hp: 80,
    attack: 55,
    defense: 66,
    speed: 75,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['serperior']
  },
  tepig: {
    index: 498,
    name: "tepig",
    type: [ "fire" ],
    hp: 75,
    attack: 43,
    defense: 38,
    speed: 38,
    evolution: {
      stage: 0,
      next: "pignite",
      method: "level",
      level: 17
    }
    moves: pokemonMoves.poke['tepig']
  },
  pignite: {
    index: 499,
    name: "pignite",
    type: [ "fire", "fighting" ],
    hp: 87,
    attack: 67,
    defense: 44,
    speed: 44,
    evolution: {
      stage: 1,
      next: "emboar",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['pignite']
  },
  emboar: {
    index: 500,
    name: "emboar",
    type: [ "fire", "fighting" ],
    hp: 97,
    attack: 74,
    defense: 49,
    speed: 49,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['emboar']
  },
  oshawott: {
    index: 501,
    name: "oshawott",
    type: [ "water" ],
    hp: 70,
    attack: 46,
    defense: 38,
    speed: 38,
    evolution: {
      stage: 0,
      next: "dewott",
      method: "level",
      level: 17
    }
    moves: pokemonMoves.poke['oshawott']
  },
  dewott: {
    index: 502,
    name: "dewott",
    type: [ "water" ],
    hp: 80,
    attack: 57,
    defense: 46,
    speed: 46,
    evolution: {
      stage: 1,
      next: "samurott",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['dewott']
  },
  samurott: {
    index: 503,
    name: "samurott",
    type: [ "water" ],
    hp: 90,
    attack: 75,
    defense: 55,
    speed: 51,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['samurott']
  },
  chespin: {
    index: 650,
    name: "chespin",
    type: [ "grass" ],
    hp: 70,
    attack: 43,
    defense: 43,
    speed: 34,
    evolution: {
      stage: 0,
      next: "quilladin",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['chespin']
  },
  quilladin: {
    index: 651,
    name: "quilladin",
    type: [ "grass" ],
    hp: 73,
    attack: 50,
    defense: 55,
    speed: 45,
    evolution: {
      stage: 1,
      next: "chesnaught",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['quilladin']
  },
  chesnaught: {
    index: 652,
    name: "chesnaught",
    type: [ "grass", "fighting" ],
    hp: 86,
    attack: 62,
    defense: 67,
    speed: 48,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['chesnaught']
  },
  fennekin: {
    index: 653,
    name: "fennekin",
    type: [ "fire" ],
    hp: 62,
    attack: 42,
    defense: 40,
    speed: 46,
    evolution: {
      stage: 0,
      next: "braixen",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['fennekin']
  },
  braixen: {
    index: 654,
    name: "braixen",
    type: [ "fire" ],
    hp: 72,
    attack: 54,
    defense: 48,
    speed: 53,
    evolution: {
      stage: 1,
      next: "delphox",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['braixen']
  },
  delphox: {
    index: 655,
    name: "delphox",
    type: [ "fire", "psychic" ],
    hp: 80,
    attack: 63,
    defense: 60,
    speed: 70,
    evolution: {
      stage: 1,
      next: null
    }
    moves: pokemonMoves.poke['delphox']
  },
  froakie: {
    index: 656,
    name: "froakie",
    type: [ "water" ],
    hp: 63,
    attack: 45,
    defense: 36,
    speed: 52,
    evolution: {
      stage: 0,
      next: "frogadier",
      method: "level",
      level: 16
    }
    moves: pokemonMoves.poke['froakie']
  },
  frogadier: {
    index: 657,
    name: "frogadier",
    type: [ "water" ],
    hp: 69,
    attack: 53,
    defense: 42,
    speed: 67,
    evolution: {
      stage: 1,
      next: "greninja",
      method: "level",
      level: 36
    }
    moves: pokemonMoves.poke['frogadier']
  },
  greninja: {
    index: 658,
    name: "greninja",
    type: [ "water", "dark" ],
    hp: 78,
    attack: 68,
    defense: 51,
    speed: 80,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['greninja']
  },
  rowlet: {
    index: 722,
    name: "rowlet",
    type: [ "grass", "flying" ],
    hp: 76,
    attack: 42,
    defense: 42,
    speed: 36,
    evolution: {
      stage: 0,
      next: "dartrix",
      method: "level",
      level: 17
    }
    moves: pokemonMoves.poke['rowlet']
  },
  dartrix: {
    index: 723,
    name: "dartrix",
    type: [ "grass", "flying" ],
    hp: 81,
    attack: 53,
    defense: 53,
    speed: 41,
    evolution: {
      stage: 0,
      next: "decidueye",
      method: "level",
      level: 34
    }
    moves: pokemonMoves.poke['dartrix']
  },
  decidueye: {
    index: 724,
    name: "decidueye",
    type: [ "grass", "ghost" ],
    hp: 81,
    attack: 70,
    defense: 61,
    speed: 51,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['decidueye']
  },
  litten: {
    index: 725,
    name: "litten",
    type: [ "fire" ],
    hp: 65,
    attack: 47,
    defense: 35,
    speed: 51,
    evolution: {
      stage: 0,
      next: "torracat",
      method: "level",
      level: 17
    }
    moves: pokemonMoves.poke['litten']
  },
  torracat: {
    index: 726,
    name: "torracat",
    type: [ "fire" ],
    hp: 75,
    attack: 58,
    defense: 40,
    speed: 62,
    evolution: {
      stage: 1,
      next: "incineroar",
      method: "level",
      level: 34
    }
    moves: pokemonMoves.poke['torracat']
  },
  incineroar: {
    index: 727,
    name: "incineroar",
    type: [ "fire", "dark" ],
    hp: 90,
    attack: 67,
    defense: 62,
    speed: 46,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['incineroar']
  },
  popplio: {
    index: 728,
    name: "popplio",
    type: [ "water" ],
    hp: 67,
    attack: 45,
    defense: 43,
    speed: 35,
    evolution: {
      stage: 0,
      next: "brionne",
      method: "level",
      level: 17
    }
    moves: pokemonMoves.poke['popplio']
  },
  brionne: {
    index: 729,
    name: "brionne",
    type: [ "water" ],
    hp: 72,
    attack: 57,
    defense: 54,
    speed: 40,
    evolution: {
      stage: 1,
      next: "primarina",
      method: "level",
      level: 34
    }
    moves: pokemonMoves.poke['brionne']
  },
  primarina: {
    index: 730,
    name: "primarina",
    type: [ "water", "fairy" ],
    hp: 82,
    attack: 62,
    defense: 65,
    speed: 46,
    evolution: {
      stage: 2,
      next: null
    }
    moves: pokemonMoves.poke['primarina']
  },
  // NAME: {
  //   index: INT,
  //   name: NAME,
  //   type: [ "TYPE" ],
  //   stage: INT,
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
