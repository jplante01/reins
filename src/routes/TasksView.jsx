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
  const { dataObj, setDataObj } = useContext(DataContext);
  console.log([dataObj, setDataObj]);
  return (
    <div>
      <ul className="flex flex-row gap-2 justify-center mt-16">
        {dataObj.map((domain, idx) => (
          <DomainButton
            key={domain.domainName}
            idx={idx}
            name={domain.domainName}
          />
        ))}
      </ul>
    </div>
  );
}

function DomainButton({ idx, name }) {
  const selectedDomain = 'test';
  return (
    <button
      className={`shadow-lg text-gray-200 ${
        selectedDomain === idx ? 'text-red-500' : ''
      } bg-gray-500 hover:bg-gray-600 px-6 py-4 rounded-lg text-xl`}
    >
      {name}
    </button>
  );
}

export default TasksView;
