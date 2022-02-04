const carrinho = document.getElementsByClassName('cart__items')[0];
const sectionItems = document.getElementsByClassName('items')[0];
const btn = document.getElementsByClassName('empty-cart')[0];

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

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.parentNode.removeChild(event.target);

  const itensCarrinho = carrinho.innerHTML;
  saveCartItems(itensCarrinho);
}

const limpaTodoCarrinho = () => {
  carrinho.innerHTML = '';
  localStorage.removeItem('cartItems');
};

btn.addEventListener('click', limpaTodoCarrinho);

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const colocaItemNoCart = async (event) => {
  const itemId = getSkuFromProductItem(event.target.parentNode);
  const { id: sku, title: name, price: salePrice } = await fetchItem(itemId);

  carrinho.appendChild(createCartItemElement({ sku, name, salePrice }));

  const itensCarrinho = carrinho.innerHTML;
  saveCartItems(itensCarrinho);
};

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

const criaCards = async () => {
  const { results } = await fetchProducts('computador');
  results.forEach(({ id: sku, title: name, thumbnail: image }) => {
    sectionItems.appendChild(createProductItemElement({ sku, name, image }));
  });
};

const arrItemsSalvos = () => {
  carrinho.childNodes.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

criaCards();
carrinho.innerHTML = getSavedCartItems('cartItems');
arrItemsSalvos();

window.onload = () => {};
