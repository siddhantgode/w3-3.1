import React, { useState } from "react";
import { db } from "../firebase"; // Import Firestore instance from firebase.js
import { addDoc, collection } from "firebase/firestore"; // Firestore functions

function RegistrationForm() {
  const [formData, setFormData] = useState({
    UserName: "",
    EmailID: "",
    PhoneNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false); // State for toast visibility

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save form data to Firestore
      await addDoc(collection(db, "formSubmissions"), formData);

      setShowToast(true); // Show toast on success

      // Clear form fields
      setFormData({ UserName: "", EmailID: "", PhoneNumber: "" });

      // Automatically hide toast after 5 seconds
      setTimeout(() => setShowToast(false), 5000);
    } catch (error) {
      console.error("Error saving form data:", error);
      alert("An error occurred while saving the form data.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="right-section col-md-5 bg-light shadow rounded p-4 mx-auto">
      {/* Form Heading */}
      <h2 className="text-center mb-3">FILL THE FORM</h2>

      {/* Live Class Alert */}
      <h3 className="live-class-alert text-info text-center mb-4">
        Live Online Classes <br />
        24-Nov-2024 10:00AM IST <br />
        (Sunday)
      </h3>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Full Name Field */}
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

        {/* Email Address Field */}
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

        {/* Phone Number Field */}
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

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Enroll Now"}
        </button>
      </form>

      {/* Toast Message */}
      {showToast && (
        <div
          className="toast show position-fixed bottom-0 end-0 m-3"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{
            minWidth: "250px", // Reduced width
            fontSize: "1rem", // Default font size
          }}
        >
          <div className="toast-header bg-primary text-white">
            {/* Toast Header with Blue Background */}
            <strong className="me-auto">Success</strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setShowToast(false)}
            ></button>
          </div>
          <div className="toast-body">
            Thank you for registering with us! Your details have been saved successfully.
          </div>
        </div>
      )}
    </div>
  );
}

export default RegistrationForm;