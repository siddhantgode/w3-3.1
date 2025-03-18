const admin = require("firebase-admin");
const fs = require("fs");
const Papa = require("papaparse");

// Load Firebase Admin SDK with service account key
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// Function to fetch Firestore data and export as CSV
const fetchAndSaveCSV = async () => {
  try {
    const collectionName = "formSubmissions"; // ✅ Updated collection name
    const snapshot = await db.collection(collectionName).get();

    if (snapshot.empty) {
      console.log("❌ No documents found in Firestore!");
      return;
    }

    // Extract document data
    const data = snapshot.docs.map((doc) => ({
      id: doc.id, // Include document ID
      EmailID: doc.data().EmailID || "N/A",
      PhoneNumber: doc.data().PhoneNumber || "N/A",
      UserName: doc.data().UserName || "N/A",
    }));

    console.log("📌 Fetched Data:", data); // Debugging log

    // Convert JSON data to CSV format
    const csv = Papa.unparse(data);

    // Save CSV file
    const filePath = "formSubmissions_data.csv";
    fs.writeFileSync(filePath, csv);

    console.log(`✅ CSV file successfully created: ${filePath}`);
  } catch (error) {
    console.error("❌ Error fetching Firestore data:", error);
  }
};

// Run the function
fetchAndSaveCSV();
