const saveCartItems = () => {
  const elementCart = document.getElementsByClassName('cart__items')[0];
  const arrItems = elementCart.innerHTML;
  localStorage.setItem('cartItems', arrItems);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
