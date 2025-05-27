import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'

function Dashboard() {
  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
          <span className="text-sm font-medium text-primary">🚀 AI Interview Prep</span>
        </div>
        <h1 className='font-bold text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white'>
          Dashboard
        </h1>
        <p className='text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          Create and start your AI mock interviews to practice and improve your interview skills
        </p>
      </div>

      {/* Quick Actions Section */}
      <div className="mx-auto max-w-6xl mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quick Actions
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Get started with your interview preparation
              </p>
            </div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <AddNewInterview/>
            
            {/* Additional Quick Action Cards */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className='flex flex-row items-center gap-3'>

              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">View Analytics</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Track your progress and performance metrics
              </p>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm">
                Coming Soon →
              </button>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
            <div className='flex flex-row items-center gap-3'>

              <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Interview Tips</h3>
            </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get expert advice and preparation tips
              </p>
              <button className="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 font-medium text-sm">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Previous Interviews Section */}
      <div className="mx-auto max-w-6xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Your Interview History
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Review and retake your previous mock interviews
              </p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Sort by:</span>
              <button className="text-primary hover:text-primary/80 font-medium">
                Recent
              </button>
            </div>
          </div>
          
          <InterviewList/>
        </div>
      </div>

      {/* Bottom Stats Section */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 rounded-2xl border border-primary/20 dark:border-primary/30 p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Ready to level up your interview skills?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Practice makes perfect. Start your next mock interview and build confidence for the real thing.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Instant Feedback</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Progress Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard