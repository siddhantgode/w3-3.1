import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLFullJoin = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL FULL JOIN</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>FULL JOIN</SqlCode></strong> combines the results of both <strong>LEFT JOIN</strong> and <strong>RIGHT JOIN</strong>, returning all rows from both tables. Non-matching rows are filled with <strong>NULL</strong>.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> Table1<br />
                            <SqlKeyword>FULL JOIN</SqlKeyword> Table2<br />
                            <SqlKeyword>ON</SqlKeyword> Table1.ColumnName = Table2.ColumnName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Retrieve all students and grades, including unmatched rows:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Students.Name, Grades.Grade</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>FULL JOIN</SqlKeyword> Grades<br />
                        <SqlKeyword>ON</SqlKeyword> Students.StudentID = Grades.StudentID;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>FULL JOIN</SqlCode></strong> is ideal for combining all data from two tables, regardless of matching rows.
            </p>
        </div>
    );
};

export default SQLFullJoin;