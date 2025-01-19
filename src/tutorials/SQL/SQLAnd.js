import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLAnd = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL AND</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>AND</SqlCode></strong> operator is used in the <SqlCode>WHERE</SqlCode> clause to combine multiple conditions. 
                    It ensures that all the specified conditions must be true for a row to be included in the result set.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    The <strong><SqlCode>AND</SqlCode></strong> operator is used to add multiple conditions to a query.<br />
                    All conditions connected by <SqlCode>AND</SqlCode> must be true for a row to match.<br />
                    It is used to narrow down query results by adding specific filters.<br />
                    Commonly used in <SqlCode>SELECT</SqlCode>, <SqlCode>UPDATE</SqlCode>, and <SqlCode>DELETE</SqlCode> statements.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName <SqlKeyword>WHERE</SqlKeyword> Condition1 <SqlKeyword>AND</SqlKeyword> Condition2 <SqlKeyword>AND</SqlKeyword> ...;
                        </code>
                    </div>
                </p>
                <p className="text">
                    <strong>Condition1, Condition2:</strong> Conditions to be met for the rows to be included.
                </p>
                <hr className="hr" />
            </div>

            <h4>Sample Table</h4>
            <h6>Students Table</h6>
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
                <h5>Filter rows with multiple conditions:</h5>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, Age, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Grade = 'A' <SqlKeyword>AND</SqlKeyword> Age > 20;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

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
                        <td className="td">Charlie</td>
                        <td className="td">21</td>
                        <td className="td">A</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h5>Combine multiple conditions with different columns:</h5>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, Age <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Age > 20 <SqlKeyword>AND</SqlKeyword> Grade = 'B';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
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
                        <td className="td">Bob</td>
                        <td className="td">22</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h5>Using more than two conditions:</h5>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT </SqlKeyword>Name, Age, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>WHERE</SqlKeyword> Age >= 20 <SqlKeyword>AND</SqlKeyword> Grade = 'B' <SqlKeyword>AND</SqlKeyword> Name LIKE 'E%';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

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
                        <td className="td">Eve</td>
                        <td className="td">20</td>
                        <td className="td">B</td>
                    </tr>
                </tbody>
            </table>

            <div className="section">
                <p className="text">
                    <h4>Conclusion</h4>
                    The <strong><SqlCode>AND</SqlCode></strong> operator is a vital tool for filtering data in SQL queries. 
                    By combining multiple conditions, it allows users to create precise and detailed filters, ensuring that only rows meeting all criteria are included in the result set. 
                    This makes queries more powerful and flexible.
                </p>
            </div>
        </div>
    );
};

export default SQLAnd;