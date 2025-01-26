import React, { useState } from "react";
import SQL from "./tutorials/SQL/SQL"; // Import the SQL component
import SQLSelect from "./tutorials/SQL/SQLSelect";
import SQLSelect1 from "./tutorials/SQL/SQLSelect1";
import SQLAnd from "./tutorials/SQL/SQLAnd";
import SQLOr from "./tutorials/SQL/SQLOr";
import SQLNot from "./tutorials/SQL/SQL.Not";
import SQLInsertInto from "./tutorials/SQL/SQLInsertInto";
import SQLNullValues from "./tutorials/SQL/SQLNullValues";
import SQLDelete from "./tutorials/SQL/SQLDelete";
import SQLSelectTop from "./tutorials/SQL/SQLSelectTop";
import SQLAgFunc from "./tutorials/SQL/SQLAgFunc";
import SQLMinMax from "./tutorials/SQL/SQLMinMax";
import SQLCount from "./tutorials/SQL/SQLCount";
import SQLSum from "./tutorials/SQL/SQLSum";
import Footer from "./Footer";
import SQLAvg from "./tutorials/SQL/SQLAvg";
import SQLLike from "./tutorials/SQL/SQLLike";
import SQLWildCard from "./tutorials/SQL/SQLWildCard";
import SQLIn from "./tutorials/SQL/SQLIn";
import SQLBetween from "./tutorials/SQL/SQLBetween";
import SQLAliases from "./tutorials/SQL/SQLAliases";
import SQLJoins from "./tutorials/SQL/SQLJoins";
import SQLInnerJoin from "./tutorials/SQL/SQLInnerJoin";
import SQLLeftJoin from "./tutorials/SQL/SQLLeftJoin";
import SQLRightJoin from "./tutorials/SQL/SQLRightJoin";
import SQLFullJoin from "./tutorials/SQL/SQLFullJoin";

const sqlCommands = [
"SQL",
"SQL SELECT",
"SQL SELECT DISTINCT",
"SQL AND",
"SQL OR",
"SQL NOT",
"SQL INSERT INTO",
"SQL NULL Values",
"SQL DELETE",
"SQL SELECT TOP",
"SQL Aggregate Functions",
"SQL MIN and MAX",
"SQL COUNT",
"SQL SUM",
"SQL AVG",
"SQL LIKE",
"SQL Wildcards",
"SQL IN",
"SQL BETWEEN",
"SQL Aliases",
"SQL Joins",
"SQL INNER JOIN",
"SQL LEFT JOIN",
"SQL RIGHT JOIN",
"SQL FULL JOIN",
];

