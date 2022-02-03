require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('1.Teste se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function');
  });
});
