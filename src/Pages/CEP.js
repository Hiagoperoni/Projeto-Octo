import React, { useState } from 'react';
import consultarCep from '../API/consultaCep';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

function Cep() {
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [rua, setRua] = useState('');
  const [ceps, setCeps] = useState([]);

  const handleEstado = ({ target }) => {
    setEstado(target.value);
  }

  const handleCidade = ({ target }) => {
    setCidade(target.value);
  }

  const handleRua = async ({ target }) => {
    setRua(target.value);
    const fetchCeps = await consultarCep(estado, cidade, rua);
    setCeps(fetchCeps)
  }

  return (
    <main>
      <Header />
      <div className="container mt-8 flex flex-col justify-around items-center space-y-12">
        <h1 h2 className="text-3xl">
          Consulte seu CEP!
        </h1>
        <form className="container mt-8 flex flex-col justify-around items-center space-y-12">
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className="text-2xl">Digite seu Estado: (ex.: DF, SP, RJ...)</p>
            <input type="text" id='uf' onChange={ handleEstado } className="rounded-md shadow-md shadow-slate-600 h-10 pl-2"/>
          </label>
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className="text-2xl">Digite sua Cidade: (ex.: Brasília, Rio de Janeiro...)</p>
            <input type="text" id='cidade' onChange={ handleCidade } className="rounded-md shadow-md shadow-slate-600 h-10 pl-2"/>
          </label>
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className="text-2xl">Digite sua Rua ou Logradouro: (ex.: Lago Norte, Lago Sul...)</p>
            <input type="text" id='rua' onChange={ handleRua } className="rounded-md shadow-md shadow-slate-600 h-10 pl-2"/>
          </label>
          <h3 className="text-3xl">Seu CEP é:</h3>
          <div className='container mt-8 flex flex-col justify-around items-center space-y-3 shadow-lg shadow-slate-500 w-auto rounded-lg p-2 bg-cyan-500'>
            {
              ceps.length > 0 && ceps.map((cadaCep) => <li className="text-2xl">{ cadaCep }</li>)
            }
          </div>
        </form>
      </div>
      <Footer />
    </main>
  )
}

export default Cep;