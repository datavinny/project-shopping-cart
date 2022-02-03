function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section
    .appendChild(
      createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'),
    )
    .addEventListener('click', colocaItemNoCart);

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  console.log(event.target.parentNode.innerHTML);
  event.target.parentNode.removeChild(event.target);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const criaCards = async () => {
  const sectionItems = document.getElementsByClassName('items')[0];
  const { results } = await fetchProducts('computador');
  results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    sectionItems.appendChild(createProductItemElement({ sku, name, image }));
  });
};
criaCards();

const colocaItemNoCart = async (event) => {
  // console.log(event.target.parentNode);
  // const itemId = event.target.siblings('.item__sku');
  const itemId = getSkuFromProductItem(event.target.parentNode);
  const { id: sku, title: name, price: salePrice } = await fetchItem(itemId);

  const cartItems = document.getElementsByClassName('cart__items')[0];
  cartItems.appendChild(createCartItemElement({ sku, name, salePrice }));
};

window.onload = () => {};
