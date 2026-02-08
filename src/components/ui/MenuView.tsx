// // components/dashboard/views/MenuView.tsx
// 'use client'

// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState, AppDispatch } from '@/store/index'
// import { 
//   fetchMenuItems, 
//   createMenuItem, 
//   updateMenuItem, 
//   deleteMenuItem 
// } from '@/store/slices/dashboardSlice'
// import { Plus, Filter, Download, Edit, Trash2, Eye, UtensilsCrossed, Star } from 'lucide-react'
// import MenuItemModal from './MenuItemModal'
// import ConfirmModal from './ConfirmModal'
// import toast from 'react-hot-toast'
// import LoadingSpinner from './LoadingSpinner'

// interface MenuViewProps {
//   hotelSlug: string
// }

// export default function MenuView({ hotelSlug }: MenuViewProps) {
//   const dispatch = useDispatch<AppDispatch>()
//   const { menuItemsList, loading } = useSelector((state: RootState) => state.dashboard)
  
//   const [showMenuItemModal, setShowMenuItemModal] = useState(false)
//   const [showDeleteModal, setShowDeleteModal] = useState(false)
//   const [selectedMenuItem, setSelectedMenuItem] = useState<any>(null)
//   const [editingMenuItem, setEditingMenuItem] = useState<any>(null)
//   const [filterCategory, setFilterCategory] = useState<string>('all')
//   const [filterAvailability, setFilterAvailability] = useState<string>('all')
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     if (hotelSlug) {
//       dispatch(fetchMenuItems(hotelSlug))
//     }
//   }, [hotelSlug, dispatch])

//   const handleCreateMenuItem = async (menuItemData: any) => {
//     try {
//       await dispatch(createMenuItem({ hotelSlug, menuItemData })).unwrap()
//       toast.success('Menu item created successfully')
//       setShowMenuItemModal(false)
//     } catch (error: any) {
//       toast.error(error || 'Failed to create menu item')
//     }
//   }

//   const handleUpdateMenuItem = async (menuItemData: any) => {
//     try {
//       await dispatch(updateMenuItem({ 
//         hotelSlug, 
//         menuItemId: editingMenuItem.id, 
//         menuItemData 
//       })).unwrap()
//       toast.success('Menu item updated successfully')
//       setShowMenuItemModal(false)
//       setEditingMenuItem(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to update menu item')
//     }
//   }

//   const handleDeleteMenuItem = async () => {
//     if (!selectedMenuItem) return
    
//     try {
//       await dispatch(deleteMenuItem({ hotelSlug, menuItemId: selectedMenuItem.id })).unwrap()
//       toast.success('Menu item deleted successfully')
//       setShowDeleteModal(false)
//       setSelectedMenuItem(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to delete menu item')
//     }
//   }

//   const getAvailabilityColor = (isAvailable: boolean) => {
//     return isAvailable 
//       ? 'bg-emerald-100 text-emerald-800' 
//       : 'bg-red-100 text-red-800'
//   }

//   const getPopularityColor = (popularity: number) => {
//     if (popularity >= 90) return 'bg-emerald-100 text-emerald-800'
//     if (popularity >= 70) return 'bg-blue-100 text-blue-800'
//     if (popularity >= 50) return 'bg-amber-100 text-amber-800'
//     return 'bg-gray-100 text-gray-800'
//   }

//   const categories = [...new Set(menuItemsList.map(item => item.category))]

//   const filteredMenuItems = menuItemsList.filter(item => {
//     const matchesCategory = filterCategory === 'all' || item.category === filterCategory
//     const matchesAvailability = filterAvailability === 'all' || 
//       (filterAvailability === 'available' && item.is_available) ||
//       (filterAvailability === 'unavailable' && !item.is_available)
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          item.item_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          item.category.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesCategory && matchesAvailability && matchesSearch
//   })

//   const availableCount = menuItemsList.filter(item => item.is_available).length
//   const popularCount = menuItemsList.filter(item => item.is_popular).length

//   if (loading && menuItemsList.length === 0) {
//     return <LoadingSpinner />
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-bold mb-2">Menu Items</h1>
//             <p className="text-blue-100">Manage your hotel's menu items and pricing</p>
//           </div>
//           <button 
//             onClick={() => {
//               setEditingMenuItem(null)
//               setShowMenuItemModal(true)
//             }}
//             className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//           >
//             <Plus className="h-4 w-4" />
//             Add Item
//           </button>
//         </div>
//       </div>

//       {/* Menu Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-blue-50 rounded-lg">
//               <UtensilsCrossed className="h-5 w-5 text-blue-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Total Items</p>
//               <p className="text-2xl font-bold text-gray-900">{menuItemsList.length}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-emerald-50 rounded-lg">
//               <UtensilsCrossed className="h-5 w-5 text-emerald-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Available</p>
//               <p className="text-2xl font-bold text-gray-900">{availableCount}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-amber-50 rounded-lg">
//               <Star className="h-5 w-5 text-amber-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Popular</p>
//               <p className="text-2xl font-bold text-gray-900">{popularCount}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Menu Items Table */}
//       <div className="bg-white rounded-lg border border-gray-200">
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <h3 className="font-semibold text-gray-900">All Menu Items</h3>
//             <div className="flex flex-col md:flex-row gap-2">
//               <input
//                 type="text"
//                 placeholder="Search menu items..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <select 
//                 value={filterCategory}
//                 onChange={(e) => setFilterCategory(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
//               >
//                 <option value="all">All Categories</option>
//                 {categories.map(category => (
//                   <option key={category} value={category}>{category}</option>
//                 ))}
//               </select>
//               <select 
//                 value={filterAvailability}
//                 onChange={(e) => setFilterAvailability(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
//               >
//                 <option value="all">All Status</option>
//                 <option value="available">Available</option>
//                 <option value="unavailable">Unavailable</option>
//               </select>
//               <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1">
//                 <Download className="h-4 w-4" />
//                 Export
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="text-left text-sm text-gray-600 border-b border-gray-100">
//                 <th className="p-4 font-medium">Item Name</th>
//                 <th className="p-4 font-medium">Category</th>
//                 <th className="p-4 font-medium">Price</th>
//                 <th className="p-4 font-medium">Popularity</th>
//                 <th className="p-4 font-medium">Status</th>
//                 <th className="p-4 font-medium">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredMenuItems.map((item) => (
//                 <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
//                   <td className="p-4">
//                     <div className="flex items-center gap-3">
//                       <div className={`p-2 rounded-lg ${item.is_available ? 'bg-emerald-50' : 'bg-red-50'}`}>
//                         <UtensilsCrossed className={`h-4 w-4 ${item.is_available ? 'text-emerald-600' : 'text-red-600'}`} />
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{item.name}</p>
//                         <p className="text-sm text-gray-600">{item.item_code}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="p-4">
//                     <span className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-xs font-medium">
//                       {item.category}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     <p className="font-semibold text-gray-900">${item.price.toFixed(2)}</p>
//                   </td>
//                   <td className="p-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-20 bg-gray-200 rounded-full h-2">
//                         <div 
//                           className="bg-amber-500 h-2 rounded-full" 
//                           style={{ width: `${Math.min(item.popularity || 0, 100)}%` }}
//                         ></div>
//                       </div>
//                       <span className="text-sm text-gray-700">{item.popularity || 0}%</span>
//                       {item.is_popular && (
//                         <Star className="h-3 w-3 text-amber-500" />
//                       )}
//                     </div>
//                   </td>
//                   <td className="p-4">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(item.is_available)}`}>
//                       {item.is_available ? 'Available' : 'Out of Stock'}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     <div className="flex items-center gap-2">
//                       <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded">
//                         <Eye className="h-4 w-4" />
//                       </button>
//                       <button 
//                         onClick={() => {
//                           setEditingMenuItem(item)
//                           setShowMenuItemModal(true)
//                         }}
//                         className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
//                       >
//                         <Edit className="h-4 w-4" />
//                       </button>
//                       <button 
//                         onClick={() => {
//                           setSelectedMenuItem(item)
//                           setShowDeleteModal(true)
//                         }}
//                         className="p-1.5 text-red-600 hover:bg-red-50 rounded"
//                       >
//                         <Trash2 className="h-4 w-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
          
//           {filteredMenuItems.length === 0 && (
//             <div className="text-center py-8">
//               <UtensilsCrossed className="h-12 w-12 text-gray-300 mx-auto mb-2" />
//               <p className="text-gray-600">No menu items found</p>
//               <button 
//                 onClick={() => {
//                   setEditingMenuItem(null)
//                   setShowMenuItemModal(true)
//                 }}
//                 className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
//               >
//                 Add your first menu item
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Menu Item Modal */}
//       <MenuItemModal
//         isOpen={showMenuItemModal}
//         onClose={() => {
//           setShowMenuItemModal(false)
//           setEditingMenuItem(null)
//         }}
//         onSubmit={editingMenuItem ? handleUpdateMenuItem : handleCreateMenuItem}
//         initialData={editingMenuItem}
//         hotelSlug={hotelSlug}
//       />

