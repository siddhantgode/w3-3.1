import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EdufulnessLanding = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);

  const images = [
    '/images/carousel1.jpeg',
    '/images/carousel2.jpeg',
    '/images/carousel3.jpeg',
    '/images/carousel4.jpeg',
    '/images/carousel5.png'
  ];

  const courses = [
    { title: 'Azure Data Engineering', image: '/images/english_woman.avif' },
    { title: 'Compiler Design', image: '/images/compiler.jpeg' },
    { title: 'Operating Systems', image: '/images/operating_sys.jpeg' },
    { title: 'Snowflake', image: 'https://apukkaresort.fi/wp-content/uploads/2024/05/Apukka-Resort-Rovaniemi-Lapland-Blog_Photos-snowflake-354-1024x782-1.webp' },
    { title: 'F.E. Civil', image: '/images/a_civil_engineer_in_a_blue_hard.jpeg' },
    { title: 'Cloud Computing', image: '/images/carousel5.jpeg' }
  ];

  const visibleCourses = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setCourseIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const handleNext = () => {
    setCourseIndex((prev) => (prev + 1) % courses.length);
  };

  const visibleSlice = courses.slice(courseIndex, courseIndex + visibleCourses);
  const adjustedSlice =
    visibleSlice.length < visibleCourses
      ? [...visibleSlice, ...courses.slice(0, visibleCourses - visibleSlice.length)]
      : visibleSlice;

  return (
    <div className="font-sans">
      {/* Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${i === carouselIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}

          >
            <img
              src={src}
              alt={`Edufulness ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {i === carouselIndex && (
              <div className="absolute bottom-8 left-8 text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded">
                Experience Edufulness
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Edufulness Advantage */}
        <section className="flex flex-col md:flex-row gap-8 mb-16 items-start">
          <div className="md:w-1/2 md:pr-12 -ml-8">
            <img
              src="/images/student.png"
              alt="Edufulness Advantage"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-4">Edufulness Advantage</h2>
            <p className="mb-4 text-justify">
              Edufulness Certified Advanced Programmer with Data Engineer Mastery Program is a leading-edge Technological Program paving your way to an assured lucrative career. It is an integrated course directed by Edufulness. Instructed by the industry’s best Technical Experts, this program offers mentorship through Data Engineering Experts and directs you to the Fortune 500 companies. The vision is to make the premium organizations discover the Right Talent.
            </p>
            {/* <ul className="list-disc list-inside">
              <li>Top-demand job-oriented courses</li>
              <li>Industry expert instructors</li>
              <li>Affordable lifetime access</li>
            </ul> */}
          </div>
        </section>


        {/* Featured Courses */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute -left-24 z-10 bg-white p-2 shadow rounded-full hover:bg-gray-100"
              aria-label="Previous Courses"
            >
              <ChevronLeft />
            </button>
            <div className="mx-auto overflow-hidden w-full">
              <div className="flex justify-center gap-6 transition-all duration-300">
                {adjustedSlice.map((course, i) => (
                  <div
                    key={i}
                    className="w-72 h-[280px] bg-white overflow-hidden border border-gray-300 shadow-[rgba(0,0,0,0.1)_-6px_-6px_12px] transform transition-transform duration-300 hover:scale-105 hover:shadow-[rgba(0,123,255,0.3)_-6px_-6px_18px]"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-[65%] object-cover"
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
                ))}
              </div>
            </div>
            <button
              onClick={handleNext}
              className="absolute -right-24 z-10 bg-white p-2 shadow rounded-full hover:bg-gray-100"
              aria-label="Next Courses"
            >
              <ChevronRight />
            </button>
          </div>
        </section>

        {/* Partners */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
          <div className="overflow-hidden relative w-full">
            <div className="flex gap-6 animate-scroll-partners w-max">
              <img src="/images/paypal.png" alt="Partner 1" className="w-24" />
              <img src="/images/chargebee.png" alt="Partner 2" className="w-24" />
              <img src="/images/flikart.png" alt="Partner 3" className="w-24" />
              <img src="/images/freshwork.png" alt="Partner 4" className="w-24" />
              <img src="/images/juspay.png" alt="Partner 5" className="w-24" />
              <img src="/images/scapic.png" alt="Partner 6" className="w-24" />
              <img src="/images/orcaso.png" alt="Partner 7" className="w-24" />
              <img src="/images/zoho.png" alt="Partner 8" className="w-24" />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="max-w-2xl mx-auto">
            Empowering learners through accessible and quality education.
          </p>
        </section>

        {/* Join Now */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Join Now</h2>
          <p className="mb-4">Start your journey today!</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Enroll Now
          </button>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 p-8 rounded mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <p className="mb-2">
            "Edufulness transformed my learning experience!" - Student A
          </p>
          <p className="mb-2">
            "Great content and amazing instructors." - Student B
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Edufulness. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EdufulnessLanding;
