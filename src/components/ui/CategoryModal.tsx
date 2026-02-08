// // components/dashboard/modals/CategoryModal.tsx
// 'use client'

// import React, { useState, useEffect } from 'react'
// import { X } from 'lucide-react'

// interface CategoryModalProps {
//   isOpen: boolean
//   onClose: () => void
//   onSubmit: (categoryData: any) => void
//   initialData?: any
// }

// export default function CategoryModal({ isOpen, onClose, onSubmit, initialData }: CategoryModalProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     display_order: 0,
//     is_active: true,
//     image_url: ''
//   })

//   useEffect(() => {
//     if (initialData) {
//       setFormData({
//         name: initialData.name || '',
//         description: initialData.description || '',
//         display_order: initialData.display_order || 0,
//         is_active: initialData.is_active !== undefined ? initialData.is_active : true,
//         image_url: initialData.image_url || ''
//       })
//     } else {
//       setFormData({
//         name: '',
//         description: '',
//         display_order: 0,
//         is_active: true,
//         image_url: ''
//       })
//     }
//   }, [initialData])

//   if (!isOpen) return null

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     onSubmit(formData)
//   }

//   return (
//     <div className="fixed inset-0 z-[9999] overflow-y-auto isolate">
//       <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
//         <div className="inline-block relative z-[10000] w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-gray-900">
//               {initialData ? 'Edit Category' : 'Add New Category'}
//             </h3>
//             <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
//               <X className="h-5 w-5" />
//             </button>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Category Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter category name"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Description
//                 </label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) => setFormData({...formData, description: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter category description"
//                   rows={3}
//                 />
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Display Order
//                   </label>
//                   <input
//                     type="number"
//                     min="0"
//                     value={formData.display_order}
//                     onChange={(e) => setFormData({...formData, display_order: parseInt(e.target.value) || 0})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Order number"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Image URL
//                   </label>
//                   <input
//                     type="url"
//                     value={formData.image_url}
//                     onChange={(e) => setFormData({...formData, image_url: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="https://example.com/image.jpg"
//                   />
//                 </div>
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
//                 {initialData ? 'Update Category' : 'Add Category'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }



















// components/dashboard/modals/CategoryModal.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface CategoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (categoryData: any) => void
  initialData?: any
}

export default function CategoryModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
}: CategoryModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    display_order: 0,
    is_active: true,
    image_url: '',
  })

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        description: initialData.description || '',
        display_order: initialData.display_order || 0,
        is_active: initialData.is_active !== undefined ? initialData.is_active : true,
        image_url: initialData.image_url || '',
      })
    } else {
      setFormData({
        name: '',
        description: '',
        display_order: 0,
        is_active: true,
        image_url: '',
      })
    }
  }, [initialData])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="fixed inset-0 z-[9999] isolate overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-500/75"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Centered modal container */}
      <div className="flex min-h-screen items-center justify-center px-4 py-10">
        {/* Modal panel */}
        <div
          role="dialog"
          aria-modal="true"
          className="relative z-[10000] w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {initialData ? 'Edit Category' : 'Add New Category'}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="rounded p-1 hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Category Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter category name"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter category description"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Display Order
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={formData.display_order}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        display_order: parseInt(e.target.value, 10) || 0,
                      })
                    }
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="Order number"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.image_url}
                    onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="h-4 w-4 rounded text-blue-600"
                />
                <label htmlFor="is_active" className="ml-2 text-sm text-gray-700">
                  Active Status
                </label>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                {initialData ? 'Update Category' : 'Add Category'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
