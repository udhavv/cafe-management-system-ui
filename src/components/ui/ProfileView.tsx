// // components/dashboard/views/ProfileView.tsx
// 'use client'

// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { AppDispatch } from '@/store/index'
// import { updateHotelProfile } from '@/store/slices/hotelAuthSlice'
// import { Hotel } from '@/store/slices/hotelAuthSlice'
// import toast from 'react-hot-toast'
// import { Edit, Save, X } from 'lucide-react'
// import { DashboardData, HotelInfo } from '@/store/slices/dashboardSlice'

// interface ProfileViewProps {
//   dashboardData: DashboardData
// }

// export default function ProfileView({ dashboardData }: ProfileViewProps) {
//   const dispatch = useDispatch<AppDispatch>()
//   const [isEditing, setIsEditing] = useState(false)
//   const [formData, setFormData] = useState({
//     hotel_name: dashboardData.hotel_name || '',
//     hotel_phone: hotel.hotel_phone || '',
//     hotel_address: hotel.hotel_address || '',
//     city: hotel.city || '',
//     country: hotel.country || '',
//     timezone: hotel.timezone || 'UTC',
//     currency: hotel.currency || 'USD',
//     tax_rate: hotel.tax_rate || 0.10,
//     service_charge: hotel.service_charge || 0.05,
//   })
//   console.log('this is hotel:- ', hotel)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       await dispatch(updateHotelProfile(formData)).unwrap()
//       toast.success('Profile updated successfully')
//       setIsEditing(false)
//     } catch (error) {
//       toast.error('Failed to update profile')
//     }
//   }

//   const getSubscriptionColor = (status: string) => {
//     switch(status) {
//       case 'active': return 'bg-emerald-100 text-emerald-800';
//       case 'trial': return 'bg-amber-100 text-amber-800';
//       case 'suspended': return 'bg-red-100 text-red-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-bold mb-2">{dashboardData.hotel_name}</h1>
//             <p className="text-blue-100">Hotel Profile & Settings</p>
//           </div>
//           {!isEditing ? (
//             <button 
//               onClick={() => setIsEditing(true)}
//               className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//             >
//               <Edit className="h-4 w-4" />
//               Edit Profile
//             </button>
//           ) : (
//             <div className="flex gap-2">
//               <button 
//                 onClick={() => setIsEditing(false)}
//                 className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//               >
//                 <X className="h-4 w-4" />
//                 Cancel
//               </button>
//               <button 
//                 onClick={handleSubmit}
//                 className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//               >
//                 <Save className="h-4 w-4" />
//                 Save Changes
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Hotel Details Card */}
//       <div className="bg-white rounded-lg border border-gray-200">
//         <div className="p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">Hotel Information</h3>
          
//           {isEditing ? (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Hotel Name *
//                   </label>
//                   <input
//                     type="text"
//                     required
//                     value={formData.hotel_name}
//                     onChange={(e) => setFormData({...formData, hotel_name: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     value={formData.hotel_phone}
//                     onChange={(e) => setFormData({...formData, hotel_phone: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Address
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.hotel_address}
//                     onChange={(e) => setFormData({...formData, hotel_address: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     City
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.city}
//                     onChange={(e) => setFormData({...formData, city: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Country
//                   </label>
//                   <input
//                     type="text"
//                     value={formData.country}
//                     onChange={(e) => setFormData({...formData, country: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
//             </form>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Name</label>
//                   <p className="text-gray-900">{hotel.hotel_name}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Hotel Slug</label>
//                   <p className="text-gray-900">@{hotel.hotel_slug}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//                   <p className="text-gray-900">{hotel.hotel_phone || 'Not provided'}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                   <p className="text-gray-900">{hotel.admin_email}</p>
//                 </div>
//               </div>
              
//               <div className="space-y-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
//                   <p className="text-gray-900">{hotel.hotel_address || 'Not provided'}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
//                   <p className="text-gray-900">{hotel.city || 'Not provided'}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
//                   <p className="text-gray-900">{hotel.country || 'Not provided'}</p>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Status</label>
//                   <div className="flex items-center gap-2">
//                     <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSubscriptionColor(hotel.subscription_status)}`}>
//                       {hotel.subscription_status.charAt(0).toUpperCase() + hotel.subscription_status.slice(1)}
//                     </span>
//                     {hotel.subscription_end_date && (
//                       <span className="text-sm text-gray-600">
//                         Ends {new Date(hotel.subscription_end_date).toLocaleDateString()}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Business Settings Card */}
//       <div className="bg-white rounded-lg border border-gray-200">
//         <div className="p-6">
//           <h3 className="text-lg font-semibold text-gray-900 mb-6">Business Settings</h3>
          
