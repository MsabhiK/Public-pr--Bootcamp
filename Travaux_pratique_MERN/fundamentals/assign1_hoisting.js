// GIVEN
//console.log(example);
//var example = "I'm the example!";
//output: undefined

//AFTER HOISTING BY THE INTERPRETER
/*
var example;
console.log(example); // logs undefined
example = "I'm the example!";
//output: undefined
*/
/*
console.log(example);
let example = "I'm the example!";   
//output: ReferenceError: Cannot access 'example' before initialization 
*/
/* ****************************************  1 ******************************************************** */
/*
console.log(hello);                                   
var hello = 'world';                                 
//output: undefined
*/
/* ****************************************  2 ******************************************************** */
/*
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//output: magnet
*/
/* ****************************************  3 ******************************************************** */
/*
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//output: super cool
*/
/* ****************************************  4 ******************************************************** */
/*
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//output: chicken
//        half-chicken
*/
/* ****************************************  5 ******************************************************** */
/*
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//output: TypeError: mean is not a function
*/
/* ****************************************  6 ******************************************************** */
/*
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//output:undefined
//       rock
//       r&b
//       disco
*/
/* ****************************************  7 ******************************************************** */
/*
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//output: san jose  seattle  burbank san jose
*/
/* ****************************************  8 ******************************************************** */
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//output: { name: 'Chicago', students: 65, hiring: true }
//TypeError: Assignment to constant variable. (dojo = "closed for now")




