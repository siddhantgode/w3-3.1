import React, { useState } from "react";


const EngAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "If I have any doubts or questions, will I be able to talk to the trainer for solutions and feedback?",
      answer:
        "Absolutely! Our live sessions with the mentor are the perfect opportunity to ask questions, get feedback, and connect with other students in real time. It’s like having your own personal communication coach.",
    },
    {
      question: "Will I receive a certificate of completion after finishing the course?",
      answer:
        "Yes, you will receive a certificate of completion that you can showcase in your resume or add to your LinkedIn profile. It’s a tangible reminder of your hard work and dedication.",
    },
    {
      question: "Is there a community or group for students to join and connect with each other?",
      answer:
        "Of course! You will get access to the Think School community with people just like you who want to improve their communication skills. You will have the chance to network, share insights, and even make new friends.",
    },
    {
      question: "How is this different from your YouTube videos?",
      answer:
        "Our YouTube videos are just the tip of the iceberg, but this masterclass takes things to the next level. You will get a structured curriculum with handheld guidance & feedback, along with practical exercises to help you become a confident speaker.",
    },
    {
      question: "What is the refund policy for Communication Masterclass?",
      answer:
        "The Communication Masterclass is a non-refundable program. We are committed to giving a great experience. Reach out to our team for any queries.",
    },
    {
      question: "Can I take this course even if I’m not very good at English?",
      answer:
        "Yes, our masterclass is designed to improve your communication skills, regardless of your English level. We also provide exercises to enhance both fluency and vocabulary, making it accessible to all.",
    },
    {
      question: "What about course validity?",
      answer:
        "You get 1 Full year of access to course content, future updates, and live sessions with the trainer.",
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

export default EngAccordion;

