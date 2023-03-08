const API_KEY = '909e2e44ef177981955f278d2f138fec';


const consultarClima = async (cidade) => {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&lang=pt&units=metric`
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
  const weatherObj = {
    cidade: data.name,
    tempAtual: data.main.temp,
    sensacaoTerm: data.main.feels_like,
    tempMin: data.main.temp_min,
    tempMax: data.main.temp_max,
    umidade: data.main.humidity,
    clima: data.weather[0].description,
  }
  return weatherObj;
}

export default consultarClima;