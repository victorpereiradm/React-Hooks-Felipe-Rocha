import { useReducer } from 'react';

const reducer = (state: { count: number }, action: { type: string }): { count: number } => {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
        <button onClick={() => {
            dispatch({ type: 'increment' })
        }}>Increment</button>
        <button onClick={() => {
            dispatch({ type: 'decrement' })
        }}>Decrement</button>
    </div>
  );
};

export default UseReducer;