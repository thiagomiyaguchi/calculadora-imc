import('./botao.css');

function Botao(props) {
  return <button onClick={props.fn}>Calcular</button>;
}

export default Botao;
