import React from 'react'
import Header from '../dashboard/_components/Header'
import { UserPlus, Target, MessageSquare, BarChart3, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

const page = () => {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: "Sign Up and Create Your Profile",
      description: "Create your account and tell us about your experience level and interview goals. Our platform personalizes your journey from day one.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: 2,
      icon: Target,
      title: "Choose Your Interview Type",
      description: "Select from various interview types including technical coding, system design, or behavioral interviews. Each track is tailored to industry standards.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: 3,
      icon: MessageSquare,
      title: "Practice with AI Interviewer",
      description: "Engage in realistic interview scenarios with our AI interviewer that adapts to your responses and provides real-time challenges.",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: 4,
      icon: BarChart3,
      title: "Receive Detailed Feedback",
      description: "Get comprehensive feedback on your performance, including areas for improvement and personalized recommendations for your next session.",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
              <Play className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">How It Works</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Master Your Interview Skills in
              <span className="block text-primary">4 Simple Steps</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From setup to success, our AI-powered platform guides you through every step of your interview preparation journey
            </p>
          </div>
          
          {/* Steps Section */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        Step {step.number}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Visual Side */}
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    {/* Main Circle */}
                    <div className={`w-48 h-48 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}>
                      <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <span className="text-4xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg"></div>
                    <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary/30 rounded-full"></div>
                    <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/20 rounded-full"></div>
                  </div>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-32">
                    <ArrowRight className="w-6 h-6 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 rounded-3xl p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Interview Skills?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of candidates who have already improved their interview performance with AI Mockster
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={"/dashboard"}>

                <button className="bg-primary text-white px-8 py-4 rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-primary/25 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Practicing Now
                </button>
                </Link>
                <button className="text-primary hover:text-primary/80 font-semibold px-8 py-4 flex items-center gap-2">
                  Watch Demo Video
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "Mock Interviews Completed" },
              { number: "95%", label: "Success Rate" },
              { number: "4.9/5", label: "User Rating" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default page