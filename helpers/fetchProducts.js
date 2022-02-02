const fetchProducts = async (QUERY) => {
  return await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`)
    .then((response) => response.json())
    .then(({ results }) => results);
};
// fetchProducts('computador').then(console.log);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
