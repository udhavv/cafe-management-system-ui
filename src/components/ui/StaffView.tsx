// // components/dashboard/views/StaffView.tsx
// 'use client'

// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState, AppDispatch } from '@/store/index'
// import { 
//   fetchStaff, 
//   createStaff, 
//   updateStaff, 
//   deleteStaff 
// } from '@/store/slices/dashboardSlice'
// import { Plus, Filter, Download, Edit, Trash2, Eye, Users } from 'lucide-react'
// import StaffModal from './StaffModal'
// import ConfirmModal from './ConfirmModal'
// import toast from 'react-hot-toast'
// import LoadingSpinner from './LoadingSpinner'

// interface StaffViewProps {
//   hotelSlug: string
// }

// export default function StaffView({ hotelSlug }: StaffViewProps) {
//   const dispatch = useDispatch<AppDispatch>()
//   const { staffList, loading } = useSelector((state: RootState) => state.dashboard)
  
//   const [showStaffModal, setShowStaffModal] = useState(false)
//   const [showDeleteModal, setShowDeleteModal] = useState(false)
//   const [selectedStaff, setSelectedStaff] = useState<any>(null)
//   const [editingStaff, setEditingStaff] = useState<any>(null)
//   const [filterRole, setFilterRole] = useState<string>('all')
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     if (hotelSlug) {
//       dispatch(fetchStaff(hotelSlug))
//     }
//   }, [hotelSlug, dispatch])

//   const handleCreateStaff = async (staffData: any) => {
//     try {
//       await dispatch(createStaff({ hotelSlug, staffData })).unwrap()
//       toast.success('Staff created successfully')
//       setShowStaffModal(false)
//     } catch (error: any) {
//       toast.error(error || 'Failed to create staff')
//     }
//   }

//   const handleUpdateStaff = async (staffData: any) => {
//     try {
//       await dispatch(updateStaff({ 
//         hotelSlug, 
//         staffId: editingStaff.id, 
//         staffData 
//       })).unwrap()
//       toast.success('Staff updated successfully')
//       setShowStaffModal(false)
//       setEditingStaff(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to update staff')
//     }
//   }

//   const handleDeleteStaff = async () => {
//     if (!selectedStaff) return
    
//     try {
//       await dispatch(deleteStaff({ hotelSlug, staffId: selectedStaff.id })).unwrap()
//       toast.success('Staff deleted successfully')
//       setShowDeleteModal(false)
//       setSelectedStaff(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to delete staff')
//     }
//   }

//   const getRoleColor = (role: string) => {
//     switch(role) {
//       case 'manager': return 'bg-purple-100 text-purple-800';
//       case 'waiter': return 'bg-blue-100 text-blue-800';
//       case 'chef': return 'bg-amber-100 text-amber-800';
//       case 'cook': return 'bg-orange-100 text-orange-800';
//       case 'cashier': return 'bg-emerald-100 text-emerald-800';
//       case 'cleaner': return 'bg-gray-100 text-gray-800';
//       case 'receptionist': return 'bg-pink-100 text-pink-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch(status) {
//       case 'active': return 'bg-emerald-100 text-emerald-800';
//       case 'inactive': return 'bg-gray-100 text-gray-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   }

//   const filteredStaff = staffList.filter(staff => {
//     const matchesRole = filterRole === 'all' || staff.role === filterRole
//     const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          staff.staff_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          staff.role.toLowerCase().includes(searchTerm.toLowerCase())
//     return matchesRole && matchesSearch
//   })

//   const activeStaffCount = staffList.filter(s => s.is_active).length
//   const inactiveStaffCount = staffList.filter(s => !s.is_active).length

//   if (loading && staffList.length === 0) {
//     return <LoadingSpinner />
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-bold mb-2">Staff Management</h1>
//             <p className="text-blue-100">Manage your hotel staff and their permissions</p>
//           </div>
//           <button 
//             onClick={() => {
//               setEditingStaff(null)
//               setShowStaffModal(true)
//             }}
//             className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//           >
//             <Plus className="h-4 w-4" />
//             Add Staff
//           </button>
//         </div>
//       </div>

//       {/* Staff Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-blue-50 rounded-lg">
//               <Users className="h-5 w-5 text-blue-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Total Staff</p>
//               <p className="text-2xl font-bold text-gray-900">{staffList.length}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-emerald-50 rounded-lg">
//               <Users className="h-5 w-5 text-emerald-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Active</p>
//               <p className="text-2xl font-bold text-gray-900">{activeStaffCount}</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-amber-50 rounded-lg">
//               <Users className="h-5 w-5 text-amber-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">On Duty</p>
//               <p className="text-2xl font-bold text-gray-900">8</p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-gray-50 rounded-lg">
//               <Users className="h-5 w-5 text-gray-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Inactive</p>
//               <p className="text-2xl font-bold text-gray-900">{inactiveStaffCount}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Staff Table */}
//       <div className="bg-white rounded-lg border border-gray-200">
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <h3 className="font-semibold text-gray-900">All Staff Members</h3>
//             <div className="flex flex-col md:flex-row gap-2">
//               <input
//                 type="text"
//                 placeholder="Search staff..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <select 
//                 value={filterRole}
//                 onChange={(e) => setFilterRole(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
//               >
//                 <option value="all">All Roles</option>
//                 <option value="manager">Manager</option>
//                 <option value="waiter">Waiter</option>
//                 <option value="chef">Chef</option>
//                 <option value="cook">Cook</option>
//                 <option value="cashier">Cashier</option>
//                 <option value="cleaner">Cleaner</option>
//                 <option value="receptionist">Receptionist</option>
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
//                 <th className="p-4 font-medium">Staff Member</th>
//                 <th className="p-4 font-medium">Role</th>
//                 <th className="p-4 font-medium">Contact</th>
//                 <th className="p-4 font-medium">Status</th>
//                 <th className="p-4 font-medium">Today's Orders</th>
//                 <th className="p-4 font-medium">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredStaff.map((staff) => (
//                 <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
//                   <td className="p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold">
//                         {staff.name.charAt(0)}
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{staff.name}</p>
//                         <p className="text-sm text-gray-600">{staff.staff_code}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="p-4">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(staff.role)}`}>
//                       {staff.role.charAt(0).toUpperCase() + staff.role.slice(1)}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     <div className="space-y-1">
//                       {staff.phone && (
//                         <p className="text-sm text-gray-700">{staff.phone}</p>
//                       )}
//                       {staff.email && (
//                         <p className="text-sm text-gray-600 truncate max-w-[200px]">{staff.email}</p>
//                       )}
//                     </div>
//                   </td>
//                   <td className="p-4">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(staff.status)}`}>
//                       {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
//                     </span>
//                   </td>
//                   <td className="p-4">
//                     <p className="font-medium text-gray-900">{staff.today_orders || 0}</p>
//                   </td>
//                   <td className="p-4">
//                     <div className="flex items-center gap-2">
//                       <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded">
//                         <Eye className="h-4 w-4" />
//                       </button>
//                       <button 
//                         onClick={() => {
//                           setEditingStaff(staff)
//                           setShowStaffModal(true)
//                         }}
//                         className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
//                       >
//                         <Edit className="h-4 w-4" />
//                       </button>
//                       <button 
//                         onClick={() => {
//                           setSelectedStaff(staff)
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
          
//           {filteredStaff.length === 0 && (
//             <div className="text-center py-8">
//               <Users className="h-12 w-12 text-gray-300 mx-auto mb-2" />
//               <p className="text-gray-600">No staff members found</p>
//               <button 
//                 onClick={() => {
//                   setEditingStaff(null)
//                   setShowStaffModal(true)
//                 }}
//                 className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
//               >
//                 Add your first staff member
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Staff Modal */}
//       <StaffModal
//         isOpen={showStaffModal}
//         onClose={() => {
//           setShowStaffModal(false)
//           setEditingStaff(null)
//         }}
//         onSubmit={editingStaff ? handleUpdateStaff : handleCreateStaff}
//         initialData={editingStaff}
//       />

