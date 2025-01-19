import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLInnerJoin = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL INNER JOIN</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>INNER JOIN</SqlCode></strong> returns rows that have matching values in both tables.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> Table1<br />
                            <SqlKeyword>INNER JOIN</SqlKeyword> Table2<br />
                            <SqlKeyword>ON</SqlKeyword> Table1.ColumnName = Table2.ColumnName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Retrieve students with matching grades:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Students.Name, Grades.Grade</SqlKeyword><br />
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
                The <strong><SqlCode>INNER JOIN</SqlCode></strong> is used to fetch only matching rows between two tables.
            </p>
        </div>
    );
};

export default SQLInnerJoin;