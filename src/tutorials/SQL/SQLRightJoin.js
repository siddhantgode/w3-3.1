import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLRightJoin = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL RIGHT JOIN</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>RIGHT JOIN</SqlCode></strong> returns all rows from the right table and matching rows from the left table. Non-matching rows in the left table are filled with <strong>NULL</strong>.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> Table1<br />
                            <SqlKeyword>RIGHT JOIN</SqlKeyword> Table2<br />
                            <SqlKeyword>ON</SqlKeyword> Table1.ColumnName = Table2.ColumnName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Retrieve all grades and their associated students:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Students.Name, Grades.Grade</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>RIGHT JOIN</SqlKeyword> Grades<br />
                        <SqlKeyword>ON</SqlKeyword> Students.StudentID = Grades.StudentID;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>RIGHT JOIN</SqlCode></strong> is useful for keeping all rows from the right table, even if there are no matches in the left table.
            </p>
        </div>
    );
};

export default SQLRightJoin;