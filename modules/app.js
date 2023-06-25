const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 19.99 },
  { id: 3, name: "Product 3", price: 14.99 },
  { id: 4, name: "Product 4", price: 24.99 },
  // Add more product
];

const cartItems = [];

function addToCart(product, ...quantities) {
  cartItems.push({
    product,
    quantities: [...quantities],
  });
}

function clearCart() {
  cartItems.length = 0;
}

function displayCartItems() {
  const cartItemsContainer = document.querySelector(".cart-items");
  const totalAmountValue = document.getElementById("total-amount-value");

  cartItemsContainer.innerHTML = "";

  let totalAmount = 0;

  cartItems.forEach((cartItem) => {
    const { product, quantities } = cartItem;
    const { name, price } = product;

    const cartItemElement = document.createElement("div");
    const itemName = document.createElement("h4");
    const itemQuantity = document.createElement("p");
    const itemPrice = document.createElement("p");

    itemName.textContent = name;
    itemQuantity.textContent = `Quantity: ${quantities.reduce((total, quantity) => total + quantity, 0)}`;
    const itemTotal = price * quantities.reduce((total, quantity) => total + quantity, 0);
    itemPrice.textContent = `Price: $${itemTotal.toFixed(2)}`;

    cartItemElement.appendChild(itemName);
    cartItemElement.appendChild(itemQuantity);
    cartItemElement.appendChild(itemPrice);

    cartItemsContainer.appendChild(cartItemElement);

    totalAmount += itemTotal;
  });

  totalAmountValue.textContent = `$${totalAmount.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.querySelector(".product-list");
  const clearCartButton = document.querySelector(".clear-cart");

  products.forEach((product) => {
    const { name, price } = product;

    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    const productName = document.createElement("h3");
    productName.textContent = name;

    const productPrice = document.createElement("p");
    productPrice.textContent = `$${price.toFixed(2)}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";

    addToCartButton.addEventListener("click", () => {
      const quantity = parseInt(prompt("Enter quantity:", "1"));
      addToCart(product, quantity);
      console.log(`Product price: $${price.toFixed(2)}`);
      displayCartItems();
    });

    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(addToCartButton);

    productContainer.appendChild(productItem);
  });

  clearCartButton.addEventListener("click", () => {
    clearCart();
    displayCartItems();
  });

  displayCartItems();
});
