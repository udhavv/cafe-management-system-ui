// // import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import { api, getApiError } from "@/services/api";

// // // Types matching your database schema
// // export interface DashboardStats {
// //   today_revenue: number;
// //   today_orders: number;
// //   table_occupancy: number;
// //   staff_active: string;
// //   active_orders: number;
// //   pending_kitchen_orders: number;
// //   low_inventory_items: number;
// //   menu_items: string;
// // }

// // export interface Order {
// //   id: string;
// //   order_number: string;
// //   table_number: string;
// //   customer_name: string;
// //   amount: number;
// //   status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'served' | 'completed' | 'cancelled';
// //   items: number;
// //   time: string;
// //   waiter?: string;
// //   created_at: string;
// // }

// // export interface Staff {
// //   id: string;
// //   staff_code: string;
// //   name: string;
// //   role: 'manager' | 'waiter' | 'chef' | 'cashier' | 'cleaner' | 'receptionist' | 'cook';
// //   status: 'active' | 'offline' | 'on_break';
// //   today_orders: number;
// //   phone?: string;
// //   email?: string;
// // }

// // export interface MenuItem {
// //   id: string;
// //   name: string;
// //   category: string;
// //   price: number;
// //   popularity: number;
// //   availability: boolean;
// //   category_id?: string;
// //   today_orders: number;
// // }

// // export interface Table {
// //   id: string;
// //   number: string;
// //   name?: string;
// //   capacity: number;
// //   status: 'available' | 'occupied' | 'reserved' | 'cleaning';
// //   waiter?: string;
// //   order_amount?: number;
// //   section?: string;
// // }

// // export interface Category {
// //   id: string;
// //   name: string;
// //   items: number;
// //   active: boolean;
// // }

// // export interface InventoryItem {
// //   id: string;
// //   name: string;
// //   category: string;
// //   quantity: number;
// //   unit: string;
// //   min_quantity: number;
// //   status: 'low' | 'medium' | 'good';
// // }

// // interface DashboardState {
// //   stats: DashboardStats | null;
// //   orders: Order[];
// //   staff: Staff[];
// //   menuItems: MenuItem[];
// //   tables: Table[];
// //   categories: Category[];
// //   inventory: InventoryItem[];
// //   loading: boolean;
// //   error: string | null;
// //   lastUpdated: string | null;
// // }

// // const initialState: DashboardState = {
// //   stats: null,
// //   orders: [],
// //   staff: [],
// //   menuItems: [],
// //   tables: [],
// //   categories: [],
// //   inventory: [],
// //   loading: false,
// //   error: null,
// //   lastUpdated: null,
// // };

// // // Thunks for fetching dashboard data
// // export const fetchDashboardData = createAsyncThunk(
// //   "dashboard/fetchDashboardData",
// //   async (_, thunkApi) => {
// //     try {
// //       const { data } = await api.get("/api/hotel/dashboard");
// //       return data;
// //     } catch (err: any) {
// //       return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch dashboard data"));
// //     }
// //   }
// // );

// // export const fetchRecentOrders = createAsyncThunk(
// //   "dashboard/fetchRecentOrders",
// //   async (_, thunkApi) => {
// //     try {
// //       const { data } = await api.get("/api/hotel/dashboard/recent-orders");
// //       return data.orders;
// //     } catch (err: any) {
// //       return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch orders"));
// //     }
// //   }
// // );

// // export const fetchStaff = createAsyncThunk(
// //   "dashboard/fetchStaff",
// //   async (_, thunkApi) => {
// //     try {
// //       const { data } = await api.get("/api/hotel/staff");
// //       return data.staff;
// //     } catch (err: any) {
// //       return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch staff"));
// //     }
// //   }
// // );

// // export const fetchTables = createAsyncThunk(
// //   "dashboard/fetchTables",
// //   async (_, thunkApi) => {
// //     try {
// //       const { data } = await api.get("/api/hotel/tables");
// //       return data.tables;
// //     } catch (err: any) {
// //       return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch tables"));
// //     }
// //   }
// // );

// // export const fetchInventory = createAsyncThunk(
// //   "dashboard/fetchInventory",
// //   async (_, thunkApi) => {
// //     try {
// //       const { data } = await api.get("/api/hotel/inventory");
// //       return data.inventory;
// //     } catch (err: any) {
// //       return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch inventory"));
// //     }
// //   }
// // );

