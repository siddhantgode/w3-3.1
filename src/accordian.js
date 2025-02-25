import React, { useState } from "react";

const CustomAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
      {
      question: "What is the FE Civil Exam?",
      answer:
        "A computer-based exam for aspiring professional engineers, covering fundamental civil engineering topics.",
    },
    {
      question: "Who is eligible to take the FE Exam?",
      answer:
        "Engineering graduates or final-year students from an ABET-accredited program.",
    },
    {
      question: "How many questions are on the exam?",
      answer:
        "110 multiple-choice questions, with a 6-hour duration including a 25-minute break.",
    },
    {
      question: "What is the passing score?",
      answer:
        "The passing score is not fixed; it varies based on overall test performance and difficulty.",
    },
    {
      question: "How often can I take the FE Exam?",
      answer:
        "You can take it up to 3 times in a 12-month period, with a 2-month gap between attempts.",
    },
    {
      question: "What materials are allowed during the exam?",
      answer:
        "Only the FE Reference Handbook (provided digitally) and an NCEES-approved calculator.",
    },
    {
      question: "How much does the FE Exam cost?",
      answer:
        "The fee is $175, but some states may have additional costs.",
    },
    {
      question: "How do I register for the FE Exam?",
      answer:
        "Register via the NCEES website, select a test center, and schedule your exam.",
    },
    {
      question: "How long does it take to get results?",
      answer:
        "Results are typically released within 7–10 days on your NCEES account.",
    },
    {
      question: "What happens after passing the FE Exam?",
      answer:
        "You become an Engineer-in-Training (EIT) or Engineering Intern (EI) and can later take the PE Exam for full licensure.",
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

export default CustomAccordion;
