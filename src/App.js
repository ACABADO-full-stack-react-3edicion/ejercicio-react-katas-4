import { useState } from "react";

function App() {
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
  const [numeroSeleccionado, setNumeroSeleccionado] = useState(null);
  const incrementa = () => {
    if (numeros[numeros.length - 1] === 20) {
      return;
    }
    setNumeros(numeros.map((numero) => numero + 1));
  };
  const decrementa = () => {
    if (numeros[0] === 0) {
      return;
    }
    setNumeros(numeros.map((numero) => numero - 1));
  };
  const pintaNumero = (numero) => {
    setNumeroSeleccionado(numero);
  };
  return (
    <>
      <ul className="numeros">
        <li onClick={decrementa}>{"<<"}</li>
        {numeros.map((numero) => (
          <li key={numero} onClick={() => pintaNumero(numero)}>
            {numero}
          </li>
        ))}
        <li onClick={incrementa}>{">>"}</li>
      </ul>
      <div className="numero">{numeroSeleccionado}</div>
    </>
  );
}

export default App;
