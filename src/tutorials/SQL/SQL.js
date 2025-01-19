import React from 'react';
import SqlKeyword from '../../SQLKeyword';
import SqlCode from '../../SQLCode';

const SQL = () => {
    const styles = {
        body: {
            fontFamily: 'Verdana, sans-serif',
            margin: '20px',
        },
        text: {
            margin: '30px 0',
            fontFamily: 'Verdana, sans-serif',
        },
        codeBlock: {
            backgroundColor: '#e7e9eb',
            padding: '15px',
            borderRadius: '5px',
            margin: '10px 0',
            fontFamily: 'Courier New, monospace',
        },
        hr: {
            margin: '10px 0',
            border: 'none',
            height: '1px',
            backgroundColor: '#ccc',
        },
        section: {
            marginBottom: '20px',
        },
    };

    return (
        <div style={styles.body}>
            <h2>SQL Tutorial</h2>
            <hr style={styles.hr} />

            <div style={styles.section}>
                <h4>Introduction to SQL</h4>
                <p style={styles.text}>
                    SQL (Structured Query Language) is a standard language for storing, manipulating, and retrieving data in databases.
                </p>
            </div>

            <div style={styles.section}>
                <h4>What You Will Learn</h4>
                <p style={styles.text}>
                    Our SQL tutorial will teach you how to use SQL in:
                </p>
                <ul style={styles.text}>
                    <li>MySQL</li>
                    <li>SQL Server</li>
                    <li>MS Access</li>
                    <li>Oracle</li>
                    <li>Sybase</li>
                    <li>Informix</li>
                    <li>Postgres</li>
                    <li>and other database systems.</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h4>Examples in Each Chapter</h4>
                <p style={styles.text}>
                    With our online SQL editor, you can edit the SQL statements and click on a button to view the result. 
                    <strong> Example:</strong>
                </p>
                <div style={styles.codeBlock}>
                    <code>
                        <SqlKeyword>SELECT *</SqlKeyword> <SqlKeyword>FROM</SqlKeyword> Customers;
                    </code>
                </div>
                <p style={styles.text}>
                    Click on the "Try it Yourself" button to see how it works.
                </p>
            </div>

            <div style={styles.section}>
                <h4>SQL Exercises</h4>
                <p style={styles.text}>
                    Many chapters in this tutorial end with an exercise where you can check your level of knowledge.
                </p>
                <a href="https://www.w3schools.com/sql/sql_exercises.asp" style={{ color: '#007bff' }}>
                    See all SQL Exercises
                </a>
            </div>

            <div style={styles.section}>
                <h4>SQL References</h4>
                <p style={styles.text}>
                    At W3Schools, you will find a complete reference for keywords and functions, including:
                </p>
                <ul style={styles.text}>
                    <li>SQL Keyword Reference</li>
                    <li>MySQL Functions</li>
                    <li>SQL Server Functions</li>
                    <li>MS Access Functions</li>
                    <li>SQL Data Types</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h4>Get Certified</h4>
                <p style={styles.text}>
                    Kickstart your career by completing the SQL course and getting certified!
                </p>
                <a href="https://www.w3schools.com/certificates/default.asp" style={{ color: '#007bff' }}>
                    Get certified
                </a>
            </div>
        </div>
    );
};

export default SQL;