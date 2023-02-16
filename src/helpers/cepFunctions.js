export const getAddress = async (cep) => {
  const api1 = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const api2 = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`);
  try {
    const result = await Promise.any([api1, api2]).then((data) => data.json());
    const final = await result;
    return final;
  } catch (error) {
    return error.message;
  }
};

export const searchCep = async () => {
  const input = document.querySelector('.cep-input');
  const location = await getAddress(input.value);
  const cartAddress = document.querySelector('.cart__address');
  const { address, district, city, state } = location;
  if (district) {
    cartAddress.innerHTML = `${address} - ${district} - ${city} - ${state}`;
  } else {
    cartAddress.innerHTML = 'CEP não encontrado';
  }
};