//       {/* Delete Confirmation Modal */}
//       <ConfirmModal
//         isOpen={showDeleteModal}
//         onClose={() => {
//           setShowDeleteModal(false)
//           setSelectedStaff(null)
//         }}
//         onConfirm={handleDeleteStaff}
//         title="Delete Staff"
//         message={`Are you sure you want to delete ${selectedStaff?.name}? This action cannot be undone.`}
//       />
      
//     </div>
//   )
// }






















// components/dashboard/views/StaffView.tsx
'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store/index'
import { fetchStaff, createStaff, updateStaff, deleteStaff } from '@/store/slices/dashboardSlice'
import { Plus, Download, Edit, Trash2, Eye,EyeOff ,Users } from 'lucide-react'
import StaffModal from './StaffModal'
import ConfirmModal from './ConfirmModal'
import toast from 'react-hot-toast'
import LoadingSpinner from './LoadingSpinner'

interface StaffViewProps {
  hotelSlug: string
}

export default function StaffView({ hotelSlug }: StaffViewProps) {
  const dispatch = useDispatch<AppDispatch>()

  // ✅ IMPORTANT: don't use global "loading" if you can.
  // If you still have only "loading" in slice, keep it.
  const { staffList, loading } = useSelector((state: RootState) => state.dashboard)

  // ✅ safe array always
  const staffArray = useMemo(() => (Array.isArray(staffList) ? staffList : []), [staffList])

  const [showStaffModal, setShowStaffModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedStaff, setSelectedStaff] = useState<any>(null)
  const [editingStaff, setEditingStaff] = useState<any>(null)
  const [filterRole, setFilterRole] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [seePin, setSeePin]= useState(false);

  useEffect(() => {
    if (hotelSlug) {
      dispatch(fetchStaff(hotelSlug))
    }
  }, [hotelSlug, dispatch])

  // ✅ map modal fields -> backend fields
  const mapToBackend = (staffData: any) => {
    return {
      full_name: staffData.full_name,
      role: staffData.role,
      phone_number: staffData.phone || null, // backend wants phone_number
      email: staffData.email || null,
      password: staffData.password || null,
      is_active: staffData.is_active,
    }
  }

  const handleCreateStaff = async (staffData: any) => {
    try {
      console.log('creating staff;- ', staffData)
      await dispatch(createStaff({ hotelSlug, staffData: mapToBackend(staffData) })).unwrap()
      toast.success('Staff created successfully')
      setShowStaffModal(false)
    } catch (error: any) {
      toast.error(error || 'Failed to create staff')
    }
  }

  const handleUpdateStaff = async (staffData: any) => {
    if (!editingStaff?.id) return
    try {
      await dispatch(
        updateStaff({
          hotelSlug,
          staffId: editingStaff.id,
          staffData: mapToBackend(staffData),
        })
      ).unwrap()
      toast.success('Staff updated successfully')
      setShowStaffModal(false)
      setEditingStaff(null)
    } catch (error: any) {
      toast.error(error || 'Failed to update staff')
    }
  }

  const handleDeleteStaff = async () => {
    if (!selectedStaff?.id) return
    try {
      console.log('deleting staff;- ', selectedStaff)
      await dispatch(deleteStaff({ hotelSlug, staffId: selectedStaff.id })).unwrap()
      toast.success('Staff deleted successfully')
      setShowDeleteModal(false)
      setSelectedStaff(null)
    } catch (error: any) {
      toast.error(error || 'Failed to delete staff')
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'manager':
        return 'bg-purple-100 text-purple-800'
      case 'waiter':
        return 'bg-blue-100 text-blue-800'
      case 'chef':
        return 'bg-amber-100 text-amber-800'
      case 'cook':
        return 'bg-orange-100 text-orange-800'
      case 'cashier':
        return 'bg-emerald-100 text-emerald-800'
      case 'cleaner':
        return 'bg-gray-100 text-gray-800'
      case 'receptionist':
        return 'bg-pink-100 text-pink-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-emerald-100 text-emerald-800'
      case 'inactive':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const filteredStaff = useMemo(() => {
    const q = searchTerm.trim().toLowerCase()
    return staffArray.filter((staff: any) => {
      const matchesRole = filterRole === 'all' || staff.role === filterRole
      const matchesSearch =
        !q ||
        (staff.name || '').toLowerCase().includes(q) ||
        (staff.staff_code || '').toLowerCase().includes(q) ||
        (staff.role || '').toLowerCase().includes(q)
      return matchesRole && matchesSearch
    })
  }, [staffArray, filterRole, searchTerm])

  const activeStaffCount = useMemo(() => staffArray.filter((s: any) => s.status === 'active').length, [staffArray])
  const inactiveStaffCount = useMemo(() => staffArray.filter((s: any) => s.status === 'inactive').length, [staffArray])

  if (loading && staffArray.length === 0) {
    return <LoadingSpinner />
  }
  console.log('staff array:- ', staffArray);


  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold mb-2">Staff Management</h1>
            <p className="text-blue-100">Manage your hotel staff and their permissions</p>
          </div>
          <button
            onClick={() => {
              setEditingStaff(null)
              setShowStaffModal(true)
            }}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Staff
          </button>
        </div>
      </div>

      {/* Staff Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Staff</p>
              <p className="text-2xl font-bold text-gray-900">{staffArray.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Users className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">{activeStaffCount}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Users className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">On Duty</p>
              <p className="text-2xl font-bold text-gray-900">—</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg">
              <Users className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Inactive</p>
              <p className="text-2xl font-bold text-gray-900">{inactiveStaffCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-semibold text-gray-900">All Staff Members</h3>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Search staff..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select
                value={filterRole}
                onChange={(e) => setFilterRole(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                <option value="all">All Roles</option>
                <option value="waiter">Waiter</option>
                <option value="chef">Chef</option>
                <option value="cook">Cook</option>
                <option value="cashier">Cashier</option>
                <option value="cleaner">Cleaner</option>
                <option value="receptionist">Receptionist</option>
              </select>
              <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b border-gray-100">
                <th className="p-4 font-medium">Staff Member</th>
                <th className="p-4 font-medium">Role</th>
                <th className="p-4 font-medium">Contact</th>
                <th className="p-4 font-medium">Status</th>

                <th className="p-4 font-medium">Today's Orders</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStaff.map((staff: any) => (
                <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold">
                        {(staff.name || 'U').charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{staff.name}</p>
                        <p className="text-sm text-gray-600">{staff.staff_code}</p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(staff.role)}`}>
                      {staff.role.charAt(0).toUpperCase() + staff.role.slice(1)}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="space-y-1">
                      {staff.phone && <p className="text-sm text-gray-700">{staff.phone}</p>}
                      {staff.email && <p className="text-sm text-gray-600 truncate max-w-[200px]">{staff.email}</p>}
                    </div>
                  </td>

                  <td className="p-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(staff.status)}`}>
                      {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
                    </span>
                  </td>

                 
                  <td className="p-4">
                    <p className="font-medium text-gray-900">{staff.today_orders ?? 0}</p>
                  </td>

                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" onClick={() => setSeePin(!seePin)}>
                        {seePin ? <EyeOff className="h-4 w-4" onClick={() => setSeePin(false)} /> : <Eye className="h-4 w-4" onClick={() => setSeePin(true)} />}
                      </button>

                      <button
                        onClick={() => {
                          // convert list shape -> modal shape
                          setEditingStaff({
                            ...staff,
                            full_name: staff.name,
                            phone: staff.phone ?? '',
                          })
                          setShowStaffModal(true)
                        }}
                        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
                      >
                        <Edit className="h-4 w-4" />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedStaff(staff)
                          setShowDeleteModal(true)
                        }}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredStaff.length === 0 && (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-600">No staff members found</p>
              <button
                onClick={() => {
                  setEditingStaff(null)
                  setShowStaffModal(true)
                }}
                className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Add your first staff member
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Render StaffModal ONLY ONCE */}
      <StaffModal
        isOpen={showStaffModal}
        onClose={() => {
          setShowStaffModal(false)
          setEditingStaff(null)
        }}
        onSubmit={editingStaff ? handleUpdateStaff : handleCreateStaff}
        initialData={editingStaff}
      />

      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
          setSelectedStaff(null)
        }}
        onConfirm={handleDeleteStaff}
        title="Delete Staff"
        message={`Are you sure you want to delete ${selectedStaff?.name || ''}? This action cannot be undone.`}
      />
    </div>
  )
}


































