import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLSelect1 = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL SELECT DISTINCT</h2>
                <hr className="hr" />
            </div>
                        
            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>SELECT</SqlCode></strong> statement is used to select data from a database.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    <strong><SqlCode>DISTINCT</SqlCode></strong> is used with the <SqlCode>SELECT</SqlCode> statement to ensure duplicate rows are excluded. 
                    It is helpful when you want to identify unique values or combinations of values in a table. 
                    It can be applied to a single column or multiple columns.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT DISTINCT </SqlKeyword>Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                </p>
                <p className="text">
                    <strong>Column1, Column2:</strong> The columns from which unique values are retrieved.<br />
                    <strong>TableName:</strong> The name of the table.
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
                        <td className="td">A</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h4>Example</h4>
                <h6>Retrieve unique grades:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT DISTINCT </SqlKeyword>Grade <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">A</td>
                    </tr>
                    <tr>
                        <td className="td">B</td>
                    </tr>
                    <tr>
                        <td className="td">C</td>
                    </tr>
                </tbody>
            </table>

            <div className="section">
                <p className="text">
                    Retrieve unique ages:<br />
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT DISTINCT </SqlKeyword>Age <SqlKeyword>FROM</SqlKeyword> Students;
                        </code>
                    </div>
                </p>
                <h5>Result:</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td">20</td>
                        </tr>
                        <tr>
                            <td className="td">22</td>
                        </tr>
                        <tr>
                            <td className="td">21</td>
                        </tr>
                        <tr>
                            <td className="td">23</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="section">
                <p className="text">
                    Retrieve unique combinations of Grade and Age:<br />
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT DISTINCT </SqlKeyword>Grade, Age <SqlKeyword>FROM</SqlKeyword> Students;
                        </code>
                    </div>
                </p>
                <h5>Result:</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th className="th">Grade</th>
                            <th className="th">Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="td">A</td>
                            <td className="td">20</td>
                        </tr>
                        <tr>
                            <td className="td">B</td>
                            <td className="td">22</td>
                        </tr>
                        <tr>
                            <td className="td">A</td>
                            <td className="td">21</td>
                        </tr>
                        <tr>
                            <td className="td">C</td>
                            <td className="td">23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>SELECT DISTINCT</SqlCode></strong> statement helps identify and retrieve unique records from a table. 
                Whether you need unique values from a single column or combinations of multiple columns, 
                it ensures that no duplicates are included in the result set. 
                This is especially useful for analyzing data and removing redundancy.
            </p>

            {/* New Example Section */}
            <div className="example">
                <h3>Example</h3>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT DISTINCT </SqlKeyword>Grade <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>
        </div>
    );
};

export default SQLSelect1;