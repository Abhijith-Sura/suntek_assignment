  //ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    import { validateTitle, validatePriority, validateDueDate } from './validate.js';
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      if (validateTitle(title) !== true) {
                        return validateTitle(title);
                      }
                      // If valid, add to tasks array
                        const newTask = {
                            id: tasks.length + 1,
                            title: title,
                            priority: priority,
                            dueDate: dueDate,
                      // Return success/error message
                            isComplete: false
                        };
                        tasks.push(newTask);
                        return "Task added successfully.";
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                        return tasks;

                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                        const task = tasks.find(t => t.id === taskId);
                        if (task) {
                            task.isComplete = true;
                            return "Task marked as complete.";
                        } else {
                            return "Task not found.";
                        }
                    }

                  // Export functions

