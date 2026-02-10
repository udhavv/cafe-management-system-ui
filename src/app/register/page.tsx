// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { 
//   Hotel, 
//   ArrowLeft, 
//   ArrowRight, 
//   Check, 
//   X, 
//   Loader2,
//   Sparkle,
//   Building2,
//   User,
//   MapPin,
//   Briefcase,
//   CreditCard as CardIcon,
//   FileText,
//   FileCheck,
//   Edit,
//   CheckCircle,
//   Users,
//   Table,
//   Utensils,
//   Percent as PercentIcon,
//   Eye,
//   EyeOff,
//   Calendar as CalendarIcon,
//   Globe as GlobeIcon,
//   Wallet
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'

// // ===================== TYPES =====================
// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface HotelRegistrationForm {
//   // Step 1: Hotel Details
//   hotel_name: string;
//   hotel_slug: string;
  
//   // Step 2: Admin Details
//   admin_email: string;
//   admin_password: string;
//   admin_confirm_password: string;
//   admin_name: string;
//   admin_phone: string;
  
//   // Step 3: Hotel Contact
//   hotel_phone: string;
//   hotel_address: string;
//   city: string;
//   country: string;
  
//   // Step 4: Business Settings
//   timezone: string;
//   currency: string;
//   tax_rate: number;
//   service_charge: number;
  
//   // Step 5: Subscription
//   subscription_plan_id: string;
  
//   // Terms & Conditions
//   accept_terms: boolean;
//   accept_marketing: boolean;
// }

// // ===================== FORM STEP COMPONENTS =====================

// // Step 1: Hotel Basic Details
// function HotelDetailsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const [slugPreview, setSlugPreview] = useState('')

//   useEffect(() => {
//     const slug = formData.hotel_name
//       .toLowerCase()
//       .replace(/[^\w\s-]/g, '')
//       .replace(/\s+/g, '-')
//       .replace(/--+/g, '-')
//       .trim()
//     setSlugPreview(slug)
//     if (!formData.hotel_slug) {
//       updateFormData('hotel_slug', slug)
//     }
//   }, [formData.hotel_name])

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Hotel Information</h3>
//         <p className="text-gray-600">Tell us about your hotel or restaurant</p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Hotel/Restaurant Name *
//           </label>
//           <input
//             type="text"
//             value={formData.hotel_name}
//             onChange={(e) => updateFormData('hotel_name', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.hotel_name ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="Grand Hotel & Resort"
//           />
//           {errors.hotel_name && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Hotel URL Slug *
//           </label>
//           <div className="flex items-center gap-3">
//             <span className="text-gray-500 whitespace-nowrap">hotelease.com/</span>
//             <input
//               type="text"
//               value={formData.hotel_slug}
//               onChange={(e) => updateFormData('hotel_slug', e.target.value)}
//               className={`flex-1 px-4 py-3 rounded-xl border ${
//                 errors.hotel_slug ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//               placeholder="grand-hotel-resort"
//             />
//           </div>
//           {errors.hotel_slug && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_slug}</p>
//           )}
//           <p className="mt-1 text-sm text-gray-500">
//             This will be your unique URL. Example: hotelease.com/{slugPreview || 'your-hotel'}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 2: Admin Account Details
// function AdminDetailsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Admin Account</h3>
//         <p className="text-gray-600">Create your administrator account</p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             value={formData.admin_name}
//             onChange={(e) => updateFormData('admin_name', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.admin_name ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="John Smith"
//           />
//           {errors.admin_name && (
//             <p className="mt-1 text-sm text-red-600">{errors.admin_name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Email Address *
//           </label>
//           <input
//             type="email"
//             value={formData.admin_email}
//             onChange={(e) => updateFormData('admin_email', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.admin_email ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="admin@yourhotel.com"
//           />
//           {errors.admin_email && (
//             <p className="mt-1 text-sm text-red-600">{errors.admin_email}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             value={formData.admin_phone}
//             onChange={(e) => updateFormData('admin_phone', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.admin_phone ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="+1 (555) 123-4567"
//           />
//           {errors.admin_phone && (
//             <p className="mt-1 text-sm text-red-600">{errors.admin_phone}</p>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password *
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={formData.admin_password}
//                 onChange={(e) => updateFormData('admin_password', e.target.value)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.admin_password ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             {errors.admin_password && (
//               <p className="mt-1 text-sm text-red-600">{errors.admin_password}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Confirm Password *
//             </label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 value={formData.admin_confirm_password}
//                 onChange={(e) => updateFormData('admin_confirm_password', e.target.value)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.admin_confirm_password ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             {errors.admin_confirm_password && (
//               <p className="mt-1 text-sm text-red-600">{errors.admin_confirm_password}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 3: Hotel Contact Information
// function HotelContactStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const countries = [
//     'US', 'CA', 'UK', 'AU', 'DE', 'FR', 'IT', 'ES', 'JP', 'CN', 'IN', 'BR', 'MX', 'AE'
//   ]

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
//         <p className="text-gray-600">Where is your hotel located?</p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Hotel Phone Number *
//           </label>
//           <input
//             type="tel"
//             value={formData.hotel_phone}
//             onChange={(e) => updateFormData('hotel_phone', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.hotel_phone ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="+1 (555) 123-4567"
//           />
//           {errors.hotel_phone && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_phone}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Address *
//           </label>
//           <textarea
//             value={formData.hotel_address}
//             onChange={(e) => updateFormData('hotel_address', e.target.value)}
//             rows={3}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.hotel_address ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="123 Main Street, Suite 100"
//           />
//           {errors.hotel_address && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_address}</p>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               City *
//             </label>
//             <input
//               type="text"
//               value={formData.city}
//               onChange={(e) => updateFormData('city', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.city ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//               placeholder="New York"
//             />
//             {errors.city && (
//               <p className="mt-1 text-sm text-red-600">{errors.city}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Country *
//             </label>
//             <select
//               value={formData.country}
//               onChange={(e) => updateFormData('country', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.country ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             >
//               <option value="">Select a country</option>
//               {countries.map((country) => (
//                 <option key={country} value={country}>
//                   {country}
//                 </option>
//               ))}
//             </select>
//             {errors.country && (
//               <p className="mt-1 text-sm text-red-600">{errors.country}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 4: Business Settings
// function BusinessSettingsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const timezones = [
//     'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
//     'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Asia/Tokyo', 'Asia/Dubai',
//     'Australia/Sydney', 'UTC'
//   ]

//   const currencies = [
//     { code: 'USD', symbol: '$', name: 'US Dollar' },
//     { code: 'EUR', symbol: '€', name: 'Euro' },
//     { code: 'GBP', symbol: '£', name: 'British Pound' },
//     { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
//     { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
//     { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
//     { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
//     { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' }
//   ]

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Settings</h3>
//         <p className="text-gray-600">Configure your business preferences</p>
//       </div>

//       <div className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Timezone *
//             </label>
//             <select
//               value={formData.timezone}
//               onChange={(e) => updateFormData('timezone', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.timezone ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             >
//               <option value="">Select timezone</option>
//               {timezones.map((tz) => (
//                 <option key={tz} value={tz}>
//                   {tz}
//                 </option>
//               ))}
//             </select>
//             {errors.timezone && (
//               <p className="mt-1 text-sm text-red-600">{errors.timezone}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Currency *
//             </label>
//             <select
//               value={formData.currency}
//               onChange={(e) => updateFormData('currency', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.currency ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             >
//               <option value="">Select currency</option>
//               {currencies.map((curr) => (
//                 <option key={curr.code} value={curr.code}>
//                   {curr.code} - {curr.name} ({curr.symbol})
//                 </option>
//               ))}
//             </select>
//             {errors.currency && (
//               <p className="mt-1 text-sm text-red-600">{errors.currency}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Tax Rate (%) *
//             </label>
//             <div className="relative">
//               <input
//                 type="number"
//                 min="0"
//                 max="50"
//                 step="0.01"
//                 value={formData.tax_rate}
//                 onChange={(e) => updateFormData('tax_rate', parseFloat(e.target.value) || 0)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.tax_rate ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pl-12`}
//                 placeholder="10.00"
//               />
//               <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                 <PercentIcon size={20} />
//               </div>
//             </div>
//             {errors.tax_rate && (
//               <p className="mt-1 text-sm text-red-600">{errors.tax_rate}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Service Charge (%) *
//             </label>
//             <div className="relative">
//               <input
//                 type="number"
//                 min="0"
//                 max="20"
//                 step="0.01"
//                 value={formData.service_charge}
//                 onChange={(e) => updateFormData('service_charge', parseFloat(e.target.value) || 0)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.service_charge ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pl-12`}
//                 placeholder="5.00"
//               />
//               <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                 <PercentIcon size={20} />
//               </div>
//             </div>
//             {errors.service_charge && (
//               <p className="mt-1 text-sm text-red-600">{errors.service_charge}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 5: Subscription Plan
// function SubscriptionStep({ 
//   formData, 
//   updateFormData, 
//   errors, 
//   plans, 
//   loading 
// }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
//   plans: SubscriptionPlan[];
//   loading: boolean;
// }) {
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(formData.subscription_plan_id || null)

//   useEffect(() => {
//     if (selectedPlan) {
//       updateFormData('subscription_plan_id', selectedPlan)
//     }
//   }, [selectedPlan, updateFormData])

//   if (loading) {
//     return (
//       <div className="space-y-6">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
//           <p className="text-gray-600">Select the perfect plan for your business</p>
//         </div>
//         <div className="flex justify-center items-center py-12">
//           <Loader2 className="h-8 w-8 text-amber-500 animate-spin" />
//         </div>
//       </div>
//     )
//   }

//   const sortedPlans = [...plans].sort((a, b) => a.display_order - b.display_order)

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
//         <p className="text-gray-600">Select the perfect plan for your business</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {sortedPlans.map((plan) => (
//           <div
//             key={plan.id}
//             onClick={() => setSelectedPlan(plan.id)}
//             className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
//               selectedPlan === plan.id
//                 ? 'border-amber-500 bg-gradient-to-b from-amber-50 to-orange-50'
//                 : 'border-gray-200 hover:border-amber-300'
//             }`}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h4 className="text-xl font-bold text-gray-900">{plan.plan_name}</h4>
//               {selectedPlan === plan.id && (
//                 <div className="p-1 bg-amber-500 rounded-full">
//                   <Check className="h-4 w-4 text-white" />
//                 </div>
//               )}
//             </div>

//             <div className="mb-4">
//               <div className="flex items-baseline">
//                 <span className="text-3xl font-bold text-gray-900">
//                   ${parseFloat(plan.price_per_month)}
//                 </span>
//                 <span className="ml-2 text-gray-500">/month</span>
//               </div>
//               <p className="text-sm text-gray-600">{plan.description}</p>
//             </div>

//             <div className="space-y-2 mb-6">
//               <div className="flex items-center gap-2">
//                 <Users className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-600">Up to {plan.max_staff} staff</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Table className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-600">{plan.max_tables} tables</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Utensils className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-600">{plan.max_menu_items} menu items</span>
//               </div>
//             </div>

//             <button
//               className={`w-full py-3 rounded-lg font-semibold transition-colors ${
//                 selectedPlan === plan.id
//                   ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
//             </button>
//           </div>
//         ))}
//       </div>

//       {errors.subscription_plan_id && (
//         <p className="text-sm text-red-600">{errors.subscription_plan_id}</p>
//       )}
//     </div>
//   )
// }

// // Step 6: Terms and Conditions
// function TermsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Terms & Conditions</h3>
//         <p className="text-gray-600">Please review and accept our terms</p>
//       </div>

//       <div className="space-y-4">
//         <div className="bg-gray-50 rounded-xl p-6">
//           <h4 className="font-semibold text-gray-900 mb-4">HotelEase Terms of Service</h4>
//           <div className="space-y-3 text-sm text-gray-600 max-h-60 overflow-y-auto pr-4">
//             <p>By using HotelEase, you agree to:</p>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Maintain accurate and current information about your hotel</li>
//               <li>Use the platform in compliance with all applicable laws</li>
//               <li>Not share your account credentials with unauthorized users</li>
//               <li>Pay subscription fees on time for continued service</li>
//               <li>Respect the intellectual property rights of HotelEase</li>
//               <li>Not attempt to reverse engineer or hack the platform</li>
//             </ul>
//             <p className="mt-4">
//               Your data will be handled according to our Privacy Policy. We use industry-standard
//               security measures to protect your information.
//             </p>
//             <p>
//               You can cancel your subscription at any time. Refunds are provided according to our
//               refund policy for unused portions of prepaid plans.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={formData.accept_terms}
//               onChange={(e) => updateFormData('accept_terms', e.target.checked)}
//               className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
//             />
//             <div>
//               <span className="font-medium text-gray-900">I agree to the Terms of Service *</span>
//               <p className="text-sm text-gray-600 mt-1">
//                 You must accept our terms to use HotelEase
//               </p>
//             </div>
//           </label>