// // const dashboardSlice = createSlice({
// //   name: "dashboard",
// //   initialState,
// //   reducers: {
// //     clearDashboardError: (state) => {
// //       state.error = null;
// //     },
// //     updateOrderStatus: (state, action: PayloadAction<{ orderId: string; status: Order['status'] }>) => {
// //       const order = state.orders.find(o => o.id === action.payload.orderId);
// //       if (order) {
// //         order.status = action.payload.status;
// //       }
// //     },
// //     updateTableStatus: (state, action: PayloadAction<{ tableId: string; status: Table['status'] }>) => {
// //       const table = state.tables.find(t => t.id === action.payload.tableId);
// //       if (table) {
// //         table.status = action.payload.status;
// //       }
// //     },
// //     updateStaffStatus: (state, action: PayloadAction<{ staffId: string; status: Staff['status'] }>) => {
// //       const staff = state.staff.find(s => s.id === action.payload.staffId);
// //       if (staff) {
// //         staff.status = action.payload.status;
// //       }
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchDashboardData.pending, (state) => {
// //         state.loading = true;
// //         state.error = null;
// //       })
// //       .addCase(fetchDashboardData.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.stats = action.payload.stats;
// //         state.orders = action.payload.recent_orders || [];
// //         state.staff = action.payload.staff || [];
// //         state.tables = action.payload.tables || [];
// //         state.categories = action.payload.categories || [];
// //         state.inventory = action.payload.inventory || [];
// //         state.menuItems = action.payload.menu_items || [];
// //         state.lastUpdated = new Date().toISOString();
// //       })
// //       .addCase(fetchDashboardData.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload as string;
// //       })
// //       .addCase(fetchRecentOrders.fulfilled, (state, action) => {
// //         state.orders = action.payload;
// //       })
// //       .addCase(fetchStaff.fulfilled, (state, action) => {
// //         state.staff = action.payload;
// //       })
// //       .addCase(fetchTables.fulfilled, (state, action) => {
// //         state.tables = action.payload;
// //       })
// //       .addCase(fetchInventory.fulfilled, (state, action) => {
// //         state.inventory = action.payload;
// //       });
// //   },
// // });

// // export const {
// //   clearDashboardError,
// //   updateOrderStatus,
// //   updateTableStatus,
// //   updateStaffStatus
// // } = dashboardSlice.actions;

// // export default dashboardSlice.reducer;

// // store/slices/dashboardSlice.ts
// import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { api, getApiError } from "@/services/api";

// // ===================== TYPES =====================
// export interface DashboardStats {
//   today_revenue: number;
//   today_orders: number;
//   active_orders: number;
//   table_occupancy: number;
//   staff_active: string;
//   pending_kitchen_orders: number;
//   low_inventory_items: number;
//   menu_items: string;
// }

// export interface Order {
//   id: string;
//   order_number: string;
//   table_id: string;
//   table_number: string;
//   customer_name: string;
//   amount: number;
//   status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'served' | 'completed' | 'cancelled';
//   items: number;
//   time: string;
//   waiter_id?: string;
//   waiter_name?: string;
//   created_at: string;
//   payment_status?: 'pending' | 'partial' | 'paid' | 'refunded';
// }

// export interface Staff {
//   id: string;
//   staff_code: string;
//   full_name: string;
//   role: 'manager' | 'waiter' | 'chef' | 'cashier' | 'cleaner' | 'receptionist' | 'cook';
//   phone?: string;
//   email?: string;
//   status: 'active' | 'inactive';
//   today_orders: number;
//   today_sales?: number;
//   total_orders?: number;
//   is_active: boolean;
//   pin_code?: string;
//   last_login?: string;
//   created_at: string;
// }

// export interface MenuItem {
//   id: string;
//   item_code: string;
//   name: string;
//   description?: string;
//   category: string;
//   category_id?: string;
//   price: number;
//   cost_price?: number;
//   tax_rate: number;
//   popularity: number;
//   availability: boolean;
//   is_available: boolean;
//   is_popular: boolean;
//   is_vegetarian?: boolean;
//   preparation_time?: number;
//   image_url?: string;
//   today_orders: number;
//   weekly_orders: number;
//   created_at: string;
// }

// export interface Table {
//   id: string;
//   table_number: string;
//   table_name?: string;
//   capacity: number;
//   floor_number?: number;
//   section?: string;
//   status: 'available' | 'occupied' | 'reserved' | 'cleaning';
//   waiter_id?: string;
//   waiter_name?: string;
//   order_amount?: number;
//   qr_code_url?: string;
//   today_orders?: number;
//   today_sales?: number;
//   created_at: string;
// }

// export interface Category {
//   id: string;
//   name: string;
//   description?: string;
//   items: number;
//   available_items: number;
//   is_active: boolean;
//   display_order: number;
//   image_url?: string;
//   avg_price: number;
//   created_at: string;
// }

// export interface InventoryItem {
//   id: string;
//   item_code: string;
//   item_name: string;
//   description?: string;
//   category: string;
//   category_id?: string;
//   current_quantity: number;
//   min_quantity: number;
//   max_quantity?: number;
//   unit: string;
//   unit_cost: number;
//   total_value: number;
//   status: 'in_stock' | 'low_stock' | 'out_of_stock' | 'over_stock' | 'discontinued';
//   supplier_name?: string;
//   supplier_contact?: string;
//   last_purchased_date?: string;
//   daily_consumption: number;
//   monthly_consumption_avg?: number;
//   days_of_stock?: number;
//   expiry_date?: string;
//   location?: string;
//   barcode?: string;
//   is_active: boolean;
//   created_at: string;
// }

// export interface InventoryTransaction {
//   id: string;
//   inventory_id: string;
//   transaction_type: 'purchase' | 'sale' | 'adjustment' | 'wastage' | 'transfer' | 'production' | 'consumption';
//   quantity_before: number;
//   quantity_change: number;
//   quantity_after: number;
//   unit_price?: number;
//   total_price?: number;
//   reference_number?: string;
//   order_id?: string;
//   supplier_id?: string;
//   staff_id?: string;
//   notes?: string;
//   reason?: string;
//   created_by: string;
//   created_at: string;
// }

// export interface KitchenOrder {
//   id: string;
//   order_id: string;
//   order_number: string;
//   table_id: string;
//   table_number: string;
//   items: string[];
//   status: 'pending' | 'preparing' | 'ready' | 'served';
//   time: string;
//   chef_id?: string;
//   chef_name?: string;
//   created_at: string;
// }

// export interface OrderItem {
//   id: string;
//   order_id: string;
//   menu_item_id: string;
//   item_name: string;
//   quantity: number;
//   unit_price: number;
//   total_price: number;
//   special_instructions?: string;
//   status: 'pending' | 'preparing' | 'ready' | 'served' | 'cancelled';
//   prepared_by?: string;
//   prepared_at?: string;
//   served_by?: string;
//   served_at?: string;
//   created_at: string;
// }

// export interface SidebarCounts {
//   staff: number;
//   category: number;
//   menu: number;
//   tables: number;
//   orders: number;
//   kitchen: number;
//   inventory: number;
// }

// export interface DashboardData {
//   stats: DashboardStats;
//   recent_orders: Order[];
//   staff: Staff[];
//   tables: Table[];
//   categories: Category[];
//   menu_items: MenuItem[];
//   inventory: InventoryItem[];
//   kitchen_orders: KitchenOrder[];
//   sidebar_counts: SidebarCounts;
//   hotel_name?: string;
//   hotel_slug?: string;
//   last_updated: string;
// }

// interface DashboardState {
//   data: DashboardData | null;
//   loading: boolean;
//   error: string | null;
//   lastFetched: string | null;
//   staffList: Staff[];
//   menuItemsList: MenuItem[];
//   tablesList: Table[];
//   categoriesList: Category[];
//   inventoryList: InventoryItem[];
//   ordersList: Order[];
//   kitchenOrdersList: KitchenOrder[];
// }

// const initialState: DashboardState = {
//   data: null,
//   loading: false,
//   error: null,
//   lastFetched: null,
//   staffList: [],
//   menuItemsList: [],
//   tablesList: [],
//   categoriesList: [],
//   inventoryList: [],
//   ordersList: [],
//   kitchenOrdersList: [],
// };

// // ===================== ASYNC THUNKS =====================

// // Main dashboard data
// export const fetchDashboardData = createAsyncThunk<
//   DashboardData,
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchDashboardData", async (rejecctWithValue, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/dashboard`);
//     console.log('from fetch data from slice:- ', response.data)
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch dashboard data"));
//   }
// });

// // Staff
// export const fetchStaff = createAsyncThunk<
//   Staff[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchStaff", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/staff`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch staff"));
//   }
// });

// export const createStaff = createAsyncThunk<
//   Staff,
//   { hotelSlug: string; staffData: Partial<Staff> },
//   { rejectValue: string }
// >("dashboard/createStaff", async ({ hotelSlug, staffData }, thunkApi) => {
//   try {
//     const response = await api.post(`/api/hotel/${hotelSlug}/staff`, staffData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to create staff"));
//   }
// });

// export const updateStaff = createAsyncThunk<
//   Staff,
//   { hotelSlug: string; staffId: string; staffData: Partial<Staff> },
//   { rejectValue: string }
// >("dashboard/updateStaff", async ({ hotelSlug, staffId, staffData }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/staff/${staffId}`, staffData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update staff"));
//   }
// });

// export const deleteStaff = createAsyncThunk<
//   string,
//   { hotelSlug: string; staffId: string },
//   { rejectValue: string }
// >("dashboard/deleteStaff", async ({ hotelSlug, staffId }, thunkApi) => {
//   try {
//     await api.delete(`/api/hotel/${hotelSlug}/staff/${staffId}`);
//     return staffId;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to delete staff"));
//   }
// });

// // Menu Categories
// export const fetchCategories = createAsyncThunk<
//   Category[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchCategories", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/menu/categories`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch categories"));
//   }
// });

// export const createCategory = createAsyncThunk<
//   Category,
//   { hotelSlug: string; categoryData: Partial<Category> },
//   { rejectValue: string }
// >("dashboard/createCategory", async ({ hotelSlug, categoryData }, thunkApi) => {
//   try {
//     const response = await api.post(`/api/hotel/${hotelSlug}/menu/categories`, categoryData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to create category"));
//   }
// });

// export const updateCategory = createAsyncThunk<
//   Category,
//   { hotelSlug: string; categoryId: string; categoryData: Partial<Category> },
//   { rejectValue: string }
// >("dashboard/updateCategory", async ({ hotelSlug, categoryId, categoryData }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/menu/categories/${categoryId}`, categoryData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update category"));
//   }
// });

// export const deleteCategory = createAsyncThunk<
//   string,
//   { hotelSlug: string; categoryId: string },
//   { rejectValue: string }
// >("dashboard/deleteCategory", async ({ hotelSlug, categoryId }, thunkApi) => {
//   try {
//     await api.delete(`/api/hotel/${hotelSlug}/menu/categories/${categoryId}`);
//     return categoryId;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to delete category"));
//   }
// });

// // Menu Items
// export const fetchMenuItems = createAsyncThunk<
//   MenuItem[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchMenuItems", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/menu/items`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch menu items"));
//   }
// });

// export const createMenuItem = createAsyncThunk<
//   MenuItem,
//   { hotelSlug: string; menuItemData: Partial<MenuItem> },
//   { rejectValue: string }
// >("dashboard/createMenuItem", async ({ hotelSlug, menuItemData }, thunkApi) => {
//   try {
//     const response = await api.post(`/api/hotel/${hotelSlug}/menu/items`, menuItemData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to create menu item"));
//   }
// });

// export const updateMenuItem = createAsyncThunk<
//   MenuItem,
//   { hotelSlug: string; menuItemId: string; menuItemData: Partial<MenuItem> },
//   { rejectValue: string }
// >("dashboard/updateMenuItem", async ({ hotelSlug, menuItemId, menuItemData }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/menu/items/${menuItemId}`, menuItemData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update menu item"));
//   }
// });

// export const deleteMenuItem = createAsyncThunk<
//   string,
//   { hotelSlug: string; menuItemId: string },
//   { rejectValue: string }
// >("dashboard/deleteMenuItem", async ({ hotelSlug, menuItemId }, thunkApi) => {
//   try {
//     await api.delete(`/api/hotel/${hotelSlug}/menu/items/${menuItemId}`);
//     return menuItemId;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to delete menu item"));
//   }
// });

// // Tables
// export const fetchTables = createAsyncThunk<
//   Table[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchTables", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/tables`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch tables"));
//   }
// });

// export const createTable = createAsyncThunk<
//   Table,
//   { hotelSlug: string; tableData: Partial<Table> },
//   { rejectValue: string }
// >("dashboard/createTable", async ({ hotelSlug, tableData }, thunkApi) => {
//   try {
//     const response = await api.post(`/api/hotel/${hotelSlug}/tables`, tableData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to create table"));
//   }
// });

// export const updateTable = createAsyncThunk<
//   Table,
//   { hotelSlug: string; tableId: string; tableData: Partial<Table> },
//   { rejectValue: string }
// >("dashboard/updateTable", async ({ hotelSlug, tableId, tableData }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/tables/${tableId}`, tableData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update table"));
//   }
// });

// export const updateTableStatus = createAsyncThunk<
//   Table,
//   { hotelSlug: string; tableId: string; status: Table['status'] },
//   { rejectValue: string }
// >("dashboard/updateTableStatus", async ({ hotelSlug, tableId, status }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/tables/${tableId}/status`, { status });
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update table status"));
//   }
// });

// export const deleteTable = createAsyncThunk<
//   string,
//   { hotelSlug: string; tableId: string },
//   { rejectValue: string }
// >("dashboard/deleteTable", async ({ hotelSlug, tableId }, thunkApi) => {
//   try {
//     await api.delete(`/api/hotel/${hotelSlug}/tables/${tableId}`);
//     return tableId;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to delete table"));
//   }
// });

// // Orders
// export const fetchOrders = createAsyncThunk<
//   Order[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchOrders", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/orders`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch orders"));
//   }
// });

// export const fetchOrderById = createAsyncThunk<
//   Order,
//   { hotelSlug: string; orderId: string },
//   { rejectValue: string }
// >("dashboard/fetchOrderById", async ({ hotelSlug, orderId }, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/orders/${orderId}`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch order"));
//   }
// });

// export const createOrder = createAsyncThunk<
//   Order,
//   { hotelSlug: string; orderData: Partial<Order> },
//   { rejectValue: string }
// >("dashboard/createOrder", async ({ hotelSlug, orderData }, thunkApi) => {
//   try {
//     const response = await api.post(`/api/hotel/${hotelSlug}/orders`, orderData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to create order"));
//   }
// });

// export const updateOrderStatus = createAsyncThunk<
//   Order,
//   { hotelSlug: string; orderId: string; status: Order['status'] },
//   { rejectValue: string }
// >("dashboard/updateOrderStatus", async ({ hotelSlug, orderId, status }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/orders/${orderId}/status`, { status });
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update order status"));
//   }
// });

// export const updatePaymentStatus = createAsyncThunk<
//   Order,
//   { hotelSlug: string; orderId: string; paymentStatus: Order['payment_status'] },
//   { rejectValue: string }
// >("dashboard/updatePaymentStatus", async ({ hotelSlug, orderId, paymentStatus }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/orders/${orderId}/payment`, { payment_status: paymentStatus });
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update payment status"));
//   }
// });

// export const deleteOrder = createAsyncThunk<
//   string,
//   { hotelSlug: string; orderId: string },
//   { rejectValue: string }
// >("dashboard/deleteOrder", async ({ hotelSlug, orderId }, thunkApi) => {
//   try {
//     await api.delete(`/api/hotel/${hotelSlug}/orders/${orderId}`);
//     return orderId;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to delete order"));
//   }
// });

// // Kitchen Orders
// export const fetchKitchenOrders = createAsyncThunk<
//   KitchenOrder[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchKitchenOrders", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/kitchen/orders`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch kitchen orders"));
//   }
// });

// export const updateKitchenItemStatus = createAsyncThunk<
//   OrderItem,
//   { hotelSlug: string; orderId: string; itemId: string; status: OrderItem['status'] },
//   { rejectValue: string }
// >("dashboard/updateKitchenItemStatus", async ({ hotelSlug, orderId, itemId, status }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/kitchen/orders/${orderId}/items/${itemId}/status`, { status });
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update kitchen item status"));
//   }
// });

// // Inventory
// export const fetchInventory = createAsyncThunk<
//   InventoryItem[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchInventory", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/inventory`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch inventory"));
//   }
// });

// export const fetchLowStockInventory = createAsyncThunk<
//   InventoryItem[],
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchLowStockInventory", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/inventory/low-stock`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch low stock inventory"));
//   }
// });

