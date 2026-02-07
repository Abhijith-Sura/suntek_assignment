import { cart, courses } from "./data.js";

// Merge cart with courses
const cartDetails = cart.map(item => {
  const course = courses.find(c => c.id === item.courseId);
  return {
    title: course.title,
    price: course.price,
    qty: item.qty
  };
});

// Total cart amount
const cartTotal = cartDetails.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);

// Increase quantity immutably
const updatedCart = cart.map(item =>
  item.courseId === 101 ? { ...item, qty: item.qty + 1 } : item
);

// Remove course
const filteredCart = cart.filter(item => item.courseId !== 103);

// Check paid courses
const allPaid = cartDetails.every(item => item.price > 0);

console.log("Cart Details:", cartDetails);
console.log("Cart Total:", cartTotal);
console.log("Updated Cart:", updatedCart);
console.log("Filtered Cart:", filteredCart);
console.log("All Paid:", allPaid);
