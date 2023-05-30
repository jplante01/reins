import { Link, Outlet } from 'react-router-dom';
import { IoListCircleOutline, IoHomeOutline } from 'react-icons/io5';

function Root() {
  return (
    <div className="flex h-screen w-screen">
      <div className="fixed top-0 left-0 h-screen w-16 bg-gray-900">
        <nav className="mt-52">
          <ul>
            <li>
              <Link to="home">
                <IoHomeOutline
                  size="80%"
                  className="text-slate-400 hover:text-teal-500 hover:cursor-pointer m-auto pb-16"
                />
              </Link>
            </li>
            <li>
              <Link to="tasks-view">
                <IoListCircleOutline
                  size="80%"
                  className="text-slate-400 hover:text-teal-500 hover:cursor-pointer m-auto"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="h-full ml-16 w-full bg-gray-700 flex flex-col">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