// export const fetchInventoryValuation = createAsyncThunk<
//   any,
//   string, // hotelSlug
//   { rejectValue: string }
// >("dashboard/fetchInventoryValuation", async (hotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/${hotelSlug}/inventory/valuation`);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch inventory valuation"));
//   }
// });

// export const createInventoryItem = createAsyncThunk<
//   InventoryItem,
//   { hotelSlug: string; inventoryData: Partial<InventoryItem> },
//   { rejectValue: string }
// >("dashboard/createInventoryItem", async ({ hotelSlug, inventoryData }, thunkApi) => {
//   try {
//     const response = await api.post(`/api/hotel/${hotelSlug}/inventory`, inventoryData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to create inventory item"));
//   }
// });

// export const updateInventoryItem = createAsyncThunk<
//   InventoryItem,
//   { hotelSlug: string; inventoryId: string; inventoryData: Partial<InventoryItem> },
//   { rejectValue: string }
// >("dashboard/updateInventoryItem", async ({ hotelSlug, inventoryId, inventoryData }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/${hotelSlug}/inventory/${inventoryId}`, inventoryData);
//     return response.data;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update inventory item"));
//   }
// });

// export const deleteInventoryItem = createAsyncThunk<
//   string,
//   { hotelSlug: string; inventoryId: string },
//   { rejectValue: string }
// >("dashboard/deleteInventoryItem", async ({ hotelSlug, inventoryId }, thunkApi) => {
//   try {
//     await api.delete(`/api/hotel/${hotelSlug}/inventory/${inventoryId}`);
//     return inventoryId;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to delete inventory item"));
//   }
// });

// // ===================== SLICE =====================
// const dashboardSlice = createSlice({
//   name: "dashboard",
//   initialState,
//   reducers: {
//     clearDashboardError: (state) => {
//       state.error = null;
//     },
//     updateOrderStatusLocal: (state, action: PayloadAction<{ orderId: string; status: Order['status'] }>) => {
//       if (state.data) {
//         const order = state.data.recent_orders.find(o => o.id === action.payload.orderId);
//         if (order) {
//           order.status = action.payload.status;
//         }
//       }
//       const order = state.ordersList.find(o => o.id === action.payload.orderId);
//       if (order) {
//         order.status = action.payload.status;
//       }
//     },
//     updateTableStatusLocal: (state, action: PayloadAction<{ tableId: string; status: Table['status'] }>) => {
//       if (state.data) {
//         const table = state.data.tables.find(t => t.id === action.payload.tableId);
//         if (table) {
//           table.status = action.payload.status;
//         }
//       }
//       const table = state.tablesList.find(t => t.id === action.payload.tableId);
//       if (table) {
//         table.status = action.payload.status;
//       }
//     },
//     updateStaffStatusLocal: (state, action: PayloadAction<{ staffId: string; status: 'active' | 'inactive' }>) => {
//       if (state.data) {
//         const staff = state.data.staff.find(s => s.id === action.payload.staffId);
//         if (staff) {
//           staff.status = action.payload.status;
//           staff.is_active = action.payload.status === 'active';
//         }
//       }
//       const staff = state.staffList.find(s => s.id === action.payload.staffId);
//       if (staff) {
//         staff.status = action.payload.status;
//         staff.is_active = action.payload.status === 'active';
//       }
//     },
//     updateInventoryStatusLocal: (state, action: PayloadAction<{ inventoryId: string; status: InventoryItem['status'] }>) => {
//       if (state.data) {
//         const item = state.data.inventory.find(i => i.id === action.payload.inventoryId);
//         if (item) {
//           item.status = action.payload.status;
//         }
//       }
//       const item = state.inventoryList.find(i => i.id === action.payload.inventoryId);
//       if (item) {
//         item.status = action.payload.status;
//       }
//     },
//     updateKitchenOrderStatusLocal: (state, action: PayloadAction<{ orderId: string; status: KitchenOrder['status'] }>) => {
//       if (state.data) {
//         const order = state.data.kitchen_orders.find(o => o.id === action.payload.orderId);
//         if (order) {
//           order.status = action.payload.status;
//         }
//       }
//       const order = state.kitchenOrdersList.find(o => o.id === action.payload.orderId);
//       if (order) {
//         order.status = action.payload.status;
//       }
//     },
//     setDashboardData: (state, action: PayloadAction<DashboardData>) => {
//       state.data = action.payload;
//       state.lastFetched = new Date().toISOString();
//     },
//     resetDashboard: () => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       // Fetch Dashboard Data
//       .addCase(fetchDashboardData.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchDashboardData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         state.lastFetched = new Date().toISOString();
//       })
//       .addCase(fetchDashboardData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       })

//       // Staff Operations
//       .addCase(fetchStaff.fulfilled, (state, action) => {
//         state.staffList = action.payload;
//         if (state.data) {
//           state.data.staff = action.payload.slice(0, 6);
//           state.data.sidebar_counts.staff = action.payload.filter(s => s.is_active).length;
//         }
//       })
//       .addCase(createStaff.fulfilled, (state, action) => {
//         state.staffList.unshift(action.payload);
//         if (state.data) {
//           state.data.staff = [action.payload, ...state.data.staff.slice(0, 5)];
//           state.data.sidebar_counts.staff += 1;
//         }
//       })
//       .addCase(updateStaff.fulfilled, (state, action) => {
//         const index = state.staffList.findIndex(s => s.id === action.payload.id);
//         if (index !== -1) {
//           state.staffList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.staff.findIndex(s => s.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.staff[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(deleteStaff.fulfilled, (state, action) => {
//         state.staffList = state.staffList.filter(s => s.id !== action.payload);
//         if (state.data) {
//           state.data.staff = state.data.staff.filter(s => s.id !== action.payload);
//           state.data.sidebar_counts.staff = state.staffList.filter(s => s.is_active).length;
//         }
//       })

