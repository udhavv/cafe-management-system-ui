// components/dashboard/views/KitchenView.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store/index'
import { 
  fetchKitchenOrders,
  updateKitchenItemStatus 
} from '@/store/slices/dashboardSlice'
import { ChefHat, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import LoadingSpinner from './LoadingSpinner'

interface KitchenViewProps {
  hotelSlug: string
}

export default function KitchenView({ hotelSlug }: KitchenViewProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { kitchenOrdersList, loading } = useSelector((state: RootState) => state.dashboard)
  
  const [filterStatus, setFilterStatus] = useState<string>('all')

  useEffect(() => {
    if (hotelSlug) {
      dispatch(fetchKitchenOrders(hotelSlug))
    }
    
    // Refresh kitchen orders every 30 seconds
    const interval = setInterval(() => {
      if (hotelSlug) {
        dispatch(fetchKitchenOrders(hotelSlug))
      }
    }, 30000)
    
    return () => clearInterval(interval)
  }, [hotelSlug, dispatch])

  const handleUpdateItemStatus = async (orderId: string, itemId: string, status: string) => {
    try {
      await dispatch(updateKitchenItemStatus({ 
        hotelSlug, 
        orderId, 
        itemId, 
        status: status as any 
      })).unwrap()
      toast.success('Order item status updated')
    } catch (error: any) {
      toast.error('Failed to update status')
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'ready': return 'bg-emerald-100 text-emerald-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'ready': return <CheckCircle className="h-4 w-4" />;
      case 'preparing': return <Clock className="h-4 w-4" />;
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  }

  const filteredOrders = kitchenOrdersList.filter(order => {
    if (filterStatus === 'all') return true
    return order.status === filterStatus
  })

  const pendingCount = kitchenOrdersList.filter(o => o.status === 'pending').length
  const preparingCount = kitchenOrdersList.filter(o => o.status === 'preparing').length
  const readyCount = kitchenOrdersList.filter(o => o.status === 'ready').length

  if (loading && kitchenOrdersList.length === 0) {
    return <LoadingSpinner />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold mb-2">Kitchen Display System</h1>
            <p className="text-orange-100">Real-time kitchen order management</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-orange-200">Kitchen Time</p>
              <p className="text-lg font-semibold">
                {new Date().toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit',
                  second: '2-digit',
                  hour12: true 
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kitchen Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Preparing</p>
              <p className="text-2xl font-bold text-gray-900">{preparingCount}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Ready</p>
              <p className="text-2xl font-bold text-gray-900">{readyCount}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kitchen Orders Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredOrders.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <ChefHat className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900">No Active Orders</h3>
            <p className="text-gray-600 mt-2">All caught up! No pending kitchen orders.</p>
          </div>
        ) : (
          filteredOrders.map((order) => (
            <div key={order.id} className={`
              rounded-xl border p-4 transition-all hover:shadow-lg
              ${order.status === 'ready' ? 'border-emerald-200 bg-emerald-50' :
                order.status === 'preparing' ? 'border-blue-200 bg-blue-50' :
                'border-gray-200 bg-white'}
            `}>
              {/* Order Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{order.order_number}</h3>
                  <p className="text-sm text-gray-600">Table {order.table_number}</p>
                </div>
                <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                  {getStatusIcon(order.status)}
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </div>
              </div>
              
              {/* Order Time */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-600">{order.time}</span>
                </div>
                {order.chef_name && (
                  <div className="text-sm text-gray-700">
                    Chef: <span className="font-medium">{order.chef_name}</span>
                  </div>
                )}
              </div>
              
              {/* Order Items */}
              <div className="space-y-2 mb-4">
                <h4 className="font-medium text-gray-900">Items:</h4>
                <ul className="space-y-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">{item}</span>
                      <select
                        className={`text-xs px-2 py-1 rounded border-none ${getStatusColor(order.status)}`}
                        value={order.status}
                        onChange={(e) => handleUpdateItemStatus(order.order_id, index.toString(), e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="preparing">Preparing</option>
                        <option value="ready">Ready</option>
                      </select>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={() => handleUpdateItemStatus(order.order_id, 'all', 'preparing')}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Start Cooking
                </button>
                <button
                  onClick={() => handleUpdateItemStatus(order.order_id, 'all', 'ready')}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Mark Ready
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}