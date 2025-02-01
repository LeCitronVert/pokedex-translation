const Pokemon = require("./Pokemon");

module.exports = class Kanto {
    pokemons = [
        new Pokemon(
            1, 
            "Bulbasaur", 
            "Bulbizarre", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "bulbe", meaning: "bulb" },
                { word: "bizarre", meaning: "weird" }
            ],
            "weird bulb"
        ),
        new Pokemon(
            2, 
            "Ivysaur", 
            "Herbizarre", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "herbe", meaning: "herb" },
                { word: "bizarre", meaning: "weird" }
            ],
            "weird herb"
        ),
        new Pokemon(
            3, 
            "Venusaur", 
            "Florizarre", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "flore", meaning: "flora" },
                { word: "bizarre", meaning: "weird" }
            ],
            "weird flora"
        ),
        new Pokemon(
            4, 
            "Charmander", 
            "Salamèche", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "salamandre", meaning: "salamander" },
                { word: "mèche", meaning: "wick" }
            ],
            null
        ),
        new Pokemon(
            5, 
            "Charmeleon", 
            "Reptincel", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "réptile", meaning: "reptile" },
                { word: "étincelle", meaning: "spark" }
            ],
            null
        ),
        new Pokemon(
            6, 
            "Charizard", 
            "Dracaufeu", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "draco", meaning: "dragon" },
                { word: "au feu", meaning: "fire" }
            ],
            "dragon fire"
        ),
        new Pokemon(
            7, 
            "Squirtle", 
            "Carapuce", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "carapace", meaning: "shell" },
                { word: "puce", meaning: "flea" }
            ],
            "shell flea"
        ),
        new Pokemon(
            8, 
            "Wartortle", 
            "Carabaffe", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "carapace", meaning: "shell" },
                { word: "baffe", meaning: "slap" }
            ],
            "shell slap"
        ),
        new Pokemon(
            9, 
            "Blastoise", 
            "Tortank", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "tortue", meaning: "turtle" },
                { word: "tank", meaning: "tank" }
            ],
            "tank turtle"
        ),
        new Pokemon(
            10, 
            "Caterpie", 
            "Chenipan", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "chenille", meaning: "caterpillar" },
                { word: "chenapan", meaning: "little rascal" }
            ],
            "little cacterpillar rascal"
        ),
        new Pokemon(
            11, 
            "Metapod", 
            "Chrysacier", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "chrysalide", meaning: "chrysalis" },
                { word: "acier", meaning: "steel" }
            ],
            null
        ),
        new Pokemon(
            12, 
            "Butterfree", 
            "Papilusion", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "papillon", meaning: "butterfly" },
                { word: "illusion", meaning: "illusion" }
            ],
            null
        ),
        new Pokemon(
            13, 
            "Weedle", 
            "Aspicot", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "asticot", meaning: "maggot" },
                { word: "picot", meaning: "pin" }
            ],
            null
        ),
        new Pokemon(
            14, 
            "Kakuna", 
            "Conconfort", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "concon", meaning: "cocoon" },
                { word: "confort", meaning: "comfort" },
                { word: "fort", meaning: "strong" }
            ],
            null
        ),
        new Pokemon(
            15, 
            "Beedrill", 
            "Dardargnan", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "d'Artagnan", meaning: "d'Artagnan" },
                { word: "dard", meaning: "sting" },
                { word: "dare-dare", meaning: "quick" }
            ],
            null
        ),
        new Pokemon(
            16, 
            "Pidgey", 
            "Roucool", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "roucouler", meaning: "to coo" },
                { word: "roux", meaning: "redhead" }
            ],
            "cool redhead"
        ),
        new Pokemon(
            17, 
            "Pidgeotto", 
            "Roucoups", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "roucouler", meaning: "to coo" },
                { word: "coups", meaning: "strikes" }
            ],
            null
        ),
        new Pokemon(
            18, 
            "Pidgeot", 
            "Roucarnage", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "roucouler", meaning: "to coo" },
                { word: "carnage", meaning: "carnage" }
            ],
            "redhead carnage"
        ),
        new Pokemon(
            19, 
            "Rattata", 
            "Rattata", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            20, 
            "Raticate", 
            "Rattatac", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "rat", meaning: "rat" },
                { word: "attaque", meaning: "attack" }
            ],
            null
        ),
        new Pokemon(
            21, 
            "Spearow", 
            "Piafabec", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "piaf", meaning: "bird" },
                { word: "bec", meaning: "beak" }
            ],
            "birdbeak"
        ),
        new Pokemon(
            22, 
            "Fearow", 
            "Rapasdepic", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "rapace", meaning: "bird of prey" },
                { word: "as de pique", meaning: "ace of spades" }
            ],
            null
        ),
        new Pokemon(
            23, 
            "Ekans", 
            "Abo", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "boa", meaning: "boa" }
            ],
            null
        ),
        new Pokemon(
            24, 
            "Arbok", 
            "Arbok", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            25, 
            "Pikachu", 
            "Pikachu", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            26, 
            "Raichu", 
            "Raichu", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            27, 
            "Sandshrew", 
            "Sabelette", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "sable", meaning: "sand" },
                { word: "belette", meaning: "weasel" }
            ],
            null
        ),
        new Pokemon(
            28, 
            "Sandslash", 
            "Sablaireau", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "sable", meaning: "sand" },
                { word: "blaireau", meaning: "badger" }
            ],
            null
        ),
        new Pokemon(
            29, 
            "Nidoran♀", 
            "Nidoran♀", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            30, 
            "Nidorina", 
            "Nidorina", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            31, 
            "Nidoqueen", 
            "Nidoqueen", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            32, 
            "Nidoran♂", 
            "Nidoran♂", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            33, 
            "Nidorino", 
            "Nidorino", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            34, 
            "Nidoking", 
            "Nidoking", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            35, 
            "Clefairy", 
            "Mélofée", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "mélodie", meaning: "melody" },
                { word: "fée", meaning: "fairy" }
            ],
            null
        ),
        new Pokemon(
            36, 
            "Clefable", 
            "Mélodelfe", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "mélodie", meaning: "melody" },
                { word: "elfe", meaning: "elf" }
            ],
            null
        ),
        new Pokemon(
            37, 
            "Vulpix", 
            "Goupix", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "goupil", meaning: "fox" },
                { word: "six", meaning: "six" }
            ],
            null
        ),
        new Pokemon(
            38, 
            "Ninetales", 
            "Feunard", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "feu", meaning: "fire" },
                { word: "renard", meaning: "fox" }
            ],
            null
        ),
        new Pokemon(
            39, 
            "Jigglypuff", 
            "Rondoudou", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "rond", meaning: "round" },
                { word: "doux", meaning: "soft" }
            ],
            null
        ),
        new Pokemon(
            40, 
            "Wigglytuff", 
            "Grodoudou", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "gros", meaning: "big" },
                { word: "doux", meaning: "soft" }
            ],
            null
        ),
        new Pokemon(
            41, 
            "Zubat", 
            "Nosferapti", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "Nosferatu", meaning: "Nosferatu" },
                { word: "rapti", meaning: "bat" }
            ],
            null
        ),
        new Pokemon(
            42, 
            "Golbat", 
            "Nosferalto", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "Nosferatu", meaning: "Nosferatu" },
                { word: "alto", meaning: "high" }
            ],
            null
        ),
        new Pokemon(
            43, 
            "Oddish", 
            "Mystherbe", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "mystère", meaning: "mystery" },
                { word: "herbe", meaning: "herb" }
            ],
            null
        ),
        new Pokemon(
            44, 
            "Gloom", 
            "Ortide", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "ortie", meaning: "nettle" },
                { word: "ide", meaning: "suffix indicating a plant" }
            ],
            null
        ),
        new Pokemon(
            45, 
            "Vileplume", 
            "Rafflesia", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "Rafflesia", meaning: "Rafflesia" }
            ],
            null
        ),
        new Pokemon(
            46, 
            "Paras", 
            "Paras", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            47, 
            "Parasect", 
            "Parasect", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            48, 
            "Venonat", 
            "Mimitoss", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "mimi", meaning: "cute" },
                { word: "toss", meaning: "suffix indicating a small creature" }
            ],
            null
        ),
        new Pokemon(
            49, 
            "Venomoth", 
            "Aéromite", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "aéro", meaning: "air" },
                { word: "mite", meaning: "moth" }
            ],
            null
        ),
        new Pokemon(
            50, 
            "Diglett", 
            "Taupiqueur", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "taupe", meaning: "mole" },
                { word: "piqueur", meaning: "digger" }
            ],
            null
        ),
        new Pokemon(
            51, 
            "Dugtrio", 
            "Triopikeur", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "trio", meaning: "trio" },
                { word: "piqueur", meaning: "digger" }
            ],
            null
        ),
        new Pokemon(
            52, 
            "Meowth", 
            "Miaouss", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "miaou", meaning: "meow" }
            ],
            null
        ),
        new Pokemon(
            53, 
            "Persian", 
            "Persian", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            54, 
            "Psyduck", 
            "Psykokwak", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "psycho", meaning: "psycho" },
                { word: "kwak", meaning: "quack" }
            ],
            null
        ),
        new Pokemon(
            55, 
            "Golduck", 
            "Akwakwak", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "akwa", meaning: "aqua" },
                { word: "kwak", meaning: "quack" }
            ],
            null
        ),
        new Pokemon(
            56, 
            "Mankey", 
            "Férosinge", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "féroce", meaning: "ferocious" },
                { word: "singe", meaning: "monkey" }
            ],
            null
        ),
        new Pokemon(
            57, 
            "Primeape", 
            "Colossinge", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "colosse", meaning: "colossus" },
                { word: "singe", meaning: "monkey" }
            ],
            null
        ),
        new Pokemon(
            58, 
            "Growlithe", 
            "Caninos", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "canin", meaning: "canine" },
                { word: "os", meaning: "bone" }
            ],
            null
        ),
        new Pokemon(
            59, 
            "Arcanine", 
            "Arcanin", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "arcane", meaning: "arcane" },
                { word: "canin", meaning: "canine" }
            ],
            null
        ),
        new Pokemon(
            60, 
            "Poliwag", 
            "Ptitard", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "petit", meaning: "small" },
                { word: "têtard", meaning: "tadpole" }
            ],
            null
        ),
        new Pokemon(
            61, 
            "Poliwhirl", 
            "Têtarte", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "têtard", meaning: "tadpole" },
                { word: "arte", meaning: "suffix indicating a creature" }
            ],
            null
        ),
        new Pokemon(
            62, 
            "Poliwrath", 
            "Tartard", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "tartare", meaning: "tartar" },
                { word: "têtard", meaning: "tadpole" }
            ],
            null
        ),
        new Pokemon(
            63, 
            "Abra", 
            "Abra", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            64, 
            "Kadabra", 
            "Kadabra", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            65, 
            "Alakazam", 
            "Alakazam", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            66, 
            "Machop", 
            "Machoc", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "macho", meaning: "macho" },
                { word: "choc", meaning: "shock" }
            ],
            null
        ),
        new Pokemon(
            67, 
            "Machoke", 
            "Machopeur", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "macho", meaning: "macho" },
                { word: "peur", meaning: "fear" }
            ],
            null
        ),
        new Pokemon(
            68, 
            "Machamp", 
            "Mackogneur", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "macho", meaning: "macho" },
                { word: "cogneur", meaning: "hitter" }
            ],
            null
        ),
        new Pokemon(
            69, 
            "Bellsprout", 
            "Chétiflor", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "chétif", meaning: "puny" },
                { word: "flor", meaning: "flower" }
            ],
            null
        ),
        new Pokemon(
            70, 
            "Weepinbell", 
            "Boustiflor", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "boustifaille", meaning: "feast" },
                { word: "flor", meaning: "flower" }
            ],
            null
        ),
        new Pokemon(
            71, 
            "Victreebel", 
            "Empiflor", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "s'empiffrer", meaning: "to stuff oneself" },
                { word: "flor", meaning: "flower" }
            ],
            null
        ),
        new Pokemon(
            72, 
            "Tentacool", 
            "Tentacool", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            73, 
            "Tentacruel", 
            "Tentacruel", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            74, 
            "Geodude", 
            "Racaillou", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "racaille", meaning: "scum" },
                { word: "caillou", meaning: "pebble" }
            ],
            null
        ),
        new Pokemon(
            75, 
            "Graveler", 
            "Gravalanch", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "gravier", meaning: "gravel" },
                { word: "avalanche", meaning: "avalanche" }
            ],
            null
        ),
        new Pokemon(
            76, 
            "Golem", 
            "Grolem", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "gros", meaning: "big" },
                { word: "golem", meaning: "golem" }
            ],
            null
        ),
        new Pokemon(
            77, 
            "Ponyta", 
            "Ponyta", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            78, 
            "Rapidash", 
            "Galopa", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "galop", meaning: "gallop" }
            ],
            null
        ),
        new Pokemon(
            79, 
            "Slowpoke", 
            "Ramoloss", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "ramolli", meaning: "softened" },
                { word: "mollasson", meaning: "sluggish" }
            ],
            null
        ),
        new Pokemon(
            80, 
            "Slowbro", 
            "Flagadoss", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "flâner", meaning: "to stroll" },
                { word: "doss", meaning: "back" }
            ],
            null
        ),
        new Pokemon(
            81, 
            "Magnemite", 
            "Magnéti", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "magnétique", meaning: "magnetic" }
            ],
            null
        ),
        new Pokemon(
            82, 
            "Magneton", 
            "Magnéton", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [],
            null
        ),
        new Pokemon(
            83, 
            "Farfetch'd", 
            "Canarticho", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "canard", meaning: "duck" },
                { word: "artichaut", meaning: "artichoke" }
            ],
            null
        ),
        new Pokemon(
            84, 
            "Doduo", 
            "Doduo", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            85, 
            "Dodrio", 
            "Dodrio", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            86, 
            "Seel", 
            "Otaria", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "otarie", meaning: "sea lion" }
            ],
            null
        ),
        new Pokemon(
            87, 
            "Dewgong", 
            "Lamantine", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "lamantin", meaning: "manatee" }
            ],
            null
        ),
        new Pokemon(
            88, 
            "Grimer", 
            "Tadmorv", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "tad", meaning: "tad" },
                { word: "morve", meaning: "snot" }
            ],
            null
        ),
        new Pokemon(
            89, 
            "Muk", 
            "Grotadmorv", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "gros", meaning: "big" },
                { word: "tad", meaning: "tad" },
                { word: "morve", meaning: "snot" }
            ],
            null
        ),
        new Pokemon(
            90, 
            "Shellder", 
            "Kokiyas", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "coquillage", meaning: "shell" },
            ],
            null
        ),
        new Pokemon(
            91, 
            "Cloyster", 
            "Crustabri", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "crustacé", meaning: "crustacean" },
                { word: "abri", meaning: "shelter" }
            ],
            null
        ),
        new Pokemon(
            92, 
            "Gastly", 
            "Fantominus", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "fantôme", meaning: "ghost" },
                { word: "minus", meaning: "small" }
            ],
            null
        ),
        new Pokemon(
            93, 
            "Haunter", 
            "Spectrum", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "spectre", meaning: "specter" }
            ],
            null
        ),
        new Pokemon(
            94, 
            "Gengar", 
            "Ectoplasma", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "ectoplasme", meaning: "ectoplasm" }
            ],
            null
        ),
        new Pokemon(
            95, 
            "Onix", 
            "Onix", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            96, 
            "Drowzee", 
            "Soporifik", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "soporifique", meaning: "soporific" }
            ],
            null
        ),
        new Pokemon(
            97, 
            "Hypno", 
            "Hypnomade", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "hypnose", meaning: "hypnosis" },
                { word: "nomade", meaning: "nomad" }
            ],
            null
        ),
        new Pokemon(
            98, 
            "Krabby", 
            "Krabby", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            99, 
            "Kingler", 
            "Krabboss", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "krab", meaning: "crab" },
                { word: "boss", meaning: "boss" }
            ],
            null
        ),
        new Pokemon(
            100, 
            "Voltorb", 
            "Voltorbe", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "voltage", meaning: "voltage" },
                { word: "orbe", meaning: "orb" }
            ],
            null
        ),
        new Pokemon(
            101, 
            "Electrode", 
            "Électrode", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "électrode", meaning: "electrode" }
            ],
            null
        ),
        new Pokemon(
            102, 
            "Exeggcute", 
            "Noeunoeuf", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "noeud", meaning: "knot" },
                { word: "oeuf", meaning: "egg" }
            ],
            null
        ),
        new Pokemon(
            103, 
            "Exeggutor", 
            "Noadkoko", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "noeud", meaning: "knot" },
                { word: "coco", meaning: "coconut" }
            ],
            null
        ),
        new Pokemon(
            104, 
            "Cubone", 
            "Osselait", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "os", meaning: "bone" },
                { word: "squelette", meaning: "skeleton" }
            ],
            null
        ),
        new Pokemon(
            105, 
            "Marowak", 
            "Ossatueur", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "os", meaning: "bone" },
                { word: "tueur", meaning: "killer" }
            ],
            null
        ),
        new Pokemon(
            106, 
            "Hitmonlee", 
            "Kicklee", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "kick", meaning: "kick" },
                { word: "lee", meaning: "Lee" }
            ],
            null
        ),
        new Pokemon(
            107, 
            "Hitmonchan", 
            "Tygnon", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "tyson", meaning: "Tyson" },
                { word: "gnon", meaning: "Bruise ?? ig" }
            ],
            null
        ),
        new Pokemon(
            108, 
            "Lickitung", 
            "Excelangue", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "excellent", meaning: "excellent" },
                { word: "langue", meaning: "tongue" }
            ],
            "excellent tongue"
        ),
        new Pokemon(
            109, 
            "Koffing", 
            "Smogo", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "smog", meaning: "smog" }
            ],
            null
        ),
        new Pokemon(
            110, 
            "Weezing", 
            "Smogogo", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "smog", meaning: "smog" },
                { word: "go", meaning: "go" }
            ],
            null
        ),
        new Pokemon(
            111, 
            "Rhyhorn", 
            "Rhinocorne", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "rhinocéros", meaning: "rhinoceros" },
                { word: "corne", meaning: "horn" }
            ],
            null
        ),
        new Pokemon(
            112, 
            "Rhydon", 
            "Rhinoféros", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "rhinocéros", meaning: "rhinoceros" },
                { word: "féroce", meaning: "ferocious" }
            ],
            null
        ),
        new Pokemon(
            113, 
            "Chansey", 
            "Leveinard", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "le veinard", meaning: "the lucky one" }
            ],
            null
        ),
        new Pokemon(
            114, 
            "Tangela", 
            "Saquedeneu", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "sac de noeuds", meaning: "bag of knots" }
            ],
            null
        ),
        new Pokemon(
            115, 
            "Kangaskhan", 
            "Kangourex", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "kangourou", meaning: "kangaroo" },
                { word: "rex", meaning: "t-rex idk" }
            ],
            null
        ),
        new Pokemon(
            116, 
            "Horsea", 
            "Hypotrempe", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "hypocampe", meaning: "seahorse" },
                { word: "trempe", meaning: "soak" }
            ],
            null
        ),
        new Pokemon(
            117, 
            "Seadra", 
            "Hypocéan", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "hypocampe", meaning: "seahorse" },
                { word: "océan", meaning: "ocean" }
            ],
            null
        ),
        new Pokemon(
            118, 
            "Goldeen", 
            "Poissirène", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "poisson", meaning: "fish" },
                { word: "sirène", meaning: "mermaid" }
            ],
            null
        ),
        new Pokemon(
            119, 
            "Seaking", 
            "Poissoroy", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "poisson", meaning: "fish" },
                { word: "roy", meaning: "king" }
            ],
            null
        ),
        new Pokemon(
            120, 
            "Staryu", 
            "Stari", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "star", meaning: "star" },
            ],
            null
        ),
        new Pokemon(
            121, 
            "Starmie", 
            "Staross", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "star", meaning: "star" },
                { word: "boss", meaning: "boss" }
            ],
            "star boss"
        ),
        new Pokemon(
            122, 
            "Mr. Mime", 
            "M. Mime", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "monsieur", meaning: "mister" },
                { word: "mime", meaning: "mime" }
            ],
            null
        ),
        new Pokemon(
            123, 
            "Scyther", 
            "Insécateur", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "insecte", meaning: "insect" },
                { word: "sécateur", meaning: "shear" }
            ],
            null
        ),
        new Pokemon(
            124, 
            "Jynx", 
            "Lippoutou", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "lips", meaning: "lips" },
                { word: "poutou", meaning: "kiss" }
            ],
            null
        ),
        new Pokemon(
            125, 
            "Electabuzz", 
            "Élektek", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "électrique", meaning: "electric" },
            ],
            null
        ),
        new Pokemon(
            126, 
            "Magmar", 
            "Magmar", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            127, 
            "Pinsir", 
            "Scarabrute", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "scarabée", meaning: "beetle" },
                { word: "brute", meaning: "brute" }
            ],
            null
        ),
        new Pokemon(
            128, 
            "Tauros", 
            "Tauros", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            129, 
            "Magikarp", 
            "Magicarpe", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "magique", meaning: "magic" },
                { word: "carpe", meaning: "carp" }
            ],
            null
        ),
        new Pokemon(
            130, 
            "Gyarados", 
            "Léviator", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "léviathan", meaning: "leviathan" },
                { word: "or", meaning: "gold" }
            ],
            null
        ),
        new Pokemon(
            131, 
            "Lapras", 
            "Lokhlass", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "loch ness", meaning: "loch ness" },
            ],
            null
        ),
        new Pokemon(
            132, 
            "Ditto", 
            "Métamorph", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "métamorphose", meaning: "metamorphosis" }
            ],
            null
        ),
        new Pokemon(
            133, 
            "Eevee", 
            "Évoli", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "évolution", meaning: "evolution" }
            ],
            null
        ),
        new Pokemon(
            134, 
            "Vaporeon", 
            "Aquali", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "aqua", meaning: "water" },
                { word: "li", meaning: "eevee" }
            ],
            "water eevee"
        ),
        new Pokemon(
            135, 
            "Jolteon", 
            "Voltali", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "volt", meaning: "volt" },
                { word: "li", meaning: "eevee" }
            ],
            "volt eevee"
        ),
        new Pokemon(
            136, 
            "Flareon", 
            "Pyroli", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "pyro", meaning: "fire" },
                { word: "li", meaning: "eevee" }
            ],
            "fire eevee"
        ),
        new Pokemon(
            137, 
            "Porygon", 
            "Porygon", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            138, 
            "Omanyte", 
            "Amonita", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "ammonite", meaning: "ammonite" }
            ],
            null
        ),
        new Pokemon(
            139, 
            "Omastar", 
            "Amonistar", 
            Pokemon.TRANSLATION_TYPE_ALMOST_BORING, 
            [
                { word: "ammonite", meaning: "ammonite" },
                { word: "star", meaning: "star" }
            ],
            null
        ),
        new Pokemon(
            140, 
            "Kabuto", 
            "Kabuto", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            141, 
            "Kabutops", 
            "Kabutops", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            142, 
            "Aerodactyl", 
            "Ptéra", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "ptérodactyle", meaning: "pterodactyl" }
            ],
            null
        ),
        new Pokemon(
            143, 
            "Snorlax", 
            "Ronflex", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "ronfler", meaning: "to snore" },
                { word: "flex", meaning: "flexible?" }
            ],
            null
        ),
        new Pokemon(
            144, 
            "Articuno", 
            "Artikodin", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "artique", meaning: "arctic" },
                { word: "odin", meaning: "Odin" }
            ],
            null
        ),
        new Pokemon(
            145, 
            "Zapdos", 
            "Électhor", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "électrique", meaning: "electric" },
                { word: "thor", meaning: "Thor" }
            ],
            null
        ),
        new Pokemon(
            146, 
            "Moltres", 
            "Sulfura", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "sulfureux", meaning: "sulfur" },
                { word: "ra", meaning: "Ra" }
            ],
            null
        ),
        new Pokemon(
            147, 
            "Dratini", 
            "Minidraco", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "mini", meaning: "mini" },
                { word: "draco", meaning: "dragon" }
            ],
            "mini dragon"
        ),
        new Pokemon(
            148, 
            "Dragonair", 
            "Draco", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "draco", meaning: "dragon" }
            ],
            null
        ),
        new Pokemon(
            149, 
            "Dragonite", 
            "Dracolosse", 
            Pokemon.TRANSLATION_TYPE_NORMAL, 
            [
                { word: "draco", meaning: "dragon" },
                { word: "colosse", meaning: "colossus" }
            ],
            null
        ),
        new Pokemon(
            150, 
            "Mewtwo", 
            "Mewtwo", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            151, 
            "Mew", 
            "Mew", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            808, 
            "Meltan", 
            "Meltan", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        ),
        new Pokemon(
            809, 
            "Melmetal", 
            "Melmetal", 
            Pokemon.TRANSLATION_TYPE_BORING, 
            [],
            null
        )
    ];
}