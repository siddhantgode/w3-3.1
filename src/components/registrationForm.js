import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const RegistrationForm = ({ dateString, defaultCourse = "Data Eng.", isModal = false }) => {
  const [formData, setFormData] = useState({
    UserName: "",
    EmailID: "",
    PhoneNumber: "",
    Course: defaultCourse,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // Function to determine course based on URL
  useEffect(() => {
    const pathname = window.location.pathname;
    let courseFromUrl = defaultCourse; // Default to prop value if no match
    if (pathname === "/snowflake") courseFromUrl = "Snowflake";
    else if (pathname === "/dataeng") courseFromUrl = "Data Eng.";
    else if (pathname === "/eng") courseFromUrl = "English Speaking";
    else if (pathname === "/fe_civil") courseFromUrl = "FE Civil";

    setFormData((prev) => ({ ...prev, Course: courseFromUrl }));
  }, [defaultCourse]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "formSubmissions"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setToast({
        show: true,
        message: "Thank you for registering! Your details have been saved.",
        type: "success",
      });
      setFormData({ UserName: "", EmailID: "", PhoneNumber: "", Course: formData.Course });
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 5000);
    } catch (error) {
      console.error("Error:", error);
      setToast({
        show: true,
        message: "Failed to submit form. Please try again.",
        type: "error",
      });
      setTimeout(() => setToast({ show: false, message: "", type: "" }), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`p-4 ${isModal ? "modal-form" : ""}`}
      style={{
        maxWidth: "350px",
        margin: "0 auto",
        border: "1px solid #ccc",
        borderRadius: "0.5rem",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form onSubmit={handleSubmit} className="form-container">
        <div className="mb-4">
          <label htmlFor="UserName" className="form-label">Full Name</label>
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
        <div className="mb-4">
          <label htmlFor="EmailID" className="form-label">Email Address</label>
          <input
            type="email"
            name="EmailID"
            className="form-control"
            id="EmailID"
            placeholder="Enter your email"
            value={formData.EmailID}
            onChange={handleInputChange}
            required
            aria-describedby="emailError"
          />
          {formData.EmailID && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.EmailID) && (
            <div id="emailError" className="text-danger">Invalid email format</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="PhoneNumber" className="form-label">Phone Number</label>
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
        <div className="mb-4">
          <label htmlFor="Course" className="form-label">Course</label>
          <select
            name="Course"
            className="form-control"
            id="Course"
            value={formData.Course}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a course</option>
            <option value="Data Eng.">Data Eng.</option>
            <option value="FE Civil">FE Civil</option>
            <option value="Snowflake">Snowflake</option>
            <option value="English Speaking">English Speaking</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100 py-2" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Enroll Now"}
        </button>
      </form>
      {toast.show && (
        <div
          className={`toast show position-fixed bottom-0 end-0 m-3 ${toast.type === "error" ? "bg-danger text-white" : "bg-primary text-white"}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">{toast.type === "error" ? "Error" : "Success"}</strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={() => setToast({ show: false, message: "", type: "" })}
            ></button>
          </div>
          <div className="toast-body">{toast.message}</div>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;