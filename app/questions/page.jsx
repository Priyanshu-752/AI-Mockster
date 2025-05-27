"use client"
import React, { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, Zap, Users, Star, Shield } from 'lucide-react'
import Header from '../dashboard/_components/Header'

const FAQItem = ({ question, answer, icon: Icon, isOpen, onToggle }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
      >
        <div className="flex items-center space-x-4">
          <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{question}</h3>
        </div>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 pb-6">
          <div className="pl-14">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const page = () => {
  const [openItems, setOpenItems] = useState(new Set([0])) // First item open by default

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  const faqData = [
    {
      question: "What is AI Mockster?",
      answer: "AI Mockster is an innovative platform that uses artificial intelligence to help you prepare for technical interviews through realistic mock interview simulations. Our advanced AI interviewer adapts to your skill level and provides personalized feedback to help you improve your interview performance.",
      icon: HelpCircle
    },
    {
      question: "How does it work?",
      answer: "Simply sign up, choose your interview focus area, and start practicing with our AI interviewer. You'll receive real-time feedback and detailed performance analysis. Our system tracks your progress over time and identifies areas for improvement, making each session more effective than the last.",
      icon: Zap
    },
    {
      question: "What types of interviews can I practice?",
      answer: "We offer practice sessions for various technical roles including software development, data science, system design interviews, behavioral interviews, and coding challenges. Each track is tailored with industry-specific questions and scenarios.",
      icon: Users
    },
    {
      question: "Is it free to use?",
      answer: "We offer both free and premium plans. The free plan includes basic features with 3 practice sessions per month, while premium users get access to advanced feedback, unlimited sessions, specialized interview tracks, and detailed analytics dashboards.",
      icon: Star
    },
    {
      question: "How accurate is the AI feedback?",
      answer: "Our AI is trained on thousands of real interview scenarios and continuously learns from user interactions. It provides detailed analysis on communication skills, technical accuracy, problem-solving approach, and areas for improvement with 95% accuracy rate.",
      icon: Shield
    },
    {
      question: "Can I practice for specific companies?",
      answer: "Yes! Our premium plan includes company-specific interview preparation for top tech companies like Google, Amazon, Microsoft, and more. We simulate their actual interview processes and question styles.",
      icon: HelpCircle
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Got Questions?</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked
            <span className="block text-primary">
              Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about AI Mockster and how it can help you ace your next technical interview.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                icon={faq.icon}
                isOpen={openItems.has(index)}
                onToggle={() => toggleItem(index)}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you get started with AI Mockster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200">
                  View Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page