import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="tarjeta">
      <h1 className="titulo">Contador: {count}</h1>
      <div className="botones">
        <button className="boton" onClick={increment}>
          Incrementar
        </button>
        <button className="boton" onClick={decrement}>
          Decrementar
        </button>
        <button className="boton" onClick={reset}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}

export default Counter;
