import React, { useState } from 'react';
import { Accordion, Container, Row, Col, Modal, Button, Form } from 'react-bootstrap';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import RegistrationForm from '../components/registrationForm';
import CustomAccordion from '../accordian';

function FeCivil() {
  const [formData, setFormData] = useState({
    UserName: "",
    EmailID: "",
    PhoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "formSubmissions"), formData);
      alert("Form data saved successfully!");
      setFormData({ UserName: "", EmailID: "", PhoneNumber: "" });
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("An error occurred while saving the form data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleEnrollNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setShowModal(false);
  };

  return (
    <div>
      <div className="civil-section">
        <div className="container">
          <div className="row justify-content-around align-items-center">
            <div className="left-section col-md-6">
              <h1 className="heading">FE Civil Engineering Course...</h1>
              <h3 className="subheading">Comprehensive preparation for the FE Civil Exam with expert guidance and resources.</h3>
              <ul>
                <li>200+ Hours of Comprehensive Lectures covering all key topics.</li>
                <li>Weekly Tests & Assessments to track progress.</li>
                <li>Dedicated Doubt-Solving Sessions for better understanding.</li>
                <li>Well-Explained Examples for concept clarity.</li>
                <li>Smart Shortcuts & Tricks to solve problems efficiently.</li>
              </ul>
              <h4 className="live-class">Live Online Classes | 16-Feb-2025 10:00AM IST (Sunday)</h4>
            </div>

            <div className="right-section shadow rounded p-4 mx-auto">
              <button type="button" className="btn btn-primary whyChooseModalButton" onClick={handleEnrollNowClick}>
                Enroll Now
              </button>
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Dialog style={{ maxWidth: '180%', width: '180%', margin: '0 auto' }}>
                  <Modal.Header closeButton>
                    <Modal.Title>Test Modal</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <RegistrationForm formData={formData} setFormData={setFormData} handleInputChange={handleInputChange} />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                  </Modal.Footer>
                </Modal.Dialog>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">CIVIL ENGINEERING <span className="text-primary">COURSE</span></h2>
            <p className="text-muted">(Lectures + Doubt Solving + Tips and Tricks + Weekly Tests)</p>
          </div>
        </div>
      </section>

      <section className="mb-5 p-4 shadow-sm rounded">
        <h2 className="h3 text-dark mb-3 fw-bold">Syllabus</h2>
        <p className="h5 mb-2 text-secondary">FE Civil Engineering Subjects:</p>
        <div className="row g-3">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>• Mathematics and Statistics</li>
              <li>• Ethics and Professional Practice</li>
              <li>• Engineering Economics</li>
              <li>• Statics</li>
              <li>• Dynamics</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>• Mechanics of Materials</li>
              <li>• Materials</li>
              <li>• Fluid Mechanics</li>
              <li>• Surveying</li>
              <li>• Water Resources and Environmental Engineering</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li>• Structural Engineering</li>
              <li>• Geotechnical Engineering</li>
              <li>• Transportation Engineering</li>
              <li>• Construction Engineering</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-5 p-4 shadow-sm bg-light rounded">
        <h2 className="h3 text-dark mb-4 fw-bold">FE Exam Civil Engineering</h2>
        <h3 className="h5 text-dark fw-bold">1. Introduction</h3>
        <ul>
          <li>The Fundamentals of Engineering (FE) Civil Exam is the first step toward professional engineering licensure.</li>
          <li>Designed for recent graduates and students nearing the completion of an ABET-accredited engineering degree.</li>
        </ul>
      </section>

      <section className="mb-5 p-4 shadow-sm bg-light rounded">
        <h2 className="h3 text-dark mb-4 fw-bold">FAQs</h2>
        <CustomAccordion />
      </section>
    </div>
  );
}

export default FeCivil;