// // components/dashboard/views/StaffView.tsx
// 'use client'

// import React, { useEffect, useMemo, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState, AppDispatch } from '@/store/index'
// import {
//   fetchStaff,
//   createStaff,
//   updateStaff,
//   deleteStaff,
// } from '@/store/slices/dashboardSlice'
// import { Plus, Download, Edit, Trash2, Eye, Users } from 'lucide-react'
// import StaffModal from './StaffModal'
// import ConfirmModal from './ConfirmModal'
// import toast from 'react-hot-toast'
// import LoadingSpinner from './LoadingSpinner'

// interface StaffViewProps {
//   hotelSlug: string
// }

// export default function StaffView({ hotelSlug }: StaffViewProps) {
//   const dispatch = useDispatch<AppDispatch>()

//   const { staffList, loading } = useSelector((state: RootState) => state.dashboard)

//   // ✅ protect: make sure it's always array
//   const staffArray = useMemo(() => (Array.isArray(staffList) ? staffList : []), [staffList])

//   const [showStaffModal, setShowStaffModal] = useState(false)
//   const [showDeleteModal, setShowDeleteModal] = useState(false)
//   const [selectedStaff, setSelectedStaff] = useState<any>(null)
//   const [editingStaff, setEditingStaff] = useState<any>(null)
//   const [filterRole, setFilterRole] = useState<string>('all')
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     if (hotelSlug) {
//       dispatch(fetchStaff(hotelSlug))
//     }
//   }, [hotelSlug, dispatch])

//   const handleCreateStaff = async (staffData: any) => {
//     try {
//       // StaffModal gives full_name, phone, etc
//       await dispatch(createStaff({ hotelSlug, staffData })).unwrap()
//       toast.success('Staff created successfully')
//       setShowStaffModal(false)
//     } catch (error: any) {
//       toast.error(error || 'Failed to create staff')
//     }
//   }

//   const handleUpdateStaff = async (staffData: any) => {
//     try {
//       await dispatch(
//         updateStaff({
//           hotelSlug,
//           staffId: editingStaff.id,
//           staffData,
//         })
//       ).unwrap()
//       toast.success('Staff updated successfully')
//       setShowStaffModal(false)
//       setEditingStaff(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to update staff')
//     }
//   }

//   const handleDeleteStaff = async () => {
//     if (!selectedStaff) return

//     try {
//       await dispatch(deleteStaff({ hotelSlug, staffId: selectedStaff.id })).unwrap()
//       toast.success('Staff deleted successfully')
//       setShowDeleteModal(false)
//       setSelectedStaff(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to delete staff')
//     }
//   }

//   const getRoleColor = (role: string) => {
//     switch (role) {
//       case 'manager':
//         return 'bg-purple-100 text-purple-800'
//       case 'waiter':
//         return 'bg-blue-100 text-blue-800'
//       case 'chef':
//         return 'bg-amber-100 text-amber-800'
//       case 'cook':
//         return 'bg-orange-100 text-orange-800'
//       case 'cashier':
//         return 'bg-emerald-100 text-emerald-800'
//       case 'cleaner':
//         return 'bg-gray-100 text-gray-800'
//       case 'receptionist':
//         return 'bg-pink-100 text-pink-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'active':
//         return 'bg-emerald-100 text-emerald-800'
//       case 'inactive':
//         return 'bg-gray-100 text-gray-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const filteredStaff = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase()

//     return staffArray.filter((staff) => {
//       const roleOk = filterRole === 'all' || staff.role === filterRole

//       // ✅ backend sends role + staff_code + name
//       const name = (staff.name || '').toLowerCase()
//       const code = (staff.staff_code || '').toLowerCase()
//       const role = (staff.role || '').toLowerCase()

//       const searchOk = !q || name.includes(q) || code.includes(q) || role.includes(q)
//       return roleOk && searchOk
//     })
//   }, [staffArray, filterRole, searchTerm])

//   const activeStaffCount = useMemo(() => staffArray.filter((s) => s.is_active).length, [staffArray])
//   const inactiveStaffCount = useMemo(() => staffArray.filter((s) => !s.is_active).length, [staffArray])

//   if (loading) {
//     return <LoadingSpinner />
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-bold mb-2">Staff Management</h1>
//             <p className="text-blue-100">Manage your hotel staff and their permissions</p>
//           </div>
//           <button
//             onClick={() => {
//               setEditingStaff(null)
//               setShowStaffModal(true)
//             }}
//             className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//           >
//             <Plus className="h-4 w-4" />
//             Add Staff
//           </button>
//         </div>
//       </div>

//       {/* Staff Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-blue-50 rounded-lg">
//               <Users className="h-5 w-5 text-blue-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Total Staff</p>
//               <p className="text-2xl font-bold text-gray-900">{staffArray.length}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-emerald-50 rounded-lg">
//               <Users className="h-5 w-5 text-emerald-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Active</p>
//               <p className="text-2xl font-bold text-gray-900">{activeStaffCount}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-amber-50 rounded-lg">
//               <Users className="h-5 w-5 text-amber-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">On Duty</p>
//               <p className="text-2xl font-bold text-gray-900">—</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-gray-50 rounded-lg">
//               <Users className="h-5 w-5 text-gray-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Inactive</p>
//               <p className="text-2xl font-bold text-gray-900">{inactiveStaffCount}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Staff Table */}
//       <div className="bg-white rounded-lg border border-gray-200">
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <h3 className="font-semibold text-gray-900">All Staff Members</h3>
//             <div className="flex flex-col md:flex-row gap-2">
//               <input
//                 type="text"
//                 placeholder="Search staff..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <select
//                 value={filterRole}
//                 onChange={(e) => setFilterRole(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
//               >
//                 <option value="all">All Roles</option>
//                 <option value="manager">Manager</option>
//                 <option value="waiter">Waiter</option>
//                 <option value="chef">Chef</option>
//                 <option value="cook">Cook</option>
//                 <option value="cashier">Cashier</option>
//                 <option value="cleaner">Cleaner</option>
//                 <option value="receptionist">Receptionist</option>
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
//                 <th className="p-4 font-medium">Staff Member</th>
//                 <th className="p-4 font-medium">Role</th>
//                 <th className="p-4 font-medium">Contact</th>
//                 <th className="p-4 font-medium">Status</th>
//                 <th className="p-4 font-medium">Today's Orders</th>
//                 <th className="p-4 font-medium">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredStaff.map((staff) => (
//                 <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
//                   <td className="p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold">
//                         {(staff.name || 'U').charAt(0)}
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{staff.name}</p>
//                         <p className="text-sm text-gray-600">{staff.staff_code}</p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="p-4">
//                     <span
//                       className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(staff.role)}`}
//                     >
//                       {staff.role.charAt(0).toUpperCase() + staff.role.slice(1)}
//                     </span>
//                   </td>

//                   <td className="p-4">
//                     <div className="space-y-1">
//                       {staff.phone && <p className="text-sm text-gray-700">{staff.phone}</p>}
//                       {staff.email && (
//                         <p className="text-sm text-gray-600 truncate max-w-[200px]">{staff.email}</p>
//                       )}
//                     </div>
//                   </td>

//                   <td className="p-4">
//                     <span
//                       className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
//                         staff.status,
//                       )}`}
//                     >
//                       {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
//                     </span>
//                   </td>

//                   <td className="p-4">
//                     <p className="font-medium text-gray-900">{staff.today_orders ?? 0}</p>
//                   </td>

//                   <td className="p-4">
//                     <div className="flex items-center gap-2">
//                       <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded">
//                         <Eye className="h-4 w-4" />
//                       </button>

//                       <button
//                         onClick={() => {
//                           // ✅ convert backend name -> modal expects full_name
//                           setEditingStaff({
//                             ...staff,
//                             full_name: staff.name,
//                           })
//                           setShowStaffModal(true)
//                         }}
//                         className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
//                       >
//                         <Edit className="h-4 w-4" />
//                       </button>

//                       <button
//                         onClick={() => {
//                           setSelectedStaff(staff)
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

//           {filteredStaff.length === 0 && (
//             <div className="text-center py-8">
//               <Users className="h-12 w-12 text-gray-300 mx-auto mb-2" />
//               <p className="text-gray-600">No staff members found</p>
//               <button
//                 onClick={() => {
//                   setEditingStaff(null)
//                   setShowStaffModal(true)
//                 }}
//                 className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
//               >
//                 Add your first staff member
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Staff Modal */}
//       <StaffModal
//         isOpen={showStaffModal}
//         onClose={() => {
//           setShowStaffModal(false)
//           setEditingStaff(null)
//         }}
//         onSubmit={editingStaff ? handleUpdateStaff : handleCreateStaff}
//         initialData={editingStaff}
//       />

