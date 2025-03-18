import React, { useState } from "react";
import { db } from "../firebase"; // Ensure db is imported correctly
import { doc, setDoc, getDocs, query, where, collection } from "firebase/firestore";


function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // State for storing date and time values per course
  const [courseSchedules, setCourseSchedules] = useState([
    { name: "Data Engineering", date: "2025-03-02", time: "10:00" },
    { name: "Snowflake", date: "2025-03-02", time: "10:00" },
    { name: "F.E. Civil", date: "2025-03-02", time: "10:00" },
    { name: "English Speaking", date: "2025-03-02", time: "10:00" },
  ]);

  // Handle input changes for date & time pickers
  const handleScheduleChange = (index, field, value) => {
    const updatedSchedules = [...courseSchedules];
    updatedSchedules[index][field] = value;
    setCourseSchedules(updatedSchedules);
  };

  // Handle save button click - Save Data to Firestore
  const handleSave = async (index) => {
    try {
      const selectedCourse = courseSchedules[index];
      const courseCollectionRef = collection(db, "courseSchedules");
  
      // Query Firestore to check if this course already exists
      const q = query(courseCollectionRef, where("name", "==", selectedCourse.name));
      const querySnapshot = await getDocs(q);
  
      if (!querySnapshot.empty) {
        // If course exists, get the document ID and update it
        const docId = querySnapshot.docs[0].id;
        const courseDocRef = doc(db, "courseSchedules", docId);
  
        await setDoc(courseDocRef, {
          name: selectedCourse.name,
          date: selectedCourse.date,
          time: selectedCourse.time,
        }, { merge: true });
  
        alert(`✅ Updated: ${selectedCourse.name} - ${selectedCourse.date} at ${selectedCourse.time}`);
      } else {
        // If course doesn't exist, create a new document
        const newDocRef = doc(courseCollectionRef);
        await setDoc(newDocRef, {
          name: selectedCourse.name,
          date: selectedCourse.date,
          time: selectedCourse.time,
        });
  
        alert(`✅ Saved: ${selectedCourse.name} - ${selectedCourse.date} at ${selectedCourse.time}`);
      }
    } catch (error) {
      console.error("❌ Error saving data:", error);
      alert("❌ Failed to save data. Please try again.");
    }
  }; 

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);

    setTimeout(() => {
      setIsLoggingIn(false);
      setIsLoggedIn(true); // Set login state to true
    }, 1500);
  };

  return (
    <div className="container-fluid mt-5">
      <div className="col-lg-10 mx-auto bg-light p-3 shadow rounded text-center">
        {isLoggedIn ? (
          <>
            <h2 className="text-success">Welcome, {credentials.username}!</h2>
  
            {/* Edit Form Dates Section */}
            <div className="mt-3 p-3 bg-secondary text-white rounded">
              Edit Form Dates
            </div>
  
            {/* Centering Table */}
            <div className="d-flex justify-content-center">
              <div className="table-responsive mt-3">
                <table className="table table-bordered table-sm text-center" style={{ margin: "auto" }}>
                  <thead className="table-dark">
                    <tr>
                      <th style={{ width: "30%" }}>Course Name</th>
                      <th style={{ width: "20%" }}>Date</th>
                      <th style={{ width: "20%" }}>Time</th>
                      <th style={{ width: "15%" }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {courseSchedules.map((course, index) => (
                      <tr key={index}>
                        <td>{course.name}</td>
                        <td>
                          <input
                            type="date"
                            className="form-control form-control-sm"
                            value={course.date}
                            onChange={(e) =>
                              handleScheduleChange(index, "date", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <input
                            type="time"
                            className="form-control form-control-sm"
                            value={course.time}
                            onChange={(e) =>
                              handleScheduleChange(index, "time", e.target.value)
                            }
                          />
                        </td>
                        <td>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleSave(index)}
                          >
                            Save
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center mb-3">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Enter your username"
                  value={credentials.username}
                  onChange={(e) =>
                    setCredentials({ ...credentials, username: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isLoggingIn}>
                {isLoggingIn ? "Logging in..." : "Login"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
  
  
}

export default LoginPage;
