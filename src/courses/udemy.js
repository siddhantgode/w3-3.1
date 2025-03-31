import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { db } from "../firebase"; // Ensure correct path
import { collection, getDocs } from "firebase/firestore"; // Import from firestore
import CourseCard from "../components/CourseCard";


const CourseGallery = () => {
  const [courses, setCourses] = useState([]);
  const [filters, setFilters] = useState({ topic: [], minRating: 0, cost: "All", searchQuery: "" });

  // ✅ Fetch courses from Firestore
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "udemyCourses"));
        const coursesData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // ✅ Extract unique topics dynamically
  const topics = [...new Set(courses.map(course => course.topic))];

  const handleTopicChange = (topic) => {
    setFilters((prev) => {
      const newTopics = prev.topic.includes(topic)
        ? prev.topic.filter(t => t !== topic)
        : [...prev.topic, topic];
      return { ...prev, topic: newTopics };
    });
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredCourses = courses.filter((course) => {
    return (
      (filters.searchQuery === "" || course.title.toLowerCase().includes(filters.searchQuery.toLowerCase())) &&
      (filters.topic.length === 0 || filters.topic.includes(course.topic)) &&
      course.rating >= filters.minRating &&
      (filters.cost === "All" || (filters.cost === "Free" && course.cost === "Free") || (filters.cost === "Paid" && course.cost !== "Free"))
    );
  });

  return (
    <div className="container-fluid py-4">
      <div className="row d-flex">
        {/* Filter Panel */}
        <div className="col-md-3 pe-3">
          <div className="p-3 bg-light rounded" 
            style={{
              position: "sticky",
              top: "10px",
              maxHeight: "90vh",
              overflowY: "auto"
            }}
          >
            <h2 className="h6 fw-bold mb-3">Filters</h2>
            
            {/* Search Bar */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search courses..."
              value={filters.searchQuery}
              onChange={(e) => handleFilterChange("searchQuery", e.target.value)}
            />

            {/* Topic Multi-Select */}
            <label className="form-label">Topic:</label>
            {topics.map(topic => (
              <div key={topic} className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={filters.topic.includes(topic)}
                  onChange={() => handleTopicChange(topic)}
                />
                <label className="form-check-label">{topic}</label>
              </div>
            ))}

            {/* Rating Slider */}
            <label className="form-label mt-3">Min Rating: {filters.minRating}</label>
            <input
              type="range"
              min="0"
              max="5"
              step="0.1"
              value={filters.minRating}
              onChange={(e) => handleFilterChange("minRating", parseFloat(e.target.value))}
              className="form-range mb-2"
            />

            {/* Cost Filter */}
            <label className="form-label">Cost:</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                checked={filters.cost === "All"}
                onChange={() => handleFilterChange("cost", "All")}
              />
              <label className="form-check-label">All</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                checked={filters.cost === "Free"}
                onChange={() => handleFilterChange("cost", "Free")}
              />
              <label className="form-check-label">Only Free</label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                checked={filters.cost === "Paid"}
                onChange={() => handleFilterChange("cost", "Paid")}
              />
              <label className="form-check-label">Only Paid</label>
            </div>
          </div>
        </div>

        {/* Course Cards with Scrollable Content */}
        <div className="col-md-9">
          <div style={{ maxHeight: "90vh", overflowY: "auto", paddingRight: "10px" }}>
            <div className="row g-3">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <div key={course.id} className="col-12 col-sm-6 col-md-4">
                    <div className="card shadow-sm">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="card-img-top" 
                        style={{ 
                          height: "150px", 
                          width: "100%", 
                          objectFit: "contain", 
                          padding: "5px",
                          backgroundColor: "#f8f9fa"
                        }} 
                      />
                      <div className="card-body">
                        <h6 className="card-title">{course.title}</h6>
                        <p className="card-text"><strong>Topic:</strong> {course.topic}</p>
                        <p className="card-text"><strong>Rating:</strong> {course.rating}</p>
                        <p className="card-text"><strong>Cost:</strong> {course.cost}</p>
                        <a href={course.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-100">Enroll</a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">No courses found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseGallery;
