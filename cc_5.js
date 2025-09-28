// Coding Challenge 5

// Step 2
let employees = [
    {name: "Bob",hourlyRate: 20.00,hoursWorked: 40},
    {name: "Bill",hourlyRate: 18.50,hoursWorked: 32},
    {name: "Dale",hourlyRate: 22.50,hoursWorked: 40},
    {name: "Randy",hourlyRate: 17.00,hoursWorked: 20}
];

console.log(employees);

// Step 3
function calculateBasePay(rate, hours) {
    return rate * hours
}

let pay = calculateBasePay(40, 20.00);
console.log(pay);