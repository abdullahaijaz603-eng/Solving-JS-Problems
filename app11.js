var currencyConvert = Number(prompt("Enter the amount in PKR to convert into USD: "));

var conversionRate = 0.0036142; // Approximate rate: 1 PKR = 0.0036142 USD

var convertedAmount = currencyConvert * conversionRate;

console.log(currencyConvert + " PKR is equal to " + convertedAmount.toFixed(2) +"$" + " USD.");