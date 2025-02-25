import React from 'react';
import logo from './images/Edufulness-2.svg'; // Import the logo

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#101743', color: '#fff', padding: '40px 20px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          maxWidth: '1200px',
          margin: '0 auto',
          gap: '40px', // Added gap for spacing between columns
        }}
      >
        {/* Left Section */}
        <div style={{ flex: '1', minWidth: '300px', marginBottom: '20px' }}>
          <img
            src={logo} // Use the imported logo here
            alt="Edufulness Logo"
            style={{ width: '350px', marginBottom: '20px' }}
          />
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Our mission is to provide a class education to anyone, anywhere. Get your courses at
            <strong> Edufulness.com</strong>.
          </p>
        </div>

        {/* Right Section */}
        <div style={{ flex: '1', minWidth: '300px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>Still have queries? Contact Us</h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
            Request a Callback. An expert from the admissions office will call you in the next 24 working hours.
            You can also reach out to us at <strong>edufulness@gmail.com</strong> or <strong>+91-9567034641</strong>.
          </p>
          <button
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
            onClick={() => alert('Request Callback Button Clicked!')}
          >
            Request a Callback
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#ccc' }}>
        © 2025 Edufulness. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;