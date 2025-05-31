"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon, Play, CheckCircle, AlertCircle, Briefcase, Calendar, Target } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {
    const [interviewData, setInterviewData] = useState();
    const [webCamEnabled, setWebCamEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(params.interviewId)
        GetInterviewDetails();
    }, [])

    /**
     * Used to Get Interview Details by MockId/Interview Id
     */
    const GetInterviewDetails = async () => {
        try {
            const result = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, params.interviewId))
            
            setInterviewData(result[0]);
        } catch (error) {
            console.error('Error fetching interview details:', error);
        } finally {
            setIsLoading(false);
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
            </div>
        );
    }

    return (
        <div className='min-h-screen p-6'>
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Target className="w-4 h-4" />
                        Mock Interview Session
                    </div>
                    <h1 className='text-4xl font-bold text-gray-900 dark:text-white mb-2'>
                        Ready to Begin?
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                        Complete your setup and start your personalized interview experience
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* Interview Details Section */}
                    <div className='space-y-6'>
                        {/* Job Information Card */}
                        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden'>
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="bg-white/20 dark:bg-white/20 p-2 rounded-lg">
                                        <Briefcase className="w-6 h-6 text-white" />
                                    </div>
                                    <h2 className='text-xl font-semibold text-white'>Interview Details</h2>
                                </div>
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-lg mt-1">
                                        <Target className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Job Position</h3>
                                        <p className="text-gray-700 dark:text-gray-300">{interviewData?.jobPosition}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-lg mt-1">
                                        <Briefcase className="w-4 h-4 text-green-600 dark:text-green-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Tech Stack & Description</h3>
                                        <p className="text-gray-700 dark:text-gray-300">{interviewData?.jobDesc}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-lg mt-1">
                                        <Calendar className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Experience Level</h3>
                                        <p className="text-gray-700 dark:text-gray-300">{interviewData?.jobExperience} years</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Information Alert */}
                        <div className='bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 border border-amber-200 dark:border-amber-700 rounded-2xl p-6'>
                            <div className='flex items-start gap-3'>
                                <div className="bg-amber-100 dark:bg-amber-800 p-2 rounded-lg">
                                    <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                </div>
                                <div>
                                    <h3 className='font-semibold text-amber-800 dark:text-amber-200 mb-2'>Important Information</h3>
                                    <p className='text-amber-700 dark:text-amber-300 leading-relaxed'>
                                        {process.env.NEXT_PUBLIC_INFORMATION || "Please ensure you're in a quiet environment with good lighting for the best interview experience."}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Camera Setup Section */}
                    <div className='space-y-6'>
                        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden'>
                            <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                                <h2 className='text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2'>
                                    <WebcamIcon className="w-5 h-5" />
                                    Camera Setup
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mt-1">Enable your camera and microphone to begin</p>
                            </div>
                            
                            <div className="p-6">
                                {webCamEnabled ? (
                                    <div className="space-y-4">
                                        <div className="relative rounded-xl overflow-hidden bg-gray-900">
                                            <Webcam
                                                onUserMedia={() => setWebCamEnabled(true)}
                                                onUserMediaError={() => setWebCamEnabled(false)}
                                                mirrored={true}
                                                className="w-full h-64 object-cover"
                                            />
                                        </div>
                                        <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 p-3 rounded-lg">
                                            <CheckCircle className="w-5 h-5" />
                                            <span className="font-medium">Camera is active and ready</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-center space-y-4">
                                        <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8">
                                            <WebcamIcon className='w-24 h-24 mx-auto text-gray-400 dark:text-gray-500 mb-4' />
                                            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 justify-center mb-4">
                                                <AlertCircle className="w-5 h-5" />
                                                <span>Camera not enabled</span>
                                            </div>
                                        </div>
                                        <Button 
                                            onClick={() => setWebCamEnabled(true)}
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-700 dark:to-indigo-700 dark:hover:from-blue-800 dark:hover:to-indigo-800 text-white font-medium py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                                        >
                                            <WebcamIcon className="w-5 h-5 mr-2" />
                                            Enable Camera & Microphone
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Pre-Interview Checklist */}
                        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6'>
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Pre-Interview Checklist</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <CheckCircle className={`w-5 h-5 ${webCamEnabled ? 'text-green-500 dark:text-green-400' : 'text-gray-300 dark:text-gray-600'}`} />
                                    <span className={webCamEnabled ? 'text-green-700 dark:text-green-300' : 'text-gray-500 dark:text-gray-400'}>
                                        Camera and microphone enabled
                                    </span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                                    <span className="text-green-700 dark:text-green-300">Interview details reviewed</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400" />
                                    <span className="text-green-700 dark:text-green-300">Quiet environment confirmed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Interview Button */}
                <div className='flex justify-center mt-8'>
                    <Link href={'/dashboard/interview/' + params.interviewId + '/start'}>
                        <Button 
                            disabled={!webCamEnabled}
                            className={`px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 ${
                                webCamEnabled 
                                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 dark:from-green-700 dark:to-emerald-700 dark:hover:from-green-800 dark:hover:to-emerald-800 text-white shadow-lg hover:shadow-xl' 
                                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            <Play className="w-5 h-5 mr-2" />
                            {webCamEnabled ? 'Start Interview' : 'Enable Camera to Continue'}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Interview