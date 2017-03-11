var cont = false;
var slot = 0;
var pokemonTyping = {};
var game;
var currentContinue;
var currentEnter = genericEnter;
var textbox = document.getElementById('textbox');

if (!localStorage.pokemonTyping) {
  newGame(1);
} else {
  pokemonTyping = JSON.parse(localStorage.getItem('pokemonTyping'));
  game = pokemonTyping["gameSlot" + slot];
  homescreen();
}

function newGame (slot, overwrite) {
  window.slot = slot;
  game = pokemonTyping ? pokemonTyping["gameSlot" + slot] : undefined;
  if (overwrite || !game || !pokemonTyping["gameSlot" + slot].user.gender) {
    game = pokemonTyping["gameSlot" + slot] = {};
    game.user = {};

    textbox.innerHTML = 'Hey there! Welcome to the pokemon typing game! Can you tell me a little about yourself?<br /><br /> Are you a "boy" or a "girl"?';
    currentEnter = setGender;
  } else if (!game.user.username) {
    textbox.innerHTML = 'Alrighty! Well, how about you tell me your name?'
    currentEnter = setUsername;
  } else if (!game.user.team || !game.user.team.length) {
    textbox.innerHTML = 'Well ' + game.user.username + ', it\'s time to get you started with a Pokemon!<br /><br />Why don\'t you tell me which of the starters you would like? (Can be any basic starter from gen 1 through 6).'
    currentEnter = pickStarter;
  } else {
    textbox.innerHTML = 'Congratulations! You\'re ready to get started on your Pokemon journey! If you\'ve never played before, you may want to check out the tutorial - just click on the question mark in the top right corner. Otherwise, just hit enter to start!'
    currentEnter = homescreen;
  }
}

function save () {
  localStorage.setItem("pokemonTyping", JSON.stringify(pokemonTyping));
}

function goOn () {
  cont = false;
}

function keepGoing (func, args) {
  currentEnter = genericEnter;
  func.apply(null, args);
}

function genericEnter () {
  return;
}

function setGender (gender) {
  gender = gender.toLowerCase();
  if (gender !== 'boy' && gender !== 'girl') {
    textbox.innerHTML = 'Woops! We need to know if you\'re a girl or a boy, please.<br /><br /> Are you a "boy" or a "girl"?'
    return;
  }
  pokemonTyping['gameSlot' + slot].user.gender = gender;
  keepGoing(newGame, [slot]);
}

function setUsername (username) {
  if (username.toLowerCase() === 'yes') {
    return keepGoing(newGame, [slot]);
  } else if (username.toLowerCase() === 'no') {
    game.user.username = undefined;
    return keepGoing(newGame, [slot]);
  }
  textbox.innerHTML = 'Oh, you\'re name is ' + username + '?<br /><br />"Yes" or "No".';
  game.user.username = username;
}

function pickStarter (pokemon) {
  if (pokemon.toLowerCase() === 'yes') {
    return keepGoing(newGame, [slot]);
  } else if (pokemon.toLowerCase() === 'no') {
    game.user.team = [];
    return keepGoing(newGame, [slot]);
  }
  if (pokemonList[pokemon]) {
    textbox.innerHTML = 'So you\'d like to start with the ' + pokemonList[pokemon].type + ' type pokemon, ' + pokemonList[pokemon].prettyName + '?';
    game.user.team = [pokemonList[pokemon]];
    game.user.primary = game.user.team[0];
  }
}

function homescreen () {
  textbox.innerHTML = 'What would you like to do?<br /><br />Fight!<br />Check Pokemon<br />Save<br />Load';
  currentEnter = homeChoice;
}

function homeChoice (choice) {
  choice = choice.toLowerCase();
  switch (choice) {
    case 'fight':
    case 'fight!':
      return fight();
    case 'check pokemon':
    case 'pokemon':
      return pokemon();
    case 'save':
      return save();
    case 'load':
      return load();
  }
}

function fight () {
  var randomEnemy = pokemonListOptions[Math.floor(Math.random() * pokemonListOptions.length)];
  textbox.innerText = 'A random ' + randomEnemy + ' appears!';
  setTimeout(function() {
    var moves = game.user.primary.moves;
    textbox.innerText = 'Use a move!';
    for (var i = 0; i < moves.length; i++) {
      textbox.innerHTML += '<br />' + moves[i];
    }
  }, 2000)
  currentEnter = useMove;
}

function useMove (move) {
  if (game.user.primary.moves.includes(useMove)) {
    
  }
}

function pokemon () {

}

function load () {

}

document.onkeyup = function (e) {
  if (cont) { return goOn(); }

  var userInput = document.getElementById('userInput');

  if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 97 && e.keyCode <= 122) || e.keyCode === 32) {
    userInput.innerText += e.key;
  }

  if (e.key === "Backspace") {
    userInput.innerText = userInput.innerText.slice(0, -1);
  }

  if (e.key === "Enter") {
    currentEnter(userInput.innerText);
    userInput.innerText = '';
  }
}
