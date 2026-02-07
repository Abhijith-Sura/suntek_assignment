import { users } from "./data.js";

// Active users
const activeUsers = users.filter(u => u.active);

// Active user names
const activeUserNames = activeUsers.map(u => u.name);

// Check admin exists
const adminExists = users.some(u => u.role === "admin");

// Find user by id
const userById = users.find(u => u.id === 2);

// Deactivate user immutably
const updatedUsers = users.map(u =>
  u.id === 1 ? { ...u, active: false } : u
);

console.log("Active Users:", activeUsers);
console.log("Active User Names:", activeUserNames);
console.log("Admin Exists:", adminExists);
console.log("User By Id:", userById);
console.log("Updated Users:", updatedUsers);
