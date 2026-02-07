// Test data
const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
const filteredCourses = courses.filter(course => course.length > 5);

// 2. map() to convert course names to uppercase
const upperCaseCourses = filteredCourses.map(course => course.toUpperCase());

// 3. reduce() to generate a single string
// "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
const courseString = courses
  .map(course => course.toUpperCase())
  .reduce((result, course) => result + " | " + course);

// 4. find() the course "react"
const foundCourse = courses.find(course => course === "react");

// 5. findIndex() of "node"
const nodeIndex = courses.findIndex(course => course === "node");

// Print outputs
console.log("Filtered Courses:", filteredCourses);
console.log("Uppercase Courses:", upperCaseCourses);
console.log("Course String:", courseString);
console.log("Found Course:", foundCourse);
console.log("Index of Node:", nodeIndex);
