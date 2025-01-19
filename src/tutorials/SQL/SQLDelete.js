import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLDelete = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL DELETE</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>DELETE</SqlCode></strong> statement is used to remove rows from a table based on specified conditions. If no condition is specified, all rows in the table are deleted.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    The <strong><SqlCode>DELETE</SqlCode></strong> statement permanently removes rows from a table.
                    It works with the <SqlCode>WHERE</SqlCode> clause to specify which rows to delete.
                    Without a <SqlCode>WHERE</SqlCode> clause, all rows in the table will be deleted (use with caution).
                    The structure of the table and its columns remains intact after deletion.
                    For performance, ensure conditions in the <SqlCode>WHERE</SqlCode> clause are precise.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>DELETE FROM </SqlKeyword>TableName <SqlKeyword>WHERE</SqlKeyword> Condition;
                        </code>
                    </div>
                    <p className="text">
                        <strong>TableName:</strong> The name of the table.<br />
                        <strong>Condition:</strong> Specifies the rows to delete.
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
                <h6>Delete a specific row:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>DELETE FROM </SqlKeyword>Students <SqlKeyword>WHERE</SqlKeyword> Name = 'Alice';
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
                <h6>Delete rows with a condition:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>DELETE FROM </SqlKeyword>Students <SqlKeyword>WHERE</SqlKeyword> Grade = 'B';
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
                <h6>Delete all rows in the table:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>DELETE FROM </SqlKeyword>Students;
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
                        <td className="td" colSpan="4" style={{ textAlign: 'center' }}>No rows</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Delete rows with multiple conditions:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>DELETE FROM </SqlKeyword>Students <SqlKeyword>WHERE</SqlKeyword> Age > 21 AND Grade = 'C';
                    </code>
                </div>
            </div>
            <h5>Result (for original table):</h5>
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
                        <td className="td">5</td>
                        <td className="td">Eve</td>
                        <td className="td">20</td>
                        <td className="td">B</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>DELETE</SqlCode></strong> statement is essential for removing unwanted rows from a table. 
                Always use a <SqlCode>WHERE</SqlCode> clause to prevent accidental deletion of all rows. For situations requiring frequent deletions, 
                use additional safety checks or backups to protect critical data.
            </p>
        </div>
    );
};

export default SQLDelete;