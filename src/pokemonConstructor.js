function Pokemon({ pokemon, level, userPokemon }) { // eslint-disable-line
  var moveObj;
  this.level = level || 5;
  this.experience = 0;
  this.experienceCheck = this.experienceMethods[pokemon.experienceGroup];
  this.name = pokemon.name;
  this.index = pokemon.index;
  this.type = pokemon.type;
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

  this.moves = [];
  // find moves for this pokemon that are within their level for their moveset
  for (var move in pokemon.moves.natural) { // eslint-disable-line
    moveObj = pokemonMoves.move[pokemon.moves.natural[move]];
    if (+move.slice(4) <= this.level) {
      if (typeof pokemon.moves.natural[move] === 'object') {
        for (var i = 0; i < pokemon.moves.natural[move].length; i++) { // eslint-disable-line
          moveObj = pokemonMoves.move[pokemon.moves.natural[move][i]];
          if (!moveObj.notUsed) {
            if (this.moves.length >= 3) {
              this.moves[Math.floor(Math.random() * 4)] = moveObj;
            } else {
              this.moves.push(moveObj);
            }
          }
        }
      } else if (!moveObj.notUsed) {
        if (this.moves.length >= 3) {
          this.moves[Math.floor(Math.random() * 4)] = moveObj;
        } else {
          this.moves.push(moveObj);
        }
      }
    }
  }
}

Pokemon.prototype.experienceMethods = {
  erratic() {
    var n = this.level + 1;
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
  fast() {
    var n = this.level + 1;

    if (n >= 100) {
      return null;
    }

    return (4 * n * n * n) / 5;
  },
  mediumFast() {
    var n = this.level + 1;

    if (n >= 100) {
      return null;
    }

    return n * n * n;
  },
  mediumSlow() {
    var n = this.level + 1;

    if (n >= 100) {
      return null;
    }

    return (((6 / 5) * n * n * n) - (15 * n * n)) + ((100 * n) - 140);
  },
  slow() {
    var n = this.level + 1;

    if (n >= 100) {
      return null;
    }

    return (5 * n * n * n) / 4;
  },
  fluctuating() {
    var n = this.level + 1;

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
