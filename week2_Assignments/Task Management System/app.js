//iii. app.js - Main application
                  // TODO: Import task functions
                  
                  // import { ... } from './task.js';
                    import { addTask, getAllTasks, completeTask } from './task.js';
                  // Test your module system
                  i
                  // 1. Add some tasks
                    console.log(addTask("Buy groceries", "high", "2024-12-01")); // Valid
                    console.log(addTask("Do", "medium", "2024-11-01")); // Invalid title
                    console.log(addTask("Clean house", "urgent", "2024-10-01"));
                    console.log(addTask("Pay bills", "low", "2023-01-01")); // Invalid due date
                    console.log(addTask("Finish project", "medium", "2024-09-15")); // Valid
                  // 2. Display all tasks
                    console.log("All Tasks:", getAllTasks());
                  // 3. Complete a task
                    console.log(completeTask(1)); // Mark task with ID 1 as complete

                  // 4. Display all tasks again
                    console.log("All Tasks after completion:", getAllTasks());
                    