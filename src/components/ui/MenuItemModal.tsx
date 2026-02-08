// // components/dashboard/modals/MenuItemModal.tsx
// 'use client'

// import React, { useState, useEffect } from 'react'
// import { X } from 'lucide-react'

// interface MenuItemModalProps {
//   isOpen: boolean
//   onClose: () => void
//   onSubmit: (menuItemData: any) => void
//   initialData?: any
//   hotelSlug: string
// }

// export default function MenuItemModal({ isOpen, onClose, onSubmit, initialData, hotelSlug }: MenuItemModalProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category_id: '',
//     price: 0,
//     cost_price: 0,
//     preparation_time: 15,
//     is_available: true,
//     is_popular: false,
//     is_vegetarian: false,
//     dietary_info: '',
//     image_url: ''
//   })

//   // Fetch categories for dropdown
//   const [categories, setCategories] = useState([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         setLoading(true)
//         // You'll need to implement this API call
//         // const response = await fetch(`/api/hotel/${hotelSlug}/menu/categories`)
//         // const data = await response.json()
//         // setCategories(data.categories || [])
//       } catch (error) {
//         console.error('Failed to fetch categories:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (isOpen && hotelSlug) {
//       fetchCategories()
//     }
//   }, [isOpen, hotelSlug])

//   useEffect(() => {
//     if (initialData) {
//       setFormData({
//         name: initialData.name || '',
//         description: initialData.description || '',
//         category_id: initialData.category_id || '',
//         price: initialData.price || 0,
//         cost_price: initialData.cost_price || 0,
//         preparation_time: initialData.preparation_time || 15,
//         is_available: initialData.is_available !== undefined ? initialData.is_available : true,
//         is_popular: initialData.is_popular || false,
//         is_vegetarian: initialData.is_vegetarian || false,
//         dietary_info: initialData.dietary_info || '',
//         image_url: initialData.image_url || ''
//       })
//     } else {
//       setFormData({
//         name: '',
//         description: '',
//         category_id: '',
//         price: 0,
//         cost_price: 0,
//         preparation_time: 15,
//         is_available: true,
//         is_popular: false,
//         is_vegetarian: false,
//         dietary_info: '',
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
//     <div className="fixed inset-0 z-50 overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
//         <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
//         <div className="inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
//           <div className="flex items-center justify-between mb-4">
//             <h3 className="text-lg font-semibold text-gray-900">
//               {initialData ? 'Edit Menu Item' : 'Add New Menu Item'}
//             </h3>
//             <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
//               <X className="h-5 w-5" />
//             </button>
//           </div>
          
//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Item Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({...formData, name: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter item name"
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
//                   placeholder="Enter item description"
//                   rows={2}
//                 />
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Category *
//                   </label>
//                   <select
//                     required
//                     value={formData.category_id}
//                     onChange={(e) => setFormData({...formData, category_id: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   >
//                     <option value="">Select category</option>
//                     {categories.map((category: any) => (
//                       <option key={category.id} value={category.id}>
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Preparation Time (minutes)
//                   </label>
//                   <input
//                     type="number"
//                     min="1"
//                     value={formData.preparation_time}
//                     onChange={(e) => setFormData({...formData, preparation_time: parseInt(e.target.value) || 15})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   />
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Selling Price *
//                   </label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     min="0"
//                     required
//                     value={formData.price}
//                     onChange={(e) => setFormData({...formData, price: parseFloat(e.target.value) || 0})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="0.00"
//                   />
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Cost Price
//                   </label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     min="0"
//                     value={formData.cost_price}
//                     onChange={(e) => setFormData({...formData, cost_price: parseFloat(e.target.value) || 0})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="0.00"
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Dietary Information
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.dietary_info}
//                   onChange={(e) => setFormData({...formData, dietary_info: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="e.g., Gluten-free, Vegan"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Image URL
//                 </label>
//                 <input
//                   type="url"
//                   value={formData.image_url}
//                   onChange={(e) => setFormData({...formData, image_url: e.target.value})}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="https://example.com/image.jpg"
//                 />
//               </div>
              
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="is_available"
//                     checked={formData.is_available}
//                     onChange={(e) => setFormData({...formData, is_available: e.target.checked})}
//                     className="h-4 w-4 text-blue-600 rounded"
//                   />
//                   <label htmlFor="is_available" className="ml-2 text-sm text-gray-700">
//                     Available
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="is_popular"
//                     checked={formData.is_popular}
//                     onChange={(e) => setFormData({...formData, is_popular: e.target.checked})}
//                     className="h-4 w-4 text-blue-600 rounded"
//                   />
//                   <label htmlFor="is_popular" className="ml-2 text-sm text-gray-700">
//                     Popular
//                   </label>
//                 </div>
                