//       // Categories Operations
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.categoriesList = action.payload;
//         if (state.data) {
//           state.data.categories = action.payload.slice(0, 8);
//           state.data.sidebar_counts.category = action.payload.length;
//         }
//       })
//       .addCase(createCategory.fulfilled, (state, action) => {
//         state.categoriesList.push(action.payload);
//         if (state.data) {
//           state.data.categories = [...state.data.categories, action.payload].slice(0, 8);
//           state.data.sidebar_counts.category += 1;
//         }
//       })
//       .addCase(updateCategory.fulfilled, (state, action) => {
//         const index = state.categoriesList.findIndex(c => c.id === action.payload.id);
//         if (index !== -1) {
//           state.categoriesList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.categories.findIndex(c => c.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.categories[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(deleteCategory.fulfilled, (state, action) => {
//         state.categoriesList = state.categoriesList.filter(c => c.id !== action.payload);
//         if (state.data) {
//           state.data.categories = state.data.categories.filter(c => c.id !== action.payload);
//           state.data.sidebar_counts.category -= 1;
//         }
//       })

//       // Menu Items Operations
//       .addCase(fetchMenuItems.fulfilled, (state, action) => {
//         state.menuItemsList = action.payload;
//         if (state.data) {
//           state.data.menu_items = action.payload.slice(0, 8);
//           state.data.sidebar_counts.menu = action.payload.length;
//         }
//       })
//       .addCase(createMenuItem.fulfilled, (state, action) => {
//         state.menuItemsList.unshift(action.payload);
//         if (state.data) {
//           state.data.menu_items = [action.payload, ...state.data.menu_items.slice(0, 7)];
//           state.data.sidebar_counts.menu += 1;
//         }
//       })
//       .addCase(updateMenuItem.fulfilled, (state, action) => {
//         const index = state.menuItemsList.findIndex(m => m.id === action.payload.id);
//         if (index !== -1) {
//           state.menuItemsList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.menu_items.findIndex(m => m.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.menu_items[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(deleteMenuItem.fulfilled, (state, action) => {
//         state.menuItemsList = state.menuItemsList.filter(m => m.id !== action.payload);
//         if (state.data) {
//           state.data.menu_items = state.data.menu_items.filter(m => m.id !== action.payload);
//           state.data.sidebar_counts.menu -= 1;
//         }
//       })

//       // Tables Operations
//       .addCase(fetchTables.fulfilled, (state, action) => {
//         state.tablesList = action.payload;
//         if (state.data) {
//           state.data.tables = action.payload.slice(0, 8);
//           state.data.sidebar_counts.tables = action.payload.length;
//         }
//       })
//       .addCase(createTable.fulfilled, (state, action) => {
//         state.tablesList.push(action.payload);
//         if (state.data) {
//           state.data.tables = [...state.data.tables, action.payload].slice(0, 8);
//           state.data.sidebar_counts.tables += 1;
//         }
//       })
//       .addCase(updateTable.fulfilled, (state, action) => {
//         const index = state.tablesList.findIndex(t => t.id === action.payload.id);
//         if (index !== -1) {
//           state.tablesList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.tables.findIndex(t => t.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.tables[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(updateTableStatus.fulfilled, (state, action) => {
//         const index = state.tablesList.findIndex(t => t.id === action.payload.id);
//         if (index !== -1) {
//           state.tablesList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.tables.findIndex(t => t.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.tables[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(deleteTable.fulfilled, (state, action) => {
//         state.tablesList = state.tablesList.filter(t => t.id !== action.payload);
//         if (state.data) {
//           state.data.tables = state.data.tables.filter(t => t.id !== action.payload);
//           state.data.sidebar_counts.tables -= 1;
//         }
//       })

//       // Orders Operations
//       .addCase(fetchOrders.fulfilled, (state, action) => {
//         state.ordersList = action.payload;
//         if (state.data) {
//           state.data.recent_orders = action.payload.slice(0, 10);
//           state.data.sidebar_counts.orders = action.payload.filter(o =>
//             !['completed', 'cancelled'].includes(o.status)
//           ).length;
//         }
//       })
//       .addCase(createOrder.fulfilled, (state, action) => {
//         state.ordersList.unshift(action.payload);
//         if (state.data) {
//           state.data.recent_orders = [action.payload, ...state.data.recent_orders.slice(0, 9)];
//           state.data.sidebar_counts.orders += 1;
//         }
//       })
//       .addCase(updateOrderStatus.fulfilled, (state, action) => {
//         const index = state.ordersList.findIndex(o => o.id === action.payload.id);
//         if (index !== -1) {
//           state.ordersList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.recent_orders.findIndex(o => o.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.recent_orders[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(updatePaymentStatus.fulfilled, (state, action) => {
//         const index = state.ordersList.findIndex(o => o.id === action.payload.id);
//         if (index !== -1) {
//           state.ordersList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.recent_orders.findIndex(o => o.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.recent_orders[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(deleteOrder.fulfilled, (state, action) => {
//         state.ordersList = state.ordersList.filter(o => o.id !== action.payload);
//         if (state.data) {
//           state.data.recent_orders = state.data.recent_orders.filter(o => o.id !== action.payload);
//           state.data.sidebar_counts.orders -= 1;
//         }
//       })

//       // Kitchen Orders Operations
//       .addCase(fetchKitchenOrders.fulfilled, (state, action) => {
//         state.kitchenOrdersList = action.payload;
//         if (state.data) {
//           state.data.kitchen_orders = action.payload;
//           state.data.sidebar_counts.kitchen = action.payload.length;
//         }
//       })
//       .addCase(updateKitchenItemStatus.fulfilled, (state, action) => {
//         // Update order item status in orders
//         state.ordersList = state.ordersList.map(order => {
//           // Find the order that contains this item and update
//           return order;
//         });
//       })

//       // Inventory Operations
//       .addCase(fetchInventory.fulfilled, (state, action) => {
//         state.inventoryList = action.payload;
//         if (state.data) {
//           state.data.inventory = action.payload.filter(item =>
//             item.status === 'low_stock' || item.status === 'out_of_stock'
//           ).slice(0, 10);
//         }
//       })
//       .addCase(fetchLowStockInventory.fulfilled, (state, action) => {
//         state.inventoryList = action.payload;
//         if (state.data) {
//           state.data.inventory = action.payload.slice(0, 10);
//           state.data.sidebar_counts.inventory = action.payload.filter(item =>
//             item.status === 'low_stock' || item.status === 'out_of_stock'
//           ).length;
//         }
//       })
//       .addCase(createInventoryItem.fulfilled, (state, action) => {
//         state.inventoryList.unshift(action.payload);
//         if (state.data) {
//           state.data.inventory = [action.payload, ...state.data.inventory.slice(0, 9)];
//         }
//       })
//       .addCase(updateInventoryItem.fulfilled, (state, action) => {
//         const index = state.inventoryList.findIndex(i => i.id === action.payload.id);
//         if (index !== -1) {
//           state.inventoryList[index] = action.payload;
//         }
//         if (state.data) {
//           const dataIndex = state.data.inventory.findIndex(i => i.id === action.payload.id);
//           if (dataIndex !== -1) {
//             state.data.inventory[dataIndex] = action.payload;
//           }
//         }
//       })
//       .addCase(deleteInventoryItem.fulfilled, (state, action) => {
//         state.inventoryList = state.inventoryList.filter(i => i.id !== action.payload);
//         if (state.data) {
//           state.data.inventory = state.data.inventory.filter(i => i.id !== action.payload);
//           state.data.sidebar_counts.inventory -= 1;
//         }
//       });
//   },
// });

// export const {
//   clearDashboardError,
//   updateOrderStatusLocal,
//   updateTableStatusLocal,
//   updateStaffStatusLocal,
//   updateInventoryStatusLocal,
//   updateKitchenOrderStatusLocal,
//   setDashboardData,
//   resetDashboard
// } = dashboardSlice.actions;

// export default dashboardSlice.reducer;

// store/slices/dashboardSlice.ts
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { api, getApiError } from "@/services/api";

// ===================== HELPERS =====================
const unwrap = <T>(response: any): T => {
  return (response?.data?.data ?? response?.data) as T;
};

// ===================== TYPES =====================
export interface DashboardStats {
  today_revenue: number;
  today_orders: number;
  active_orders: number;
  table_occupancy: number;
  staff_active: string;
  pending_kitchen_orders: number;
  low_inventory_items: number;
  menu_items: string;
}

export interface HotelInfo {
  id: string;
  hotel_name: string;
  hotel_slug: string;
  admin_name?: string;
  admin_email?: string;
  hotell_phone?: string;
  hotel_address?: string;
  city?: string;
  country?: string;
  is_active?: boolean;
  is_verified?: boolean;
  subscription_status?: string;
  subscription_plan_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface Order {
  id: string;
  order_number: string;
  table_id: string;
  table_number: string;
  customer_name: string;
  amount: number;
  status:
    | "pending"
    | "confirmed"
    | "preparing"
    | "ready"
    | "served"
    | "completed"
    | "cancelled";
  items: number;
  time: string;
  waiter_id?: string;
  waiter_name?: string;
  created_at: string;
  payment_status?: "pending" | "partial" | "paid" | "refunded";
}

// export interface Staff {
//   id: string;
//   staff_code: string;
//   full_name: string;
//   role:
//     | "manager"
//     | "waiter"
//     | "chef"
//     | "cashier"
//     | "cleaner"
//     | "receptionist"
//     | "cook";
//   phone?: string;
//   email?: string;
//   status: "active" | "inactive";
//   today_orders: number;
//   today_sales?: number;
//   total_orders?: number;
//   is_active: boolean;
//   pin_code?: string;
//   last_login?: string;
//   created_at: string;
// }

export interface Staff {
  id: string;
  staff_code: string;

