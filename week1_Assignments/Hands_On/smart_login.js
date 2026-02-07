 //HANDS-ON 3: Smart Login Status Engine


//Initial data:

    let isLoggedIn = true;
    let isProfileComplete = false;

//Tasks:
   //1. If user is not logged in → show "Please login"
   //2. If logged in but profile incomplete → show "Complete your profile"
   //3. If logged in and profile complete → show "Welcome back!"
   //4. Store the result in message
   //5. Print the message

  // 1. If user is not logged in → show "Please login"
    let message = !isLoggedIn ? "Please login"
    : !isProfileComplete ? "Complete your profile"
    : "Welcome back!";
    console.log(message);
   //2.If logged in but profile incomplete → show "Complete your profile"
if (!isLoggedIn) {
    message = "Please login";
} else if (!isProfileComplete) {
    message = "Complete your profile";
} else {
    message = "Welcome back!";
}   

   //3. If logged in and profile complete → show "Welcome back!"
    if (isLoggedIn && isProfileComplete) {
        message = "Welcome back!";
    }   

   //4. Store the result in message
   switch (true) {
    case !isLoggedIn:
        message = "Please login";
        break;
    case !isProfileComplete:
        message = "Complete your profile";
        break;
    case isLoggedIn && isProfileComplete:
        message = "Welcome back!";
        break;
   }
   //5. Print the message
    console.log(message);   