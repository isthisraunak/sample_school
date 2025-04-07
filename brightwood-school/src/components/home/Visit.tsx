import { Link } from 'react-router-dom';

const Visit = () => {
  const openHouses = [
    {
      id: "spring-1",
      date: "April 15",
      time: "9:00 AM - 12:00 PM"
    },
    {
      id: "spring-2",
      date: "May 10",
      time: "1:00 PM - 4:00 PM"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              Experience Brightwood School in Person
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We invite you to visit our campus and see firsthand how Brightwood School can nurture your child's academic journey. Join us for a tour, attend an upcoming event, or schedule a personal meeting with our admissions team.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-playfair font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-gold">
                  <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                </svg>
                Upcoming Open Houses
              </h3>
              <ul className="space-y-2 ml-8">
                {openHouses.map((openHouse) => (
                  <li key={openHouse.id} className="text-gray-600">
                    {openHouse.date}, {openHouse.time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-playfair font-bold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2 text-gold">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Campus Address
              </h3>
              <address className="not-italic ml-8 text-gray-600">
                123 Education Avenue<br />
                Brightwoodville, CA 90210
              </address>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/schedule-visit"
                className="bg-gold text-navy px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition-colors"
              >
                Schedule a Visit
              </Link>
              <Link
                to="/virtual-tour"
                className="border border-navy text-navy px-6 py-3 rounded font-semibold hover:bg-navy hover:text-white transition-colors"
              >
                View Virtual Tour
              </Link>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://ext.same-assets.com/1537092728/830126273.jpeg"
              alt="Students collaborating in modern classroom"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
