import React from "react";

function SimpleGrid() {
  const column1Content = [
    "", // Row 1: Blank
    "", // Row 2: Blank
    "Step 2\nAttend Live classes + Pursue self-paced learning", // Row 3
    "", // Row 4: Blank
    "Step 4\nSecure a Digital Portfolio in “Github”", // Row 5
    "", // Row 6: Blank
    "Step 6\nReceive Interview opportunities with Companies", // Row 7
    "", // Row 8: Blank
  ];

  const column3Content = [
    "", // Row 1: Blank
    "Step 1\nEnroll in our Data Engineer coursework", // Row 2
    "", // Row 3: Blank
    "Step 3\nComplete the projects assigned by Industry Experts", // Row 4
    "", // Row 5: Blank
    "Step 5\nAttend Mock Interviews with our HR team & Technical Round with Industry Experts", // Row 6
    "", // Row 7: Blank
    "Step 7\nAttend & clear the Interview with splendid packages", // Row 8
  ];

  return (
    <div
  className="container d-flex justify-content-center align-items-center"
  style={{
    minHeight: "100vh", // Full height of the viewport for centering
  }}
>
  {/* Wrapper for the Grid */}
  <div
    className="d-flex flex-column"
    style={{
      width: "100%", // Ensures the grid spans the full width of the container
      maxWidth: "1200px", // Limit the grid width for a cleaner layout
      marginLeft: "270px", // Add left margin
    }}
  >
    <div className="row">
      {/* 8 Rows */}
      {Array.from({ length: 8 }).map((_, rowIndex) => (
        <React.Fragment key={rowIndex}>
          {/* Column 1 (Right-Aligned) */}
          <div className="col-md-4 mb-3 text-end">
            {column1Content[rowIndex] && (
              <div>
                {column1Content[rowIndex]
                  .split("\n")
                  .map((line, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Arial', sans-serif", // Clean sans-serif font
                        fontSize: "1.1rem", // Increase font size
                        fontWeight: "700", // Make all content bold
                        marginBottom: "0.5rem", // Spacing between lines
                      }}
                    >
                      {line}
                    </p>
                  ))}
              </div>
            )}
          </div>

          {/* Column 2 (Vertical Grey Line with Optional Dot) */}
          <div
            className="col-md-4 mb-3 d-flex justify-content-center align-items-center position-relative"
            style={{ maxWidth: "50px" }}
          >
            {/* Grey Line */}
            <div
              className="border-end border-gray-400 h-100"
              style={{ width: "1px", position: "relative" }}
            >
              {/* Dot (Skipped for Row 1) */}
              {rowIndex !== 0 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-10px", // Slightly below the line
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "16px", // Size of the dot
                    height: "16px",
                    backgroundColor: "#00CCDD", // Dot color
                    borderRadius: "50%", // Circular shape
                  }}
                ></div>
              )}
            </div>
          </div>

          {/* Column 3 (Left-Aligned) */}
          <div className="col-md-4 mb-3 text-start">
            {column3Content[rowIndex] && (
              <div>
                {column3Content[rowIndex]
                  .split("\n")
                  .map((line, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Arial', sans-serif", // Clean sans-serif font
                        fontSize: "1.1rem", // Increase font size
                        fontWeight: "700", // Make all content bold
                        marginBottom: "0.5rem", // Spacing between lines
                      }}
                    >
                      {line}
                    </p>
                  ))}
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
</div>
  );
}

export default SimpleGrid;