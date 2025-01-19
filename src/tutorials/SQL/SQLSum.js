import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLSum = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL SUM</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>SUM()</SqlCode></strong> function calculates the total of all numeric values in a column.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT SUM(ColumnName)</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Find the total age of all students:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT SUM(Age) AS TotalAge</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">TotalAge</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">106</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>SUM()</SqlCode></strong> function is useful for calculating totals, such as sales, quantities, or any other numeric data.
            </p>
        </div>
    );
};

export default SQLSum;