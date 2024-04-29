import "bootstrap/dist/css/bootstrap.min.css";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";

function App() {
  return (
    <>
      <h1>Tp React</h1>
      <Ejercicio1 />
      <Ejercicio2 valor="my friend!" />
      <Ejercicio3 />
    </>
  );
}

export default App;
