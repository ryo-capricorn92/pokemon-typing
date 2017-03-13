function fight () {
  var randomEnemy = pokemonListOptions[Math.floor(Math.random() * pokemonListOptions.length)];
  textbox.innerText = 'A random ' + randomEnemy + ' appears!';
  setTimeout(whatMove, 2000);
  currentEnter = useMove;
}

function whatMove () {
  var moves = game.user.primary.moves;
  textbox.innerHTML = '<span id="moveMessage">Use a move!</span>';
  for (var i = 0; i < moves.length; i++) {
    textbox.innerHTML += '<br />' + moves[i].pretty();
  }
}

function useMove (move, enemy) {
  pokemonTyping.randomWord = wordBank.level1[Math.floor(Math.random() * wordBank.length)];
  if (game.user.primary.moves.includes(move)) {
    pokemonTyping.move = pokemonMoves[move];
    document.getElementById('moveMessage').innerHTML = '<center>"' + pokemonTyping.randomWord + '"</center>';
    currentEnter = confirmMove;
  }
}

function confirmMove (word) {
  if (pokemonTyping.randomWord === word) {
    var buffer;
    if (pokemonTypes[pokemonTyping.enemy.type].nulls.includes(pokemonTyping.move)) {
      buffer = 0;
    } else if (pokemonTypes[pokemonTyping.enemy.type].weaknesses.includes(pokemonTyping.move)) {
      buffer = 2;
    } else if (pokemonTypes[pokemonTyping.enemy.type].buffers.includes(pokemonTyping.move)) {
      buffer = 0.5;
    } else {
      buffer = 1;
    }
    pokemonTyping.enemy.hp -= pokemonTyping.move.power * buffer;
  } else {
    null;
  }
  whatMove();
}
