///Introduction to Control Flow
let userName = '';
let knowsJavaScript = false;
//userName的有无与knowsJavaScript的真假排列组合出4种不同结果。
if (knowsJavaScript && userName) {
  console.log('Great, ' + userName + '! Get ready to practice your JavaScript!');
} else if (knowsJavaScript) {
  console.log('Great! Get ready to practice your JavaScript!');
} else if (userName) {
  console.log('Great, ' + userName + '! Get ready to learn something new!');
} else {
  console.log('Great! Get ready to learn something new!');
}

///if/else Statements
let needsCoffee=true;
if (needsCoffee === true){
  console.log("Finding coffee");
} else {
  console.log('Keep on keeping on!');
}


let isSoccerFan=false;
if (isSoccerFan === true){
  console.log('Goal!');
} else {
  console.log('No goal!');
}

///True and False Values
/* All variables that have been declared and assigned are truthy unless they contain one of the six values listed below:

false
0 and -0
"" and '' (empty strings)→a string that is not empty is truthy.
null
undefined
NaN (Not a Number)
*/
let numberOfApples = 0;
/* There is an important distinction between a variable's value and its truthiness:

numberOfApples's value is 0 because that is the data saved to the variable.
numberOfApples is falsy when used in control flow because it exists and does contain one of the six falsy values listed above.
*/

let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}
let favoritePhrase = 'full';
if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

/// True and False Values II
//Use the ! operator to cause This string is definitely empty to log to the console.
let favoritePhrase = 'full';

if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

///Comparison Operators
/*
1.Using let, write a variable named hungerLevel and set it equal to 5.
2.Write an if/else statement that checks if hungerLevel is greater than 7. If so, log Time to eat!. Otherwise, log We can eat later!.
*/
let hungerLevel = 5;
if (hungerLevel > 7){
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

///Comparison Operators II
//It can be confusing when to use one = sign and when to use three === signs. Use a single = to assign a value to a variable. Use ===to compare the values of two different variables.
let moonPhase='full';
if (moonPhase === 'full'){
  console.log('howl!');
} else {
  console.log('I swear I am not a werewolf.');
}

///else if Statements
let moonPhase='solar eclipse';
if (moonPhase === 'full'){
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}

///Logical Operators
/*
1. say "both must be true," we use &&.
2. To say "either can be true," we use ||.
*/
let moonPhase='full', isFoggyNight=false;
if (moonPhase === 'full' || isFoggyNight === 'true'){
  console.log('Howl!');
} else if (moonPhase === 'mostly full'){
  console.log('Arms and legs are getting hairier');
} else if (moonPhase === 'mostly new') {
  console.log('Back on two feet');
} else {
  console.log('Invalid moon phase');
}   //= Howl!

///switch Statements
let moonPhase='full';
switch (moonPhase){
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new':
    console.log('Back on two feet');
    break;
  default:
    console.log('Invalid moon phase');
    break;
}


///Ternary Operator
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
age >= 16 ? console.log('You are old enough to drive in the United States!') : console.log('You are not old enough to drive in the United States!');
let isLocked=true;
isLocked? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');


let isCorrect = true;
isCorrect? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'? console.log('I love that!') : console.log("I don't love that!");
/*
if/else statements make binary decisions and execute different code based on conditions.
All conditions are evaluated to be truthy or falsy.
We can add more conditional statements to if/else statements with else if.
switch statements make complicated if/else statements easier to read and achieve the same result.
The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
Comparison operators, including <, >, <=, and >= can compare two variables or values.
After two values are compared, the conditional statement evaluates to true or false.
The logical operator && checks if both sides of a condition are truthy.
The logical operator || checks if either side is truthy.
The logical operator !== checks if the two sides are not equal.
An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
One equals symbol (=) is used to assign a value to a variable.
Three equals symbols (===) are used to check if two variables are equal to each other
*/