"use client"
import { useState } from "react"

const faqItems = [
  {
    question: "What are the upfront costs?",
    answer:
      "We work on a contingency fee basis, meaning you don't pay anything upfront. We only get paid if we win your case.",
  },
  {
    question: "Who will be working on my case?",
    answer:
      "Your case will be handled by our experienced team of attorneys and paralegals who specialize in your type of case.",
  },
  {
    question: "Will my information be safe?",
    answer: "Yes, all client information is kept strictly confidential and protected by attorney-client privilege.",
  },
  {
    question: "How long will it take to resolve?",
    answer:
      "The timeline varies depending on the complexity of your case, but we work diligently to resolve matters as quickly as possible.",
  },
  {
    question: "What cases do you handle?",
    answer:
      "We handle a wide range of cases including personal injury, workers' compensation, employment law, and more.",
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-[#e8e8e8] py-8 px-4 md:px-8">
      {/* Container with notch */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 bg-[#e8e8e8] rounded-br-[40px] md:rounded-br-[60px] z-10"></div>

        <div className="bg-[#0a4d8a] rounded-tr-[30px] rounded-br-[30px] rounded-bl-none rounded-tl-none pt-10 pb-12 px-6 md:px-10 relative overflow-visible">
          <h2 className="text-white text-2xl md:text-4xl font-serif italic mb-8 pl-12 md:pl-16">
            Questions? Contact Us
          </h2>

          {/* FAQ Items */}
          <div className="flex flex-col gap-4 pr-8">
            {faqItems.map((item, index) => (
              <div key={index} className="relative flex items-center">
                <div
                  className="flex-1 bg-[#062c52] rounded-l-full py-4 px-6 cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <p className="text-white text-sm md:text-base font-medium">{item.question}</p>
                  {openIndex === index && <div className="mt-3 text-white/80 text-sm pr-8">{item.answer}</div>}
                </div>

                <button
                  onClick={() => toggleFaq(index)}
                  className="absolute -right-6 w-10 h-10 md:w-12 md:h-12 bg-[#f5a623] rounded-full flex items-center justify-center hover:bg-[#e09515] transition-colors shadow-md"
                >
                  <span className="text-[#0a3d6e] text-2xl font-bold leading-none">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
