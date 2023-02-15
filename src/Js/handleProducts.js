import { fetchProductsList } from '../helpers/fetchFunctions';
import { createProductElement } from '../helpers/shopFunctions';

export const productsContainer = document.querySelector('.products');

const addPreLoader = () => {
  const preLoader = document.createElement('div');
  preLoader.classList.add('loading');
  preLoader.innerText = 'carregando...';
  productsContainer.appendChild(preLoader);
};
const removePreLoader = () => {
  const preLoader = document.querySelector('.loading');
  preLoader.remove();
};

export const handleProductsLoading = () => {
  addPreLoader();
  fetchProductsList('computador').then((data) => {
    data.forEach((element) => {
      const div = createProductElement(element);
      productsContainer.appendChild(div);
    });
    removePreLoader();
  });
};
