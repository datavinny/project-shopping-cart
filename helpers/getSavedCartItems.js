const getSavedCartItems = (key) => {
  if (!key) {
    const cart = document.getElementsByClassName('cart__items')[0];
    const itemsSalvos = localStorage.getItem('cartItems');
    if (cart !== undefined) {
      cart.innerHTML = itemsSalvos;
    }
  }
  localStorage.getItem(key);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
