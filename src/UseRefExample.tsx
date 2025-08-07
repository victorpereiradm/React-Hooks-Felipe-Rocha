import { useState, useRef, useEffect } from 'react';

const UseRefExample = () => {
  const [name, setName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const previousName = useRef<string>(name);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    previousName.current = name;
  }, [name]);

  return (
    <div>
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello! My name is {name}</p>
      <p>My name was {previousName.current}</p>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default UseRefExample;