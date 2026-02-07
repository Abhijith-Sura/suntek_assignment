// Test Data
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// 1. filter() students who passed
const passedStudents = students.filter(s => s.marks >= 40);

// 2. map() add grade field
const gradedStudents = students.map(s => {
  let grade;
  if (s.marks >= 90) grade = "A";
  else if (s.marks >= 75) grade = "B";
  else if (s.marks >= 60) grade = "C";
  else grade = "D";

  return { ...s, grade };
});

// 3. reduce() average marks
const averageMarks =
  students.reduce((sum, s) => sum + s.marks, 0) / students.length;

// 4. find() student who scored 92
const topper = students.find(s => s.marks === 92);

// 5. findIndex() of "Kiran"
const kiranIndex = students.findIndex(s => s.name === "Kiran");

console.log(passedStudents);
console.log(gradedStudents);
console.log(averageMarks);
console.log(topper);
console.log(kiranIndex);
