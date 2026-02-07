//Hands-On 2: Deep Copy (Isolation & Safety Use Case)

//🧪 Given Data:
                const order = {
                  orderId: "ORD1001",
                  customer: {
                    name: "Anita",
                    address: {
                      city: "Hyderabad",
                      pincode: 500085
                    }
                  },
                  items: [
                    { product: "Laptop", price: 70000 }
                  ]
                };

//🎯 Task:
     // 1. Create a deep copy of order
     let Copyorder=structuredClone(order);  //structuredClone creates a deep copy of the object
      //2. Modify in copied object:
        //   i. customer.address.city
        Copyorder.customer.address.city="Bangalore";
        //  ii. items[0].price
        Copyorder.items[0].price=65000;
        //  iii. Verify original object remains unchanged
        console.log("Original Order:",order);
        console.log("Copied Order:",Copyorder);