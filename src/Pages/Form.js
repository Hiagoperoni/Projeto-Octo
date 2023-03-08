import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Form() {
  const [nameUser, setNameUser] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [phoneUser, setPhoneUser] = useState('');
  const [message, setMessage] = useState('');

  const handleName = ({ target }) => {
    setNameUser(target.value);
  }

  const handleEmail = ({ target }) => {
    setEmailUser(target.value);
  }

  const handlePhone = ({ target }) => {
    setPhoneUser(target.value);
  }

  const handleMessage = ({ target }) => {
    setMessage(target.value);
  }

  const submitButton = () => {
    const requestObj = {
      Nome: nameUser,
      Email: emailUser,
      Telefone: phoneUser,
      Mensagem: message,
    }
    console.log(requestObj);
    return null;
  }


  return (
    <main>
      <Header />
      <div className="container mt-8 flex flex-col justify-around items-center space-y-12">
        <h1 className='text-3xl'>Entre em Contato Conosco!</h1>
        <form className="container mt-8 flex flex-col justify-around items-center space-y-12">
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className='text-2xl'>Nome Completo:</p>
            <input
              type="text" 
              id='nome'
              placeholder='Nome Completo'
              onChange={ handleName }
              className="rounded-md shadow-md shadow-slate-600 h-9 pl-2"
            />
          </label>
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className='text-2xl'>E-mail:</p>
            <input
              type="email"
              id='email'
              placeholder='E-mail'
              onChange={ handleEmail }
              className="rounded-md shadow-md shadow-slate-600 h-9 pl-2"
            />
          </label>
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className='text-2xl'>Telefone para Contato:</p>
            <input
              type="text"
              id='telefone'
              placeholder='(xx)xxxxx-xxxx'
              onChange={ handlePhone }
              className="rounded-md shadow-md shadow-slate-600 h-9 pl-2"
            />
          </label>
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className='text-2xl'>Mensagem:</p>
            <textarea
              id='mensagem'
              placeholder='Digite sua solicitação'
              onChange={ handleMessage }
              className="rounded-md shadow-md shadow-slate-600 h-12 pl-2"
            />
          </label>
          <label className="container mt-8 flex flex-col justify-around items-center space-y-3">
            <p className='text-2xl'>Arquivo</p>
            <input
              type="file"
              id='arquivo'
            />
          </label>
          <button type='button' onClick={ submitButton } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Enviar
          </button>
        </form>
      </div>
      <Footer />
    </main>
  )
}

export default Form;