import { courses } from "./data.js";

// Published courses
const publishedCourses = courses.filter(c => c.published);

// Sort by price high → low
const sortedCourses = publishedCourses
  .slice()
  .sort((a, b) => b.price - a.price);

// Title & price only
const courseSummary = sortedCourses.map(c => ({
  title: c.title,
  price: c.price
}));

// Total value
const totalValue = publishedCourses.reduce(
  (sum, c) => sum + c.price,
  0
);

// Add course immutably
const updatedCourses = [
  ...courses,
  { id: 104, title: "TypeScript", price: 1599, published: true }
];

console.log("Published:", publishedCourses);
console.log("Sorted:", sortedCourses);
console.log("Summary:", courseSummary);
console.log("Total Value:", totalValue);
console.log("Updated Courses:", updatedCourses);
