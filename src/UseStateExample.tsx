import { useState } from 'react';

const UseStateExample = () => {
  const [state, setState] = useState({
    count: 0,
    theme: 'theme',
  });

  const incrementState = (): void => {
    setState((prevState) => ({
      theme: `theme-${Math.floor(Math.random() * 100)}`,
      count: prevState.count + 1,
    }));
  }

  return (
    <div>
      <h2>Tema: {state.theme}</h2>
      <h2>Contagem: {state.count}</h2>
      <button onClick={incrementState}>Incrementar</button>
    </div>
  )
};

export default UseStateExample
