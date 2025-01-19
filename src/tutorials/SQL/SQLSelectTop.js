import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLSelectTop = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL SELECT TOP</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>SELECT TOP</SqlCode></strong> statement is used to retrieve a specified number or percentage of rows from the top of a result set.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    The <strong><SqlCode>SELECT TOP</SqlCode></strong> clause limits the number of rows returned by a query.
                    It is often used with the <SqlCode>ORDER BY</SqlCode> clause to fetch the first few rows based on sorting criteria.
                    If no <SqlCode>ORDER BY</SqlCode> clause is used, the rows are returned in an arbitrary order.
                    This feature is useful for scenarios like fetching the highest salaries, most recent records, or top-performing students.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            Retrieve a fixed number of rows:<br />
                            <SqlKeyword>SELECT TOP </SqlKeyword>Number Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName;<br />
                            <br />
                            Retrieve a percentage of rows:<br />
                            <SqlKeyword>SELECT TOP </SqlKeyword>Percentage PERCENT Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName;<br />
                            <br />
                            With an <SqlKeyword>ORDER BY</SqlKeyword> clause:<br />
                            <SqlKeyword>SELECT TOP </SqlKeyword>Number Column1, Column2, ... <SqlKeyword>FROM</SqlKeyword> TableName <SqlKeyword>ORDER BY</SqlKeyword> ColumnName ASC|DESC;
                        </code>
                    </div>
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
                <h6>Retrieve the top 3 rows:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT TOP 3 </SqlKeyword>Name, Age <SqlKeyword>FROM</SqlKeyword> Students;
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
                        <td className="td">21</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Retrieve the top 50% of rows:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT TOP 50 PERCENT </SqlKeyword>Name, Grade <SqlKeyword>FROM</SqlKeyword> Students;
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
                </tbody>
            </table>

            <div className="example">
                <h6>Retrieve the top 2 rows sorted by age in descending order:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT TOP 2 </SqlKeyword>Name, Age <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>ORDER BY</SqlKeyword> Age DESC;
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
                        <td className="td">Diana</td>
                        <td className="td">23</td>
                    </tr>
                    <tr>
                        <td className="td">Bob</td>
                        <td className="td">22</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Retrieve the top 1 row with the highest grade alphabetically:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT TOP 1 </SqlKeyword>Name, Grade <SqlKeyword>FROM</SqlKeyword> Students <SqlKeyword>ORDER BY</SqlKeyword> Grade ASC;
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
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>SELECT TOP</SqlCode></strong> statement is a powerful tool for retrieving a subset of rows from a query. 
                When combined with the <SqlCode>ORDER BY</SqlCode> clause, it provides precise control over the results, making it useful for reporting, analytics, and data sampling.
            </p>
        </div>
    );
};

export default SQLSelectTop;