const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  // it('1.Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
  //   const response = saveCartItems('<ol><li>Item</li></ol>');
  //   expect(response).toBeCalled();
  // });
  // it('2.Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros.', async () => {
  //   const response = saveCartItems('<ol><li>Item</li></ol>');
  //   expect(response).toBeCalled();
  // });
  fail('Teste vazio');
});
