import { createCustomElement } from './shopFunctions';
import removeLoadingLine from '../Js/removeLine';

export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  if (!query) throw new Error('Termo de busca não informado');
  try {
    const searchLink = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(searchLink);
    const data = await response.json();
    const resultList = data.results;
    return resultList;
  } catch (error) {
    removeLoadingLine();
    const productsContainer = document.querySelector('.products');
    const errorText = 'Algum erro ocorreu, recarregue a página e tente novamente';
    error.message = errorText;
    productsContainer.appendChild(createCustomElement('p', 'error', error.message));
  }
};
