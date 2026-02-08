// components/dashboard/views/OrdersView.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '@/store/index'
import { 
  fetchOrders, 
  createOrder, 
  updateOrderStatus, 
  deleteOrder,
  updatePaymentStatus 
} from '@/store/slices/dashboardSlice'
import { Plus, Filter, Download, Edit, Trash2, Eye, Receipt, CreditCard } from 'lucide-react'
import OrderModal from './OrderModal'
import ConfirmModal from './ConfirmModal'
import toast from 'react-hot-toast'
import LoadingSpinner from './LoadingSpinner'

interface OrdersViewProps {
  hotelSlug: string
}

export default function OrdersView({ hotelSlug }: OrdersViewProps) {
  const dispatch = useDispatch<AppDispatch>()
  const { ordersList, loading } = useSelector((state: RootState) => state.dashboard)
  
  const [showOrderModal, setShowOrderModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState<any>(null)
  const [editingOrder, setEditingOrder] = useState<any>(null)
  const [filterStatus, setFilterStatus] = useState<string>('all')
  const [filterPayment, setFilterPayment] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (hotelSlug) {
      dispatch(fetchOrders(hotelSlug))
    }
  }, [hotelSlug, dispatch])

  const handleCreateOrder = async (orderData: any) => {
    try {
      await dispatch(createOrder({ hotelSlug, orderData })).unwrap()
      toast.success('Order created successfully')
      setShowOrderModal(false)
    } catch (error: any) {
      toast.error(error || 'Failed to create order')
    }
  }

  const handleUpdateOrder = async (orderData: any) => {
    try {
      await dispatch(updateOrderStatus({ 
        hotelSlug, 
        orderId: editingOrder.id, 
        status: orderData.status 
      })).unwrap()
      toast.success('Order updated successfully')
      setShowOrderModal(false)
      setEditingOrder(null)
    } catch (error: any) {
      toast.error(error || 'Failed to update order')
    }
  }

  const handleDeleteOrder = async () => {
    if (!selectedOrder) return
    
    try {
      await dispatch(deleteOrder({ hotelSlug, orderId: selectedOrder.id })).unwrap()
      toast.success('Order deleted successfully')
      setShowDeleteModal(false)
      setSelectedOrder(null)
    } catch (error: any) {
      toast.error(error || 'Failed to delete order')
    }
  }

  const handleUpdateOrderStatus = async (orderId: string, status: string) => {
    try {
      await dispatch(updateOrderStatus({ hotelSlug, orderId, status: status as "pending" | "confirmed" | "preparing" | "ready" | "served" | "completed" | "cancelled" })).unwrap()
      toast.success(`Order status updated to ${status}`)
    } catch (error: any) {
      toast.error('Failed to update order status')
    }
  }

  const handleUpdatePaymentStatus = async (orderId: string, paymentStatus: string) => {
    try {
      await dispatch(updatePaymentStatus({ hotelSlug, orderId, paymentStatus: paymentStatus as any })).unwrap()
      toast.success(`Payment status updated to ${paymentStatus}`)
    } catch (error: any) {
      toast.error('Failed to update payment status')
    }
  }

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'completed': return 'bg-emerald-100 text-emerald-800';
      case 'served': return 'bg-green-100 text-green-800';
      case 'ready': return 'bg-amber-100 text-amber-800';
      case 'preparing': return 'bg-blue-100 text-blue-800';
      case 'confirmed': return 'bg-indigo-100 text-indigo-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  const getPaymentStatusColor = (status: string) => {
    switch(status) {
      case 'paid': return 'bg-emerald-100 text-emerald-800';
      case 'partial': return 'bg-amber-100 text-amber-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'refunded': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  const filteredOrders = ordersList.filter(order => {
    const matchesStatus = filterStatus === 'all' || order.status === filterStatus
    const matchesPayment = filterPayment === 'all' || order.payment_status === filterPayment
    const matchesSearch = order.order_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.table_number?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesStatus && matchesPayment && matchesSearch
  })

  const pendingOrders = ordersList.filter(o => o.status === 'pending').length
  const preparingOrders = ordersList.filter(o => o.status === 'preparing').length
  const completedOrders = ordersList.filter(o => o.status === 'completed').length

  if (loading && ordersList.length === 0) {
    return <LoadingSpinner />
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold mb-2">Orders Management</h1>
            <p className="text-blue-100">Manage all hotel orders and payments</p>
          </div>
          <button 
            onClick={() => {
              setEditingOrder(null)
              setShowOrderModal(true)
            }}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Create Order
          </button>
        </div>
      </div>

      {/* Order Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Receipt className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{ordersList.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-50 rounded-lg">
              <Receipt className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{pendingOrders}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Receipt className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Preparing</p>
              <p className="text-2xl font-bold text-gray-900">{preparingOrders}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Receipt className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{completedOrders}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-semibold text-gray-900">All Orders</h3>
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Search orders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <select 
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="preparing">Preparing</option>
                <option value="ready">Ready</option>
                <option value="served">Served</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <select 
                value={filterPayment}
                onChange={(e) => setFilterPayment(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
              >
                <option value="all">All Payment</option>
                <option value="pending">Pending</option>
                <option value="partial">Partial</option>
                <option value="paid">Paid</option>
                <option value="refunded">Refunded</option>
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
                <th className="p-4 font-medium">Order #</th>
                <th className="p-4 font-medium">Table</th>
                <th className="p-4 font-medium">Customer</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Payment</th>
                <th className="p-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <div>
                      <p className="font-medium text-gray-900">{order.order_number}</p>
                      <p className="text-xs text-gray-600">
                        {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-gray-900">{order.table_number || 'Takeaway'}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-gray-900">{order.customer_name || 'Walk-in Customer'}</p>
                  </td>
                  <td className="p-4">
                    <p className="font-semibold text-gray-900">${order.amount.toFixed(2)}</p>
                    <p className="text-xs text-gray-600">{order.items} items</p>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded border-none ${getStatusColor(order.status)}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="preparing">Preparing</option>
                        <option value="ready">Ready</option>
                        <option value="served">Served</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1">
                      <select
                        value={order.payment_status || 'pending'}
                        onChange={(e) => handleUpdatePaymentStatus(order.id, e.target.value)}
                        className={`text-xs px-2 py-1 rounded border-none ${getPaymentStatusColor(order.payment_status || 'pending')}`}
                      >
                        <option value="pending">Pending</option>
                        <option value="partial">Partial</option>
                        <option value="paid">Paid</option>
                        <option value="refunded">Refunded</option>
                      </select>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setEditingOrder(order)
                          setShowOrderModal(true)
                        }}
                        className="p-1.5 text-gray-600 hover:bg-gray-100 rounded"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button 
                        onClick={() => {
                          setSelectedOrder(order)
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
          
          {filteredOrders.length === 0 && (
            <div className="text-center py-8">
              <Receipt className="h-12 w-12 text-gray-300 mx-auto mb-2" />
              <p className="text-gray-600">No orders found</p>
              <button 
                onClick={() => {
                  setEditingOrder(null)
                  setShowOrderModal(true)
                }}
                className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Create your first order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Modal */}
      <OrderModal
        isOpen={showOrderModal}
        onClose={() => {
          setShowOrderModal(false)
          setEditingOrder(null)
        }}
        onSubmit={editingOrder ? handleUpdateOrder : handleCreateOrder}
        initialData={editingOrder}
        hotelSlug={hotelSlug}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
          setSelectedOrder(null)
        }}
        onConfirm={handleDeleteOrder}
        title="Delete Order"
        message={`Are you sure you want to delete order "${selectedOrder?.order_number}"? This action cannot be undone.`}
      />
    </div>
  )
}