import { roles } from "./data.js";

// Role names
const roleNames = Object.keys(roles);

// Student can delete?
const studentCanDelete = roles.student.includes("delete");

// Unique permissions
const allPermissions = [
  ...new Set(Object.values(roles).flat())
];

// Add moderator
const updatedRoles = {
  ...roles,
  moderator: ["view", "update"]
};

console.log("Role Names:", roleNames);
console.log("Student Can Delete:", studentCanDelete);
console.log("All Permissions:", allPermissions);
console.log("Updated Roles:", updatedRoles);
