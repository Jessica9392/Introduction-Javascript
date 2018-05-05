///Create a Variable: Const
const entree='Enchiladas';
const price=12;
console.log(entree);
console.log(price);
entree='Tacos';

///Create a Variable:let
let changeMe = true;
console.log(changeMe);
changeMe=false;
console.log(changeMe);

///Undefined
let notDefined;
console.log(notDefined);
let valueless;
console.log(valueless);

///Mathematical Assignment Operators
let molecule = 16;
let particle = 18;
let assay = 3;
// Add and assign to molecule below
molecule += 16;
// Multiply and assign to particle below
particle *= 6.02;
// Increment assay by 1
assay ++;

///String Interpolation
let favoriteAnimal="Puding";
console.log('My favorite animal: ' + favoriteAnimal);

///String Interpolation II
let myName='Jya';
let myCity='Chengdu';
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

///Review Variables
/* 
Variables hold reusable data in a program.
JavaScript will throw an error if you try to reassign const variables.
You can reassign variables that you create with the let keyword.
Unset variables store the primitive data type undefined.
Mathematical assignment operators make it easy to calculate a new value and assign it to the same variable.
The + operator is used to interpolate (combine) multiple strings.
In JavaScript ES6, backticks (`) and ${} are used to interpolate values into a string.
*/