//Assignment 1: Date Creation & Extraction (Beginner)

//Tasks:
       //1. Create a Date object for current date & time.
       let currentDate=new Date();
       console.log("current date and time:",currentDate.toString());
       //2. Extract and display:
                    //* Year
                    let year=currentDate.getFullYear();
                    console.log("year:",year);
                    //* Month (human readable)
                    let month=currentDate.getMonth()+1;
                    console.log("month:",month);
                    //* Date
                    let date=currentDate.getDate();
                    console.log("date:",date);
                    //* Day of week
                    let day=currentDate.getDay(); //0-Sunday,1-Monday,...6-Saturday
                    console.log("day of week:",day);
                    //* Hours, minutes, seconds
                    let hours=currentDate.getHours();
                    let minutes=currentDate.getMinutes();
                    let seconds=currentDate.getSeconds();
                    console.log('time:',hours+":",minutes+":",seconds);

      //3. Display the date in this format:
      // //DD-MM-YYYY HH:mm:ss
      console.log("Formatted Date:",date+"-"+month+"-"+year+" "+hours+":"+minutes+":"+seconds);