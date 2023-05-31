import { useContext, useState } from 'react';
import { DataContextProvider, DataContext } from '../contexts/DataContext';

function TasksView() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  return (
    <DataContextProvider>
      <Domains
        selectedDomain={selectedDomain}
        setSelectedDomain={setSelectedDomain}
      />
      <Areas selectedDomain={selectedDomain} />
    </DataContextProvider>
  );
}

function Domains({ selectedDomain, setSelectedDomain }) {
  const { dataObj, setDataObj } = useContext(DataContext);
  // console.log([dataObj, setDataObj]);
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

function Areas({ selectedDomain }) {
  const { dataObj, setDataObj } = useContext(DataContext);
  const domain = dataObj.find((obj) => obj.domainName === selectedDomain);
  console.log([selectedDomain, dataObj, domain]);
  if (domain) {
    return (
      <ul>
        {domain.areas.map((area) => (
          <li className="text-3xl ml-8 mb-6 text-center" key={area.areaName}>
            {area.areaName}
          </li>
        ))}
      </ul>
    );
  }
  return null;
}
export default TasksView;