//                 <div className="flex items-center">
//                   <input
//                     type="checkbox"
//                     id="is_vegetarian"
//                     checked={formData.is_vegetarian}
//                     onChange={(e) => setFormData({...formData, is_vegetarian: e.target.checked})}
//                     className="h-4 w-4 text-blue-600 rounded"
//                   />
//                   <label htmlFor="is_vegetarian" className="ml-2 text-sm text-gray-700">
//                     Vegetarian
//                   </label>
//                 </div>
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
//                 {initialData ? 'Update Item' : 'Add Item'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }







// // components/dashboard/modals/MenuItemModal.tsx
// 'use client'

// import React, { useEffect, useState } from 'react'
// import { X } from 'lucide-react'

// interface MenuItemModalProps {
//   isOpen: boolean
//   onClose: () => void
//   onSubmit: (menuItemData: any) => void
//   initialData?: any
//   hotelSlug: string
// }

// export default function MenuItemModal({
//   isOpen,
//   onClose,
//   onSubmit,
//   initialData,
//   hotelSlug,
// }: MenuItemModalProps) {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     category_id: '',
//     price: 0,
//     cost_price: 0,
//     preparation_time: 15,
//     is_available: true,
//     is_popular: false,
//     is_vegetarian: false,
//     dietary_info: '',
//     image_url: '',
//   })

//   // Fetch categories for dropdown
//   const [categories, setCategories] = useState<any[]>([])
//   const [loading, setLoading] = useState(false)

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         setLoading(true)

//         // TODO: replace with your real API call (redux or fetch)
//         // const res = await fetch(`/api/hotel/data/menu/categories`)
//         // const json = await res.json()
//         // setCategories(json?.categories ?? json?.data ?? [])

//         // fallback (keeps UI usable even if API is not wired)
//         setCategories([])
//       } catch (error) {
//         console.error('Failed to fetch categories:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (isOpen && hotelSlug) fetchCategories()
//   }, [isOpen, hotelSlug])

//   useEffect(() => {
//     if (initialData) {
//       setFormData({
//         name: initialData.name || '',
//         description: initialData.description || '',
//         category_id: initialData.category_id || '',
//         price: initialData.price || 0,
//         cost_price: initialData.cost_price || 0,
//         preparation_time: initialData.preparation_time || 15,
//         is_available: initialData.is_available !== undefined ? initialData.is_available : true,
//         is_popular: !!initialData.is_popular,
//         is_vegetarian: !!initialData.is_vegetarian,
//         dietary_info: initialData.dietary_info || '',
//         image_url: initialData.image_url || '',
//       })
//     } else {
//       setFormData({
//         name: '',
//         description: '',
//         category_id: '',
//         price: 0,
//         cost_price: 0,
//         preparation_time: 15,
//         is_available: true,
//         is_popular: false,
//         is_vegetarian: false,
//         dietary_info: '',
//         image_url: '',
//       })
//     }
//   }, [initialData, isOpen])

//   if (!isOpen) return null

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     onSubmit(formData)
//   }

