
import { getProductById, checkStock } from './product.js';

let cartItems = [];

// 1. Get product detail
// 2. Check stock availabilit
// 3. Check if product already in car
//    - If yes, update quantit
//    - If no, add new item
export function addToCart(productId, quantity) {
  const product = getProductById(productId);

  if (!product) return "Product not found.";

  if (!checkStock(productId, quantity))
    return "Insufficient stock.";

  const existingItem = cartItems.find(item => item.productId === productId);

  if (existingItem) {
    if (!checkStock(productId, existingItem.quantity + quantity))
      return "Not enough stock to increase quantity.";

    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Product added to cart successfully.";
}


 // Remove product from cart
export function removeFromCart(productId) {
  const index = cartItems.findIndex(item => item.productId === productId);
  if (index === -1) return "Product not in cart.";

  cartItems.splice(index, 1);
  return "Product removed from cart.";
}


// Update quantity of product in cart
    // Check stock before updating
export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(item => item.productId === productId);
  if (!item) return "Product not in cart.";

  if (!checkStock(productId, newQuantity))
    return "Insufficient stock.";

  item.quantity = newQuantity;
  return "Quantity updated successfully.";
}


 // Return all cart items with product details
export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });
}


// Calculate total price of all items in cart
    // Return total
export function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}


// Empty the cart
export function clearCart() {
  cartItems = [];
}