//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={formData.accept_marketing}
//               onChange={(e) => updateFormData('accept_marketing', e.target.checked)}
//               className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
//             />
//             <div>
//               <span className="font-medium text-gray-900">Send me updates and tips</span>
//               <p className="text-sm text-gray-600 mt-1">
//                 Receive emails about new features, best practices, and special offers
//               </p>
//             </div>
//           </label>
//         </div>

//         {errors.accept_terms && (
//           <p className="text-sm text-red-600">{errors.accept_terms}</p>
//         )}
//       </div>
//     </div>
//   )
// }

// // Step 7: Review and Submit
// function ReviewStep({ 
//   formData, 
//   plans, 
//   onEdit, 
//   onSubmit, 
//   isSubmitting 
// }: {
//   formData: HotelRegistrationForm;
//   plans: SubscriptionPlan[];
//   onEdit: (step: number) => void;
//   onSubmit: () => void;
//   isSubmitting: boolean;
// }) {
//   const selectedPlan = plans.find(p => p.id === formData.subscription_plan_id)

//   const sections = [
//     {
//       title: 'Hotel Details',
//       icon: <Building2 className="h-5 w-5" />,
//       step: 1,
//       fields: [
//         { label: 'Hotel Name', value: formData.hotel_name },
//         { label: 'URL Slug', value: formData.hotel_slug },
//       ]
//     },
//     {
//       title: 'Admin Account',
//       icon: <User className="h-5 w-5" />,
//       step: 2,
//       fields: [
//         { label: 'Admin Name', value: formData.admin_name },
//         { label: 'Email', value: formData.admin_email },
//         { label: 'Phone', value: formData.admin_phone },
//       ]
//     },
//     {
//       title: 'Contact Information',
//       icon: <MapPin className="h-5 w-5" />,
//       step: 3,
//       fields: [
//         { label: 'Hotel Phone', value: formData.hotel_phone },
//         { label: 'Address', value: formData.hotel_address },
//         { label: 'City', value: formData.city },
//         { label: 'Country', value: formData.country },
//       ]
//     },
//     {
//       title: 'Business Settings',
//       icon: <Briefcase className="h-5 w-5" />,
//       step: 4,
//       fields: [
//         { label: 'Timezone', value: formData.timezone },
//         { label: 'Currency', value: formData.currency },
//         { label: 'Tax Rate', value: `${formData.tax_rate}%` },
//         { label: 'Service Charge', value: `${formData.service_charge}%` },
//       ]
//     },
//     {
//       title: 'Subscription',
//       icon: <CardIcon className="h-5 w-5" />,
//       step: 5,
//       fields: [
//         { 
//           label: 'Selected Plan', 
//           value: selectedPlan ? `${selectedPlan.plan_name} - $${parseFloat(selectedPlan.price_per_month)}/month` : 'Not selected' 
//         },
//         { 
//           label: 'Staff Limit', 
//           value: selectedPlan ? `${selectedPlan.max_staff} staff members` : '-' 
//         },
//         { 
//           label: 'Tables', 
//           value: selectedPlan ? `${selectedPlan.max_tables} tables` : '-' 
//         },
//         { 
//           label: 'Menu Items', 
//           value: selectedPlan ? `${selectedPlan.max_menu_items} items` : '-' 
//         },
//       ]
//     }
//   ]

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h3>
//         <p className="text-gray-600">Please verify all details before submitting</p>
//       </div>

//       <div className="space-y-6">
//         {sections.map((section, index) => (
//           <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                   {section.icon}
//                 </div>
//                 <h4 className="font-bold text-gray-900">{section.title}</h4>
//               </div>
//               <button
//                 onClick={() => onEdit(section.step)}
//                 className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
//               >
//                 <Edit className="h-4 w-4" />
//                 Edit
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {section.fields.map((field, fieldIndex) => (
//                 <div key={fieldIndex}>
//                   <p className="text-sm text-gray-500 mb-1">{field.label}</p>
//                   <p className="font-medium text-gray-900">{field.value || '-'}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-6">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//               <FileCheck className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900">Ready to Launch</h4>
//               <p className="text-gray-600">Your hotel will be active immediately after submission</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <CheckCircle className="h-5 w-5 text-emerald-500" />
//               <span className="text-gray-700">14-day free trial included</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CheckCircle className="h-5 w-5 text-emerald-500" />
//               <span className="text-gray-700">No credit card required for trial</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CheckCircle className="h-5 w-5 text-emerald-500" />
//               <span className="text-gray-700">Full access to all selected features</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 pt-6">
//         <button
//           onClick={onSubmit}
//           disabled={isSubmitting}
//           className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//         >
//           {isSubmitting ? (
//             <>
//               <Loader2 className="h-5 w-5 animate-spin" />
//               Creating Your Hotel...
//             </>
//           ) : (
//             <>
//               <Sparkle className="h-5 w-5" />
//               Complete Registration & Launch Hotel
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   )
// }

// // ===================== MAIN REGISTRATION COMPONENT =====================
// export default function HotelRegistrationPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const planId = searchParams.get('plan')
  
//   const [plans, setPlans] = useState<SubscriptionPlan[]>([])
//   const [loading, setLoading] = useState(true)
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formErrors, setFormErrors] = useState<Record<string, string>>({})
//   const [currentStep, setCurrentStep] = useState(1)
  
//   const [formData, setFormData] = useState<HotelRegistrationForm>({
//     hotel_name: '',
//     hotel_slug: '',
//     admin_email: '',
//     admin_password: '',
//     admin_confirm_password: '',
//     admin_name: '',
//     admin_phone: '',
//     hotel_phone: '',
//     hotel_address: '',
//     city: '',
//     country: 'US',
//     timezone: 'America/New_York',
//     currency: 'USD',
//     tax_rate: 10.00,
//     service_charge: 5.00,
//     subscription_plan_id: planId || '',
//     accept_terms: false,
//     accept_marketing: false,
//   })

//   useEffect(() => {
//     fetchSubscriptionPlans()
//   }, [])

//   const fetchSubscriptionPlans = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/auth/subscriptions')
//       const data = await response.json()
//       if (data.success) {
//         setPlans(data.plans)
//       }
//     } catch (error) {
//       toast.error('Failed to load subscription plans')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const totalSteps = 7
//   const progressPercentage = Math.round((currentStep / totalSteps) * 100)

//   const updateFormData = (field: keyof HotelRegistrationForm, value: any) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }))
//     if (formErrors[field]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }))
//     }
//   }

//   const validateStep = (step: number): boolean => {
//     const errors: Record<string, string> = {}

//     switch (step) {
//       case 1:
//         if (!formData.hotel_name.trim()) errors.hotel_name = 'Hotel name is required'
//         if (!formData.hotel_slug.trim()) errors.hotel_slug = 'URL slug is required'
//         else if (!/^[a-z0-9-]+$/.test(formData.hotel_slug)) {
//           errors.hotel_slug = 'Slug can only contain lowercase letters, numbers, and hyphens'
//         }
//         break
      
//       case 2:
//         if (!formData.admin_name.trim()) errors.admin_name = 'Admin name is required'
//         if (!formData.admin_email.trim()) errors.admin_email = 'Email is required'
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.admin_email)) {
//           errors.admin_email = 'Invalid email format'
//         }
//         if (!formData.admin_phone.trim()) errors.admin_phone = 'Phone number is required'
//         if (!formData.admin_password) errors.admin_password = 'Password is required'
//         else if (formData.admin_password.length < 8) {
//           errors.admin_password = 'Password must be at least 8 characters'
//         }
//         if (!formData.admin_confirm_password) errors.admin_confirm_password = 'Please confirm password'
//         else if (formData.admin_password !== formData.admin_confirm_password) {
//           errors.admin_confirm_password = 'Passwords do not match'
//         }
//         break
      
//       case 3:
//         if (!formData.hotel_phone.trim()) errors.hotel_phone = 'Hotel phone is required'
//         if (!formData.hotel_address.trim()) errors.hotel_address = 'Address is required'
//         if (!formData.city.trim()) errors.city = 'City is required'
//         if (!formData.country) errors.country = 'Country is required'
//         break
      
//       case 4:
//         if (!formData.timezone) errors.timezone = 'Timezone is required'
//         if (!formData.currency) errors.currency = 'Currency is required'
//         if (formData.tax_rate < 0) errors.tax_rate = 'Tax rate cannot be negative'
//         if (formData.service_charge < 0) errors.service_charge = 'Service charge cannot be negative'
//         break
      
//       case 5:
//         if (!formData.subscription_plan_id) errors.subscription_plan_id = 'Please select a plan'
//         break
      
//       case 6:
//         if (!formData.accept_terms) errors.accept_terms = 'You must accept the terms of service'
//         break
//     }

//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }

//   const handleNextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(prev => Math.min(prev + 1, totalSteps))
//     }
//   }

//   const handlePrevStep = () => {
//     setCurrentStep(prev => Math.max(prev - 1, 1))
//   }

//   const handleEditStep = (step: number) => {
//     setCurrentStep(step)
//   }

//   const handleSubmitRegistration = async () => {
//     if (!validateStep(6)) {
//       toast.error('Please accept the terms of service')
//       return
//     }

//     setIsSubmitting(true)
    
//     try {
//       const response = await fetch('http://localhost:4000/api/auth/register-hotel', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           hotel: {
//             hotel_name: formData.hotel_name,
//             hotel_slug: formData.hotel_slug,
//             admin_email: formData.admin_email,
//             admin_password: formData.admin_password,
//             admin_name: formData.admin_name,
//             admin_phone: formData.admin_phone,
//             hotel_phone: formData.hotel_phone,
//             hotel_address: formData.hotel_address,
//             city: formData.city,
//             country: formData.country,
//             timezone: formData.timezone,
//             currency: formData.currency,
//             tax_rate: formData.tax_rate,
//             service_charge: formData.service_charge,
//             subscription_plan_id: formData.subscription_plan_id,
//           }
//         }),
//       })

//       const data = await response.json()

//       if (data.success) {
//         toast.success('Hotel registered successfully! Redirecting to dashboard...', {
//           icon: '🎉',
//           duration: 3000,
//         })
        
//         // Redirect to dashboard after 3 seconds
//         setTimeout(() => {
//           router.push(`/dashboard/${formData.hotel_slug}`)
//         }, 3000)
//       } else {
//         throw new Error(data.message || 'Registration failed')
//       }
//     } catch (error) {
//       toast.error(error instanceof Error ? error.message : 'Registration failed. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <HotelDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 2:
//         return <AdminDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 3:
//         return <HotelContactStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 4:
//         return <BusinessSettingsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 5:
//         return <SubscriptionStep 
//           formData={formData} 
//           updateFormData={updateFormData} 
//           errors={formErrors} 
//           plans={plans}
//           loading={loading}
//         />
//       case 6:
//         return <TermsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 7:
//         return <ReviewStep 
//           formData={formData} 
//           plans={plans}
//           onEdit={handleEditStep}
//           onSubmit={handleSubmitRegistration}
//           isSubmitting={isSubmitting}
//         />
//       default:
//         return null
//     }
//   }

//   // Steps configuration
//   const steps = [
//     { number: 1, title: 'Hotel Details', icon: <Building2 className="h-5 w-5" /> },
//     { number: 2, title: 'Admin Account', icon: <User className="h-5 w-5" /> },
//     { number: 3, title: 'Contact Info', icon: <MapPin className="h-5 w-5" /> },
//     { number: 4, title: 'Business Settings', icon: <Briefcase className="h-5 w-5" /> },
//     { number: 5, title: 'Subscription', icon: <CardIcon className="h-5 w-5" /> },
//     { number: 6, title: 'Terms', icon: <FileText className="h-5 w-5" /> },
//     { number: 7, title: 'Review', icon: <FileCheck className="h-5 w-5" /> },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
//       <Toaster 
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//           },
//         }}
//       />

//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                 <Hotel className="h-7 w-7 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>
            
//             <button
//               onClick={() => router.push('/')}
//               className="text-gray-600 hover:text-amber-600 font-medium px-4 py-2 hover:bg-amber-50 rounded-lg transition-colors"
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Progress Header */}
//           <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 p-6">
//             <div className="mb-6">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Hotel</h1>
//               <p className="text-gray-600">Complete the form to start your 14-day free trial</p>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-2">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium text-gray-700">
//                   Step {currentStep} of {totalSteps}
//                 </span>
//                 <span className="text-sm font-bold text-amber-600">{progressPercentage}%</span>
//               </div>
//               <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
//                   style={{ width: `${progressPercentage}%` }}
//                 />
//               </div>
//             </div>

