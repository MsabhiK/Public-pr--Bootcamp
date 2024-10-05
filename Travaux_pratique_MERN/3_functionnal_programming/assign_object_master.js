const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
console.log(pokémon);
console.log("---------------------------------------------------");   
/* *********we could create a list of pokémon that have names that start with the letter "B"**** */ 
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);
console.log("---------------------------------------------------"); 

/* *********we wanted to return an array of just the ids, we could use something like this**** */
const pkmnIds = pokémon.map( p => p.id )
console.log(pkmnIds);
console.log("---------------------------------------------------");

/* *******1/ An array of pokémon objects where the id is evenly divisible by 3***** */
const evens = pokémon.filter( p => p.id % 3 === 0 );
console.log('1/ an array of id divisible by 3: ', evens);
console.log("---------------------------------------------------");

/* ********2/ an array of pokémon objects that are "fire" type****** */
const type_fire = pokémon.filter( p => p.types == 'fire' );
console.log('2/ an array of pokémon objects that are "fire" type: ', type_fire);
console.log("---------------------------------------------------");

/* *******3/ an array of pokémon objects that have more than one type***** */
const typemore = pokémon.filter( p => p.types.length > 1 );
console.log('3/ an array of pokémon objects that have more than one type: ', typemore);
console.log("---------------------------------------------------");

/* *******4/ an array with just the names of the pokémon***** */
const namesP = pokémon.map( p => p.name);
console.log('4/ an array with just the names of the pokémon: ', namesP);
console.log("---------------------------------------------------");

/* *****5/ an array with just the names of pokémon with an id greater than 99*** */
const namesMore = pokémon.filter( p => p.id > 99).map( p => p.name);
console.log('5/ an array with just the names of pokémon with an id greater than 99: ', namesMore);
console.log("---------------------------------------------------");

/* *******6/ an array with just the names of the pokémon whose only type is poison*** */
const namesPoison = pokémon.filter( p => p.types == 'poison').map( p => p.name);
console.log('6/ an array with just the names of the pokémon whose only type is poison: ', namesPoison);
console.log("---------------------------------------------------");

/* *******7/ an array containing just the first type of all the pokémon whose second type is "flying"*** */
const namesFlying = pokémon.filter( p => p.types[1] == 'flying' ).map( p => p.types[0] );
console.log('7/ an array containing just the first type of all the pokémon whose second type is flying: ', namesFlying);
console.log("---------------------------------------------------");

/* *******8/ a count of the number of pokémon that are "normal" type*** */
const list_normal = pokémon.filter( p => p.types == 'normal' );
const count_normal = pokémon.filter( p => p.types == 'normal' ).length;
console.log('list of normal type: ', list_normal);
console.log('8/ a count of the number of pokémon that are "normal" type: ', count_normal);
console.log("---------------------------------------------------");