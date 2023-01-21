import('./campotexto.css');

function CampoTexto(props) {
  return (
    <div className='legenda-campo'>
      <label htmlFor=''>{props.label}</label>
      <input type='number' value={props.valor} onChange={props.fn} />
    </div>
  );
}

export default CampoTexto;
