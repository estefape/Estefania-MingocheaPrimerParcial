import { useState } from "react";
import Card from './Card';
function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs

  const [mensajeDeError, setMensajeDeError] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [color, setColor] = useState('');

  const handlerChangeUsuario = (e) => {
    setUsuario(e.target.value)
  }
  
  const handlerChangeColor = (e) => {
    setColor(e.target.value)
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (usuario.trim().length > 3 && color.length <= 6) {
      console.log("handlerSubmit", usuario, color);
    } else {
      setMensajeDeError(true)
    }
  }
  
  return (
    <div className="contenedor">
      <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          name="usuario"
          value={usuario}
          onChange={handlerChangeUsuario}/>
        <br />
        <br />
        <label htmlFor="color">Color</label>
        <input
          type="text"
          name="Color"
          value={color}
          onChange={handlerChangeColor}
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      {(mensajeDeError) ? 
        <p>"Ocurrio un error: verifica los datos ingresados!!!"</p> 
        : <Card
          usuario={usuario}
          color={color}
        />
      }  
    </div>
    </div>
  );
}

export default App;
