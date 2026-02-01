import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    bg-gray-100 text-gray-900 
                    dark:bg-gray-900 dark:text-white px-4">

      <h1 className="text-7xl font-bold mb-4">404</h1>

      <p className="text-xl mb-6 text-center text-gray-600 dark:text-gray-300">
        Oops! The page you are looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white 
                   hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
