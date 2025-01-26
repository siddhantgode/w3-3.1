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

const MainSection = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Menu is collapsed by default on mobile
  const [rightSectionContent, setRightSectionContent] = useState(null);
  const [activeButton, setActiveButton] = useState(null);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev); // Toggle the visibility of the Menu
  };

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
        setRightSectionContent(<SQLIn />);
        break;
      case "SQL BETWEEN":
        setRightSectionContent(<SQLBetween />);
        break;
      case "SQL Aliases":
        setRightSectionContent(<SQLAliases />);
        break;
      case "SQL Joins":
        setRightSectionContent(<SQLJoins />);
        break;
      case "SQL INNER JOIN":
        setRightSectionContent(<SQLInnerJoin />);
        break;
      case "SQL LEFT JOIN":
        setRightSectionContent(<SQLLeftJoin />);
        break;
      case "SQL RIGHT JOIN":
        setRightSectionContent(<SQLRightJoin />);
        break;
      case "SQL FULL JOIN":
        setRightSectionContent(<SQLFullJoin />);
        break;
      default:
        setRightSectionContent(<div>{command} Content</div>);
        break;
    }
    setActiveButton(command);

    // Collapse the menu when a button is clicked in mobile view
    if (window.innerWidth < 768) {
      setIsMenuVisible(false);
    }
  };

  const handleContentClick = () => {
    // Collapse the menu only in mobile view when the content is clicked
    if (window.innerWidth < 768) {
      setIsMenuVisible(false);
    }
  };

  // Inline styles for sections
  const leftSectionStyle = {
    width: "20%",
    backgroundColor: "#e7e9eb",
    padding: "0",
    boxSizing: "border-box",
    borderRight: "1px solid #ccc",
    overflowY: "scroll",
    height: "100%",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    minWidth: "200px",
    position: window.innerWidth < 768 ? "absolute" : "static", // Overlay on mobile
    top: 0,
    left: 0,
    zIndex: 10,
    display: isMenuVisible || window.innerWidth >= 768 ? "block" : "none", // Show on desktop or when toggled on mobile
  };

  const rightSectionContainerStyle = {
    display: "flex",
    flexDirection: window.innerWidth < 768 ? "column" : "row", // Stack on mobile, side-by-side on desktop
    width: "100%",
    height: "100%",
  };

  const rightSectionStyle = {
    flex: 1,
    backgroundColor: "white",
    padding: "20px",
    boxSizing: "border-box",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  const adColumnStyle = {
    width: "150px",
    backgroundColor: "#F9F9F9",
    padding: "5px",
    borderLeft: "1px solid #ccc",
    boxSizing: "border-box",
    overflowY: "scroll",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };

  return (
    <div className="relative flex h-screen">
      {/* Hamburger Menu - Visible only on mobile devices */}
      <div
        className="absolute  center-4 p-2  shadow-md z-20 cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        {/* Hamburger Icon */}
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>

      {/* Menu Section */}
      <div style={leftSectionStyle}>
        <h2 className="text-lg font-bold mb-4 px-4">SQL Tutorials</h2>
        <div>
          {sqlCommands.map((command) => (
            <p
              key={command}
              onClick={() => handleButtonClick(command)}
              className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 ${
                activeButton === command
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-300 text-black"
              } m-0 rounded-none`} // Removed margin and border radius
            >
              {command}
            </p>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div style={rightSectionContainerStyle}>
        <div style={rightSectionStyle} onClick={handleContentClick}>
          {rightSectionContent || (
            <p className="text-lg font-bold">Select a tutorial from the menu.</p>
          )}
        </div>

        {/* Ads Section */}
        <div style={adColumnStyle}>
          <h2 className="text-lg font-bold mb-2">Ads</h2>
          <p>This is the Ads section.</p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;