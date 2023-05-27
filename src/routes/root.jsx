import { Link, Outlet } from 'react-router-dom';
import { IoListCircleOutline } from 'react-icons/io5';

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
            <li>
              <IoListCircleOutline
                size="90%"
                className="text-slate-400 hover:text-teal-500 hover:cursor-pointer m-auto"
              />
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
