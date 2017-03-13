/* global pokemonList, pokemonListOptions, pokemonTypes, pokemonMoves */
var cont = false;
var slot = 0;
var pokemonTyping = {};
var game;
var currentContinue;
var currentEnter = genericEnter;
var textbox = document.getElementById('textbox');

String.prototype.pretty = function () {
  var strArr = this.split(' ');
  for (var i = 0; i < strArr.length; i++) {
    var arr = strArr[i].split('');
    arr[0] = arr[0].toUpperCase();
    strArr[i] = arr.join('');
  }
  return strArr.join(' ');
}

if (!localStorage.pokemonTyping) {
  newGame(1);
} else {
  pokemonTyping = JSON.parse(localStorage.getItem('pokemonTyping'));
  game = pokemonTyping["gameSlot" + slot];
  homescreen();
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

function pokemon () {

}

function load () {

}

function Pokemon (pokemon, userPokemon) {
  this.type = pokemon.type;
  this.hp = pokemon.hp;
  this.moves = [];
  for (var i = 0; i < pokemon.moves.length; i++) {
    this.moves.push(pokemon.moves[i]);
  }
  if (userPokemon) {
    this.image = pokemon.hero;
    this.experience = 0;
  } else {
    this.image = pokemon.enemy;
  }
}

document.onkeydown = function (e) {
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
