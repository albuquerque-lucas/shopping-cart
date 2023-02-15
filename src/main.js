import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const cepBtn = document.querySelector('.cep-button');
const productsContainer = document.querySelector('.products');

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

addPreLoader();
fetchProductsList('computador').then((data) => {
  data.forEach((element) => {
    const div = createProductElement(element);
    productsContainer.appendChild(div);
  });
  removePreLoader();
});

cepBtn.addEventListener('click', searchCep);