//             {/* Step Indicators */}
//             <div className="flex justify-between mt-6">
//               {steps.map((step) => (
//                 <div
//                   key={step.number}
//                   className={`flex flex-col items-center relative ${
//                     step.number < currentStep ? 'text-emerald-600' :
//                     step.number === currentStep ? 'text-amber-600' : 'text-gray-400'
//                   }`}
//                 >
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
//                     step.number < currentStep ? 'bg-emerald-100 border-2 border-emerald-500' :
//                     step.number === currentStep ? 'bg-amber-100 border-2 border-amber-500' :
//                     'bg-gray-100 border-2 border-gray-300'
//                   }`}>
//                     {step.number < currentStep ? (
//                       <Check className="h-5 w-5" />
//                     ) : (
//                       step.icon
//                     )}
//                   </div>
//                   <span className="text-xs font-medium text-center">
//                     {step.title}
//                   </span>
//                   {step.number < totalSteps && (
//                     <div className={`absolute top-5 left-full w-full h-0.5 ${
//                       step.number < currentStep ? 'bg-emerald-500' : 'bg-gray-300'
//                     }`} style={{ width: 'calc(100% - 40px)', marginLeft: '20px' }} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form Content */}
//           <div className="p-6 md:p-8">
//             {renderStep()}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
//               <button
//                 onClick={handlePrevStep}
//                 disabled={currentStep === 1}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
//                   currentStep === 1
//                     ? 'text-gray-400 cursor-not-allowed'
//                     : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
//                 }`}
//               >
//                 <ArrowLeft className="h-5 w-5" />
//                 Previous
//               </button>

//               {currentStep < totalSteps ? (
//                 <button
//                   onClick={handleNextStep}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
//                 >
//                   Next Step
//                   <ArrowRight className="h-5 w-5" />
//                 </button>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-12 pb-8 text-center">
//         <p className="text-gray-600 text-sm">
//           By registering, you agree to our{' '}
//           <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Terms of Service</a>
//           {' '}and{' '}
//           <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Privacy Policy</a>
//         </p>
//         <p className="text-gray-500 text-sm mt-2">
//           Need help?{' '}
//           <a href="mailto:support@hotelease.com" className="text-amber-600 hover:text-amber-700 font-medium">
//             support@hotelease.com
//           </a>
//         </p>
//       </footer>
//     </div>
//   )
// }













// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { 
//   Hotel, 
//   ArrowLeft, 
//   ArrowRight, 
//   Check, 
//   X, 
//   Loader2,
//   Sparkle,
//   Building2,
//   User,
//   MapPin,
//   Briefcase,
//   CreditCard as CardIcon,
//   FileText,
//   FileCheck,
//   Edit,
//   CheckCircle,
//   Users,
//   Table,
//   Utensils,
//   Percent as PercentIcon,
//   Eye,
//   EyeOff,
//   Calendar as CalendarIcon,
//   Globe as GlobeIcon,
//   Wallet
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useSelector, useDispatch } from 'react-redux'
// import type { AppDispatch, RootState } from '@/store/index'
// import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'
// import { registerHotel, clearRegistrationError } from '@/store/slices/hotelAuthSlice'

// // ===================== TYPES =====================
// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface HotelRegistrationForm {
//   // Step 1: Hotel Details
//   hotel_name: string;
//   hotel_slug: string;
  
//   // Step 2: Admin Details
//   admin_email: string;
//   admin_password: string;
//   admin_confirm_password: string;
//   admin_name: string;
//   admin_phone: string;
  
//   // Step 3: Hotel Contact
//   hotel_phone: string;
//   hotel_address: string;
//   city: string;
//   country: string;
  
//   // Step 4: Business Settings
//   timezone: string;
//   currency: string;
//   tax_rate: number;
//   service_charge: number;
  
//   // Step 5: Subscription
//   subscription_plan_id: string;
  
//   // Terms & Conditions
//   accept_terms: boolean;
//   accept_marketing: boolean;
// }

// // ===================== FORM STEP COMPONENTS =====================
// // (Keep all the step components as they are - HotelDetailsStep, AdminDetailsStep, etc.)
// // They remain exactly the same...

// // ===================== MAIN REGISTRATION COMPONENT =====================
// export default function HotelRegistrationPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const planId = searchParams.get('plan')
  
//   // Redux state
//   const dispatch = useDispatch<AppDispatch>()
//   const { plans, loading: plansLoading } = useSelector((state: RootState) => state.subscription)
//   const { registration, isAuthenticated, user } = useSelector((state: RootState) => state.authHotel)
  
//   // Local state
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [formErrors, setFormErrors] = useState<Record<string, string>>({})
//   const [currentStep, setCurrentStep] = useState(1)
  
//   const [formData, setFormData] = useState<HotelRegistrationForm>({
//     hotel_name: '',
//     hotel_slug: '',
//     admin_email: '',
//     admin_password: '',
//     admin_confirm_password: '',
//     admin_name: '',
//     admin_phone: '',
//     hotel_phone: '',
//     hotel_address: '',
//     city: '',
//     country: 'US',
//     timezone: 'America/New_York',
//     currency: 'USD',
//     tax_rate: 10.00,
//     service_charge: 5.00,
//     subscription_plan_id: planId || '',
//     accept_terms: false,
//     accept_marketing: false,
//   })

//   // Fetch subscription plans on component mount
//   useEffect(() => {
//     dispatch(fetchSubscriptionPlans())
//   }, [dispatch])

//   // Handle registration success/error
//   useEffect(() => {
//     if (registration.error) {
//       toast.error(registration.error)
//       dispatch(clearRegistrationError())
//     }
    
//     if (registration.success && isAuthenticated && user) {
//       toast.success('Hotel registered successfully! Redirecting to dashboard...', {
//         icon: '🎉',
//         duration: 3000,
//       })
      
//       // Redirect to dashboard after 3 seconds
//       setTimeout(() => {
//         router.push(`/dashboard/${user.hotelSlug}`)
//       }, 3000)
//     }
//   }, [registration, isAuthenticated, user, router, dispatch])

//   const totalSteps = 7
//   const progressPercentage = Math.round((currentStep / totalSteps) * 100)

//   const updateFormData = (field: keyof HotelRegistrationForm, value: any) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }))
//     if (formErrors[field]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }))
//     }
//   }

//   const validateStep = (step: number): boolean => {
//     const errors: Record<string, string> = {}

//     switch (step) {
//       case 1:
//         if (!formData.hotel_name.trim()) errors.hotel_name = 'Hotel name is required'
//         if (!formData.hotel_slug.trim()) errors.hotel_slug = 'URL slug is required'
//         else if (!/^[a-z0-9-]+$/.test(formData.hotel_slug)) {
//           errors.hotel_slug = 'Slug can only contain lowercase letters, numbers, and hyphens'
//         }
//         break
      
