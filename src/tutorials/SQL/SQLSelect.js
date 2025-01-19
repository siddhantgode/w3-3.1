import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css';

const SQLSelect = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL SELECT</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>SELECT</SqlCode></strong> statement is used to retrieve data from a database.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    The <strong><SqlCode>SELECT</SqlCode></strong> statement allows you to fetch specific columns or all columns 
                    from a table, making it the primary command to read data.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT </SqlKeyword>Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                </p>
                <p className="text">
                    <strong>Column1, Column2:</strong> Specify the columns to retrieve.<br />
                    <strong>TableName:</strong> The name of the table from which to fetch data.<br />
                    To retrieve all columns:
                </p>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT *</SqlKeyword> <SqlKeyword>FROM</SqlKeyword> TableName;
                    </code>
                </div>
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
                </tbody>
            </table>

            <div className="example">
                <h4>Examples</h4>
                <h5>Retrieve all data from the table:</h5>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT *</SqlKeyword> <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
            </div>

            <h5>Result:</h5>
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
                </tbody>
            </table>

            <div className="section">
                <p className="text">
                    <h4>Conclusion</h4>
                    The <strong><SqlCode>SELECT</SqlCode></strong> statement is fundamental in SQL, allowing users to read data from tables. 
                    It is simple yet powerful, making it essential for data retrieval and analysis.
                </p>
            </div>
        </div>
    );
};

export default SQLSelect;