// // components/dashboard/modals/StaffModal.tsx
// 'use client'

// import React, { useState, useEffect } from 'react'
// import { X } from 'lucide-react'

// interface StaffModalProps {
//   isOpen: boolean
//   onClose: () => void
//   onSubmit: (staffData: any) => void
//   initialData?: any
// }

// export default function StaffModal({ isOpen, onClose, onSubmit, initialData }: StaffModalProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     role: 'waiter',
//     phone: '',
//     email: '',
//     pin_code: '',
//     is_active: true
//   })

//   useEffect(() => {
//     if (initialData) {
//       setFormData({
//         name: initialData.name || '',
//         role: initialData.role || 'waiter',
//         phone: initialData.phone || '',
//         email: initialData.email || '',
//         pin_code: initialData.pin_code || '',
//         is_active: initialData.is_active !== undefined ? initialData.is_active : true
//       })
//     } else {
//       setFormData({
//         name: '',
//         role: 'waiter',
//         phone: '',
//         email: '',
//         pin_code: '',
//         is_active: true
//       })
//     }
//   }, [initialData])

//   if (!isOpen) return null

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     onSubmit(formData)
//   }

//   return (
//     <div className="fixed inset-0 z-40 overflow-y-auto">
//       <div className="flex items-center z-50 justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
       
//         <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
//         <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-gray-900">
//               {initialData ? 'Edit Staff Member' : 'Add New Staff'}
//             </h3>
//             <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
//               <X className="h-5 w-5" />
//             </button>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter full name"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Role *
//                 </label>
//                 <select
//                   value={formData.role}
//                   onChange={(e) => setFormData({...formData, role: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   {/* <option value="manager">Manager</option> */}
//                   <option value="waiter">Waiter</option>
//                   <option value="chef">Chef</option>
//                   <option value="cook">Cook</option>
//                   <option value="cashier">Cashier</option>
//                   <option value="cleaner">Cleaner</option>
//                   <option value="receptionist">Receptionist</option>
//                 </select>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     value={formData.phone}
//                     onChange={(e) => setFormData({...formData, phone: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Phone number"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Email address"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   PIN Code (for POS login)
//                 </label>
//                 <input
//                   type="text"
//                   maxLength={6}
//                   value={formData.pin_code}
//                   onChange={(e) => setFormData({...formData, pin_code: e.target.value.replace(/\D/g, '')})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="6-digit PIN"
//                 />
//               </div>
              
//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   id="is_active"
//                   checked={formData.is_active}
//                   onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
//                   className="h-4 w-4 text-blue-600 rounded"
//                 />
//                 <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
//                   Active Status
//                 </label>
//               </div>
//             </div>
            
//             <div className="flex justify-end gap-3 mt-6">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
//               >
//                 {initialData ? 'Update Staff' : 'Add Staff'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }





















'use client'

import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface StaffModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (staffData: any) => void
  initialData?: any
}

export default function StaffModal({ isOpen, onClose, onSubmit, initialData }: StaffModalProps) {
  const [formData, setFormData] = useState({
    full_name: '',
    role: 'waiter',
    phone: '',
    email: '',
    password: '',
    is_active: true,
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        full_name: initialData.full_name || initialData.name || '',
        role: initialData.role || 'waiter',
        phone: initialData.phone || initialData.phone_number || '',
        email: initialData.email || '',
        password: initialData.pin_code || '',
        is_active: initialData.is_active !== undefined ? initialData.is_active : true,
      })
    } else {
      setFormData({
        full_name: '',
        role: 'waiter',
        phone: '',
        email: '',
        password: '',
        is_active: true,
      })
    }
  }, [initialData])

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      full_name: '',
      role: 'waiter',
      phone: '',
      email: '',
      password: '',
      is_active: true,
    })
  }

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="relative z-[10000] w-full max-w-md rounded-2xl bg-white shadow-xl">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">
              {initialData ? 'Edit Staff Member' : 'Add New Staff'}
            </h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="px-6 py-5">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="waiter">Waiter</option>
                  <option value="chef">Chef</option>
                  <option value="cook">Cook</option>
                  <option value="cashier">Cashier</option>
                  <option value="cleaner">Cleaner</option>
                  <option value="receptionist">Receptionist</option>
                </select>
              </div> */}
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div> 

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div> */}
                 <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="waiter">Waiter</option>
                  <option value="chef">Chef</option>
                  <option value="cook">Cook</option>
                  <option value="cashier">Cashier</option>
                  <option value="cleaner">Cleaner</option>
                  <option value="receptionist">Receptionist</option>
                </select>
              </div>
                
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">password</label>
                <input
                  type="password"
                  // maxLength={6}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value.replace(/\D/g, '') })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <span className="text-sm text-gray-700">Active Status</span>
              </label>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              >
                {initialData ? 'Update Staff' : 'Add Staff'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
