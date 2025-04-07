import { Link } from 'react-router-dom';

const Hero = () => {
  const backgroundImage = "https://ext.same-assets.com/1537092728/785107054.jpeg";

  return (
    <section
      className="relative h-[80vh] min-h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
      }}
    >
      <div className="container">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
            Inspiring Excellence, Building Character
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Brightwood School provides a transformative educational experience that prepares students for success in college and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/schedule-visit"
              className="bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center"
            >
              Schedule a Visit
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
