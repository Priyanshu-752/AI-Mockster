import React from 'react'
import planData from '@/utils/planData'
import PlanItemCard from './_components/PlanItemCard'

function Upgrade() {
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