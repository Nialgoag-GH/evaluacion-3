function Resultado({ producto }) {
  if (!producto) {
  return <p>No se ha ingresado ningún producto.</p>;
}

const errores = [];

if (!producto.nombre) {
  errores.push("Falta el nombre del producto.");
}

if (!producto.valor) {
  errores.push("Falta el valor del producto.");
}

if (!producto.cantidad) {
  errores.push("Falta la cantidad del producto.");
}

if (errores.length > 0) {
  return (
    <div>
      {/*<h2>Errores</h2>*/}
      {errores.map((error, index) => (
        <p key={index} style={{ color: "yellow" }}>
          {error}
        </p>
      ))}
    </div>
  );
}

  const subtotal = producto.valor * producto.cantidad;
  const tieneDescuento = producto.cantidad >= 3;

  const precioFinal = tieneDescuento
    ? subtotal * 0.9
    : subtotal;

  return (
    <div>
      {/*<h2>Resultado</h2>*/}

      <p>Producto: {producto.nombre}</p>

      <p>Precio Final: ${precioFinal.toFixed(0)}</p>

      {tieneDescuento ? (
        <p style={{ color: "green" }}>
          Descuento del 10% aplicado
        </p>
      ) : (
        <p style={{ color: "red" }}>
          No aplica descuento
        </p>
      )}
    </div>
  );
}

export default Resultado;