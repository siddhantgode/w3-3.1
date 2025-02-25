import React, { useState } from 'react';
import { Container } from 'react-bootstrap'; // Import Container if needed

const SimpleAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index? null: index);
  };

  const faqs = [
    {
      question: "What is Data Engineering?",
      answer:
        "Data engineering is the technique of designing and creating systems that can efficiently collect, store, and interpret data for analytical or operational uses. It is an aspect of data science that focuses on practical data applications.",
    },
    {
      question: "Who is eligible for this program?",
      answer:
        "Students & Working Professionals seeking an opportunity to upskill their Data Engineering proficiency for faster career growth. To keep the chances fair, we provide a PreBootcamp session for Interested students to understand how ready they are to be a Data Engineer. A Small Eligibility test is conducted right after the Pre-Bootcamp will provide you with a final ticket to be part of Bootcamp.",
    },
    {
      question: "I’m from a non-engineering background or New to programming. Am I eligible for this course?",
      answer:
        "With the objective of creating as many job opportunities for our students, we do intend to help every student who is willing to “make the extra catching up needed” in terms of understanding Business & Data Engineer. We assess this via a comprehensive PreBootcamp where you can understand how ready you are for the Bootcamp. In case you don’t make the eligibility,our mentors will charter the course aheads for you with some Edufulness Lessons",
    },
    {
      question: "Does this Program assure job placement?",
      answer:
        "This comprehensive Data Engineering program assures 100% placement support. From training to getting placed in a company, this program will support you in procuring the essential skills, provide additional training for interpersonal skill-building, hand-over industry-recognized certifications, assist you in clearing the tedious interview process, and finally fit into the job position.",
    },
    {
      question: "Will this program provide any certification?",
      answer:
        "Along with 100% job placement support, this Data Engineering Program extends an industry-recognized certification from the Edufulness. Procure the essential skills and make an extraordinary career in Data Engineering!",
    },
    {
      question: "What is the duration & mode of the session?",
      answer:
        "Our comprehensive program is a 2 Months (weekday) / 3 Months (weekend) Certification Bootcamp that will facilitate live online subject-matter expert-driven classes.",
    },
    {
      question: "How is this program different from the other programs?",
      answer:
        "Promising hands-on training, our program comprises live sessions + 40+ Projects, guaranteeing 50+ interviews complemented with resume reviews and a real-time project portfolio.",
    },
    {
      question: "What tools are covered in this program?",
      answer:
        "The tools & technologies covered in this program include Azure Data Factory, Azure Databricks with PySpark, azure Synapse Analytics, Azure SQL Server, Blob Storage, Azure Data Lake Gen2 (ADLS), Logic APP",
    },
    {
      question: "what if i miss any live class during course?",
      answer:
        "no worries. You will get alwasy recorded class immediatly after class completion. You can access it for next 3 years.",
    },
    {
      question: "What if I am unhappy with the course?",
      answer:
        "Oh no! We don’t want that! We offer a 7-day money-back. If you are unhappy with the course for any reason, let us know within the first 7 days and we will refund your payment. just ping us at edufulness@gmail.com.",
    },
  ];

  return (
    <section>
      <Container> {/* Use Container if needed */}
        <h2 className="text-center pb-4">Frequently Asked Questions</h2>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${activeIndex === index? "": "collapsed"}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </button>
              </h2>
              <div className={`accordion-collapse ${activeIndex === index? "show": ""}`}>
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SimpleAccordion;