//       {/* Delete Confirmation Modal */}
//       <ConfirmModal
//         isOpen={showDeleteModal}
//         onClose={() => {
//           setShowDeleteModal(false)
//           setSelectedStaff(null)
//         }}
//         onConfirm={handleDeleteStaff}
//         title="Delete Staff"
//         message={`Are you sure you want to delete ${selectedStaff?.name || ''}? This action cannot be undone.`}
//       />
//     </div>
//   )
// }












// // components/dashboard/views/StaffView.tsx
// 'use client'

// import React, { useEffect, useMemo, useRef, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { RootState, AppDispatch } from '@/store/index'
// import { fetchStaff, createStaff, updateStaff, deleteStaff } from '@/store/slices/dashboardSlice'
// import { Plus, Download, Edit, Trash2, Eye, Users } from 'lucide-react'
// import StaffModal from './StaffModal'
// import ConfirmModal from './ConfirmModal'
// import toast from 'react-hot-toast'
// import LoadingSpinner from './LoadingSpinner'

// interface StaffViewProps {
//   hotelSlug: string
// }

// export default function StaffView({ hotelSlug }: StaffViewProps) {
//   const dispatch = useDispatch<AppDispatch>()

//   // ✅ IMPORTANT: also read error (if you have it in state)
//   const { staffList, loading, error } = useSelector((state: RootState) => state.dashboard)

