import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLInsertInto = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL INSERT INTO</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>INSERT INTO</SqlCode></strong> statement is used to add new rows of data into a table.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    You can insert data into all columns or specific columns of a table. 
                    Values must match the data types defined for the columns. 
                    It is commonly used to populate tables with initial data or add new records.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <strong>Insert into all columns:</strong>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>INSERT INTO </SqlKeyword>TableName <SqlKeyword>VALUES</SqlKeyword> (Value1, Value2, ...);
                        </code>
                    </div>
                    <p>
                        Adds values to all columns in the table. The order of values must match the order of columns in the table definition.
                    </p>
                    <strong>Insert into specific columns:</strong>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>INSERT INTO </SqlKeyword>TableName (Column1, Column2, ...) <SqlKeyword>VALUES</SqlKeyword> (Value1, Value2, ...);
                        </code>
                    </div>
                    <p>
                        Adds values to specified columns. Unmentioned columns will take their default value or remain NULL.
                    </p>
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
                </tbody>
            </table>

            <div className="example">
                <h4>Examples</h4>
                <h6>Insert into all columns:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>INSERT INTO </SqlKeyword>Students <SqlKeyword>VALUES</SqlKeyword> (3, 'Charlie', 21, 'A');
                    </code>
                </div>
            </div>
            <h5>Updated Table:</h5>
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
                </tbody>
            </table>

            <div className="example">
                <h6>Insert into specific columns:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>INSERT INTO </SqlKeyword>Students (StudentID, Name) <SqlKeyword>VALUES</SqlKeyword> (4, 'Diana');
                    </code>
                </div>
            </div>
            <h5>Updated Table:</h5>
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
                        <td className="td">NULL</td>
                        <td className="td">NULL</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Insert multiple rows:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>INSERT INTO </SqlKeyword>Students (StudentID, Name, Age, Grade) <SqlKeyword>VALUES</SqlKeyword>
                        <br />
                        (5, 'Eve', 20, 'B'),<br />
                        (6, 'Frank', 23, 'C');
                    </code>
                </div>
            </div>
            <h5>Updated Table:</h5>
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
                        <td className="td">NULL</td>
                        <td className="td">NULL</td>
                    </tr>
                    <tr>
                        <td className="td">5</td>
                        <td className="td">Eve</td>
                        <td className="td">20</td>
                        <td className="td">B</td>
                    </tr>
                    <tr>
                        <td className="td">6</td>
                        <td className="td">Frank</td>
                        <td className="td">23</td>
                        <td className="td">C</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>INSERT INTO</SqlCode></strong> statement is essential for adding data to tables in SQL. 
                Whether inserting into all columns or specific ones, it provides flexibility to manage new records efficiently. 
                Properly matching data types and ensuring values align with table constraints is critical for successful execution.
            </p>
        </div>
    );
};

export default SQLInsertInto;