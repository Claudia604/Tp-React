import "bootstrap/dist/css/bootstrap.min.css";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";

function App() {
  return (
    <>
      <h1>Tp React</h1>
      <Ejercicio1 />
      <Ejercicio2 valor="my friend!" />
    </>
  );
}

export default App;
