import UseStateExample from './hooks/UseStateExample'
import UseEffectExample from './hooks/UseEffectExample'
import UseRefExample from './hooks/UseRefExample'
import UseReducer from './hooks/UseReducer';

const App = () => {
  return (
    <>
      <UseStateExample />
      <UseEffectExample />
      <UseRefExample />
      <UseReducer />
    </>
  );
};

export default App;