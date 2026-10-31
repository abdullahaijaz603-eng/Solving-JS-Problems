 //DMAS Rule
 
// A
var A = 10 + 5 * 2;
// First: 5 * 2 = 10
// Then: 10 + 10 = 20
console.log("A =", A);


// B
var B = (10 + 5) * 2;
// First: 10 + 5 = 15 (Brackets)
// Then: 15 * 2 = 30
console.log("B =", B);


// C
var C = 20 / 2 + 3 * 4 - 5;
// First: 20 / 2 = 10
// Second: 3 * 4 = 12
// Then: 10 + 12 - 5 = 17
console.log("C =", C);


// D
var D = 5 + 2 * (8 - 3) / 5;
// First: 8 - 3 = 5 (Brackets)
// Second: 2 * 5 = 10
// Third: 10 / 5 = 2
// Finally: 5 + 2 = 7
console.log("D =", D);


// E
var E = 30 % 4 + 6 * 2;
// First: 30 % 4 = 2 (Remainder)
// Second: 6 * 2 = 12
// Finally: 2 + 12 = 14
console.log("E =", E);