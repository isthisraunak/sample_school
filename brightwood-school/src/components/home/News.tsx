import { Link } from 'react-router-dom';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Brightwood Students Win National Science Competition",
      excerpt: "A team of six students brought home the gold medal in this year's National Science Olympiad, showcasing exceptional talent in engineering and physics.",
      date: "April 2, 2025",
      image: "https://ext.same-assets.com/1537092728/589924601.jpeg"
    },
    {
      id: 2,
      title: "Spring Arts Festival Announces Expanded Program",
      excerpt: "This year's Spring Arts Festival will feature an expanded program including visual arts, music performances, and theatrical productions over two weekends.",
      date: "March 28, 2025",
      image: "https://ext.same-assets.com/1537092728/3616942047.jpeg"
    },
    {
      id: 3,
      title: "New STEM Innovation Lab Opening Next Month",
      excerpt: "Brightwood School is proud to announce the opening of our state-of-the-art STEM Innovation Lab, designed to enhance hands-on learning experiences.",
      date: "March 15, 2025",
      image: "https://ext.same-assets.com/1537092728/692116298.jpeg"
    }
  ];

  return (
    <section className="py-20 bg-lightGray">
      <div className="container">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold">School News & Events</h2>
          <Link to="/news" className="text-navy hover:text-gold transition-colors font-semibold">
            View All News
          </Link>
        </div>

        <p className="text-lg text-gray-600 mb-12 max-w-4xl">
          Stay updated with the latest happenings, achievements, and upcoming events at Brightwood School.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
                    <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </div>
                <h3 className="text-xl font-playfair font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Link to={`/news/${item.id}`} className="text-navy hover:text-gold transition-colors font-semibold inline-flex items-center">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                    <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