//   // ✅ protect: always array
//   const staffArray = useMemo(() => (Array.isArray(staffList) ? staffList : []), [staffList])

//   // ✅ prevents double-fetch in Next.js dev Strict Mode
//   const didFetchRef = useRef(false)

//   // ✅ local flag so spinner only shows on first load
//   const [initialLoading, setInitialLoading] = useState(true)

//   const [showStaffModal, setShowStaffModal] = useState(false)
//   const [showDeleteModal, setShowDeleteModal] = useState(false)
//   const [selectedStaff, setSelectedStaff] = useState<any>(null)
//   const [editingStaff, setEditingStaff] = useState<any>(null)
//   const [filterRole, setFilterRole] = useState<string>('all')
//   const [searchTerm, setSearchTerm] = useState('')

//   useEffect(() => {
//     if (!hotelSlug) return

//     // ✅ guard so effect won't refetch continuously (Strict Mode safe)
//     if (didFetchRef.current) return
//     didFetchRef.current = true

//     setInitialLoading(true)

//     dispatch(fetchStaff(hotelSlug))
//       .unwrap()
//       .catch((e: any) => {
//         toast.error(e || 'Failed to load staff')
//       })
//       .finally(() => {
//         setInitialLoading(false)
//       })
//   }, [hotelSlug, dispatch])

