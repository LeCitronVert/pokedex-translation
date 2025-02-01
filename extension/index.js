const Kanto = require('./assets/Kanto');

module.exports = function (nodecg) {
	// todo : allow to choose which dex to use in the future
	let dex = new Kanto();
	let pokemons = dex.pokemons;
	let currentIndex = 0;

	nodecg.listenFor('changePokemon', (newIndex) => {
		currentIndex = newIndex;
		nodecg.sendMessage('displayPokemon', pokemons[(currentIndex - 1)]);
	});


	nodecg.listenFor('sendFirstPokemon', () => {
		nodecg.sendMessage('displayPokemon', pokemons[0]);
	});
};