//       case 2:
//         if (!formData.admin_name.trim()) errors.admin_name = 'Admin name is required'
//         if (!formData.admin_email.trim()) errors.admin_email = 'Email is required'
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.admin_email)) {
//           errors.admin_email = 'Invalid email format'
//         }
//         if (!formData.admin_phone.trim()) errors.admin_phone = 'Phone number is required'
//         if (!formData.admin_password) errors.admin_password = 'Password is required'
//         else if (formData.admin_password.length < 8) {
//           errors.admin_password = 'Password must be at least 8 characters'
//         }
//         if (!formData.admin_confirm_password) errors.admin_confirm_password = 'Please confirm password'
//         else if (formData.admin_password !== formData.admin_confirm_password) {
//           errors.admin_confirm_password = 'Passwords do not match'
//         }
//         break
      
//       case 3:
//         if (!formData.hotel_phone.trim()) errors.hotel_phone = 'Hotel phone is required'
//         if (!formData.hotel_address.trim()) errors.hotel_address = 'Address is required'
//         if (!formData.city.trim()) errors.city = 'City is required'
//         if (!formData.country) errors.country = 'Country is required'
//         break
      
//       case 4:
//         if (!formData.timezone) errors.timezone = 'Timezone is required'
//         if (!formData.currency) errors.currency = 'Currency is required'
//         if (formData.tax_rate < 0) errors.tax_rate = 'Tax rate cannot be negative'
//         if (formData.service_charge < 0) errors.service_charge = 'Service charge cannot be negative'
//         break
      
//       case 5:
//         if (!formData.subscription_plan_id) errors.subscription_plan_id = 'Please select a plan'
//         break
      
//       case 6:
//         if (!formData.accept_terms) errors.accept_terms = 'You must accept the terms of service'
//         break
//     }

//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }

//   const handleNextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(prev => Math.min(prev + 1, totalSteps))
//     }
//   }

//   const handlePrevStep = () => {
//     setCurrentStep(prev => Math.max(prev - 1, 1))
//   }

//   const handleEditStep = (step: number) => {
//     setCurrentStep(step)
//   }

//   const handleSubmitRegistration = async () => {
//     if (!validateStep(6)) {
//       toast.error('Please accept the terms of service')
//       return
//     }

//     // Prepare registration data
//     const registrationData = {
//       hotel_name: formData.hotel_name,
//       hotel_slug: formData.hotel_slug,
//       admin_email: formData.admin_email,
//       admin_password: formData.admin_password,
//       admin_name: formData.admin_name,
//       admin_phone: formData.admin_phone,
//       hotel_phone: formData.hotel_phone,
//       hotel_address: formData.hotel_address,
//       city: formData.city,
//       country: formData.country,
//       timezone: formData.timezone,
//       currency: formData.currency,
//       tax_rate: formData.tax_rate,
//       service_charge: formData.service_charge,
//       subscription_plan_id: formData.subscription_plan_id,
//     }

//     // Dispatch registration action
//     dispatch(registerHotel(registrationData))
//   }

//   // Updated SubscriptionStep component to use Redux
//   const SubscriptionStep = ({ 
//     formData, 
//     updateFormData, 
//     errors
//   }: {
//     formData: HotelRegistrationForm;
//     updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//     errors: Record<string, string>;
//   }) => {
//     const [selectedPlan, setSelectedPlan] = useState<string | null>(formData.subscription_plan_id || null)

//     useEffect(() => {
//       if (selectedPlan) {
//         updateFormData('subscription_plan_id', selectedPlan)
//       }
//     }, [selectedPlan, updateFormData])

//     if (plansLoading) {
//       return (
//         <div className="space-y-6">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
//             <p className="text-gray-600">Select the perfect plan for your business</p>
//           </div>
//           <div className="flex justify-center items-center py-12">
//             <Loader2 className="h-8 w-8 text-amber-500 animate-spin" />
//           </div>
//         </div>
//       )
//     }

//     const sortedPlans = [...plans].sort((a, b) => a.display_order - b.display_order)

//     return (
//       <div className="space-y-6">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
//           <p className="text-gray-600">Select the perfect plan for your business</p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {sortedPlans.map((plan) => (
//             <div
//               key={plan.id}
//               onClick={() => setSelectedPlan(plan.id)}
//               className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
//                 selectedPlan === plan.id
//                   ? 'border-amber-500 bg-gradient-to-b from-amber-50 to-orange-50'
//                   : 'border-gray-200 hover:border-amber-300'
//               }`}
//             >
//               <div className="flex items-center justify-between mb-4">
//                 <h4 className="text-xl font-bold text-gray-900">{plan.plan_name}</h4>
//                 {selectedPlan === plan.id && (
//                   <div className="p-1 bg-amber-500 rounded-full">
//                     <Check className="h-4 w-4 text-white" />
//                   </div>
//                 )}
//               </div>

//               <div className="mb-4">
//                 <div className="flex items-baseline">
//                   <span className="text-3xl font-bold text-gray-900">
//                     ${parseFloat(plan.price_per_month)}
//                   </span>
//                   <span className="ml-2 text-gray-500">/month</span>
//                 </div>
//                 <p className="text-sm text-gray-600">{plan.description}</p>
//               </div>

//               <div className="space-y-2 mb-6">
//                 <div className="flex items-center gap-2">
//                   <Users className="h-4 w-4 text-gray-400" />
//                   <span className="text-sm text-gray-600">Up to {plan.max_staff} staff</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Table className="h-4 w-4 text-gray-400" />
//                   <span className="text-sm text-gray-600">{plan.max_tables} tables</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Utensils className="h-4 w-4 text-gray-400" />
//                   <span className="text-sm text-gray-600">{plan.max_menu_items} menu items</span>
//                 </div>
//               </div>

//               <button
//                 className={`w-full py-3 rounded-lg font-semibold transition-colors ${
//                   selectedPlan === plan.id
//                     ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
//               </button>
//             </div>
//           ))}
//         </div>

//         {errors.subscription_plan_id && (
//           <p className="text-sm text-red-600">{errors.subscription_plan_id}</p>
//         )}
//       </div>
//     )
//   }

//   // Updated ReviewStep component
//   const ReviewStep = ({ 
//     formData, 
//     onEdit, 
//     onSubmit
//   }: {
//     formData: HotelRegistrationForm;
//     onEdit: (step: number) => void;
//     onSubmit: () => void;
//   }) => {
//     const selectedPlan = plans.find(p => p.id === formData.subscription_plan_id)

//     const sections = [
//       {
//         title: 'Hotel Details',
//         icon: <Building2 className="h-5 w-5" />,
//         step: 1,
//         fields: [
//           { label: 'Hotel Name', value: formData.hotel_name },
//           { label: 'URL Slug', value: formData.hotel_slug },
//         ]
//       },
//       {
//         title: 'Admin Account',
//         icon: <User className="h-5 w-5" />,
//         step: 2,
//         fields: [
//           { label: 'Admin Name', value: formData.admin_name },
//           { label: 'Email', value: formData.admin_email },
//           { label: 'Phone', value: formData.admin_phone },
//         ]
//       },
//       {
//         title: 'Contact Information',
//         icon: <MapPin className="h-5 w-5" />,
//         step: 3,
//         fields: [
//           { label: 'Hotel Phone', value: formData.hotel_phone },
//           { label: 'Address', value: formData.hotel_address },
//           { label: 'City', value: formData.city },
//           { label: 'Country', value: formData.country },
//         ]
//       },
//       {
//         title: 'Business Settings',
//         icon: <Briefcase className="h-5 w-5" />,
//         step: 4,
//         fields: [
//           { label: 'Timezone', value: formData.timezone },
//           { label: 'Currency', value: formData.currency },
//           { label: 'Tax Rate', value: `${formData.tax_rate}%` },
//           { label: 'Service Charge', value: `${formData.service_charge}%` },
//         ]
//       },
//       {
//         title: 'Subscription',
//         icon: <CardIcon className="h-5 w-5" />,
//         step: 5,
//         fields: [
//           { 
//             label: 'Selected Plan', 
//             value: selectedPlan ? `${selectedPlan.plan_name} - $${parseFloat(selectedPlan.price_per_month)}/month` : 'Not selected' 
//           },
//           { 
//             label: 'Staff Limit', 
//             value: selectedPlan ? `${selectedPlan.max_staff} staff members` : '-' 
//           },
//           { 
//             label: 'Tables', 
//             value: selectedPlan ? `${selectedPlan.max_tables} tables` : '-' 
//           },
//           { 
//             label: 'Menu Items', 
//             value: selectedPlan ? `${selectedPlan.max_menu_items} items` : '-' 
//           },
//         ]
//       }
//     ]

//     return (
//       <div className="space-y-6">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h3>
//           <p className="text-gray-600">Please verify all details before submitting</p>
//         </div>

//         <div className="space-y-6">
//           {sections.map((section, index) => (
//             <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                     {section.icon}
//                   </div>
//                   <h4 className="font-bold text-gray-900">{section.title}</h4>
//                 </div>
//                 <button
//                   onClick={() => onEdit(section.step)}
//                   className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
//                 >
//                   <Edit className="h-4 w-4" />
//                   Edit
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {section.fields.map((field, fieldIndex) => (
//                   <div key={fieldIndex}>
//                     <p className="text-sm text-gray-500 mb-1">{field.label}</p>
//                     <p className="font-medium text-gray-900">{field.value || '-'}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-6">
//             <div className="flex items-center gap-3 mb-4">
//               <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//                 <FileCheck className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <h4 className="font-bold text-gray-900">Ready to Launch</h4>
//                 <p className="text-gray-600">Your hotel will be active immediately after submission</p>
//               </div>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="h-5 w-5 text-emerald-500" />
//                 <span className="text-gray-700">14-day free trial included</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="h-5 w-5 text-emerald-500" />
//                 <span className="text-gray-700">No credit card required for trial</span>
//               </div>
//               <div className="flex items-center gap-3">
//                 <CheckCircle className="h-5 w-5 text-emerald-500" />
//                 <span className="text-gray-700">Full access to all selected features</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col sm:flex-row gap-4 pt-6">
//           <button
//             onClick={onSubmit}
//             disabled={registration.loading}
//             className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//           >
//             {registration.loading ? (
//               <>
//                 <Loader2 className="h-5 w-5 animate-spin" />
//                 Creating Your Hotel...
//               </>
//             ) : (
//               <>
//                 <Sparkle className="h-5 w-5" />
//                 Complete Registration & Launch Hotel
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     )
//   }

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <HotelDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 2:
//         return <AdminDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 3:
//         return <HotelContactStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 4:
//         return <BusinessSettingsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 5:
//         return <SubscriptionStep 
//           formData={formData} 
//           updateFormData={updateFormData} 
//           errors={formErrors}
//         />
//       case 6:
//         return <TermsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 7:
//         return <ReviewStep 
//           formData={formData}
//           onEdit={handleEditStep}
//           onSubmit={handleSubmitRegistration}
//         />
//       default:
//         return null
//     }
//   }

//   // Steps configuration
//   const steps = [
//     { number: 1, title: 'Hotel Details', icon: <Building2 className="h-5 w-5" /> },
//     { number: 2, title: 'Admin Account', icon: <User className="h-5 w-5" /> },
//     { number: 3, title: 'Contact Info', icon: <MapPin className="h-5 w-5" /> },
//     { number: 4, title: 'Business Settings', icon: <Briefcase className="h-5 w-5" /> },
//     { number: 5, title: 'Subscription', icon: <CardIcon className="h-5 w-5" /> },
//     { number: 6, title: 'Terms', icon: <FileText className="h-5 w-5" /> },
//     { number: 7, title: 'Review', icon: <FileCheck className="h-5 w-5" /> },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
//       <Toaster 
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//           },
//         }}
//       />

//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                 <Hotel className="h-7 w-7 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>
            
//             <button
//               onClick={() => router.push('/')}
//               className="text-gray-600 hover:text-amber-600 font-medium px-4 py-2 hover:bg-amber-50 rounded-lg transition-colors"
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Progress Header */}
//           <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 p-6">
//             <div className="mb-6">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Hotel</h1>
//               <p className="text-gray-600">Complete the form to start your 14-day free trial</p>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-2">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium text-gray-700">
//                   Step {currentStep} of {totalSteps}
//                 </span>
//                 <span className="text-sm font-bold text-amber-600">{progressPercentage}%</span>
//               </div>
//               <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
//                   style={{ width: `${progressPercentage}%` }}
//                 />
//               </div>
//             </div>

//             {/* Step Indicators */}
//             <div className="flex justify-between mt-6">
//               {steps.map((step) => (
//                 <div
//                   key={step.number}
//                   className={`flex flex-col items-center relative ${
//                     step.number < currentStep ? 'text-emerald-600' :
//                     step.number === currentStep ? 'text-amber-600' : 'text-gray-400'
//                   }`}
//                 >
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
//                     step.number < currentStep ? 'bg-emerald-100 border-2 border-emerald-500' :
//                     step.number === currentStep ? 'bg-amber-100 border-2 border-amber-500' :
//                     'bg-gray-100 border-2 border-gray-300'
//                   }`}>
//                     {step.number < currentStep ? (
//                       <Check className="h-5 w-5" />
//                     ) : (
//                       step.icon
//                     )}
//                   </div>
//                   <span className="text-xs font-medium text-center">
//                     {step.title}
//                   </span>
//                   {step.number < totalSteps && (
//                     <div className={`absolute top-5 left-full w-full h-0.5 ${
//                       step.number < currentStep ? 'bg-emerald-500' : 'bg-gray-300'
//                     }`} style={{ width: 'calc(100% - 40px)', marginLeft: '20px' }} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form Content */}
//           <div className="p-6 md:p-8">
//             {renderStep()}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
//               <button
//                 onClick={handlePrevStep}
//                 disabled={currentStep === 1}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
//                   currentStep === 1
//                     ? 'text-gray-400 cursor-not-allowed'
//                     : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
//                 }`}
//               >
//                 <ArrowLeft className="h-5 w-5" />
//                 Previous
//               </button>

//               {currentStep < totalSteps ? (
//                 <button
//                   onClick={handleNextStep}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
//                 >
//                   Next Step
//                   <ArrowRight className="h-5 w-5" />
//                 </button>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-12 pb-8 text-center">
//         <p className="text-gray-600 text-sm">
//           By registering, you agree to our{' '}
//           <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Terms of Service</a>
//           {' '}and{' '}
//           <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Privacy Policy</a>
//         </p>
//         <p className="text-gray-500 text-sm mt-2">
//           Need help?{' '}
//           <a href="mailto:support@hotelease.com" className="text-amber-600 hover:text-amber-700 font-medium">
//             support@hotelease.com
//           </a>
//         </p>
//       </footer>
//     </div>
//   )
// }

























// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter, useSearchParams } from 'next/navigation'
// import { 
//   Hotel, 
//   ArrowLeft, 
//   ArrowRight, 
//   Check, 
//   X, 
//   Loader2,
//   Sparkle,
//   Building2,
//   User,
//   MapPin,
//   Briefcase,
//   CreditCard as CardIcon,
//   FileText,
//   FileCheck,
//   Edit,
//   CheckCircle,
//   Users,
//   Table,
//   Utensils,
//   Percent as PercentIcon,
//   Eye,
//   EyeOff,
//   Calendar as CalendarIcon,
//   Globe as GlobeIcon,
//   Wallet
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useDispatch, useSelector } from 'react-redux'
// // import { AppDispatch, RootState } from '@/lib/store'
// // import { registerHotel, clearRegistrationError } from '@/lib/features/authHotel/authHotelSlice'


// // import { useSelector, useDispatch } from 'react-redux'
// import type { AppDispatch, RootState } from '@/store/index'
// // import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'
// import { registerHotel, clearRegistrationError } from '@/store/slices/hotelAuthSlice'

// // ===================== TYPES =====================
// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface HotelRegistrationForm {
//   // Step 1: Hotel Details
//   hotel_name: string;
//   hotel_slug: string;
  
//   // Step 2: Admin Details
//   admin_email: string;
//   admin_password: string;
//   admin_confirm_password: string;
//   admin_name: string;
//   admin_phone: string;
  
//   // Step 3: Hotel Contact
//   hotel_phone: string;
//   hotel_address: string;
//   city: string;
//   country: string;
  
//   // Step 4: Business Settings
//   timezone: string;
//   currency: string;
//   tax_rate: number;
//   service_charge: number;
  
//   // Step 5: Subscription
//   subscription_plan_id: string;
  
//   // Terms & Conditions
//   accept_terms: boolean;
//   accept_marketing: boolean;
// }

// // ===================== FORM STEP COMPONENTS =====================

// // Step 1: Hotel Basic Details
// function HotelDetailsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const [slugPreview, setSlugPreview] = useState('')

//   useEffect(() => {
//     const slug = formData.hotel_name
//       .toLowerCase()
//       .replace(/[^\w\s-]/g, '')
//       .replace(/\s+/g, '-')
//       .replace(/--+/g, '-')
//       .trim()
//     setSlugPreview(slug)
//     if (!formData.hotel_slug) {
//       updateFormData('hotel_slug', slug)
//     }
//   }, [formData.hotel_name])

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Hotel Information</h3>
//         <p className="text-gray-600">Tell us about your hotel or restaurant</p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Hotel/Restaurant Name *
//           </label>
//           <input
//             type="text"
//             value={formData.hotel_name}
//             onChange={(e) => updateFormData('hotel_name', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.hotel_name ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="Grand Hotel & Resort"
//           />
//           {errors.hotel_name && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Hotel URL Slug *
//           </label>
//           <div className="flex items-center gap-3">
//             <span className="text-gray-500 whitespace-nowrap">hotelease.com/</span>
//             <input
//               type="text"
//               value={formData.hotel_slug}
//               onChange={(e) => updateFormData('hotel_slug', e.target.value)}
//               className={`flex-1 px-4 py-3 rounded-xl border ${
//                 errors.hotel_slug ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//               placeholder="grand-hotel-resort"
//             />
//           </div>
//           {errors.hotel_slug && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_slug}</p>
//           )}
//           <p className="mt-1 text-sm text-gray-500">
//             This will be your unique URL. Example: hotelease.com/{slugPreview || 'your-hotel'}
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 2: Admin Account Details
// function AdminDetailsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Admin Account</h3>
//         <p className="text-gray-600">Create your administrator account</p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Full Name *
//           </label>
//           <input
//             type="text"
//             value={formData.admin_name}
//             onChange={(e) => updateFormData('admin_name', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.admin_name ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="John Smith"
//           />
//           {errors.admin_name && (
//             <p className="mt-1 text-sm text-red-600">{errors.admin_name}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Email Address *
//           </label>
//           <input
//             type="email"
//             value={formData.admin_email}
//             onChange={(e) => updateFormData('admin_email', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.admin_email ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="admin@yourhotel.com"
//           />
//           {errors.admin_email && (
//             <p className="mt-1 text-sm text-red-600">{errors.admin_email}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Phone Number *
//           </label>
//           <input
//             type="tel"
//             value={formData.admin_phone}
//             onChange={(e) => updateFormData('admin_phone', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.admin_phone ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="+1 (555) 123-4567"
//           />
//           {errors.admin_phone && (
//             <p className="mt-1 text-sm text-red-600">{errors.admin_phone}</p>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Password *
//             </label>
//             <div className="relative">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={formData.admin_password}
//                 onChange={(e) => updateFormData('admin_password', e.target.value)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.admin_password ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             {errors.admin_password && (
//               <p className="mt-1 text-sm text-red-600">{errors.admin_password}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Confirm Password *
//             </label>
//             <div className="relative">
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 value={formData.admin_confirm_password}
//                 onChange={(e) => updateFormData('admin_confirm_password', e.target.value)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.admin_confirm_password ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
//                 placeholder="••••••••"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
//               >
//                 {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//               </button>
//             </div>
//             {errors.admin_confirm_password && (
//               <p className="mt-1 text-sm text-red-600">{errors.admin_confirm_password}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 3: Hotel Contact Information
// function HotelContactStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const countries = [
//     'US', 'CA', 'UK', 'AU', 'DE', 'FR', 'IT', 'ES', 'JP', 'CN', 'IN', 'BR', 'MX', 'AE'
//   ]

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
//         <p className="text-gray-600">Where is your hotel located?</p>
//       </div>

//       <div className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Hotel Phone Number *
//           </label>
//           <input
//             type="tel"
//             value={formData.hotel_phone}
//             onChange={(e) => updateFormData('hotel_phone', e.target.value)}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.hotel_phone ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="+1 (555) 123-4567"
//           />
//           {errors.hotel_phone && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_phone}</p>
//           )}
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700 mb-2">
//             Address *
//           </label>
//           <textarea
//             value={formData.hotel_address}
//             onChange={(e) => updateFormData('hotel_address', e.target.value)}
//             rows={3}
//             className={`w-full px-4 py-3 rounded-xl border ${
//               errors.hotel_address ? 'border-red-300' : 'border-gray-300'
//             } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             placeholder="123 Main Street, Suite 100"
//           />
//           {errors.hotel_address && (
//             <p className="mt-1 text-sm text-red-600">{errors.hotel_address}</p>
//           )}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               City *
//             </label>
//             <input
//               type="text"
//               value={formData.city}
//               onChange={(e) => updateFormData('city', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.city ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//               placeholder="New York"
//             />
//             {errors.city && (
//               <p className="mt-1 text-sm text-red-600">{errors.city}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Country *
//             </label>
//             <select
//               value={formData.country}
//               onChange={(e) => updateFormData('country', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.country ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             >
//               <option value="">Select a country</option>
//               {countries.map((country) => (
//                 <option key={country} value={country}>
//                   {country}
//                 </option>
//               ))}
//             </select>
//             {errors.country && (
//               <p className="mt-1 text-sm text-red-600">{errors.country}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 4: Business Settings
// function BusinessSettingsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   const timezones = [
//     'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
//     'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Asia/Tokyo', 'Asia/Dubai',
//     'Australia/Sydney', 'UTC'
//   ]

//   const currencies = [
//     { code: 'USD', symbol: '$', name: 'US Dollar' },
//     { code: 'EUR', symbol: '€', name: 'Euro' },
//     { code: 'GBP', symbol: '£', name: 'British Pound' },
//     { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
//     { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
//     { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
//     { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
//     { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' }
//   ]

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Settings</h3>
//         <p className="text-gray-600">Configure your business preferences</p>
//       </div>

//       <div className="space-y-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Timezone *
//             </label>
//             <select
//               value={formData.timezone}
//               onChange={(e) => updateFormData('timezone', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.timezone ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             >
//               <option value="">Select timezone</option>
//               {timezones.map((tz) => (
//                 <option key={tz} value={tz}>
//                   {tz}
//                 </option>
//               ))}
//             </select>
//             {errors.timezone && (
//               <p className="mt-1 text-sm text-red-600">{errors.timezone}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Currency *
//             </label>
//             <select
//               value={formData.currency}
//               onChange={(e) => updateFormData('currency', e.target.value)}
//               className={`w-full px-4 py-3 rounded-xl border ${
//                 errors.currency ? 'border-red-300' : 'border-gray-300'
//               } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
//             >
//               <option value="">Select currency</option>
//               {currencies.map((curr) => (
//                 <option key={curr.code} value={curr.code}>
//                   {curr.code} - {curr.name} ({curr.symbol})
//                 </option>
//               ))}
//             </select>
//             {errors.currency && (
//               <p className="mt-1 text-sm text-red-600">{errors.currency}</p>
//             )}
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Tax Rate (%) *
//             </label>
//             <div className="relative">
//               <input
//                 type="number"
//                 min="0"
//                 max="50"
//                 step="0.01"
//                 value={formData.tax_rate}
//                 onChange={(e) => updateFormData('tax_rate', parseFloat(e.target.value) || 0)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.tax_rate ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pl-12`}
//                 placeholder="10.00"
//               />
//               <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                 <PercentIcon size={20} />
//               </div>
//             </div>
//             {errors.tax_rate && (
//               <p className="mt-1 text-sm text-red-600">{errors.tax_rate}</p>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Service Charge (%) *
//             </label>
//             <div className="relative">
//               <input
//                 type="number"
//                 min="0"
//                 max="20"
//                 step="0.01"
//                 value={formData.service_charge}
//                 onChange={(e) => updateFormData('service_charge', parseFloat(e.target.value) || 0)}
//                 className={`w-full px-4 py-3 rounded-xl border ${
//                   errors.service_charge ? 'border-red-300' : 'border-gray-300'
//                 } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pl-12`}
//                 placeholder="5.00"
//               />
//               <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                 <PercentIcon size={20} />
//               </div>
//             </div>
//             {errors.service_charge && (
//               <p className="mt-1 text-sm text-red-600">{errors.service_charge}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Step 5: Subscription Plan
// function SubscriptionStep({ 
//   formData, 
//   updateFormData, 
//   errors, 
//   plans, 
//   loading 
// }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
//   plans: SubscriptionPlan[];
//   loading: boolean;
// }) {
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(formData.subscription_plan_id || null)

//   useEffect(() => {
//     if (selectedPlan) {
//       updateFormData('subscription_plan_id', selectedPlan)
//     }
//   }, [selectedPlan, updateFormData])

//   if (loading) {
//     return (
//       <div className="space-y-6">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
//           <p className="text-gray-600">Select the perfect plan for your business</p>
//         </div>
//         <div className="flex justify-center items-center py-12">
//           <Loader2 className="h-8 w-8 text-amber-500 animate-spin" />
//         </div>
//       </div>
//     )
//   }

//   const sortedPlans = [...plans].sort((a, b) => a.display_order - b.display_order)

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
//         <p className="text-gray-600">Select the perfect plan for your business</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {sortedPlans.map((plan) => (
//           <div
//             key={plan.id}
//             onClick={() => setSelectedPlan(plan.id)}
//             className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
//               selectedPlan === plan.id
//                 ? 'border-amber-500 bg-gradient-to-b from-amber-50 to-orange-50'
//                 : 'border-gray-200 hover:border-amber-300'
//             }`}
//           >
//             <div className="flex items-center justify-between mb-4">
//               <h4 className="text-xl font-bold text-gray-900">{plan.plan_name}</h4>
//               {selectedPlan === plan.id && (
//                 <div className="p-1 bg-amber-500 rounded-full">
//                   <Check className="h-4 w-4 text-white" />
//                 </div>
//               )}
//             </div>

//             <div className="mb-4">
//               <div className="flex items-baseline">
//                 <span className="text-3xl font-bold text-gray-900">
//                   ${parseFloat(plan.price_per_month)}
//                 </span>
//                 <span className="ml-2 text-gray-500">/month</span>
//               </div>
//               <p className="text-sm text-gray-600">{plan.description}</p>
//             </div>

//             <div className="space-y-2 mb-6">
//               <div className="flex items-center gap-2">
//                 <Users className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-600">Up to {plan.max_staff} staff</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Table className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-600">{plan.max_tables} tables</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Utensils className="h-4 w-4 text-gray-400" />
//                 <span className="text-sm text-gray-600">{plan.max_menu_items} menu items</span>
//               </div>
//             </div>

//             <button
//               className={`w-full py-3 rounded-lg font-semibold transition-colors ${
//                 selectedPlan === plan.id
//                   ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
//             </button>
//           </div>
//         ))}
//       </div>

//       {errors.subscription_plan_id && (
//         <p className="text-sm text-red-600">{errors.subscription_plan_id}</p>
//       )}
//     </div>
//   )
// }

// // Step 6: Terms and Conditions
// function TermsStep({ formData, updateFormData, errors }: {
//   formData: HotelRegistrationForm;
//   updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
//   errors: Record<string, string>;
// }) {
//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Terms & Conditions</h3>
//         <p className="text-gray-600">Please review and accept our terms</p>
//       </div>

//       <div className="space-y-4">
//         <div className="bg-gray-50 rounded-xl p-6">
//           <h4 className="font-semibold text-gray-900 mb-4">HotelEase Terms of Service</h4>
//           <div className="space-y-3 text-sm text-gray-600 max-h-60 overflow-y-auto pr-4">
//             <p>By using HotelEase, you agree to:</p>
//             <ul className="list-disc pl-5 space-y-2">
//               <li>Maintain accurate and current information about your hotel</li>
//               <li>Use the platform in compliance with all applicable laws</li>
//               <li>Not share your account credentials with unauthorized users</li>
//               <li>Pay subscription fees on time for continued service</li>
//               <li>Respect the intellectual property rights of HotelEase</li>
//               <li>Not attempt to reverse engineer or hack the platform</li>
//             </ul>
//             <p className="mt-4">
//               Your data will be handled according to our Privacy Policy. We use industry-standard
//               security measures to protect your information.
//             </p>
//             <p>
//               You can cancel your subscription at any time. Refunds are provided according to our
//               refund policy for unused portions of prepaid plans.
//             </p>
//           </div>
//         </div>

//         <div className="space-y-4">
//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={formData.accept_terms}
//               onChange={(e) => updateFormData('accept_terms', e.target.checked)}
//               className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
//             />
//             <div>
//               <span className="font-medium text-gray-900">I agree to the Terms of Service *</span>
//               <p className="text-sm text-gray-600 mt-1">
//                 You must accept our terms to use HotelEase
//               </p>
//             </div>
//           </label>

//           <label className="flex items-start gap-3 cursor-pointer">
//             <input
//               type="checkbox"
//               checked={formData.accept_marketing}
//               onChange={(e) => updateFormData('accept_marketing', e.target.checked)}
//               className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
//             />
//             <div>
//               <span className="font-medium text-gray-900">Send me updates and tips</span>
//               <p className="text-sm text-gray-600 mt-1">
//                 Receive emails about new features, best practices, and special offers
//               </p>
//             </div>
//           </label>
//         </div>

//         {errors.accept_terms && (
//           <p className="text-sm text-red-600">{errors.accept_terms}</p>
//         )}
//       </div>
//     </div>
//   )
// }

// // Step 7: Review and Submit
// function ReviewStep({ 
//   formData, 
//   plans, 
//   onEdit, 
//   onSubmit, 
//   isSubmitting 
// }: {
//   formData: HotelRegistrationForm;
//   plans: SubscriptionPlan[];
//   onEdit: (step: number) => void;
//   onSubmit: () => void;
//   isSubmitting: boolean;
// }) {
//   const selectedPlan = plans.find(p => p.id === formData.subscription_plan_id)

//   const sections = [
//     {
//       title: 'Hotel Details',
//       icon: <Building2 className="h-5 w-5" />,
//       step: 1,
//       fields: [
//         { label: 'Hotel Name', value: formData.hotel_name },
//         { label: 'URL Slug', value: formData.hotel_slug },
//       ]
//     },
//     {
//       title: 'Admin Account',
//       icon: <User className="h-5 w-5" />,
//       step: 2,
//       fields: [
//         { label: 'Admin Name', value: formData.admin_name },
//         { label: 'Email', value: formData.admin_email },
//         { label: 'Phone', value: formData.admin_phone },
//       ]
//     },
//     {
//       title: 'Contact Information',
//       icon: <MapPin className="h-5 w-5" />,
//       step: 3,
//       fields: [
//         { label: 'Hotel Phone', value: formData.hotel_phone },
//         { label: 'Address', value: formData.hotel_address },
//         { label: 'City', value: formData.city },
//         { label: 'Country', value: formData.country },
//       ]
//     },
//     {
//       title: 'Business Settings',
//       icon: <Briefcase className="h-5 w-5" />,
//       step: 4,
//       fields: [
//         { label: 'Timezone', value: formData.timezone },
//         { label: 'Currency', value: formData.currency },
//         { label: 'Tax Rate', value: `${formData.tax_rate}%` },
//         { label: 'Service Charge', value: `${formData.service_charge}%` },
//       ]
//     },
//     {
//       title: 'Subscription',
//       icon: <CardIcon className="h-5 w-5" />,
//       step: 5,
//       fields: [
//         { 
//           label: 'Selected Plan', 
//           value: selectedPlan ? `${selectedPlan.plan_name} - $${parseFloat(selectedPlan.price_per_month)}/month` : 'Not selected' 
//         },
//         { 
//           label: 'Staff Limit', 
//           value: selectedPlan ? `${selectedPlan.max_staff} staff members` : '-' 
//         },
//         { 
//           label: 'Tables', 
//           value: selectedPlan ? `${selectedPlan.max_tables} tables` : '-' 
//         },
//         { 
//           label: 'Menu Items', 
//           value: selectedPlan ? `${selectedPlan.max_menu_items} items` : '-' 
//         },
//       ]
//     }
//   ]

//   return (
//     <div className="space-y-6">
//       <div>
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h3>
//         <p className="text-gray-600">Please verify all details before submitting</p>
//       </div>

//       <div className="space-y-6">
//         {sections.map((section, index) => (
//           <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-3">
//                 <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                   {section.icon}
//                 </div>
//                 <h4 className="font-bold text-gray-900">{section.title}</h4>
//               </div>
//               <button
//                 onClick={() => onEdit(section.step)}
//                 className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
//               >
//                 <Edit className="h-4 w-4" />
//                 Edit
//               </button>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {section.fields.map((field, fieldIndex) => (
//                 <div key={fieldIndex}>
//                   <p className="text-sm text-gray-500 mb-1">{field.label}</p>
//                   <p className="font-medium text-gray-900">{field.value || '-'}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}

//         <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-6">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//               <FileCheck className="h-6 w-6 text-white" />
//             </div>
//             <div>
//               <h4 className="font-bold text-gray-900">Ready to Launch</h4>
//               <p className="text-gray-600">Your hotel will be active immediately after submission</p>
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <CheckCircle className="h-5 w-5 text-emerald-500" />
//               <span className="text-gray-700">14-day free trial included</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CheckCircle className="h-5 w-5 text-emerald-500" />
//               <span className="text-gray-700">No credit card required for trial</span>
//             </div>
//             <div className="flex items-center gap-3">
//               <CheckCircle className="h-5 w-5 text-emerald-500" />
//               <span className="text-gray-700">Full access to all selected features</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col sm:flex-row gap-4 pt-6">
//         <button
//           onClick={onSubmit}
//           disabled={isSubmitting}
//           className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
//         >
//           {isSubmitting ? (
//             <>
//               <Loader2 className="h-5 w-5 animate-spin" />
//               Creating Your Hotel...
//             </>
//           ) : (
//             <>
//               <Sparkle className="h-5 w-5" />
//               Complete Registration & Launch Hotel
//             </>
//           )}
//         </button>
//       </div>
//     </div>
//   )
// }

// // ===================== MAIN REGISTRATION COMPONENT =====================
// export default function HotelRegistrationPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()
//   const planId = searchParams.get('plan')
  
//   // Redux hooks
//   const dispatch = useDispatch<AppDispatch>()
//   const { registration, isAuthenticated, user } = useSelector((state: RootState) => state.authHotel)
  
//   const [plans, setPlans] = useState<SubscriptionPlan[]>([])
//   const [loading, setLoading] = useState(true)
//   const [formErrors, setFormErrors] = useState<Record<string, string>>({})
//   const [currentStep, setCurrentStep] = useState(1)
  
//   const [formData, setFormData] = useState<HotelRegistrationForm>({
//     hotel_name: '',
//     hotel_slug: '',
//     admin_email: '',
//     admin_password: '',
//     admin_confirm_password: '',
//     admin_name: '',
//     admin_phone: '',
//     hotel_phone: '',
//     hotel_address: '',
//     city: '',
//     country: 'US',
//     timezone: 'America/New_York',
//     currency: 'USD',
//     tax_rate: 10.00,
//     service_charge: 5.00,
//     subscription_plan_id: planId || '',
//     accept_terms: false,
//     accept_marketing: false,
//   })

//   useEffect(() => {
//     fetchSubscriptionPlans()
//   }, [])

//   // Show toast for registration errors
//   useEffect(() => {
//     if (registration.error) {
//       toast.error(registration.error)
//       dispatch(clearRegistrationError())
//     }
//   }, [registration.error, dispatch])

//   // Redirect to dashboard on successful registration
//   useEffect(() => {
//     if (isAuthenticated && user) {
//       toast.success('Hotel registered successfully! Redirecting to dashboard...', {
//         icon: '🎉',
//         duration: 3000,
//       })
      
//       setTimeout(() => {
//         router.push(`/dashboard/${user.hotelSlug}`)
//       }, 3000)
//     }
//   }, [isAuthenticated, user, router])

//   const fetchSubscriptionPlans = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/api/auth/subscriptions')
//       const data = await response.json()
//       if (data.success) {
//         setPlans(data.plans)
//       }
//     } catch (error) {
//       toast.error('Failed to load subscription plans')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const totalSteps = 7
//   const progressPercentage = Math.round((currentStep / totalSteps) * 100)

//   const updateFormData = (field: keyof HotelRegistrationForm, value: any) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }))
//     if (formErrors[field]) {
//       setFormErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }))
//     }
//   }

//   const validateStep = (step: number): boolean => {
//     const errors: Record<string, string> = {}

//     switch (step) {
//       case 1:
//         if (!formData.hotel_name.trim()) errors.hotel_name = 'Hotel name is required'
//         if (!formData.hotel_slug.trim()) errors.hotel_slug = 'URL slug is required'
//         else if (!/^[a-z0-9-]+$/.test(formData.hotel_slug)) {
//           errors.hotel_slug = 'Slug can only contain lowercase letters, numbers, and hyphens'
//         }
//         break
      
//       case 2:
//         if (!formData.admin_name.trim()) errors.admin_name = 'Admin name is required'
//         if (!formData.admin_email.trim()) errors.admin_email = 'Email is required'
//         else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.admin_email)) {
//           errors.admin_email = 'Invalid email format'
//         }
//         if (!formData.admin_phone.trim()) errors.admin_phone = 'Phone number is required'
//         if (!formData.admin_password) errors.admin_password = 'Password is required'
//         else if (formData.admin_password.length < 8) {
//           errors.admin_password = 'Password must be at least 8 characters'
//         }
//         if (!formData.admin_confirm_password) errors.admin_confirm_password = 'Please confirm password'
//         else if (formData.admin_password !== formData.admin_confirm_password) {
//           errors.admin_confirm_password = 'Passwords do not match'
//         }
//         break
      
//       case 3:
//         if (!formData.hotel_phone.trim()) errors.hotel_phone = 'Hotel phone is required'
//         if (!formData.hotel_address.trim()) errors.hotel_address = 'Address is required'
//         if (!formData.city.trim()) errors.city = 'City is required'
//         if (!formData.country) errors.country = 'Country is required'
//         break
      
//       case 4:
//         if (!formData.timezone) errors.timezone = 'Timezone is required'
//         if (!formData.currency) errors.currency = 'Currency is required'
//         if (formData.tax_rate < 0) errors.tax_rate = 'Tax rate cannot be negative'
//         if (formData.service_charge < 0) errors.service_charge = 'Service charge cannot be negative'
//         break
      
//       case 5:
//         if (!formData.subscription_plan_id) errors.subscription_plan_id = 'Please select a plan'
//         break
      
//       case 6:
//         if (!formData.accept_terms) errors.accept_terms = 'You must accept the terms of service'
//         break
//     }

//     setFormErrors(errors)
//     return Object.keys(errors).length === 0
//   }

//   const handleNextStep = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep(prev => Math.min(prev + 1, totalSteps))
//     }
//   }

//   const handlePrevStep = () => {
//     setCurrentStep(prev => Math.max(prev - 1, 1))
//   }

//   const handleEditStep = (step: number) => {
//     setCurrentStep(step)
//   }

//   const handleSubmitRegistration = async () => {
//     if (!validateStep(6)) {
//       toast.error('Please accept the terms of service')
//       return
//     }

//     // Prepare registration data
//     const registrationData = {
//       hotel_name: formData.hotel_name,
//       hotel_slug: formData.hotel_slug,
//       admin_email: formData.admin_email,
//       admin_password: formData.admin_password,
//       admin_name: formData.admin_name,
//       admin_phone: formData.admin_phone,
//       hotel_phone: formData.hotel_phone,
//       hotel_address: formData.hotel_address,
//       city: formData.city,
//       country: formData.country,
//       timezone: formData.timezone,
//       currency: formData.currency,
//       tax_rate: formData.tax_rate,
//       service_charge: formData.service_charge,
//       subscription_plan_id: formData.subscription_plan_id,
//     }

//     // Dispatch the registration action
//     console.log('Submitting registration data:', registrationData)
//     dispatch(registerHotel(registrationData))
//   }

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return <HotelDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 2:
//         return <AdminDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 3:
//         return <HotelContactStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 4:
//         return <BusinessSettingsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 5:
//         return <SubscriptionStep 
//           formData={formData} 
//           updateFormData={updateFormData} 
//           errors={formErrors} 
//           plans={plans}
//           loading={loading}
//         />
//       case 6:
//         return <TermsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
//       case 7:
//         return <ReviewStep 
//           formData={formData} 
//           plans={plans}
//           onEdit={handleEditStep}
//           onSubmit={handleSubmitRegistration}
//           isSubmitting={registration.loading}
//         />
//       default:
//         return null
//     }
//   }

//   // Steps configuration
//   const steps = [
//     { number: 1, title: 'Hotel Details', icon: <Building2 className="h-5 w-5" /> },
//     { number: 2, title: 'Admin Account', icon: <User className="h-5 w-5" /> },
//     { number: 3, title: 'Contact Info', icon: <MapPin className="h-5 w-5" /> },
//     { number: 4, title: 'Business Settings', icon: <Briefcase className="h-5 w-5" /> },
//     { number: 5, title: 'Subscription', icon: <CardIcon className="h-5 w-5" /> },
//     { number: 6, title: 'Terms', icon: <FileText className="h-5 w-5" /> },
//     { number: 7, title: 'Review', icon: <FileCheck className="h-5 w-5" /> },
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
//       <Toaster 
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//           },
//         }}
//       />

//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                 <Hotel className="h-7 w-7 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>
            
//             <button
//               onClick={() => router.push('/')}
//               className="text-gray-600 hover:text-amber-600 font-medium px-4 py-2 hover:bg-amber-50 rounded-lg transition-colors"
//             >
//               Back to Home
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Progress Header */}
//           <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 p-6">
//             <div className="mb-6">
//               <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Hotel</h1>
//               <p className="text-gray-600">Complete the form to start your 14-day free trial</p>
//             </div>

