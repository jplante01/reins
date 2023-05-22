function DomainsCarousel({ selectedDomain, setSelectedDomain, data }) {
  return (
    <div>
      <ul className="flex flex-row gap-2 justify-center mt-16">
        {data.map((domain, idx) => (
          <DomainButton
            selectedDomain={selectedDomain}
            setSelectedDomain={setSelectedDomain}
            key={idx}
            idx={idx}
            name={domain.domainName}
          />
        ))}
      </ul>
    </div>
  );
}

const DomainButton = ({ selectedDomain, setSelectedDomain, idx, name }) => {
  function handleClick() {
    setSelectedDomain(idx);
  }
  return (
    <button
      onClick={handleClick}
      className={`shadow-lg text-gray-200 ${selectedDomain === idx ? 'text-red-500' : ''} focus:text-2xl bg-gray-500 hover:bg-gray-600 px-6 py-4 rounded-lg text-xl`}
    >
      {name}
    </button>
  );
};

export default DomainsCarousel;
