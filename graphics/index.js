// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
document.addEventListener('DOMContentLoaded', () => {
    console.log('start');

    const imageElement = document.querySelector('.pokemon-image img');
    const frenchNameElement = document.getElementById('pokemon-french-name');
    const englishNameElement = document.getElementById('pokemon-english-name');
    const sillyTranslationElement = document.getElementById('pokemon-silly-translation');
    const ethymologyElement = document.getElementById('pokemon-ethymology');

    nodecg.listenFor('displayPokemon', (pokemon) => {
        console.log('displayPokemon', pokemon);

        displayPokemonImage(imageElement, pokemon);
        frenchNameElement.textContent = pokemon.translatedName;
        englishNameElement.textContent = pokemon.englishName;
        sillyTranslationElement.textContent = pokemon.assholeTranslation || '-';
        // todo : display ethymology
    });

    nodecg.sendMessage('sendFirstPokemon');
});

function displayPokemonImage(imageElement, pokemon) {
    imageElement.src = imageElement.dataset.urlScheme.replace(':nationaldex', pokemon.dexNumber);
}