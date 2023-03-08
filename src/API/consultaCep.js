const consultarCep = async (uf, cidade, rua) => {
  const endpoint = `https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
  if (!data) {
    return "Local não encontrado"
  }
  const allCeps = data.map((cadaLocal) => cadaLocal.cep);
  return allCeps;
}

export default consultarCep;