//   // Optional: show backend error if present
//   useEffect(() => {
//     if (error) toast.error(error)
//   }, [error])

//   const handleCreateStaff = async (staffData: any) => {
//     try {
//       await dispatch(createStaff({ hotelSlug, staffData })).unwrap()
//       toast.success('Staff created successfully')
//       setShowStaffModal(false)
//     } catch (error: any) {
//       toast.error(error || 'Failed to create staff')
//     }
//   }

//   const handleUpdateStaff = async (staffData: any) => {
//     try {
//       await dispatch(updateStaff({ hotelSlug, staffId: editingStaff.id, staffData })).unwrap()
//       toast.success('Staff updated successfully')
//       setShowStaffModal(false)
//       setEditingStaff(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to update staff')
//     }
//   }

//   const handleDeleteStaff = async () => {
//     if (!selectedStaff) return

//     try {
//       await dispatch(deleteStaff({ hotelSlug, staffId: selectedStaff.id })).unwrap()
//       toast.success('Staff deleted successfully')
//       setShowDeleteModal(false)
//       setSelectedStaff(null)
//     } catch (error: any) {
//       toast.error(error || 'Failed to delete staff')
//     }
//   }

//   const getRoleColor = (role: string) => {
//     switch (role) {
//       case 'manager':
//         return 'bg-purple-100 text-purple-800'
//       case 'waiter':
//         return 'bg-blue-100 text-blue-800'
//       case 'chef':
//         return 'bg-amber-100 text-amber-800'
//       case 'cook':
//         return 'bg-orange-100 text-orange-800'
//       case 'cashier':
//         return 'bg-emerald-100 text-emerald-800'
//       case 'cleaner':
//         return 'bg-gray-100 text-gray-800'
//       case 'receptionist':
//         return 'bg-pink-100 text-pink-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case 'active':
//         return 'bg-emerald-100 text-emerald-800'
//       case 'inactive':
//         return 'bg-gray-100 text-gray-800'
//       default:
//         return 'bg-gray-100 text-gray-800'
//     }
//   }

