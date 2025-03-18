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

// **Email Accounts**
const emailAccounts = [
    { user: 'atchyut@edufulness.com', pass: 'Atchyut@1987' },
    { user: 'learning@edufulness.in', pass: 'Edufulness@2023' }
];

// **Function to create a transporter dynamically**
const createTransporter = (emailAccount) => {
    return nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,
        secure: true,
        auth: {
            user: emailAccount.user,
            pass: emailAccount.pass,
        },
    });
};

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
const sendEmail = async (recipient, transporter) => {
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
    <h2 style="text-align: center; color: #0078d7;">🌟 Demo Recording & Regular Classes Info 🌟</h2>
    
    <p>Hi,</p>
    <p>Thank you for attending our <strong>Azure Data Engineering Demo Session</strong>!</p>
    
    <p>📺 <strong>Demo Recording:</strong> Watch the session here: <a href="https://youtu.be/U4hfZuhWOZM" target="_blank" style="color: #0078d7; text-decoration: none;">Watch Now</a></p>
    
    <p>🚀 <strong>Regular Classes Start Tomorrow!</strong></p>
    <ul>
        <li><strong>Schedule:</strong> <em>03-03-2025 onwards, Mon-Fri, 6:30 AM - 7:30 AM IST</em></li>
        <li><strong>Zoom Link:</strong> <a href="https://us06web.zoom.us/meeting/register/yohKDL8xRe6svihUJqL2ew" target="_blank" style="color: #0078d7; text-decoration: none;">Register Here</a></li>
    </ul>
    
    <p>Stay consistent and make the most of this learning journey!</p>
    
    <p>💬 <strong>Join our WhatsApp community</strong> for updates: <a href="https://chat.whatsapp.com/FMSSEzJtCsyAdpaiJCjqQP" target="_blank" style="color: #0078d7; text-decoration: none;">Join Now</a></p>
    <p>📺 <strong>Watch Free Tutorials on YouTube:</strong> <a href="https://www.youtube.com/@EduFulnessEFN" target="_blank" style="color: #0078d7; text-decoration: none;">Subscribe Now</a></p>
    
    <p>For any questions, feel free to reach out.</p>
    
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
        <a href="https://www.youtube.com/@EduFulnessEFN" target="_blank" rel="noopener noreferrer" style="margin-left: 15px;">
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
        from: `"Edufulness" <${transporter.options.auth.user}>`,
        to: email,
        subject: subject,
        html: htmlBody,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Email sent to: ${name} <${email}> using ${transporter.options.auth.user}`);
        await logEmail(recipient, true);
    } catch (error) {
        console.error(`❌ Error sending email to ${name}:`, error);
        await logEmail(recipient, false, error);
    }
};

// **Send Emails in Batches of 5 with Alternating Email Accounts**
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

    progressBar.start(recipients.length, 0); // Start progress bar

    let batchCount = 0;

    for (let i = 0; i < recipients.length; i += 5) {
        const batch = recipients.slice(i, i + 5);

        // **Alternate between two email accounts**
        const accountIndex = Math.floor(batchCount % 2);
        const transporter = createTransporter(emailAccounts[accountIndex]);

        await Promise.all(batch.map(recipient => sendEmail(recipient, transporter)));

        progressBar.increment(batch.length); // Update progress bar
        batchCount++;

        if (batchCount % 10 === 0) {
            console.log("⏳ Waiting for 60 seconds before continuing...");
            await new Promise(resolve => setTimeout(resolve, 60000)); // 60-second delay
        } else {
            console.log("⏳ Waiting 2 seconds before next batch...");
            await new Promise(resolve => setTimeout(resolve, 2000)); // 2-second delay between batches
        }
    }

    progressBar.stop(); // Stop progress bar
    console.log("✅ All emails have been sent successfully!");
};

// **Run Bulk Email Sending**
sendBulkEmails();
