/* ****************************1/ map ***************** */
/* *************************Copie de liste des données********** */
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList);
console.log("---------------------------------------------------");
/* *************************Copie de liste des nombres par exposant 3********** */
const nombres = [1, 2, 3, 4, 5, 6];
const nbre_exposants = nombres.map(val => val**3);
console.log('Liste des nombres: ', nombres);
console.log('Liste des nombres par exposant 3: ', nbre_exposants);
console.log("---------------------------------------------------");
/* ****************************2/ filter ***************** */ 
/* ***********************Afficher la liste des nombres divisible par 2 et non********************** */
const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 );
const evens_not0 = values.filter( val => val % 2 !== 0 );
console.log('Liste: ', values);
console.log('Numéros divisible par 2: ', evens);
console.log('Numéros NON divisible par 2: ', evens_not0);
console.log("---------------------------------------------------");
/* ***********************Afficher la liste contenant "o"********************** */
const epiceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = epiceries.filter( item => item.includes("o") );
console.log('Liste epiceries total: ', epiceries);
console.log('Contenant o: ', oFoods);
console.log("---------------------------------------------------");

/* ***********************Afficher la liste par filter et map********************** */
const valeurs = [1, 2, 3, 4, 5];
const oddCubes = valeurs.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log('Notre Liste: ', valeurs);
console.log('La list final non divisible par 2 et exposant par 3: ', oddCubes);
console.log("---------------------------------------------------");

/* ***********************Additionner les valeurs dans une liste avec "reduce"********************** */
const nbre = [15, 16, 17, 18, 19];
const resultat = nbre.reduce(
    (accumulator, currentValue) => accumulator + currentValue, 10, );
console.log(resultat);
console.log("---------------------------------------------------");

const array = [15, 16, 17, 18, 19];
console.log(array);

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue + index;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

const result = array.reduce(reducer);







