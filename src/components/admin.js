import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Ensure db is imported correctly
import { doc, setDoc, getDocs, query, where, collection } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import Papa from "papaparse"; 

function LoginPage() {
  const downloadCSV = () => {
    if (registeredUsers.length === 0) {
      alert("No registered users to download!");
      return;
    }
  
    const csvData = registeredUsers.map(user => ({
      Name: user.UserName || "N/A",
      Email: user.EmailID || "N/A",
      "Phone Number": user.PhoneNumber || "N/A",
      Course: user.Course || "N/A"
    }));
  
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "registered_users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  


  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]); // State to store registered users

  // State for storing date and time values per course
  const [courseSchedules, setCourseSchedules] = useState([
    { 
      name: "Data Engineering", 
      date: "2025-03-02", 
      time: "10:00", 
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30"
    },
    { 
      name: "Snowflake", 
      date: "2025-03-02", 
      time: "10:00", 
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30"
    },
    { 
      name: "F.E. Civil", 
      date: "2025-03-02", 
      time: "10:00", 
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30"
    },
    { 
      name: "English Speaking", 
      date: "2025-03-02", 
      time: "10:00", 
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30"
    },
  ]);

  // Fetch registered users from Firestore
  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const usersCollection = collection(db, "formSubmissions");
        const querySnapshot = await getDocs(usersCollection);

        const usersList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setRegisteredUsers(usersList);
      } catch (error) {
        console.error("Error fetching registered users:", error);
      }
    };

    fetchRegisteredUsers();
  }, []);

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
  
        await setDoc(
          courseDocRef,
          {
            name: selectedCourse.name,
            date: selectedCourse.date,
            time: selectedCourse.time,
            date2: selectedCourse.date2,
            dateString: selectedCourse.dateString,
            previousPrice: selectedCourse.previousPrice || 0,
            currentPrice: selectedCourse.currentPrice || 0,
          },
          { merge: true }
        );
  
        alert(`Updated: ${selectedCourse.name} - ${selectedCourse.date} at ${selectedCourse.time}`);
      } else {
        // If course doesn't exist, create a new document
        const newDocRef = doc(courseCollectionRef);
        await setDoc(newDocRef, {
          name: selectedCourse.name,
          date: selectedCourse.date,
          time: selectedCourse.time,
          date2: selectedCourse.date2,
          dateString: selectedCourse.dateString,
        });
  
        alert(`Saved: ${selectedCourse.name} - ${selectedCourse.date} at ${selectedCourse.time}`);
      }
    } catch (error) {
      console.error("Error saving data:", error);
      alert("Failed to save data. Please try again.");
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

  const [udemyCourses, setUdemyCourses] = useState([]);
const [newCourse, setNewCourse] = useState({
  id: "",
  title: "",
  instructor: "",
  cost: "",
  image: "",
  link: "",
  rating: "",
  topic: "",
});
const [editMode, setEditMode] = useState(null); // Track editing course ID

// Fetch Udemy Courses
useEffect(() => {
  const fetchUdemyCourses = async () => {
    try {
      const coursesCollection = collection(db, "udemyCourses");
      const querySnapshot = await getDocs(coursesCollection);

      const coursesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setUdemyCourses(coursesList);
    } catch (error) {
      console.error("Error fetching Udemy courses:", error);
    }
  };

  fetchUdemyCourses();
}, []);

// Handle Input Changes
const handleCourseChange = (e) => {
  setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
};

// Add or Update Course
const handleSaveCourse = async () => {
  if (!newCourse.id || !newCourse.title || !newCourse.instructor || !newCourse.cost || !newCourse.image || !newCourse.link || !newCourse.rating || !newCourse.topic) {
    alert("Please fill all fields!");
    return;
  }

  try {
    if (editMode) {
      // Update existing course
      const courseDocRef = doc(db, "udemyCourses", editMode.toString());
      await setDoc(courseDocRef, newCourse, { merge: true });

      setUdemyCourses(udemyCourses.map(course => course.id === editMode ? { id: editMode, ...newCourse } : course));
      setEditMode(null);
      alert("✅ Course updated successfully!");
    } else {
      // Add new course
      const newCourseRef = doc(collection(db, "udemyCourses"));
      await setDoc(newCourseRef, newCourse);

      setUdemyCourses([...udemyCourses, { id: newCourseRef.id, ...newCourse }]);
      alert("✅ Course added successfully!");
    }

    setNewCourse({ id: "", title: "", instructor: "", cost: "", image: "", link: "", rating: "", topic: "" });
  } catch (error) {
    console.error("Error saving course:", error);
    alert("❌ Failed to save course!");
  }
};

// Delete Course


const handleDeleteCourse = async (id) => {
  try {
    await deleteDoc(doc(db, "udemyCourses", id));
    setUdemyCourses(udemyCourses.filter(course => course.id !== id));
    alert("✅ Course deleted successfully!");
  } catch (error) {
    console.error("Error deleting course:", error);
    alert("❌ Failed to delete course!");
  }
};


// Edit Course
const handleEditCourse = (course) => {
  setNewCourse(course);
  setEditMode(course.id);
};


  return (
    <div className="container-fluid mt-5">
      <div className="col-lg-10 mx-auto  p-3 shadow rounded text-center">
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
      <th style={{ width: "20%" }}>Course Name</th>
      <th style={{ width: "15%" }}>Date</th>
      <th style={{ width: "15%" }}>Time</th>
      <th style={{ width: "15%" }}>Previous Price</th>
      <th style={{ width: "15%" }}>Current Price</th>
      <th style={{ width: "20%" }}>Date 2</th>
      <th style={{ width: "25%" }}>Date String</th>
      <th style={{ width: "10%" }}>Action</th>
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
            onChange={(e) => handleScheduleChange(index, "date", e.target.value)}
          />
        </td>
        <td>
          <input
            type="time"
            className="form-control form-control-sm"
            value={course.time}
            onChange={(e) => handleScheduleChange(index, "time", e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control form-control-sm"
            value={course.previousPrice || ""}
            onChange={(e) => handleScheduleChange(index, "previousPrice", e.target.value)}
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control form-control-sm"
            value={course.currentPrice || ""}
            onChange={(e) => handleScheduleChange(index, "currentPrice", e.target.value)}
          />
        </td>
        <td>
          <input
            type="datetime-local"
            className="form-control form-control-sm"
            value={course.date2}
            onChange={(e) => handleScheduleChange(index, "date2", e.target.value)}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control form-control-sm"
            value={course.dateString}
            onChange={(e) => handleScheduleChange(index, "dateString", e.target.value)}
          />
        </td>
        <td>
          <button className="btn btn-success btn-sm" onClick={() => handleSave(index)}>
            Save
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
  </div>
</div>


            
    {/* Registered Users Section */}
    <div className="mt-5 p-3 bg-info text-white rounded d-flex justify-content-between align-items-center">
      <span>Registered Users</span>
      <button className="btn btn-light btn-sm" onClick={downloadCSV}>
        Download CSV
      </button>
    </div>

    {/* Scrollable Table */}
    <div className="d-flex justify-content-center">
      <div
        className="table-responsive mt-3"
        style={{ maxHeight: "300px", overflowY: "auto", width: "100%" }}
      >
        <table className="table table-bordered table-sm text-center">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Course</th>
            </tr>
          </thead>
          <tbody>
            {registeredUsers.length > 0 ? (
              registeredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.UserName || "N/A"}</td>
                  <td>{user.EmailID || "N/A"}</td>
                  <td>{user.PhoneNumber || "N/A"}</td>
                  <td>{user.Course || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No registered users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

    {/* Udemy Courses Section */}
<div className="mt-5 p-3 bg-warning text-white rounded">
  <h4>{editMode ? "Edit Course" : "Manage Udemy Courses"}</h4>
</div>

{/* Form to Add/Edit Course */}
<div className="mt-3 p-3 bg-light rounded">
  <h5>{editMode ? "Edit Course" : "Add a New Course"}</h5>
  <div className="row">
    <div className="col-md-2">
      <input type="number" className="form-control" placeholder="ID" name="id" value={newCourse.id} onChange={handleCourseChange} />
    </div>
    <div className="col-md-2">
      <input type="text" className="form-control" placeholder="Title" name="title" value={newCourse.title} onChange={handleCourseChange} />
    </div>
    <div className="col-md-2">
      <input type="text" className="form-control" placeholder="Instructor" name="instructor" value={newCourse.instructor} onChange={handleCourseChange} />
    </div>
    <div className="col-md-2">
      <input type="text" className="form-control" placeholder="Cost" name="cost" value={newCourse.cost} onChange={handleCourseChange} />
    </div>
    <div className="col-md-2">
      <input type="number" className="form-control" placeholder="Rating" name="rating" value={newCourse.rating} onChange={handleCourseChange} />
    </div>
    <div className="col-md-2">
      <input type="text" className="form-control" placeholder="Topic" name="topic" value={newCourse.topic} onChange={handleCourseChange} />
    </div>
    <div className="col-md-6 mt-2">
      <input type="text" className="form-control" placeholder="Image URL" name="image" value={newCourse.image} onChange={handleCourseChange} />
    </div>
    <div className="col-md-6 mt-2">
      <input type="text" className="form-control" placeholder="Course Link" name="link" value={newCourse.link} onChange={handleCourseChange} />
    </div>
    <div className="col-md-12 mt-2">
      <button className={`btn ${editMode ? "btn-primary" : "btn-success"} w-100`} onClick={handleSaveCourse}>
        {editMode ? "Update Course" : "Add Course"}
      </button>
    </div>
  </div>
</div>

{/* Display Udemy Courses */}
<div className="table-responsive mt-3">
  <table className="table table-bordered table-sm text-center">
    <thead className="table-dark">
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Instructor</th>
        <th>Cost</th>
        <th>Rating</th>
        <th>Topic</th>
        <th>Image</th>
        <th>Link</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {udemyCourses.length > 0 ? (
        udemyCourses.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.title}</td>
            <td>{course.instructor}</td>
            <td>{course.cost}</td>
            <td>{course.rating}</td>
            <td>{course.topic}</td>
            <td>
              <img src={course.image} alt="Course" style={{ width: "50px", height: "50px" }} />
            </td>
            <td>
              <a href={course.link} target="_blank" rel="noopener noreferrer">View</a>
            </td>
            <td>
              <button className="btn btn-primary btn-sm me-2" onClick={() => handleEditCourse(course)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDeleteCourse(course.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="9">No Udemy courses found</td>
        </tr>
      )}
    </tbody>
  </table>
</div>

  </>
        ) : (
          <><div className="d-flex justify-content-center align-items-center vh-100">
          <div className="bg-light p-4 shadow rounded" style={{ width: "350px" }}>
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
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
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
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isLoggingIn}>
                {isLoggingIn ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
                  </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
