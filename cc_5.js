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
};

let basePay = calculateBasePay(20.00, 40);
console.log(basePay);

// Step 4
function calculateOvertimePay(rate, hours) {
        if (hours > 40) {
            return (1.5 * rate) * (hours - 40)
        } else if (hours <= 40) {
            return `No overtime found on record`
        }
};

let overtimePay = calculateOvertimePay(20.00, 45);
console.log(overtimePay);

// Step 5
function calculateTaxes(grosspay) {
    return grosspay * 0.85 // 15% tax
};

let grosspay = calculateTaxes(800);
console.log(grosspay);