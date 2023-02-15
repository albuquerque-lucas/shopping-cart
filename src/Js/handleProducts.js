import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import { createProductElement,
  createCustomElement,
  createCartProductElement } from '../helpers/shopFunctions';
import { saveCartID } from '../helpers/cartFunctions';
import removeLoadingLine from './removeLine';

const productsContainer = document.querySelector('.products');

export const addPreLoader = () => {
  const preLoader = document.createElement('div');
  preLoader.classList.add('loading');
  preLoader.innerText = 'carregando...';
  productsContainer.appendChild(preLoader);
};

const selectProduct = (list) => {
  const cartContainer = document.querySelector('.cart__products');
  list.forEach((product) => {
    const itemId = product.querySelector('.product__id').textContent;
    const btn = product.querySelector('.product__add');
    btn.addEventListener('click', () => {
      const selected = fetchProduct(itemId);
      selected
        .then((item) => {
          saveCartID(item.id);
          const itemObj = {
            id: item.id,
            title: item.title,
            price: item.price,
            pictures: item.pictures,
          };
          const itemCart = createCartProductElement(itemObj);
          cartContainer.appendChild(itemCart);
        });
    });
  });
};

export const handleProducts = () => {
  addPreLoader();

  fetchProductsList('computador').then((data) => {
    data.forEach((element) => {
      const div = createProductElement(element);
      productsContainer.appendChild(div);
    });
    removeLoadingLine();
    const products = document.querySelectorAll('.product');
    selectProduct(products);
  })
    .catch((error) => {
      console.log('Entrou');
      removeLoadingLine();
      const errorText = 'Algum erro ocorreu, recarregue a página e tente novamente';
      error.message = errorText;
      productsContainer.appendChild(createCustomElement('p', 'error', error.message));
    });
};
