// Test data
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

// 1. Read and print the user’s name and email
console.log("Name:", user.name);
console.log("Email:", user.email);

// 2. Add a new property lastLogin
user.lastLogin = "2026-01-01";

// 3. Update role from "student" to "admin"
user.role = "admin";

// 4. Delete the isActive property
delete user.isActive;

// 5. Use Object.keys() to list all remaining fields
const remainingFields = Object.keys(user);
console.log("Remaining Fields:", remainingFields);

// Final user object
console.log("Updated User:", user);
