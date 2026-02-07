// Test Data
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// 1. filter() employees from IT
const itEmployees = employees.filter(e => e.department === "IT");

// 2. map() add netSalary (10% bonus)
const withBonus = employees.map(e => ({
  ...e,
  netSalary: e.salary + e.salary * 0.10
}));

// 3. reduce() total salary payout
const totalPayout = employees.reduce((sum, e) => sum + e.salary, 0);

// 4. find() employee with salary 30000
const salary30000 = employees.find(e => e.salary === 30000);

// 5. findIndex() of "Neha"
const nehaIndex = employees.findIndex(e => e.name === "Neha");

console.log(itEmployees);
console.log(withBonus);
console.log(totalPayout);
console.log(salary30000);
console.log(nehaIndex);
