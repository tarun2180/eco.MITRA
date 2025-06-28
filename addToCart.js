function addToCart(name, price, image) {
  const product = {
    id: Date.now(),
    name,
    price,
    image
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}