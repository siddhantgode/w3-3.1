import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLNullValues = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL NULL Values</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    NULL in SQL represents a missing or undefined value in a table. It indicates that no data has been entered for a particular field.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    NULL is not the same as zero (0) or an empty string ('').
                    It signifies the absence of a value.
                    Comparisons with NULL must use special operators like IS NULL or IS NOT NULL.
                    When performing calculations or operations, NULL values can affect the results and need to be handled carefully.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <strong>Check for NULL values:</strong>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Column1, Column2 <SqlKeyword>FROM</SqlKeyword> TableName <SqlKeyword>WHERE</SqlKeyword> Column1 IS NULL;
                        </code>
                    </div>
                    <strong>Check for non-NULL values:</strong>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Column1, Column2 <SqlKeyword>FROM</SqlKeyword> TableName <SqlKeyword>WHERE</SqlKeyword> Column1 IS NOT NULL;
                        </code>
                    </div>
                    <hr className="hr" />
                </p>
            </div>

            <h4>Sample Table</h4>
            <div style={{ margin: '30px' }}>
                <h6>Students Table</h6>
            </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">StudentID</th>
                        <th className="th">Name</th>
                        <th className="th">Age</th>
                        <th className="th">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">1</td>
                        <td className="td">Alice</td>
                        <td className="td">20</td>
                        <td className="td">A</td>
                    </tr>
                    <tr>
                        <td className="td">2</td>
                        <td className="td">Bob</td>
                        <td className="td">22</td>
                        <td className="td">B</td>
                    </tr>
                    <tr>
                        <td className="td">3</td>
                        <td className="td">Charlie</td>
                        <td className="td">NULL</td>
                        <td className="td">A</td>
                    </tr>
                    <tr>
                        <td className="td">4</td>
                        <td className="td">Diana</td>
                        <td className="td">23</td>
                        <td className="td">NULL</td>
                    </tr>
                    <tr>
                        <td className="td">5</td>
                        <td className="td">Eve</td>
                        <td className="td">NULL</td>
                        <td className="td">B</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h4>Examples</h4>
                <h6>Retrieve rows with NULL values in a column:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, Age <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Age IS NULL;
                    </code>
                </div>
            </div>
            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Name</th>
                        <th className="th">Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">Charlie</td>
                        <td className="td">NULL</td>
                    </tr>
                    <tr>
                        <td className="td">Eve</td>
                        <td className="td">NULL</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Retrieve rows without NULL values:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Grade IS NOT NULL;
                    </code>
                </div>
            </div>
            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Name</th>
                        <th className="th">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">Alice</td>
                        <td className="td">A</td>
                    </tr>
                    <tr>
                        <td className="td">Bob</td>
                        <td className="td">B</td>
                    </tr>
                    <tr>
                        <td className="td">Charlie</td>
                        <td className="td">A</td>
                    </tr>
                    <tr>
                        <td className="td">Diana</td>
                        <td className="td">NULL</td>
                    </tr>
                    <tr>
                        <td className="td">Eve</td>
                        <td className="td">B</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Handling NULL in expressions using COALESCE:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, <SqlKeyword>COALESCE</SqlKeyword>(Age, 18) AS Age <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
            </div>
            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Name</th>
                        <th className="th">Age</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">Alice</td>
                        <td className="td">20</td>
                    </tr>
                    <tr>
                        <td className="td">Bob</td>
                        <td className="td">22</td>
                    </tr>
                    <tr>
                        <td className="td">Charlie</td>
                        <td className="td">18</td>
                    </tr>
                    <tr>
                        <td className="td">Diana</td>
                        <td className="td">23</td>
                    </tr>
                    <tr>
                        <td className="td">Eve</td>
                        <td className="td">18</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                NULL values play a significant role in SQL databases, representing missing or unknown data. Proper handling of NULL values with operators like IS NULL, IS NOT NULL, and functions like COALESCE ensures accurate data retrieval and manipulation. Understanding NULL is essential for robust SQL query design.
            </p>
        </div>
    );
};

export default SQLNullValues;