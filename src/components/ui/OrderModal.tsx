// components/dashboard/modals/OrderModal.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { X, Plus, Trash2, Search, Calculator } from 'lucide-react'
import { api } from '@/services/api'

interface OrderModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (orderData: any) => void
  initialData?: any
  hotelSlug: string
}

interface Table {
  id: string
  table_number: string
  table_name?: string
  capacity: number
  status: string
}

interface Staff {
  id: string
  staff_code: string
  full_name: string
  role: string
}

interface MenuItem {
  id: string
  item_code: string
  name: string
  description?: string
  price: number
  category_name?: string
  is_available: boolean
}

interface OrderItem {
  menu_item_id: string
  quantity: number
  special_instructions?: string
  menu_item?: MenuItem
}

export default function OrderModal({ isOpen, onClose, onSubmit, initialData, hotelSlug }: OrderModalProps) {
  const [formData, setFormData] = useState({
    table_id: '',
    customer_name: '',
    customer_phone: '',
    waiter_id: '',
    status: 'pending',
    payment_status: 'pending',
    payment_method: 'cash',
    special_instructions: '',
    kitchen_notes: '',
    discount_amount: 0,
    items: [] as OrderItem[]
  })

  const [tables, setTables] = useState<Table[]>([])
  const [staff, setStaff] = useState<Staff[]>([])
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(false)
  const [calculating, setCalculating] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTable, setSelectedTable] = useState<Table | null>(null)
  const [selectedWaiter, setSelectedWaiter] = useState<Staff | null>(null)

  // Calculate order totals
  const calculateTotals = () => {
    const subtotal = formData.items.reduce((sum, item) => {
      const menuItem = menuItems.find(m => m.id === item.menu_item_id)
      return sum + (menuItem?.price || 0) * item.quantity
    }, 0)

    const taxRate = 0.10 // Default from schema
    const serviceCharge = 0.05 // Default from schema
    
    return {
      subtotal: subtotal,
      tax_amount: subtotal * taxRate,
      service_charge: subtotal * serviceCharge,
      total_amount: subtotal + (subtotal * taxRate) + (subtotal * serviceCharge) - formData.discount_amount
    }
  }

  const totals = calculateTotals()

  useEffect(() => {
    const fetchData = async () => {
      if (!isOpen || !hotelSlug) return

      try {
        setLoading(true)
        
        // Fetch tables
        const tablesRes = await api.get(`/api/hotel/${hotelSlug}/tables`)
        setTables(tablesRes.data || [])
        
        // Fetch staff (only waiters)
        const staffRes = await api.get(`/api/hotel/${hotelSlug}/staff?role=waiter`)
        setStaff(staffRes.data || [])
        
        // Fetch menu items
        const menuRes = await api.get(`/api/hotel/${hotelSlug}/menu/items?available=true`)
        setMenuItems(menuRes.data || [])
      } catch (error) {
        console.error('Failed to fetch data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [isOpen, hotelSlug])

  useEffect(() => {
    if (initialData) {
      // Find menu items for existing order items
      const itemsWithMenuItems = initialData.items?.map((item: any) => ({
        ...item,
        menu_item: menuItems.find(m => m.id === item.menu_item_id)
      })) || []

      setFormData({
        table_id: initialData.table_id || '',
        customer_name: initialData.customer_name || '',
        customer_phone: initialData.customer_phone || '',
        waiter_id: initialData.waiter_id || '',
        status: initialData.status || 'pending',
        payment_status: initialData.payment_status || 'pending',
        payment_method: initialData.payment_method || 'cash',
        special_instructions: initialData.special_instructions || '',
        kitchen_notes: initialData.kitchen_notes || '',
        discount_amount: initialData.discount_amount || 0,
        items: itemsWithMenuItems
      })

      // Set selected table and waiter
      if (initialData.table_id) {
        const table = tables.find(t => t.id === initialData.table_id)
        setSelectedTable(table || null)
      }
      if (initialData.waiter_id) {
        const waiter = staff.find(s => s.id === initialData.waiter_id)
        setSelectedWaiter(waiter || null)
      }
    } else {
      setFormData({
        table_id: '',
        customer_name: '',
        customer_phone: '',
        waiter_id: '',
        status: 'pending',
        payment_status: 'pending',
        payment_method: 'cash',
        special_instructions: '',
        kitchen_notes: '',
        discount_amount: 0,
        items: []
      })
      setSelectedTable(null)
      setSelectedWaiter(null)
    }
  }, [initialData, tables, staff])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.table_id) {
      alert('Please select a table')
      return
    }

    if (formData.items.length === 0) {
      alert('Please add at least one menu item')
      return
    }

    // Prepare order data
    const orderData = {
      ...formData,
      ...totals,
      // Remove menu_item from items before submitting
      items: formData.items.map(item => ({
        menu_item_id: item.menu_item_id,
        quantity: item.quantity,
        special_instructions: item.special_instructions || ''
      }))
    }
    
    onSubmit(orderData)
  }

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { menu_item_id: '', quantity: 1, special_instructions: '' }]
    })
  }

  const updateItem = (index: number, field: keyof OrderItem, value: any) => {
    const newItems = [...formData.items]
    newItems[index] = { ...newItems[index], [field]: value }
    setFormData({ ...formData, items: newItems })
  }

  const removeItem = (index: number) => {
    const newItems = formData.items.filter((_, i) => i !== index)
    setFormData({ ...formData, items: newItems })
  }

  const updateQuantity = (index: number, delta: number) => {
    const newItems = [...formData.items]
    const newQuantity = Math.max(1, (newItems[index].quantity || 1) + delta)
    newItems[index].quantity = newQuantity
    setFormData({ ...formData, items: newItems })
  }

  const filteredMenuItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.item_code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getMenuItemPrice = (menuItemId: string) => {
    const item = menuItems.find(m => m.id === menuItemId)
    return item?.price || 0
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {initialData ? 'Edit Order' : 'Create New Order'}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {initialData ? `Order #${initialData.order_number}` : 'Create a new order for your hotel'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer & Table Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Table *
                    </label>
                    <select
                      value={formData.table_id}
                      onChange={(e) => {
                        const tableId = e.target.value
                        const table = tables.find(t => t.id === tableId)
                        setFormData({ ...formData, table_id: tableId })
                        setSelectedTable(table || null)
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select a table</option>
                      {tables
                        .filter(table => table.status === 'available' || table.id === formData.table_id)
                        .map(table => (
                          <option key={table.id} value={table.id}>
                            {table.table_name || `Table ${table.table_number}`} 
                            {table.capacity ? ` (${table.capacity} seats)` : ''}
                            {table.status !== 'available' ? ' - Currently occupied' : ''}
                          </option>
                        ))}
                    </select>
                    {selectedTable && (
                      <p className="text-sm text-gray-600 mt-1">
                        Status: <span className={`font-medium ${
                          selectedTable.status === 'available' ? 'text-emerald-600' : 'text-amber-600'
                        }`}>
                          {selectedTable.status.charAt(0).toUpperCase() + selectedTable.status.slice(1)}
                        </span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Waiter
                    </label>
                    <select
                      value={formData.waiter_id}
                      onChange={(e) => {
                        const waiterId = e.target.value
                        const waiter = staff.find(s => s.id === waiterId)
                        setFormData({ ...formData, waiter_id: waiterId })
                        setSelectedWaiter(waiter || null)
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select waiter</option>
                      {staff
                        .filter(s => s.role === 'waiter')
                        .map(waiter => (
                          <option key={waiter.id} value={waiter.id}>
                            {waiter.full_name} ({waiter.staff_code})
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Customer Name
                    </label>
                    <input
                      type="text"
                      value={formData.customer_name}
                      onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Walk-in customer"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Customer Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.customer_phone}
                      onChange={(e) => setFormData({ ...formData, customer_phone: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Order Items</h4>
                  <button
                    type="button"
                    onClick={addItem}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 flex items-center gap-1"
                  >
                    <Plus className="h-4 w-4" />
                    Add Item
                  </button>
                </div>

                {/* Search Menu Items */}
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Search menu items..."
                    />
                  </div>
                </div>

                {/* Items List */}
                <div className="p-4">
                  {formData.items.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      No items added. Click "Add Item" to start.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {formData.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 border border-gray-200 rounded-lg">
                          <div className="flex-1">
                            <select
                              value={item.menu_item_id}
                              onChange={(e) => updateItem(index, 'menu_item_id', e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              required
                            >
                              <option value="">Select menu item</option>
                              {filteredMenuItems.map(menuItem => (
                                <option key={menuItem.id} value={menuItem.id}>
                                  {menuItem.name} - ${menuItem.price.toFixed(2)}
                                  {menuItem.category_name ? ` (${menuItem.category_name})` : ''}
                                </option>
                              ))}
                            </select>
                            
                            {item.menu_item_id && (
                              <div className="mt-2 flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(index, -1)}
                                    className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                  >
                                    -
                                  </button>
                                  <span className="w-12 text-center font-medium">
                                    {item.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(index, 1)}
                                    className="h-8 w-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50"
                                  >
                                    +
                                  </button>
                                </div>
                                <div className="text-sm text-gray-600">
                                  ${(getMenuItemPrice(item.menu_item_id) * item.quantity).toFixed(2)}
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => removeItem(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Special Instructions
                    </label>
                    <textarea
                      value={formData.special_instructions}
                      onChange={(e) => setFormData({ ...formData, special_instructions: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Any special requests from the customer..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Kitchen Notes
                    </label>
                    <textarea
                      value={formData.kitchen_notes}
                      onChange={(e) => setFormData({ ...formData, kitchen_notes: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      rows={3}
                      placeholder="Notes for the kitchen staff..."
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-4">Order Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${totals.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Tax (10%)</span>
                      <span className="font-medium">${totals.tax_amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Service Charge (5%)</span>
                      <span className="font-medium">${totals.service_charge.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">Discount</span>
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={formData.discount_amount}
                          onChange={(e) => setFormData({ 
                            ...formData, 
                            discount_amount: parseFloat(e.target.value) || 0 
                          })}
                          className="w-24 px-2 py-1 border border-gray-300 rounded text-sm"
                          placeholder="0.00"
                        />
                      </div>
                      <span className="font-medium text-red-600">-${formData.discount_amount.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total Amount</span>
                        <span className="text-lg">${totals.total_amount.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={loading || formData.items.length === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
            >
              {calculating && (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              )}
              {initialData ? 'Update Order' : 'Create Order'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}