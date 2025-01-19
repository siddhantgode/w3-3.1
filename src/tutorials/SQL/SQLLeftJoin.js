import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLLeftJoin = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL LEFT JOIN</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>LEFT JOIN</SqlCode></strong> returns all rows from the left table and matching rows from the right table. Non-matching rows in the right table are filled with <strong>NULL</strong>.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> Table1<br />
                            <SqlKeyword>LEFT JOIN</SqlKeyword> Table2<br />
                            <SqlKeyword>ON</SqlKeyword> Table1.ColumnName = Table2.ColumnName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Retrieve all students and their grades:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Students.Name, Grades.Grade</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>LEFT JOIN</SqlKeyword> Grades<br />
                        <SqlKeyword>ON</SqlKeyword> Students.StudentID = Grades.StudentID;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>LEFT JOIN</SqlCode></strong> is useful for keeping all rows from the left table, even if there are no matches in the right table.
            </p>
        </div>
    );
};

export default SQLLeftJoin;