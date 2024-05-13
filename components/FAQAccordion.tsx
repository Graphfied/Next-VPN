import React, { useState, FunctionComponent } from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: FunctionComponent<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        className={`w-full px-4 py-10 text-left text-white rounded-t-lg text-xl bg-gray-800 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-indigo-500 duration-300 ${
          isOpen ? '' : 'mb-2'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <span>{question}</span>
          <span>{isOpen ? '−' : '+'}</span>
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-800 text-white rounded-b-lg ">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQAccordion = () => {
  const faqs = [
    {
      question: 'Why do I need a VPN?',
      answer: 'A VPN protects your privacy and security online by encrypting your connection.',
    },
    {
      question: 'How does a VPN protect my internet connection?',
      answer: 'A VPN encrypts your internet connection to secure it from hackers and third parties, protecting your personal information and online activities.'
    },
    {
      question: 'How does a VPN protect my internet connection?',
      answer: 'A VPN encrypts your internet connection to secure it from hackers and third parties, protecting your personal information and online activities.'
    },
    {
      question: 'How does a VPN protect my internet connection?',
      answer: 'A VPN encrypts your internet connection to secure it from hackers and third parties, protecting your personal information and online activities.'
    },
    // ... Add more FAQ items here
  ];

  return (
    <section className="bg-neutral-950 py-12 pt-20">
      <div className="container mx-auto px-6 mt-44">
        <h2 className="text-6xl font-medium text-center text-white mb-6">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-xl text-center mb-8">
          We have compiled a list of frequently asked questions to provide you with quick and comprehensive answers.
        </p>
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
