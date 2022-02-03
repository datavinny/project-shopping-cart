const fetchItem = async (ItemID) => {
  try {
    return await fetch(`https://api.mercadolibre.com/items/${ItemID}`)
      .then((response) => response.json())
      .then((data) => data);
  } catch (error) {
    throw new Error('You must provide an url');
  }
};
// fetchItem('MLB1341706310').then(console.log);

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
