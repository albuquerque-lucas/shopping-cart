import { searchCep } from './helpers/cepFunctions';
import { handleProductsLoading } from './Js/handleProducts';
import './style.css';

const cepBtn = document.querySelector('.cep-button');

handleProductsLoading();

cepBtn.addEventListener('click', searchCep);
