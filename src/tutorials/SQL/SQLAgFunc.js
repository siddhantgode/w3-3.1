import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLAgFunc = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL Aggregate Functions</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    Aggregate functions are used to perform calculations on a set of values and return a single summarized value.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Common Aggregate Functions</h4>
                    <ul>
                        <li><strong>COUNT()</strong>: Counts the number of rows or non-NULL values.</li>
                        <li><strong>SUM()</strong>: Adds up the values in a numeric column.</li>
                        <li><strong>AVG()</strong>: Calculates the average value of a numeric column.</li>
                        <li><strong>MIN()</strong>: Returns the smallest value in a column.</li>
                        <li><strong>MAX()</strong>: Returns the largest value in a column.</li>
                    </ul>
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>AGGREGATE_FUNCTION(ColumnName)<br />
                            <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>
            <div className="example">
                <h6>Calculate various aggregate values from the Students table:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword><br />
                        <SqlKeyword>COUNT(*) AS TotalStudents, </SqlKeyword><br />
                        <SqlKeyword>SUM(Age) AS TotalAge, </SqlKeyword><br />
                        <SqlKeyword>AVG(Age) AS AverageAge, </SqlKeyword><br />
                        <SqlKeyword>MIN(Age) AS MinAge, </SqlKeyword><br />
                        <SqlKeyword>MAX(Age) AS MaxAge </SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">TotalStudents</th>
                        <th className="th">TotalAge</th>
                        <th className="th">AverageAge</th>
                        <th className="th">MinAge</th>
                        <th className="th">MaxAge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">5</td>
                        <td className="td">106</td>
                        <td className="td">21.2</td>
                        <td className="td">20</td>
                        <td className="td">23</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                Aggregate functions are powerful tools in SQL to analyze and summarize data efficiently.
            </p>
        </div>
    );
};

export default SQLAgFunc;