//           {isEditing ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Tax Rate (%) *
//                 </label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   min="0"
//                   max="100"
//                   required
//                   value={formData.tax_rate * 100}
//                   onChange={(e) => setFormData({...formData, tax_rate: parseFloat(e.target.value) / 100})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Service Charge (%) *
//                 </label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   min="0"
//                   max="100"
//                   required
//                   value={formData.service_charge * 100}
//                   onChange={(e) => setFormData({...formData, service_charge: parseFloat(e.target.value) / 100})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Currency *
//                 </label>
//                 <select
//                   value={formData.currency}
//                   onChange={(e) => setFormData({...formData, currency: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="USD">USD ($)</option>
//                   <option value="EUR">EUR (€)</option>
//                   <option value="GBP">GBP (£)</option>
//                   <option value="INR">INR (₹)</option>
//                 </select>
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Timezone *
//                 </label>
//                 <select
//                   value={formData.timezone}
//                   onChange={(e) => setFormData({...formData, timezone: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="UTC">UTC</option>
//                   <option value="America/New_York">Eastern Time (UTC-5)</option>
//                   <option value="America/Chicago">Central Time (UTC-6)</option>
//                   <option value="America/Denver">Mountain Time (UTC-7)</option>
//                   <option value="America/Los_Angeles">Pacific Time (UTC-8)</option>
//                   <option value="Europe/London">London (UTC+0)</option>
//                   <option value="Europe/Paris">Paris (UTC+1)</option>
//                   <option value="Asia/Dubai">Dubai (UTC+4)</option>
//                   <option value="Asia/Kolkata">India (UTC+5:30)</option>
//                   <option value="Asia/Singapore">Singapore (UTC+8)</option>
//                   <option value="Asia/Tokyo">Tokyo (UTC+9)</option>
//                   <option value="Australia/Sydney">Sydney (UTC+10)</option>
//                 </select>
//               </div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate</label>
//                 <p className="text-gray-900">{(hotel.tax_rate * 100).toFixed(1)}%</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Service Charge</label>
//                 <p className="text-gray-900">{(hotel.service_charge * 100).toFixed(1)}%</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
//                 <p className="text-gray-900">{hotel.currency}</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
//                 <p className="text-gray-900">{hotel.timezone}</p>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Plan</label>
//                 <p className="text-gray-900">{hotel.subscription_plan || 'Trial'}</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }




// components/dashboard/views/ProfileView.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store/index'
import { updateHotelProfile } from '@/store/slices/hotelAuthSlice'
import toast from 'react-hot-toast'
import { Edit, Save, X, Building, Phone, MapPin, Globe, CreditCard, Settings, Calendar } from 'lucide-react'

// interface HotelProfile {
//   id: string
//   hotel_name: string
//   hotel_slug: string
//   admin_name: string
//   admin_email: string
//   hotel_phone: string
//   hotel_address: string
//   city: string
//   country: string
//   subscription_status: string
//   subscription_plan_id: string | null
//   is_active: boolean
//   is_verified: boolean
//   created_at: string
//   updated_at: string

//   // stats
//   today_orders: string
//   today_revenue: string
//   active_orders: string
//   staff_active: string
//   table_occupancy: string
//   menu_items: string
//   pending_kitchen_orders: string
//   low_inventory_items: string

//   // optional business settings (may not come from dashboard; keep optional)
//   timezone?: string
//   currency?: string
//   tax_rate?: number
//   service_charge?: number
//   subscription_end_date?: string
// }

// interface ProfileViewProps {
//   dashboardData: HotelProfile
// }

interface HotelInfo {
  id: string
  hotel_name: string
  hotel_slug: string
  admin_name?: string
  admin_email?: string
  hotel_phone?: string
  hotel_address?: string
  city?: string
  country?: string
  timezone?: string
  currency?: string
  tax_rate?: number
  service_charge?: number
  subscription_status?: string
  subscription_plan_id?: string | null
  subscription_end_date?: string
  is_active?: boolean
  is_verified?: boolean
  created_at?: string
  updated_at?: string
}

interface DashboardStats {
  today_orders?: number | string
  today_revenue?: number | string
  active_orders?: number | string
  table_occupancy?: number | string
  staff_active?: string
  pending_kitchen_orders?: number | string
  low_inventory_items?: number | string
  // add more if you have
}

interface DashboardPayload {
  hotel: HotelInfo | null;
  stats?: DashboardStats
}

interface ProfileViewProps {
  dashboardData: DashboardPayload
}

