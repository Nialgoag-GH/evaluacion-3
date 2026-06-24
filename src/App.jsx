import { useState } from "react";
import Datos from "./assets/Datos";
import Resultado from "./assets/Resultado";
import "./App.css"

function App() {
  const [producto, setProducto] = useState(null);

  return (
    <>
      <div className="box">
        <h1>Calculadora de Ventas</h1>
        <Datos onAgregar={setProducto} />
        <Resultado producto={producto} />
      </div>
    </>
  );
}

export default App;