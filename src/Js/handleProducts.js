import { fetchProduct, fetchProductsList } from '../helpers/fetchFunctions';
import { createProductElement,
  createCustomElement,
  createCartProductElement } from '../helpers/shopFunctions';
import { saveCartID } from '../helpers/cartFunctions';
import removeLoadingLine from './removeLine';

const productsContainer = document.querySelector('.products');
export const display = document.querySelector('.total-price');

export const getStoredSum = (container) => {
  const storedCount = Number(localStorage.getItem('shoppingCartSum'));
  container.innerHTML = storedCount;
};
export const refreshSum = () => {
  getStoredSum(display);
  const prices = document.querySelectorAll('.cart__product .product__price__value');
  const pricesList = [];
  prices.forEach((item) => {
    pricesList.push(item.innerText);
  });
  const mapped = pricesList.map((item) => Number(item));
  const result = mapped.reduce((acc, number) => acc + number, 0).toFixed(2);
  localStorage.setItem('shoppingCartSum', result);
  display.innerText = result;
};

// export const deleteBtnHandler = () => {
//   const deleteBtn = document.querySelectorAll('.cart__products .cart__product');
//   // deleteBtn.forEach((button) => {
//   //   button.addEventListener('click', () => {
//   //     console.log('clicado');
//   //     refreshSum();
//   //   });
//   // });
//   console.log(deleteBtn);
// };

export const addPreLoader = () => {
  const preLoader = document.createElement('div');
  preLoader.classList.add('loading');
  preLoader.innerText = 'carregando...';
  productsContainer.appendChild(preLoader);
};

const selectProduct = (list) => {
  const cartContainer = document.querySelector('.cart__products');
  list.forEach((product) => {
    const itemId = product.querySelector('.product__id').textContent;
    const btn = product.querySelector('.product__add');
    btn.addEventListener('click', () => {
      const selected = fetchProduct(itemId);
      selected
        .then((item) => {
          saveCartID(item.id);
          const itemObj = {
            id: item.id,
            title: item.title,
            price: item.price,
            pictures: item.pictures,
          };
          const itemCart = createCartProductElement(itemObj);
          cartContainer.appendChild(itemCart);
          refreshSum();
        });
    });
  });
};

export const handleProducts = () => {
  addPreLoader();
  fetchProductsList('computador').then((data) => {
    data.forEach((element) => {
      const div = createProductElement(element);
      productsContainer.appendChild(div);
    });
    removeLoadingLine();
    const products = document.querySelectorAll('.product');
    selectProduct(products);
    refreshSum();
  })
    .catch((error) => {
      console.log('Entrou');
      removeLoadingLine();
      const errorText = 'Algum erro ocorreu, recarregue a página e tente novamente';
      error.message = errorText;
      productsContainer.appendChild(createCustomElement('p', 'error', error.message));
    });
};
