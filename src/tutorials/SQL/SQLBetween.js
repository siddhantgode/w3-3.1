import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLBetween = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL BETWEEN</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>BETWEEN</SqlCode></strong> operator is used to filter rows within a specific range.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName<br />
                            <SqlKeyword>WHERE</SqlKeyword> ColumnName <SqlKeyword>BETWEEN</SqlKeyword> Value1 <SqlKeyword>AND</SqlKeyword> Value2;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Find students aged between 20 and 22:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name, Age</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>WHERE</SqlKeyword> Age <SqlKeyword>BETWEEN</SqlKeyword> 20 <SqlKeyword>AND</SqlKeyword> 22;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>BETWEEN</SqlCode></strong> operator provides an efficient way to filter data within a range.
            </p>
        </div>
    );
};

export default SQLBetween;