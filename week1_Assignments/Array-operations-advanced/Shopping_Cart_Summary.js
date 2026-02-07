// Test Data
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. filter() only inStock products
const inStockProducts = cart.filter(item => item.inStock);

// 2. map() → { name, totalPrice }
const productTotals = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));

// 3. reduce() → grand total cart value
const grandTotal = cart.reduce(
  (total, item) => total + (item.price * item.quantity),
  0
);

// 4. find() details of "Mouse"
const mouseDetails = cart.find(item => item.name === "Mouse");

// 5. findIndex() position of "Keyboard"
const keyboardIndex = cart.findIndex(item => item.name === "Keyboard");

console.log(inStockProducts);
console.log(productTotals);
console.log(grandTotal);
console.log(mouseDetails);
console.log(keyboardIndex);
