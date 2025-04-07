import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Sending our children to Brightwood School was one of the best decisions we've made. The teachers truly care about each student's success and the curriculum challenges them daily.",
      author: "Michael Johnson",
      role: "Parent of Two Brightwood Students"
    },
    {
      id: 2,
      quote: "At Brightwood, I discovered my passion for science and mathematics. The dedicated faculty and innovative programs helped me develop skills that prepared me for college and beyond.",
      author: "Emma Martinez",
      role: "Alumni, Class of 2022"
    },
    {
      id: 3,
      quote: "Teaching at Brightwood School is incredibly rewarding. The administration supports our professional growth, and I'm able to create meaningful learning experiences for my students every day.",
      author: "Dr. Robert Chen",
      role: "Faculty Member, Science Department"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-20 bg-navy text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Voices from Our Community</h2>
          <p className="text-lg">
            Hear what parents, students, and faculty have to say about their Brightwood School experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-navy-800 bg-opacity-40 p-8 md:p-12 rounded-lg text-center">
            <div className="text-yellow-400 text-6xl font-serif mb-6">"</div>
            <p className="text-xl md:text-2xl italic mb-8">
              {testimonials[activeIndex].quote}
            </p>
            <div className="mb-8">
              <p className="font-bold text-gold">{testimonials[activeIndex].author}</p>
              <p className="text-sm">{testimonials[activeIndex].role}</p>
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((testimonial) => (
                <button
                  key={testimonial.id} // Fixed the array index key issue
                  onClick={() => goToTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
                  className={`w-3 h-3 rounded-full ${
                    testimonials.findIndex(t => t.id === testimonial.id) === activeIndex ? 'bg-gold' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${testimonial.id}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-12 h-12 rounded-full bg-navy-700 hover:bg-navy-600 transition-colors flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-12 h-12 rounded-full bg-navy-700 hover:bg-navy-600 transition-colors flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
