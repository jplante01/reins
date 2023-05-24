import { useState, useEffect } from "react";
import data from '../../data/data.json';
import DomainsCarousel from '../DomainsCarousel';
import DomainTree from '../DomainTree';

function TaskNavigator() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [domains, setDomains] = useState([]);
  let domain;

  if (selectedDomain !== null) {
    domain = data[selectedDomain];
  } else {
    domain = null;
  }

  useEffect(()=> {
    const storedDomains = localStorage.getItem('domains')
    if (storedDomains) {
      setDomains(JSON.parse(storedDomains))
    }
  }, [])
  return (
      <div className="h-full ml-16 w-full inline bg-gray-700 flex flex-col">
        <DomainsCarousel selectedDomain={selectedDomain} setSelectedDomain={setSelectedDomain} data={data} />
        {/* <div className="flex flex-col">
          <DomainTree selectedDomain={selectedDomain} data={data} />
        </div> */}
      </div>
  );

}

export default TaskNavigator;