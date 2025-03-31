import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} />
      <h3>{course.title}</h3>
      <p>Topic: {course.topic}</p>
      <p>Rating: ⭐{course.rating}</p>
      <p>Price: {course.cost}</p>
      <a href={course.link} target="_blank" rel="noopener noreferrer">
        View Course
      </a>
    </div>
  );
};

export default CourseCard;
