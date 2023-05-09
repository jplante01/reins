import { useState } from 'react';
import { useEffect } from 'react';
import data from '../data/data.json';
import DomainsCarousel from './DomainsCarousel';

function Body() {
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {console.log(selectedDomain)},[selectedDomain])
  return (
    <div  className="h-full ml-16 w-full inline-block bg-gray-700 flex flex-col">
      <DomainsCarousel setSelectedDomain={setSelectedDomain} data={data}/>
    </div>
  );
}


export default Body;