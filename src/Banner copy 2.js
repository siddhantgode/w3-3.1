import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Banner.css"; // Import the existing CSS file for additional custom styles
import SimpleGrid from "./Timeline";
import { Accordion, Container,Row, Col } from 'react-bootstrap';
import { db } from "./firebase"; // Import Firestore
import { collection, query, where, getDocs, addDoc } from "firebase/firestore"; // Functions to interact with Firestore
import RegistrationForm from './components/registrationForm';
import Roadmap from './components/roadmap';
import CustomAccordion from './accordian';
import SnowflakeAccordion from './accordian3';



const Banner2 = () => {
  const [liveClassInfo, setLiveClassInfo] = useState({
    date: "Loading...",
    time: "Loading...",
  });

  useEffect(() => {
    const fetchLiveClassInfo = async () => {
      try {
        const q = query(
          collection(db, "courseSchedules"),
          where("name", "==", "Snowflake") // Fetch only F.E. Civil course
        );

        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const docData = querySnapshot.docs[0].data(); // Assuming only one entry
          setLiveClassInfo({
            date: docData.date,
            time: docData.time,
          });
        } else {
          console.error("No matching document found!");
        }
      } catch (error) {
        console.error("Error fetching live class data:", error);
      }
    };

    fetchLiveClassInfo();
  }, []);

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



  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  const faqs = [
    { question: "What is the FE Civil Exam?", answer: "A computer-based exam for aspiring professional engineers, covering fundamental civil engineering topics." },
    { question: "Who is eligible to take the FE Exam?", answer: "Engineering graduates or final-year students from an ABET-accredited program." },
    { question: "How many questions are on the exam?", answer: "110 multiple-choice questions, with a 6-hour duration including a 25-minute break." },
    { question: "What is the passing score?", answer: "The passing score is not fixed; it varies based on overall test performance and difficulty." },
    { question: "How often can I take the FE Exam?", answer: "You can take it up to 3 times in a 12-month period, with a 2-month gap between attempts." },
    { question: "What materials are allowed during the exam?", answer: "Only the FE Reference Handbook (provided digitally) and an NCEES-approved calculator." },
    { question: "How much does the FE Exam cost?", answer: "$175, but some states may have additional costs." },
    { question: "How do I register for the FE Exam?", answer: "Register via the NCEES website, select a test center, and schedule your exam." },
    { question: "How long does it take to get results?", answer: "Results are typically released within 7–10 days on your NCEES account." },
    { question: "What happens after passing the FE Exam?", answer: "You become an Engineer-in-Training (EIT) or Engineering Intern (EI) and can later take the PE Exam for full licensure." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "1. Introduction to the FE Civil Exam",
      content: [
        "The Fundamentals of Engineering (FE) Civil Exam is the first step toward professional engineering licensure.",
        "It is designed for recent graduates and students nearing the completion of an ABET-accredited engineering degree.",
        "The exam is administered by the National Council of Examiners for Engineering and Surveying (NCEES) in the U.S."
      ]
    },
    {
      title: "2. Exam Format and Duration",
      content: [
        "The FE Civil Exam is a computer-based test (CBT) conducted at Pearson VUE test centres.",
        "It consists of 110 multiple-choice questions covering key civil engineering topics.",
        "The total exam duration is 6 hours, including a 25-minute break.",
        "It follows a linear-on-the-fly testing (LOFT) format, meaning each candidate gets a unique set of questions.",
        "A digital reference handbook is provided during the exam."
      ]
    },
    {
      title: "3. Exam Topics and Coverage",
      content: [
        "Mathematics & Statistics – Includes calculus, statistics, and probability.",
        "Ethics & Professional Practice – Covers engineering ethics and professional responsibilities.",
        "Engineering Economics – Time value of money, cost analysis, and risk assessment.",
        "Statics – Force systems, equilibrium, and moments of inertia.",
        "Dynamics – Kinematics, energy principles, and force acceleration."
      ]
    },
    {
      title: "4. Scoring and Passing Criteria",
      content: [
        "The FE Exam uses a scaled scoring system, and there is no fixed passing percentage.",
        "The passing score is determined based on the exam difficulty and performance of all test-takers.",
        "Results are released 7–10 days after the exam via the NCEES account.",
        "Candidates receive a Pass/Fail result without detailed score breakdowns."
      ]
    },
    {
      title: "5. Eligibility and Registration",
      content: [
        "The FE Civil Exam is open to engineering graduates or students in their final year of study.",
        "Registration is done through the NCEES website.",
        "Exam fees are $175 (as of 2025) but may vary by state.",
        "Some states may have additional eligibility requirements, so check with your state board."
      ]
    },
    {
      title: "6. Study Materials and Preparation",
      content: [
        "The FE Reference Handbook is the only official material allowed during the exam.",
        "Popular prep books include Lindeburg's FE Civil Review Manual and NCEES Practice Exams.",
        "Practice solving problems quickly since time management is crucial.",
        "Weekly mock tests help improve speed and accuracy.",
        "Formula sheets and shortcuts are useful for last-minute revision.",
        "Focus on conceptual understanding rather than memorization."
      ]
    },
    {
      title: "7. Exam-Day Guidelines",
      content: [
        "Arrive at the test center 30 minutes before the scheduled exam time.",
        "Bring a valid government-issued ID matching your NCEES registration name.",
        "Only NCEES-approved calculators (e.g., Casio FX-115, TI-30X series) are allowed.",
        "Personal items, including phones, smartwatches, and notes, are prohibited.",
        "A scratch pad and marker will be provided for rough work."
      ]
    }
  ];

  const sections1 = [
    {
      title: "1. Introduction to the FE Civil Exam",
      content: [
        "The Fundamentals of Engineering (FE) Civil Exam is the first step toward professional engineering licensure.",
        "It is designed for recent graduates and students nearing the completion of an ABET-accredited engineering degree.",
        "The exam is administered by the National Council of Examiners for Engineering and Surveying (NCEES) in the U.S."
      ]
    },
    {
      title: "2. Exam Format and Duration",
      content: [
        "The FE Civil Exam is a computer-based test (CBT) conducted at Pearson VUE test centres.",
        "It consists of 110 multiple-choice questions covering key civil engineering topics.",
        "The total exam duration is 6 hours, including a 25-minute break.",
        "It follows a linear-on-the-fly testing (LOFT) format, meaning each candidate gets a unique set of questions.",
        "A digital reference handbook is provided during the exam."
      ]
    },
    {
      title: "3. Exam Topics and Coverage",
      content: [
        "Mathematics & Statistics – Includes calculus, statistics, and probability.",
        "Ethics & Professional Practice – Covers engineering ethics and professional responsibilities.",
        "Engineering Economics – Time value of money, cost analysis, and risk assessment.",
        "Statics – Force systems, equilibrium, and moments of inertia.",
        "Dynamics – Kinematics, energy principles, and force acceleration."
      ]
    },
    {
      title: "4. Scoring and Passing Criteria",
      content: [
        "The FE Exam uses a scaled scoring system, and there is no fixed passing percentage.",
        "The passing score is determined based on the exam difficulty and performance of all test-takers.",
        "Results are released 7–10 days after the exam via the NCEES account.",
        "Candidates receive a Pass/Fail result without detailed score breakdowns."
      ]
    },
    {
      title: "5. Eligibility and Registration",
      content: [
        "The FE Civil Exam is open to engineering graduates or students in their final year of study.",
        "Registration is done through the NCEES website.",
        "Exam fees are $175 (as of 2025) but may vary by state.",
        "Some states may have additional eligibility requirements, so check with your state board."
      ]
    },
    {
      title: "6. Study Materials and Preparation",
      content: [
        "The FE Reference Handbook is the only official material allowed during the exam.",
        "Popular prep books include Lindeburg's FE Civil Review Manual and NCEES Practice Exams.",
        "Practice solving problems quickly since time management is crucial.",
        "Weekly mock tests help improve speed and accuracy.",
        "Formula sheets and shortcuts are useful for last-minute revision.",
        "Focus on conceptual understanding rather than memorization."
      ]
    },
    {
      title: "7. Exam-Day Guidelines",
      content: [
        "Arrive at the test center 30 minutes before the scheduled exam time.",
        "Bring a valid government-issued ID matching your NCEES registration name.",
        "Only NCEES-approved calculators (e.g., Casio FX-115, TI-30X series) are allowed.",
        "Personal items, including phones, smartwatches, and notes, are prohibited.",
        "A scratch pad and marker will be provided for rough work."
      ]
    }
  ];
  

  return (
    <div>
      {/* Existing Section */}
      <div className="snowflake-section">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            {/* Left Section */}
            <div className="left-section col-md-6">
              <h1 className="heading">Snowflake  Certification </h1>
              <h3 className="subheading">Comprehensive preparation for the Snowflake Course with expert guidance
              and resources</h3>
              <ul>
              <li>Instructor Led Training: 25 Hrs</li>
                <li>1on1 Training Option Available</li>
                <li>Dedicated Doubt-Solving Sessions for better understanding.</li>
                <li> Experienced & Professional Trainers</li>
                <li>Smart Shortcuts & Tricks to solve problems efficiently.</li>
              </ul>
              <h4 className="live-class">
              Live Online Classes | {liveClassInfo.date} {liveClassInfo.time} IST (Sunday)
            </h4>
            </div>

            {/* Right Section */}
            <div className="right-section col-md-5 bg-light shadow rounded p-4 mx-auto">
              {/* Form Heading */}
              <h2 className="text-center mb-3">JOIN THE COURSE</h2>
              {/* Live Class Alert */}
              
              {/* Form */}
              <img
  src="https://apukkaresort.fi/wp-content/uploads/2024/05/Apukka-Resort-Rovaniemi-Lapland-Blog_Photos-snowflake-354-1024x782-1.webp"
  alt="Azure Data Factory"
  className="img-fluid"
  style={{ marginBottom: '10px' }} // Inline style
/>
      <button
              type="button"
              className="btn btn-primary whyChooseModalButton"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Enroll Now
            </button>
            </div>
          </div>
        </div>
      </div>

      {/* New Section: Azure Data Engineering Courses start*/}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">
            SNOWFLAKE <span className="text-primary">COURSE</span>
            </h2>
            <p className="text-muted">
            (Live Sessions + Professional Trainers + Small Batches + 24 X 7 support)
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mb-4">
            <div className="shadow-left">
      <img
        src="\images\instructor_snowflake.jpeg"
        alt="Azure Data Factory"
        className="img-fluid"
      />
      <div
        className="mt-2 p-2 shadow-sm rounded bg-light"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Live Sessions
      </div>
    </div>
            </div>
           {/* Card 2 */}
  <div className="col-md-3 text-center mb-4">
    <div className="shadow-left">
      <img
        src="\images\instructor.jpeg"
        alt="Databricks with PySpark"
        className="img-fluid"
      />
      <div
        className="mt-2 p-2 shadow-sm rounded bg-light"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Professional Trainers
      </div>
    </div>
  </div>
            {/* Card 3 */}
  <div className="col-md-3 text-center mb-4">
    <div className="shadow-left">
      <img
        src="\images\small_batch.jpeg"
        alt="Tips and Tricks"
        className="img-fluid"
      />
      <div
        className="mt-2 p-2 shadow-sm rounded bg-light"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Small Batches
      </div>
    </div>
  </div>
            {/* Card 4 */}
  <div className="col-md-3 text-center mb-4">
    <div className="shadow-left">
      <img
        src="\images\support.jpeg"
        alt="24 X 7 Support"
        className="img-fluid"
      />
      <div
        className="mt-2 p-2 shadow-sm rounded bg-light"
        style={{
          fontSize: "1rem",
          fontWeight: "bold",
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        24x7 Support
      </div>
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
            src="\images\dataSnowflake.jpg"
            alt="Project Feedback"
            className="img-fluid custom-image"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="col-md-6">
  <h2 className="fw-bold">Description</h2>
  <p className="description-text" style={{ maxWidth: '500px', textAlign: 'justify', fontFamily: 'Montserrat', fontWeight: '400' }}> 
  Edufulness is here to help you get started with the Snowflake certification course to ensure you have the right means to enjoy a career in this domain. Our Snowflake online course will help you gain an in-depth understanding of key concepts Snowflake cloning, fail-safe, analytics solutions, undrop, and object. This Snowflake training is designed to help you gain mastery over the fundamentals of key data warehousing capabilities and working with data and analytics.

</p>
</div>
    </div>
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
              Edufulness's Snowflake Course is  Project Based Career
              Programs that promises  Placement Support on completing
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
    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>SNOWFLAKE COURSE</h2>
    <p className="text-center pb-4" style={{ fontSize: '1rem', fontFamily: 'Montserrat', fontWeight: '400' }}> 
      Check the only eligibility criteria <br />
      Students & Working Professionals, seeking opportunities to upskill their Data Engineering proficiency for faster career growth.
    </p>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Instructor Led Training: 25 Hrs</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>1on1 Training Option Available</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Experienced & Professional Trainers</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>24x7 Support & Access</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Small Batches</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Flexible Schedule</h5> 
        </div>
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
    <section style={{ fontFamily: 'sans-serif' }}>
  <div className="overview">
    <div className="container">
      <div className="row overview_row">
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Snowflake Topics
        </h2>

        <p className="text-center pb-4" style={{ fontSize: '1rem', fontFamily: 'Montserrat', fontWeight: '400' }}>
          The Snowflake Course covers the following subjects.
        </p>

        <div className="row">
          {/* First Column */}
          <div className="col-md-4 col-sm-6 mb-3">
            {[
              "Introduction to Snowflake",
              "Understanding Cloud Platforms",
              "Data Loading and Unloading in Snowflake Cloud",
              "Snowpipe"
            ].map((subject, index) => (
              <div key={index} className="card shadow bg-light mb-3" 
                style={{ border: 'none', borderRadius: '0', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '700', textAlign: 'center' }}>
                    {subject}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="col-md-4 col-sm-6 mb-3">
            {[
              "Partner Connect With Snowflake",
              "Handling JSON and Semi Structured Data",
              "Scheduling with Snowflake",
              "Secure Data Sharing"
            ].map((subject, index) => (
              <div key={index} className="card shadow bg-light mb-3" 
                style={{ border: 'none', borderRadius: '0', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '700', textAlign: 'center' }}>
                    {subject}
                  </h5>
                </div>
              </div>
            ))}
          </div>

          {/* Third Column */}
          <div className="col-md-4 col-sm-6 mb-3">
            {[
              "Cloning in Snowflake",
              "Time Travel and Failsafe in Snowflake",
              "Clustering and Performance"
            ].map((subject, index) => (
              <div key={index} className="card shadow bg-light mb-3" 
                style={{ border: 'none', borderRadius: '0', minHeight: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '700', textAlign: 'center' }}>
                    {subject}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





    <section 
  className="mb-5 p-4 shadow-sm bg-light rounded"
  style={{ marginLeft: '40px', marginRight: '40px' }} // Inline styles for margins
>
  <p>
  <div className="container my-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
<h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Snowflake Course</h2>
      
      {/* Introduction */}
      <div className="mb-4">
        <p>
        <h3 className="h5 text-dark fw-bold">1. Introduction</h3>
        </p>
        <ul>
          <p style={{ textAlign: 'justify' }}>
          Edufulness's Snowflake training Online is aligned with the latest curriculum of the Snowflake certification exam. Our Snowflake certification online training course includes basic concepts and features to make you proficient in this cloud-based tool. This training will also help you build a data architecture, collect data, identify patterns, create models, and build data pipelines in Snowflake. Upon successful completion of our Snowflake certification training, participants can apply for roles such as Snowflake Developer, Data Analyst, and Snowflake Data Engineer positions in any industry. Snowflake is the most popular cloud-based data tool and it has become popular among IT professionals. Backed by a team of experienced trainers, Edufulness helps you learn the basic and advanced concepts of this cloud-based data tool. You can learn how to use Snowflake to handle and organize a large data bank.
          </p>
        </ul>
      </div>

      {/* Exam Format */}
      <div className="mb-4">
       <p> 
        <h3 className="h5 text-dark fw-bold">2. Objectives for Snowflake Training</h3>
        </p>
        <ul>
        <p style={{ textAlign: 'justify' }}>
        At Edufulness, we understand the needs of every individual. Thus, we work by incorporating advanced methodologies to make them proficient in the data warehouse. Our main objective is to provide individuals with industrial expertise. Our instructor-led training program can help you open up opportunities for your career growth in diverse domains
        </p>
        </ul>
        
      </div>

      {/* Exam Topics */}
      <div className="mb-4">
        <p>
        <h3 className="h5 text-dark fw-bold">3. Skills Covered in Snowflake Certification Training</h3>

        </p>
                
        <p>
        <ul>
  <li>Demonstrate the Snowflake Cloud Data Platform's distinct and differentiated architecture.</li>
  <li>Data loading and transformation.</li>
  <li>Examine query constructs as well as DDL and DML operations.</li>
  <li>Describe how you can easily manage user and application access.</li>
  <li>Take a look at Snowflake's SQL support for data analysis.</li>
  <li>Examine the many methods to connect to the Snowflake Platform and interact with it.</li>
  <li>Use Data Sharing to transmit data to customers and partners in real-time.</li>
  <li>Demonstrate how to work with semi-structured data using best practices.</li>
  <li>Examine how Snowflake takes a unique approach to caching.</li>
  <li>For continuous data security, use Snowflake's technique.</li>
</ul>

        </p>
        

      </div>

      {/* Scoring */}
      <div className="mb-4">
        <p>
        <h3 className="h5 text-dark fw-bold">4. Who Should Opt Snowflake Certification Course ?</h3>
        <p><ul>
        Any data engineer having basic knowledge of SQL can take this Snowflake course. Recently, the following professionals have been in the race to take the Snowflake course.
        </ul>
        
        </p>
        <ul>
  <li>Data Analysts</li>
  <li>Data Engineers</li>
  <li>Data Scientists</li>
  <li>Database Architects</li>
  <li>Database Administrators</li>
  <li>Data Application Developers</li>
  <li>Anyone who wants to study Snowflake at all levels from beginner to expert.</li>
</ul>

        </p>
      </div>

      {/* Eligibility and Registration */}
      <div className="mb-4">
        <p>
        <h3 className="h5 text-dark fw-bold">5. Prerequisites for Snowflake Online Training</h3>
        <ul>
        Basic knowledge of SQL is recommended.
        </ul>
        </p>
      </div>

      {/* Study Materials */}
      <div className="mb-4">
        <p>
        <h3 className="h5 text-dark fw-bold">6. Advantages for Snowflake Online Course</h3>
        <ul>
        Recruiters prioritize candidates with proven knowledge, skills, and industry-recognized certifications in Snowflake. Companies seek Snowflake professionals who possess a comprehensive skillset. Enhance your Snowflake career prospects by honing expertise through igmGuru's Snowflake certification course.
        </ul>
        </p>
      </div>

     
    </div>
  </p>

        
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
  <span style={{ textDecoration: 'line-through' }}>₹30000</span> ₹15000 (Inc taxes)
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
      backgroundColor: '#101743',
      color: '#fff', 
      padding: '50px 0',
      textAlign: 'center' 
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Master Snowflake with Edufulness certification 
              for becoming an Advanced Data Professional</h2>
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
   





<div className="container mt-5">
      
      {/*FAQS*/}
      <section>
        <h2 className="mb-3">FAQs</h2>
      <SnowflakeAccordion/>

      </section>
    </div>


  

  




    



    </div>
  );
};

export default Banner2;
