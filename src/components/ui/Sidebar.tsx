// components/dashboard/Sidebar.tsx
'use client'

import React from 'react'
import { 
  LayoutDashboard,
  User,
  Users,
  FolderTree,
  UtensilsCrossed,
  Table as TableIcon,
  Receipt,
  ChefHat,
  Package,
  Settings,
  CreditCard,
  LogOut,
  Home,
  Phone,
  Mail,
  Shield
} from 'lucide-react'
import { Hotel } from '@/store/slices/hotelAuthSlice'

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  count?: number;
  component: string;
}

interface SidebarProps {
  items: SidebarItem[]
  hotel: Hotel
  isMobileOpen: boolean
  onClose: () => void
  onLogout: () => void
  onItemClick: (component: string) => void
}

export default function Sidebar({ 
  items, 
  hotel,
  isMobileOpen,
  onClose,
  onLogout,
  onItemClick
}: SidebarProps) {
  const getSubscriptionColor = (status: string) => {
    switch(status) {
      case 'active': return 'from-emerald-50 to-green-50 border-emerald-100 text-emerald-700';
      case 'trial': return 'from-amber-50 to-yellow-50 border-amber-100 text-amber-700';
      case 'suspended': return 'from-red-50 to-rose-50 border-red-100 text-red-700';
      case 'cancelled': return 'from-gray-50 to-slate-50 border-gray-100 text-gray-700';
      default: return 'from-gray-50 to-slate-50 border-gray-100 text-gray-700';
    }
  }

  return (
    <>
      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static top-0 left-0 h-full w-64 bg-white border-r border-gray-200
        transform ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300 z-50
        flex flex-col
      `}>
        {/* Hotel Info */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-gray-900">{hotel.hotel_name}</h2>
              <p className="text-sm text-gray-500">@{hotel.hotel_slug}</p>
            </div>
          </div>
          
          <div className="space-y-2">
            {hotel.hotel_phone && (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                {hotel.hotel_phone}
              </div>
            )}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Mail className="h-4 w-4" />
              {hotel.admin_email}
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onItemClick(item.component)
                  if (window.innerWidth < 1024) {
                    onClose()
                  }
                }}
                className={`
                  w-full flex items-center justify-between px-4 py-3 rounded-xl
                  transition-all duration-200
                  ${item.active 
                    ? 'bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 border border-blue-100' 
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <div className={item.active ? 'text-blue-500' : 'text-gray-500'}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </div>
                {item.count !== undefined && item.count > 0 && (
                  <span className={`
                    px-2 py-1 text-xs font-semibold rounded-full
                    ${item.active 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'bg-gray-100 text-gray-600'
                    }
                  `}>
                    {item.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200"></div>

          {/* Settings Section */}
          <div className="space-y-1">
            <button 
              onClick={() => {
                onItemClick('settings')
                if (window.innerWidth < 1024) onClose()
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Settings size={20} />
              <span className="font-medium">Settings</span>
            </button>
            <button 
              onClick={() => {
                onItemClick('billing')
                if (window.innerWidth < 1024) onClose()
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <CreditCard size={20} />
              <span className="font-medium">Billing</span>
            </button>
          </div>
        </nav>

        {/* Subscription Status */}
        <div className="p-4 border-t border-gray-200">
          <div className={`bg-gradient-to-r rounded-xl p-4 border ${getSubscriptionColor(hotel.subscription_status)}`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">
                {hotel.subscription_status === 'trial' ? 'Trial Plan' : hotel.subscription_plan || 'Free Plan'}
              </span>
              <Shield className="h-4 w-4" />
            </div>
            <p className="text-xs mb-2">
              {hotel.subscription_status === 'active' 
                ? `Active • Ends ${new Date(hotel.subscription_end_date!).toLocaleDateString()}`
                : hotel.subscription_status === 'trial'
                ? `Trial ends ${new Date(hotel.trial_ends_at!).toLocaleDateString()}`
                : hotel.subscription_status.charAt(0).toUpperCase() + hotel.subscription_status.slice(1)
              }
            </p>
            <div className="w-full bg-gray-100 rounded-full h-1.5">
              <div className={`
                h-1.5 rounded-full
                ${hotel.subscription_status === 'active' 
                  ? 'bg-emerald-500 w-3/4' 
                  : hotel.subscription_status === 'trial'
                  ? 'bg-amber-500 w-1/2'
                  : 'bg-gray-400 w-1/4'
                }
              `}></div>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}