  // ✅ backend returns "name"
  name: string;

  role:
    | "manager"
    | "waiter"
    | "chef"
    | "cashier"
    | "cleaner"
    | "receptionist"
    | "cook";

  phone?: string;
  email?: string;

  status: "active" | "inactive";
  is_active: boolean;

  password?: string;
  permissions?: any;

  total_orders?: number;
  today_orders: number;
  today_sales?: number;

  created_at?: string;
  updated_at?: string;
}

// export interface MenuItem {
//   id: string;
//   item_code: string;
//   name: string;
//   description?: string;
//   category: string;
//   category_id?: string;
//   price: number;
//   cost_price?: number;
//   tax_rate: number;
//   popularity: number;
//   availability: boolean;
//   is_available: boolean;
//   is_popular: boolean;
//   is_vegetarian?: boolean;
//   preparation_time?: number;
//   image_url?: string;
//   today_orders: number;
//   weekly_orders: number;
//   created_at: string;
// }

export interface MenuItem {
  id: string;
  item_code: string;
  name: string;
  description?: string;

  // ✅ display-friendly
  category: string; // category_name from backend
  category_id: string;

  price: number;
  cost_price?: number | null;
  tax_rate: number;

  preparation_time?: number | null;

  popularity: number; // derived
  is_available: boolean;
  is_popular: boolean;
  is_vegetarian?: boolean;
  dietary_info?: string | null;

  image_url?: string | null;

  today_orders: number;
  weekly_orders: number;

  created_at: string;
  updated_at?: string;
}

export interface Table {
  id: string;
  table_number: string;
  table_name?: string;
  capacity: number;
  floor_number?: number;
  section?: string;
  status: "available" | "occupied" | "reserved" | "cleaning";
  waiter_id?: string;
  waiter_name?: string;
  order_amount?: number;
  qr_code_url?: string;
  today_orders?: number;
  today_sales?: number;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  items: number;
  available_items: number;
  is_active: boolean;
  display_order: number;
  image_url?: string;
  avg_price: number;
  created_at: string;
}

export interface InventoryItem {
  id: string;
  item_code: string;
  item_name: string;
  description?: string;
  category: string;
  category_id?: string;
  current_quantity: number;
  min_quantity: number;
  max_quantity?: number;
  unit: string;
  unit_cost: number;
  total_value: number;
  status:
    | "in_stock"
    | "low_stock"
    | "out_of_stock"
    | "over_stock"
    | "discontinued";
  supplier_name?: string;
  supplier_contact?: string;
  last_purchased_date?: string;
  daily_consumption: number;
  monthly_consumption_avg?: number;
  days_of_stock?: number;
  expiry_date?: string;
  location?: string;
  barcode?: string;
  is_active: boolean;
  created_at: string;
}

export interface InventoryTransaction {
  id: string;
  inventory_id: string;
  transaction_type:
    | "purchase"
    | "sale"
    | "adjustment"
    | "wastage"
    | "transfer"
    | "production"
    | "consumption";
  quantity_before: number;
  quantity_change: number;
  quantity_after: number;
  unit_price?: number;
  total_price?: number;
  reference_number?: string;
  order_id?: string;
  supplier_id?: string;
  staff_id?: string;
  notes?: string;
  reason?: string;
  created_by: string;
  created_at: string;
}

export interface KitchenOrder {
  id: string;
  order_id: string;
  order_number: string;
  table_id: string;
  table_number: string;
  items: string[];
  status: "pending" | "preparing" | "ready" | "served";
  time: string;
  chef_id?: string;
  chef_name?: string;
  created_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  menu_item_id: string;
  item_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  special_instructions?: string;
  status: "pending" | "preparing" | "ready" | "served" | "cancelled";
  prepared_by?: string;
  prepared_at?: string;
  served_by?: string;
  served_at?: string;
  created_at: string;
}

export interface SidebarCounts {
  staff: number;
  category: number;
  menu: number;
  tables: number;
  orders: number;
  kitchen: number;
  inventory: number;
}

export interface DashboardData {
  hotel: HotelInfo | null;
  stats: DashboardStats;
  recent_orders: Order[];
  staff: Staff[];
  tables: Table[];
  categories: Category[];
  menu_items: MenuItem[];
  inventory: InventoryItem[];
  kitchen_orders: KitchenOrder[];
  sidebar_counts: SidebarCounts;
  hotel_name?: string;
  hotel_slug?: string;
  last_updated: string;
}

interface DashboardState {
  data: DashboardData | null;
  loading: boolean;
  error: string | null;
  lastFetched: string | null;
  staffList: Staff[];
  menuItemsList: MenuItem[];
  tablesList: Table[];
  categoriesList: Category[];
  inventoryList: InventoryItem[];
  ordersList: Order[];
  kitchenOrdersList: KitchenOrder[];
}

const initialState: DashboardState = {
  data: null,
  loading: false,
  error: null,
  lastFetched: null,
  staffList: [],
  menuItemsList: [],
  tablesList: [],
  categoriesList: [],
  inventoryList: [],
  ordersList: [],
  kitchenOrdersList: [],
};

const normalizeMenuItem = (raw: any): MenuItem => {
  const weeklyOrders = Number(raw?.weekly_orders ?? 0);
  return {
    id: raw.id,
    item_code: raw.item_code,
    name: raw.name,
    description: raw.description ?? "",

    category_id: raw.category_id,
    category: raw.category_name ?? raw.category ?? "",

    price: Number(raw.price ?? 0),
    cost_price:
      raw.cost_price !== null && raw.cost_price !== undefined
        ? Number(raw.cost_price)
        : null,
    tax_rate: Number(raw.tax_rate ?? 0),
    preparation_time: raw.preparation_time ?? null,

    is_available: !!raw.is_available,
    is_popular: !!raw.is_popular,
    is_vegetarian: !!raw.is_vegetarian,
    dietary_info: raw.dietary_info ?? null,

    image_url: raw.image_url ?? null,

    today_orders: Number(raw.today_orders ?? 0),
    weekly_orders: weeklyOrders,

    popularity: Number(
      raw.popularity ?? Math.min(100, Math.round((weeklyOrders / 50) * 100)),
    ),

    created_at: raw.created_at,
    updated_at: raw.updated_at ?? raw.created_at,
  };
};

// ===================== ASYNC THUNKS =====================

// ✅ Main dashboard data (NOW: /api/hotel/data)
export const fetchDashboardData = createAsyncThunk<
  DashboardData,
  void,
  { rejectValue: string }
>("dashboard/fetchDashboardData", async (_, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/dashboard`);
    console.log(
      "this is the response from fetchDashboardData:- ",
      unwrap<DashboardData>(response),
    );
    return unwrap<DashboardData>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to fetch dashboard data"),
    );
  }
});

// // Staff (NOW: /api/hotel/data/staff)
// export const fetchStaff = createAsyncThunk<
//   Staff[],
//   string | void,
//   { rejectValue: string }
// >("dashboard/fetchStaff", async (_maybeHotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/data/staff`);
//     return unwrap<Staff[]>(response);
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch staff"));
//   }
// });

// export const createStaff = createAsyncThunk<
//   Staff,
//   { hotelSlug?: string; staffData: Partial<Staff> },
//   { rejectValue: string }
// >("dashboard/createStaff", async ({ staffData }, thunkApi) => {
//   try {
//     const response = await api.post(`/api/hotel/data/staff`, staffData);
//     return unwrap<Staff>(response);
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to create staff"));
//   }
// });

// export const updateStaff = createAsyncThunk<
//   Staff,
//   { hotelSlug?: string; staffId: string; staffData: Partial<Staff> },
//   { rejectValue: string }
// >("dashboard/updateStaff", async ({ staffId, staffData }, thunkApi) => {
//   try {
//     const response = await api.put(`/api/hotel/data/staff/${staffId}`, staffData);
//     return unwrap<Staff>(response);
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to update staff"));
//   }
// });

// export const deleteStaff = createAsyncThunk<
//   string,
//   { hotelSlug?: string; staffId: string },
//   { rejectValue: string }
// >("dashboard/deleteStaff", async ({ staffId }, thunkApi) => {
//   try {
//     await api.delete(`/api/hotel/data/staff/${staffId}`);
//     return staffId;
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(getApiError(err, "Failed to delete staff"));
//   }
// });

// ✅ Staff (NOW: /api/hotel/data/staff)
export const fetchStaff = createAsyncThunk<
  Staff[],
  string | void,
  { rejectValue: string }
>("dashboard/fetchStaff", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/staff`);

    // backend returns: { success: true, staff: [...] }
    const root = response?.data;
    console.log("this is the fetchstaff response:- ", root);

    const staffArr = Array.isArray(root?.staff) ? root.staff : [];

    return staffArr as Staff[];
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch staff"));
  }
});

export const createStaff = createAsyncThunk<
  Staff,
  { hotelSlug?: string; staffData: any },
  { rejectValue: string }
>("dashboard/createStaff", async ({ staffData }, thunkApi) => {
  try {
    // backend expects phone_number not phone

    const payload = {
      full_name: staffData.full_name ?? staffData.name ?? "",
      role: staffData.role,
      phone_number: staffData.phone ?? staffData.phone_number ?? null,
      email: staffData.email ?? null,
      password: staffData.password ?? null,
      permissions: staffData.permissions ?? undefined,
    };
    console.log("this is the create staff payload:- ", payload);

    const response = await api.post(`/api/hotel/data/staff`, payload);

    // backend returns: { success:true, staff:{...} }
    const created = response?.data?.staff;

    // normalize to Staff type used in UI (ensure "name" exists)
    const normalized: Staff = {
      id: created?.id,
      staff_code: created?.staff_code,
      name: created?.full_name ?? created?.name ?? payload.full_name,
      role: created?.role ?? payload.role,
      phone: created?.phone_number ?? staffData.phone ?? undefined,
      email: created?.email ?? payload.email ?? undefined,
      status: created?.is_active ? "active" : "inactive",
      is_active: !!created?.is_active,
      today_orders: 0,
      created_at: created?.created_at,
      updated_at: created?.updated_at,
    };

    return normalized;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to create staff"));
  }
});

export const updateStaff = createAsyncThunk<
  Staff,
  { hotelSlug?: string; staffId: string; staffData: any },
  { rejectValue: string }
>("dashboard/updateStaff", async ({ staffId, staffData }, thunkApi) => {
  try {
    // backend update expects phone_number, and can accept full_name
    const payload: any = {};
    if (staffData.full_name !== undefined)
      payload.full_name = staffData.full_name;
    if (staffData.name !== undefined) payload.full_name = staffData.name;
    if (staffData.role !== undefined) payload.role = staffData.role;
    if (staffData.phone !== undefined) payload.phone_number = staffData.phone;
    if (staffData.email !== undefined) payload.email = staffData.email;
    // if (staffData.password !== undefined) payload.pin_code = staffData.pin_code;
    if (staffData.permissions !== undefined)
      payload.permissions = staffData.permissions;
    if (staffData.is_active !== undefined)
      payload.is_active = staffData.is_active;

    const response = await api.put(`/api/hotel/data/staff/${staffId}`, payload);

    // backend returns: { success:true, staff: {...db row...} }
    const updated = response?.data?.staff;

    // normalize db row -> Staff shape
    const normalized: Staff = {
      id: updated?.id,
      staff_code: updated?.staff_code,
      name: updated?.full_name ?? updated?.name ?? "",
      role: updated?.role,
      phone: updated?.phone_number ?? updated?.phone ?? undefined,
      email: updated?.email ?? undefined,
      status: updated?.is_active ? "active" : "inactive",
      is_active: !!updated?.is_active,
      today_orders: updated?.today_orders ?? 0,
      today_sales: updated?.today_sales ?? 0,
      total_orders: updated?.total_orders ?? 0,
      password: updated?.password ?? undefined,
      permissions: updated?.permissions ?? undefined,
      created_at: updated?.created_at,
      updated_at: updated?.updated_at,
    };

    return normalized;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to update staff"));
  }
});

export const deleteStaff = createAsyncThunk<
  string,
  { hotelSlug?: string; staffId: string },
  { rejectValue: string }
>("dashboard/deleteStaff", async ({ staffId }, thunkApi) => {
  try {
    await api.delete(`/api/hotel/data/staff/${staffId}`);

    // backend deactivates, but for UI we remove from list
    return staffId;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to delete staff"));
  }
});

// Categories (NOW: /api/hotel/data/menu/categories)
// export const fetchCategories = createAsyncThunk<
//   Category[],
//   string | void,
//   { rejectValue: string }
// >("dashboard/fetchCategories", async (_maybeHotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/data/menu/categories`);
//     console.log(
//       "this is the categories response:- ",
//       unwrap<Category[]>(response),
//     );
//     return unwrap<Category[]>(response);
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(
//       getApiError(err, "Failed to fetch categories"),
//     );
//   }
// });

export const fetchCategories = createAsyncThunk<
  Category[],
  void,
  { rejectValue: string }
>("dashboard/fetchCategories", async (_, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/menu/categories`);

    const root = response?.data;

    // ✅ support: { success:true, categories:[...] }
    const categoriesArr = Array.isArray(root?.categories)
      ? root.categories
      : Array.isArray(root?.data)
        ? root.data
        : Array.isArray(root)
          ? root
          : [];

    console.log("categories raw:", root);
    console.log("categories arr:", categoriesArr);

    return categoriesArr as Category[];
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to fetch categories"),
    );
  }
});

export const createCategory = createAsyncThunk<
  Category,
  { hotelSlug?: string; categoryData: Partial<Category> },
  { rejectValue: string }
>("dashboard/createCategory", async ({ categoryData }, thunkApi) => {
  try {
    const response = await api.post(
      `/api/hotel/data/menu/categories`,
      categoryData,
    );
    return unwrap<Category>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to create category"),
    );
  }
});

export const updateCategory = createAsyncThunk<
  Category,
  { hotelSlug?: string; categoryId: string; categoryData: Partial<Category> },
  { rejectValue: string }
>(
  "dashboard/updateCategory",
  async ({ categoryId, categoryData }, thunkApi) => {
    try {
      console.log('this is the upadte category data:- ', categoryData);
      const response = await api.put(
        `/api/hotel/data/menu/categories/${categoryId}`,
        categoryData,
      );
      return unwrap<Category>(response);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        getApiError(err, "Failed to update category"),
      );
    }
  },
);

export const deleteCategory = createAsyncThunk<
  string,
  { hotelSlug?: string; categoryId: string },
  { rejectValue: string }
>("dashboard/deleteCategory", async ({ categoryId }, thunkApi) => {
  try {
    await api.delete(`/api/hotel/data/menu/categories/${categoryId}`);
    return categoryId;
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to delete category"),
    );
  }
});

// Menu Items (NOW: /api/hotel/data/menu/items)
// export const fetchMenuItems = createAsyncThunk<
//   MenuItem[],
//   string | void,
//   { rejectValue: string }
// >("dashboard/fetchMenuItems", async (_maybeHotelSlug, thunkApi) => {
//   try {
//     const response = await api.get(`/api/hotel/data/menu/items`);
//     return unwrap<MenuItem[]>(response);
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(
//       getApiError(err, "Failed to fetch menu items"),
//     );
//   }
// });

export const fetchMenuItems = createAsyncThunk<
  MenuItem[],
  string | void,
  { rejectValue: string }
>("dashboard/fetchMenuItems", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/menu/items`);
    console.log('response data:', response?.data);
    const root = response?.data;

    // backend: { success:true, items:[...] }
    const arr = Array.isArray(root?.items)
      ? root.items
      : Array.isArray(root?.data)
        ? root.data
        : Array.isArray(root)
          ? root
          : [];

    return arr.map(normalizeMenuItem);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to fetch menu items"),
    );
  }
});

