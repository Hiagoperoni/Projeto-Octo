import React from 'react';

function ClimaComp(props) {
  const { cidade, tempAtual, sensacaoTerm, tempMin, tempMax, umidade, clima } = props.props;
  return (
    <section className='container mt-8 flex flex-col justify-around items-center space-y-3 shadow-lg shadow-slate-500 w-auto rounded-lg p-2 bg-cyan-500'>
      <h2 className="text-3xl">
        Tempo Atual em {cidade}
      </h2>
      <p className="text-2xl">
        Tempo Atual: {clima}
      </p>
      <p className="text-2xl">
        Temperatura Atual: {tempAtual}ºC
      </p>
      <p className="text-2xl">
        Sensação Térmica: {sensacaoTerm}ºC
      </p>
      <p className="text-2xl">
        Temperatura Mínima: {tempMin}ºC
      </p>
      <p className="text-2xl">
        Temperatura Máxima: {tempMax}ºC
      </p>
      <p className="text-2xl">
        Umidade: {umidade}%
      </p>
    </section>
  )
}

export default ClimaComp;