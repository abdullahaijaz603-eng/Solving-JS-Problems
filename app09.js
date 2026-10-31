var userAge = prompt("Enter your birth year");


var currentYear = new Date().getFullYear();
var age = currentYear - userAge;
console.log("You are " + age + " years old.");