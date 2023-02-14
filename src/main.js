import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';
import './style.css';

const cepBtn = document.querySelector('.cep-button');
const productsContainer = document.querySelector('.products');

cepBtn.addEventListener('click', searchCep);

const products = await fetchProductsList('computador');
const productIds = products.map((item) => item.id);
const productTitles = products.map((item) => item.title);
const productThumbnails = products.map((item) => item.thumbnail);
const productPrices = products.map((item) => item.price);

products.forEach((product) => {
  const currentProduct = {
    id: product.id,
    title: product.title,
    thumbnail: product.thumbnail,
    price: product.price,
  };

  const element = createProductElement(currentProduct);
  productsContainer.appendChild(element);
});
// for (let i = 0; i < testeProduct.length; i += 1) {
//   createProductElement();
// }

// console.log(products);
// console.log(productIds, productPrices);
