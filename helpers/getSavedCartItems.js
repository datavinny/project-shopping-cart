const getSavedCartItems = () => {
  const cart = document.getElementsByClassName('cart__items')[0];
  const itemsSalvos = localStorage.getItem('cartItems');
  cart.innerHTML = itemsSalvos;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