//   const filteredStaff = useMemo(() => {
//     const q = searchTerm.trim().toLowerCase()

//     return staffArray.filter((staff: any) => {
//       const roleOk = filterRole === 'all' || staff.role === filterRole

//       const name = (staff.name || '').toLowerCase()
//       const code = (staff.staff_code || '').toLowerCase()
//       const role = (staff.role || '').toLowerCase()

//       const searchOk = !q || name.includes(q) || code.includes(q) || role.includes(q)
//       return roleOk && searchOk
//     })
//   }, [staffArray, filterRole, searchTerm])

//   const activeStaffCount = useMemo(() => staffArray.filter((s: any) => s.is_active).length, [staffArray])
//   const inactiveStaffCount = useMemo(() => staffArray.filter((s: any) => !s.is_active).length, [staffArray])

//   // ✅ only show spinner on FIRST load
//   if (initialLoading) {
//     return <LoadingSpinner />
//   }

//   return (
//     <div className="space-y-6">
//       {/* Header */}
//       <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//           <div>
//             <h1 className="text-xl font-bold mb-2">Staff Management</h1>
//             <p className="text-blue-100">Manage your hotel staff and their permissions</p>
//           </div>

//           <button
//             onClick={() => {
//               setEditingStaff(null)
//               setShowStaffModal(true)
//             }}
//             className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
//             disabled={loading}
//           >
//             <Plus className="h-4 w-4" />
//             Add Staff
//           </button>
//         </div>
//       </div>

