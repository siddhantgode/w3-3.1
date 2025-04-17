import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Ensure db is imported correctly
import { doc, setDoc, getDocs, query, where, collection } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
import Papa from "papaparse";

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [filterQueries, setFilterQueries] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    course: "",
  });
  const [courseSchedules, setCourseSchedules] = useState([
    {
      name: "Data Engineering",
      date: "2025-03-02",
      time: "10:00",
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30",
    },
    {
      name: "Snowflake",
      date: "2025-03-02",
      time: "10:00",
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30",
    },
    {
      name: "F.E. Civil",
      date: "2025-03-02",
      time: "10:00",
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30",
    },
    {
      name: "English Speaking",
      date: "2025-03-02",
      time: "10:00",
      date2: "2025-03-02 10:00 AM GMT+5:30",
      dateString: "March 2, 2025 10:00 AM GMT+5:30",
    },
  ]);
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
  const [editMode, setEditMode] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Fetch registered users with timestamps
  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const usersCollection = collection(db, "formSubmissions");
        const snapshot = await getDocs(usersCollection);
        const users = snapshot.docs.map((doc) => {
          const data = doc.data();
          let timestamp = "N/A";
          if (data.createdAt && typeof data.createdAt.toDate === "function") {
            timestamp = data.createdAt.toDate().toLocaleString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });
          }
          return { id: doc.id, ...data, createdAt: timestamp };
        });
        setRegisteredUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchRegisteredUsers();
  }, []);

  // Fetch Udemy courses
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const snapshot = await getDocs(collection(db, "udemyCourses"));
        const courses = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setUdemyCourses(courses);
      } catch (error) {
        console.error("Error fetching Udemy courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setTimeout(() => {
      setIsLoggingIn(false);
      setIsLoggedIn(true);
    }, 1500);
  };

  const handleScheduleChange = (index, field, value) => {
    const updated = [...courseSchedules];
    updated[index][field] = value;
    setCourseSchedules(updated);
  };

  const handleSave = async (index) => {
    try {
      const selected = courseSchedules[index];
      const courseRef = collection(db, "courseSchedules");
      const q = query(courseRef, where("name", "==", selected.name));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        const docId = snapshot.docs[0].id;
        await setDoc(doc(db, "courseSchedules", docId), {
          ...selected,
          previousPrice: selected.previousPrice || 0,
          currentPrice: selected.currentPrice || 0,
        }, { merge: true });
        alert(`Updated: ${selected.name}`);
      } else {
        await setDoc(doc(courseRef), selected);
        alert(`Saved new: ${selected.name}`);
      }
    } catch (err) {
      console.error("Save failed:", err);
      alert("❌ Failed to save course schedule!");
    }
  };

  const handleCourseChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  const handleSaveCourse = async () => {
    if (Object.values(newCourse).some((val) => val === "")) {
      alert("Please fill all fields!");
      return;
    }

    try {
      if (editMode) {
        await setDoc(doc(db, "udemyCourses", editMode), newCourse, { merge: true });
        setUdemyCourses((prev) =>
          prev.map((c) => (c.id === editMode ? { id: editMode, ...newCourse } : c))
        );
        setEditMode(null);
        alert("✅ Course updated!");
      } else {
        const newDoc = doc(collection(db, "udemyCourses"));
        await setDoc(newDoc, newCourse);
        setUdemyCourses([...udemyCourses, { id: newDoc.id, ...newCourse }]);
        alert("✅ Course added!");
      }

      setNewCourse({
        id: "",
        title: "",
        instructor: "",
        cost: "",
        image: "",
        link: "",
        rating: "",
        topic: "",
      });
    } catch (err) {
      console.error("Error saving course:", err);
      alert("❌ Error saving course!");
    }
  };

  const handleDeleteCourse = async (id) => {
    try {
      await deleteDoc(doc(db, "udemyCourses", id));
      setUdemyCourses(udemyCourses.filter((course) => course.id !== id));
      alert("✅ Course deleted!");
    } catch (err) {
      console.error("Delete failed:", err);
      alert("❌ Delete failed!");
    }
  };

  const handleEditCourse = (course) => {
    setNewCourse(course);
    setEditMode(course.id);
  };

  const filteredUsers = registeredUsers.filter((user) =>
    (user.UserName || "").toLowerCase().includes(filterQueries.name.toLowerCase()) &&
    (user.EmailID || "").toLowerCase().includes(filterQueries.email.toLowerCase()) &&
    (user.PhoneNumber || "").toLowerCase().includes(filterQueries.phoneNumber.toLowerCase()) &&
    (user.Course || "").toLowerCase().includes(filterQueries.course.toLowerCase())
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const isANa = a.createdAt === "N/A";
    const isBNa = b.createdAt === "N/A";

    if (isANa && isBNa) return 0;
    if (isANa) return 1; // Push "N/A" to the end
    if (isBNa) return -1; // Keep non-"N/A" at the top

    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  const csvData = sortedUsers.map((user) => ({
    Name: user.UserName || "N/A",
    Email: user.EmailID || "N/A",
    "Phone Number": user.PhoneNumber || "N/A",
    Course: user.Course || "N/A",
    Country: user.Country || "N/A",
    Timestamp: user.createdAt || "N/A",
  }));

  const downloadCSV = () => {
    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "registered_users.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Placeholder for Send Bulk Emails functionality
  const handleSendBulkEmails = () => {
    alert("Send Bulk Emails functionality is not implemented yet. Please integrate with an email service (e.g., SendGrid).");
  };

  return (
    <div className="container-fluid mt-5">
      <div className="col-lg-10 mx-auto p-3 shadow rounded text-center">
        {isLoggedIn ? (
          <>
            <h2 className="text-success">Welcome, {credentials.username}!</h2>

            {/* Tiles Section */}
            <div className="row mt-4">
              <div className="col-md-3 mb-3">
                <div
                  className="card text-white bg-primary h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSection("editDates")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">Edit Dates</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div
                  className="card text-white bg-success h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSection("viewUsers")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">View Registered Users</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div
                  className="card text-white bg-warning h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSection("manageCourses")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">Manage Udemy Courses</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div
                  className="card text-white bg-info h-100"
                  style={{ cursor: "pointer" }}
                  onClick={() => setActiveSection("sendEmails")}
                >
                  <div className="card-body text-center">
                    <h5 className="card-title">Send Bulk Emails</h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Conditional Rendering of Sections */}
            {activeSection === "editDates" && (
              <div className="mt-3">
                <div className="p-3 bg-secondary text-white rounded">Edit Form Dates</div>
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
              </div>
            )}

            {activeSection === "viewUsers" && (
              <div className="mt-3">
                <div className="p-3 bg-info text-white rounded d-flex justify-content-between align-items-center">
                  <span>Registered Users</span>
                  <button className="btn btn-light btn-sm" onClick={downloadCSV}>
                    Download CSV
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <div
                    className="table-responsive mt-3"
                    style={{ maxHeight: "300px", overflowY: "auto", width: "100%" }}
                  >
                    <table className="table table-bordered table-sm text-center">
                      <thead className="table-dark">
                        <tr>
                          <th>
                            Name
                            <input
                              type="search"
                              className="form-control form-control-sm mt-1"
                              placeholder="Search by name"
                              value={filterQueries.name}
                              onChange={(e) => setFilterQueries({ ...filterQueries, name: e.target.value })}
                            />
                          </th>
                          <th>
                            Email
                            <input
                              type="search"
                              className="form-control form-control-sm mt-1"
                              placeholder="Search by email"
                              value={filterQueries.email}
                              onChange={(e) => setFilterQueries({ ...filterQueries, email: e.target.value })}
                            />
                          </th>
                          <th>
                            Phone Number
                            <input
                              type="search"
                              className="form-control form-control-sm mt-1"
                              placeholder="Search by phone number"
                              value={filterQueries.phoneNumber}
                              onChange={(e) => setFilterQueries({ ...filterQueries, phoneNumber: e.target.value })}
                            />
                          </th>
                          <th>
                            Course
                            <input
                              type="search"
                              className="form-control form-control-sm mt-1"
                              placeholder="Search by course"
                              value={filterQueries.course}
                              onChange={(e) => setFilterQueries({ ...filterQueries, course: e.target.value })}
                            />
                          </th>
                          <th>
                            Timestamp
                            <button
                              className="btn btn-sm btn-secondary ms-2"
                              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
                            >
                              {sortOrder === "asc" ? "↑" : "↓"}
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sortedUsers.map((user, index) => (
                          <tr key={index}>
                            <td>{user.UserName || "N/A"}</td>
                            <td>{user.EmailID || "N/A"}</td>
                            <td>{user.PhoneNumber || "N/A"}</td>
                            <td>{user.Course || "N/A"}</td>
                            <td>{user.createdAt}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "manageCourses" && (
              <div className="mt-3">
                <div className="p-3 bg-warning text-white rounded">
                  <h4>{editMode ? "Edit Course" : "Manage Udemy Courses"}</h4>
                </div>
                <div className="mt-3 p-3 bg-light rounded">
                  <h5>{editMode ? "Edit Course" : "Add a New Course"}</h5>
                  <div className="row">
                    <div className="col-md-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="ID"
                        name="id"
                        value={newCourse.id}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        value={newCourse.title}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Instructor"
                        name="instructor"
                        value={newCourse.instructor}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cost"
                        name="cost"
                        value={newCourse.cost}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Rating"
                        name="rating"
                        value={newCourse.rating}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Topic"
                        name="topic"
                        value={newCourse.topic}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Image URL"
                        name="image"
                        value={newCourse.image}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-6 mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Course Link"
                        name="link"
                        value={newCourse.link}
                        onChange={handleCourseChange}
                      />
                    </div>
                    <div className="col-md-12 mt-2">
                      <button
                        className={`btn ${editMode ? "btn-primary" : "btn-success"} w-100`}
                        onClick={handleSaveCourse}
                      >
                        {editMode ? "Update Course" : "Add Course"}
                      </button>
                    </div>
                  </div>
                </div>
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
                              <img
                                src={course.image}
                                alt="Course"
                                style={{ width: "50px", height: "50px" }}
                              />
                            </td>
                            <td>
                              <a href={course.link} target="_blank" rel="noopener noreferrer">
                                View
                              </a>
                            </td>
                            <td>
                              <button
                                className="btn btn-primary btn-sm me-2"
                                onClick={() => handleEditCourse(course)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={() => handleDeleteCourse(course.id)}
                              >
                                Delete
                              </button>
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
              </div>
            )}

            {activeSection === "sendEmails" && (
              <div className="mt-3">
                <div className="p-3 bg-info text-white rounded">Send Bulk Emails</div>
                <div className="mt-3 p-3 bg-light rounded">
                  <p>
                    This section is a placeholder. To implement, integrate with an email service
                    (e.g., SendGrid) and use the registered users' email list.
                  </p>
                  <button className="btn btn-info" onClick={handleSendBulkEmails}>
                    Send Emails
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="d-flex justify-content-center align-items-center vh-100">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginPage;