let cart = [];
let cartButton = document.getElementById("cart-button");
let cartDetails = document.getElementById("cart-details");
let cartItems = document.getElementById("cart-items");
let totalPrice = document.getElementById("total-price");

function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  updateCart();
}

function updateCart() {
  let total = 0;
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = `Total: $${total.toFixed(2)}`;
  cartButton.textContent = `Cart (${cart.length})`;
}

cartButton.addEventListener("click", () => {
  cartDetails.style.display = cartDetails.style.display === "none" ? "block" : "none";
});

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Proceeding to checkout...");
    cart = [];
    updateCart();
    cartDetails.style.display = "none";
  }
}

function clearCart() {
  cart = [];
  updateCart();
  cartDetails.style.display = "none";
}
