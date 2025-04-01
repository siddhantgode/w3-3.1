import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "./Banner.css"; // Import the existing CSS file for additional custom styles
import SimpleGrid from "./Timeline";
import { Accordion, Container,Row, Col } from 'react-bootstrap';
import { db } from "./firebase"; // Import Firestore
import { collection, query, where, getDocs ,addDoc} from "firebase/firestore"
import RegistrationForm from './components/registrationForm';
import Roadmap from './components/roadmap';
import CustomAccordion from './accordian';



const Banner1 = () => {

  const [liveClassInfo, setLiveClassInfo] = useState({
    date: "Loading...",
    time: "Loading...",
    dateString: "Loading...",
  });
  const [coursePrice, setCoursePrice] = useState({
    previousPrice: 0,
    currentPrice: 0,
  });

  useEffect(() => {
      const fetchLiveClassInfo = async () => {
        try {
          const q = query(
            collection(db, "courseSchedules"),
            where("name", "==", "F.E. Civil") // Fetch only F.E. Civil course
          );
  
          const querySnapshot = await getDocs(q);
          if (!querySnapshot.empty) {
            const docData = querySnapshot.docs[0].data(); // Assuming only one entry
            setLiveClassInfo({
              date: docData.date,
              time: docData.time,
              dateString: docData.dateString,
            });
            setCoursePrice({
              previousPrice: docData.previousPrice || 0,
              currentPrice: docData.currentPrice || 0,
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
      <div className="civil-section">
      <div className="container">
        <div className="row justify-content-around align-items-center">
          {/* Left Section */}
          <div className="left-section col-md-6">
            <h1 className="heading">FE Civil Engineering Course</h1>
            <h3 className="subheading">
              Comprehensive preparation for the FE Civil Exam with expert
              guidance and resources
            </h3>
            <ul>
              <li>200+ Hours of Comprehensive Lectures covering all key topics.</li>
              <li>Weekly Tests & Assessments to track progress.</li>
              <li>Dedicated Doubt-Solving Sessions for better understanding.</li>
              <li>Well-Explained Examples for concept clarity.</li>
              <li>Smart Shortcuts & Tricks to solve problems efficiently.</li>
            </ul>
            
            {/* Dynamic Date & Time from Firestore */}
            <h4 className="live-class">
              Live Online Classes | {liveClassInfo.dateString}
            </h4>
          </div>

          {/* Right Section */}
          <div className="right-section col-md-5 bg-light shadow rounded p-4 mx-auto">
            {/* Form Heading */}
            <h2 className="text-center mb-3">JOIN THE COURSE</h2>

            {/* Form */}
            <img
              src="\images\a_civil_engineer_in_a_blue_hard.jpeg"
              alt="Azure Data Factory"
              className="img-fluid"
              style={{ marginBottom: "10px" }} // Inline style
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
            CIVIL ENGINEERING <span className="text-primary">COURSE</span>
            </h2>
            <p className="text-muted">
            (Lectures + Doubt Solving + Tips and Tricks + Weekly Tests)
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-3 text-center mb-4">
            <div className="shadow-left">
      <img
        src="\images\cartoon_man.jpg"
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
        src="https://cdn3d.iconscout.com/3d/premium/thumb/brain-question-3d-icon-download-in-png-blend-fbx-gltf-file-formats--head-ask-mark-pack-miscellaneous-icons-5737116.png?f=webp"
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
        Doubt Solving
      </div>
    </div>
  </div>
            {/* Card 3 */}
  <div className="col-md-3 text-center mb-4">
    <div className="shadow-left">
      <img
        src="\images\idea.jpg"
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
        Tips and Tricks
      </div>
    </div>
  </div>
            {/* Card 4 */}
  <div className="col-md-3 text-center mb-4">
    <div className="shadow-left">
      <img
        src="https://media.istockphoto.com/id/1435832173/vector/hands-holding-clipboard-with-checklist-with-green-check-marks-and-pen-human-filling-control.jpg?s=612x612&w=0&k=20&c=vH1XOePx4EcSWEjhNdsZjbANcBw6kMZBrpPgHFwuWJg="
        alt="Weekly Tests"
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
        Weekly Tests
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
            src="/images/CIVIL_EQUIP.jpeg"
            alt="Project Feedback"
            className="img-fluid custom-image"
          />
        </div>
      </div>

      {/* Description Section */}
      <div className="col-md-6">
  <h2 className="fw-bold">Description</h2>
  <p className="description-text" style={{ maxWidth: '500px', textAlign: 'justify', fontFamily: 'Montserrat', fontWeight: '400' }}> 
  the FE Civil Engineering exam, the first step towards professional licensure. It covers the exam's syllabus, format, and frequently asked questions.  The syllabus includes key subjects like Mathematics and Statistics, Ethics, Economics, Statics, Dynamics, Mechanics of Materials, Materials Science, Fluid Mechanics, Surveying, Water Resources, Structural, Geotechnical, Transportation, and Construction Engineering. The computer-based exam consists of 110 multiple-choice questions over 6 hours, including a break.  It is administered by NCEES and tests fundamental engineering concepts. The FAQs address common questions about the exam's purpose, eligibility, number of questions, and scoring.
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
              Edufulness's F.E Civil is leading Project Based Career
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
    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>FE Exam Civil Engineering</h2>
    <p className="text-center pb-4" style={{ fontSize: '1rem', fontFamily: 'Montserrat', fontWeight: '400' }}> 
      Check the only eligibility criteria <br />
      Students & Working Professionals, seeking opportunities to upskill their Data Engineering proficiency for faster career growth.
    </p>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>200+ Hours of Comprehensive Lectures covering all key topics.</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Weekly Tests & Assessments to track progress.</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Dedicated Doubt-Solving Sessions for better understanding.</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Well-Explained Examples for concept clarity.</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Smart Shortcuts & Tricks to solve problems efficiently.</h5> 
        </div>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card shadow bg-light" style={{ border: 'none', borderRadius: '0', minHeight: '100px' }}> 
        <div className="card-body d-flex align-items-center justify-content-center"> 
          <h5 style={{ fontSize: '1.2rem', fontFamily: 'Montserrat', fontWeight: '600' }}>Expert Faculty</h5> 
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
          FE Exam Subjects
        </h2>

        <p className="text-center pb-4" style={{ fontSize: '1rem', fontFamily: 'Montserrat', fontWeight: '400' }}>
          The FE Civil Exam covers the following subjects.
        </p>

        {/* Subjects List */}
        {[
          "Mathematics and Statistics",
          "Ethics, Economics",
          "Statics",
          "Dynamics",
          "Mechanics of Materials",
          "Materials Science",
          "Fluid Mechanics",
          "Surveying",
          "Water Resources",
          "Structural",
          "Geotechnical",
          "Transport and Construction Eng."
          
        ].map((subject, index) => (
          <div key={index} className="col-md-3 col-sm-6 mb-3">
            <div 
              className="card shadow bg-light" 
              style={{ 
                border: 'none', 
                borderRadius: '0', 
                minHeight: '60px',  // Reduced card size
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '10px'  // Adding some spacing inside
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 style={{ 
                  fontSize: '1.2rem',  // Increased font size
                  fontFamily: 'Montserrat', 
                  fontWeight: '700', // Bold and stronger
                  textAlign: 'center' 
                }}>
                  {subject}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


    <section 
  className="mb-5 p-4 shadow-sm bg-light rounded"
  style={{ marginLeft: '40px', marginRight: '40px' }} // Inline styles for margins
>
<div className="container my-5" style={{ paddingLeft: '20px', paddingRight: '20px' }}>
<h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>FE Civil Engineering</h2>
      
      {/* Introduction */}
      <div className="mb-4">
        <h3 className="h5 text-dark fw-bold">1. Introduction</h3>
        <ul>
          <li>The Fundamentals of Engineering (FE) Civil Exam is the first step toward professional engineering licensure.</li>
          <li>Designed for recent graduates and students nearing the completion of an ABET-accredited engineering degree.</li>
          <li>Administered by the National Council of Examiners for Engineering and Surveying (NCEES) in the U.S.</li>
        </ul>
      </div>

      {/* Exam Format */}
      <div className="mb-4">
        <h3 className="h5 text-dark fw-bold">2. Exam Format and Duration</h3>
        <ul>
          <li>Computer-based test (CBT) conducted at Pearson VUE test centers.</li>
          <li>110 multiple-choice questions covering key civil topics.</li>
          <li>Total duration: 6 hours, including a 25-minute break.</li>
          <li>Linear-on-the-fly testing (LOFT) ensures unique question sets for each candidate.</li>
          <li>Digital reference handbook provided during the exam.</li>
        </ul>
      </div>

      {/* Exam Topics */}
      <div className="mb-4">
        <h3 className="h5 text-dark fw-bold">3. Exam Topics</h3>
        <ul>
          <li>Mathematics & Statistics: Calculus, statistics, probability.</li>
          <li>Ethics & Professional Practice: Engineering ethics and responsibilities.</li>
          <li>Engineering Economics: Time value of money, cost analysis, and risk assessment.</li>
          <li>Statics: Force systems, equilibrium, and moments of inertia.</li>
          <li>Dynamics: Kinematics, energy principles, and force acceleration.</li>
          <li>Mechanics of Materials: Stress-strain analysis, bending, shear, and torsion.</li>
          <li>Materials Science: Properties and testing of concrete, steel, and asphalt.</li>
          <li>Water Resources & Environmental Engineering: Hydrology, water treatment, and stormwater systems.</li>
        </ul>
      </div>

      {/* Scoring */}
      <div className="mb-4">
        <h3 className="h5 text-dark fw-bold">4. Scoring and Passing Criteria</h3>
        <ul>
          <li>The FE Exam uses a scaled scoring system, and there is no fixed passing percentage.</li>
          <li>The passing score is determined based on the exam difficulty and performance of all test-takers.</li>
          <li>Results are released 7–10 days after the exam via the NCEES account.</li>
          <li>Candidates receive a Pass/Fail result without detailed score breakdowns.</li>
        </ul>
      </div>

      {/* Eligibility and Registration */}
      <div className="mb-4">
        <h3 className="h5 text-dark fw-bold">5. Eligibility and Registration</h3>
        <ul>
          <li>The FE Civil Exam is open to engineering graduates or students in their final year of study.</li>
          <li>Registration is done through the NCEES website.</li>
          <li>Exam fees are $175 (as of 2025) but may vary by state.</li>
          <li>Some states may have additional eligibility requirements, so check with your state board.</li>
        </ul>
      </div>

      {/* Study Materials */}
      <div className="mb-4">
        <h3 className="h5 text-dark fw-bold">6. Study Materials and Preparation</h3>
        <ul>
          <li>The FE Reference Handbook is the only official material allowed during the exam.</li>
          <li>Popular prep books include Lindeburg's FE Civil Review Manual and NCEES Practice Exams.</li>
          <li>Practice solving problems quickly since time management is crucial.</li>
          <li>Weekly mock tests help improve speed and accuracy.</li>
          <li>Formula sheets and shortcuts are useful for last-minute revision.</li>
          <li>Focus on conceptual understanding rather than memorization.</li>
        </ul>
      </div>

      {/* Exam Day Guidelines */}
      <div className="mb-4">
        <h3 className="h5 text-dark fw-bold">7. Exam-Day Guidelines</h3>
        <ul>
          <li>Arrive at the test center 30 minutes before the scheduled exam time.</li>
          <li>Bring a valid government-issued ID matching your NCEES registration name.</li>
          <li>Only NCEES-approved calculators (e.g., Casio FX-115, TI-30X series) are allowed.</li>
          <li>Personal items, including phones, smartwatches, and notes, are prohibited.</li>
          <li>A scratch pad and marker will be provided for rough work.</li>
        </ul>
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
  <span style={{ textDecoration: 'line-through' }}>${coursePrice.previousPrice}</span> ${coursePrice.currentPrice} (Inc taxes)
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Master the Civil Engineering with Edufulness certification 
              for becoming an Advanced Engineering Professional</h2>
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
   
{/*Where studetns work end */}

{/*Youtue link start*/}




<div className="container mt-5">
      
      
      <section>
        <h2 className="mb-3">FAQs</h2>
      <CustomAccordion/>

      </section>
    </div>


  

  




    



    </div>
  );
};

export default Banner1;
