module.exports = class Pokemon {
    constructor (dexNumber, englishName, translatedName, translationType, ethymology = [], assholeTranslation = null) {
        this.dexNumber = dexNumber;
        this.englishName = englishName;
        this.translatedName = translatedName;
        this.translationType = translationType;
        this.ethymology = ethymology;
        this.assholeTranslation = assholeTranslation;
    }

    static get TRANSLATION_TYPE_BORING() {
        return 0;
    }

    static get TRANSLATION_TYPE_ALMOST_BORING() {
        return 1;
    }

    static get TRANSLATION_TYPE_NORMAL() {
        return 2;
    }
}