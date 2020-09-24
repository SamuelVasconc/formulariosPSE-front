import React from 'react';
import Genero from './charts/diversidade/genero';
import Etnia from './charts/diversidade/etnia';
import Trabalha from './charts/trabalho/trabalha';
import Trabalhou from './charts/trabalho/trabalhou';
import Renda from './charts/renda/renda';
import Idade from './charts/idade/idade';

function App() {
  return (
    <div className="row">   
      <Genero/>
      <Etnia/>
      <Trabalhou/>
      <Trabalha/>
      <Renda/>
      <Idade/>
    </div>
  );
}

export default App;