const TwoSections = () => {
const [rightSectionContent, setRightSectionContent] = useState(null);
const [activeButton, setActiveButton] = useState(null);

const handleButtonClick = (command) => {
switch (command) {
case "SQL":
setRightSectionContent(<SQL />);
break;
case "SQL SELECT":
setRightSectionContent(<SQLSelect />);
break;
case "SQL SELECT DISTINCT":
setRightSectionContent(<SQLSelect1 />);
break;
case "SQL AND":
setRightSectionContent(<SQLAnd />);
break;
case "SQL OR":
setRightSectionContent(<SQLOr />);
break;
case "SQL NOT":
setRightSectionContent(<SQLNot />);
break;
case "SQL INSERT INTO":
setRightSectionContent(<SQLInsertInto />);
break;
case "SQL NULL Values":
setRightSectionContent(<SQLNullValues />);
break;
case "SQL DELETE":
setRightSectionContent(<SQLDelete />);
break;
case "SQL SELECT TOP":
setRightSectionContent(<SQLSelectTop />);
break;
case "SQL Aggregate Functions":
setRightSectionContent(<SQLAgFunc />);
break;
case "SQL MIN and MAX":
setRightSectionContent(<SQLMinMax />);
break;
case "SQL COUNT":
setRightSectionContent(<SQLCount />);
break;
case "SQL SUM":
setRightSectionContent(<SQLSum />);
break;
case "SQL AVG":
setRightSectionContent(<SQLAvg />);
break;
case "SQL LIKE":
setRightSectionContent(<SQLLike />);
break;
case "SQL Wildcards":
setRightSectionContent(<SQLWildCard />);
break;
case "SQL IN":
setRightSectionContent(<SQLIn/>);
break;
case "SQL BETWEEN":
setRightSectionContent(<SQLBetween/>);
break;
case "SQL Aliases":
setRightSectionContent(<SQLAliases/>);
break;
case "SQL Joins":
setRightSectionContent(<SQLJoins/>);
break;
case "SQL INNER JOIN":
setRightSectionContent(<SQLInnerJoin/>);
break;
case "SQL LEFT JOIN":
setRightSectionContent(<SQLLeftJoin/>);
break;
case "SQL RIGHT JOIN":
setRightSectionContent(<SQLRightJoin/>);
break;
case "SQL FULL JOIN":
setRightSectionContent(<SQLFullJoin/>);
break;
case "SQL ORDER BY":
setRightSectionContent(<div>SQL ORDER BY Content</div>);
break;
default:
setRightSectionContent(<div>{command} Content</div>);
break;
}
setActiveButton(command);
};

const renderButton = (command) => {
return (
<p
key={command}
onClick={() => handleButtonClick(command)}
style={{
...styles.button,
backgroundColor: activeButton === command ? "#007bff" : "#e7e9eb",
color: activeButton === command ? "#fff" : "#000",
}}
onMouseEnter={(e) => {
if (activeButton !== command) {
e.currentTarget.style.backgroundColor = "#727D73"; // Hover color
e.currentTarget.style.color = "#fff"; // Hover text color
}
}}
onMouseLeave={(e) => {
if (activeButton !== command) {
e.currentTarget.style.backgroundColor = "#e7e9eb"; // Reset color
e.currentTarget.style.color = "#000"; // Reset text color
}
}}
>
{command}
</p>
);
};

return (
<div style={styles.container}>
{/* Left Section */}
<div style={styles.leftSection}>
<h2 style={styles.header}>SQL Tutorials</h2>
{sqlCommands.map((command) => renderButton(command))}
</div>

  {/* Right Section Container */}
  <div style={styles.rightSectionContainer}>
    {/* Main Right Section */}
    <div style={styles.rightSection}>
      {rightSectionContent || <p>Select an option from the left section.</p>}
    </div>

    {/* Advertisement Section */}
    <div style={styles.adColumn}>
      <h3>Advertisement</h3>
      {/* Placeholder for advertisement content */}
      <div style={styles.adContent}>
        <p>Your ad content goes here.</p>
      </div>
    </div>
  </div>
</div>
);
};

const styles = {
container: {
display: "flex",
height: "100vh",
width: "1415px", // Fixed width for the entire page
fontFamily: "Verdana, sans-serif",
margin: "0 auto", // Center the container
overflowX: "hidden", // Prevent horizontal scrolling
},
leftSection: {
width: "20%",
backgroundColor: "#e7e9eb",
padding: "0",
boxSizing: "border-box",
borderRight: "1px solid #ccc",
overflowY: "scroll", // Enable vertical scrolling
height: "100%", // Ensures it takes full height
scrollbarWidth: "none", // For Firefox
msOverflowStyle: "none", // For Internet Explorer and Edge
},
rightSectionContainer: {
display: "flex",
width: "80%",
height: "100%",
},
rightSection: {
flex: 1, // Takes remaining space
backgroundColor: "white",
padding: "20px",
boxSizing: "border-box",
overflowY: "scroll", // Enable vertical scrolling
scrollbarWidth: "none", // For Firefox
msOverflowStyle: "none", // For Internet Explorer and Edge
},
adColumn: {
width: "150px", // Fixed width of 100 pixels for the ad column
backgroundColor: "#F9F9F9",
padding: "5px",
borderLeft: "1px solid #ccc",
boxSizing: "border-box",
overflowY: "scroll", // Enable vertical scrolling
scrollbarWidth: "none", // For Firefox
msOverflowStyle: "none", // For Internet Explorer and Edge
},
adContent: {
padding: "10px",
backgroundColor: "#EFEFEF",
borderRadius: "4px",
height: "100%", // Ensures it fills the column height
display: "flex",
alignItems: "center",
justifyContent: "center",
},
header: {
padding: "10px",
margin: "0",
},
button: {
display: "block",
margin: "0",
padding: "5px 20px",
width: "100%",
border: "none",
borderRadius: "0px",
cursor: "pointer",
},
};

export default TwoSections;