// export const createMenuItem = createAsyncThunk<
//   MenuItem,
//   { hotelSlug?: string; menuItemData: Partial<MenuItem> },
//   { rejectValue: string }
// >("dashboard/createMenuItem", async ({ menuItemData }, thunkApi) => {
//   try {
//     console.log("this is the create menu item data:- ", menuItemData);
//     const response = await api.post(`/api/hotel/data/menu/items`, menuItemData);
//     return unwrap<MenuItem>(response);
//   } catch (err: any) {
//     return thunkApi.rejectWithValue(
//       getApiError(err, "Failed to create menu item"),
//     );
//   }
// });
export const createMenuItem = createAsyncThunk<
  MenuItem,
  { hotelSlug?: string; menuItemData: any },
  { rejectValue: string }
>("dashboard/createMenuItem", async ({ menuItemData }, thunkApi) => {
  try {
    // ✅ send what backend expects
    const payload = {
      name: menuItemData.name,
      category_id: menuItemData.category_id, // ✅ required by backend
      description: menuItemData.description ?? null,
      price: menuItemData.price,
      cost_price: menuItemData.cost_price ?? null,
      tax_rate: menuItemData.tax_rate ?? 0,
      preparation_time: menuItemData.preparation_time ?? null,
      is_available: menuItemData.is_available ?? true,
      is_popular: menuItemData.is_popular ?? false,
      is_vegetarian: menuItemData.is_vegetarian ?? false,
      dietary_info: menuItemData.dietary_info ?? null,
      image_url: menuItemData.image_url ?? null,
    };

    const response = await api.post(`/api/hotel/data/menu/items`, payload);

    // backend create returns: { success:true, item:{...minimal...} }
    const created = response?.data?.item;

    // We don't have category_name in create response.
    // ✅ Best: immediately refetch menu items in UI after create
    // But still return a normalized item with category from lookup if present
    const state: any = thunkApi.getState();
    const categories = state?.dashboard?.categoriesList || [];
    const catName =
      categories.find((c: any) => c.id === payload.category_id)?.name ?? "";

    return normalizeMenuItem({
      ...created,
      category_id: payload.category_id,
      category_name: catName,
      tax_rate: payload.tax_rate,
      is_popular: payload.is_popular,
      is_vegetarian: payload.is_vegetarian,
      dietary_info: payload.dietary_info,
      image_url: payload.image_url,
      weekly_orders: 0,
      today_orders: 0,
      updated_at: created?.created_at,
    });
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to create menu item"),
    );
  }
});

