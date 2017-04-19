/* global pokemonList, pokemonListOptions, pokemonTypes, pokemonMoves, newGame, fight,
   localStorage, document */
var cont = false;
var slot = 1;
var main = {}; // eslint-disable-line
var game = JSON.parse(localStorage.getItem('pokemon-typing'));
var currentContinue;
var currentEnter = genericEnter;
var textbox = document.getElementById('textbox');

// declare helper functions
String.prototype.pretty = function () {
  var strArr = this.split(' '), arr;
  for (var i = 0; i < strArr.length; i++) { // eslint-disable-line
    arr = strArr[i].split('');
    arr[0] = arr[0].toUpperCase();
    strArr[i] = arr.join('');
  }
  return strArr.join(' ');
};

function randomInt(min, max) { // eslint-disable-line
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
}

if (!game || !game.slots.length) {
  newGame(1);
} else {
  main = game.slots[slot - 1];
  homescreen();
}

function save(choice) {
  var savedState = JSON.parse(localStorage.getItem('pokemon-typing'));
  var saveTime, username;
  if (choice && choice.length > 2) {
    choice = choice.slice(5);
  }
  if (!game || !game.slots || choice) {
    slot = choice || 1;
    game = game || {};
    game.slots = game.slots || [];
    game.slots[choice ? choice - 1 : 0] = Object.assign({}, main);
    game.slots[choice ? choice - 1 : 0].time = new Date();
    localStorage.setItem('pokemon-typing', JSON.stringify(game));
    textbox.innerText = `Your progress has been saved in slot ${choice || 1}!`;
    currentEnter = homescreen;
  } else {
    textbox.innerHTML = `Which slot would you like to save in? (You are in slot ${slot} right now)`;
    for (var i = 0; i <= savedState.slots.length; i++) { // eslint-disable-line vars-on-top
      saveTime = savedState.slots[i] ? new Date(savedState.slots[i].time).toLocaleString() : undefined;
      username = savedState.slots[i] ? savedState.slots[i].user.username : undefined;
      textbox.innerHTML += `<br />Slot ${i === savedState.slots.length ? `${i + 1} (new)` : `${i + 1} - ${username} - ${saveTime}`}`;
    }
    currentEnter = save;
  }
}

function load(choice) {
  var savedState = JSON.parse(localStorage.getItem('pokemon-typing'));
  var saveTime, username;
  if (choice) {
    main = savedState.slots[choice];
    textbox.innerHTML = 'Game loaded!';
    currentEnter = homescreen;
  } else if (savedState) {
    textbox.innerHTML = 'Which slot would you like to load? (You will lose any unsaved progress)';
    for (var i = 0; i < savedState.slots.length; i++) { // eslint-disable-line vars-on-top
      saveTime = new Date(savedState.slots[i].time).toLocaleString();
      username = savedState.slots[i].user.username;
      textbox.innerHTML += `<br />Slot ${i} - ${username} - ${saveTime}`;
    }
    currentEnter = load;
  }
}

function goOn() {
  currentContinue();
}

function keepGoing(func, args) {
  currentEnter = genericEnter;
  func(...args);
}

function genericEnter() {
  return null;
}

function homescreen() {
  document.getElementById('healthbars').classList.toggle('invisible', true);
  document.getElementById('fightWindow').classList.add('hide');
  document.getElementById('standardWindow').classList.remove('hide');
  document.getElementById('avatar').classList.add(main.user.avatar);
  document.getElementById('primary').classList.add(main.primary.name);
  textbox.innerHTML = 'What would you like to do?<br /><br />Fight!<br />Save<br />Load<br />New Game';
  currentEnter = homeChoice;
}

function homeChoice(choice) {
  var savedState = JSON.parse(localStorage.getItem('pokemon-typing'));
  var slots = savedState ? savedState.slots.length : 0;
  choice = choice.toLowerCase();
  switch (choice) {
    case 'fight':
    case 'fight!':
      document.getElementById('standardWindow').classList.add('hide');
      return fight();
    case 'save':
      return save();
    case 'load':
      return load();
    case 'new game':
    case 'new':
      return confirm('Are you sure you want to start a new game? Any unsaved data will be lost.') ? newGame(slots, true) : homescreen();
    default:
      return null;
  }
}

function Pokemon({ pokemon, level, userPokemon }) { // eslint-disable-line
  var moveObj;
  this.level = level || 5;
  this.name = pokemon.name;
  this.index = pokemon.index;
  this.type = pokemon.type;
  this.stats = {
    hp: pokemon.hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    speed: pokemon.speed,
  };
  this.currentStats = {
    hp: pokemon.hp,
    attack: pokemon.attack,
    defense: pokemon.defense,
    speed: pokemon.speed,
    modifier: {
      attack: 0,
      defense: 0,
      speed: 0,
    },
    affliction: null,
  };
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
  console.log(this);
}

