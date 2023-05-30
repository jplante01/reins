import { useContext, useState } from 'react';
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
  // console.log([dataObj, setDataObj]);
  const [selectedDomain, setSelectedDomain] = useState(null);
  return (
    <div>
      <ul className="flex flex-row gap-2 justify-center mt-16">
        {dataObj.map((domain, idx) => (
          <DomainButton
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            key={domain.domainName}
            idx={idx}
            name={domain.domainName}
          />
        ))}
      </ul>
    </div>
  );
}

function DomainButton({ selectedDomain, setSelectedDomain, name }) {
  function handleClick() {
    if (selectedDomain !== name) {
      setSelectedDomain(name);
      console.log(selectedDomain);
    }
  }
  return (
    <button
      onClick={handleClick}
      className={`shadow-lg text-gray-200 ${
        selectedDomain === name ? 'text-red-500' : ''
      } bg-gray-500 hover:bg-gray-600 px-6 py-4 rounded-lg text-xl`}
    >
      {name}
    </button>
  );
}

export default TasksView;
