function Resultado({ producto }) {
  if (!producto) return null;

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