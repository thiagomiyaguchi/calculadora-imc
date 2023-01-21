import { useState } from 'react';
import Botao from './components/Botao';
import CampoTexto from './components/CampoTexto';
import Container from './components/Container';
import Tabela from './components/Tabela';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const registraPeso = (e) => {
    setPeso(e.target.value.slice(0, 4));
  };

  const registraAltura = (e) => {
    setAltura(e.target.value.slice(0, 4));
  };

  const calcular = () => {
    setImc(peso * altura ** 2);
  };

  return (
    <div className='App'>
      <Container>
        <div>
          <h1>Calculadora de IMC</h1>
          <CampoTexto
            valor={peso}
            label={'Digite o seu peso  '}
            fn={registraPeso}
          />
          <CampoTexto
            label={'Digite a sua altura'}
            valor={altura}
            fn={registraAltura}
          />
          <Botao fn={calcular} />
        </div>
        <Tabela imc={imc} />
      </Container>
    </div>
  );
}

export default App;
