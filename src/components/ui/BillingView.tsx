// components/dashboard/views/BillingView.tsx
'use client'

import React, { useState } from 'react'
import { Hotel } from '@/store/slices/hotelAuthSlice'
import { CreditCard, CheckCircle, AlertCircle, Clock, Download } from 'lucide-react'

interface BillingViewProps {
  hotelSlug: string
  hotel: Hotel
}

export default function BillingView({ hotelSlug, hotel }: BillingViewProps) {
  const [activeTab, setActiveTab] = useState('subscription')
  
  const tabs = [
    { id: 'subscription', label: 'Subscription', icon: <CreditCard className="h-4 w-4" /> },
    { id: 'invoices', label: 'Invoices', icon: <Download className="h-4 w-4" /> },
    { id: 'payment-methods', label: 'Payment Methods', icon: <CreditCard className="h-4 w-4" /> },
  ]

  const getSubscriptionColor = (status: string) => {
    switch(status) {
      case 'active': return 'bg-emerald-100 text-emerald-800';
      case 'trial': return 'bg-amber-100 text-amber-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  const getSubscriptionIcon = (status: string) => {
    switch(status) {
      case 'active': return <CheckCircle className="h-5 w-5" />;
      case 'trial': return <Clock className="h-5 w-5" />;
      default: return <AlertCircle className="h-5 w-5" />;
    }
  }

  const subscriptionPlans = [
    { name: 'Starter Plan', price: '$29/month', features: ['Up to 10 tables', '5 staff members', '50 menu items'] },
    { name: 'Business Plan', price: '$79/month', features: ['Up to 30 tables', '15 staff members', '200 menu items', 'Advanced analytics'] },
    { name: 'Enterprise Plan', price: '$149/month', features: ['Unlimited tables', 'Unlimited staff', 'Unlimited menu items', 'Priority support', 'Custom integrations'] },
  ]

  const invoices = [
    { id: 'INV-001', date: '2024-01-01', amount: '$79.00', status: 'paid' },
    { id: 'INV-002', date: '2023-12-01', amount: '$79.00', status: 'paid' },
    { id: 'INV-003', date: '2023-11-01', amount: '$79.00', status: 'paid' },
    { id: 'INV-004', date: '2023-10-01', amount: '$29.00', status: 'paid' },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold mb-2">Billing & Subscription</h1>
            <p className="text-blue-100">Manage your subscription and billing information</p>
          </div>
        </div>
      </div>

      {/* Current Subscription */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Current Plan</h3>
            <p className="text-sm text-gray-600">Manage your subscription details</p>
          </div>
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-lg ${getSubscriptionColor(hotel.subscription_status)}`}>
              {getSubscriptionIcon(hotel.subscription_status)}
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSubscriptionColor(hotel.subscription_status)}`}>
              {hotel.subscription_status.charAt(0).toUpperCase() + hotel.subscription_status.slice(1)}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Current Plan</p>
            <p className="text-xl font-bold text-gray-900">{hotel.subscription_plan || 'Trial Plan'}</p>
          </div>
          
          {hotel.subscription_end_date && (
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Renewal Date</p>
              <p className="text-xl font-bold text-gray-900">
                {new Date(hotel.subscription_end_date).toLocaleDateString()}
              </p>
            </div>
          )}
          
          {hotel.trial_ends_at && (
            <div className="p-4 border border-gray-200 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Trial Ends</p>
              <p className="text-xl font-bold text-gray-900">
                {new Date(hotel.trial_ends_at).toLocaleDateString()}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Billing Tabs */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                  }
                `}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {activeTab === 'subscription' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Available Plans</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {subscriptionPlans.map((plan, index) => (
                  <div key={index} className={`
                    border rounded-lg p-6 transition-all hover:shadow-lg
                    ${plan.name === (hotel.subscription_plan || 'Trial Plan') 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200'
                    }
                  `}>
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-gray-900">{plan.name}</h4>
                      <p className="text-2xl font-bold text-gray-900 mt-2">{plan.price}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`
                      w-full py-2 rounded-lg font-medium transition-colors
                      ${plan.name === (hotel.subscription_plan || 'Trial Plan')
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }
                    `}>
                      {plan.name === (hotel.subscription_plan || 'Trial Plan') ? 'Current Plan' : 'Upgrade Plan'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'invoices' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">Invoice History</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-600 border-b border-gray-100">
                      <th className="p-4 font-medium">Invoice #</th>
                      <th className="p-4 font-medium">Date</th>
                      <th className="p-4 font-medium">Amount</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-4">
                          <p className="font-medium text-gray-900">{invoice.id}</p>
                        </td>
                        <td className="p-4">
                          <p className="text-gray-900">{invoice.date}</p>
                        </td>
                        <td className="p-4">
                          <p className="font-semibold text-gray-900">{invoice.amount}</p>
                        </td>
                        <td className="p-4">
                          <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-medium">
                            Paid
                          </span>
                        </td>
                        <td className="p-4">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}