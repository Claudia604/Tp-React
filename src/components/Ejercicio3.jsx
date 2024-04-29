// Modificar el programa anterior agregando al componente un state con la clave msj: “(from changed state)”, además
// agregar un botón al presionar este botón (onClick), el state de la clave msj se debe mostrar por pantalla de la
// siguiente manera:
import { useState } from "react";

const Ejercicio3 = (props) => {
  const [msj, setMsj] = useState("Hello my friend!");

  return (
    <section>
      <h2>Ejercicio 3:</h2>
      <p>{msj}</p>
      <button
        className="btn btn-primary me-2"
        onClick={() => setMsj("Hello my friend (from changed state)!")}
      >
        Msj
      </button>
    </section>
  );
};

export default Ejercicio3;
