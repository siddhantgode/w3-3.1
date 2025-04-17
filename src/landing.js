import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RegistrationForm from './components/registrationForm';
import PropTypes from 'prop-types'; // Optional: for type checking

const EdufulnessLanding = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [partnerIndex, setPartnerIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  const images = [
    '/images/carousel1.jpeg',
    '/images/carousel2.jpeg',
    '/images/carousel3.jpeg',
    '/images/carousel4.jpeg',
    '/images/carousel5.png',
  ];

  const courses = [
    { title: 'Azure Data Engineering', image: '/images/english_woman.avif' },
    { title: 'Compiler Design', image: '/images/compiler.jpeg' },
    { title: 'Operating Systems', image: '/images/operating_sys.jpeg' },
    { title: 'Snowflake', image: 'https://apukkaresort.fi/wp-content/uploads/2024/05/Apukka-Resort-Rovaniemi-Lapland-Blog_Photos-snowflake-354-1024x782-1.webp' },
    { title: 'F.E. Civil', image: '/images/a_civil_engineer_in_a_blue_hard.jpeg' },
    { title: 'Cloud Computing', image: '/images/carousel5.jpeg' },
  ];

  const partnerImages = [
    '/images/paypal.png',
    '/images/chargebee.png',
    '/images/flikart.png',
    '/images/freshwork.png',
    '/images/juspay.png',
    '/images/scapic.png',
    '/images/orcaso.png',
    '/images/zoho.png',
  ];

  const testimonials = [
    {
      quote: "I really appreciate the effort of instructor who organised the all syllabus, which is rare for compiler design on internet. I am happy with this course, after taking this course I was able to get high marks in my whole batch. Thanks!",
      author: 'Aafaq Ahmed S',
      role: 'Happy Student',
    },
    {
      quote: "I am able to understand operating systems better by taking this course. I would have loved to see practical coding examples on process synchronization and threading as I'm still yet to understand it fully but overall, it's a good course.",
      author: 'Oluwaseun',
      role: 'Happy Student',
    },
    {
      quote: "I was really struggling to learn Operating systems from books. When I took this course it just made things easier and I was able to learn those things I was trying to learn from months. Thank you very much sir. Great work and effort sir.",
      author: 'Srinivas',
      role: 'Happy Student',
    },
  ];

  const visibleCourses = 4;
  const visibleTestimonials = 1;

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    const partnerInterval = setInterval(() => {
      setPartnerIndex((prev) => (prev + 1) % partnerImages.length);
    }, 2500);
    return () => {
      clearInterval(carouselInterval);
      clearInterval(partnerInterval);
    };
  }, [images.length, partnerImages.length]);

  const handlePrev = () => setCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
  const handleNext = () => setCourseIndex((prev) => (prev + 1) % courses.length);
  const handleTestimonialNext = () => setCourseIndex((prev) => (prev + 1) % testimonials.length);

  const visibleSlice = courses.slice(courseIndex, courseIndex + visibleCourses);
  const adjustedSlice =
    visibleSlice.length < visibleCourses
      ? [...visibleSlice, ...courses.slice(0, visibleCourses - visibleSlice.length)]
      : visibleSlice;

  const visibleTestimonial = testimonials.slice(courseIndex % testimonials.length, courseIndex % testimonials.length + visibleTestimonials);

  return (
    <div className="font-sans text-gray-800">
      {/* Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${i === carouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img src={src} alt={`Edufulness ${i + 1}`} className="w-full h-full object-cover" />
            {i === carouselIndex && (
              <div className="absolute bottom-8 left-8 text-white text-3xl font-bold bg-black bg-opacity-60 px-6 py-3 rounded-lg shadow-lg">
                Experience Edufulness
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Edufulness Advantage */}
        <section className="flex flex-col md:flex-row gap-8 mb-16 items-center">
          <div className="md:w-1/2 md:pr-12">
            <img src="/images/student.png" alt="Edufulness Advantage" className="rounded-xl shadow-lg w-full transform transition duration-300 hover:scale-105" />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">Edufulness Advantage</h2>
            <p className="mb-6 text-justify text-gray-700 leading-relaxed">
              Edufulness Certified Advanced Programmer with Data Engineer Mastery Program is a leading-edge Technological Program paving your way to an assured lucrative career. Instructed by the industry’s best Technical Experts, this program offers mentorship through Data Engineering Experts and directs you to the Fortune 500 companies. The vision is to make premium organizations discover the Right Talent.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Top-demand job-oriented courses</li>
              <li>Industry expert instructors</li>
              <li>Affordable lifetime access</li>
            </ul>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="relative flex items-center justify-center">
            {/* Left Navigation Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:-left-24 z-10 bg-white p-2 shadow rounded-full hover:bg-gray-100"
              aria-label="Previous Courses"
            >
              <ChevronLeft />
            </button>

            {/* Courses Carousel */}
            <div className="container mx-auto">
              <div className="row justify-content-center">
                {adjustedSlice.map((course, i) => (
                  <div key={i} className="col-12 col-md-3">
                    <div className="h-[280px] bg-white overflow-hidden border border-gray-300 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-[65%] object-cover object-top"
                      />
                      <div className="p-3 h-[35%] flex flex-col justify-center">
                        <h3
                          className="text-sm text-left font-bold mb-1"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {course.title}
                        </h3>
                        <p className="text-left text-sm">Price: ₹7,999</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:-right-24 z-10 bg-white p-2 shadow rounded-full hover:bg-gray-100"
              aria-label="Next Courses"
            >
              <ChevronRight />
            </button>
          </div>
        </section>

        {/* Partners */}
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Partners</h2>
          <div className="overflow-hidden relative w-full h-[120px]">
            <div className="flex animate-scroll-partners gap-12 items-center" style={{ animationDuration: '20s' }}>
              {partnerImages.concat(partnerImages).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className="h-16 object-contain transition-opacity hover:opacity-80"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Top Categories */}
        <section className="px-6 md:px-16 py-16 bg-white">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-4xl font-bold text-[#1c1c59] mb-2">Top Categories</h2>
              <p className="text-gray-500">Explore all of our courses and pick your suitable ones to enroll and start learning with us!</p>
            </div>
            <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-50 transition-all duration-300">
              View All Courses
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { title: 'Azure Data Factory', icon: '💻' },
              { title: 'Computer Architecture', icon: '🖥️' },
              { title: 'Programming Fundamentals', icon: '🎨' },
              { title: 'Theory of Computation', icon: '📚' },
              { title: 'Compiler Design', icon: '💼' },
              { title: 'Linked Lists', icon: '🔗' },
              { title: 'MySQL', icon: '🐬' },
              { title: 'Operating Systems', icon: '👥' },
            ].map(({ title, icon }) => (
              <div key={title} className="bg-gray-50 p-6 rounded-lg flex items-center gap-4 hover:bg-gray-100 transition-shadow shadow-sm hover:shadow-md">
                <div className="text-3xl">{icon}</div>
                <span className="text-lg font-semibold text-[#1c1c59]">{title}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
              We strive to empower learners worldwide by offering accessible, high-quality education that inspires growth, innovation, and transformation.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
                <img src="/images/mission.png" alt="Mission illustration" className="w-64 h-64 object-contain mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
                <p className="text-gray-600 max-w-sm">
                  To bridge the knowledge gap by delivering inclusive, interactive, and hands-on learning experiences for everyone, everywhere.
                </p>
              </div>
              <div className="flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
                <img src="/images/vision.png" alt="Vision illustration" className="w-64 h-64 object-contain mb-6" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
                <p className="text-gray-600 max-w-sm">
                  To be a global leader in digital education, transforming lives through personalized, purposeful, and future-ready learning pathways.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Now */}
        <section className="text-center py-16 bg-gray-50">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Join Now</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            <div>
              <img src="/images/join_now.jpg" alt="Join Now" className="w-72 h-72 object-cover rounded-xl shadow-md hover:shadow-lg transition" />
            </div>
            <div>
              <p className="text-lg mb-6 text-gray-700">Start your journey today with Edufulness!</p>
              <button
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                onClick={openModal}
              >
                Enroll Now
              </button>
            </div>
          </div>
          {isModalOpen && (
            <div
              className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
              onClick={handleOverlayClick}
            >
              <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-2xl">
                <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
                  <h3 className="text-2xl font-bold text-gray-900">Enroll Now</h3>
                  <button className="text-gray-500 hover:text-gray-700" onClick={closeModal}>
                    ✕
                  </button>
                </div>
                <RegistrationForm dateString="02-March-2025 10:00AM IST" />
              </div>
            </div>
          )}
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 py-16 px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learners Say About Edufulness</h2>
          <p className="text-gray-600 mb-12">Hear What Our Learners Say About Edufulness Academy</p>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${courseIndex * 100}%)` }}>
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 p-4">
                    <div className="bg-white p-6 rounded-lg shadow-md text-left relative">
                      <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                      <p className="font-bold text-indigo-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="absolute bottom-4 right-4 text-gray-300 text-4xl">”</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={handleTestimonialNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Edufulness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

EdufulnessLanding.propTypes = {
  // Add prop types if needed (e.g., for props passed from a parent)
};

export default EdufulnessLanding;