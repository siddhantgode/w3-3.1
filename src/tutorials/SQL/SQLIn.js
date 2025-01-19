import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLIn = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL IN</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>IN</SqlCode></strong> operator allows you to specify multiple values in a <SqlCode>WHERE</SqlCode> clause.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName<br />
                            <SqlKeyword>WHERE</SqlKeyword> ColumnName <SqlKeyword>IN</SqlKeyword> (Value1, Value2, ...);
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Find students in grades "A" or "B":</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name, Grade</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>WHERE</SqlKeyword> Grade <SqlKeyword>IN</SqlKeyword> ('A', 'B');
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>IN</SqlCode></strong> operator simplifies multiple <SqlCode>OR</SqlCode> conditions, making queries concise and readable.
            </p>
        </div>
    );
};

export default SQLIn;