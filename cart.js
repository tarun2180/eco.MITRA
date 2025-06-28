let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartList = document.getElementById("cart-list");
const totalEl = document.getElementById("total");

function renderCart() {
  cartList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartList.innerHTML = "<p style='grid-column: 1 / -1; text-align: center;'>Your cart is empty.</p>";
  } else {
    cart.forEach(item => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h3>${item.name}</h3>
        <p>ID: ${item.id}</p>
        <p>$${item.price.toFixed(2)}</p>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">Delete</button>
      `;
      cartList.appendChild(card);
      total += item.price;
    });
  }

  totalEl.textContent = total.toFixed(2);
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

renderCart();