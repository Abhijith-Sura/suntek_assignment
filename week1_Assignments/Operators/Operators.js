//Initial data:
        let totalAmount = 0;

//🎯 Tasks
  //1. Add ₹500 to the total

    totalAmount += 500;
    console.log("After adding ₹500, Total Amount:", totalAmount);

  //2. Add ₹1200 to the total
    totalAmount += 1200;
    console.log("After adding ₹1200, Total Amount:", totalAmount);

  //3. Apply a ₹200 discount
    totalAmount -= 200;
    console.log("After applying ₹200 discount, Total Amount:", totalAmount);

  //4. Add 18% GST
    totalAmount += totalAmount * 0.18;
    console.log("After adding 18% GST, Total Amount:", totalAmount);

  //5. Print the final bill amount
    console.log("Final Bill Amount: ₹", totalAmount.toFixed(2));