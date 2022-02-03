const fetchProducts = async (query) => {
  try {
    return await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
    ).then((response) => response.json());
    // .then((data) => data);
  } catch (error) {
    throw new Error('You must provide an url');
  }
};
// fetchProducts('computador').then(console.log);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
