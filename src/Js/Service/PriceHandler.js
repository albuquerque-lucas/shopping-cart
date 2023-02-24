export default class PriceHandler {
  pricesArray = [];

  calculateTotal(operation, priceElement) {
    // const totalPrice = document.querySelector('.total-price');
    // const pricesList = document.querySelectorAll('.product__price__value');
    // pricesList.forEach((item) => {
    //   pricesArray.push(item.innerText);
    // });
    // const mapped = this.pricesArray.map((item) => Numver(item));
    // const result = mapped.reduce((acc, number) => acc + number, 0).toFixed(2);
    // totalPrice.innerText = result;
    const totalPrice = document.querySelector('.total-price');
    const productPriceValue = priceElement
      .querySelector('.product__price__value').innerText;

    const numberPriceValue = parseFloat(productPriceValue.replace(',', '.'));
    let numberTotalPrice = parseFloat(totalPrice.innerText.replace(',', '.'));
    if (operation === 'sum') {
      numberTotalPrice += numberPriceValue;
    } else if (operation === 'sub') {
      numberTotalPrice -= numberPriceValue;
    }
    let fixedTotal = numberTotalPrice.toFixed(2);
    if (fixedTotal < 0) fixedTotal = 0.00;
    totalPrice.innerText = fixedTotal;
    localStorage.setItem('totalPrice', fixedTotal);
  }
}
