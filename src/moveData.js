  // "power whip": {
  //   power: INT,
  //   level: INT,
  //   type: TYPE,
  //   effects: {
  //     factors: {
  //       chance: null
  //     },
  //     special: {
  //       burn: false,
  //       freeze: false,
  //       flinch: false,
  //       paralyze: false,
  //       confusion: false,
  //       poison: false
  //     },
  //     stats: {
  //       lowerDefense: false,
  //       upDefense: false,
  //
  //     }
  //   }
  // }

function Move (name, power, level, type, effect) {
  this.name = name;
  this.power = power;
  this.level = level;
  this.type = type;
  if (effect) {
    this.effects = {};
    if (effect.special) {
      this.effects.special = {};
      this.effects.special[effect.special] = true;
      this.effects.factors = {};
      this.effects.factors.chance = effect.chance;
    }
    if (effect.stats) {
      this.effects.stats = {};
      this.effects.stats[effect.stats] = effect.factor;
    }
  }
}

pokemonMoves.move["body slam"] = new Move ("body slam", 85, 0, "normal", null);
pokemonMoves.move["charm"] = new Move ("charm", 0, 0, "fairy", null);
pokemonMoves.move["cut"] = new Move ("cut", 50, 0, "normal", null);
pokemonMoves.move["defense curl"] = new Move ("defense curl", 0, 0, "normal", null);
pokemonMoves.move["giga drain"] = new Move ("giga drain", 75, 0, "grass", null);
pokemonMoves.move["grass knot"] = new Move ("grass knot", 70, 0, "grass", null);
pokemonMoves.move["growl"] = new Move ("growl", 0, 0, "normal", null);
pokemonMoves.move["growth"] = new Move ("growth", 0, 0, "grass", null);
pokemonMoves.move["headbutt"] = new Move ("headbutt", 70, 0, "normal", null);
pokemonMoves.move["hidden power"] = new Move ("hidden power", 60, 0, "normal", null);
pokemonMoves.move["leaf storm"] = new Move ("leaf storm", 130, 0, "grass", null);
pokemonMoves.move["mud-slap"] = new Move ("mud-slap", 20, 0, "ground", null);
pokemonMoves.move["poison powder"] = new Move ("poison powder", 0, 0, "poison", null);
pokemonMoves.move["razor leaf"] = new Move ("razor leaf", 55, 0, "grass", null);
pokemonMoves.move["rock smash"] = new Move ("rock smash", 40, 0, "fighting", null);
pokemonMoves.move["seed bomb"] = new Move ("seed bomb", 80, 0, "grass", null);
pokemonMoves.move["sleep powder"] = new Move ("sleep powder", 0, 0, "normal", null);
pokemonMoves.move["rest"] = new Move ("rest", 0, 0, "normal", null);
pokemonMoves.move["sleep talk"] = new Move ("sleep talk", 0, 0, "normal", null);
pokemonMoves.move["sludge bomb"] = new Move ("sludge bomb", 90, 0, "poison", null);
pokemonMoves.move["solar beam"] = new Move ("solar beam", 120, 0, "grass", null);
pokemonMoves.move["vine whip"] = new Move ("vine whip", 45, 0, "grass", null);
pokemonMoves.move["venoshock"] = new Move ("venoshock", 65, 0, "poison", null);
pokemonMoves.move["toxic"] = new Move ("toxic", 0, 0, "poison", null);
pokemonMoves.move["string shot"] = new Move ("string shot", 0, 0, "bug", null);
pokemonMoves.move["bullet seed"] = new Move ("bullet seed", 25, 0, "grass", null);
pokemonMoves.move["double team"] = new Move ("double team", 0, 0, "normal", null);
pokemonMoves.move["flash"] = new Move ("flash", 0, 0, "normal", null);
pokemonMoves.move["fury cutter"] = new Move ("fury cutter", 40, 0, "bug", null);
pokemonMoves.move["magical leaf"] = new Move ("magical leaf", 60, 0, "grass", null);
pokemonMoves.move["petal dance"] = new Move ("petal dance", 120, 0, "grass", null);
pokemonMoves.move["skull bash"] = new Move ("skull bash", 130, 0, "normal", null);
pokemonMoves.move["sludge"] = new Move ("sludge", 65, 0, "poison", null);
pokemonMoves.move["bulldoze"] = new Move ("bulldoze", 60, 0, "ground", null);
pokemonMoves.move["earthquake"] = new Move ("earthquake", 100, 0, "ground", null);
pokemonMoves.move["giga impact"] = new Move ("giga impact", 150, 0, "normal", null);
pokemonMoves.move["hyper beam"] = new Move ("hyper beam", 150, 0, "normal", null);
pokemonMoves.move["petal blizzard"] = new Move ("petal blizzard", 90, 0, "grass", null);
pokemonMoves.move["synthesis"] = new Move ("synthesis", 0, 0, "grass", null);
pokemonMoves.move["take down"] = new Move ("take down", 90, 0, "normal", null);
pokemonMoves.move["work up"] = new Move ("work up", 0, 0, "normal", null);
pokemonMoves.move["swords dance"] = new Move ("swords dance", 0, 0, "TYPE", normal);
pokemonMoves.move["attract"] = new Move ("attract", 0, 0, "normal", null);
pokemonMoves.move["bite"] = new Move ("bite", 60, 0, "dark", null);
pokemonMoves.move["blast burn"] = new Move ("blast burn", 150, 0, "fire", null);
pokemonMoves.move["brick break"] = new Move ("brick break", 75, 0, "fighting", null);
pokemonMoves.move["crunch"] = new Move ("crunch", 80, 0, "dark", null);
pokemonMoves.move["dig"] = new Move ("dig", 80, 0, "ground", null);
pokemonMoves.move["dragon pulse"] = new Move ("dragon pulse", 85, 0, "dragon", null);
pokemonMoves.move["ember"] = new Move ("ember", 40, 0, "fire", null);
pokemonMoves.move["fire fang"] = new Move ("fire fang", 65, 0, "fire", null);
pokemonMoves.move["fire punch"] = new Move ("fire punch", 75, 0, "fire", null);
pokemonMoves.move["fire spin"] = new Move ("fire spin", 35, 0, "fire", null);
pokemonMoves.move["flamethrower"] = new Move ("flamethrower", 90, 0, "fire", null);
pokemonMoves.move["iron tail"] = new Move ("iron tail", 100, 0, "steel", null);
pokemonMoves.move["metal claw"] = new Move ("metal claw", 50, 0, "steel", null);
pokemonMoves.move["quick attack"] = new Move ("quick attack", 40, 0, "normal", null);
pokemonMoves.move["rock slide"] = new Move ("rock slide", 75, 0, "rock", null);
pokemonMoves.move["scratch"] = new Move ("scratch", 40, 0, "normal", null);
pokemonMoves.move["slash"] = new Move ("slash", 70, 0, "normal", null);
pokemonMoves.move["smokescreen"] = new Move ("smokescreen", 0, 0, "normal", null);
pokemonMoves.move["belly drum"] = new Move ("belly drum", 0, 0, "normal", null);
pokemonMoves.move["dragon claw"] = new Move ("dragon claw", 80, 0, "dragon", null);
pokemonMoves.move["dragon rage"] = new Move ("dragon rage", 0, 0, "dragon", null);
pokemonMoves.move["fire blast"] = new Move ("fire blast", 110, 0, "fire", null);
pokemonMoves.move["flame burst"] = new Move ("flame burst", 70, 0, "fire", null);
pokemonMoves.move["heat wave"] = new Move ("heat wave", 95, 0, "fire", null);
pokemonMoves.move["mega punch"] = new Move ("mega punch", 80, 0, "normal", null);
pokemonMoves.move["rage"] = new Move ("rage", 20, 0, "normal", null);
pokemonMoves.move["rock tomb"] = new Move ("rock tomb", 60, 0, "rock", null);
pokemonMoves.move["seismic toss"] = new Move ("seismic toss", 0, 0, "fighting", null);
pokemonMoves.move["will-o-wisp"] = new Move ("will-o-wisp", 0, 0, "fire", null);
pokemonMoves.move["thunder punch"] = new Move ("thunder punch", 75, 0, "electric", null);
pokemonMoves.move["NAME"] = new Move ("NAME", POWER, 0, "TYPE", null);
