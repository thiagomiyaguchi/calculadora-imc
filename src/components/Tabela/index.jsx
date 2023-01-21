import('./tabela.css');

function Tabela(props) {
  return (
    <>
      <div className='tabela'>
        <h4 className='imc'>{props.imc}</h4>
        <ul>
          <li>Abaixo de 18,5</li>
          <li>Entre 18,5 e 24,9</li>
          <li>Entre 25 e 29,9</li>
          <li>Acima de 30</li>
        </ul>

        <ul>
          <li>Baixo Peso</li>
          <li>Normal</li>
          <li>Sobrepeso</li>
          <li>Obesidade</li>
        </ul>
      </div>
    </>
  );
}

export default Tabela;
