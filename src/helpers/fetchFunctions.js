export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  if (!query) throw new Error('Termo de busca não informado');
  const searchLink = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(searchLink);
  const data = await response.json();
  const resultList = data.results;
  return resultList;
};
