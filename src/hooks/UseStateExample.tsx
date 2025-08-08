import { useState } from 'react';

const UseStateExample = () => {
  const [state, setState] = useState({
    count: 0,
    theme: '',
  });

  const incrementState = (): void => {
    setState((prevState) => ({
      theme: `theme_${Math.floor(Math.random() * 100)}`,
      count: prevState.count + 1,
    }));
  }

  return (
    <div>
      <h3>Tema: {state.theme}</h3>
      <h3>Contagem: {state.count}</h3>
      <button onClick={incrementState}>Incrementar</button>
    </div>
  )
};

export default UseStateExample