// export const updateMenuItem = createAsyncThunk<
//   MenuItem,
//   { hotelSlug?: string; menuItemId: string; menuItemData: Partial<MenuItem> },
//   { rejectValue: string }
// >(
//   "dashboard/updateMenuItem",
//   async ({ menuItemId, menuItemData }, thunkApi) => {
//     try {
//       const response = await api.put(
//         `/api/hotel/data/menu/items/${menuItemId}`,
//         menuItemData,
//       );
//       return unwrap<MenuItem>(response);
//     } catch (err: any) {
//       return thunkApi.rejectWithValue(
//         getApiError(err, "Failed to update menu item"),
//       );
//     }
//   },
// );
export const updateMenuItem = createAsyncThunk<
  MenuItem,
  { hotelSlug?: string; menuItemId: string; menuItemData: any },
  { rejectValue: string }
>(
  "dashboard/updateMenuItem",
  async ({ menuItemId, menuItemData }, thunkApi) => {
    try {
      const payload: any = {};
      if (menuItemData.name !== undefined) payload.name = menuItemData.name;
      if (menuItemData.category_id !== undefined)
        payload.category_id = menuItemData.category_id;
      if (menuItemData.description !== undefined)
        payload.description = menuItemData.description;
      if (menuItemData.price !== undefined) payload.price = menuItemData.price;
      if (menuItemData.cost_price !== undefined)
        payload.cost_price = menuItemData.cost_price;
      if (menuItemData.tax_rate !== undefined)
        payload.tax_rate = menuItemData.tax_rate;
      if (menuItemData.preparation_time !== undefined)
        payload.preparation_time = menuItemData.preparation_time;
      if (menuItemData.is_available !== undefined)
        payload.is_available = menuItemData.is_available;
      if (menuItemData.is_popular !== undefined)
        payload.is_popular = menuItemData.is_popular;
      if (menuItemData.is_vegetarian !== undefined)
        payload.is_vegetarian = menuItemData.is_vegetarian;
      if (menuItemData.dietary_info !== undefined)
        payload.dietary_info = menuItemData.dietary_info;
      if (menuItemData.image_url !== undefined)
        payload.image_url = menuItemData.image_url;

      const response = await api.put(
        `/api/hotel/data/menu/items/${menuItemId}`,
        payload,
      );

      // backend update returns: { success:true, item:{ minimal } }
      const updated = response?.data?.item;

      // fill category_name from store for UI
      const state: any = thunkApi.getState();
      const categories = state?.dashboard?.categoriesList || [];
      const catId =
        payload.category_id ?? menuItemData.category_id ?? updated?.category_id;
      const catName =
        categories.find((c: any) => c.id === catId)?.name ??
        menuItemData.category ??
        "";

      return normalizeMenuItem({
        ...menuItemData, // keep old fields if backend is minimal
        ...updated,
        category_id: catId,
        category_name: catName,
        updated_at: updated?.updated_at ?? new Date().toISOString(),
      });
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        getApiError(err, "Failed to update menu item"),
      );
    }
  },
);

export const deleteMenuItem = createAsyncThunk<
  string,
  { hotelSlug?: string; menuItemId: string },
  { rejectValue: string }
>("dashboard/deleteMenuItem", async ({ menuItemId }, thunkApi) => {
  try {
    await api.delete(`/api/hotel/data/menu/items/${menuItemId}`);
    return menuItemId;
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to delete menu item"),
    );
  }
});

// Tables (NOW: /api/hotel/data/tables)
export const fetchTables = createAsyncThunk<
  Table[],
  string | void,
  { rejectValue: string }
>("dashboard/fetchTables", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/tables`);
    console.log(
      "this is the fetch tables response:- ",
      unwrap<Table[]>(response),
    );
    return unwrap<Table[]>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch tables"));
  }
});

export const createTable = createAsyncThunk<
  Table,
  { hotelSlug?: string; tableData: Partial<Table> },
  { rejectValue: string }
>("dashboard/createTable", async ({ tableData }, thunkApi) => {
  try {
    console.log("this is the create table data:- ", tableData);
    const response = await api.post(`/api/hotel/data/tables`, tableData);
    console.log(
      "this is the create table response:- ",
      unwrap<Table>(response),
    );
    return unwrap<Table>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to create table"));
  }
});

export const updateTable = createAsyncThunk<
  Table,
  { hotelSlug?: string; tableId: string; tableData: Partial<Table> },
  { rejectValue: string }
>("dashboard/updateTable", async ({ tableId, tableData }, thunkApi) => {
  try {
    const response = await api.put(
      `/api/hotel/data/tables/${tableId}`,
      tableData,
    );
    return unwrap<Table>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to update table"));
  }
});

export const updateTableStatus = createAsyncThunk<
  Table,
  { hotelSlug?: string; tableId: string; status: Table["status"] },
  { rejectValue: string }
>("dashboard/updateTableStatus", async ({ tableId, status }, thunkApi) => {
  try {
    const response = await api.put(`/api/hotel/data/tables/${tableId}/status`, {
      status,
    });
    return unwrap<Table>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to update table status"),
    );
  }
});

export const deleteTable = createAsyncThunk<
  string,
  { hotelSlug?: string; tableId: string },
  { rejectValue: string }
>("dashboard/deleteTable", async ({ tableId }, thunkApi) => {
  try {
    await api.delete(`/api/hotel/data/tables/${tableId}`);
    return tableId;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to delete table"));
  }
});

// Orders (NOW: /api/hotel/data/orders)
export const fetchOrders = createAsyncThunk<
  Order[],
  string | void,
  { rejectValue: string }
>("dashboard/fetchOrders", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/orders`);
    return unwrap<Order[]>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch orders"));
  }
});

export const fetchOrderById = createAsyncThunk<
  Order,
  { hotelSlug?: string; orderId: string },
  { rejectValue: string }
>("dashboard/fetchOrderById", async ({ orderId }, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/orders/${orderId}`);
    return unwrap<Order>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to fetch order"));
  }
});

export const createOrder = createAsyncThunk<
  Order,
  { hotelSlug?: string; orderData: Partial<Order> },
  { rejectValue: string }
>("dashboard/createOrder", async ({ orderData }, thunkApi) => {
  try {
    const response = await api.post(`/api/hotel/data/orders`, orderData);
    return unwrap<Order>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to create order"));
  }
});

export const updateOrderStatus = createAsyncThunk<
  Order,
  { hotelSlug?: string; orderId: string; status: Order["status"] },
  { rejectValue: string }
>("dashboard/updateOrderStatus", async ({ orderId, status }, thunkApi) => {
  try {
    const response = await api.put(`/api/hotel/data/orders/${orderId}/status`, {
      status,
    });
    return unwrap<Order>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to update order status"),
    );
  }
});

export const updatePaymentStatus = createAsyncThunk<
  Order,
  {
    hotelSlug?: string;
    orderId: string;
    paymentStatus: Order["payment_status"];
  },
  { rejectValue: string }
>(
  "dashboard/updatePaymentStatus",
  async ({ orderId, paymentStatus }, thunkApi) => {
    try {
      const response = await api.put(
        `/api/hotel/data/orders/${orderId}/payment`,
        {
          payment_status: paymentStatus,
        },
      );
      return unwrap<Order>(response);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        getApiError(err, "Failed to update payment status"),
      );
    }
  },
);

export const deleteOrder = createAsyncThunk<
  string,
  { hotelSlug?: string; orderId: string },
  { rejectValue: string }
>("dashboard/deleteOrder", async ({ orderId }, thunkApi) => {
  try {
    await api.delete(`/api/hotel/data/orders/${orderId}`);
    return orderId;
  } catch (err: any) {
    return thunkApi.rejectWithValue(getApiError(err, "Failed to delete order"));
  }
});

// Kitchen Orders (NOW: /api/hotel/data/kitchen/orders)
export const fetchKitchenOrders = createAsyncThunk<
  KitchenOrder[],
  string | void,
  { rejectValue: string }
>("dashboard/fetchKitchenOrders", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/kitchen/orders`);
    return unwrap<KitchenOrder[]>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to fetch kitchen orders"),
    );
  }
});

export const updateKitchenItemStatus = createAsyncThunk<
  OrderItem,
  {
    hotelSlug?: string;
    orderId: string;
    itemId: string;
    status: OrderItem["status"];
  },
  { rejectValue: string }
>(
  "dashboard/updateKitchenItemStatus",
  async ({ orderId, itemId, status }, thunkApi) => {
    try {
      const response = await api.put(
        `/api/hotel/data/kitchen/orders/${orderId}/items/${itemId}/status`,
        { status },
      );
      return unwrap<OrderItem>(response);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        getApiError(err, "Failed to update kitchen item status"),
      );
    }
  },
);

// Inventory (NOW: /api/hotel/data/inventory)
export const fetchInventory = createAsyncThunk<
  InventoryItem[],
  string | void,
  { rejectValue: string }
