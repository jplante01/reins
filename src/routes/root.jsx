import { Link, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <div>
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
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Root;
