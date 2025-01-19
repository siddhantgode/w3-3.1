import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLOr = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL OR</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>OR</SqlCode></strong> operator is used in the <SqlCode>WHERE</SqlCode> clause to combine multiple conditions. 
                    It ensures that a row is included in the result set if at least one of the conditions is true.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    The <strong><SqlCode>OR</SqlCode></strong> operator broadens the results by including rows that meet any of the specified conditions. 
                    It can be combined with the <SqlCode>AND</SqlCode> operator for more complex conditions.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName <SqlKeyword>WHERE</SqlKeyword> Condition1 <SqlKeyword>OR</SqlKeyword> Condition2 <SqlKeyword>OR</SqlKeyword> ...;
                        </code>
                    </div>
                </p>
                <p className="text">
                    <strong>Condition1, Condition2:</strong> Conditions where at least one must be true.
                </p>
                <hr className="hr" />
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
                        <td className="td">21</td>
                        <td className="td">A</td>
                    </tr>
                    <tr>
                        <td className="td">4</td>
                        <td className="td">Diana</td>
                        <td className="td">23</td>
                        <td className="td">C</td>
                    </tr>
                    <tr>
                        <td className="td">5</td>
                        <td className="td">Eve</td>
                        <td className="td">20</td>
                        <td className="td">B</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h4>Example</h4>
                <h6>Filter rows with one of two conditions:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Grade = 'A' <SqlKeyword>OR</SqlKeyword> Grade = 'B';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
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
                        <td className="td">Eve</td>
                        <td className="td">B</td>
                    </tr>
                </tbody>
            </table>

            <div className="section">
                <p className="text">
                    Filter rows with alternative age criteria:<br />
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Name, Age <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Age &lt; 21 <SqlKeyword>OR</SqlKeyword> Age &gt; 22;
                        </code>
                    </div>
                </p>
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
                            <td className="td">Eve</td>
                            <td className="td">20</td>
                        </tr>
                        <tr>
                            <td className="td">Diana</td>
                            <td className="td">23</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <p className="text">
                    Combine OR with other conditions:<br />
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Name, Age, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Grade = 'A' <SqlKeyword>OR</SqlKeyword> (Age > 20 <SqlKeyword>AND</SqlKeyword> Grade = 'C');
                        </code>
                    </div>
                </p>
                <h5>Result:</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th">Name</th>
                            <th className="th">Age</th>
                            <th className="th">Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td">Alice</td>
                            <td className="td">20</td>
                            <td className="td">A</td>
                        </tr>
                        <tr>
                            <td className="td">Charlie</td>
                            <td className="td">21</td>
                            <td className="td">A</td>
                        </tr>
                        <tr>
                            <td className="td">Diana</td>
                            <td className="td">23</td>
                            <td className="td">C</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>OR</SqlCode></strong> operator is a powerful tool for creating flexible queries that retrieve rows meeting at least one of several criteria. 
                It is often used alongside the <SqlCode>AND</SqlCode> operator for complex filtering, making it essential for handling diverse query requirements.
            </p>
        </div>
    );
};

export default SQLOr;