import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="py-20 text-center">
      <div className="container">
        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-navy mb-8">404</h1>
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6">Oops! Page not found</h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="bg-navy text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
            <path fillRule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clipRule="evenodd" />
          </svg>
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
