import React from "react";

function Roadmap() {
  return (
    <div className="roadmap-container">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Montserrat', sans-serif;
            background: white; /* Background set to white */
            color: #333;
            line-height: 1.4;
          }

          .roadmap-container {
            max-width: 600px; /* Compact width */
            margin: 0 auto;
            padding: 5px 10px; /* Reduced padding */
            height: auto; /* Height adjusts to content */
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .roadmap-title {
            text-align: center;
            margin-bottom: 10px; /* Reduced margin */
            font-size: 1.5rem; /* Increased title font size */
            color: #0056b3;
            font-weight: 600;
          }

          .roadmap {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
          }

          /* Vertical Line */
          .roadmap::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px; /* Reduced line width */
            background: grey; /* Grey vertical line */
            transform: translateX(-1px);
            z-index: 0;
          }

          .roadmap-step {
            display: flex;
            align-items: flex-start;
            margin: 8px 0; /* Reduced margin to save vertical space */
            width: 100%;
            position: relative;
          }

          /* Position Steps (Odd and Even) */
          .roadmap-step:nth-child(odd) {
            justify-content: flex-end; /* Odd steps on the left */
          }

          .roadmap-step:nth-child(even) {
            justify-content: flex-start; /* Even steps on the right */
          }

          /* Step Circle with Concentric Ring */
          .roadmap-step::before {
            content: "";
            position: absolute;
            width: 12px; /* Smaller circle */
            height: 12px; /* Smaller circle */
            background: teal; /* Teal circle */
            border: 2px solid rgba(0, 128, 128, 0.3); /* Transparent teal border */
            border-radius: 50%;
            z-index: 1;
            left: 50%; /* Center the circle */
            transform: translateX(-50%);
          }

          /* Step Content */
          .roadmap-step-content {
            font-size: 1.1rem; /* Increased font size */
            font-weight: 400;
            z-index: 2;
            color: #333;
            width: 45%; /* Adjusted content width */
          }

          .roadmap-step-content h2 {
            font-size: 1.5rem; /* Increased heading font size */
            font-weight: 600;
            color: #0056b3;
            margin-bottom: 5px; /* Adjusted spacing */
          }

          .roadmap-step-content p {
            margin: 0;
          }

          /* Mobile View Fix: Maintain Left/Right Alignment */
          @media (max-width: 768px) {
            .roadmap-container {
              max-width: 100%; /* Full width for smaller screens */
              padding: 5px;
            }

            .roadmap-step {
              flex-direction: row; /* Keep steps side-by-side */
              justify-content: space-between; /* Maintain spacing between text and line */
            }

            .roadmap-step-content {
              width: 45%; /* Keep text width small */
            }

            .roadmap-step:nth-child(odd) .roadmap-step-content {
              text-align: right; /* Align odd steps to the right */
            }

            .roadmap-step:nth-child(even) .roadmap-step-content {
              text-align: left; /* Align even steps to the left */
            }

            .roadmap-step::before {
              left: 50%; /* Keep circle centered */
              transform: translateX(-50%);
            }

            .roadmap::before {
              left: 50%; /* Keep vertical line centered */
            }
          }
        `}
      </style>
      
      <div className="roadmap">
        {/* Step 1 */}
        <div className="roadmap-step">
          <div className="roadmap-step-content">
            <h2>Step 1</h2>
            <p>Enroll in our Data Engineer coursework</p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="roadmap-step">
          <div className="roadmap-step-content">
            <h2>Step 2</h2>
            <p>Attend Live classes + Pursue self-paced learning</p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="roadmap-step">
          <div className="roadmap-step-content">
            <h2>Step 3</h2>
            <p>Complete the projects assigned by Industry Experts</p>
          </div>
        </div>
        {/* Step 4 */}
        <div className="roadmap-step">
          <div className="roadmap-step-content">
            <h2>Step 4</h2>
            <p>Secure a Digital Portfolio in “Github”</p>
          </div>
        </div>
        {/* Step 5 */}
        <div className="roadmap-step">
          <div className="roadmap-step-content">
            <h2>Step 5</h2>
            <p>Attend Mock Interviews with our HR team & Technical Round with Industry Experts</p>
          </div>
        </div>
        {/* Step 6 */}
        <div className="roadmap-step">
          <div className="roadmap-step-content">
            <h2>Step 6</h2>
            <p>Receive Interview opportunities with Companies</p>
          </div>
        </div>
        {/* Step 7 */}
        <div className="roadmap-step">
          <div className="roadmap-step-content">
            <h2>Step 7</h2>
            <p>Attend & clear the Interview with splendid packages</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;