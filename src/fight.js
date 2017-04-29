/* global document, pokemonListOptions, main, Pokemon, pokemonList, textbox, currentEnter,
   genericEnter, wordBank, pokemonMoves, pokemonTypes, currentContinue, goOn, homescreen,
   randomInt */
function fight() { // eslint-disable-line no-unused-vars
  var randomEnemy = pokemonListOptions[Math.floor(Math.random() * pokemonListOptions.length)];
  var randomBackground = `background-${Math.round(Math.random() * 11)}`;
  main.done = false;
  main.enemy = new Pokemon({ pokemon: pokemonList[randomEnemy] });
  document.getElementById('heroName').innerText = main.primary.name.pretty();
  document.getElementById('enemyName').innerText = main.enemy.name.pretty();
  document.getElementById('hero').className = `${main.primary.name}-back`;
  document.getElementById('enemy').className = main.enemy.name;
  document.getElementById('heroHP').style.width = '0';
  document.getElementById('enemyHP').style.width = '0';
  document.getElementById('healthbars').classList.remove('invisible');
  document.getElementById('messageBox').classList.remove('invisible');

  document.getElementById('fightWindow').classList.remove('hide');
  document.getElementById('fightWindow').classList.add(randomBackground);

  textbox.innerText = `A random ${main.enemy.name.pretty()} appears!`;

  setTimeout(function createFightTemplate() {
    textbox.innerHTML = '<center><span id="moveMessage"></span></center>';
    textbox.innerHTML += '<div id="moves"></div>';
  }, 2000);
  setTimeout(whatMove, 2001);
  setTimeout(enemyAttack, 2002);
  currentEnter = genericEnter;
}

