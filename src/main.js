import { searchCep } from './helpers/cepFunctions';
// import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import './style.css';

document.querySelector('.cep-button').addEventListener('click', searchCep);
