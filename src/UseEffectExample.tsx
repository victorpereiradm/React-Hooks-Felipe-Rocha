import { useState, useEffect } from 'react';
import axios, { type AxiosResponse } from 'axios';

const UseEffectExample = () => {
  const [items, setItems] = useState<{
    userId: number;
    id: number;
    title?: string;
    body: string;
  }[]>([]);
  const [resourceType, setResourceType] = useState('posts');

  const changeResourceType = (resourceType: string): void => {
    setResourceType(resourceType);
  };

  useEffect((): void => {
    const fetchData = async (): Promise<void> => {
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
      <h1>{resourceType}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button onClick={() => changeResourceType('posts')}>Posts</button>
        <button onClick={() => changeResourceType('comments')}>Comments</button>
        <button onClick={() => changeResourceType('todos')}>Todos</button>
      </div>
      {items.map((item) => {
        return <div key={item.id}>{item.title}</div>
      })}
    </div>
  );
};

export default UseEffectExample;