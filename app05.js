var calculator =  prompt("Enter your first number")
var calculator2 = prompt("Enter your second number")
var operator = prompt("Enter the operator (+, -, *, /)")

if (operator === "+") {
   console.log( Number (calculator) + Number(calculator2))
} else if (operator === "-") {
   console.log(Number(calculator) - Number(calculator2))
} else if (operator === "*") {
    console.log(Number(calculator) * Number(calculator2))
} else if (operator === "/") {
    console.log(Number(calculator) / Number(calculator2))
}
else {
    console.log("Invalid operator")
}