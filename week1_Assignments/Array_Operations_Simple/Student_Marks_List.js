// Test data
const marks = [78, 92, 35, 88, 40, 67];


// 1. filter() marks ≥ 40 (pass marks)
const passedStudents = marks.filter(mark => mark >= 40);


// 2. map() to add 5 grace marks to each student
const graceMarks = marks.map(mark => mark + 5);


// 3. reduce() to find highest mark
const highestMark = marks.reduce((max, mark) => 
  mark > max ? mark : max
);


// 4. find() first mark below 40
const firstFail = marks.find(mark => mark < 40);


// 5. findIndex() of mark 92
const indexOf92 = marks.findIndex(mark => mark === 92);


// Print outputs
console.log("Passed Students:", passedStudents);
console.log("Marks After Grace:", graceMarks);
console.log("Highest Mark:", highestMark);
console.log("First Fail Mark:", firstFail);
console.log("Index of 92:", indexOf92);
