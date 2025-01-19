import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLWildCard = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL Wildcards</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    Wildcards are symbols used with the <strong><SqlCode>LIKE</SqlCode></strong> operator to perform advanced pattern matching in SQL.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Common Wildcards</h4>
                    <ul>
                        <li><strong>%</strong>: Matches zero, one, or multiple characters.</li>
                        <li><strong>_</strong>: Matches exactly one character.</li>
                    </ul>
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2, ...</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName<br />
                            <SqlKeyword>WHERE</SqlKeyword> ColumnName <SqlKeyword>LIKE</SqlKeyword> 'Pattern';
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Examples</h4>

            <div className="example">
                <h6>Names containing "ar":</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>WHERE</SqlKeyword> Name <SqlKeyword>LIKE</SqlKeyword> '%ar%';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <div className="example">
                <h6>Names starting with "C" and having 5 characters:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>WHERE</SqlKeyword> Name <SqlKeyword>LIKE</SqlKeyword> 'C____';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                Wildcards, when used with <strong><SqlCode>LIKE</SqlCode></strong>, enable advanced and flexible searches within textual data.
            </p>
        </div>
    );
};

export default SQLWildCard;