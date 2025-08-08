import { useState, useEffect } from 'react';
import axios, { type AxiosResponse } from 'axios';

const UseEffectExample = () => {
  const [items, setItems] = useState<{
    userId: number;
    id: number;
    title?: string;
    body: string;
  }[]>([]);
  const [resourceType, setResourceType] = useState('');

  const changeResourceType = (resourceType: string): void => {
    setResourceType(resourceType);
  };

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
      if (!resourceType) return;

      const response = await axios.get(`https://jsonplaceholder.typicode.com/${resourceType}`) as AxiosResponse<{
        userId: number;
        id: number;
        title?: string;
        body: string;
      }[]>;

      setItems(response.data);
    };

    fetchData();
  }, [resourceType]);

  useEffect(()=> {
    console.log('componentDidMount');

    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  return (
    <div>
      {resourceType ? <h3>{resourceType}</h3> : <h3>Selecione um tipo abaixo 👇</h3>}

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

        <button onClick={() => changeResourceType('Posts')}>Posts</button>
        <button onClick={() => changeResourceType('Comments')}>Comments</button>
        <button onClick={() => changeResourceType('Todos')}>Todos</button>
      </div>
      {items.map((item) => {
        return <div key={item.id}>{item.title || item.body}</div>
      })}
    </div>
  );
};

export default UseEffectExample;