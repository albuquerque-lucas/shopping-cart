import { searchCep } from './helpers/cepFunctions';
import ProductController from './Js/Controller/ProductController';
import './style.css';

const cepBtn = document.querySelector('.cep-button');
cepBtn.addEventListener('click', searchCep);

const productHandler = new ProductController();
productHandler.getCurrentStatus();
productHandler.getAllproducts('computador');
