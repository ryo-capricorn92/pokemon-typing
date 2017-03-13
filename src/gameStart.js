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
    textbox.innerHTML = 'So you\'d like to start with the ' + pokemonList[pokemon].type + ' type pokemon, ' + pokemonList[pokemon].name.pretty() + '?';
    game.user.team = [pokemonList[pokemon]];
    game.user.primary = game.user.team[0];
  }
}
