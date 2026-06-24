import { useState } from "react";

function Datos({ onAgregar }) {
  const [producto, setProducto] = useState({
    nombre: "",
    valor: "",
    cantidad: "",
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div>
        <label htmlFor="nombre">Nombre: </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="valor">Valor: </label>
        <input
          id="valor"
          type="number"
          name="valor"
          min={1}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="cantidad">Cantidad: </label>
        <input
          id="cantidad"
          type="number"
          name="cantidad"
          min={1}
          onChange={handleChange}
        />
      </div>

      <button
        onClick={() =>
          onAgregar({
            ...producto,
            valor: Number(producto.valor),
            cantidad: Number(producto.cantidad),
          })
        }
      >
        Resultado
      </button>
    </>
  );
}

export default Datos;