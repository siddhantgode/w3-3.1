import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLCount = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL COUNT</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>COUNT()</SqlCode></strong> function counts the number of rows or non-NULL values in a column.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT COUNT(ColumnName)</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Examples</h4>

            <div className="example">
                <h6>Count the total number of students:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT COUNT(*) AS TotalStudents</SqlKeyword><br />
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">5</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Count students with grades:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT COUNT(Grade) AS StudentsWithGrades</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">StudentsWithGrades</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">5</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>COUNT()</SqlCode></strong> function is essential for determining the size of a dataset or the number of non-NULL values in a specific column.
            </p>
        </div>
    );
};

export default SQLCount;