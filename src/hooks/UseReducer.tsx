import { useReducer, useState } from 'react';

type ActionType = 'add-task' | 'toggle-task';

const reducer = (state: { tasks: { name: string, isCompleted: boolean }[] }, action: { type: ActionType, payload: string | number }): { tasks: { name: string, isCompleted: boolean }[] } => {
  if (action.payload === '') return state;

  const dictionaryActions = {
    'add-task': {
      ...state,
      tasks: [...state.tasks, { name: action.payload, isCompleted: false }]
    },
    'toggle-task': {
      ...state,
      tasks: state.tasks.map((task, index) => index === action.payload ? { ...task, isCompleted: !task.isCompleted } : task),
    }
  } as Record<ActionType, { tasks: { name: string, isCompleted: boolean }[] }>;

  const actionResult = dictionaryActions[action.type];

  return actionResult || state;
};

const UseReducer = () => {
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, { tasks: [] });

  const completedTasksCount = state.tasks.filter(task => task.isCompleted).length;

  return (
    <div>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value) } placeholder="Adicione uma tarefa" />
        <button style={{ marginLeft: '10px' }} onClick={() => {
          dispatch({ type: 'add-task', payload: inputValue });
          setInputValue('');
        }}>Adicionar</button>

        <p>Tarefas concluídas: {completedTasksCount}</p>

        {state.tasks.map((task, index) => (
            <p key={index} onClick={() => dispatch({ type: 'toggle-task', payload: index })} style={{ color: task.isCompleted ? 'green' : 'white', cursor: 'pointer' }}>{task.name}</p>
        ))}
    </div>
  );
};

export default UseReducer;