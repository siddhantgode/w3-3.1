import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLAliases = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL Aliases</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    Aliases are used to rename a column or table temporarily in a query.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <h5>For Columns:</h5>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT ColumnName AS AliasName</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                    <h5>For Tables:</h5>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT Column1, Column2</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName <SqlKeyword>AS</SqlKeyword> AliasName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Example</h4>

            <div className="example">
                <h6>Rename columns in the output:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT Name AS StudentName, Age AS StudentAge</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                Aliases enhance query readability and presentation by allowing temporary names for columns and tables.
            </p>
        </div>
    );
};

export default SQLAliases;