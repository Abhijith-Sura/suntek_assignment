//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)

 //Given:
      let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
  //1.Check if:
     // * Today is before deadline → "Enrollment Open"
     //* Today is after deadline → "Enrollment Closed"
     let today=new Date();
     if(today<enrollmentDeadline){
        console.log("Enrollment Open");
     }
     else{
        console.log("Enrollment Closed");
     }
      

  //2. Validate user input date:
      //* Input: "2026-02-30"
      //* Detect whether the date is valid or invalid
      let inputDate=(2026,2,30);
      let isValidDate = (date)=>{
        return date instanceof Date && !isNaN(date);  //this line terms a date valid if it is a Date object and not NaN
        console.log(isValidDate);
      }

