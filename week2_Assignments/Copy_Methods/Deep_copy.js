//Hands-On 1: Shallow Copy (Controlled Mutation Use Case)
//🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

//🎯 Task
    //1. Create a shallow copy of user
    let Copyuser={...user}; //shallow copy using spread operator
    //2. Change:
    //i. name in the copied object
    Copyuser.name="ram";
    //ii. preferences.theme in the copied object
    Copyuser.preferences.theme="light";       //it changes the original object's theme as well because preferences is a nested object and shallow copy only copies the reference
    //iii .Log both original and copied objects

    console.log("Original User:",user);
    console.log("Copied User:",Copyuser);
    //iv. Observe what changes and what doesn’t

// Expected Output:
// Original User: { id: 101, name: 'Ravi', preferences: { theme: 'light', language: 'en' } }
// Copied User: { id: 101, name: 'Ram', preferences: { theme: 'light', language: 'en' } }