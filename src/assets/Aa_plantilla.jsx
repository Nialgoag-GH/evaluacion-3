import { useState, useEffect } from "react";

function ComponentName({
  title = "",
  data = null,
  onSubmit = () => {},
}) {
  // ===== State =====
  const [formData, setFormData] = useState({
    nombre: "",
    valor: 0,
    cantidad: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // ===== Effects =====
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  useEffect(() => {
    console.log("Form updated:", formData);
  }, [formData]);

  // ===== Handlers =====
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      value,
    });
  };

  const handleSubmit = () => {
    setError("");

    if (!formData.nombre) {
      setError("Nombre requerido");
      return;
    }

    onSubmit(formData);
    setSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      valor: 0,
      cantidad: 0,
    });

    setError("");
    setSuccess(false);
  };

  // ===== Calculated Values =====
  const subtotal = formData.valor * formData.cantidad;

  // ===== Render =====
  return (
    <div className="component-container">
      <h2>{title}</h2>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      {success && (
        <p style={{ color: "green" }}>
          Operación exitosa
        </p>
      )}

      <label htmlFor="nombre">Nombre:</label>
      <input
        id="nombre"
        name="nombre"
        type="text"
        value={formData.nombre}
        onChange={handleChange}
      />

      <label htmlFor="valor">Valor:</label>
      <input
        id="valor"
        name="valor"
        type="number"
        value={formData.valor}
        onChange={handleChange}
      />

      <label htmlFor="cantidad">Cantidad:</label>
      <input
        id="cantidad"
        name="cantidad"
        type="number"
        value={formData.cantidad}
        onChange={handleChange}
      />

      <p>Subtotal: ${subtotal}</p>

      <button onClick={handleSubmit}>
        Enviar
      </button>

      <button onClick={handleReset}>
        Limpiar
      </button>

      {loading && <p>Cargando...</p>}
    </div>
  );
}

export default ComponentName;