>("dashboard/fetchInventory", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/inventory`);
    return unwrap<InventoryItem[]>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to fetch inventory"),
    );
  }
});

export const fetchLowStockInventory = createAsyncThunk<
  InventoryItem[],
  string | void,
  { rejectValue: string }
>("dashboard/fetchLowStockInventory", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/inventory/low-stock`);
    return unwrap<InventoryItem[]>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to fetch low stock inventory"),
    );
  }
});

export const fetchInventoryValuation = createAsyncThunk<
  any,
  string | void,
  { rejectValue: string }
>("dashboard/fetchInventoryValuation", async (_maybeHotelSlug, thunkApi) => {
  try {
    const response = await api.get(`/api/hotel/data/inventory/valuation`);
    return unwrap<any>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to fetch inventory valuation"),
    );
  }
});

export const createInventoryItem = createAsyncThunk<
  InventoryItem,
  { hotelSlug?: string; inventoryData: Partial<InventoryItem> },
  { rejectValue: string }
>("dashboard/createInventoryItem", async ({ inventoryData }, thunkApi) => {
  try {
    const response = await api.post(`/api/hotel/data/inventory`, inventoryData);
    return unwrap<InventoryItem>(response);
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to create inventory item"),
    );
  }
});

export const updateInventoryItem = createAsyncThunk<
  InventoryItem,
  {
    hotelSlug?: string;
    inventoryId: string;
    inventoryData: Partial<InventoryItem>;
  },
  { rejectValue: string }
>(
  "dashboard/updateInventoryItem",
  async ({ inventoryId, inventoryData }, thunkApi) => {
    try {
      const response = await api.put(
        `/api/hotel/data/inventory/${inventoryId}`,
        inventoryData,
      );
      return unwrap<InventoryItem>(response);
    } catch (err: any) {
      return thunkApi.rejectWithValue(
        getApiError(err, "Failed to update inventory item"),
      );
    }
  },
);

export const deleteInventoryItem = createAsyncThunk<
  string,
  { hotelSlug?: string; inventoryId: string },
  { rejectValue: string }
>("dashboard/deleteInventoryItem", async ({ inventoryId }, thunkApi) => {
  try {
    await api.delete(`/api/hotel/data/inventory/${inventoryId}`);
    return inventoryId;
  } catch (err: any) {
    return thunkApi.rejectWithValue(
      getApiError(err, "Failed to delete inventory item"),
    );
  }
});

// ===================== SLICE =====================
const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearDashboardError: (state) => {
      state.error = null;
    },
    updateOrderStatusLocal: (
      state,
      action: PayloadAction<{ orderId: string; status: Order["status"] }>,
    ) => {
      if (state.data) {
        const order = state.data.recent_orders.find(
          (o) => o.id === action.payload.orderId,
        );
        if (order) order.status = action.payload.status;
      }
      const order = state.ordersList.find(
        (o) => o.id === action.payload.orderId,
      );
      if (order) order.status = action.payload.status;
    },
    updateTableStatusLocal: (
      state,
      action: PayloadAction<{ tableId: string; status: Table["status"] }>,
    ) => {
      if (state.data) {
        const table = state.data.tables.find(
          (t) => t.id === action.payload.tableId,
        );
        if (table) table.status = action.payload.status;
      }
      const table = state.tablesList.find(
        (t) => t.id === action.payload.tableId,
      );
      if (table) table.status = action.payload.status;
    },
    updateStaffStatusLocal: (
      state,
      action: PayloadAction<{ staffId: string; status: "active" | "inactive" }>,
    ) => {
      if (state.data) {
        const staff = state.data.staff.find(
          (s) => s.id === action.payload.staffId,
        );
        if (staff) {
          staff.status = action.payload.status;
          staff.is_active = action.payload.status === "active";
        }
      }
      const staff = state.staffList.find(
        (s) => s.id === action.payload.staffId,
      );
      if (staff) {
        staff.status = action.payload.status;
        staff.is_active = action.payload.status === "active";
      }
    },
    updateInventoryStatusLocal: (
      state,
      action: PayloadAction<{
        inventoryId: string;
        status: InventoryItem["status"];
      }>,
    ) => {
      if (state.data) {
        const item = state.data.inventory.find(
          (i) => i.id === action.payload.inventoryId,
        );
        if (item) item.status = action.payload.status;
      }
      const item = state.inventoryList.find(
        (i) => i.id === action.payload.inventoryId,
      );
      if (item) item.status = action.payload.status;
    },
    updateKitchenOrderStatusLocal: (
      state,
      action: PayloadAction<{
        orderId: string;
        status: KitchenOrder["status"];
      }>,
    ) => {
      if (state.data) {
        const order = state.data.kitchen_orders.find(
          (o) => o.id === action.payload.orderId,
        );
        if (order) order.status = action.payload.status;
      }
      const order = state.kitchenOrdersList.find(
        (o) => o.id === action.payload.orderId,
      );
      if (order) order.status = action.payload.status;
    },
    setDashboardData: (state, action: PayloadAction<DashboardData>) => {
      state.data = action.payload;
      state.lastFetched = new Date().toISOString();
    },
    resetDashboard: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.lastFetched = new Date().toISOString();
      })
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchStaff.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStaff.fulfilled, (state, action) => {
        state.loading = false;
        state.staffList = Array.isArray(action.payload) ? action.payload : [];
        if (state.data) state.data.staff = state.staffList;
      })
      .addCase(fetchStaff.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      .addCase(createStaff.fulfilled, (state, action) => {
        state.staffList = [action.payload, ...state.staffList];
        if (state.data)
          state.data.staff = [action.payload, ...(state.data.staff || [])];
      })

      .addCase(updateStaff.fulfilled, (state, action) => {
        state.staffList = state.staffList.map((s) =>
          s.id === action.payload.id ? action.payload : s,
        );
        if (state.data) {
          state.data.staff = (state.data.staff || []).map((s) =>
            s.id === action.payload.id ? action.payload : s,
          );
        }
      })

      .addCase(deleteStaff.fulfilled, (state, action) => {
        const staffId = action.payload;
        state.staffList = state.staffList.filter((s) => s.id !== staffId);
        if (state.data)
          state.data.staff = (state.data.staff || []).filter(
            (s) => s.id !== staffId,
          );
      })
      // inside extraReducers(builder)...
      .addCase(fetchTables.fulfilled, (state, action) => {
        state.loading = false;
        state.tablesList = action.payload;
        if (state.data) state.data.tables = action.payload;
      })
      .addCase(createTable.fulfilled, (state, action) => {
        state.tablesList = [action.payload, ...state.tablesList];
        if (state.data)
          state.data.tables = [action.payload, ...state.data.tables];
      })
      .addCase(updateTable.fulfilled, (state, action) => {
        state.tablesList = state.tablesList.map((t) =>
          t.id === action.payload.id ? action.payload : t,
        );
        if (state.data)
          state.data.tables = state.data.tables.map((t) =>
            t.id === action.payload.id ? action.payload : t,
          );
      })
      .addCase(deleteTable.fulfilled, (state, action) => {
        const tableId = action.payload;
        state.tablesList = state.tablesList.filter((t) => t.id !== tableId);
        if (state.data)
          state.data.tables = state.data.tables.filter((t) => t.id !== tableId);
      })
      .addCase(updateTableStatus.fulfilled, (state, action) => {
        state.tablesList = state.tablesList.map((t) =>
          t.id === action.payload.id ? action.payload : t,
        );
        if (state.data)
          state.data.tables = state.data.tables.map((t) =>
            t.id === action.payload.id ? action.payload : t,
          );
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = Array.isArray(action.payload)
          ? action.payload
          : [];
        if (state.data) state.data.categories = state.categoriesList;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Menu Items reducers
      .addCase(fetchMenuItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMenuItems.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItemsList = Array.isArray(action.payload)
          ? action.payload
          : [];
        if (state.data) state.data.menu_items = state.menuItemsList;
      })
      .addCase(fetchMenuItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createMenuItem.fulfilled, (state, action) => {
        state.menuItemsList = [action.payload, ...state.menuItemsList];
        if (state.data)
          state.data.menu_items = [
            action.payload,
            ...(state.data.menu_items || []),
          ];
      })
      .addCase(updateMenuItem.fulfilled, (state, action) => {
        state.menuItemsList = state.menuItemsList.map((m) =>
          m.id === action.payload.id ? action.payload : m,
        );
        if (state.data) {
          state.data.menu_items = (state.data.menu_items || []).map((m) =>
            m.id === action.payload.id ? action.payload : m,
          );
        }
      })
      .addCase(deleteMenuItem.fulfilled, (state, action) => {
        const id = action.payload;
        state.menuItemsList = state.menuItemsList.filter((m) => m.id !== id);
        if (state.data)
          state.data.menu_items = (state.data.menu_items || []).filter(
            (m) => m.id !== id,
          );
      });
  },
});

export const {
  clearDashboardError,
  updateOrderStatusLocal,
  updateTableStatusLocal,
  updateStaffStatusLocal,
  updateInventoryStatusLocal,
  updateKitchenOrderStatusLocal,
  setDashboardData,
  resetDashboard,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
