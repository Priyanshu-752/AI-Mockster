"use client"
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { Check, Star, Zap } from 'lucide-react'

function PlanItemCard({plan}) {
  const {user} = useUser();
  
  // Determine if this is a popular/recommended plan
  const isPopular = plan.name?.toLowerCase().includes('pro') || plan.name?.toLowerCase().includes('premium');
  
  return (
    <div className={`relative rounded-3xl border-2 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
      isPopular 
        ? 'border-primary bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20' 
        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
    }`}>
      
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 bg-primary/10 h-16 rounded-2xl mb-4 ${
          isPopular ? 'bg-primary' : 'bg-gray-100 dark:bg-gray-700'
        }`}>
          <Zap className="w-8 h-8 text-white" color="blue" fill="yellow"/>
          {/* {isPopular ? (
          ) : (
            <div className={`w-6 h-6 rounded-full ${isPopular ? 'bg-white' : 'bg-primary'}`} />
          )} */}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {plan.name}
        </h2>

        <div className="mb-4">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">
            ${plan.cost}
          </span>
          <span className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            /month
          </span>
        </div>

        {plan.cost === 0 && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Perfect for getting started
          </p>
        )}
        {plan.cost > 0 && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Everything you need to succeed
          </p>
        )}
      </div>

      {/* Features List */}
      <ul className="space-y-4 mb-8">
        {plan.offering?.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mt-0.5">
              <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
            </div> */}
            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {item.value}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a
        href={plan.paymentLink + '?prefilled_email=' + user?.primaryEmailAddress?.emailAddress}
        target='_blank'
        className={`block w-full text-center py-4 px-6 rounded-2xl font-semibold transition-all duration-200 transform hover:scale-105 ${
          isPopular
            ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-primary/25'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        {plan.cost === 0 ? 'Start Free' : 'Get Started'}
      </a>

      {/* Money Back Guarantee */}
      {plan.cost > 0 && (
        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
          30-day money-back guarantee
        </p>
      )}
    </div>
  )
}

export default PlanItemCard