//   return (
//     <div className="fixed inset-0 z-[9999] isolate overflow-y-auto">
//       {/* Backdrop */}
//       <div
//         className="fixed inset-0 bg-gray-500/75"
//         onClick={onClose}
//         aria-hidden="true"
//       />

//       {/* Center container */}
//       <div className="flex min-h-screen items-center justify-center px-4 py-10">
//         {/* Modal panel */}
//         <div
//           role="dialog"
//           aria-modal="true"
//           className="relative z-[10000] w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 text-left shadow-xl"
//         >
//           <div className="mb-4 flex items-center justify-between">
//             <h3 className="text-lg font-semibold text-gray-900">
//               {initialData ? 'Edit Menu Item' : 'Add New Menu Item'}
//             </h3>
//             <button type="button" onClick={onClose} className="rounded p-1 hover:bg-gray-100">
//               <X className="h-5 w-5" />
//             </button>
//           </div>

//           <form onSubmit={handleSubmit}>
//             <div className="space-y-4">
//               <div>
//                 <label className="mb-1 block text-sm font-medium text-gray-700">
//                   Item Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   value={formData.name}
//                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                   className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter item name"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-sm font-medium text-gray-700">
//                   Description
//                 </label>
//                 <textarea
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="Enter item description"
//                   rows={2}
//                 />
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     Category *
//                   </label>
//                   <select
//                     required
//                     value={formData.category_id}
//                     onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
//                     className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
//                     disabled={loading}
//                   >
//                     <option value="">
//                       {loading ? 'Loading categories...' : 'Select category'}
//                     </option>

//                     {categories.map((category: any) => (
//                       <option key={category.id} value={category.id}>
//                         {category.name}
//                       </option>
//                     ))}
//                   </select>

//                   {!loading && categories.length === 0 && (
//                     <p className="mt-1 text-xs text-amber-600">
//                       No categories loaded yet (wire the API / redux fetch).
//                     </p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     Preparation Time (minutes)
//                   </label>
//                   <input
//                     type="number"
//                     min={1}
//                     value={formData.preparation_time}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         preparation_time: parseInt(e.target.value, 10) || 15,
//                       })
//                     }
//                     className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     Selling Price *
//                   </label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     min={0}
//                     required
//                     value={formData.price}
//                     onChange={(e) =>
//                       setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })
//                     }
//                     className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     placeholder="0.00"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-1 block text-sm font-medium text-gray-700">
//                     Cost Price
//                   </label>
//                   <input
//                     type="number"
//                     step="0.01"
//                     min={0}
//                     value={formData.cost_price}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         cost_price: parseFloat(e.target.value) || 0,
//                       })
//                     }
//                     className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                     placeholder="0.00"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="mb-1 block text-sm font-medium text-gray-700">
//                   Dietary Information
//                 </label>
//                 <input
//                   type="text"
//                   value={formData.dietary_info}
//                   onChange={(e) => setFormData({ ...formData, dietary_info: e.target.value })}
//                   className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="e.g., Gluten-free, Vegan"
//                 />
//               </div>

//               <div>
//                 <label className="mb-1 block text-sm font-medium text-gray-700">
//                   Image URL
//                 </label>
//                 <input
//                   type="url"
//                   value={formData.image_url}
//                   onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
//                   className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
//                   placeholder="https://example.com/image.jpg"
//                 />
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     checked={formData.is_available}
//                     onChange={(e) => setFormData({ ...formData, is_available: e.target.checked })}
//                     className="h-4 w-4 rounded text-blue-600"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">Available</span>
//                 </label>

//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     checked={formData.is_popular}
//                     onChange={(e) => setFormData({ ...formData, is_popular: e.target.checked })}
//                     className="h-4 w-4 rounded text-blue-600"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">Popular</span>
//                 </label>

