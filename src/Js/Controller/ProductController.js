import Product from '../Model/Product';
import { fetchProduct, fetchProductsList } from '../../helpers/fetchFunctions';
import { createCartProductElement, createProductElement }
  from '../../helpers/shopFunctions';

const productsContainer = document.querySelector('.products');

export default class ProductController {
  async getAllproducts(query) {
    try {
      ProductController.setPreLoader();
      const data = await fetchProductsList(query);
      if (data.length === 0) {
        throw new Error('Algum erro ocorreu, recarregue a página e tente novamente');
      }
      data.forEach((product) => {
        ProductController.createNewProductElement(product);
      });
    } catch (error) {
      ProductController.createNewErrorElement(error);
    } finally {
      ProductController.removePreLoader();
    }
  }

  getCurrentStatus() {
    // Operação para recuperar os itens salvos no localstorage no carrinho
    const storeditemsString = localStorage.getItem('cartProducts');
    const storedItemsIds = JSON.parse(storeditemsString);
    const cartList = document.querySelector('.cart__products');
    if (storeditemsString) {
      storedItemsIds.forEach(async (id) => {
        const selected = await fetchProduct(id);
        const storedCartProduct = createCartProductElement(selected);
        cartList.appendChild(storedCartProduct);
      });
    }

    // Operação para gerenciar o valor do preço total
    const totalPriceContainer = document.querySelector('.total-price');
    const savedTotalPrice = localStorage.getItem('totalPrice');
    if (!savedTotalPrice) {
      totalPriceContainer.innerText = '0,00';
    } else {
      totalPriceContainer.innerText = savedTotalPrice;
    }
  }

  static setPreLoader() {
    const preLoader = document.createElement('p');
    preLoader.classList.add('loading');
    preLoader.innerText = 'Carregando...';
    productsContainer.appendChild(preLoader);
  }

  static removePreLoader() {
    const preLoader = document.querySelector('.loading');
    preLoader.remove();
  }

  static createNewProductElement(product) {
    const { id, title, price, thumbnail } = product;
    const newProduct = new Product(id, title, price, thumbnail);
    const element = createProductElement(newProduct);
    productsContainer.appendChild(element);
  }

  static createNewErrorElement(error) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error');
    errorElement.innerText = error.message;
    productsContainer.appendChild(errorElement);
  }
}
