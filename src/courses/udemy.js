import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const courses = [
  { id: 1, title: "Database Management Systems", topic: "Databases", rating: 4.4, cost: "₹ 499", image: "/images/DBMS_udemy.webp", link: "https://www.udemy.com/course/relational-database-management-systemrdbms-complete-pack/?couponCode=ST17MT31325G3" },
  { id: 2, title: "Operating Systems from Scratch", topic: "Operating Systems", rating: 4.7, cost: "₹ 499", image: "/images/os_udemy.jpg", link: "https://www.udemy.com/course/scheduling-algorithms-operting-systems-from-scratch/" },
  { id: 3, title: "Masterclass on Azure Data Factory", topic: "Databases", rating: 4.8, cost: "₹ 499", image: "/images/azure_udemy.svg", link: "https://www.udemy.com/course/azure-data-factory-data-engineer-real-time-projects/" },
  { id: 4, title: "Data Structures and Algorithms", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/DSA_udemy.png", link: "https://www.udemy.com/course/mastering-data-structures-and-algorithms-using-c-programming/" },
  { id: 5, title: "Mastering Control Systems", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/control_sys_udemy.jpg", link: "https://www.udemy.com/course/mastering-control-systems-very-basics-to-advance/" },
  { id: 6, title: "Signals and Systems", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/signals_udemy.jpg", link: "https://www.udemy.com/course/signals-and-systems-from-basics-to-advance/" },
  { id: 7, title: "Digital Signal Processing", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/signal_proces_udemy.webp", link: "https://www.udemy.com/course/learn-digital-signal-processing-from-basics-to-advance/" },
  { id: 8, title: "Compiler Design", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/compiler_udemy.png", link: "https://www.udemy.com/course/the-ultimate-compiler-design-full-course/" },
  { id: 9, title: "Analog Communication", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/analog_udemy.jpg", link: "https://www.udemy.com/course/learn-analog-communication-from-basics/" },
  { id: 10, title: "Digital System Design", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/digital_udemy.jpg", link: "https://www.udemy.com/course/the-ultimate-digital-system-design-module-2/" },
  { id: 11, title: "Theory of Computation", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/computation_udemy.webp", link: "https://www.udemy.com/course/theory-of-computation-automata-theory-for-2021/" },
  { id: 12, title: "Digital System Design 2", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/digital2_udemy.jpg", link: "https://www.udemy.com/course/learn-digital-system-design-module-1-from-basics/" },
  { id: 13, title: "Electrical Circuits 1", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/ele1_udemy.webp", link: "https://www.udemy.com/course/electrical-circuits-module-1-from-basics/" },
  { id: 14, title: "Electrical Circuits 2", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/ele2_udemy.jpg", link: "https://www.udemy.com/course/electrical-circuits-2-module-2/" },
  { id: 15, title: "Electrical Circuits 3", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/ele3_udemy.jpg", link: "https://www.udemy.com/course/the-ultimate-electrical-circuits-module-3/" },
  { id: 16, title: "Bipolar Junctions", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/bipolar_udemy.webp", link: "https://www.udemy.com/course/learn-bipolar-junction-transistor-bjt-from-basics/" },
  { id: 17, title: "Linked Lists", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/linked_list_udemy.png", link: "https://www.udemy.com/course/masterclass-linked-lists-exclusive-from-zero-to-hero/" },
  { id: 18, title: "Computer Network", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/computer_network.jpg", link: "https://www.udemy.com/course/mastering-internet-protocol-ipv4-and-subnetting/" },
  { id: 19, title: "Python for Beginners", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/python_udemy.png", link: "https://www.udemy.com/course/python-for-absolute-beginners-learn-with-simple-examples/" },
  { id: 20, title: "Linear Integrated Circuits", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/linear_circuits_udemy.jpg", link: "https://www.udemy.com/course/linear-integrated-circuits-and-applications-for-all-levels/" },
  { id: 21, title: "Computer Organization", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/computer_architecture_udemy.jpg", link: "https://www.udemy.com/course/computer-organization-and-architecture-scratch-to-advance/" },
  { id: 22, title: "Pointers and Structures", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/pointers_structures_udemy.webp", link: "https://www.udemy.com/course/c-pragramming-from-core-of-the-system/" },
  { id: 23, title: "Azure Data Explorer", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/azure_data_x_udemy.png", link: "https://www.udemy.com/course/azure-data-exploreradx-and-kusto-query-language-kql-2023/" },
  { id: 24, title: "MySQL ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/mySql_udemy.png", link: "https://www.udemy.com/course/azure-data-exploreradx-and-kusto-query-language-kql-2023/" },
  { id: 25, title: "Laplace Transformation ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/mySql_udemy.png", link: "https://www.udemy.com/course/learn-laplace-transform-from-basics/" },
  { id: 26, title: "MySQL ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/laplace_transform_udemy.png", link: "https://www.udemy.com/course/azure-data-exploreradx-and-kusto-query-language-kql-2023/" },
  { id: 27, title: "Linear Algebra ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/linear_algebra_udemy.png", link: "https://www.udemy.com/course/mastering-linear-algebra-for-2021/" },
  { id: 28, title: "Mastering Discrete Mathematics ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/discrete_maths_udemy.webp", link: "https://www.udemy.com/course/mastering-linear-algebra-for-2021/" },
  { id: 29, title: "Mastering Discrete Mathematics ", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/discrete_maths_udemy.webp", link: "https://www.udemy.com/course/mastering-linear-algebra-for-2021/" },
  { id: 30, title: "Fabric Data Factory", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/data_factory_fabric_udemy.webp", link: "https://www.udemy.com/course/data-factory-in-microsoft-fabric-seamless-etl-and-analytics/" },
  { id: 31, title: "Fabric SQL", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/fabric_udemy.avif", link: "https://www.udemy.com/course/microsoft-fabric-sql-bootcamp-data-analytics-redefined/" },
  { id: 32, title: "Fabric SQL", topic: "DSA", rating: 4.6, cost: "Free", image: "/images/azure_databricks_udemy.jpg", link: "https://www.udemy.com/course/microsoft-fabric-sql-bootcamp-data-analytics-redefined/" },







];

const topics = [...new Set(courses.map(course => course.topic))];

const CourseGallery = () => {
  const [filters, setFilters] = useState({ topic: [], minRating: 0, cost: "All", searchQuery: "" });

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
          top: "10px", // Adjust as needed
          maxHeight: "90vh", // Prevent overflow
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
