var passLength = prompt ("How many characters would you like your password to be?");
var passNumbers = confirm ("Would you like your password to contain Numbers?");
var passSpecial = confirm ("Would you like your password to contain special characters?");
var passUpperCase  = confirm ("Would you like your password to contain Uppercase letters?");
var passLowerCase = confirm ("Would you like your password to contain Lowercase letters" );
var generatedPassword = ""
var numChars = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];
var specialChars = [
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
];
var upperChars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G", 
    "H", 
    "I", 
    "J", 
    "K", 
    "L", 
    "M", 
    "N", 
    "O", 
    "P", 
    "Q", 
    "R", 
    "S", 
    "T", 
    "U", 
    "V", 
    "W", 
    "X", 
    "Y", 
    "Z",
];

var lowerChars = [
    "a", 
    "b", 
    "c", 
    "d", 
    "e", 
    "f", 
    "g", 
    "h", 
    "i", 
    "j", 
    "k", 
    "l", 
    "m", 
    "n", 
    "o", 
    "p", 
    "q", 
    "r", 
    "s", 
    "t", 
    "u", 
    "v", 
    "w", 
    "x",
    "y", 
    "z"
];
function getRandomInt(arr) {
    var randomIndex =  Math.floor(Math.random() * arr.length);
    var randElem = arr[randomIndex];
    return randElem;
  };
function generatePass() {

var userSelections = [];
if (passNumbers === true){
    userSelections.push(numChars)
};
if (passLowerCase === true){
    userSelections.push(lowerChars)
} 
if (passSpecial ===true){
    userSelections.push(specialChars)
};
if (passUpperCase ===true){
    userSelections.push(upperChars)
};

for (var i = 0; i < passLength; i++) {
  generatedPassword = generatedPassword  + getRandomInt(getRandomInt(userSelections));
}
return generatedPassword
};
function displayPassword() {
   console.log("functionRan"); 
   document.getElementById("passwordDisplay").textContent  =  generatePass()
}
console.log(generatePass());
console.group("userSelections");
console.log(passLength);
console.log(passNumbers);
console.log(passSpecial);
console.log(passUpperCase);
console.log(generatedPassword);
console.groupEnd();



