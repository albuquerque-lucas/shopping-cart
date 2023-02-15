import { searchCep } from './helpers/cepFunctions';
import { fetchProduct } from './helpers/fetchFunctions';
import { handleProducts } from './Js/handleProducts';
import './style.css';

const cepBtn = document.querySelector('.cep-button');

handleProducts();
fetchProduct('MLB1405519561');

cepBtn.addEventListener('click', searchCep);
