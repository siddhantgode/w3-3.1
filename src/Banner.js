import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Banner.css"; // Import the existing CSS file for additional custom styles
import SimpleGrid from "./Timeline";
import { Accordion, Container,Row, Col } from 'react-bootstrap';
import { db } from "./firebase"; // Import Firestore
import { collection, addDoc } from "firebase/firestore"; // Functions to interact with Firestore
import RegistrationForm from './components/registrationForm';
import Roadmap from './components/roadmap';
import SimpleAccordion from './accordian2';



const Banner = () => {

  const [formData, setFormData] = useState({
    UserName: "",
    EmailID: "",
    PhoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Update form data state on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save form data to Firestore
      await addDoc(collection(db, "formSubmissions"), formData);

      alert("Form data saved successfully!");
      setFormData({ UserName: "", EmailID: "", PhoneNumber: "" }); // Reset form
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("An error occurred while saving the form data.");
    } finally {
      setIsSubmitting(false);
    }
  };



  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (eventKey) => {
    setActiveIndex(prevIndex => (prevIndex === eventKey ? null : eventKey)); // Toggle using string comparison
};
  

  return (
    <div>
      {/* Existing Section */}
      <div className="banner-section">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            {/* Left Section */}
            <div className="left-section col-md-6">
              <h1 className="heading">Data Engineering Course</h1>
              <h3 className="subheading">From Design To Implementation!</h3>
              <ul>
                <li>100% Placement Support</li>
                <li>Industry Led Curriculum</li>
                <li>Hands-on Training</li>
                <li>40+ Projects</li>
                <li>Edufulness Certification</li>
              </ul>
              <h4 className="live-class">
                Live Online Classes | 02-March-2025 10:00AM IST (Sunday)
              </h4>
            </div>

            {/* Right Section */}
            <div className="right-section col-md-5 bg-light shadow rounded p-4 mx-auto">
              {/* Form Heading */}
              <h2 className="text-center mb-3">FILL THE FORM</h2>
              {/* Live Class Alert */}
              <h3 className="live-class-alert text-info text-center mb-4">
                Live Online Classes <br />
                02-March-2025 10:00AM IST <br />
                (Sunday)
              </h3>
              {/* Form */}
              <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="UserName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="UserName"
                  className="form-control"
                  id="UserName"
                  placeholder="Enter your full name"
                  value={formData.UserName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="EmailID" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  name="EmailID"
                  className="form-control"
                  id="EmailID"
                  placeholder="Enter your email"
                  value={formData.EmailID}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="PhoneNumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="PhoneNumber"
                  className="form-control"
                  id="PhoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.PhoneNumber}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Enroll Now"}
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Azure Data Engineering Courses start*/}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              AZURE DATA ENGINEERING <span className="text-primary">COURSE</span>
            </h2>
            <p className="text-muted">
              (Data Factory + Databricks with PySpark + Synapse Analytics + SQL Server)
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mb-4">
              <div className="shadow-left">
                <img
                  src="https://www.pvrcloudtech.com/wp-content/uploads/Azure-Data-Factory.png"
                  alt="Azure Data Factory"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="shadow-left">
                <img
                  src="https://www.pvrcloudtech.com/wp-content/uploads/PySpark-Databricks.png"
                  alt="Databricks with PySpark"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="shadow-left">
                <img
                  src="https://www.pvrcloudtech.com/wp-content/uploads/Synapse-Analytics.jpeg"
                  alt="Azure Synapse Analytics"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="shadow-left">
                <img
                  src="/images/SQL1.jpg"
                  alt="SQL Server"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        {/*<!-- description about edufulness starts here -->*/}
         {/* New Section: Image & Description */}
         <section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center">
      {/* Image Section */}
      <div className="col-md-6 text-center">
        <div className="image-container">
          <img
            src="/images/img-project-feedback.jpg"
            alt="Project Feedback"
            className="img-fluid custom-image"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="col-md-6">
  <h2 className="fw-bold">Description</h2>
  <p className="description-text" style={{ maxWidth: '500px', textAlign: 'justify', fontFamily: 'Montserrat', fontWeight: '400' }}> 
  Edufulness Certified Advanced Programmer with Data Engineer Mastery 
  Program is a leading-edge Technological Program paving your way to an 
  assured lucrative career. It is an integrated course directed by 
  Edufulness. Instructed by the industry’s best Technical Experts, this 
  program offers mentorship through Data Engineering Experts and 
  directs you to the Fortune 500 companies. The vision is to make the 
  premium organizations discover the Right Talent.
</p>
</div>
    </div>
  </div>
</section>

<section
  className="d-flex justify-content-center align-items-center"
  style={{
    minHeight: "100vh", // Full viewport height
    textAlign: "center", // Center text
    padding: "20px", // Add padding for smaller screens
    boxSizing: "border-box", // Ensure padding doesn't affect width
    overflowX: "hidden", // Prevent horizontal overflow
  }}
>
  <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
    <h2 className="text-center mb-4">
      Steps to become an Expert Data Engineer
    </h2>

    {/* Wrapper for SimpleGrid */}
    <Roadmap />
  </div>
</section>
   {/*<!-- description about edufulness ends here -->*/}
      </section>
      {/* New Section: Azure Data Engineering Courses end*/}
     
     {/*Why edufulness section start */}
     <section style={{ margin: "10px 0", fontFamily: "'Roboto', sans-serif" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
              Why Edufulness
            </h2>
            <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
              Edufulness's Data Engineering is leading Project Based Career
              Programs that promise 100% Job Placement Support on completing
              the course. Here theory and practical go hand-in-hand, placing
              you in top companies with high salaries.
            </p>
            {/* Button to trigger the modal */}
            <button
              type="button"
              className="btn btn-primary whyChooseModalButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enroll Now
            </button>
          </Col>
          <Col md={6}>
            <img
              src="/images/about_image.png"
              alt="why"
              style={{ width: "80%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>

      {/* Bootstrap Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          {/* Added 'modal-lg' for a larger modal */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enroll Now
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* RegistrationForm Component */}
              <RegistrationForm />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
   
    {/*Why edufulness section end */}
    {/* Program Overview start*/}
    <section style={{ fontFamily: 'sans-serif' }}> 
      <div className="overview">
       <div className="container">
  <div className="row overview_row">
    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Program Eligibility And Overview</h2>
    <p className="text-center pb-4" style={{ fontSize: '1rem', fontFamily: 'Montserrat', fontWeight: '400' }}> 
      Check the only eligibility criteria <br />
      Students & Working Professionals, seeking opportunities to upskill their Data Engineering proficiency for faster career growth.
    </p>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>A program designed by IIT Experts</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Live Online Classes + Lifetime recorded videos</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>One-on-One with Mentors</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Ask me anything sessions with Industry Experts</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Globally Recognized Certification from Edufulness</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>A digital portfolio through "Github"</h5> 
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
    {/*Program Overview end */}
{/* Take advantage of current price start */}
<section style={{ 
      backgroundColor: '#333', 
      color: '#fff', 
      padding: '20px', 
      textAlign: 'center',
      borderRadius: '5px', 
      maxWidth: '580px', 
      margin: '0 auto' 
    }}> 
      <div className="offer-content"> 
        <h2 style={{ fontSize: '24px', marginBottom: '15px' }}>Take Advantage of Our Current Price</h2>
        <div className="price">
          <h3 style={{ fontSize: '18px', marginBottom: '5px' }}>Program Fee</h3>
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}>
  <span style={{ textDecoration: 'line-through' }}>₹35,000</span> ₹15,000 (Inc taxes)
</p>
        </div>
        <p style={{ fontSize: '14px', color: '#ff0000', marginBottom: '10px' }}>Limited Time Offer!</p>
        <p>Evaluate the Pre-bootcamp (Free Sessions)</p>
        <p>with 100% Refund Guarantee</p>
        <p>7-Day Refund Policy</p>
        <Row className="justify-content-center">
  <Col md={4} className="text-center">
    <button
              type="button"
              className="btn btn-primary whyChooseModalButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Apply Now
            </button>  </Col>
</Row>
      </div>
    </section>
{/* Take advantage of current price end*/}
 {/*Master Data Engineering section start */}

<section style={{ 
      backgroundColor: '#000957',
      color: '#fff', 
      padding: '50px 0',
      textAlign: 'center' 
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Master the Data Engineering with Edufulness certification 
              for an Advanced Programming Professional</h2>
              <Row className="justify-content-center">
  <Col md={4} className="text-center">
  <button
              type="button"
              className="btn btn-primary whyChooseModalButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Start Learning
            </button>  </Col>
</Row>
          </div>
        </div>
      </div>
    </section>
    {/*Master Data Engineering section end */}

    {/*Where students work start */}
    {/*Where students work start */}
    <section className="student-work-section py-5">
  <div className="container text-center">
    <div className="row row-cols-1">
      <div className="col">
        <Row>
          <h1 className="text-center pb-4 fw-bold">Where do our Students work?</h1>
        </Row>
      </div>

      {/* Centering the images */}
      <div className="col d-flex justify-content-center align-items-center">
        <img src="/images/flikart.png" alt="Flipkart" />
      </div>
      <div className="col d-flex justify-content-center align-items-center">
        <img src="/images/paypal.png" alt="PayPal" />
      </div>

      {/* Get Started Button */}
      <div className="col">
        <Row className="justify-content-center">
          <Col md={4} className="text-center">
            <button
              type="button"
              className="btn btn-primary px-5 py-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Get Started
            </button>
          </Col>
        </Row>
      </div>
    </div>
  </div>
</section>
{/*Where studetns work end */}

{/*Youtue link start*/}

<section>
<div class="youtube">
    <div class="container">
      <div class="row justify-content-center pt-5">
        <div class="col-md-6">
          <div class="ratio ratio-16x9 pt-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lWqrs9AhH4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-md-5">
          <h1 class="text-center pt-5">Explore the <br/>AZURE DATA ENGINEER</h1>
          <div class="channelLink text-center pt-4">
            <h3 class="chanlink pb-3">Subscribe to our channel to<br/> more update </h3>
            <button type="button" class="btn btn-primary btn-lg">
  <a
    class="channellink text-white text-decoration-none"
    href="https://www.youtube.com/@EduFulnessEFN"
    target="_blank"
  >
    Subscribe Now
  </a>
</button>
          </div>
        </div>
       </div>
    </div>
   </div>


</section>


  {/*Youtube link end*/}

  {/*FAQ start*/}
  <section>
               <SimpleAccordion/>
            </section>




    



    </div>
  );
};

export default Banner;