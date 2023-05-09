import data from '../data/data.json';

function Body() {
  return (
    <div className="h-full ml-16 w-full inline-block bg-gray-700 flex flex-col">
      <DomainsCarousel />
    </div>
  );
}

const DomainsCarousel = () => {
  return (
    <div>
      <ul className="flex flex-row gap-2 justify-center mt-16">
        {data.map(domain => (
          <DomainButton name={domain.domain} />
        ))}
      </ul>
    </div>
  );
}

const DomainButton = ({ name }) => {
  return (
    <button className="shadow-lg text-gray-200 focus:text-red-500 focus:text-2xl bg-gray-500 hover:bg-gray-600 px-6 py-4 rounded-lg text-xl">{name}</button>
  )
}
export default Body;