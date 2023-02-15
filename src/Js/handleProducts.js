import { fetchProductsList } from '../helpers/fetchFunctions';
import { createProductElement } from '../helpers/shopFunctions';
import removeLoadingLine from './removeLine';

const productsContainer = document.querySelector('.products');

export const addPreLoader = () => {
  const preLoader = document.createElement('div');
  preLoader.classList.add('loading');
  preLoader.innerText = 'carregando...';
  productsContainer.appendChild(preLoader);
};

export const handleProducts = () => {
  addPreLoader();

  fetchProductsList('computador').then((data) => {
    data.forEach((element) => {
      const div = createProductElement(element);
      productsContainer.appendChild(div);
    });
    removeLoadingLine();
  });
};