//       {/* Staff Stats */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-blue-50 rounded-lg">
//               <Users className="h-5 w-5 text-blue-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Total Staff</p>
//               <p className="text-2xl font-bold text-gray-900">{staffArray.length}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-emerald-50 rounded-lg">
//               <Users className="h-5 w-5 text-emerald-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Active</p>
//               <p className="text-2xl font-bold text-gray-900">{activeStaffCount}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-amber-50 rounded-lg">
//               <Users className="h-5 w-5 text-amber-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">On Duty</p>
//               <p className="text-2xl font-bold text-gray-900">—</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg border border-gray-200 p-4">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-gray-50 rounded-lg">
//               <Users className="h-5 w-5 text-gray-600" />
//             </div>
//             <div>
//               <p className="text-sm text-gray-600">Inactive</p>
//               <p className="text-2xl font-bold text-gray-900">{inactiveStaffCount}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Staff Table */}
//       <div className="bg-white rounded-lg border border-gray-200">
//         <div className="p-4 border-b border-gray-200">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//             <h3 className="font-semibold text-gray-900">All Staff Members</h3>
//             <div className="flex flex-col md:flex-row gap-2">
//               <input
//                 type="text"
//                 placeholder="Search staff..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               />
//               <select
//                 value={filterRole}
//                 onChange={(e) => setFilterRole(e.target.value)}
//                 className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
//               >
//                 <option value="all">All Roles</option>
//                 <option value="manager">Manager</option>
//                 <option value="waiter">Waiter</option>
//                 <option value="chef">Chef</option>
//                 <option value="cook">Cook</option>
//                 <option value="cashier">Cashier</option>
//                 <option value="cleaner">Cleaner</option>
//                 <option value="receptionist">Receptionist</option>
//               </select>

//               <button
//                 className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1 disabled:opacity-60"
//                 disabled={loading}
//               >
//                 <Download className="h-4 w-4" />
//                 Export
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* ✅ Small inline loading (optional), not full page */}
//         {loading && (
//           <div className="p-4 text-sm text-gray-600 border-b border-gray-100">
//             Refreshing staff...
//           </div>
//         )}

//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="text-left text-sm text-gray-600 border-b border-gray-100">
//                 <th className="p-4 font-medium">Staff Member</th>
//                 <th className="p-4 font-medium">Role</th>
//                 <th className="p-4 font-medium">Contact</th>
//                 <th className="p-4 font-medium">Status</th>
//                 <th className="p-4 font-medium">Today's Orders</th>
//                 <th className="p-4 font-medium">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredStaff.map((staff: any) => (
//                 <tr key={staff.id} className="border-b border-gray-100 hover:bg-gray-50">
//                   <td className="p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="h-8 w-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold">
//                         {(staff.name || 'U').charAt(0)}
//                       </div>
//                       <div>
//                         <p className="font-medium text-gray-900">{staff.name}</p>
//                         <p className="text-sm text-gray-600">{staff.staff_code}</p>
//                       </div>
//                     </div>
//                   </td>

//                   <td className="p-4">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(staff.role)}`}>
//                       {staff.role.charAt(0).toUpperCase() + staff.role.slice(1)}
//                     </span>
//                   </td>

//                   <td className="p-4">
//                     <div className="space-y-1">
//                       {staff.phone && <p className="text-sm text-gray-700">{staff.phone}</p>}
//                       {staff.email && <p className="text-sm text-gray-600 truncate max-w-[200px]">{staff.email}</p>}
//                     </div>
//                   </td>

//                   <td className="p-4">
//                     <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(staff.status)}`}>
//                       {staff.status.charAt(0).toUpperCase() + staff.status.slice(1)}
//                     </span>
//                   </td>

//                   <td className="p-4">
//                     <p className="font-medium text-gray-900">{staff.today_orders ?? 0}</p>
//                   </td>

//                   <td className="p-4">
//                     <div className="flex items-center gap-2">
//                       <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded">
//                         <Eye className="h-4 w-4" />
//                       </button>

//                       <button
//                         onClick={() => {
//                           setEditingStaff({ ...staff, full_name: staff.name })
//                           setShowStaffModal(true)
//                         }}
//                         className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
//                       >
//                         <Edit className="h-4 w-4" />
//                       </button>

//                       <button
//                         onClick={() => {
//                           setSelectedStaff(staff)
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

//           {/* ✅ Correct empty state */}
//           {filteredStaff.length === 0 && (
//             <div className="text-center py-8">
//               <Users className="h-12 w-12 text-gray-300 mx-auto mb-2" />
//               <p className="text-gray-600">No staff members found</p>
//               <button
//                 onClick={() => {
//                   setEditingStaff(null)
//                   setShowStaffModal(true)
//                 }}
//                 className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
//               >
//                 Add your first staff member
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <StaffModal
//         isOpen={showStaffModal}
//         onClose={() => {
//           setShowStaffModal(false)
//           setEditingStaff(null)
//         }}
//         onSubmit={editingStaff ? handleUpdateStaff : handleCreateStaff}
//         initialData={editingStaff}
//       />

//       <ConfirmModal
//         isOpen={showDeleteModal}
//         onClose={() => {
//           setShowDeleteModal(false)
//           setSelectedStaff(null)
//         }}
//         onConfirm={handleDeleteStaff}
//         title="Delete Staff"
//         message={`Are you sure you want to delete ${selectedStaff?.name || ''}? This action cannot be undone.`}
//       />
//     </div>
//   )
// }
