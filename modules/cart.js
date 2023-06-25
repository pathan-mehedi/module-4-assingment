export let cartItems = [];

export function addToCart(product, ...quantities) {
  cartItems.push({
    product,
    quantities: [...quantities],
  });
}

export function clearCart() {
  cartItems = [];
}
