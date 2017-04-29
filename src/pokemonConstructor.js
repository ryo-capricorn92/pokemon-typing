function Pokemon({ pokemon, level, userPokemon }) { // eslint-disable-line
  this.level = level || 5;
  this.experienceCheck = this.experienceMethods[pokemon.experienceGroup];
  this.experience = this.experienceCheck(this.level);
  this.name = pokemon.name;
  this.index = pokemon.index;
  this.type = pokemon.type;
  this.stats = this.generateStats(pokemon);

  this.currentStats = {
    hp: this.stats.hp,
    attack: this.stats.attack,
    defense: this.stats.defense,
    speed: this.stats.speed,
    modifier: {
      attack: 0,
      defense: 0,
      speed: 0,
    },
    affliction: null,
  };

  this.ev = pokemon.ev;
  this.evolution = pokemon.evolution;
  this.moves = this.pickMoves(pokemon);
}

Pokemon.prototype.generateStats = function (pokemon) {
  var base = pokemon.stats;
  var stats = {};

  stats.hp = base.hp;
  stats.speed = base.speed;

  stats.attack = Math.round((base.attack + base.spAttack) / 2);
  stats.defense = Math.round((base.defense + base.spDefense) / 2);

  return stats;
};

Pokemon.prototype.pickMoves = function (pokemon) {
  var moveObj;
  var moves = [];

  for (var i = 0; i <= this.level; i++) {
    moveObj = pokemon.moves.natural[`move${i}`];
    if (moveObj) {
      moveObj = typeof moveObj === 'object' ? moveObj : [moveObj];

      moveObj.forEach(learnValidMoves);
    }
  }

  function learnValidMoves(possMove) {
    possMove = pokemonMoves.move[possMove];
    if (!possMove.notUsed) {
      if (moves.length >= 3) {
        moves[Math.floor(Math.random() * 4)] = possMove;
      } else {
        moves.push(possMove);
      }
    }
  }

  return moves;
};

Pokemon.prototype.experienceMethods = {
  erratic(n) {
    n = n || this.level + 1;
    if (n <= 50) {
      return ((n * n * n) * (100 - n)) / 50;
    } else if (n <= 68) {
      return ((n * n * n) * (150 - n)) / 100;
    } else if (n <= 98) {
      return ((n * n * n) * ((1911 - (10 * n)) / 3)) / 500;
    } else if (n === 99) {
      return ((n * n * n) * (160 - n)) / 100;
    }

    return null;
  },
  fast(n) {
    n = n || this.level + 1;

    if (n >= 100) {
      return null;
    }

    return (4 * n * n * n) / 5;
  },
  mediumFast(n) {
    n = n || this.level + 1;

    if (n >= 100) {
      return null;
    }

    return n * n * n;
  },
  mediumSlow(n) {
    n = n || this.level + 1;

    if (n >= 100) {
      return null;
    }

    return (((6 / 5) * n * n * n) - (15 * n * n)) + ((100 * n) - 140);
  },
  slow(n) {
    n = n || this.level + 1;

    if (n >= 100) {
      return null;
    }

    return (5 * n * n * n) / 4;
  },
  fluctuating(n) {
    n = n || this.level + 1;

    if (n <= 15) {
      return (n * n * n) * ((((n + 1) / 3) + 24) / 50);
    } else if (n <= 36) {
      return (n * n * n) * ((n + 14) / 50);
    } else if (n < 100) {
      return (n * n * n) * (((n / 2) + 32) / 50);
    }

    return null;
  },
};

Pokemon.prototype.earnExperience = function (enemy) {
  var B = enemy.ev.exp; // base experience
  var L = this.level; // winner's level
  var Lp = enemy.level; // enemy's level

  this.experience += (((B * L) / 5) * ((((2 * L) + 10) ** 2.5) / ((L + Lp + 10) ** 2.5))) + 1;
  this.checkLevel();
};

Pokemon.prototype.checkLevel = function () {
  var neededExperience = this.experienceCheck();
  if (neededExperience && this.experience >= neededExperience) {
    this.level++;
  }
};
