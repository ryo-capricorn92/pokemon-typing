var pokemonMoves = {
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
}

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

pokemonMoves["NAME"] = new Move ("NAME", POWER, LEVEL, "TYPE", null);
