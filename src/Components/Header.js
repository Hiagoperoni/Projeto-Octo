import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
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

  const home = () => {
    return navigate("/");
  }
  return (
    <header className="container w-screen flex justify-center bg-sky-500 shadow-xl">
      <nav className="flex justify-between text-2xl space-x-10">
        <button type="button" onClick={ home }>Home</button>
        <button type="button" onClick={ consultarClima }>Consultar Clima</button>
        <button type="button" onClick={ consultarCep }>Consultar CEP</button>
        <button type="button" onClick={ form }>Formulário</button>
      </nav>
    </header>
  )
}

export default Header;