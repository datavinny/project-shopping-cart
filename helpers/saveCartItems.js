const saveCartItems = (items) => {
  if (!items) {
    const elementCart = document.getElementsByClassName('cart__items')[0];
    const arrItems = elementCart.innerHTML;
    localStorage.setItem('cartItems', arrItems);
  }
  localStorage.setItem('cartItems', items);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
