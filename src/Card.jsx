//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({ usuario, color }) {
  return (
    <div>
      <h2>Card</h2>
      <span>{usuario}</span>
      <br />
      <br />
      <span>{color}</span>
    </div>
  );
}

export default Card;