//       {/* Delete Confirmation Modal */}
//       <ConfirmModal
//         isOpen={showDeleteModal}
//         onClose={() => {
//           setShowDeleteModal(false)
//           setSelectedMenuItem(null)
//         }}
//         onConfirm={handleDeleteMenuItem}
//         title="Delete Menu Item"
//         message={`Are you sure you want to delete "${selectedMenuItem?.name}"? This action cannot be undone.`}
//       />
//     </div>
//   )
// }



// components/dashboard/views/MenuView.tsx
'use client'

import React, { useRef, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store/index'
import {
  fetchMenuItems,
  fetchCategories,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
} from '@/store/slices/dashboardSlice'
import {
  Plus,
  Download,
  Edit,
  Trash2,
  Eye,
  UtensilsCrossed,
  Star,
} from 'lucide-react'
import MenuItemModal from './MenuItemModal'
import ConfirmModal from './ConfirmModal'
import toast from 'react-hot-toast'
import LoadingSpinner from './LoadingSpinner'

interface MenuViewProps {
  hotelSlug: string
}

export default function MenuView({ hotelSlug }: MenuViewProps) {
  const dispatch = useDispatch<AppDispatch>()

  const { menuItemsList, categoriesList, loading } = useSelector(
    (state: RootState) => state.dashboard,
  )

  const [showMenuItemModal, setShowMenuItemModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(null) // for view + delete
  const [editingMenuItem, setEditingMenuItem] = useState<any>(null)

  const [filterCategory, setFilterCategory] = useState<string>('all')
  const [filterAvailability, setFilterAvailability] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const fetchedRef = useRef<string | null>(null)

  // ✅ fetch once per slug (prevents repeated calls / 429 issues)
  useEffect(() => {
    if (!hotelSlug) return
    if (fetchedRef.current === hotelSlug) return
    fetchedRef.current = hotelSlug

    dispatch(fetchMenuItems(hotelSlug))
    dispatch(fetchCategories())
  }, [hotelSlug, dispatch])

  const handleCreateMenuItem = async (menuItemData: any) => {
    try {
      await dispatch(createMenuItem({ hotelSlug, menuItemData })).unwrap()
      toast.success('Menu item created successfully')
      setShowMenuItemModal(false)
    } catch (error: any) {
      toast.error(error || 'Failed to create menu item')
    }
  }

  const handleUpdateMenuItem = async (menuItemData: any) => {
    try {
      await dispatch(
        updateMenuItem({
          hotelSlug,
          menuItemId: editingMenuItem.id,
          menuItemData,
        }),
      ).unwrap()
      toast.success('Menu item updated successfully')
      setShowMenuItemModal(false)
      setEditingMenuItem(null)
    } catch (error: any) {
      toast.error(error || 'Failed to update menu item')
    }
  }

  const handleDeleteMenuItem = async () => {
    if (!selectedMenuItem) return

    try {
      await dispatch(
        deleteMenuItem({ hotelSlug, menuItemId: selectedMenuItem.id }),
      ).unwrap()
      toast.success('Menu item deleted successfully')
      setShowDeleteModal(false)
      setSelectedMenuItem(null)
    } catch (error: any) {
      toast.error(error || 'Failed to delete menu item')
    }
  }

  const getAvailabilityColor = (isAvailable: boolean) => {
    return isAvailable
      ? 'bg-emerald-100 text-emerald-800'
      : 'bg-red-100 text-red-800'
  }

  // ✅ backend categories for dropdown
  const categoryOptions = useMemo(() => {
    return (Array.isArray(categoriesList) ? categoriesList : [])
      .filter((c) => c?.name?.trim())
      .sort((a, b) => (a.display_order ?? 0) - (b.display_order ?? 0))
  }, [categoriesList])

  // ✅ filter list shown in the table
  const filteredMenuItems = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()

    return (Array.isArray(menuItemsList) ? menuItemsList : []).filter((item) => {
      const matchesCategory =
        filterCategory === 'all' || item.category === filterCategory

      const matchesAvailability =
        filterAvailability === 'all' ||
        (filterAvailability === 'available' && item.is_available) ||
        (filterAvailability === 'unavailable' && !item.is_available)

      const matchesSearch =
        !q ||
        item.name?.toLowerCase().includes(q) ||
        item.item_code?.toLowerCase().includes(q) ||
        item.category?.toLowerCase().includes(q)

      return matchesCategory && matchesAvailability && matchesSearch
    })
  }, [menuItemsList, filterCategory, filterAvailability, searchTerm])

  const availableCount = menuItemsList.filter((item) => item.is_available).length
  const popularCount = menuItemsList.filter((item) => item.is_popular).length

  if (loading && menuItemsList.length === 0) {
    return <LoadingSpinner />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold mb-2">Menu Items</h1>
            <p className="text-blue-100">
              Manage your hotel's menu items and pricing
            </p>
          </div>
          <button
            onClick={() => {
              setEditingMenuItem(null)
              setShowMenuItemModal(true)
            }}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Item
          </button>
        </div>
      </div>

      {/* Menu Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <UtensilsCrossed className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="text-2xl font-bold text-gray-900">
                {menuItemsList.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <UtensilsCrossed className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Available</p>
              <p className="text-2xl font-bold text-gray-900">
                {availableCount}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Star className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Popular</p>
              <p className="text-2xl font-bold text-gray-900">
                {popularCount}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-semibold text-gray-900">All Menu Items</h3>

            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                <option value="all">All Categories</option>
                {categoryOptions.map((c) => (
                  <option key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>

              <select
                value={filterAvailability}
                onChange={(e) => setFilterAvailability(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>

              <button
                type="button"
                className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1"
                onClick={() => toast('Export coming soon')}
              >
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* ✅ THIS WAS MISSING: table rendering */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr className="text-left">
                <th className="px-4 py-3 font-semibold">Item</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Popular</th>
                <th className="px-4 py-3 font-semibold text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredMenuItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-10 text-center">
                    <p className="text-gray-600 font-medium">
                      No menu items found
                    </p>
                    <p className="text-gray-500 text-sm mt-1">
                      Try adjusting filters or add a new item.
                    </p>
                    <button
                      onClick={() => {
                        setEditingMenuItem(null)
                        setShowMenuItemModal(true)
                      }}
                      className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                    >
                      <Plus className="h-4 w-4" />
                      Add Item
                    </button>
                  </td>
                </tr>
              ) : (
                filteredMenuItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="font-semibold text-gray-900">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        Code: {item.item_code || '—'}
                      </div>
                    </td>

                    <td className="px-4 py-3">
                      <span className="text-gray-700">
                        {item.category || '—'}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span className="font-medium text-gray-900">
                        रु {Number(item.price ?? 0).toFixed(2)}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold ${getAvailabilityColor(
                          !!item.is_available,
                        )}`}
                      >
                        {item.is_available ? 'Available' : 'Unavailable'}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {item.is_popular ? (
                        <span className="inline-flex items-center gap-1 text-amber-700 font-semibold">
                          <Star className="h-4 w-4" />
                          Yes
                        </span>
                      ) : (
                        <span className="text-gray-500">No</span>
                      )}
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedMenuItem(item)
                            toast(
                              `Viewing: ${item.name} (open your view modal here)`,
                            )
                          }}
                          className="p-2 rounded-lg hover:bg-gray-100 text-gray-700"
                          title="View"
                        >
                          <Eye className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setEditingMenuItem(item)
                            setShowMenuItemModal(true)
                          }}
                          className="p-2 rounded-lg hover:bg-gray-100 text-blue-700"
                          title="Edit"
                        >
                          <Edit className="h-4 w-4" />
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedMenuItem(item)
                            setShowDeleteModal(true)
                          }}
                          className="p-2 rounded-lg hover:bg-gray-100 text-red-700"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <MenuItemModal
        isOpen={showMenuItemModal}
        onClose={() => {
          setShowMenuItemModal(false)
          setEditingMenuItem(null)
        }}
        onSubmit={editingMenuItem ? handleUpdateMenuItem : handleCreateMenuItem}
        initialData={editingMenuItem}
        hotelSlug={hotelSlug}
        categories={categoryOptions}
      />

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
          setSelectedMenuItem(null)
        }}
        onConfirm={handleDeleteMenuItem}
        title="Delete Menu Item"
        message={`Are you sure you want to delete "${selectedMenuItem?.name}"? This action cannot be undone.`}
      />
    </div>
  )
}
