"use client"
import React, { useState } from 'react'
import planData from '@/utils/planData'
import PlanItemCard from './_components/PlanItemCard'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { UserStatus } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import moment from 'moment'
import { useRouter } from 'next/navigation'

function Upgrade() {
    const [openReferralDialog, setOpenReferralDialog] = useState(false)
    const [referralCode, setReferralCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const { user } = useUser()
    const router = useRouter()

    const handleReferralSubmit = async () => {
        setLoading(true)
        setError('')
        try {
            // Validate referral code here (you can store valid codes in the database)
            if (referralCode === 'PROMEMBER') { // Replace with your validation logic
                await db.insert(UserStatus).values({
                    email: user?.primaryEmailAddress?.emailAddress,
                    isPro: true,
                    proExpiryDate: moment().add(1, 'month').format('DD-MM-YYYY'),
                    referralCode: referralCode,
                    createdAt: moment().format('DD-MM-YYYY')
                })
                setSuccess(true)
                setReferralCode('')
                // Close dialog after 2 seconds to show success message
                setTimeout(() => {
                    setOpenReferralDialog(false)
                    setSuccess(false)
                    router.refresh()
                }, 2000)
            } else {
                setError('Invalid referral code')
            }
        } catch (error) {
            setError('Something went wrong')
        }
        setLoading(false)
    }

    return (
        <div className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'>
            {/* Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center bg-primary/10 rounded-full px-4 py-2 mb-6">
                    <span className="text-sm font-medium text-primary">💎 Premium Plans</span>
                </div>
                <h1 className='font-bold text-4xl md:text-5xl text-center mb-4'>
                    Choose Your Plan
                </h1>
                <p className='text-center text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                    Upgrade to unlock unlimited mock interviews and advanced features to accelerate your interview preparation
                </p>
            </div>

            {/* Plans Grid */}
            <div className="mx-auto max-w-5xl">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    {planData.map((plan, index) => (
                        <PlanItemCard plan={plan} key={index} />
                    ))}
                </div>
            </div>

            {/* Referral Code Section */}
            <div className="text-center mt-8">
                <p className="text-gray-600 dark:text-gray-300 mb-4">Have a referral code?</p>
                <Button
                    variant="outline"
                    onClick={() => setOpenReferralDialog(true)}
                >
                    Enter Referral Code
                </Button>
            </div>

            {/* Referral Dialog */}
            <Dialog open={openReferralDialog} onOpenChange={setOpenReferralDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enter Referral Code</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                        {success ? (
                            <div className="text-center py-4">
                                <div className="mb-4">
                                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-green-600 mb-2">
                                    🎉 Upgraded to Pro Member!
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Welcome to the Pro experience. Enjoy unlimited access to all features!
                                </p>
                            </div>
                        ) : (
                            <>
                                <Input
                                    placeholder="Enter your referral code"
                                    value={referralCode}
                                    onChange={(e) => setReferralCode(e.target.value)}
                                />
                                {error && <p className="text-red-500 text-sm">{error}</p>}
                                <Button
                                    className="w-full"
                                    onClick={handleReferralSubmit}
                                    disabled={loading}
                                >
                                    {loading ? 'Verifying...' : 'Submit'}
                                </Button>
                            </>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            {/* Bottom CTA Section */}
            <div className="text-center mt-16">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Not sure which plan to choose?
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Start with our free plan and upgrade anytime when you're ready for more features.
                    </p>
                    <button className="text-primary hover:text-primary/80 font-medium">
                        Compare all features →
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Upgrade