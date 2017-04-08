/* global pokemonListOptions, main, Pokemon, pokemonList, textbox, currentEnter, genericEnter, wordBank, pokemonMoves, pokemonTypes, currentContinue, goOn, homescreen */
function fight () {
  var randomEnemy = pokemonListOptions[Math.floor(Math.random() * pokemonListOptions.length)];
  main.enemy = new Pokemon({ pokemon: pokemonList[randomEnemy] });
  document.getElementById('heroName').innerText = main.user.primary.name.pretty();
  document.getElementById('enemyName').innerText = main.enemy.name.pretty();
  document.getElementById('heroHP').style.width = '0';
  document.getElementById('enemyHP').style.width = '0';
  document.getElementById('healthbars').classList.remove('invisible');
  textbox.innerText = 'A random ' + main.enemy.name.pretty() + ' appears!';
  setTimeout(whatMove, 2000);
  currentEnter = genericEnter;
}

function whatMove () {
  var moves = main.user.primary.moves;
  textbox.innerHTML = '<span id="moveMessage">Use a move!</span>';
  for (var i = 0; i < moves.length; i++) {
    textbox.innerHTML += '<br />' + moves[i].name.pretty();
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
    document.getElementById('moveMessage').innerHTML = '<center>"' + main.randomWord + '"</center>';
    currentEnter = confirmMove;
  }
}

function confirmMove (word) {
  // if the word was typed correctly
  if (main.randomWord === word) {
    var move = main.move, modifier;
    // take the move type vs the enemy's type into consideration
    var oneNullto = pokemonTypes[main.enemy.type[0]].nulls.includes(move.type);
    var oneWeakto = pokemonTypes[main.enemy.type[0]].weaknesses.includes(move.type);
    var oneBuffto = pokemonTypes[main.enemy.type[0]].buffers.includes(move.type);
    // if enemy has two types, take the second type into consideration
    if (main.enemy.type[1]) {
      var twoNullto = pokemonTypes[main.enemy.type[1]].nulls.includes(move.type);
      var twoWeakto = pokemonTypes[main.enemy.type[1]].weaknesses.includes(move.type);
      var twoBuffto = pokemonTypes[main.enemy.type[1]].buffers.includes(move.type);
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
    // Damage = (((((2 * LEVEL) / 5) + 2) * POWER * (USER_ATTACK / ENEMY_DEFENSE) / 50) + 2) * MODIFER
    var damage = Math.round(((12 * move.power * (main.user.primary.currentStats.attack / main.enemy.currentStats.defense) / 50) + 2) * modifier);
    main.enemy.currentStats.hp -= damage;
    if (main.enemy.currentStats.hp > 0) {
      document.getElementById('enemyHP').style.width = (100 - ((main.enemy.currentStats.hp / main.enemy.stats.hp) * 100)) + '%';
      whatMove();      
    } else {
      document.getElementById('enemyHP').style.width = '100%';
      currentEnter = genericEnter;
      textbox.innerHTML = 'You win!';
      if (!main.enemy.stage) {
        currentContinue = catchChance;
        currentEnter = goOn;
      } else {
        currentContinue = homescreen;
        currentEnter = goOn;
      }
    }
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
