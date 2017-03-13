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

function Pokemon (pokemon, level, userPokemon) {
  level = level > 40 ? level : 40;
  var attackExists = false, goodMove, currentMoveStr, currentMove;
  var chosenMoves = [];
  this.name = pokemon.name;
  this.type = pokemon.type;
  this.hp = pokemon.hp;
  this.attack = pokemon.attack;
  this.defense = pokemon.defense;
  this.speed = pokemon.speed;
  this.moves = [];
  for (var i = 0; i < 2; i++) {
    if (createMove(pokemon, chosenMoves, this.moves, level)) {
      attackExists = true;
    }

    // make sure at least one move is an attack.
    if (attackExists) {
      createMove(pokemon, chosenMoves, this.moves, level)
    } else {
      createMove(pokemon, chosenMoves, this.moves, level, true);
    }
  }
}

function createMove (pokemon, chosenMoves, pokemonMoveList, level, needAttack) {
  var goodMove = false, currentMoveStr, currentMove;
  while (!goodMove) {
    currentMoveStr = pokemon.moves[Math.floor(Math.random() * pokemon.moves.length)];
    console.log(currentMoveStr);
    currentMove = pokemonMoves.move[currentMoveStr];
    console.log(currentMove);
    // if the move's power is below the level limit
    // and the move hasn't already been chosen
    // and this move is not an attack when we need an attack
    if (currentMove.power <= level &&
      !chosenMoves.includes(currentMoveStr) &&
      !(needAttack && !currentMove.power)) {
        goodMove = true;
      }
    if (needAttack && !currentMove.power) {}
  }
  chosenMoves.push(currentMoveStr);
  pokemonMoveList.push(currentMove);
  if (currentMove.power) { return true; }
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
