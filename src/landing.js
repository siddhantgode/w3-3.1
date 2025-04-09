import React, { useEffect, useState } from 'react';

const EdufulnessLanding = () => {
  const [index, setIndex] = useState(0);
  const images = ['/images/carousel1.jpeg', '/images/carousel2.jpeg','/images/carousel3.jpeg','/images/carousel4.jpeg','/images/carousel.5.png'];


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="font-sans">
      {/* Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Edufulness ${i + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Edufulness Advantage */}
        <section className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <img src="/images/ChatGPT Image Apr 8, 2025, 11_13_24 PM.png" alt="Edufulness Advantage" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Edufulness Advantage</h2>
            <p className="mb-4">Why join Edufulness?</p>
            <ul className="list-disc list-inside text-left">
              <li>Top-demand job-oriented courses</li>
              <li>Industry expert instructors</li>
              <li>Affordable lifetime access</li>
            </ul>
          </div>
        </section>


        {/* Featured Courses */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
          <div className="flex justify-center flex-wrap gap-6">
            {['Azure Data Engineering', 'Compiler Design', 'Operating Systems'].map((course, i) => (
              <div key={i} className="border rounded-lg shadow-md p-6 w-72">
                <h3 className="text-xl font-semibold mb-2">{course}</h3>
                <p>Price: ₹7,999</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
          <div className="flex justify-center gap-6">
            <img src="partner1.png" alt="Partner 1" className="w-24" />
            <img src="partner2.png" alt="Partner 2" className="w-24" />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
          <p className="max-w-2xl mx-auto">Empowering learners through accessible and quality education.</p>
        </section>

        {/* Join Now */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Join Now</h2>
          <p className="mb-4">Start your journey today!</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Enroll Now</button>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 p-8 rounded mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
          <p className="mb-2">"Edufulness transformed my learning experience!" - Student A</p>
          <p className="mb-2">"Great content and amazing instructors." - Student B</p>
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