//             {/* Progress Bar */}
//             <div className="mb-2">
//               <div className="flex items-center justify-between mb-2">
//                 <span className="text-sm font-medium text-gray-700">
//                   Step {currentStep} of {totalSteps}
//                 </span>
//                 <span className="text-sm font-bold text-amber-600">{progressPercentage}%</span>
//               </div>
//               <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
//                 <div 
//                   className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
//                   style={{ width: `${progressPercentage}%` }}
//                 />
//               </div>
//             </div>

//             {/* Step Indicators */}
//             <div className="flex justify-between mt-6">
//               {steps.map((step) => (
//                 <div
//                   key={step.number}
//                   className={`flex flex-col items-center relative ${
//                     step.number < currentStep ? 'text-emerald-600' :
//                     step.number === currentStep ? 'text-amber-600' : 'text-gray-400'
//                   }`}
//                 >
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
//                     step.number < currentStep ? 'bg-emerald-100 border-2 border-emerald-500' :
//                     step.number === currentStep ? 'bg-amber-100 border-2 border-amber-500' :
//                     'bg-gray-100 border-2 border-gray-300'
//                   }`}>
//                     {step.number < currentStep ? (
//                       <Check className="h-5 w-5" />
//                     ) : (
//                       step.icon
//                     )}
//                   </div>
//                   <span className="text-xs font-medium text-center">
//                     {step.title}
//                   </span>
//                   {step.number < totalSteps && (
//                     <div className={`absolute top-5 left-full w-full h-0.5 ${
//                       step.number < currentStep ? 'bg-emerald-500' : 'bg-gray-300'
//                     }`} style={{ width: 'calc(100% - 40px)', marginLeft: '20px' }} />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Form Content */}
//           <div className="p-6 md:p-8">
//             {renderStep()}

