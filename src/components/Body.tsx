import { useState } from 'react';
import data from '../data/data.json';
import DomainsCarousel from './DomainsCarousel';

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
      </div>
      <div>
        <DomainTree domain={domain} />
      </div>
    </>
  );
}

const DomainTree = ({ domain }) => {
  console.log(domain) 
  return (
    <h1>{domain.domain}</h1> 
  );
}

export default Body;