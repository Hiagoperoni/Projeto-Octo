import React, { useState } from 'react';
import consultarClima from '../API/consultaClima';
import ClimaComp from '../Components/Clima';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Clima() {
  const [cidade, setCidade] = useState('');
  const [dados, setDados] = useState(0);

  const handleCity = ({ target }) => {
    setCidade(target.value);
  }

  const fetchData = async () => {
    return setDados(await consultarClima(cidade))
  }
  
  return (
    <main>
      <Header />
      <div className='container mt-8 flex flex-col justify-around items-center space-y-12'>
        <form className='container mt-8 flex flex-col justify-around items-center space-y-12'>
        <h1 className='text-5xl'>Consulte o Clima na sua Cidade!</h1>
          <label className='container mt-8 flex flex-col justify-around items-center space-y-5'>
            <p className='text-2xl'>Digite a Cidade que quer pesquisar:</p>
            <input type="text" id="cidade" onChange={ handleCity } className="rounded-md shadow-md shadow-slate-600 h-10 pl-2"/>
          </label>
          <button type="button" onClick={ fetchData } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Pesquisar
          </button>
          {
            dados !== 0 && <ClimaComp props={ dados } />
          }
        </form>
      </div>
      <Footer />
    </main>
  )
}

export default Clima;