import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RegistrationForm from "./components/registrationForm";


const EdufulnessLanding = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [courseIndex, setCourseIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = (e) => {
    // Close modal only if the click is on the overlay (not inside the modal content)
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

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

  const partnerImages = [
    "/images/paypal.png",
    "/images/chargebee.png",
    "/images/flikart.png",
    "/images/freshwork.png",
    "/images/juspay.png",
    "/images/scapic.png",
    "/images/orcaso.png",
    "/images/zoho.png",
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

      const [partnerIndex, setPartnerIndex] = useState(0);

      useEffect(() => {
        const interval = setInterval(() => {
          setPartnerIndex((prevIndex) => (prevIndex + 1) % partnerImages.length);
        }, 2500); // Change every 2.5s
        return () => clearInterval(interval);
      }, []);

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
        // Featured Courses
        // Featured Courses
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
  <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
  <div className="overflow-hidden relative w-full h-[120px]">
    <div className="flex w-max animate-scroll-partners gap-8 items-center">
      {/* Repeat logos twice for seamless looping */}
      {partnerImages.concat(partnerImages).map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Partner ${i + 1}`}
          className="h-[105px] object-contain"
        />
      ))}
    </div>
  </div>
</section>
<section className="px-6 md:px-16 py-16 bg-white font-montserrat">
  <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-[#1c1c59]">Top categories</h2>
      <p className="text-gray-500 mt-2">
        Explore all of our courses and pick your suitable ones to enroll and start learning with us!
      </p>
    </div>
    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50 transition whitespace-nowrap">
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
      <div key={title} className="bg-gray-100 px-6 py-5 rounded-md flex items-center gap-4 hover:shadow-md transition">
        <div className="text-3xl">{icon}</div>
        <span className="text-lg font-semibold text-[#1c1c59]">{title}</span>
      </div>
    ))}
  </div>
</section>





        {/* Mission & Vision */}
        <section className="bg-white py-16 font-[Montserrat]">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission & Vision</h2>
    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
      We strive to empower learners worldwide by offering accessible, high-quality education that inspires growth, innovation, and transformation.
    </p>

    <div className="grid md:grid-cols-2 gap-12">
      {/* Mission Block */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/mission.png"
          alt="Mission illustration"
          className="w-60 h-60 object-contain mb-6"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h3>
        <p className="text-gray-600">
          To bridge the knowledge gap by delivering inclusive, interactive, and hands-on learning experiences for everyone, everywhere.
        </p>
      </div>

      {/* Vision Block */}
      <div className="flex flex-col items-center text-center">
        <img
          src="/images/vision.png"
          alt="Vision illustration"
          className="w-60 h-60 object-contain mb-6"
        />
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h3>
        <p className="text-gray-600">
          To be a global leader in digital education, transforming lives through personalized, purposeful, and future-ready learning pathways.
        </p>
      </div>
    </div>
  </div>
</section>


        {/* Join Now */}
        <section className="text-center mb-16">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-6">Join Now</h2>

      {/* Content: Image and Button */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        {/* Image Section */}
        <div>
          <img
            src="/images/join_now.jpg"
            alt="Join Now"
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>

        {/* Button Section */}
        <div>
          <p className="text-lg mb-4">Start your journey today!</p>
          <button
            className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
            onClick={openModal}
          >
            Enroll Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOverlayClick} // Close modal on overlay click
        >
          <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg overflow-auto">
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
              <h3 className="text-2xl font-bold">Fill the Form</h3>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                &#x2715; {/* Close Icon */}
              </button>
            </div>

            {/* Modal Content */}
            <div className="mt-6">
              <RegistrationForm />
            </div>
          </div>
        </div>
      )}
    </section>
        {/* Testimonials */}
        <section className="bg-gray-100 py-16 px-8 text-center font-['Montserrat']">
  <h2 className="text-4xl font-bold text-gray-900 mb-4">Learners say about Edufulness</h2>
  <p className="text-gray-600 mb-12">Hear What Our Learners Say About Edufulness Academy</p>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {/* Testimonial 1 */}
    <div className="bg-white p-6 rounded shadow-sm relative text-left">
      <p className="text-gray-700 mb-6">
        I really appreciate the effort of instructor who organised the all syllabus, which is rare for compiler design on internet. I am happy with this course, after taking this course I was able to get high marks in my whole batch. Thanks!
      </p>
      <p className="font-bold text-indigo-900">Aafaq Ahmed S</p>
      <p className="text-sm text-gray-500">Happy Student</p>
      <div className="absolute bottom-4 right-4 text-gray-300 text-4xl">”</div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white p-6 rounded shadow-sm relative text-left">
      <p className="text-gray-700 mb-6">
        I am able to understand operating systems better by taking this course. I would have loved to see practical coding examples on process synchronization and threading as I'm still yet to understand it fully but overall, it's a good course.
      </p>
      <p className="font-bold text-indigo-900">Oluwaseun</p>
      <p className="text-sm text-gray-500">Happy Student</p>
      <div className="absolute bottom-4 right-4 text-gray-300 text-4xl">”</div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white p-6 rounded shadow-sm relative text-left">
      <p className="text-gray-700 mb-6">
        I was really struggling to learn Operating systems from books. When I took this course it just made things easier and I was able to learn those things I was trying to learn from months. Thank you very much sir. Great work and effort sir.
      </p>
      <p className="font-bold text-indigo-900">Srinivas</p>
      <p className="text-sm text-gray-500">Happy Student</p>
      <div className="absolute bottom-4 right-4 text-gray-300 text-4xl">”</div>
    </div>
  </div>
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
