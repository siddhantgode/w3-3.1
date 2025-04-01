const nodemailer = require('nodemailer');
const fs = require('fs');
const fsPromises = require('fs/promises');
const csv = require('csv-parser');
const path = require('path');
const cliProgress = require('cli-progress');

// **CSV File Path**
const csvFilePath = './edufulnessC.csv';

// **Logging File**
const logFile = path.resolve("C:/Users/Administrator/Documents/email_log.txt");

// **SMTP Configuration with Connection Pooling**
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    auth: {
        user: 'atchyut@edufulness.com',
        pass: 'Atchyut@1987',
    },
});

// **Verify SMTP Connection**
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ SMTP Connection Error:", error);
    } else {
        console.log("✅ SMTP Server is ready to send emails!");
    }
});

// **Read Recipients from CSV**
const readRecipientsFromCSV = async (filePath) => {
    try {
        const recipients = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(filePath)
                .pipe(csv())
                .on('data', (data) => {
                    if (data.email && data.name) {
                        recipients.push({ email: data.email.trim(), name: data.name.trim() });
                    }
                })
                .on('end', () => {
                    console.log(`📂 Loaded ${recipients.length} recipients from CSV`);
                    resolve(recipients);
                })
                .on('error', (error) => reject(error));
        });
    } catch (error) {
        console.error("❌ Error reading CSV:", error);
        return [];
    }
};

// **Log Emails**
const logEmail = async (recipient, success, error = null) => {
    const timestamp = new Date().toISOString();
    let logEntry = `${timestamp},${recipient.name},${recipient.email},${success ? 'Success' : 'Failed'}`;
    if (error) logEntry += ` - Error: ${error.message || error}`;
    logEntry += '\n';

    try {
        await fsPromises.appendFile(logFile, logEntry);
        console.log(`📜 Log updated for: ${recipient.email}`);
    } catch (err) {
        console.error("❌ Error writing to log file:", err);
    }
};

// **Send an Email**
const sendEmail = async (recipient) => {
    const { email, name } = recipient;

    const subject = `🚀 1 Day to Go! Azure Data Engineering Training Demo`;

    const htmlBody = `
    <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333;">
      <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 5px; padding: 30px;">
        <header style="text-align: center; padding-bottom: 20px;">
          <img src="https://edufulness.in/logo.jpg" alt="Edufulness Logo" style="max-width: 200px;">
        </header>
        <header style="background-color: #0078d7; color: #fff; padding: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">Azure Data Engineering Training</h1>
        </header>
        <main style="padding: 20px;">
          <p>Dear <strong>${name},</strong></p>
          <p><strong>Tomorrow</strong> is your chance to join<strong> Azure Data Engineering Demo Session!</strong> 🚀</p>
          <p>At Edufulness, we focus on practical experience and real-world applications. Our training covers:</p>
          <ul>
            <li>Azure SQL Server</li>
            <li>Azure Data Factory</li>
            <li>Azure Synapse Analytics</li>
            <li>Azure Databricks</li>
            <li>Logic Apps</li>
            <li>Key Vault</li>
            <li>Blob Storage</li>
            <li>Azure Data Lake</li>
          </ul>
          <p><strong>Demo Details:</strong></p>
          <p>
            📅 <strong>Feb 16, 2025 (Sunday)</strong><br>
            ⏰ <strong>10:00 AM IST</strong><br>
            🔗 <a href="https://us06web.zoom.us/meeting/register/U29Tyf2fTt-HYNR1sxfFNA" style="color: #0078d7; text-decoration: none;">Register Here</a>
          </p>
          <strong>Check Our Free Tutorials on
            <a href="https://www.youtube.com/@EdufulnessEFN" target="_blank" rel="noopener noreferrer" style="color: red; font-weight: bold; text-decoration: none;"> 
              YouTube
            </a>
          </strong>
          <p>Don’t miss this opportunity to enhance your Azure skills!</p>
          <p>Best regards,<br>
          <strong>Atchyut Kumar</strong><br>
          <strong>Azure Data Engineering Instructor, Edufulness</strong><br>
          📞 9567034641 (Call/WhatsApp)</p>
        </main>
        <footer style="background-color: #f8f8f8; color: #666; text-align: center; padding: 10px; font-size: 12px;">
          © 2025 Edufulness. All rights reserved.
        </footer>
      </div>
    </div>
    `;

    const mailOptions = {
        from: '"Edufulness" <atchyut@edufulness.com>',
        to: email,
        subject: subject,
        html: htmlBody,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent to: ${name} <${email}>`);
        await logEmail(recipient, true);
    } catch (error) {
        console.error(`❌ Error sending email to ${name}:`, error);
        await logEmail(recipient, false, error);
    }
};

// **Progress Bar Setup**
const progressBar = new cliProgress.SingleBar({
    format: '📊 Progress | {bar} | {percentage}% || {value}/{total} Emails Sent || ⏳ ETA: {eta_formatted}',
    barCompleteChar: '\u2588',
    barIncompleteChar: '\u2591',
    hideCursor: true
});

// **Send Emails in Controlled Batches**
const sendBulkEmails = async () => {
    console.log("📤 Reading recipients from CSV...");
    const recipients = await readRecipientsFromCSV(csvFilePath);

    if (recipients.length === 0) {
        console.error("❌ No recipients found. Check your CSV file.");
        return;
    }

    const batchSize = 5;  // Number of parallel emails
    const batchDelay = 5000;  // 5-second delay between batches

    console.log(`📨 Sending emails in batches of ${batchSize}...`);
    progressBar.start(recipients.length, 0);

    for (let i = 0; i < recipients.length; i += batchSize) {
        const batch = recipients.slice(i, i + batchSize);
        const startTime = Date.now();

        await Promise.all(batch.map(sendEmail));

        progressBar.increment(batch.length, {
            eta_formatted: Math.round(((recipients.length - i) / batchSize) * (batchDelay / 1000)) + "s"
        });

        if (i + batchSize < recipients.length) {
            console.log(`⏳ Waiting ${batchDelay / 1000} seconds before next batch...`);
            await new Promise(resolve => setTimeout(resolve, batchDelay));
        }
    }

    progressBar.stop();
    console.log("✅ All emails have been sent successfully!");
};

// **Run Bulk Email Sending**
sendBulkEmails();
