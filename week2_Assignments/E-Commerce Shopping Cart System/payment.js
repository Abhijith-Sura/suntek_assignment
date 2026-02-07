
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

// 1. Get cart items and total
 // 2. Apply discount if coupon provided
 // 3. Validate payment method (card/upi/cod)
 // 4. Process payment (simulate)
 // 5. Reduce stock for all items
 // 6. Clear cart
 // 7. Generate order summary
 // Return order summary:{ orderId, items, subtotal, discount, total, paymentMethod, status, message }
export function processPayment(paymentMethod, couponCode = null) {
  const cartItems = getCartItems();
  const subtotal = getCartTotal();

  if (cartItems.length === 0) {
    return { status: "failed", message: "Cart is empty." };
  }

  let discountData = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal
  };

// 1. Get cart items and total
// 2. Apply discount if coupon provided
  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode, cartItems);
  }

// 3. Validate payment method (card/upi/cod)
// 4. Process payment (simulate)
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: "failed",
      message: "Invalid payment method."
    };
  }

// 5. Reduce stock for all items
  cartItems.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

// 6. Clear cart
  clearCart();

// 7. Generate order summary
// Return order summary:{ orderId, items, subtotal, discount, total, paymentMethod, status, message }
  return {
    orderId: generateOrderId(),
    items: cartItems,
    subtotal: subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod,
    status: "success",
    message: "Payment successful. Order placed."
  };
}

// Check if method is valid (card/upi/cod)
export function validatePaymentMethod(method) {
  return ['card', 'upi', 'cod'].includes(method.toLowerCase());
}

// Generate random order ID
function generateOrderId() {
  return 'ORD' + Date.now();
}
