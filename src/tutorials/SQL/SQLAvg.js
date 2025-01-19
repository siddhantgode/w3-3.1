import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLAvg = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL AVG</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>AVG()</SqlCode></strong> function calculates the average of numeric values in a column.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT AVG(ColumnName)</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Find the average age of students:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT AVG(Age) AS AverageAge</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">AverageAge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">21.2</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>AVG()</SqlCode></strong> function is a handy tool for calculating average values, helping summarize and analyze numeric data in a table.
            </p>
        </div>
    );
};

export default SQLAvg;