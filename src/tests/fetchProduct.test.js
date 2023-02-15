import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('Testa se fetch é chamada em fetchProduct', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  })

  it('Ao chamar a função com o argumento MLB1405519561, deve retornar um objeto igual a product', async () => {
    expect(await fetchProduct('MLB1405519561')).toEqual(product);
  })

  it('Caso não seja passado nenhum argumento para a função, o retorno deve ser uma mensagem de erro', async () => {
    await expect(fetchProduct()).rejects.toThrow('ID não informado');
  })
});
