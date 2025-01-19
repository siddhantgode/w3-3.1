import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';
import '../tutorial.css'; // Importing the CSS stylesheet

const SQLMinMax = () => {
    return (
        <div className="section" style={{ margin: '20px' }}>
            <div className='title'>
                <h2>SQL MIN and MAX</h2>
                <hr className="hr" />
            </div>

            <div className="section">
                <p className="text">
                    <h4>Definition</h4>
                    <strong>MIN()</strong>: Retrieves the smallest value in a column.<br />
                    <strong>MAX()</strong>: Retrieves the largest value in a column.
                </p>
            </div>

            <div className="section">
                <p className="text">
                    <h4>Syntax</h4>
                    <div className="codeBlock">
                        <code>
                            <SqlKeyword>SELECT MIN(ColumnName), MAX(ColumnName)</SqlKeyword><br />
                            <SqlKeyword>FROM</SqlKeyword> TableName;
                        </code>
                    </div>
                </p>
                <hr className="hr" />
            </div>

            <h4>Examples</h4>

            <div className="example">
                <h6>Find the youngest and oldest students:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT MIN(Age) AS Youngest, MAX(Age) AS Oldest</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">Youngest</th>
                        <th className="th">Oldest</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">20</td>
                        <td className="td">23</td>
                    </tr>
                </tbody>
            </table>

            <div className="example">
                <h6>Find the lowest and highest grades:</h6>
                <div className="codeBlock">
                    <code>
                        <SqlKeyword>SELECT MIN(Grade) AS LowestGrade, MAX(Grade) AS HighestGrade</SqlKeyword><br />
                        <SqlKeyword>FROM</SqlKeyword> Students;
                    </code>
                </div>
                <button className="tryItButton">Try it Yourself</button>
            </div>

            <h5>Result:</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th className="th">LowestGrade</th>
                        <th className="th">HighestGrade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="td">A</td>
                        <td className="td">C</td>
                    </tr>
                </tbody>
            </table>

            <hr className="hr" />

            <p className="text">
                <h4>Conclusion</h4>
                The <strong><SqlCode>MIN()</SqlCode></strong> and <strong><SqlCode>MAX()</SqlCode></strong> functions are simple and effective for finding the range of values in a column.
            </p>
        </div>
    );
};

export default SQLMinMax;