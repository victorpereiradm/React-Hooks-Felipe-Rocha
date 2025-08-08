import UseStateExample from './hooks/UseStateExample'
import UseEffectExample from './hooks/UseEffectExample'
import UseRefExample from './hooks/UseRefExample'
import UseReducer from './hooks/UseReducer';

const App = () => {
  return (
    <>
      <h1>👉 UseState</h1>
      <UseStateExample />
      <br /><hr />
      <h1>👉 UseEffect</h1>
      <UseEffectExample />
      <br /><hr />
      <h1>👉 UseRef</h1>
      <UseRefExample />
      <br /><hr />
      <h1>👉 UseReducer</h1>
      <UseReducer />
    </>
  );
};

export default App;