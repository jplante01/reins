import { useState } from 'react';
import data from '../../data/data.json';
import DomainsCarousel from '../DomainsCarousel';
import DomainTree from '../DomainTree';

function Body() {
  const [selectedDomain, setSelectedDomain] = useState(null);
  let domain;
  if (selectedDomain !== null) {
    domain = data[selectedDomain];
  } else {
    domain = 'Please select a domain.'
  }

  return (
    <>
      <div  className="h-full ml-16 w-full inline bg-gray-700 flex flex-col">
        <DomainsCarousel setSelectedDomain={setSelectedDomain} data={data}/>
        <DomainTree domain={domain} />
      </div>
    </>
  );
}

export default Body;