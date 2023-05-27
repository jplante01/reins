import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <div className="flex h-screen w-screen">
      <div className="fixed top-0 left-0 h-screen w-16 bg-gray-900">
        <nav>
          <ul>
            <li>
              <Link to="tasks">TaskList</Link>
            </li>
            <li>
              <Link to="home">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-full ml-16 w-full inline bg-gray-700 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
