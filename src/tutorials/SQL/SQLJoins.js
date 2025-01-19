import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLJoins = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL Joins</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    Joins are used to combine rows from two or more tables based on related columns.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Types of Joins</h4>
                    <ul>
                        <li><strong>INNER JOIN</strong>: Returns matching rows.</li>
                        <li><strong>LEFT JOIN</strong>: Returns all rows from the left table and matching rows from the right table.</li>
                        <li><strong>RIGHT JOIN</strong>: Returns all rows from the right table and matching rows from the left table.</li>
                        <li><strong>FULL JOIN</strong>: Returns all rows when there is a match in either table.</li>
                    </ul>
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> Table1<br />
                            <SqlKeyword>JOIN</SqlKeyword> Table2<br />
                            <SqlKeyword>ON</SqlKeyword> Table1.ColumnName = Table2.ColumnName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Combine Students and Grades tables:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Students.Name, Grades.Subject</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>INNER JOIN</SqlKeyword> Grades<br />
                        <SqlKeyword>ON</SqlKeyword> Students.StudentID = Grades.StudentID;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                Joins are essential for retrieving data from multiple related tables in a single query.
            </p>
        </div>
    );
};

export default SQLJoins;