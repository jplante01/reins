import Body from './components/Body';
import Sidebar from './components/Sidebar';
import data from './data/data.json';

function App() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar data={data} />
        <Body />
      </div>
    </>
  );
}

export default App;
