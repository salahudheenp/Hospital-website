import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

const Faq = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting the dentist at least twice a year for routine check-ups and cleanings. However, your specific needs may require more frequent visits.",
      isOpen: true,
    },
    {
      question: "What can I expect during my first visit?",
      answer: "You can expect a complete examination and x-rays to assess your dental health.",
      isOpen: false,
    },
    {
      question: "How can I prepare for my dental appointment?",
      answer: "Make sure to bring your insurance details and a list of medications you're taking.",
      isOpen: false,
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer:
        "In case of an emergency, contact our office immediately or visit the nearest urgent care facility.",
      isOpen: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="max-w-full  mx-40 m-20 ">
      <h1 className="text-3xl font-bold mb-6">FAQs</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border rounded-lg mb-4 ${faq.isOpen ? "bg-orange-100" : "bg-white"}`}
        >
          <div className="flex justify-between items-center p-4" onClick={() => toggleFAQ(index)}>
            <h2 className={`text-lg font-semibold ${faq.isOpen ? "text-black" : "text-gray-800"}`}>
              {faq.question}
            </h2>
            <button className={`text-2xl ${faq.isOpen ? "text-orange-500" : "text-gray-500"}`}>
              {faq.isOpen ? "-" : "+"}
            </button>
          </div>
          {faq.isOpen && <p className="px-4 pb-4 text-gray-600">{faq.answer}</p>}
        </div>
      ))}
    </div>
  )
}

export default Faq