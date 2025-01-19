import React from "react";
import SqlKeyword from "./SQLKeyword.js";
import SqlCode from "./SQLCode";

const SQLSelect = () => {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
    

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h1 style={styles.heading}>SQL SELECT Statement</h1>
        <p style={styles.text}>
          The <strong><SqlCode>SELECT</SqlCode></strong> statement is used to select data from a database.
        </p>
        <p style={styles.text}>
          The data returned is stored in a result table, called the <strong>result-set</strong>.
        </p>
        <div style={styles.example}>
          <h3>Example</h3>
          <div style={styles.codeBlock}>
            <code><SqlKeyword>SELECT * FROM</SqlKeyword> Customers;</code>
          </div>
          <button style={styles.tryItButton}>Try it Yourself</button>
        </div>
        <p style={styles.note}>
          Click on the "Try it Yourself" button to see how it works.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "20%",
    backgroundColor: "#f1f1f1",
    padding: "20px",
    borderRight: "1px solid #ccc",
  },
  sidebarTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  sidebarList: {
    listStyleType: "none",
    padding: 0,
  },
  sidebarItem: {
    marginBottom: "10px",
    cursor: "pointer",
    color: "#007bff",
    textDecoration: "none",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  example: {
    backgroundColor: "#f9f9f9",
    border: "1px solid #ccc",
    padding: "15px",
    marginTop: "20px",
    borderRadius: "5px",
  },
  codeBlock: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    borderRadius: "5px",
    fontFamily: "Courier New, monospace",
    marginBottom: "10px",
  },
  tryItButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  note: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
};

export default SQLSelect;