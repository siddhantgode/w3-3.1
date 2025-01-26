import React, { useState } from "react";

const sqlQuestions = [
  {
    id: 1,
    title: "Retrieve All Students",
    description: "Write a query to retrieve all the rows from the `students` table.",
    sampleCode: `
  -- Create the students table
  CREATE TABLE students (id INTEGER, name TEXT);
  
  -- Insert sample data
  INSERT INTO students (id, name) VALUES (1, 'John Doe');
  INSERT INTO students (id, name) VALUES (2, 'Jane Doe');
  
  -- Retrieve all students
  SELECT * FROM students;
  `,
    expectedOutput: `
  id | name
  1  | John Doe
  2  | Jane Doe
  `,
  },
  {
    id: 2,
    title: "Filter Students by Name",
    description: "Write a query to retrieve students whose name starts with 'J'.",
    sampleCode: `
  -- Create the students table
  CREATE TABLE students (id INTEGER, name TEXT);
  
  -- Insert sample data
  INSERT INTO students (id, name) VALUES (1, 'John Doe');
  INSERT INTO students (id, name) VALUES (2, 'Jane Doe');
  
  -- Retrieve students whose name starts with 'J'
  SELECT * FROM students WHERE name LIKE 'J%';
  `,
    expectedOutput: `
  id | name
  1  | John Doe
  2  | Jane Doe
  `,
  },
  {
    id: 3,
    title: "Count the Number of Students",
    description: "Write a query to count the total number of students in the table.",
    sampleCode: `
  -- Create the students table
  CREATE TABLE students (id INTEGER, name TEXT);
  
  -- Insert sample data
  INSERT INTO students (id, name) VALUES (1, 'John Doe');
  INSERT INTO students (id, name) VALUES (2, 'Jane Doe');
  
  -- Count the total number of students
  SELECT COUNT(*) AS total_students FROM students;
  `,
    expectedOutput: `
  total_students
  2
  `,
  },
];

const Exercise = () => {
  const [code, setCode] = useState(""); // Code entered by the user
  const [language, setLanguage] = useState("python"); // Selected language
  const [output, setOutput] = useState(""); // Output of the execution
  const [loading, setLoading] = useState(false); // Spinner for API call
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Selected SQL question

  // Function to execute the code
  const handleRunCode = async () => {
    setLoading(true);
    setOutput("");

    try {
      // API request to Piston API
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language,
          version: "*", // Use the latest version of the selected language
          files: [
            {
              name: language === "sqlite" ? "main.sql" : "main", // Use appropriate file name
              content: code,
            },
          ],
        }),
      });

      const result = await response.json();
      const output = result?.run?.output || "No output returned";
      setOutput(output);
    } catch (error) {
      setOutput("Error executing code: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // Handle SQL question selection
  const handleQuestionSelect = (question) => {
    setSelectedQuestion(question);
    setCode(question.sampleCode); // Load sample SQL code into the editor
    setOutput(""); // Clear previous output
    setLanguage("sqlite"); // Automatically switch to SQL if a question is selected
  };

  return (
    <div className="flex flex-col lg:flex-row p-5 h-screen bg-gray-100 space-y-5 lg:space-y-0 lg:space-x-5">
      {/* Sidebar for Questions */}
      <div className="w-full lg:w-1/4 bg-white shadow-md rounded-md p-4 overflow-y-auto h-full">
        <h2 className="text-lg font-semibold mb-4">Practice Questions</h2>
        {language === "sqlite" ? (
          <ul className="space-y-2">
            {sqlQuestions.map((question) => (
              <li
                key={question.id}
                className={`p-3 border rounded-md cursor-pointer ${
                  selectedQuestion?.id === question.id
                    ? "bg-blue-100"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
                onClick={() => handleQuestionSelect(question)}
              >
                <h2 className="text-lg font-semibold mb-4">{question.title}</h2>
                <p className="text-sm text-gray-600">{question.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Select "SQL" as the language to view practice questions.</p>
        )}
      </div>
  
      {/* Coding Sandbox */}
      <div className="w-full lg:w-3/4 bg-white shadow-md rounded-md p-4 flex flex-col space-y-4 overflow-y-auto h-full">
        <h2 className="text-lg font-semibold">Try it Yourself</h2>
  
        {/* Language Selector */}
        <div>
          <label className="block font-medium mb-1">
            Select a Programming Language:
          </label>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setCode(""); // Clear the code when changing language
              setSelectedQuestion(null); // Deselect any SQL question
              setOutput(""); // Clear output
            }}
            className="bg-gray-50 border border-gray-300 rounded p-2 w-full"
          >
            <option value="python">Python</option>
            <option value="javascript">JavaScript</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="sqlite">SQL</option>
          </select>
        </div>
  
        {/* Display Question Details if SQL is Selected */}
        {language === "sqlite" && selectedQuestion && (
          <div className="p-3 bg-blue-80 border border-blue-200 rounded h-12 flex items-center">
            <h2 className="text-lg font-semibold mr-2">Current Question:</h2>
            <p className="text-sm truncate">{selectedQuestion.description}</p>
          </div>
        )}
  
        {/* Code Editor */}
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          className="w-full min-h-[230px] bg-gray-50 border border-gray-300 rounded p-3 font-mono text-sm"
        ></textarea>
  
        {/* Run Button */}
        <button
          onClick={handleRunCode}
          disabled={!code.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          {loading ? "Running..." : "Run Code"}
        </button>
  
        {/* Output Section */}
        <div className="flex space-x-4">
          {/* Output Section */}
          <div className="w-1/2 p-3 bg-gray-50 border border-gray-300 rounded">
            <h2 className="text-lg font-semibold mb-4">Output:</h2>
            <pre className="mt-2 whitespace-pre-wrap font-mono text-sm text-gray-800">
              {output}
            </pre>
          </div>
  
          {/* Expected Output Section */}
          {language === "sqlite" && selectedQuestion && (
            <div className="w-1/2 p-3 bg-green-50 border border-green-200 rounded">
              <h2 className="text-lg font-semibold mb-4">Expected Output:</h2>
              <pre className="mt-2 whitespace-pre-wrap font-mono text-sm text-gray-800">
                {selectedQuestion.expectedOutput}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercise;