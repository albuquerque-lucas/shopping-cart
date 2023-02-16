import { searchCep } from './helpers/cepFunctions';
import { fetchProduct } from './helpers/fetchFunctions';
import { handleProducts, refreshSum } from './Js/handleProducts';
import { getSavedCartIDs } from './helpers/cartFunctions';
import { createCartProductElement } from './helpers/shopFunctions';
import './style.css';

const cepBtn = document.querySelector('.cep-button');
const cartContainer = document.querySelector('.cart__products');

const getStoredCart = () => {
  const storedIds = getSavedCartIDs();
  storedIds.forEach((item) => {
    const product = fetchProduct(item);
    product.then((data) => {
      const itemObj = {
        id: data.id,
        title: data.title,
        price: data.price,
        pictures: data.pictures,
      };
      const itemCart = createCartProductElement(itemObj);
      cartContainer.appendChild(itemCart);
    });
  });
};

// getStoredSum(display);

getStoredCart();
refreshSum();
handleProducts();
// deleteBtnHandler();
cepBtn.addEventListener('click', searchCep);
