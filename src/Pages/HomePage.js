import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';

function HomePage() {
  let navigate = useNavigate();

  const consultarCep = () => {
    return navigate("/cep");
  }

  const consultarClima = () => {
    return navigate("/clima");
  }

  const form = () => {
    return navigate("/form");
  }
  return(
    <main className="container mt-5 flex flex-col justify-around items-center space-y-1">
      <h1 className="text-6xl">
        Bem Vindo(a) ao meu Teste!
      </h1>
      <h3 className="text-3xl">
        Abaixo você pode escolher qual teste quer visualizar!
      </h3>
      <div className="space-x-10"> 
        <button type="button" onClick={ consultarClima } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Consultar Clima
        </button>
        <button type="button" onClick={ consultarCep } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Consultar CEP
        </button>
        <button type="button" onClick={ form } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Formulário
        </button>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage;