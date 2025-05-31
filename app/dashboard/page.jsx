"use client"
import { UserButton } from '@clerk/nextjs'
import React, { useState, useEffect } from 'react'
import AddNewInterview from './_components/AddNewInterview'
import InterviewList from './_components/InterviewList'
import { db } from '@/utils/db'
import { UserStatus, MockInterview } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

function Dashboard() {
  const [isPro, setIsPro] = useState(false);
  const [interviewCount, setInterviewCount] = useState(0);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      checkProStatus();
      getInterviewCount();
    }
  }, [user]);

  const checkProStatus = async () => {
    const result = await db.select()
      .from(UserStatus)
      .where(eq(UserStatus.email, user?.primaryEmailAddress?.emailAddress));
    setIsPro(result[0]?.isPro || false);
  }

  const getInterviewCount = async () => {
    const result = await db.select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress));
    setInterviewCount(result.length);
  }

  return (
    <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
          {isPro ? (
            <span className="text-sm font-medium text-primary">🌟 Pro Member - AI Interview Prep</span>
          ) : (
            <span className="text-sm font-medium text-primary">🚀 AI Interview Prep</span>
          )}
        </div>
        <h1 className='font-bold text-4xl md:text-5xl text-center mb-4 text-gray-900 dark:text-white'>
          {isPro ? 'Pro Dashboard' : 'Dashboard'}
        </h1>
        <p className='text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
          {isPro ? 
            'Access unlimited AI mock interviews and advanced features to enhance your interview preparation' :
            'Create and start your AI mock interviews to practice and improve your interview skills'
          }
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
                {isPro ? 'Access all premium features' : `${5 - interviewCount} free interviews remaining`}
              </p>
            </div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className="relative">
              <AddNewInterview/>
              {!isPro && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded-full">
                    {5 - interviewCount} left
                  </span>
                </div>
              )}
            </div>
            
            {/* Additional Quick Action Cards */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <div className='flex flex-row items-center gap-3'>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">View Analytics</h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Coming Soon...
              </p>
            </div>

            {/* Pro Features Card */}
            {isPro ? (
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <div className='flex flex-row items-center gap-3'>
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Advanced Features</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Access premium interview templates and AI feedback
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
                <div className='flex flex-row items-center gap-3'>
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-800 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Upgrade to Pro</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Unlock unlimited interviews and premium features
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <InterviewList/>
    </div>
  )
}

export default Dashboard