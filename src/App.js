import React from 'react';
import Genero from './charts/diversidade/genero';
import Etnia from './charts/diversidade/etnia';
import Trabalha from './charts/trabalho/trabalha';
import Trabalhou from './charts/trabalho/trabalhou';
import Renda from './charts/renda/renda';

function App() {
  return (
    <div className="row">   
      <Genero/>
      <Etnia/>
      <Trabalhou/>
      <Trabalha/>
      <Renda/>
    </div>
  );
}

export default App;
