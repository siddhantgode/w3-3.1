import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLLike = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL LIKE</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    The <strong><SqlCode>LIKE</SqlCode></strong> operator is used to search for a specified pattern in a column.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Theory</h4>
                    Often used with <SqlCode>WHERE</SqlCode> to filter rows based on patterns. Supports two wildcard characters:
                    <ul>
                        <li><strong>%</strong>: Matches zero, one, or multiple characters.</li>
                        <li><strong>_</strong>: Matches a single character.</li>
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
                            <SqlKeyword>WHERE</SqlKeyword> ColumnName <SqlKeyword>LIKE</SqlKeyword> Pattern;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Examples</h4>

            <div className="example">
                <h6>Search for names starting with "A":</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>WHERE</SqlKeyword> Name <SqlKeyword>LIKE</SqlKeyword> 'A%';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <div className="example">
                <h6>Search for names ending with "e":</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>WHERE</SqlKeyword> Name <SqlKeyword>LIKE</SqlKeyword> '%e';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <div className="example">
                <h6>Search for names with exactly 5 characters:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students<br />
                        <SqlKeyword>WHERE</SqlKeyword> Name <SqlKeyword>LIKE</SqlKeyword> '_____';
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>LIKE</SqlCode></strong> operator is useful for pattern matching in text data, providing flexible search capabilities.
            </p>
        </div>
    );
};

export default SQLLike;