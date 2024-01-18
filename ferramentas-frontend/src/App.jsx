import React from 'react';

const titulo = <h1>Esse é um título</h1>;

const App = () => {
  const nome = 'Miguel';
  const ativo = true;

  function mostrarNome(sobrenome) {
    return 'Miguel' + sobrenome;
  }

  const carro = {
    marca: 'Ford',
    rodas: '4',
  };

  const estiloP = {
    color: 'blue',
    fontSize: '2rem',
  };

  return (
    <>
      {titulo}
      <p>
        {true ? 'asasa' : 'sdasdas'} - {10}
        {mostrarNome('Mendes')}
      </p>
      <p style={estiloP}>{new Date().getFullYear()}</p>
      <p style={estiloP}>{carro.marca}</p>
      <p style={estiloP}>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{nome}</p>
    </>
  );
};

export default App;
