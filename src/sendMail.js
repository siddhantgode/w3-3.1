const nodemailer = require('nodemailer');
const fs = require('fs');
const fsPromises = require('fs/promises');
const csv = require('csv-parser');
const path = require('path');
const cliProgress = require('cli-progress'); // Progress bar package

// **CSV File Path**
const csvFilePath = './edufulnessC.csv';

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

    const subject = `🌟 Upcoming Data Engineering Course Free Demo 🌟  | Edufulness`;

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

    <h2 style="text-align: center; color: #0078d7;">🌟 Free Demo Session Invite!🌟</h2>

    <p><strong>Hello! 🌟</strong></p>

    <p>Thank you for your interest in our <strong>Azure Data Engineering Training!</strong> 🎉 We’re excited to invite you to a <strong>free demo session</strong> on <strong>Sunday, March 2, 2025, at 10:00 AM IST.</strong></p>

    <h3>🔹 What You’ll Learn 🔹</h3>
    <ul>
        <li><strong>Azure SQL Server</strong></li>
        <li><strong>Data Factory</strong></li>
        <li><strong>Microsoft Fabric</strong></li>
        <li><strong>Synapse Analytics</strong></li>
        <li><strong>Databricks (PySpark, Delta Lake)</strong></li>
        <li><strong>Data Lake & Blob Storage</strong></li>
        <li><strong>Key Vault</strong></li>
        <li>...and much more, with expert-led, hands-on insights! 🤖</li>
    </ul>

    <h3>📅 Demo Session Details 📅</h3>
    <ul>
        <li><strong>Date:</strong> Sunday, March 2, 2025</li>
        <li><strong>Time:</strong> 10:00 AM IST</li>
        <li><strong>Join via Zoom:</strong> <a href="https://us06web.zoom.us/meeting/register/yohKDL8xRe6svihUJqL2ew" target="_blank" style="color: #0078d7; text-decoration: none;">Join Here</a> 🤝</li>
    </ul>

    <h3>📢 Stay Connected & Learn More 📢</h3>
    <p>💬 <strong>Join Our WhatsApp Community:</strong> <a href="https://chat.whatsapp.com/FMSSEzJtCsyAdpaiJCjqQP" target="_blank" style="color: #0078d7; text-decoration: none;">Click Here</a></p>
    <p>📺 <strong>Watch Free Tutorials on YouTube:</strong> <a href="https://www.youtube.com/@EduFulnessEFN" target="_blank" style="color: #0078d7; text-decoration: none;">Subscribe Now</a></p>

    <p>This session is your <strong>stepping stone</strong> to mastering <strong>Azure technologies</strong> with <strong>real-world projects, practical scenarios, and expert guidance.</strong> 🎓</p>

    <p>🔥 <strong>Don’t miss this chance to level up your skills!</strong> 🚀</p>

    <p>For any queries, feel free to reach out.</p>

    <p><strong>Best regards,</strong> 🙏<br>
        <strong>Atchyut Kumar</strong><br>
        <strong>Azure Data Engineering Instructor, Edufulness</strong><br>
        📞 <strong>Call/WhatsApp:</strong> <a href="tel:+919567034641" style="color: #0078d7; text-decoration: none;">9567034641</a><br>
        📞 <strong>Call Only:</strong> <a href="tel:+919392955424" style="color: #0078d7; text-decoration: none;">9392955424</a>
    </p>

    <div style="text-align: center; margin-top: 20px;">
        <a href="https://chat.whatsapp.com/FMSSEzJtCsyAdpaiJCjqQP" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=100&id=7OeRNqg6S7Vf&format=png&color=00BE98" alt="Join WhatsApp Group" style="width: 40px; height: 40px;">
        </a>
        <a href="https://www.youtube.com/@EdufulnessEFN" target="_blank" rel="noopener noreferrer" style="margin-left: 15px;">
            <img src="https://img.freepik.com/premium-vector/red-youtube-logo-social-media-logo_197792-1803.jpg?w=360" alt="Subscribe on YouTube" style="width: 40px; height: 40px;">
        </a>
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
