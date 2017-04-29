/* global window, document, main, textbox, currentEnter, homescreen, keepGoing, slot, pokemonList,
   pokemonStarters, Pokemon */
function newGame(slot, overwrite) {
  window.slot = slot;
  if (overwrite || !Object.keys(main).length || !main.user.gender) {
    main = {};
    main.user = {};
    document.getElementById('avatar').className = '';
    document.getElementById('primary').className = '';

    textbox.innerHTML = 'Hey there! Welcome to the pokemon typing game! Can you tell me a little about yourself?<br /><br /> Are you a "boy" or a "girl"?';
    currentEnter = setGender;
  } else if (!main.user.username) {
    textbox.innerHTML = 'Alrighty! Well, how about you tell me your name?';
    currentEnter = setUsername;
  } else if (!main.team || !main.team.length) {
    textbox.innerHTML = `Well ${main.user.username}, it's time to get you started with a Pokemon!<br /><br />Why don't you tell me which of the starters you would like? (Can be any basic starter from gen 1 through 6).`;
    currentEnter = pickStarter;
  } else {
    textbox.innerHTML = 'Congratulations! You\'re ready to get started on your Pokemon journey! If you\'ve never played before, you may want to check out the tutorial - just click on the question mark in the top right corner. Otherwise, just hit enter to start!';
    currentEnter = homescreen;
  }
}

function setGender(gender) {
  gender = gender.toLowerCase();
  if (gender !== 'boy' && gender !== 'girl') {
    textbox.innerHTML = 'Woops! We need to know if you\'re a girl or a boy, please.<br /><br /> Are you a "boy" or a "girl"?';
    return;
  }
  main.user.gender = gender;
  main.user.avatar = `${gender}-${Math.round(Math.random() * 100)}`;
  document.getElementById('avatar').classList.add(main.user.avatar);
  keepGoing(newGame, [slot]);
}

function setUsername(username) {
  if (username.toLowerCase() === 'yes') {
    return keepGoing(newGame, [slot]);
  } else if (!username || username.toLowerCase() === 'no') {
    main.user.username = undefined;
    return keepGoing(newGame, [slot]);
  }
  textbox.innerHTML = `Oh, you're name is ${username}?<br /><br />"Yes" or "No".`;
  main.user.username = username;
  return undefined;
}

function pickStarter(pokemon) {
  var types;
  pokemon = pokemon.toLowerCase();
  if (pokemon === 'yes') {
    return keepGoing(newGame, [slot]);
  } else if (pokemon === 'no') {
    main.team = [];
    return keepGoing(newGame, [slot]);
  }
  if (pokemonStarters.includes(pokemon)) {
    pokemon = pokemonList[pokemon];
    types = pokemon.type[1] ?
      `${pokemon.type[0]}/${pokemon.type[1]}` :
      pokemon.type[0];
    textbox.innerHTML = `So you'd like to start with the ${types} type pokemon, ${pokemon.name.pretty()}?`;
    document.getElementById('primary').className = pokemon.name;
    main.team = [new Pokemon({ pokemon, userPokemon: true })];
    main.primary = main.team[0];
  } else {
    textbox.innerHTML = 'Sorry, it\'s gotta be one of the basic starters from any game gens 1 through 6. Who would you like?';
  }
  return undefined;
}