//             {/* Navigation Buttons */}
//             <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
//               <button
//                 onClick={handlePrevStep}
//                 disabled={currentStep === 1 || registration.loading}
//                 className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
//                   currentStep === 1 || registration.loading
//                     ? 'text-gray-400 cursor-not-allowed'
//                     : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
//                 }`}
//               >
//                 <ArrowLeft className="h-5 w-5" />
//                 Previous
//               </button>

//               {currentStep < totalSteps ? (
//                 <button
//                   onClick={handleNextStep}
//                   disabled={registration.loading}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Next Step
//                   <ArrowRight className="h-5 w-5" />
//                 </button>
//               ) : null}
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-12 pb-8 text-center">
//         <p className="text-gray-600 text-sm">
//           By registering, you agree to our{' '}
//           <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Terms of Service</a>
//           {' '}and{' '}
//           <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Privacy Policy</a>
//         </p>
//         <p className="text-gray-500 text-sm mt-2">
//           Need help?{' '}
//           <a href="mailto:support@hotelease.com" className="text-amber-600 hover:text-amber-700 font-medium">
//             support@hotelease.com
//           </a>
//         </p>
//       </footer>
//     </div>
//   )
// }





















'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { 
  Hotel, 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  X, 
  Loader2,
  Sparkle,
  Building2,
  User,
  MapPin,
  Briefcase,
  CreditCard as CardIcon,
  FileText,
  FileCheck,
  Edit,
  CheckCircle,
  Users,
  Table,
  Utensils,
  Percent as PercentIcon,
  Eye,
  EyeOff,
  Calendar as CalendarIcon,
  Globe as GlobeIcon,
  Wallet
} from 'lucide-react'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '@/store/index'
import { registerHotel, clearHotelAuthError } from '@/store/slices/hotelAuthSlice'
import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'

