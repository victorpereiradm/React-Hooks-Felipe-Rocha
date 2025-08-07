import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// import UseStateExample from './UseStateExample'
// import UseEffectExample from './UseEffectExample'
// import UseRefExample from './UseRefExample'
import UseReducer from './UseReducer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <UseStateExample />
    <UseEffectExample />
    <UseRefExample /> */}
    <UseReducer />
  </StrictMode>,
);