function moveAttack(attacker, defender, move) {
  // the following code is somewhat verbose to allow for easier understanding of the logic

  // declare all variables needed for base damage
  var damage, level, power, attack, defense;
  // declare damage step variables
  var damageStepOne, damageStepTwo, damageStepThree, damageStepFour;
  var damageStepFive, damageStepSix, damageStepSeven, damageStepEight;
  // declare all variables needed for the modifier
  var modifier, random, STAB, type, burn, other;
  // declare all variables needed for type modifier calculation
  var oneNullto, oneWeakto, oneBuffto, twoNullto, twoWeakto, twoBuffto;
  // declare variables for factor calculation
  var dividend = 3;
  var divisor = 3;
  // declare variables for afflictions/effects;
  var affliction, blockAttack, affectedPokemon;
  // declare other needed variables
  var hpElement, neededWait;
  var attackerMessage = attacker === main.primary ? 'heroMessage' : 'enemyMessage';
  var defenderMessage = defender === main.enemy ? 'enemyMessage' : 'heroMessage';

  // AFFLICTION - if the attacker has afflictions, calculate their effects first
  affliction = attacker.currentStats.affliction;
  neededWait = affliction ? 1000 : 0;
  if (affliction === 'burn') {
    attacker.currentStats.hp -= attacker.stats.hp * (1 / 16);
    document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} was hurt by burn!`;
  } else if (affliction === 'poison') {
    attacker.currentStats.hp -= attacker.stats.hp * (1 / 8);
    document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} was hurt by poison!`;
  } else if (affliction === 'freeze') {
    blockAttack = !(Math.random() < 0.2);
    document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} is frozen!`;
  } else if (affliction === 'flinch') {
    blockAttack = true;
    attacker.currentStats.affliction = null;
    document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} flinched!`;
  } else if (affliction === 'paralyze') {
    blockAttack = Math.random() < 0.25;
  } else if (affliction === 'confusion') {
    document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} is confused!`;
    if (Math.random() < 0.33) {
      blockAttack = true;
      setTimeout(function () {
        attacker.currentStats.hp -= ((((2 * level) + 2) * 40 * (attack / defense)) / 50) + 2;
        document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} hurt itself in it's confusion!`;
      }, neededWait);
    }
  }

  if (!blockAttack) {
    // MOVE MESSAGE - alert what move the attacker used
    setTimeout(function () {
      document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} used ${move.name.pretty()}!`;
    }, neededWait);

    // EFFECTS - if the move causes effects, cause them
    if (move.effects) {
      affectedPokemon = move.effects.target ? defender : attacker;

      // handle stat changes
      if (move.effects.stat) {
        move.effects.stat.forEach(function loopStats(stat) {
          neededWait += 1000;
          setTimeout(function () {
            var which = move.effects.target ? defender.name.pretty() : attacker.name.pretty();
            var message = `${which}'s ${stat.which} ${stat.raise ? 'rose' : 'fell'}!`;
            document.getElementById(attackerMessage).innerHTML = message;
          }, neededWait);
          if (!move.effects.chance || move.effects.chance > Math.random()) {
            // calculate the new stat factor (between -6 and 6)
            if (stat.raise) {
              affectedPokemon.currentStats.modifier[stat.which] += move.effects.factor;
              if (affectedPokemon.currentStats.modifier[stat.which] > 6) {
                affectedPokemon.currentStats.modifier[stat.which] = 6;
              }
            } else {
              affectedPokemon.currentStats.modifier[stat.which] -= move.effects.factor;
              if (affectedPokemon.currentStats.modifier[stat.which] < -6) {
                affectedPokemon.currentStats.modifier[stat.which] = -6;
              }
            }

            // update currentStats based on new factor
            if (affectedPokemon.currentStats.modifier[stat.which] > 0) {
              dividend += affectedPokemon.currentStats.modifier[stat.which];
            } else if (affectedPokemon.currentStats.modifier[stat.which] < 0) {
              divisor += -affectedPokemon.currentStats.modifier[stat.which];
            }
            affectedPokemon.currentStats[stat.which] *= dividend / divisor;
          }
        });
      }
    }

    // AFFLICTION - if the move causes afflictions, cause them
    if (move.affliction) {
      neededWait += 1000;
      defender.currentStats.affliction = move.affliction;
      if (move.affliction === 'freeze') {
        setTimeout(function () {
          document.getElementById(defenderMessage).innerHTML = `${defender.name.pretty()} was frozen!`;
        }, neededWait);
      } else if (move.affliction === 'confusion') {
        setTimeout(function () {
          document.getElementById(defenderMessage).innerHTML = `${defender.name.pretty()} was confused!`;
        }, neededWait);
      } else if (!(move.affliction === 'flinch')) {
        setTimeout(function () {
          document.getElementById(defenderMessage).innerHTML = `${defender.name.pretty()} was ${move.affliction}ed!`;
        }, neededWait);
      }
    }

    // DAMAGE - if the move causes damage, cause it
    if (move.power) {
      // TYPE - calculate the type modifier bass off of weakness, buffers, and nulls
      // take the move type vs the enemy's type into consideration
      oneNullto = pokemonTypes[defender.type[0]].nulls.includes(move.type);
      oneWeakto = pokemonTypes[defender.type[0]].weaknesses.includes(move.type);
      oneBuffto = pokemonTypes[defender.type[0]].buffers.includes(move.type);
      // if enemy has two types, take the second type into consideration
      if (defender.type[1]) {
        twoNullto = pokemonTypes[defender.type[1]].nulls.includes(move.type);
        twoWeakto = pokemonTypes[defender.type[1]].weaknesses.includes(move.type);
        twoBuffto = pokemonTypes[defender.type[1]].buffers.includes(move.type);
      }
      // apply the appropriate type modifier per the weaknesses found above
      if ((oneNullto && !twoWeakto) || (twoNullto && !oneWeakto)) {
        type = 0;
      } else if ((oneBuffto && !twoWeakto) || (twoBuffto && !oneWeakto)) {
        type = 0.5;
      } else if (oneWeakto || twoWeakto) {
        type = 2;
      } else {
        type = 1;
      }

      // RANDOM - a random number between 0.85 and 1 (randNum 217<->255 / 255) per the algorithm
      random = Math.round((randomInt(217, 255) / 255) * 100) / 100;

      // STAB - check if type of move is the same as the current pokemon - if so, apply bonus
      STAB = attacker.type.includes(move.type) ? 1.5 : 1;

      // BURN - if the attacker is burned, halve the modifier
      burn = attacker.currentStats.affliction === 'burn' ? 0.5 : 1;

      // OTHER - currently always set to 1
      other = 1;

      // MODIFIER - calculate modifier - based off of the official Pokemon algorithm
      modifier = random * STAB * type * burn * other;

      // LEVEL - attacking Pokemon's level
      level = attacker.level;

      // POWER - attacking Pokemon's move's power
      power = move.power;

      // ATTACK - attacking Pokemon's attack
      attack = attacker.currentStats.attack;

      // DEFENSE - defending Pokemon's defense
      defense = defender.currentStats.defense;

      // calculate damage with modifier - based off of the official Pokemon algorithm:
      // ((((((((2 * level) / 5) + 2) * power * (attack / defense)) / 50) + 2) * modifier
      damageStepOne = 2 * level;
      damageStepTwo = damageStepOne / 5;
      damageStepThree = damageStepTwo + 2;
      damageStepFour = damageStepThree * power;
      damageStepFive = attack / defense;
      damageStepSix = damageStepFour * damageStepFive;
      damageStepSeven = damageStepSix / 50;
      damageStepEight = damageStepSeven + 2;
      damage = Math.round(damageStepEight * modifier);
      defender.currentStats.hp -= damage;

      document.getElementById(attackerMessage).innerHTML = `${attacker.name.pretty()} used ${move.name.pretty()}!`;
    }
  }

  hpElement = defender === main.enemy ? 'enemyHP' : 'heroHP';
  if (defender.currentStats.hp > 0) {
    document.getElementById(hpElement).style.width = `${100 - ((defender.currentStats.hp / defender.stats.hp) * 100)}%`;
    if (defender === main.enemy) { whatMove(); }
  } else {
    document.getElementById(hpElement).style.width = '100%';
    main.done = true;
    currentEnter = genericEnter;
    resetStats(main.primary);
    document.getElementById('messageBox').classList.add('invisible');
    if (defender === main.enemy) {
      heroWin();
    } else {
      enemyWin();
    }
  }

  blockAttack = false;
}