// ===================== TYPES =====================
interface SubscriptionPlan {
  id: string;
  plan_name: string;
  plan_code: string;
  description: string;
  price_per_month: string;
  max_staff: number;
  max_tables: number;
  max_menu_items: number;
  features: {
    [key: string]: boolean;
  };
  display_order: number;
  is_active: boolean;
  created_at: string;
}

interface HotelRegistrationForm {
  // Step 1: Hotel Details
  hotel_name: string;
  hotel_slug: string;
  
  // Step 2: Admin Details
  admin_email: string;
  admin_password: string;
  admin_confirm_password: string;
  admin_name: string;
  admin_phone: string;
  
  // Step 3: Hotel Contact
  hotel_phone: string;
  hotel_address: string;
  city: string;
  country: string;
  
  // Step 4: Business Settings
  timezone: string;
  currency: string;
  tax_rate: number;
  service_charge: number;
  
  // Step 5: Subscription
  subscription_plan_id: string;
  
  // Terms & Conditions
  accept_terms: boolean;
  accept_marketing: boolean;
}

// ===================== FORM STEP COMPONENTS =====================

// Step 1: Hotel Basic Details
function HotelDetailsStep({ formData, updateFormData, errors }: {
  formData: HotelRegistrationForm;
  updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
  errors: Record<string, string>;
}) {
  const [slugPreview, setSlugPreview] = useState('')

  useEffect(() => {
    const slug = formData.hotel_name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-')
      .trim()
    setSlugPreview(slug)
    if (!formData.hotel_slug) {
      updateFormData('hotel_slug', slug)
    }
  }, [formData.hotel_name])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Hotel Information</h3>
        <p className="text-gray-600">Tell us about your hotel or restaurant</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hotel/Restaurant Name *
          </label>
          <input
            type="text"
            value={formData.hotel_name}
            onChange={(e) => updateFormData('hotel_name', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.hotel_name ? 'border-red-300' : 'border-gray-300'
            } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            placeholder="Grand Hotel & Resort"
          />
          {errors.hotel_name && (
            <p className="mt-1 text-sm text-red-600">{errors.hotel_name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hotel URL Slug *
          </label>
          <div className="flex items-center gap-3">
            <span className="text-gray-500 whitespace-nowrap">hotelease.com/</span>
            <input
              type="text"
              value={formData.hotel_slug}
              onChange={(e) => updateFormData('hotel_slug', e.target.value)}
              className={`flex-1 px-4 py-3 rounded-xl border ${
                errors.hotel_slug ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
              placeholder="grand-hotel-resort"
            />
          </div>
          {errors.hotel_slug && (
            <p className="mt-1 text-sm text-red-600">{errors.hotel_slug}</p>
          )}
          <p className="mt-1 text-sm text-gray-500">
            This will be your unique URL. Example: hotelease.com/{slugPreview || 'your-hotel'}
          </p>
        </div>
      </div>
    </div>
  )
}

// Step 2: Admin Account Details
function AdminDetailsStep({ formData, updateFormData, errors }: {
  formData: HotelRegistrationForm;
  updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
  errors: Record<string, string>;
}) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Admin Account</h3>
        <p className="text-gray-600">Create your administrator account</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={formData.admin_name}
            onChange={(e) => updateFormData('admin_name', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.admin_name ? 'border-red-300' : 'border-gray-300'
            } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            placeholder="John Smith"
          />
          {errors.admin_name && (
            <p className="mt-1 text-sm text-red-600">{errors.admin_name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            value={formData.admin_email}
            onChange={(e) => updateFormData('admin_email', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.admin_email ? 'border-red-300' : 'border-gray-300'
            } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            placeholder="admin@yourhotel.com"
          />
          {errors.admin_email && (
            <p className="mt-1 text-sm text-red-600">{errors.admin_email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.admin_phone}
            onChange={(e) => updateFormData('admin_phone', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.admin_phone ? 'border-red-300' : 'border-gray-300'
            } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.admin_phone && (
            <p className="mt-1 text-sm text-red-600">{errors.admin_phone}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={formData.admin_password}
                onChange={(e) => updateFormData('admin_password', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.admin_password ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.admin_password && (
              <p className="mt-1 text-sm text-red-600">{errors.admin_password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password *
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={formData.admin_confirm_password}
                onChange={(e) => updateFormData('admin_confirm_password', e.target.value)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.admin_confirm_password ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pr-12`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.admin_confirm_password && (
              <p className="mt-1 text-sm text-red-600">{errors.admin_confirm_password}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 3: Hotel Contact Information
function HotelContactStep({ formData, updateFormData, errors }: {
  formData: HotelRegistrationForm;
  updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
  errors: Record<string, string>;
}) {
  const countries = [
    'US', 'CA', 'UK', 'AU', 'DE', 'FR', 'IT', 'ES', 'JP', 'CN', 'IN', 'BR', 'MX', 'AE'
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
        <p className="text-gray-600">Where is your hotel located?</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Hotel Phone Number *
          </label>
          <input
            type="tel"
            value={formData.hotel_phone}
            onChange={(e) => updateFormData('hotel_phone', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.hotel_phone ? 'border-red-300' : 'border-gray-300'
            } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            placeholder="+1 (555) 123-4567"
          />
          {errors.hotel_phone && (
            <p className="mt-1 text-sm text-red-600">{errors.hotel_phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Address *
          </label>
          <textarea
            value={formData.hotel_address}
            onChange={(e) => updateFormData('hotel_address', e.target.value)}
            rows={3}
            className={`w-full px-4 py-3 rounded-xl border ${
              errors.hotel_address ? 'border-red-300' : 'border-gray-300'
            } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            placeholder="123 Main Street, Suite 100"
          />
          {errors.hotel_address && (
            <p className="mt-1 text-sm text-red-600">{errors.hotel_address}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              City *
            </label>
            <input
              type="text"
              value={formData.city}
              onChange={(e) => updateFormData('city', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.city ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
              placeholder="New York"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Country *
            </label>
            <select
              value={formData.country}
              onChange={(e) => updateFormData('country', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.country ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">{errors.country}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 4: Business Settings
function BusinessSettingsStep({ formData, updateFormData, errors }: {
  formData: HotelRegistrationForm;
  updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
  errors: Record<string, string>;
}) {
  const timezones = [
    'America/New_York', 'America/Chicago', 'America/Denver', 'America/Los_Angeles',
    'Europe/London', 'Europe/Paris', 'Europe/Berlin', 'Asia/Tokyo', 'Asia/Dubai',
    'Australia/Sydney', 'UTC'
  ]

  const currencies = [
    { code: 'USD', symbol: '$', name: 'US Dollar' },
    { code: 'EUR', symbol: '€', name: 'Euro' },
    { code: 'GBP', symbol: '£', name: 'British Pound' },
    { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
    { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
    { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
    { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
    { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Business Settings</h3>
        <p className="text-gray-600">Configure your business preferences</p>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone *
            </label>
            <select
              value={formData.timezone}
              onChange={(e) => updateFormData('timezone', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.timezone ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            >
              <option value="">Select timezone</option>
              {timezones.map((tz) => (
                <option key={tz} value={tz}>
                  {tz}
                </option>
              ))}
            </select>
            {errors.timezone && (
              <p className="mt-1 text-sm text-red-600">{errors.timezone}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency *
            </label>
            <select
              value={formData.currency}
              onChange={(e) => updateFormData('currency', e.target.value)}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.currency ? 'border-red-300' : 'border-gray-300'
              } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors`}
            >
              <option value="">Select currency</option>
              {currencies.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.code} - {curr.name} ({curr.symbol})
                </option>
              ))}
            </select>
            {errors.currency && (
              <p className="mt-1 text-sm text-red-600">{errors.currency}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tax Rate (%) *
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="50"
                step="0.01"
                value={formData.tax_rate}
                onChange={(e) => updateFormData('tax_rate', parseFloat(e.target.value) || 0)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.tax_rate ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pl-12`}
                placeholder="10.00"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <PercentIcon size={20} />
              </div>
            </div>
            {errors.tax_rate && (
              <p className="mt-1 text-sm text-red-600">{errors.tax_rate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Service Charge (%) *
            </label>
            <div className="relative">
              <input
                type="number"
                min="0"
                max="20"
                step="0.01"
                value={formData.service_charge}
                onChange={(e) => updateFormData('service_charge', parseFloat(e.target.value) || 0)}
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.service_charge ? 'border-red-300' : 'border-gray-300'
                } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors pl-12`}
                placeholder="5.00"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <PercentIcon size={20} />
              </div>
            </div>
            {errors.service_charge && (
              <p className="mt-1 text-sm text-red-600">{errors.service_charge}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Step 5: Subscription Plan
function SubscriptionStep({ 
  formData, 
  updateFormData, 
  errors, 
  plans, 
  loading 
}: {
  formData: HotelRegistrationForm;
  updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
  errors: Record<string, string>;
  plans: SubscriptionPlan[];
  loading: boolean;
}) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(formData.subscription_plan_id || null)

  useEffect(() => {
    if (selectedPlan) {
      updateFormData('subscription_plan_id', selectedPlan)
    }
  }, [selectedPlan, updateFormData])

  if (loading) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
          <p className="text-gray-600">Select the perfect plan for your business</p>
        </div>
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 text-amber-500 animate-spin" />
        </div>
      </div>
    )
  }

  const sortedPlans = [...plans].sort((a, b) => a.display_order - b.display_order)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Plan</h3>
        <p className="text-gray-600">Select the perfect plan for your business</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {sortedPlans.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative rounded-2xl border-2 p-6 cursor-pointer transition-all duration-300 ${
              selectedPlan === plan.id
                ? 'border-amber-500 bg-gradient-to-b from-amber-50 to-orange-50'
                : 'border-gray-200 hover:border-amber-300'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-gray-900">{plan.plan_name}</h4>
              {selectedPlan === plan.id && (
                <div className="p-1 bg-amber-500 rounded-full">
                  <Check className="h-4 w-4 text-white" />
                </div>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">
                  ${parseFloat(plan.price_per_month)}
                </span>
                <span className="ml-2 text-gray-500">/month</span>
              </div>
              <p className="text-sm text-gray-600">{plan.description}</p>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">Up to {plan.max_staff} staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Table className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{plan.max_tables} tables</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-600">{plan.max_menu_items} menu items</span>
              </div>
            </div>

            <button
              className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                selectedPlan === plan.id
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
            </button>
          </div>
        ))}
      </div>

      {errors.subscription_plan_id && (
        <p className="text-sm text-red-600">{errors.subscription_plan_id}</p>
      )}
    </div>
  )
}

// Step 6: Terms and Conditions
function TermsStep({ formData, updateFormData, errors }: {
  formData: HotelRegistrationForm;
  updateFormData: (field: keyof HotelRegistrationForm, value: any) => void;
  errors: Record<string, string>;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Terms & Conditions</h3>
        <p className="text-gray-600">Please review and accept our terms</p>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4">HotelEase Terms of Service</h4>
          <div className="space-y-3 text-sm text-gray-600 max-h-60 overflow-y-auto pr-4">
            <p>By using HotelEase, you agree to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Maintain accurate and current information about your hotel</li>
              <li>Use the platform in compliance with all applicable laws</li>
              <li>Not share your account credentials with unauthorized users</li>
              <li>Pay subscription fees on time for continued service</li>
              <li>Respect the intellectual property rights of HotelEase</li>
              <li>Not attempt to reverse engineer or hack the platform</li>
            </ul>
            <p className="mt-4">
              Your data will be handled according to our Privacy Policy. We use industry-standard
              security measures to protect your information.
            </p>
            <p>
              You can cancel your subscription at any time. Refunds are provided according to our
              refund policy for unused portions of prepaid plans.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.accept_terms}
              onChange={(e) => updateFormData('accept_terms', e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
            />
            <div>
              <span className="font-medium text-gray-900">I agree to the Terms of Service *</span>
              <p className="text-sm text-gray-600 mt-1">
                You must accept our terms to use HotelEase
              </p>
            </div>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.accept_marketing}
              onChange={(e) => updateFormData('accept_marketing', e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
            />
            <div>
              <span className="font-medium text-gray-900">Send me updates and tips</span>
              <p className="text-sm text-gray-600 mt-1">
                Receive emails about new features, best practices, and special offers
              </p>
            </div>
          </label>
        </div>

        {errors.accept_terms && (
          <p className="text-sm text-red-600">{errors.accept_terms}</p>
        )}
      </div>
    </div>
  )
}

// Step 7: Review and Submit
function ReviewStep({ 
  formData, 
  plans, 
  onEdit, 
  onSubmit, 
  isSubmitting 
}: {
  formData: HotelRegistrationForm;
  plans: SubscriptionPlan[];
  onEdit: (step: number) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}) {
  const selectedPlan = plans.find(p => p.id === formData.subscription_plan_id)

  const sections = [
    {
      title: 'Hotel Details',
      icon: <Building2 className="h-5 w-5" />,
      step: 1,
      fields: [
        { label: 'Hotel Name', value: formData.hotel_name },
        { label: 'URL Slug', value: formData.hotel_slug },
      ]
    },
    {
      title: 'Admin Account',
      icon: <User className="h-5 w-5" />,
      step: 2,
      fields: [
        { label: 'Admin Name', value: formData.admin_name },
        { label: 'Email', value: formData.admin_email },
        { label: 'Phone', value: formData.admin_phone },
      ]
    },
    {
      title: 'Contact Information',
      icon: <MapPin className="h-5 w-5" />,
      step: 3,
      fields: [
        { label: 'Hotel Phone', value: formData.hotel_phone },
        { label: 'Address', value: formData.hotel_address },
        { label: 'City', value: formData.city },
        { label: 'Country', value: formData.country },
      ]
    },
    {
      title: 'Business Settings',
      icon: <Briefcase className="h-5 w-5" />,
      step: 4,
      fields: [
        { label: 'Timezone', value: formData.timezone },
        { label: 'Currency', value: formData.currency },
        { label: 'Tax Rate', value: `${formData.tax_rate}%` },
        { label: 'Service Charge', value: `${formData.service_charge}%` },
      ]
    },
    {
      title: 'Subscription',
      icon: <CardIcon className="h-5 w-5" />,
      step: 5,
      fields: [
        { 
          label: 'Selected Plan', 
          value: selectedPlan ? `${selectedPlan.plan_name} - $${parseFloat(selectedPlan.price_per_month)}/month` : 'Not selected' 
        },
        { 
          label: 'Staff Limit', 
          value: selectedPlan ? `${selectedPlan.max_staff} staff members` : '-' 
        },
        { 
          label: 'Tables', 
          value: selectedPlan ? `${selectedPlan.max_tables} tables` : '-' 
        },
        { 
          label: 'Menu Items', 
          value: selectedPlan ? `${selectedPlan.max_menu_items} items` : '-' 
        },
      ]
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Review Your Information</h3>
        <p className="text-gray-600">Please verify all details before submitting</p>
      </div>

      <div className="space-y-6">
        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
                  {section.icon}
                </div>
                <h4 className="font-bold text-gray-900">{section.title}</h4>
              </div>
              <button
                onClick={() => onEdit(section.step)}
                className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-medium"
              >
                <Edit className="h-4 w-4" />
                Edit
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.fields.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <p className="text-sm text-gray-500 mb-1">{field.label}</p>
                  <p className="font-medium text-gray-900">{field.value || '-'}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
              <FileCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">Ready to Launch</h4>
              <p className="text-gray-600">Your hotel will be active immediately after submission</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-gray-700">14-day free trial included</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-gray-700">No credit card required for trial</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-gray-700">Full access to all selected features</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Creating Your Hotel...
            </>
          ) : (
            <>
              <Sparkle className="h-5 w-5" />
              Complete Registration & Launch Hotel
            </>
          )}
        </button>
      </div>
    </div>
  )
}

// ===================== MAIN REGISTRATION COMPONENT =====================
export default function HotelRegistrationPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planId = searchParams.get('plan')
  
  // Redux hooks
  const dispatch = useDispatch<AppDispatch>()
  const { status, error, hotel, isAuthenticated } = useSelector((state: RootState) => state.authHotel)
  const { plans, loading: plansLoading } = useSelector((state: RootState) => state.subscription) as unknown as { plans: SubscriptionPlan[], loading: boolean }
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [currentStep, setCurrentStep] = useState(1)
  
  const [formData, setFormData] = useState<HotelRegistrationForm>({
    hotel_name: '',
    hotel_slug: '',
    admin_email: '',
    admin_password: '',
    admin_confirm_password: '',
    admin_name: '',
    admin_phone: '',
    hotel_phone: '',
    hotel_address: '',
    city: '',
    country: 'US',
    timezone: 'America/New_York',
    currency: 'USD',
    tax_rate: 10.00,
    service_charge: 5.00,
    subscription_plan_id: planId || '',
    accept_terms: false,
    accept_marketing: false,
  })

  // Fetch subscription plans on component mount
  useEffect(() => {
    dispatch(fetchSubscriptionPlans())
  }, [dispatch])

  // Show toast for registration errors
  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearHotelAuthError())
    }
  }, [error, dispatch])

  // Redirect to dashboard on successful registration
  useEffect(() => {
    if (isAuthenticated && hotel) {
      toast.success('Hotel registered successfully! Redirecting to dashboard...', {
        icon: '🎉',
        duration: 3000,
      })
      
      setTimeout(() => {
        // Use hotel_slug from the registered hotel
        const hotelSlug = hotel.hotel_slug  || hotel.hotel_name?.toLowerCase().replace(/\s+/g, '-')
        if (hotelSlug) {
          router.push(`/dashboard/${hotelSlug}`)
        } else {
          router.push('/dashboard')
        }
      }, 3000)
    }
  }, [isAuthenticated, hotel, router])

  const totalSteps = 7
  const progressPercentage = Math.round((currentStep / totalSteps) * 100)

  const updateFormData = (field: keyof HotelRegistrationForm, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
    if (formErrors[field]) {
      setFormErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.hotel_name.trim()) errors.hotel_name = 'Hotel name is required'
        if (!formData.hotel_slug.trim()) errors.hotel_slug = 'URL slug is required'
        else if (!/^[a-z0-9-]+$/.test(formData.hotel_slug)) {
          errors.hotel_slug = 'Slug can only contain lowercase letters, numbers, and hyphens'
        }
        break
      
      case 2:
        if (!formData.admin_name.trim()) errors.admin_name = 'Admin name is required'
        if (!formData.admin_email.trim()) errors.admin_email = 'Email is required'
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.admin_email)) {
          errors.admin_email = 'Invalid email format'
        }
        if (!formData.admin_phone.trim()) errors.admin_phone = 'Phone number is required'
        if (!formData.admin_password) errors.admin_password = 'Password is required'
        else if (formData.admin_password.length < 8) {
          errors.admin_password = 'Password must be at least 8 characters'
        }
        if (!formData.admin_confirm_password) errors.admin_confirm_password = 'Please confirm password'
        else if (formData.admin_password !== formData.admin_confirm_password) {
          errors.admin_confirm_password = 'Passwords do not match'
        }
        break
      
      case 3:
        if (!formData.hotel_phone.trim()) errors.hotel_phone = 'Hotel phone is required'
        if (!formData.hotel_address.trim()) errors.hotel_address = 'Address is required'
        if (!formData.city.trim()) errors.city = 'City is required'
        if (!formData.country) errors.country = 'Country is required'
        break
      
      case 4:
        if (!formData.timezone) errors.timezone = 'Timezone is required'
        if (!formData.currency) errors.currency = 'Currency is required'
        if (formData.tax_rate < 0) errors.tax_rate = 'Tax rate cannot be negative'
        if (formData.service_charge < 0) errors.service_charge = 'Service charge cannot be negative'
        break
      
      case 5:
        if (!formData.subscription_plan_id) errors.subscription_plan_id = 'Please select a plan'
        break
      
      case 6:
        if (!formData.accept_terms) errors.accept_terms = 'You must accept the terms of service'
        break
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps))
    }
  }

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleEditStep = (step: number) => {
    setCurrentStep(step)
  }

  const handleSubmitRegistration = async () => {
    if (!validateStep(6)) {
      toast.error('Please accept the terms of service')
      return
    }

    // Prepare registration data
    const registrationData = {
      hotel_name: formData.hotel_name,
      hotel_slug: formData.hotel_slug,
      admin_email: formData.admin_email,
      admin_password: formData.admin_password,
      admin_name: formData.admin_name,
      admin_phone: formData.admin_phone,
      hotel_phone: formData.hotel_phone,
      hotel_address: formData.hotel_address,
      city: formData.city,
      country: formData.country,
      timezone: formData.timezone,
      currency: formData.currency,
      tax_rate: formData.tax_rate,
      service_charge: formData.service_charge,
      subscription_plan_id: formData.subscription_plan_id,
    }

    console.log('Submitting registration data:', registrationData)
    dispatch(registerHotel(registrationData))
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <HotelDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
      case 2:
        return <AdminDetailsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
      case 3:
        return <HotelContactStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
      case 4:
        return <BusinessSettingsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
      case 5:
        return <SubscriptionStep 
          formData={formData} 
          updateFormData={updateFormData} 
          errors={formErrors} 
          plans={plans as SubscriptionPlan[]}
          loading={plansLoading}
        />
      case 6:
        return <TermsStep formData={formData} updateFormData={updateFormData} errors={formErrors} />
      case 7:
        return <ReviewStep 
          formData={formData} 
          plans={plans as SubscriptionPlan[]}
          onEdit={handleEditStep}
          onSubmit={handleSubmitRegistration}
          isSubmitting={status === 'loading'}
        />
      default:
        return null
    }
  }

  // Steps configuration
  const steps = [
    { number: 1, title: 'Hotel Details', icon: <Building2 className="h-5 w-5" /> },
    { number: 2, title: 'Admin Account', icon: <User className="h-5 w-5" /> },
    { number: 3, title: 'Contact Info', icon: <MapPin className="h-5 w-5" /> },
    { number: 4, title: 'Business Settings', icon: <Briefcase className="h-5 w-5" /> },
    { number: 5, title: 'Subscription', icon: <CardIcon className="h-5 w-5" /> },
    { number: 6, title: 'Terms', icon: <FileText className="h-5 w-5" /> },
    { number: 7, title: 'Review', icon: <FileCheck className="h-5 w-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1f2937',
            color: '#fff',
            borderRadius: '12px',
            border: '1px solid #374151',
          },
        }}
      />

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => router.push('/')}>
              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                <Hotel className="h-7 w-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  HotelEase
                </span>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
              </div>
            </div>
            
            <button
              onClick={() => router.push('/')}
              className="text-gray-600 hover:text-amber-600 font-medium px-4 py-2 hover:bg-amber-50 rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Header */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-200 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Register Your Hotel</h1>
              <p className="text-gray-600">Complete the form to start your 14-day free trial</p>
            </div>

            {/* Progress Bar */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm font-bold text-amber-600">{progressPercentage}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between mt-6">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className={`flex flex-col items-center relative ${
                    step.number < currentStep ? 'text-emerald-600' :
                    step.number === currentStep ? 'text-amber-600' : 'text-gray-400'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    step.number < currentStep ? 'bg-emerald-100 border-2 border-emerald-500' :
                    step.number === currentStep ? 'bg-amber-100 border-2 border-amber-500' :
                    'bg-gray-100 border-2 border-gray-300'
                  }`}>
                    {step.number < currentStep ? (
                      <Check className="h-5 w-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="text-xs font-medium text-center">
                    {step.title}
                  </span>
                  {step.number < totalSteps && (
                    <div className={`absolute top-5 left-full w-full h-0.5 ${
                      step.number < currentStep ? 'bg-emerald-500' : 'bg-gray-300'
                    }`} style={{ width: 'calc(100% - 40px)', marginLeft: '20px' }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 md:p-8">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 mt-8 border-t border-gray-200">
              <button
                onClick={handlePrevStep}
                disabled={currentStep === 1 || status === 'loading'}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                  currentStep === 1 || status === 'loading'
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                <ArrowLeft className="h-5 w-5" />
                Previous
              </button>

              {currentStep < totalSteps ? (
                <button
                  onClick={handleNextStep}
                  disabled={status === 'loading'}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next Step
                  <ArrowRight className="h-5 w-5" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 pb-8 text-center">
        <p className="text-gray-600 text-sm">
          By registering, you agree to our{' '}
          <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Terms of Service</a>
          {' '}and{' '}
          <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Privacy Policy</a>
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Need help?{' '}
          <a href="mailto:support@hotelease.com" className="text-amber-600 hover:text-amber-700 font-medium">
            support@hotelease.com
          </a>
        </p>
      </footer>
    </div>
  )
}