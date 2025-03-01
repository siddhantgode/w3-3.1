import React, { useState } from "react";

const SnowflakeAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How many days it will take to learn Snowflake?",
      answer:
        "It will take 3-5 weeks to learn Snowflake. However, this is not a standard time. If you devote a healthy amount of time to it per day and enroll in Edufulness’ Snowflake training program, you might be able to learn it in less time.",
    },
    {
      question: "What is Snowflake training?",
      answer:
        "Snowflake training by Edufulness provides a carefully crafted curriculum by industry experts. This course has been curated with the purpose of teaching enthusiasts about the correct usage of the Cloud-based Data Warehouse. This has become an integral aspect in the machine learning and data science fields.",
    },
    {
      question: "Is Snowflake difficult to learn?",
      answer:
        "Snowflake is counted as an easy one to learn and use. Our Snowflake Training will help you learn to use Snowflake for building, managing, maintaining, and deploying a data warehouse over the cloud.",
    },
    {
      question: "Is Snowflake certification worth it?",
      answer:
        "Yes, Snowflake certification is valuable specifically if you work with or want to work with Snowflake's cloud data platform. It improves your talents, improves your professional profile and shows knowledge to potential employers. As Snowflake's need for data analytics and cloud settings grows, data experts may find more opportunities for employment and higher salaries.",
    },
  ];


  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </button>
          </h2>
          <div className={`accordion-collapse ${activeIndex === index ? "show" : ""}`}>
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnowflakeAccordion;