export default function ProfileView({ dashboardData }: ProfileViewProps) {
  const hotel = dashboardData.hotel
  const stats = dashboardData.stats
  const dispatch = useDispatch<AppDispatch>()
  // const hotel = dashboardData // ✅ alias so you don't rewrite UI everywhere

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    hotel_name: '',
    hotel_phone: '',
    hotel_address: '',
    city: '',
    country: '',
    timezone: 'UTC',
    currency: 'USD',
    tax_rate: 0.10,
    service_charge: 0.05,
  })
  const [isSaving, setIsSaving] = useState(false)

  // ✅ Initialize form data when dashboardData changes
  useEffect(() => {
    if (hotel) {
      setFormData({
        hotel_name: hotel.hotel_name || '',
        hotel_phone: hotel.hotel_phone || '',
        hotel_address: hotel.hotel_address || '',
        city: hotel.city || '',
        country: hotel.country || '',
        timezone: hotel.timezone || 'UTC',
        currency: hotel.currency || 'USD',
        tax_rate: typeof hotel.tax_rate === 'number' ? hotel.tax_rate : 0.10,
        service_charge: typeof hotel.service_charge === 'number' ? hotel.service_charge : 0.05,
      })
    }
  }, [hotel])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!hotel?.id) {
      toast.error('Hotel ID is required')
      return
    }

    setIsSaving(true)
    try {
      const updateData = {
        hotelId: hotel.id,
        ...formData,
      }

      await dispatch(updateHotelProfile(updateData)).unwrap()
      toast.success('Profile updated successfully')
      setIsEditing(false)
    } catch (error: any) {
      console.error('Update error:', error)
      toast.error(error?.message || 'Failed to update profile')
    } finally {
      setIsSaving(false)
    }
  }

  const getSubscriptionColor = (status?: string) => {
    if (!status) return 'bg-gray-100 text-gray-800'

    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800'
      case 'trial':
        return 'bg-amber-100 text-amber-800'
      case 'suspended':
        return 'bg-red-100 text-red-800'
      case 'cancelled':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  }

  const formatTime = (dateString?: string) => {
    if (!dateString) return 'N/A'
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (!hotel) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-semibold text-gray-900">No hotel data available</h3>
        <p className="text-gray-600 mt-2">Please refresh the page or check your connection</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold mb-2">{hotel.hotel_name}</h1>
            <p className="text-blue-100">Hotel Profile & Settings</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSubscriptionColor(hotel.subscription_status)}`}>
                {hotel.subscription_status?.toUpperCase() || 'TRIAL'}
              </span>
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm">
                {hotel.is_active ? 'ACTIVE' : 'INACTIVE'}
              </span>
              {hotel.is_verified && (
                <span className="px-3 py-1 bg-green-500/30 rounded-full text-sm">
                  VERIFIED
                </span>
              )}
            </div>
          </div>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Edit className="h-4 w-4" />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(false)}
                disabled={isSaving}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSaving}
                className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="h-4 w-4" />
                {isSaving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hotel Details Card */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Building className="h-5 w-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900">Hotel Information</h3>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hotel Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.hotel_name}
                    onChange={(e) => setFormData({ ...formData, hotel_name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isSaving}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.hotel_phone}
                    onChange={(e) => setFormData({ ...formData, hotel_phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isSaving}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    value={formData.hotel_address}
                    onChange={(e) => setFormData({ ...formData, hotel_address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isSaving}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isSaving}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={isSaving}
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    Hotel Name
                  </label>
                  <p className="text-gray-900 font-medium">{hotel.hotel_name}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <span>@</span>
                    Hotel Slug
                  </label>
                  <p className="text-gray-900 font-mono bg-gray-50 px-2 py-1 rounded">{hotel.hotel_slug}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Phone Number
                  </label>
                  <p className="text-gray-900">{hotel.hotel_phone || 'Not provided'}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <p className="text-gray-900">{hotel.admin_email || 'Not provided'}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Address
                  </label>
                  <p className="text-gray-900">{hotel.hotel_address || 'Not provided'}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <p className="text-gray-900">{hotel.city || 'Not provided'}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <p className="text-gray-900">{hotel.country || 'Not provided'}</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Subscription Status
                  </label>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSubscriptionColor(hotel.subscription_status)}`}>
                      {hotel.subscription_status?.toUpperCase() || 'TRIAL'}
                    </span>
                    {hotel.subscription_end_date && (
                      <span className="text-sm text-gray-600">
                        Ends {formatDate(hotel.subscription_end_date)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Timestamps */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-gray-500">Created</p>
                  <p className="text-gray-900">{formatDate(hotel.created_at)} {formatTime(hotel.created_at)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-gray-500">Last Updated</p>
                  <p className="text-gray-900">{formatDate(hotel.updated_at)} {formatTime(hotel.updated_at)}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-gray-500">Hotel ID</p>
                  <p className="text-gray-900 font-mono text-xs truncate">{hotel.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Settings Card */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Settings className="h-5 w-5 text-gray-500" />
            <h3 className="text-lg font-semibold text-gray-900">Business Settings</h3>
          </div>

          {/* ✅ these fields may not exist in dashboard payload; using defaults */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate</label>
              <p className="text-gray-900 text-lg font-medium">{((hotel.tax_rate ?? 0.10) * 100).toFixed(1)}%</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Charge</label>
              <p className="text-gray-900 text-lg font-medium">{((hotel.service_charge ?? 0.05) * 100).toFixed(1)}%</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Currency
              </label>
              <p className="text-gray-900 text-lg font-medium">{hotel.currency ?? 'USD'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
              <p className="text-gray-900 text-lg font-medium">{hotel.timezone ?? 'UTC'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subscription Plan</label>
              <p className="text-gray-900 text-lg font-medium">{hotel.subscription_plan_id ?? 'Trial'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
