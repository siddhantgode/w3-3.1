import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLNot = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL NOT</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>NOT</SqlCode></strong> operator is used in the <SqlCode>WHERE</SqlCode> clause to negate a condition. 
                    It retrieves rows where the condition is not true.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    <strong><SqlCode>NOT</SqlCode></strong> is a logical operator that inverts the result of a condition. 
                    When combined with other operators (<SqlCode>=</SqlCode>, <SqlCode>&gt;</SqlCode>, <SqlCode>&lt;</SqlCode>, etc.), it excludes rows that match the specified condition. 
                    It is commonly used to filter out unwanted values.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName <SqlKeyword>WHERE NOT</SqlKeyword> Condition;
                        </code>
                    </div>
                </p>
                <p className="text">
                    <strong>Condition:</strong> The condition to negate.
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
                <h4>Examples</h4>
                <h6>Exclude rows with a specific grade:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE NOT</SqlKeyword> Grade = 'A';
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
                        <td className="td">Bob</td>
                        <td className="td">B</td>
                    </tr>
                    <tr>
                        <td className="td">Diana</td>
                        <td className="td">C</td>
                    </tr>
                    <tr>
                        <td className="td">Eve</td>
                        <td className="td">B</td>
                    </tr>
                </tbody>
            </table>

            <div className="section">
                <p className="text">
                    Exclude rows with age greater than 20:<br />
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Name, Age <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE NOT</SqlKeyword> Age &gt; 20;
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
                    </tbody>
                </table>
            </div>

            <div className="section">
                <p className="text">
                    Combine NOT with other conditions:<br />
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Name, Age, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE NOT</SqlKeyword> (Grade = 'A' <SqlKeyword>OR</SqlKeyword> Age &lt; 22);
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
                The <strong><SqlCode>NOT</SqlCode></strong> operator is a powerful tool to exclude rows that meet specific criteria. 
                It complements other SQL operators and provides flexibility in creating queries that focus on excluding unwanted data.
            </p>
        </div>
    );
};

export default SQLNot;