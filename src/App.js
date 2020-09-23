import React from 'react';
import Estado from './charts/localizacao/estado';
import Moradia from './charts/localizacao/moradia';
import Trabalha from './charts/trabalho/trabalha';
import Trabalhou from './charts/trabalho/trabalhou';

function App() {
  return (
    <div className="row">   
      <Estado/>
      <Moradia/>
      <Trabalhou/>
      <Trabalha/>
    </div>
  );
}

export default App;
