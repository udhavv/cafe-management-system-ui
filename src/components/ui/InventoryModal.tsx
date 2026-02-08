// components/dashboard/modals/InventoryModal.tsx
'use client'

import React, { useState, useEffect } from 'react'
import { X, Package, AlertCircle } from 'lucide-react'
import { api } from '@/services/api'

interface InventoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (inventoryData: any) => void
  initialData?: any
  hotelSlug: string
}

interface InventoryCategory {
  id: string
  name: string
}

export default function InventoryModal({ 
  isOpen, 
  onClose, 
  onSubmit, 
  initialData, 
  hotelSlug 
}: InventoryModalProps) {
  const [formData, setFormData] = useState({
    item_name: '',
    description: '',
    category_id: '',
    current_quantity: 0,
    min_quantity: 10,
    max_quantity: 0,
    unit: 'pieces',
    unit_cost: 0,
    supplier_name: '',
    supplier_contact: '',
    supplier_price: 0,
    location: '',
    expiry_date: '',
    is_active: true
  })

  const [categories, setCategories] = useState<InventoryCategory[]>([])
  const [loading, setLoading] = useState(false)
  const [units] = useState([
    'pieces', 'kg', 'grams', 'liters', 'ml', 'packets', 'boxes', 'bottles'
  ])

  useEffect(() => {
    const fetchCategories = async () => {
      if (!isOpen || !hotelSlug) return

      try {
        const res = await api.get(`/api/hotel/${hotelSlug}/inventory/categories`)
        setCategories(res.data || [])
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }

    fetchCategories()
  }, [isOpen, hotelSlug])

  useEffect(() => {
    if (initialData) {
      setFormData({
        item_name: initialData.item_name || '',
        description: initialData.description || '',
        category_id: initialData.category_id || '',
        current_quantity: initialData.current_quantity || 0,
        min_quantity: initialData.min_quantity || 10,
        max_quantity: initialData.max_quantity || 0,
        unit: initialData.unit || 'pieces',
        unit_cost: initialData.unit_cost || 0,
        supplier_name: initialData.supplier_name || '',
        supplier_contact: initialData.supplier_contact || '',
        supplier_price: initialData.supplier_price || 0,
        location: initialData.location || '',
        expiry_date: initialData.expiry_date ? initialData.expiry_date.split('T')[0] : '',
        is_active: initialData.is_active ?? true
      })
    } else {
      setFormData({
        item_name: '',
        description: '',
        category_id: '',
        current_quantity: 0,
        min_quantity: 10,
        max_quantity: 0,
        unit: 'pieces',
        unit_cost: 0,
        supplier_name: '',
        supplier_contact: '',
        supplier_price: 0,
        location: '',
        expiry_date: '',
        is_active: true
      })
    }
  }, [initialData])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.item_name) {
      alert('Please enter item name')
      return
    }

    if (formData.current_quantity < 0) {
      alert('Current quantity cannot be negative')
      return
    }

    if (formData.min_quantity < 0) {
      alert('Minimum quantity cannot be negative')
      return
    }

    if (formData.max_quantity > 0 && formData.max_quantity < formData.min_quantity) {
      alert('Maximum quantity must be greater than minimum quantity')
      return
    }

    if (formData.unit_cost < 0) {
      alert('Unit cost cannot be negative')
      return
    }

    onSubmit(formData)
  }

  const calculateTotalValue = () => {
    return formData.current_quantity * formData.unit_cost
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {initialData ? 'Edit Inventory Item' : 'Add New Inventory Item'}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {initialData ? 'Update inventory item details' : 'Add a new item to your inventory'}
              </p>
            </div>
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Basic Information</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name *
                  </label>
                  <input
                    type="text"
                    value={formData.item_name}
                    onChange={(e) => setFormData({ ...formData, item_name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                    placeholder="e.g., Chicken Breast"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select Category</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={2}
                    placeholder="Item description..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Storage Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="e.g., Refrigerator A, Shelf 2"
                  />
                </div>
              </div>
            </div>

            {/* Stock Details */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Stock Details</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Quantity *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.001"
                    value={formData.current_quantity}
                    onChange={(e) => setFormData({ ...formData, current_quantity: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit *
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {units.map(unit => (
                      <option key={unit} value={unit}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit Cost *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.unit_cost}
                      onChange={(e) => setFormData({ ...formData, unit_cost: parseFloat(e.target.value) || 0 })}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Minimum Quantity *
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.001"
                    value={formData.min_quantity}
                    onChange={(e) => setFormData({ ...formData, min_quantity: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Maximum Quantity
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.001"
                    value={formData.max_quantity}
                    onChange={(e) => setFormData({ ...formData, max_quantity: parseFloat(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total Value
                  </label>
                  <p className="text-xl font-semibold text-gray-900">
                    ${calculateTotalValue().toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            {/* Supplier Information */}
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Supplier Information</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Supplier Name
                  </label>
                  <input
                    type="text"
                    value={formData.supplier_name}
                    onChange={(e) => setFormData({ ...formData, supplier_name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Supplier company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Supplier Contact
                  </label>
                  <input
                    type="text"
                    value={formData.supplier_contact}
                    onChange={(e) => setFormData({ ...formData, supplier_contact: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Phone or email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Supplier Price
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={formData.supplier_price}
                      onChange={(e) => setFormData({ ...formData, supplier_price: parseFloat(e.target.value) || 0 })}
                      className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    value={formData.expiry_date}
                    onChange={(e) => setFormData({ ...formData, expiry_date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
            </div>

            {/* Status */}
            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">Active</span>
              </label>
              <p className="text-sm text-gray-500 mt-1">
                Inactive items won't appear in inventory reports
              </p>
            </div>
          </form>
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
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              {initialData ? 'Update Item' : 'Add Item'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}