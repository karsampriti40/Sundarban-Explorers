// shop.js
// Handles adding items to cart from shop.html

function addToCart(name, price) {
  // Get existing cart or create empty one
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Add the new item
  cart.push({ name, price });

  // Save it back
  localStorage.setItem("cart", JSON.stringify(cart));

  // Optional: simple feedback
  alert(`${name} added to your cart!`);
}
