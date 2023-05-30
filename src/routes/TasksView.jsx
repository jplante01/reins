import { useContext } from 'react';
import { DataContextProvider, DataContext } from '../contexts/DataContext';

function TasksView() {
  return (
    <DataContextProvider>
      <Domains />
    </DataContextProvider>
  );
}

function Domains() {
  const dataObj = useContext(DataContext);
  console.log(dataObj);
}

export default TasksView;
