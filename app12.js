var userSalary = Number(prompt("Enter your salary"));

console.log("House Alllowance: " + (0.5 * userSalary));
console.log("Medical Allowance: " + (0.1 * userSalary));
console.log("Tax Deduction: " + (0.2 * userSalary));
console.log("Gross Salary: " + (userSalary + (0.5 * userSalary) + (0.1 * userSalary)));
console.log("Net Salary: " + (userSalary + (0.5 * userSalary) + (0.1 * userSalary) - (0.2 * userSalary)));
console.log("Total Salary: " + (userSalary + (0.5 * userSalary) + (0.1 * userSalary) - (0.2 * userSalary)));  

