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
    domain = null;
  }

  return (
    <>
      <div className="h-full ml-16 w-full inline bg-gray-700 flex flex-col">
        <DomainsCarousel setSelectedDomain={setSelectedDomain} data={data} />
        <div className="flex flex-col">
          <DomainTree domain={domain} />
        </div>
      </div>
    </>
  );
}

export default Body;