//                 <label className="flex items-center">
//                   <input
//                     type="checkbox"
//                     checked={formData.is_vegetarian}
//                     onChange={(e) =>
//                       setFormData({ ...formData, is_vegetarian: e.target.checked })
//                     }
//                     className="h-4 w-4 rounded text-blue-600"
//                   />
//                   <span className="ml-2 text-sm text-gray-700">Vegetarian</span>
//                 </label>
//               </div>
//             </div>

//             <div className="mt-6 flex justify-end gap-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
//               >
//                 {initialData ? 'Update Item' : 'Add Item'}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }



// components/dashboard/views/MenuItemModal.tsx
'use client'

import React, { useEffect, useMemo, useState } from 'react'

type CategoryLite = {
  id: string
  name: string
  is_active: boolean
}

interface MenuItemModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: any) => void
  initialData?: any
  hotelSlug: string // keep for compatibility
  categories: CategoryLite[]
}

export default function MenuItemModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  hotelSlug, // not used, but kept
  categories,
}: MenuItemModalProps) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [price, setPrice] = useState<number>(0)
  const [taxRate, setTaxRate] = useState<number>(0)
  const [preparationTime, setPreparationTime] = useState<number>(0)
  const [isAvailable, setIsAvailable] = useState<boolean>(true)
  const [isPopular, setIsPopular] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string>('')

  const activeCategories = useMemo(
    () => (Array.isArray(categories) ? categories.filter((c) => c.is_active) : []),
    [categories],
  )

  useEffect(() => {
    if (!isOpen) return

    setName(initialData?.name ?? '')
    setDescription(initialData?.description ?? '')
    setCategoryId(initialData?.category_id ?? '') // ✅ use id
    setPrice(Number(initialData?.price ?? 0))
    setTaxRate(Number(initialData?.tax_rate ?? 0))
    setPreparationTime(Number(initialData?.preparation_time ?? 0))
    setIsAvailable(Boolean(initialData?.is_available ?? true))
    setIsPopular(Boolean(initialData?.is_popular ?? false))
    setImageUrl(initialData?.image_url ?? '')
  }, [isOpen, initialData])

  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload = {
      name: name.trim(),
      description: description.trim() || null,
      category_id: categoryId, // ✅ backend expects this
      price: Number(price) || 0,
      tax_rate: Number(taxRate) || 0,
      preparation_time: preparationTime ? Number(preparationTime) : null,
      is_available: !!isAvailable,
      is_popular: !!isPopular,
      image_url: imageUrl.trim() || null,
    }

    onSubmit(payload)
  }

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
    >
      <div className="w-full max-w-lg rounded-xl bg-white shadow-xl border border-gray-200">
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {initialData ? 'Edit Menu Item' : 'Add Menu Item'}
            </h2>
            <p className="text-sm text-gray-600">
              {initialData ? 'Update your menu item details.' : 'Create a new menu item.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50"
          >
            Close
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Item Name <span className="text-red-500">*</span>
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="e.g. Chicken Momo"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select category</option>
              {activeCategories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>

            {activeCategories.length === 0 && (
              <p className="mt-1 text-xs text-amber-600">
                No active categories found. Create a category first.
              </p>
            )}
          </div>

          {/* Price + Tax */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tax Rate (%)
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                value={taxRate}
                onChange={(e) => setTaxRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Prep time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preparation Time (minutes)
            </label>
            <input
              type="number"
              min="0"
              value={preparationTime}
              onChange={(e) => setPreparationTime(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Optional description..."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Toggles */}
          <div className="flex flex-col md:flex-row gap-3">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={isAvailable}
                onChange={(e) => setIsAvailable(e.target.checked)}
                className="h-4 w-4"
              />
              Available
            </label>

            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={isPopular}
                onChange={(e) => setIsPopular(e.target.checked)}
                className="h-4 w-4"
              />
              Popular
            </label>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
              disabled={!categoryId}
            >
              {initialData ? 'Update Item' : 'Create Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
