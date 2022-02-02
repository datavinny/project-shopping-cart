const fetchItem = async (ItemID) => {
  return await fetch(`https://api.mercadolibre.com/items/${ItemID}`)
    .then((response) => response.json())
    .then((data) => data);
};
//fetchItem('MLB1341706310').then(console.log);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
