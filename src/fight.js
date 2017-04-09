/* global pokemonListOptions, main, Pokemon, pokemonList, textbox, currentEnter, genericEnter, wordBank, pokemonMoves, pokemonTypes, currentContinue, goOn, homescreen */
function fight () {
  var randomEnemy = pokemonListOptions[Math.floor(Math.random() * pokemonListOptions.length)];
  main.done = false;
  main.enemy = new Pokemon({ pokemon: pokemonList[randomEnemy] });
  document.getElementById('heroName').innerText = main.user.primary.name.pretty();
  document.getElementById('enemyName').innerText = main.enemy.name.pretty();
  document.getElementById('heroHP').style.width = '0';
  document.getElementById('enemyHP').style.width = '0';
  document.getElementById('healthbars').classList.remove('invisible');
  textbox.innerText = 'A random ' + main.enemy.name.pretty() + ' appears!';

  setTimeout(function () {
    textbox.innerHTML = '<center><span id="enemyMessage"></span> <span id="spacer"></span> <span id="moveMessage"></span></center>';
    textbox.innerHTML += '<div id="moves"></div>';
  }, 2000)
  setTimeout(whatMove, 2001);
  setTimeout(enemyAttack, 2002);
  currentEnter = genericEnter;
}

function attack (attacker, defender, move) {
  var modifier;
    // take the move type vs the enemy's type into consideration
    var oneNullto = pokemonTypes[defender.type[0]].nulls.includes(move.type);
    var oneWeakto = pokemonTypes[defender.type[0]].weaknesses.includes(move.type);
    var oneBuffto = pokemonTypes[defender.type[0]].buffers.includes(move.type);
    // if enemy has two types, take the second type into consideration
    if (defender.type[1]) {
      var twoNullto = pokemonTypes[defender.type[1]].nulls.includes(move.type);
      var twoWeakto = pokemonTypes[defender.type[1]].weaknesses.includes(move.type);
      var twoBuffto = pokemonTypes[defender.type[1]].buffers.includes(move.type);
    } else {
      var twoNullto = null, twoWeakto = null, twoBuffto = null;
    }

    // if the move causes effects, cause them
    if (move.effects) {

    }

    // calculate what modifier to use - consider weaknesses and strengths
    if ((oneNullto && !twoWeakto) || (twoNullto && !oneWeakto)) {
      modifier = 0;
    } else if ((oneBuffto && !twoWeakto) || (twoBuffto && !oneWeakto)) {
      modifier = 0.5;
    } else if (oneWeakto || twoWeakto) {
      modifier = 2;
    } else {
      modifier = 1;
    }

    // use modified official damage equation to calculate damage on enemy pokemon.
    if (move.power) {
      // Damage = (((((2 * LEVEL) / 5) + 2) * POWER * (USER_ATTACK / ENEMY_DEFENSE) / 50) + 2) * MODIFER
      var damage = Math.round(((12 * move.power * (attacker.currentStats.attack / attacker.currentStats.defense) / 50) + 2) * modifier);
      defender.currentStats.hp -= damage;
    }
    var hpElement = defender === main.enemy ? 'enemyHP' : 'heroHP';
    if (defender.currentStats.hp > 0) {
      document.getElementById(hpElement).style.width = (100 - ((defender.currentStats.hp / defender.stats.hp) * 100)) + '%';
      if (defender === main.enemy) { whatMove(); }
    } else {
      document.getElementById(hpElement).style.width = '100%';
      main.done = true;
      currentEnter = genericEnter;
      if (defender === main.enemy) {
        heroWin(attacker);
      } else {
        enemyWin(defender);
      }
    }
}

function enemyAttack () {
  var attackSpeed = 7000 - (main.enemy.currentStats.speed * 30) + (main.user.primary.currentStats.speed * 10);
  setTimeout(function () {
    if (main.done) { return }
    clearTimeout(main.enemyTimeout);
    var move = main.enemy.moves[Math.floor(Math.random() * main.enemy.moves.length)];
    document.getElementById('enemyMessage').innerHTML = main.enemy.name.pretty() + ' used ' + move.name.pretty() + '!';
    main.enemyTimeout = setTimeout(function () {
      if (main.done) { return }
      document.getElementById('enemyMessage').innerHTML = '';
    }, 2000);
    attack(main.enemy, main.user.primary, move);
    enemyAttack();
  }, attackSpeed);
}

function enemyWin (hero) {
  textbox.innerHTML = 'You lose!';
  for (var stat in hero.currentStats) {
    hero.currentStats[stat] = hero.stats[stat];
  }
  currentContinue = homescreen;
  currentEnter = goOn;
}

function heroWin (hero) {
  textbox.innerHTML = 'You win!';
  for (var stat in hero.currentStats) {
    hero.currentStats[stat] = hero.stats[stat];
  }
  if (!main.enemy.stage) {
    currentContinue = catchChance;
    currentEnter = goOn;
  } else {
    currentContinue = homescreen;
    currentEnter = goOn;
  }
}

function whatMove () {
  var moves = main.user.primary.moves;
  document.getElementById('moveMessage').innerHTML = 'Use a move!';
  document.getElementById('moves').innerHTML = '';
  for (var i = 0; i < moves.length; i++) {
    document.getElementById('moves').innerHTML += '<br />' + moves[i].name.pretty();
  }
  currentEnter = useMove;
}

function useMove (move) {
  move = move.toLowerCase();
  var moveExists = false;
  main.user.primary.moves.forEach(function (actualMove) {
    if (actualMove.name === move) { moveExists = true; }
  });
  if (moveExists) {
    main.randomWord = wordBank.level1[Math.floor(Math.random() * wordBank.level1.length)];
    main.move = pokemonMoves.move[move];
    document.getElementById('moveMessage').innerHTML = '"' + main.randomWord + '"';
    document.getElementById('spacer').innerHTML = document.getElementById('enemyMessage'.innerHTML) ? '|' : '';
    currentEnter = confirmMove;
  }
}

function confirmMove (word) {
  // if the word was typed correctly
  if (main.randomWord === word) {
    attack(main.user.primary, main.enemy, main.move);
  } else {
    // if the word was typed incorrectly, tell the user
    document.getElementById('moveMessage').innerHTML = main.user.primary.name.pretty() + ' missed!';
    whatMove();    
  }
}

function catchChance () {
  if (Math.random() < 0.25) {
    textbox.innerHTML = 'Would you like to try to catch ' + main.enemy.name.pretty() + '?';
    currentEnter = catchPokemon;
  } else {
    homescreen();
  }
}

function catchPokemon (option) {
  if (option.toLowerCase() === 'yes') {
    if (Math.random() < 0.5) {
      textbox.innerHTML = 'You caught ' + main.enemy.name.pretty() + '!';
    } else {
      textbox.innerHTML = main.enemy.name.pretty() + ' got away . . .';
    }
    currentEnter = homescreen;
  } else {
    homescreen();
  }
}
