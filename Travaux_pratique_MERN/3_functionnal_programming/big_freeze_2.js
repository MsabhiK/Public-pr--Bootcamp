/* ********************ajouter entier à la fin de liste ****************** */
const arr = [1,2,3,4];
arr.push(300); // even though arr is declared with `const` we can still push new values into it  [1,2,3,300]
arr.push(600);
console.log(arr);

/* ********************Rendre la liste immutable (pas la possibilité d'ajouter) ******** */
const arr1 = Object.freeze([1,2,3,4]);
//arr1.push(300); // we're no longer allowed to change `arr`
console.log(arr1);

/* *******************Une liste d'objets avec la méthode d'ajouter un objet à la liste (par ... et par concat) *** */
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ]; //pour ajouter à la liste
const with_concat = groceryList.concat( [ { "item": "thee", "haveIngredient": true } ] );
// affichage de la liste
console.log(groceryList);
console.log(needThyme);
console.log(with_concat);

const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "item": "strawberry" } ]; // pour modifier data d'une index
console.log(gotTheThyme);

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ]; // pour afficher tous sauf celery : index 0 et 1 puis a partir index 3
console.log(notNeceCelery);




/* *******************Trier une liste de nombres (par sort) ***************************************** */
const numbers = [10, 5, 17, 3, 12, 9, 22, 8];
numbers.sort();
console.log(numbers);
// this will return [10, 12, 22, 3, 5, 8 ]

/* **************************Tri par order alphabet ******************************** */
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
const sortedItems = [...items].sort(); // pour tri de a vers z
console.log(items);
console.log(sortedItems);

/* **************************Tri par order alphabet ******************************** */
console.log("---------------------------------------------------");
const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item ? 1 : -1);
console.log(sortedGroceries);







