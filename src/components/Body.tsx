import data from '../data/data.json';
import DomainsCarousel from './DomainsCarousel';

function Body() {

  return (
    <div  className="h-full ml-16 w-full inline-block bg-gray-700 flex flex-col">
      <DomainsCarousel data={data}/>
    </div>
  );
}


export default Body;