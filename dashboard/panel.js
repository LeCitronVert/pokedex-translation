// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
document.addEventListener('DOMContentLoaded', () => {
    const dexNumberInput = document.getElementById('dex-number');
    
    dexNumberInput.addEventListener('change', (event) => {
            const dexNumber = event.target.value;
            nodecg.sendMessage('changePokemon', dexNumber);
        })
    ;

    document
        .querySelectorAll('button')
        .forEach((button) => {
            button.addEventListener('click', (event) => {
                let currentValue = parseInt(dexNumberInput.value);
                let newValue = currentValue + parseInt(event.target.dataset.number);

                if (newValue < 1) {
                    newValue = 1;
                }

                dexNumberInput.value = newValue;
                nodecg.sendMessage('changePokemon', newValue);
            });
        })

});