document.onkeydown = function onkeydown(e) {
  var userInput = document.getElementById('userInput');

  if (cont) { return goOn(); }

  if ((e.keyCode >= 65 && e.keyCode <= 90) ||
    (e.keyCode >= 97 && e.keyCode <= 122) ||
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    e.keyCode === 32) {
    userInput.innerText += e.key;
  }

  if (e.key === 'Backspace') {
    userInput.innerText = userInput.innerText.slice(0, -1);
  }

  if (e.key === 'Enter') {
    currentEnter(userInput.innerText);
    userInput.innerText = '';
  }
  return null;
};


/* TEST FUNCTIONS */
function testData() { // eslint-disable-line
  var completePokemon = 0;
  var totalPokemon = 0;
  var completeCompleteMoves = 0;
  var completeMoves = 0;
  var totalMoves = 0;
  var missingMovesList = [];
  var missingSpritesList = [];
  var unusedMovesList = [];
  var messageMovesList = [];
  var errorMovesList = [];
  var naturalMoves, movesArray, move, moveList;
  var classes;

  if (document.styleSheets && document.styleSheets[0].rules) {
    document.styleSheets.reduce = Array.prototype.reduce;
    classes = document.styleSheets.reduce(function (array, stylesheet) {
      return [...array, ...stylesheet.rules];
    }, []).map(function (classObj) {
      return classObj.selectorText;
    });
  }

  console.log('POKEMON WITHOUT MOVELISTS');
  console.log('----------------------');
  // check to make sure each pokemon has a defined movelist
  for (var pokemon in pokemonList) { // eslint-disable-line 
    if (!pokemonList[pokemon].moves) {
      console.log(pokemon.pretty());
    }
    if (document.styleSheets && document.styleSheets[0].rules) {
      if (!classes.includes(`.${pokemon}`)) {
        missingSpritesList.push(`${pokemon} - front`);
      }
      if (!classes.includes(`.${pokemon}-back`)) {
        missingSpritesList.push(`${pokemon} - back`);
      }
    }
  }
  for (var pokemon in pokemonMoves.poke) { // eslint-disable-line
    totalPokemon++;
    pokemon = pokemonMoves.poke[pokemon];
    naturalMoves = pokemon.natural;
    movesArray = Object.keys(naturalMoves);
    // check to see if all moves given to pokemon have been defined
    for (var key in naturalMoves) { // eslint-disable-line
      move = naturalMoves[key];
      if (typeof move === 'string') {
        if (!pokemonMoves.move[move] && !missingMovesList.includes(move)) {
          totalMoves++;
          missingMovesList.push(move);
        }
      } else if (typeof move === 'object') {
        moveList = move;
        for (var j = 0; j < moveList.length; j++) { // eslint-disable-line
          move = moveList[j];
          if (!pokemonMoves.move[move] && !missingMovesList.includes(move)) {
            totalMoves++;
            missingMovesList.push(move);
          }
        }
      }
    }
  }
  for (var moveName in pokemonMoves.move) { // eslint-disable-line
    // Find and count all unused moves and moves with messages, and prepare them for logging
    move = pokemonMoves.move[moveName];
    completeMoves++;
    if (move.notUsed) {
      totalMoves++;
      unusedMovesList.push(moveName);
    } else {
      if (move.message) {
        totalMoves++;
        messageMovesList.push(moveName);
      } else {
        totalMoves++;
        completeCompleteMoves++;
      }
      // find all potential errors in the current moves
      if (move.wait && !move.wait.turns) {
        errorMovesList.push(`${moveName} has wait, but no wait turn number`);
      }
      if (move.affliction && move.target === undefined) {
        errorMovesList.push(`${moveName} has an affliction, but no target`);
      }
      if (move.stat && move.target === undefined) {
        errorMovesList.push(`${moveName} has a stat change, but no target`);
      }
      if (move.stat && !move.factor) {
        errorMovesList.push(`${moveName} has a stat change, but no factor`);
      }
    }
  }

  console.log('');
  console.log('POKEMON WITHOUT SPRITES');
  console.log('----------------------');
  missingSpritesList.forEach(function (pokemon) {
    console.log(pokemon);
  });

  console.log('');
  console.log('MOVES WITHOUT DEFINITION');
  console.log('----------------------');
  missingMovesList.forEach(function (move) {
    console.log(move);
  });

  console.log('');
  console.log('UNUSED MOVES');
  console.log('----------------------');
  unusedMovesList.forEach(function (move) {
    console.log(move);
  });

  console.log('');
  console.log('MOVES WITH MESSAGES');
  console.log('----------------------');
  messageMovesList.forEach(function (move) {
    console.log(`${move}: ${pokemonMoves.move[move].message}`);
  });

  console.log('');
  console.log('MOVES WITH ERRORS');
  console.log('----------------------');
  errorMovesList.forEach(function (move) {
    console.error(move);
  });


  console.log('');
  console.log('DATA PERCENTAGES');
  console.log('----------------------');
  console.log(`POKEMON COMPLETION: ${completePokemon}/${totalPokemon}`);
  console.log(`MOVE COMPLETION: ${completeCompleteMoves}/${completeMoves}/${totalMoves}`);
}
