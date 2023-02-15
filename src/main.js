import { searchCep } from './helpers/cepFunctions';
import { handleProducts } from './Js/handleProducts';
import './style.css';

const cepBtn = document.querySelector('.cep-button');

handleProducts();

cepBtn.addEventListener('click', searchCep);