function enemyAttack() {
  var attackSpeed = 7000 - (main.enemy.currentStats.speed * 30);
  attackSpeed += main.primary.currentStats.speed * 10;
  setTimeout(function triggerEnemyAttack() {
    var move = main.enemy.moves[Math.floor(Math.random() * main.enemy.moves.length)];
    if (main.done) { return null; }
    moveAttack(main.enemy, main.primary, move);
    enemyAttack();
  }, attackSpeed);
}

function enemyWin() {
  textbox.innerHTML = 'You lose!';
  currentContinue = homescreen;
  currentEnter = goOn;
}

function heroWin() {
  textbox.innerHTML = 'You win!';
  main.primary.earnExperience(main.enemy);
  if (!main.enemy.stage) {
    currentContinue = catchChance;
    currentEnter = goOn;
  } else {
    currentContinue = homescreen;
    currentEnter = goOn;
  }
}

function resetStats(pokemon) {
  pokemon.currentStats.attack = pokemon.stats.attack;
  pokemon.currentStats.defense = pokemon.stats.defense;
  pokemon.currentStats.speed = pokemon.stats.speed;
  pokemon.currentStats.modifier.attack = 0;
  pokemon.currentStats.modifier.defense = 0;
  pokemon.currentStats.modifier.speed = 0;
  pokemon.currentStats.affliction = null;
}

function whatMove() {
  var moves = main.primary.moves;
  document.getElementById('moveMessage').innerHTML = 'Use a move!';
  document.getElementById('moves').innerHTML = '';
  for (var i = 0; i < moves.length; i++) { // eslint-disable-line
    document.getElementById('moves').innerHTML += `<br /> ${moves[i].name.pretty()}`;
  }
  currentEnter = useMove;
}

function useMove(move) {
  var moveExists = false;
  move = move.toLowerCase();
  main.primary.moves.forEach(function checkMoves(actualMove) {
    if (actualMove.name === move) { moveExists = true; }
  });
  if (moveExists) {
    main.randomWord = wordBank.level1[Math.floor(Math.random() * wordBank.level1.length)];
    main.move = pokemonMoves.move[move];
    document.getElementById('moveMessage').innerHTML = `"${main.randomWord}"`;
    currentEnter = confirmMove;
  }
}

function confirmMove(word) {
  // if the word was typed correctly
  if (main.randomWord === word) {
    moveAttack(main.primary, main.enemy, main.move);
  } else {
    // if the word was typed incorrectly, tell the user
    document.getElementById('moveMessage').innerHTML = `${main.primary.name.pretty()} missed!`;
    whatMove();
  }
}

function catchChance() {
  if (Math.random() < 0.25) {
    textbox.innerHTML = `Would you like to try to catch ${main.enemy.name.pretty()}?`;
    currentEnter = catchPokemon;
  } else {
    homescreen();
  }
}

function catchPokemon(option) {
  if (option.toLowerCase() === 'yes') {
    if (Math.random() < 0.5) {
      textbox.innerHTML = `You caught ${main.enemy.name.pretty()}!`;
    } else {
      textbox.innerHTML = `${main.enemy.name.pretty()} got away . . .`;
    }
    currentEnter = homescreen;
  } else {
    homescreen();
  }
}
