import { useRouteError, Link } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <p>Sorry, reins has encountered an error</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default ErrorPage;
