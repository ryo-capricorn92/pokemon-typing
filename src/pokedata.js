var pokemonList = {
  charmander: {
    prettyName: 'Charmander',
    type: "fire",
    hero: '',
    foe: '',
    moves: [
      "ember",
      "tackle",
      "tail whip"
    ]
  },
  bulbasaur: {
    prettyName: 'Bulbasaur',
    type: "grass",
    hero: '',
    foe: '',
    moves: [
      "ember",
      "tackle",
      "tail whip"
    ]
  }
}

var pokemonListOptions = [];

for (var key in pokemonList) {
  pokemonListOptions.push(key);
}
