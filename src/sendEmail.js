const nodemailer = require('nodemailer');
const fs = require('fs');
const fsPromises = require('fs/promises');
const csv = require('csv-parser');
const path = require('path');

// **CSV File Path**
const csvFilePath = './edufulness.csv';

// **Logging File**
const logFile = path.resolve("C:/Users/siddhant/Documents/Web-Dev/w3/w3.1/w3/src/email_log.txt");

// **SMTP Configuration**
const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
        user: 'learning@edufulness.in',  
        pass: 'Edufulness@2023',  
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
          <p><strong>Tommorow</strong> is your chance to join<strong> Azure Data Engineering Demo Session!</strong> 🚀</p>
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
        from: '"Edufulness" <learning@edufulness.in>',
        to: email,
        subject: subject,
        html: htmlBody, // HTML email body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent successfully to: ${recipient.name} <${recipient.email}>`);
        await logEmail(recipient, true);
        return info;
    } catch (error) {
        console.error("❌ Error while sending email:", error);
        await logEmail(recipient, false, error);
    }
};

// **Send Emails to All Recipients**
const sendBulkEmails = async () => {
    console.log("📤 Reading recipients from CSV...");
    const recipients = await readRecipientsFromCSV(csvFilePath);
    
    if (recipients.length === 0) {
        console.error("❌ No recipients found. Check your CSV file.");
        return;
    }

    console.log(`📨 Sending emails to ${recipients.length} recipients...`);
    
    for (const recipient of recipients) {
        await sendEmail(recipient);
        await new Promise(resolve => setTimeout(resolve, 1000));  // Delay between emails (1 sec)
    }

    console.log("✅ All emails have been sent successfully!");
};

// **Run Bulk Email Sending**
sendBulkEmails();
