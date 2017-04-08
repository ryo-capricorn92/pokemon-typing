var pokemonMoves = {
  move: {},
  poke: {
    bulbasaur: {
      natural: {
        move0: "tackle",
        move3: "growl",
        move7: "leech seed",
        move9: "vine whip",
        move13: [ "poison powder", "sleep powder" ],
        move15: "take down",
        move19: "razor leaf",
        move21: "sweet scent",
        move25: "growth",
        move27: "double-edge",
        move31: "worry seed",
        move33: "synthesis",
        move37: "seed bomb"
      },
      learn: {}
    },
    ivysaur: {
      natural: {
        move0: [ "tackle", "growl", "leech seed" ],
        move3: "growl",
        move7: "leech seed",
        move9: "vine whip",
        move13: [ "poison powder", "sleep powder" ],
        move15: "take down",
        move20: "razor leaf",
        move23: "sweet scent",
        move28: "growth",
        move31: "double-edge",
        move36: "worry seed",
        move39: "synthesis",
        move44: "solar beam"
      },
      learn: {}
    },
    venusaur: {
      natural: {
        move0: [ "tackle", "growl", "leech seed", "vine whip" ],
        move3: "growl",
        move7: "leech seed",
        move9: "vine whip",
        move13: [ "poison powder", "sleep powder" ],
        move15: "take down",
        move20: "razor leaf",
        move23: "sweet scent",
        move28: "growth",
        move31: "double-edge",
        move32: "petal dance",
        move39: "worry seed",
        move45: "synthesis",
        move50: "petal blizzard",
        move53: "solar beam"
      },
      learn: {}
    },
    charmander: {
      natural: {
        move0: [ "scratch", "growl" ],
        move7: "ember",
        move10: "smokescreen",
        move16: "dragon rage",
        move19: "scary face",
        move25: "fire fang",
        move28: "flame burst",
        move34: "slash",
        move37: "flamethrower",
        move43: "fire spin",
        move46: "inferno"
      },
      learn: {}
    },
    charmeleon: {
      natural: {
        move0: [ "scratch", "growl", "ember" ],
        move7: "ember",
        move10: "smokescreen",
        move17: "dragon rage",
        move21: "scary face",
        move28: "fire fang",
        move32: "flame burst",
        move39: "slash",
        move43: "flamethrower",
        move50: "fire spin",
        move54: "inferno"
      },
      learn: {}
    },
    charizard: {
      natural: {
        move0: [ "flare blitz", "heat wave", "dragon claw", "shadow claw", "air slash", "scratch", "growl", "ember", "smokescreen" ],
        move7: "ember",
        move10: "smokescreen",
        move17: "dragon rage",
        move21: "scary face",
        move28: "fire fang",
        move32: "flame burst",
        move36: "wing attack",
        move41: "slash",
        move47: "flamethrower",
        move56: "fire spin",
        move62: "inferno",
        move71: "heat wave",
        move77: "flare blitz"
      },
      learn: {}
    },
    squirtle: {
      natural: {
        move0: "tackle",
        move4: "tail whip",
        move7: "water gun",
        move10: "withdraw",
        move13: "bubble",
        move16: "bite",
        move19: "rapid spin",
        move22: "protect",
        move25: "water pulse",
        move28: "aqua tail",
        move31: "skull bash",
        move34: "iron defense",
        move37: "rain dance",
        move40: "hydro pump"
      },
      learn: {}
    },
    wartortle: {
      natural: {
        move0: [ "tackle", "tail whip", "water gun" ],
        move4: "tail whip",
        move7: "water gun",
        move10: "withdraw",
        move13: "bubble",
        move16: "bite",
        move20: "rapid spin",
        move24: "protect",
        move28: "water pulse",
        move32: "aqua tail",
        move36: "skull bash",
        move40: "iron defense",
        move44: "rain dance",
        move48: "hydro pump"
      },
      learn: {}
    },
    blastoise: {
      natural: {
        move0: [ "flash cannon", "tackle", "tail whip", "water gun", "withdraw" ],
        move4: "tail whip",
        move7: "water gun",
        move10: "withdraw",
        move13: "bubble",
        move16: "bite",
        move20: "rapid spin",
        move24: "protect",
        move28: "water pulse",
        move32: "aqua tail",
        move39: "skull bash",
        move46: "iron defense",
        move53: "rain dance",
        move60: "hydro pump"
      },
      learn: {}
    },
    chikorita: {
      natural: {
        move0: [ "tackle", "growl" ],
        move6: "razor leaf",
        move9: "poison powder",
        move12: "synthesis",
        move17: "reflect",
        move20: "magical leaf",
        move23: "natural gift",
        move28: "sweet scent",
        move31: "light screen",
        move34: "body slam",
        move39: "safeguard",
        move42: "aromatherapy",
        move45: "solar beam"
      },
      learn: {}
    },
    bayleef: {
      natural: {
        move0: [ "tackle", "growl", "razor leaf", "poison powder" ],
        move6: "razor leaf",
        move9: "poison powder",
        move12: "synthesis",
        move18: "reflect",
        move22: "magical leaf",
        move26: "natural gift",
        move32: "sweet scent",
        move36: "light screen",
        move40: "body slam",
        move46: "safeguard",
        move50: "aromatherapy"
      },
      learn: {}
    },
    meganium: {
      natural: {
        move0: [ "tackle", "growl", "razor leaf", "poison powder" ],
        move6: "razor leaf",
        move9: "poison powder",
        move12: "synthesis",
        move18: "reflect",
        move22: "magical leaf",
        move26: "natural gift",
        move32: "petal dance",
        move34: "sweet scent",
        move40: "light screen",
        move46: "body slam",
        move54: "safeguard",
        move60: "aromatherapy",
        move66: "solar beam",
        move70: "petal blizzard"
      },
      learn: {}
    },
    cyndaquil: {
      natural: {
        move0: [ "tackle", "leer" ],
        move6: "smokescreen",
        move10: "ember",
        move13: "quick attack",
        move19: "flame wheel",
        move22: "defense curl",
        move28: "flame charge",
        move31: "swift",
        move37: "lava plume",
        move40: "flamethrower",
        move46: "inferno",
        move49: "rollout",
        move55: "double-edge",
        move58: "eruption"
      },
      learn: {}
    },
    quilava: {
      natural: {
        move0: [ "tackle", "leer", "smokescreen" ],
        move6: "smokescreen",
        move10: "ember",
        move13: "quick attack",
        move20: "flame wheel",
        move24: "defense curl",
        move31: "swift",
        move35: "flame charge",
        move42: "lava plume",
        move46: "flamethrower",
        move53: "inferno",
        move57: "rollout",
        move64: "double-edge",
        move68: "eruption"
      },
      learn: {}
    },
    typhlosian: {
      natural: {
        move0: [ "eruption", "double-edge", "gyro ball", "tackle", "leer", "smokescreen", "ember" ],
        move6: "smokescreen",
        move10: "ember",
        move13: "quick attack",
        move20: "flame wheel",
        move24: "defense curl",
        move31: "swift",
        move35: "flame charge",
        move43: "lava plume",
        move48: "flamethrower",
        move56: "inferno",
        move61: "rollout",
        move69: "double-edge",
        move74: "eruption"
      },
      learn: {}
    },
    totodile: {
      natural: {
        move0: [ "scratch", "leer" ],
        move6: "water gun",
        move8: "rage",
        move13: "bite",
        move15: "scary face",
        move20: "ice fang",
        move22: "flail",
        move27: "crunch",
        move29: "chip away",
        move34: "slash",
        move36: "screech",
        move41: "thrash",
        move43: "aqua tail",
        move48: "superpower",
        move50: "hydro pump"
      },
      learn: {}
    },
    croconaw: {
      natural: {
        move0: [ "scratch", "leer", "water gun" ],
        move6: "water gun",
        move8: "rage",
        move13: "bite",
        move15: "scary face",
        move21: "ice fang",
        move24: "flail",
        move30: "crunch",
        move33: "chip away",
        move39: "slash",
        move42: "screech",
        move48: "thrash",
        move51: "aqua tail",
        move57: "superpower",
        move60: "hydro pump"
      },
      learn: {}
    },
    feraligator: {
      natural: {
        move0: [ "scratch", "leer", "water gun", "rage" ],
        move6: "water gun",
        move8: "rage",
        move13: "bite",
        move15: "scary face",
        move21: "ice fang",
        move24: "flail",
        move30: "agility",
        move32: "crunch",
        move37: "chip away",
        move45: "slash",
        move50: "screech",
        move58: "thrash",
        move63: "aqua tail",
        move71: "superpower",
        move76: "hydro pump"
      },
      learn: {}
    },
    treecko: {
      natural: {
        move0: [ "pound", "leer" ],
        move6: "absorb",
        move11: "quick attack",
        move16: "pursuit",
        move21: "screech",
        move26: "mega drain",
        move31: "agility",
        move36: "slam",
        move41: "detect",
        move46: "giga drain",
        move50: "energy ball"
      },
      learn: {}
    },
    grovyle: {
      natural: {
        move0: [ "pound", "leer", "absorb", "quick attack" ],
        move6: "absorb",
        move11: "quick attack",
        move16: "fury cutter",
        move17: "pursuit",
        move23: "screech",
        move29: "leaf blade",
        move35: "agility",
        move41: "slam",
        move47: "detect",
        move53: "false swipe",
        move59: "leaf storm"
      },
      learn: {}
    },
    sceptile: {
      natural: {
        move0: [ "night slash", "pound", "leer", "absorb", "quick attack" ],
        move6: "absorb",
        move11: "quick attack",
        move16: "x-scissor",
        move17: "pursuit",
        move23: "screech",
        move29: "leaf blade",
        move35: "agility",
        move43: "slam",
        move51: "detect",
        move59: "false swipe",
        move67: "leaf storm"
      },
      learn: {}
    },
    torchic: {
      natural: {
        move0: [ "scratch", "growl" ],
        move7: "focus energy",
        move10: "ember",
        move16: "peck",
        move19: "sand-attack",
        move25: "fire spin",
        move28: "quick attack",
        move34: "slash",
        move37: "mirror move",
        move43: "flamethrower"
      },
      learn: {}
    },
    combusken: {
      natural: {
        move0: [ "scratch", "growl", "focus energy", "ember" ],
        move7: "focus energy",
        move10: "ember",
        move16: "double kick",
        move17: "peck",
        move21: "sand-attack",
        move28: "bulk up",
        move32: "quick attack",
        move39: "slash",
        move43: "mirror move",
        move50: "sky uppercut",
        move54: "flare blitz"
      },
      learn: {}
    },
    blaziken: {
      natural: {
        move0: [ "fire punch", "hi jump kick", "scratch", "growl", "focus energy", "ember" ],
        move7: "focus energy",
        move10: "ember",
        move16: "double kick",
        move17: "peck",
        move21: "sand-attack",
        move28: "bulk up",
        move32: "quick attack",
        move36: "blaze kick",
        move42: "slash",
        move49: "brave bird",
        move59: "sky uppercut",
        move66: "flare blitz"
      },
      learn: {}
    },
    mudkip: {
      natural: {
        move0: [ "tackle", "growl" ],
        move6: "mud-slap",
        move10: "water gun",
        move15: "bide",
        move19: "foresight",
        move24: "mud sport",
        move28: "take down",
        move33: "whirlpool",
        move37: "protect",
        move42: "hydro pump",
        move46: "endeavor"
      },
      learn: {}
    },
    marshtomp: {
      natural: {
        move0: [ "tackle", "growl", "mud-slap", "water gun" ],
        move6: "mud-slap",
        move10: "water gun",
        move15: "bide",
        move16: "mud shot",
        move20: "foresight",
        move25: "mud bomb",
        move31: "take down",
        move37: "muddy water",
        move42: "protect",
        move46: "earthquake",
        move53: "endeavor"
      },
      learn: {}
    },
    swampert: {
      natural: {
        move0: [ "tackle", "growl", "mud-slap", "water gun" ],
        move6: "mud-slap",
        move10: "water gun",
        move15: "bide",
        move16: "mud shot",
        move20: "foresight",
        move25: "mud bomb",
        move31: "take down",
        move39: "muddy water",
        move46: "protect",
        move52: "earthquake",
        move61: "endeavor",
        move69: "hammer arm"
      },
      learn: {}
    },
    turtwig: {
      natural: {
        move0: "tackle",
        move5: "withdraw",
        move9: "absorb",
        move13: "razor leaf",
        move17: "curse",
        move21: "bite",
        move25: "mega drain",
        move29: "leech seed",
        move33: "synthesis",
        move37: "crunch",
        move41: "giga drain",
        move45: "leaf storm"
      },
      learn: {}
    },
    grotle: {
      natural: {
        move0: [ "tackle", "withdraw" ],
        move5: "withdraw",
        move9: "absorb",
        move13: "razor leaf",
        move17: "curse",
        move22: "bite",
        move27: "mega drain",
        move32: "leech seed",
        move37: "synthesis",
        move42: "crunch",
        move47: "giga drain",
        move52: "leaf storm"
      },
      learn: {}
    },
    torterra: {
      natural: {
        move0: [ "wood hammer", "tackle", "withdraw", "absorb", "razor leaf" ],
        move5: "withdraw",
        move9: "absorb",
        move13: "razor leaf",
        move17: "curse",
        move22: "bite",
        move27: "mega drain",
        move32: "earthquake",
        move33: "leech seed",
        move39: "synthesis",
        move45: "crunch",
        move51: "giga drain",
        move57: "leaf storm"
      },
      learn: {}
    },
    chimchar: {
      natural: {
        move0: [ "scratch", "leer" ],
        move7: "ember",
        move9: "taunt",
        move15: "fury swipes",
        move17: "flame wheel",
        move23: "nasty plot",
        move25: "torment",
        move31: "facade",
        move33: "fire spin",
        move39: "acrobatics",
        move41: "slack off",
        move47: "flamethrower"
      },
      learn: {}
    },
    monferno: {
      natural: {
        move0: [ "scratch", "leer", "ember" ],
        move7: "ember",
        move9: "taunt",
        move14: "mach punch",
        move16: "fury swipes",
        move19: "flame wheel",
        move26: "feint",
        move29: "torment",
        move36: "close combat",
        move39: "fire spin",
        move46: "acrobatics",
        move49: "slack off",
        move56: "flare blitz"
      },
      learn: {}
    },
    infernape: {
      natural: {
        move0: [ "scratch", "leer", "ember", "taunt" ],
        move7: "ember",
        move9: "taunt",
        move14: "mach punch",
        move16: "fury swipes",
        move19: "flame wheel",
        move26: "feint",
        move29: "punishment",
        move36: "close combat",
        move42: "fire spin",
        move52: "acrobatics",
        move58: "calm mind",
        move68: "flare blitz"
      },
      learn: {}
    },
    piplup: {
      natural: {
        move0: "pound",
        move4: "growl",
        move8: "bubble",
        move11: "water sport",
        move15: "peck",
        move18: "bubblebeam",
        move22: "bide",
        move25: "fury attack",
        move29: "brine",
        move32: "whirlpool",
        move36: "mist",
        move39: "drill peck",
        move43: "hydro pump"
      },
      learn: {}
    },
    prinplup: {
      natural: {
        move0: [ "tackle", "growl" ],
        move4: "growl",
        move8: "bubble",
        move11: "water sport",
        move15: "peck",
        move16: "metal claw",
        move19: "bubblebeam",
        move24: "bide",
        move28: "fury attack",
        move33: "brine",
        move37: "whirlpool",
        move42: "mist",
        move46: "drill peck",
        move51: "hydro pump"
      },
      learn: {}
    },
    empoleon: {
      natural: {
        move0: [ "tackle", "growl", "bubble" ],
        move4: "growl",
        move8: "bubble",
        move11: "swords dance",
        move15: "peck",
        move16: "metal claw",
        move19: "bubblebeam",
        move24: "swagger",
        move28: "fury attack",
        move33: "brine",
        move36: "aqua jet",
        move39: "whirlpool",
        move46: "mist",
        move52: "drill peck",
        move59: "hydro pump"
      },
      learn: {}
    },
    snivy: {
      natural: {
        move0: "tackle",
        move4: "leer",
        move7: "vine whip",
        move10: "wrap",
        move13: "growth",
        move16: "leaf tornado",
        move19: "leech seed",
        move22: "mega drain",
        move25: "slam",
        move28: "leaf blade",
        move31: "coil",
        move34: "giga drain",
        move37: "wring out",
        move40: "gastro acid",
        move43: "leaf storm"
      },
      learn: {}
    },
    servine: {
      natural: {
        move0: [ "tackle", "leer", "vine whip", "wrap" ],
        move4: "leer",
        move7: "vine whip",
        move10: "wrap",
        move13: "growth",
        move16: "leaf tornado",
        move20: "leech seed",
        move24: "mega drain",
        move28: "slam",
        move32: "leaf blade",
        move36: "coil",
        move40: "giga drain",
        move44: "wring out",
        move48: "gastro acid",
        move52: "leaf storm"
      },
      learn: {}
    },
    serperior: {
      natural: {
        move0: [ "tackle", "leer", "vine whip", "wrap" ],
        move4: "leer",
        move7: "vine whip",
        move10: "wrap",
        move13: "growth",
        move16: "leaf tornado",
        move20: "leech seed",
        move24: "mega drain",
        move28: "slam",
        move32: "leaf blade",
        move38: "coil",
        move44: "giga drain",
        move50: "wring out",
        move56: "gastro acid",
        move62: "leaf storm"
      },
      learn: {}
    },
    tepig: {
      natural: {
        move0: "tackle",
        move3: "tail whip",
        move7: "ember",
        move9: "odor sleuth",
        move13: "defense curl",
        move15: "flame charge",
        move19: "smog",
        move21: "rollout",
        move25: "take down",
        move27: "heat crash",
        move31: "assurance",
        move33: "flamethrower",
        move37: "head smash",
        move39: "roar",
        move43: "flare blitz"
      },
      learn: {}
    },
    pignite: {
      natural: {
        move0: [ "tackle", "tail whip", "ember", "odor sleuth" ],
        move3: "tail whip",
        move7: "ember",
        move9: "odor sleuth",
        move13: "defense curl",
        move15: "flame charge",
        move17: "arm thrust",
        move20: "smog",
        move23: "rollout",
        move28: "take down",
        move31: "heat crash",
        move36: "assurance",
        move39: "flamethrower",
        move44: "head smash",
        move47: "roar",
        move52: "flare blitz"
      },
      learn: {}
    },
    emboar: {
      natural: {
        move0: [ "hammer arm", "tackle", "tail whip", "ember", "odor sleuth" ],
        move3: "tail whip",
        move7: "ember",
        move9: "odor sleuth",
        move13: "defense curl",
        move15: "flame charge",
        move17: "arm thrust",
        move20: "smog",
        move23: "rollout",
        move28: "take down",
        move31: "heat crash",
        move38: "assurance",
        move43: "flamethrower",
        move50: "head smash",
        move55: "roar",
        move62: "flare blitz"
      },
      learn: {}
    },
    oshawott: {
      natural: {
        move0: "tackle",
        move5: "tail whip",
        move7: "water gun",
        move11: "water sport",
        move13: "focus energy",
        move17: "razor shell",
        move19: "fury cutter",
        move23: "water pulse",
        move25: "revenge",
        move29: "aqua jet",
        move31: "encore",
        move35: "aqua tail",
        move37: "retaliate",
        move41: "swords dance",
        move43: "hydro pump"
      },
      learn: {}
    },
    dewott: {
      natural: {
        move0: [ "tackle", "tail whip", "water gun", "water sport" ],
        move5: "tail whip",
        move7: "water gun",
        move11: "water sport",
        move13: "focus energy",
        move17: "razor shell",
        move20: "fury cutter",
        move25: "water pulse",
        move28: "revenge",
        move33: "aqua jet",
        move36: "encore",
        move41: "aqua tail",
        move44: "retaliate",
        move49: "swords dance",
        move52: "hydro pump"
      },
      learn: {}
    },
    samurott: {
      natural: {
        move0: [ "megahorn", "tackle", "tail whip", "water gun", "water sport" ],
        move5: "tail whip",
        move7: "water gun",
        move11: "water sport",
        move13: "focus energy",
        move17: "razor shell",
        move20: "fury cutter",
        move25: "water pulse",
        move28: "revenge",
        move33: "aqua jet",
        move36: "slash",
        move38: "encore",
        move45: "aqua tail",
        move50: "retaliate",
        move57: "swords dance",
        move62: "hydro pump"
      },
      learn: {}
    },
    chespin: {
      natural: {
        move0: [ "tackle", "growl" ],
        move5: "vine whip",
        move8: "rollout",
        move11: "bite",
        move15: "leech seed",
        move18: "pin missile",
        move27: "take down",
        move32: "seed bomb",
        move35: "mud shot",
        move39: "bulk up",
        move42: "body slam",
        move45: "pain split",
        move48: "wood hammer"
      },
      learn: {}
    },
    quilladin: {
      natural: {
        move0: [ "tackle", "growl" ],
        move5: "vine whip",
        move8: "rollout",
        move11: "bite",
        move15: "leech seed",
        move20: "pin missile",
        move26: "needle arm",
        move30: "take down",
        move35: "seed bomb",
        move39: "mud shot",
        move44: "bulk up",
        move48: "body slam",
        move52: "pain split",
        move55: "wood hammer"
      },
      learn: {}
    },
    chesnaught: {
      natural: {
        move0: [ "feint", "hammer arm", "belly drum", "tackle", "growl" ],
        move5: "vine whip",
        move8: "rollout",
        move11: "bite",
        move15: "leech seed",
        move20: "pin missile",
        move26: "needle arm",
        move30: "take down",
        move35: "seed bomb",
        move36: "spikey shield",
        move41: "mud shot",
        move44: "bulk up",
        move48: "body slam",
        move52: "pain split",
        move55: "wood hammer",
        move60: "hammer arm",
        move70: "giga impact",
        move75: "spikey shield"
      },
      learn: {}
    },
    fennekin: {
      natural: {
        move0: [ "scratch", "tail whip" ],
        move5: "ember",
        move11: "howl",
        move14: "flame charge",
        move17: "psybeam",
        move20: "fire spin",
        move25: "lucky chant",
        move27: "light screen",
        move31: "psyshock",
        move35: "flamethrower",
        move38: "will-o-wisp",
        move41: "psychic",
        move43: "sunny day",
        move46: "magic room",
        move48: "fire blast"
      },
      learn: {}
    },
    braixen: {
      natural: {
        move0: [ "scratch", "tail whip" ],
        move5: "ember",
        move11: "howl",
        move14: "flame charge",
        move18: "psybeam",
        move22: "fire spin",
        move27: "lucky chant",
        move30: "light screen",
        move34: "psyshock",
        move41: "flamethrower",
        move45: "will-o-wisp",
        move48: "psychic",
        move51: "sunny day",
        move53: "magic room",
        move55: "fire blast"
      },
      learn: {}
    },
    delphox: {
      natural: {
        move0: [ "future sight", "role play", "switcheroo", "shadow ball", "scratch", "tail whip" ],
        move5: "ember",
        move11: "howl",
        move14: "flame charge",
        move18: "psybeam",
        move22: "fire spin",
        move27: "lucky chant",
        move30: "light screen",
        move34: "psyshock",
        move36: "mystical fire",
        move42: "flamethrower",
        move47: "will-o-wisp",
        move51: "psychic",
        move55: "sunny day",
        move58: "magic room",
        move61: "fire blast",
        move69: "future sight",
        move75: "mystical fire"
      },
      learn: {}
    },
    froakie: {
      natural: {
        move0: [ "pound", "growl" ],
        move5: "bubble",
        move8: "quick attack",
        move10: "lick",
        move14: "water pulse",
        move18: "smokescreen",
        move21: "round",
        move25: "fling",
        move29: "smack down",
        move35: "substitute",
        move39: "bounce",
        move43: "double team",
        move48: "hydro pump"
      },
      learn: {}
    },
    frogadier: {
      natural: {
        move0: [ "pound", "growl" ],
        move5: "bubble",
        move8: "quick attack",
        move10: "lick",
        move14: "water pulse",
        move18: "smokescreen",
        move21: "round",
        move25: "fling",
        move29: "smack down",
        move35: "substitute",
        move39: "bounce",
        move43: "double team",
        move48: "hydro pump"
      },
      learn: {}
    },
    greninja: {
      natural: {
        move0: [ "night slash", "role play", "mat block", "pound", "growl" ],
        move5: "bubble",
        move8: "quick attack",
        move10: "lick",
        move14: "water pulse",
        move20: "smokescreen",
        move23: "shadow sneak",
        move28: "spikes",
        move33: "feint attack",
        move36: "water shuriken",
        move43: "substitute",
        move49: "extrasensory",
        move52: "double team",
        move56: "haze",
        move60: "hydro pump",
        move70: "night slash",
        move75: "water shuriken"
      },
      learn: {}
    },
    rowlet: {
      natural: {
        move0: [ "tackle", "leafage" ],
        move4: "growl",
        move8: "peck",
        move11: "astonish",
        move15: "razor leaf",
        move18: "foresight",
        move22: "pluck",
        move25: "synthesis",
        move29: "fury attack",
        move32: "sucker punch",
        move36: "leaf blade",
        move39: "feather dance",
        move43: "brave bird",
        move46: "nasty plot"
      },
      learn: {}
    },
    dartrix: {
      natural: {
        move0: [ "tackle", "leafage", "growl", "peck" ],
        move4: "growl",
        move8: "peck",
        move11: "astonish",
        move15: "razor leaf",
        move19: "foresight",
        move24: "pluck",
        move28: "synthesis",
        move33: "fury attack",
        move37: "sucker punch",
        move42: "leaf blade",
        move46: "feather dance",
        move51: "brave bird",
        move55: "nasty plot"
      },
      learn: {}
    },
    decidueye: {
      natural: {
        move0: [ "u-turn", "tackle", "leafage", "growl", "peck" ],
        move4: "growl",
        move8: "peck",
        move11: "astonish",
        move15: "razor leaf",
        move19: "foresight",
        move24: "pluck",
        move28: "synthesis",
        move33: "fury attack",
        move38: "sucker punch",
        move44: "leaf blade",
        move49: "feather dance",
        move55: "brave bird",
        move60: "nasty plot"
      },
      learn: {}
    },
    litten: {
      natural: {
        move0: [ "scratch", "ember" ],
        move4: "growl",
        move8: "lick",
        move11: "leer",
        move15: "fire fang",
        move18: "roar",
        move22: "bite",
        move25: "swagger",
        move29: "fury swipes",
        move32: "thrash",
        move36: "flamethrower",
        move39: "scary face",
        move43: "flare blitz",
        move46: "outrage"
      },
      learn: {}
    },
    torracat: {
      natural: {
        move0: [ "scratch", "ember", "growl", "lick" ],
        move4: "growl",
        move8: "lick",
        move11: "leer",
        move15: "fire fang",
        move19: "roar",
        move24: "bite",
        move28: "swagger",
        move33: "fury swipes",
        move37: "thrash",
        move42: "flamethrower",
        move46: "scary face",
        move51: "flare blitz",
        move55: "outrage"
      },
      learn: {}
    },
    incineroar: {
      natural: {
        move0: [ "bulk up", "throat chop", "scratch", "ember", "growl", "lick" ],
        move4: "growl",
        move8: "lick",
        move11: "leer",
        move15: "fire fang",
        move19: "roar",
        move24: "bite",
        move28: "swagger",
        move33: "fury swipes",
        move38: "thrash",
        move44: "flamethrower",
        move49: "scary face",
        move55: "flare blitz",
        move60: "outrage",
        move66: "cross chop"
      },
      learn: {}
    },
    popplio: {
      natural: {
        move0: [ "pound", "water gun" ],
        move4: "growl",
        move8: "disarming voice",
        move11: "baby-doll eyes",
        move15: "aqua jet",
        move18: "encore",
        move22: "bubblebeam",
        move25: "sing",
        move29: "double slap",
        move32: "hyper voice",
        move36: "moonblast",
        move39: "captivate",
        move43: "hydro pump",
        move46: "misty terrain"
      },
      learn: {}
    },
    brionne: {
      natural: {
        move0: [ "pound", "water gun", "growl", "disarming voice" ],
        move4: "growl",
        move8: "disarming voice",
        move11: "baby-doll eyes",
        move15: "aqua jet",
        move19: "encore",
        move24: "bubblebeam",
        move28: "sing",
        move33: "double slap",
        move37: "hyper voice",
        move42: "moonblast",
        move46: "captivate",
        move51: "hydro pump",
        move55: "misty terrain"
      },
      learn: {}
    },
    primarina: {
      natural: {
        move0: [ "pound", "water gun", "growl", "disarming voice" ],
        move4: "growl",
        move9: "disarming voice",
        move11: "baby-doll eyes",
        move15: "aqua jet",
        move19: "encore",
        move24: "bubblebeam",
        move28: "sing",
        move33: "double slap",
        move38: "hyper voice",
        move44: "moonblast",
        move49: "captivate",
        move55: "hydro pump",
        move60: "misty terrain"
      },
      learn: {}
    }
  }
}
