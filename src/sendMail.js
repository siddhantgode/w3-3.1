const nodemailer = require('nodemailer');
const fs = require('fs');
const fsPromises = require('fs/promises');
const csv = require('csv-parser');
const path = require('path');
const cliProgress = require('cli-progress'); // Progress bar package

// **CSV File Path**
const csvFilePath = './edufulnessC.csv';

// **Logging File**
const logFile = path.resolve("C:/Users/Administrator/Documents/email_log.txt");


// **SMTP Configuration**
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
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
    const logDir = path.dirname(logFile); // Get directory path
    const timestamp = new Date().toISOString();
    
    let logEntry = `${timestamp},${recipient.name},${recipient.email},${success ? 'Success' : 'Failed'}`;
    if (error) logEntry += ` - Error: ${error.message || error}`;
    logEntry += '\n';

    try {
        // Ensure directory exists
        await fsPromises.mkdir(logDir, { recursive: true });

        // Append to log file
        await fsPromises.appendFile(logFile, logEntry);
        console.log(`📜 Log updated for: ${recipient.email}`);
    } catch (err) {
        console.error("❌ Error writing to log file:", err);
    }
};


// **Send an Email**
const sendEmail = async (recipient) => {
    const { email, name } = recipient;

    const subject = `Azure Data Engineering - Demo Session  `;

    const htmlBody = `
   <div style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 5px; padding: 30px;">
        <header style="text-align: center; padding-bottom: 20px;">
            <img src="https://edufulness.in/logo.jpg" alt="Edufulness Logo" style="max-width: 200px;">
        </header>
        <header style="background-color: #0078d7; color: #fff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">🚀 Azure Data Engineering - Demo Recording & Regular Classes</h1>
        </header>

        <main style="padding: 20px;">
            <p>Hi,</p>
            <p>Thank you for attending the <strong>Azure Data Engineering</strong> demo session! 🎉</p>
            
            <p>📌 <strong>Demo Recording:</strong> Watch here 👉 <a href="https://youtu.be/c5CdeIv6Cjo" target="_blank" style="color: #0078d7; text-decoration: none;">YouTube </a></p>
            
            <p>🚀 <strong>Regular Classes Start from April 1, 2025!</strong></p>
            <p>📅 <strong>Schedule:</strong> Monday to Friday</p>
            <p>⏰ <strong>Time:</strong> 08:30 PM - 09:30 PM IST</p>
            <p>🔗 <strong>Zoom Link:</strong> <a href="https://us06web.zoom.us/meeting/register/3J7LKcXqQqa-bzQ7_pj8hA" target="_blank" style="color: #0078d7; text-decoration: none;">Register Here</a></p>
            
            <p><strong>💡 Topics Covered:</strong></p>
            <ul>
                <li>Azure SQL</li>
                <li>Data Factory</li>
                <li>Synapse</li>
                <li>Databricks - PySpark</li>
                <li>Microsoft Fabric</li>
                <li>Blob Storage</li>
                <li>Data Lake</li>
                <li>Delta Lake</li>
                <li>...& more!</li>
            </ul>
            
            <p>💬 <strong>Join WhatsApp Community:</strong> <a href="https://chat.whatsapp.com/FMSSEzJtCsyAdpaiJCjqQP" target="_blank" style="color: #0078d7; text-decoration: none;">Join Now</a></p>
            <p>📺 <strong>Watch Free Tutorials:</strong> <a href="https://www.youtube.com/@EduFulnessEFN" target="_blank" style="color: #0078d7; text-decoration: none;">Subscribe Here</a></p>
            
            <p>Looking forward to seeing you in class! 😊</p>
            
            <p>📞 <strong>Need help?</strong> WhatsApp: 9567034641 | Call: 9392955424</p>
            
            <p><strong>Atchyut Kumar</strong><br>
            <strong>Azure Data Engineering Instructor | Edufulness</strong></p>


            <div style="margin-top: 30px; text-align: center;">
            <table align="center" style="border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; text-align: center;">
                  <a href="https://chat.whatsapp.com/FMSSEzJtCsyAdpaiJCjqQP" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=00BE98" alt="WhatsApp Icon" style="width: 40px; height: 40px;">
                  </a>
                  <div style="font-size: 14px; font-weight: bold; margin-top: 5px; color: #00BE98;">Join Our Group</div>
                </td>
                <td style="padding: 10px; text-align: center;">
                  <a href="https://www.youtube.com/@EdufulnessEFN" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=360" alt="YouTube Icon" style="width: 40px; height: 40px;">
                  </a>
                  <div style="font-size: 14px; font-weight: bold; margin-top: 5px; color: #FF0000;">Subscribe</div>
                </td>
              </tr>
            </table>
          </div>
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

// **Send Emails in Batches of 5 with Progress Bar**
const sendBulkEmails = async () => {
    console.log("📤 Reading recipients from CSV...");
    const recipients = await readRecipientsFromCSV(csvFilePath);
    
    if (recipients.length === 0) {
        console.error("❌ No recipients found. Check your CSV file.");
        return;
    }

    console.log(`📨 Sending emails to ${recipients.length} recipients in batches of 5...`);

    // **Initialize Progress Bar**
    const progressBar = new cliProgress.SingleBar({
        format: '📧 Sending Emails [{bar}] {percentage}% | {value}/{total} emails',
        barCompleteChar: '█',
        barIncompleteChar: '-',
        hideCursor: true
    });

    progressBar.start(recipients.length, 0); // Start the progress bar

    for (let i = 0; i < recipients.length; i += 5) {
        const batch = recipients.slice(i, i + 5);

        await Promise.all(batch.map(sendEmail)); // Send 5 emails in parallel

        progressBar.increment(batch.length); // Update progress bar
        console.log(`⏳ Waiting 2 seconds before next batch...`);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Delay between batches
    }

    progressBar.stop(); // Stop progress bar
    console.log("✅ All emails have been sent successfully!");
};

// **Run Bulk Email Sending**
sendBulkEmails();
