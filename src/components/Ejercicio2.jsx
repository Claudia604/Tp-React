// Modificar el componente anterior y enviar mediante props el valor “My friend” de manera que el mensaje quede de
// la siguiente forma: Hello my friend!

const Ejercicio2 = (props) => {
  return (
    <section>
      <h2>Ejercicio 2:</h2>
      <p>Hello {props.valor}</p>
    </section>
  );
};

export default Ejercicio2;
