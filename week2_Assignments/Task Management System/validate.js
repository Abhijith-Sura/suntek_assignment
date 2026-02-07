
        //i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        if (typeof title !== 'string' || title.trim().length < 3) {
                          return "title must be at least 3 characters long.";
                        }
                        
                        return true;
                      }
                      
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority){
                        const validPriorities = ['low', 'medium', 'high'];
                        if (!validPriorities.includes(priority.toLowerCase())) {
                          return `priority must be one of the following: ${validPriorities.join(', ')}.`;
                        }


                      }

                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        const dueDate = new Date(date);
                        const now = new Date();
                        
                      }

export { validateTitle, validatePriority, validateDueDate };