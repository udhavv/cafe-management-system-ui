// 'use client'

// import { useState } from 'react'
// import {
//   Hotel,
//   Menu,
//   X,
//   Check,
//   Star,
//   ArrowRight,
//   Users,
//   BarChart3,
//   CreditCard,
//   UtensilsCrossed,
//   ChefHat,
//   Table,
//   Receipt,
//   Smartphone,
//   Headphones,
//   Shield,
//   Zap,
//   TrendingUp,
//   Cloud,
//   QrCode,
//   TabletSmartphone,
//   Calendar,
//   Clock,
//   MessageSquare,
//   Award,
//   Trophy,
//   Sparkles,
//   BadgeCheck,
//   Target,
//   ArrowUpRight,
//   ChevronRight,
//   LogOut,
//   Play,
//   Sparkle,
//   Gem,
//   Crown
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'

// // ===================== TYPES =====================
// interface User {
//   id: string;
//   email: string;
//   name: string;
//   isSubscribed: boolean;
//   role?: 'hotel_admin' | 'staff';
//   hotelName?: string;
//   subscriptionPlan?: string;
// }

// interface SubscriptionPlan {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   billingCycle: 'monthly' | 'yearly';
//   features: string[];
//   popular?: boolean;
//   maxStaff: number;
//   maxTables: number;
//   maxMenuItems: number;
//   analytics: boolean;
//   support: 'basic' | 'priority' | 'dedicated';
// }

// interface Feature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   role: string;
//   hotel: string;
//   content: string;
//   rating: number;
//   avatarGradient: string;
// }

// // ===================== DUMMY DATA =====================
// const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
//   {
//     id: 'essential',
//     name: 'Essential',
//     description: 'Perfect for small cafes & bistros',
//     price: 79,
//     billingCycle: 'monthly',
//     features: [
//       'Up to 10 staff members',
//       '15 tables maximum',
//       '100 menu items',
//       'Basic order management',
//       'Email support',
//       'Mobile app access',
//       'Basic reporting',
//       'QR code ordering',
//     ],
//     maxStaff: 10,
//     maxTables: 15,
//     maxMenuItems: 100,
//     analytics: false,
//     support: 'basic',
//   },
//   {
//     id: 'professional',
//     name: 'Professional',
//     description: 'For growing hotels & restaurants',
//     price: 149,
//     billingCycle: 'monthly',
//     features: [
//       'Up to 25 staff members',
//       '40 tables maximum',
//       '300 menu items',
//       'Advanced order management',
//       'Kitchen display system',
//       'Priority support',
//       'Advanced analytics',
//       'Inventory management',
//       'Multi-language support',
//       'Table booking system',
//     ],
//     popular: true,
//     maxStaff: 25,
//     maxTables: 40,
//     maxMenuItems: 300,
//     analytics: true,
//     support: 'priority',
//   },
//   {
//     id: 'enterprise',
//     name: 'Enterprise',
//     description: 'For luxury hotels & restaurant chains',
//     price: 299,
//     billingCycle: 'monthly',
//     features: [
//       'Unlimited staff members',
//       'Unlimited tables',
//       'Unlimited menu items',
//       'Advanced analytics dashboard',
//       'Multi-branch management',
//       'Dedicated account manager',
//       '24/7 phone support',
//       'Custom integrations',
//       'White-label solution',
//       'API access',
//       'Custom reporting',
//       'On-site training',
//     ],
//     maxStaff: 100,
//     maxTables: 100,
//     maxMenuItems: 1000,
//     analytics: true,
//     support: 'dedicated',
//   },
// ]

// const FEATURES: Feature[] = [
//   {
//     title: 'Smart Order Management',
//     description: 'Streamline orders with real-time updates, split bills, and special requests handling.',
//     icon: <UtensilsCrossed className="h-8 w-8" />,
//     gradient: 'from-amber-500 to-orange-500',
//     bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
//   },
//   {
//     title: 'Kitchen Display System',
//     description: 'Digital order tickets with prep timers, course sequencing, and chef notes.',
//     icon: <ChefHat className="h-8 w-8" />,
//     gradient: 'from-rose-500 to-pink-600',
//     bgGradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
//   },
//   {
//     title: 'Table Management',
//     description: 'Interactive floor plan with live status, reservations, and waitlist management.',
//     icon: <Table className="h-8 w-8" />,
//     gradient: 'from-emerald-500 to-teal-600',
//     bgGradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
//   },
//   {
//     title: 'Staff Management',
//     description: 'Role-based permissions, shift scheduling, and performance tracking.',
//     icon: <Users className="h-8 w-8" />,
//     gradient: 'from-blue-500 to-cyan-600',
//     bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
//   },
//   {
//     title: 'Advanced Analytics',
//     description: 'Real-time insights on sales, inventory, customer behavior, and profitability.',
//     icon: <TrendingUp className="h-8 w-8" />,
//     gradient: 'from-violet-500 to-purple-600',
//     bgGradient: 'bg-gradient-to-br from-violet-50 to-purple-50',
//   },
//   {
//     title: 'Mobile POS System',
//     description: 'Take orders and process payments anywhere with our intuitive mobile app.',
//     icon: <TabletSmartphone className="h-8 w-8" />,
//     gradient: 'from-indigo-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50',
//   },
// ]

// const TESTIMONIALS: Testimonial[] = [
//   {
//     id: '1',
//     name: 'Isabella Rossi',
//     role: 'General Manager',
//     hotel: 'Grand Palazzo Hotel',
//     content: 'HotelEase transformed our 5-star hotel operations. Guest satisfaction increased by 40% and operational costs decreased by 25%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-amber-500 to-orange-500',
//   },
//   {
//     id: '2',
//     name: 'Kenji Tanaka',
//     role: 'Restaurant Owner',
//     hotel: 'Sakura Fine Dining',
//     content: 'The kitchen display system reduced order errors by 95%. Our chefs are more efficient and our customers happier than ever.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
//   },
//   {
//     id: '3',
//     name: 'Sophia Chen',
//     role: 'Operations Director',
//     hotel: 'The Royal Resort',
//     content: 'We manage 3 restaurants and 2 bars seamlessly with HotelEase. The multi-branch feature is a game-changer for our business.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
//   },
// ]

// const STATS = [
//   { label: 'Hotels & Restaurants', value: '2,500+', change: '+40% this year', color: 'text-amber-600' },
//   { label: 'Orders Processed', value: '10M+', change: 'Monthly', color: 'text-emerald-600' },
//   { label: 'Customer Rating', value: '4.9/5', change: 'Based on 1,200 reviews', color: 'text-rose-600' },
//   { label: 'Staff Managed', value: '50K+', change: 'Worldwide', color: 'text-blue-600' },
// ]

// // ===================== COMPONENTS =====================

// function Navbar({ onLoginClick, isLoggedIn }: { onLoginClick: () => void, isLoggedIn: boolean }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const router = useRouter();

//   return (
//     <nav className="fixed w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-20">
//           <div className="flex items-center gap-3">
//             <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
//               <Hotel className="h-7 w-7 text-white" />
//             </div>
//             <div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                 HotelEase
//               </span>
//               <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//             </div>
//           </div>

//           <div className="hidden lg:flex items-center gap-10">
//             <a href="#features" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Features</a>
//             <a href="#pricing" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Pricing</a>
//             <a href="#testimonials" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Customers</a>
//             <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">FAQ</a>
//           </div>

//           <div className="hidden lg:flex items-center gap-4">
//             {isLoggedIn ? (
//               <button
//                 onClick={onLoginClick}
//                 className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
//               >
//                 Go to Dashboard
//               </button>
//             ) : (
//               <>
//                 <button
//                   onClick={() => router.push("/slug")}
//                   className="text-gray-700 hover:text-amber-600 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors"
//                 >
//                   Sign In
//                 </button>
//                 <button
//                   onClick={onLoginClick}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
//                 >
//                   <Sparkle className="h-4 w-4" />
//                   Start Free Trial
//                 </button>
//               </>
//             )}
//           </div>

//           <button
//             className="lg:hidden p-3 text-gray-700"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {isMenuOpen && (
//           <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl">
//             <div className="flex flex-col space-y-4">
//               <a href="#features" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">Features</a>
//               <a href="#pricing" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">Pricing</a>
//               <a href="#testimonials" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">Customers</a>
//               <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">FAQ</a>
//               <div className="pt-6 border-t border-gray-100">
//                 {isLoggedIn ? (
//                   <button
//                     onClick={() => {
//                       onLoginClick()
//                       setIsMenuOpen(false)
//                     }}
//                     className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
//                   >
//                     Go to Dashboard
//                   </button>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => {
//                         onLoginClick()
//                         setIsMenuOpen(false)
//                       }}
//                       className="w-full text-gray-700 hover:text-amber-600 font-semibold py-4 px-8 hover:bg-amber-50 rounded-xl"
//                     >
//                       Sign In
//                     </button>
//                     <button
//                       onClick={() => {
//                         onLoginClick()
//                         setIsMenuOpen(false)
//                       }}
//                       className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg mt-3 flex items-center justify-center gap-2"
//                     >
//                       <Sparkle className="h-4 w-4" />
//                       Start Free Trial
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
//   return (
//     <section className="pt-32 pb-24 px-6 relative overflow-hidden">
//       {/* Background gradients */}
//       <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
//       <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

//       {/* Decorative elements */}
//       <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>
//       <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl"></div>
//       <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto relative">
//         <div className="text-center max-w-4xl mx-auto">
//           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8">
//             <div className="flex items-center gap-2">
//               <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
//               <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
//               <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
//             </div>
//             <span className="text-sm font-semibold text-amber-800">Trusted by 2,500+ luxury hotels & restaurants</span>
//           </div>

//           <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//             Elevate Your
//             <span className="block mt-4">
//               <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                 Hotel Experience
//               </span>
//             </span>
//           </h1>

//           <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//             The premier SaaS platform designed exclusively for luxury hotels and fine dining establishments.
//             Streamline operations, delight guests, and maximize revenue with our intelligent hospitality solutions.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//             <button
//               onClick={onGetStarted}
//               className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
//             >
//               <Sparkle className="h-5 w-5" />
//               Start Free 14-Day Trial
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//             </button>
//             <button className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3">
//               <Play className="h-5 w-5" />
//               Watch Demo
//               <span className="text-sm text-gray-500 group-hover:text-amber-500">(3 min)</span>
//             </button>
//           </div>

//           {/* Stats */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {STATS.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <p className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
//                 <p className="text-gray-900 font-semibold mb-1">{stat.label}</p>
//                 <p className="text-sm text-gray-500">{stat.change}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function FeaturesSection() {
//   return (
//     <section id="features" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-6">
//             <BadgeCheck className="h-4 w-4 text-emerald-600" />
//             <span className="text-sm font-semibold text-emerald-700">PREMIUM FEATURES</span>
//           </div>
//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Everything You Need for
//             <span className="block mt-4">
//               <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
//                 Excellence
//               </span>
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600">
//             Sophisticated tools designed for the most demanding hospitality businesses
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
//           {FEATURES.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative"
//             >
//               <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-300"></div>
//               <div className="relative p-8">
//                 <div className={`mb-6 p-5 rounded-2xl ${feature.bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mb-8">
//                   {feature.description}
//                 </p>
//                 <div className="flex items-center text-amber-600 font-semibold">
//                   Learn more
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Platform Highlights */}
//         <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

//           <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <Shield className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold">Enterprise Security</h4>
//                   <p className="text-gray-300">Bank-level protection</p>
//                 </div>
//               </div>
//               <p className="text-gray-300">SOC 2 Type II certified with end-to-end encryption and regular security audits.</p>
//             </div>

//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//                   <Cloud className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold">Cloud Infrastructure</h4>
//                   <p className="text-gray-300">99.9% uptime guarantee</p>
//                 </div>
//               </div>
//               <p className="text-gray-300">Built on AWS with global CDN for lightning-fast performance worldwide.</p>
//             </div>

//             <div>
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
//                   <Headphones className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold">24/7 Premium Support</h4>
//                   <p className="text-gray-300">Dedicated account managers</p>
//                 </div>
//               </div>
//               <p className="text-gray-300">Round-the-clock support with dedicated account managers for enterprise clients.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function PricingSection({
//   plans,
//   onSelectPlan,
//   isAuthenticated
// }: {
//   plans: SubscriptionPlan[],
//   onSelectPlan: (planId: string) => void,
//   isAuthenticated: boolean
// }) {
//   return (
//     <section id="pricing" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 mb-6">
//             <Trophy className="h-4 w-4 text-violet-600" />
//             <span className="text-sm font-semibold text-violet-700">PREMIUM PLANS</span>
//           </div>
//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Simple, Transparent
//             <span className="block mt-4">
//               <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
//                 Pricing
//               </span>
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600">
//             Choose the perfect plan for your business. All plans include a 14-day free trial with full access.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
//                 plan.popular
//                   ? 'transform lg:scale-105 shadow-2xl'
//                   : 'shadow-xl hover:shadow-2xl'
//               }`}
//             >
//               {/* Background based on plan */}
//               <div className={`absolute inset-0 ${
//                 plan.id === 'essential'
//                   ? 'bg-gradient-to-b from-blue-50 to-indigo-50'
//                   : plan.id === 'professional'
//                   ? 'bg-gradient-to-b from-amber-50 to-orange-50'
//                   : 'bg-gradient-to-b from-gray-900 to-gray-800'
//               }`}></div>

//               {/* Content */}
//               <div className={`relative p-8 h-full ${
//                 plan.id === 'enterprise' ? 'text-white' : 'text-gray-900'
//               }`}>
//                 {plan.popular && (
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                     <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2">
//                       <Crown className="h-4 w-4" />
//                       MOST POPULAR
//                     </div>
//                   </div>
//                 )}

//                 {plan.id === 'enterprise' && (
//                   <div className="absolute top-6 right-6">
//                     <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
//                       <Gem className="h-6 w-6" />
//                     </div>
//                   </div>
//                 )}

//                 <div className="mb-10">
//                   <div className="flex items-center gap-3 mb-4">
//                     <h3 className={`text-3xl font-bold ${
//                       plan.id === 'essential'
//                         ? 'text-blue-600'
//                         : plan.id === 'professional'
//                         ? 'text-amber-600'
//                         : 'text-white'
//                     }`}>
//                       {plan.name}
//                     </h3>
//                     {plan.id === 'enterprise' && (
//                       <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold">
//                         PREMIUM
//                       </span>
//                     )}
//                   </div>
//                   <p className={`mb-6 ${
//                     plan.id === 'enterprise' ? 'text-gray-300' : 'text-gray-600'
//                   }`}>
//                     {plan.description}
//                   </p>

//                   <div className="mb-8">
//                     <div className="flex items-baseline">
//                       <span className={`text-5xl font-bold ${
//                         plan.id === 'essential'
//                           ? 'text-blue-700'
//                           : plan.id === 'professional'
//                           ? 'text-amber-700'
//                           : 'text-white'
//                       }`}>
//                         ${plan.price}
//                       </span>
//                       <span className={`ml-2 ${
//                         plan.id === 'enterprise' ? 'text-gray-400' : 'text-gray-500'
//                       }`}>
//                         /month
//                       </span>
//                     </div>
//                     <p className={`text-sm mt-2 ${
//                       plan.id === 'enterprise' ? 'text-gray-400' : 'text-gray-500'
//                     }`}>
//                       Billed annually: ${Math.floor(plan.price * 12 * 0.8)}/year (Save 20%)
//                     </p>
//                   </div>

//                   <button
//                     onClick={() => onSelectPlan(plan.id)}
//                     className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
//                       plan.id === 'essential'
//                         ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
//                         : plan.id === 'professional'
//                         ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
//                         : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border border-gray-700'
//                     }`}
//                   >
//                     {isAuthenticated ? 'Go to Dashboard' : 'Start Free Trial'}
//                   </button>
//                 </div>

//                 <div className="mb-10">
//                   <h4 className={`font-bold text-lg mb-6 ${
//                     plan.id === 'enterprise' ? 'text-white' : 'text-gray-900'
//                   }`}>
//                     Everything included:
//                   </h4>
//                   <ul className="space-y-4">
//                     {plan.features.map((feature, index) => (
//                       <li key={index} className="flex items-start gap-4">
//                         <div className={`p-1 rounded-lg ${
//                           plan.id === 'essential'
//                             ? 'bg-blue-100'
//                             : plan.id === 'professional'
//                             ? 'bg-amber-100'
//                             : 'bg-gray-800'
//                         }`}>
//                           <Check className={`h-4 w-4 ${
//                             plan.id === 'essential'
//                               ? 'text-blue-600'
//                               : plan.id === 'professional'
//                               ? 'text-amber-600'
//                               : 'text-emerald-400'
//                           }`} />
//                         </div>
//                         <span className={
//                           plan.id === 'enterprise' ? 'text-gray-300' : 'text-gray-700'
//                         }>
//                           {feature}
//                         </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="pt-8 border-t border-gray-200">
//                   <div className="grid grid-cols-3 gap-6 text-center">
//                     <div>
//                       <p className={`text-2xl font-bold mb-1 ${
//                         plan.id === 'essential'
//                           ? 'text-blue-600'
//                           : plan.id === 'professional'
//                           ? 'text-amber-600'
//                           : 'text-white'
//                       }`}>
//                         {plan.maxStaff === 100 ? '∞' : plan.maxStaff}
//                       </p>
//                       <p className={plan.id === 'enterprise' ? 'text-gray-400' : 'text-gray-500'}>
//                         Staff
//                       </p>
//                     </div>
//                     <div>
//                       <p className={`text-2xl font-bold mb-1 ${
//                         plan.id === 'essential'
//                           ? 'text-blue-600'
//                           : plan.id === 'professional'
//                           ? 'text-amber-600'
//                           : 'text-white'
//                       }`}>
//                         {plan.maxTables === 100 ? '∞' : plan.maxTables}
//                       </p>
//                       <p className={plan.id === 'enterprise' ? 'text-gray-400' : 'text-gray-500'}>
//                         Tables
//                       </p>
//                     </div>
//                     <div>
//                       <p className={`text-2xl font-bold mb-1 ${
//                         plan.id === 'essential'
//                           ? 'text-blue-600'
//                           : plan.id === 'professional'
//                           ? 'text-amber-600'
//                           : 'text-white'
//                       }`}>
//                         {plan.maxMenuItems === 1000 ? '∞' : plan.maxMenuItems}
//                       </p>
//                       <p className={plan.id === 'enterprise' ? 'text-gray-400' : 'text-gray-500'}>
//                         Menu Items
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-20 text-center">
//           <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
//             <div className="flex items-center gap-4">
//               <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
//                 <Shield className="h-8 w-8 text-emerald-600" />
//               </div>
//               <div className="text-left">
//                 <p className="font-bold text-gray-900 text-lg">All plans include</p>
//                 <p className="text-gray-600">14-day free trial • No credit card required • Cancel anytime</p>
//               </div>
//             </div>
//             <button
//               onClick={() => onSelectPlan('')}
//               className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
//             >
//               Compare All Plans
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function TestimonialsSection() {
//   return (
//     <section id="testimonials" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 mb-6">
//             <Award className="h-4 w-4 text-rose-600" />
//             <span className="text-sm font-semibold text-rose-700">CUSTOMER STORIES</span>
//           </div>
//           <h2 className="text-5xl font-bold text-gray-900 mb-6">
//             Trusted by the
//             <span className="block mt-4">
//               <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
//                 World's Best Hotels
//               </span>
//             </span>
//           </h2>
//           <p className="text-xl text-gray-600">
//             Join luxury hotels and Michelin-star restaurants that trust HotelEase
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {TESTIMONIALS.map((testimonial) => (
//             <div
//               key={testimonial.id}
//               className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//             >
//               <div className="flex items-center gap-2 mb-8">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`h-5 w-5 ${
//                       i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">"{testimonial.content}"</p>

//               <div className="flex items-center gap-4">
//                 <div className={`${testimonial.avatarGradient} h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
//                   <p className="text-gray-500">{testimonial.role}</p>
//                   <p className="text-sm text-amber-600 font-semibold">{testimonial.hotel}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function CTASection({ onGetStarted, isAuthenticated }: { onGetStarted: () => void, isAuthenticated: boolean }) {
//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Main gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

//       {/* Animated gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 animate-gradient-x"></div>

//       {/* Pattern overlay */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//           backgroundSize: '30px 30px'
//         }}></div>
//       </div>

//       <div className="max-w-5xl mx-auto px-6 relative">
//         <div className="text-center">
//           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
//             <Target className="h-5 w-5 text-amber-300" />
//             <span className="text-amber-100 font-semibold">READY TO TRANSFORM YOUR BUSINESS?</span>
//           </div>

//           <h2 className="text-5xl lg:text-6xl font-bold text-white mb-10">
//             Experience the Future of
//             <span className="block mt-6">
//               <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
//                 Hotel Management
//               </span>
//             </span>
//           </h2>

//           <p className="text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
//             Join thousands of successful hotels and restaurants who have transformed their operations with HotelEase.
//             Start your journey to excellence today.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//             <button
//               onClick={onGetStarted}
//               className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4"
//             >
//               <Sparkle className="h-6 w-6" />
//               {isAuthenticated ? 'Go to Dashboard' : 'Start Your Free Trial'}
//               <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
//             </button>

//             <button className="group border-2 border-gray-700 hover:border-amber-500 text-white hover:text-amber-300 px-12 py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-4">
//               <Play className="h-6 w-6" />
//               Schedule a Demo
//               <span className="text-sm text-gray-400 group-hover:text-amber-400">(30 min)</span>
//             </button>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
//             <div className="flex items-center gap-3 justify-center text-gray-400">
//               <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//               <span>No setup fees</span>
//             </div>
//             <div className="flex items-center gap-3 justify-center text-gray-400">
//               <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//               <span>14-day free trial</span>
//             </div>
//             <div className="flex items-center gap-3 justify-center text-gray-400">
//               <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//               <span>No credit card required</span>
//             </div>
//             <div className="flex items-center gap-3 justify-center text-gray-400">
//               <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//               <span>Cancel anytime</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-12">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
//           <div>
//             <div className="flex items-center gap-3 mb-8">
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                 <Hotel className="h-7 w-7" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold">HotelEase</span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>
//             <p className="text-gray-400 mb-8 leading-relaxed">
//               The premier hotel management platform for luxury establishments worldwide.
//               Transforming hospitality operations since 2018.
//             </p>
//             <div className="flex items-center gap-4">
//               <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                 <span className="sr-only">Twitter</span>
//                 <div className="h-5 w-5 bg-gradient-to-r from-sky-400 to-blue-500"></div>
//               </a>
//               <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                 <span className="sr-only">LinkedIn</span>
//                 <div className="h-5 w-5 bg-gradient-to-r from-blue-500 to-blue-600"></div>
//               </a>
//               <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                 <span className="sr-only">Instagram</span>
//                 <div className="h-5 w-5 bg-gradient-to-r from-rose-500 to-pink-600"></div>
//               </a>
//             </div>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-8 text-amber-100">Product</h4>
//             <ul className="space-y-4">
//               <li><a href="#features" className="text-gray-400 hover:text-amber-300 transition-colors">Features</a></li>
//               <li><a href="#pricing" className="text-gray-400 hover:text-amber-300 transition-colors">Pricing</a></li>
//               <li><a href="#testimonials" className="text-gray-400 hover:text-amber-300 transition-colors">Testimonials</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">API Documentation</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-8 text-amber-100">Company</h4>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">About Us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Careers</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Blog</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Contact Sales</a></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="font-bold text-lg mb-8 text-amber-100">Resources</h4>
//             <ul className="space-y-4">
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Help Center</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Documentation</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Community</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Partners</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//           <p className="text-gray-400">
//             &copy; {new Date().getFullYear()} HotelEase. All rights reserved.
//           </p>
//           <div className="flex items-center gap-8">
//             <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Privacy Policy</a>
//             <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Terms of Service</a>
//             <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Cookie Policy</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// // ===================== MAIN PAGE COMPONENT =====================
// export default function HomePage() {
//   const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
//   const [showLoginModal, setShowLoginModal] = useState(false)
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

//   // Dummy auth state
//   const [user, setUser] = useState<User | null>(null)
//   const isAuthenticated = !!user

//   const handleGetStarted = (planId?: string) => {
//     if (isAuthenticated) {
//       toast.success('Redirecting to your dashboard...', {
//         icon: '🚀',
//         style: {
//           background: '#1f2937',
//           color: '#fff',
//           borderRadius: '12px',
//           border: '1px solid #374151',
//         },
//       })
//     } else if (planId) {
//       setSelectedPlan(planId)
//       setShowSubscriptionModal(true)
//     } else {
//       setShowLoginModal(true)
//     }
//   }

//   const handlePlanSelect = (planId: string) => {
//     if (isAuthenticated) {
//       toast.success('Welcome back! Redirecting to dashboard...', {
//         icon: '👋',
//         style: {
//           background: '#1f2937',
//           color: '#fff',
//           borderRadius: '12px',
//           border: '1px solid #374151',
//         },
//       })
//     } else {
//       setSelectedPlan(planId)
//       setShowSubscriptionModal(true)
//     }
//   }

//   const handleLogout = () => {
//     setUser(null)
//     toast.success('Logged out successfully!', {
//       icon: '👋',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   return (
//     <div className="min-h-screen">
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//       `}</style>

//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//             padding: '16px',
//           },
//           success: {
//             iconTheme: {
//               primary: '#f59e0b',
//               secondary: '#1f2937',
//             },
//           },
//         }}
//       />

//       <Navbar
//         onLoginClick={() => handleGetStarted()}
//         isLoggedIn={isAuthenticated}
//       />

//       <main>
//         <HeroSection onGetStarted={() => handleGetStarted()} />

//         <FeaturesSection />

//         <PricingSection
//           plans={SUBSCRIPTION_PLANS}
//           onSelectPlan={handlePlanSelect}
//           isAuthenticated={isAuthenticated}
//         />

//         <TestimonialsSection />

//         <CTASection
//           onGetStarted={() => handleGetStarted()}
//           isAuthenticated={isAuthenticated}
//         />
//       </main>

//       <Footer />

//       {/* Floating demo logout button */}
//       {isAuthenticated && (
//         <button
//           onClick={handleLogout}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//           title="Logout (Demo)"
//         >
//           <div className="flex items-center gap-2">
//             <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//             <span className="text-sm font-semibold">Logout</span>
//           </div>
//         </button>
//       )}
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   Hotel,
//   Menu,
//   X,
//   Check,
//   Star,
//   ArrowRight,
//   Users,
//   BarChart3,
//   CreditCard,
//   UtensilsCrossed,
//   ChefHat,
//   Table,
//   Receipt,
//   Smartphone,
//   Headphones,
//   Shield,
//   Zap,
//   TrendingUp,
//   Cloud,
//   QrCode,
//   TabletSmartphone,
//   Calendar,
//   Clock,
//   MessageSquare,
//   Award,
//   Trophy,
//   Sparkles,
//   BadgeCheck,
//   Target,
//   ArrowUpRight,
//   ChevronRight,
//   LogOut,
//   Play,
//   Sparkle,
//   Gem,
//   Crown,
//   Loader2,
//   Clock4,
//   Building,
//   Coffee,
//   Utensils,
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   CreditCard as CreditCardIcon,
//   Bell,
//   Settings,
//   HelpCircle,
//   FileText,
//   Lock,
//   CheckCircle,
//   Award as AwardIcon,
//   Users as UsersIcon,
//   CloudRain,
//   Server,
//   Database,
//   Cpu,
//   Wifi,
//   ShieldCheck,
//   Zap as ZapIcon,
//   BarChart,
//   PieChart,
//   LineChart,
//   DollarSign,
//   ShoppingBag,
//   Package,
//   Truck,
//   Home,
//   Gift,
//   Tag,
//   Percent,
//   ShoppingCart,
//   Heart,
//   BookOpen,
//   LifeBuoy,
//   MessageCircle,
//   Video,
//   Download,
//   Upload,
//   Folder,
//   File,
//   Image,
//   Music,
//   Film,
//   Camera,
//   Mic,
//   Headset,
//   Keyboard,
//   Mouse,
//   Monitor,
//   Printer,
//   HardDrive,
//   Battery,
//   BatteryCharging,
//   Power,
//   WifiOff,
//   Bluetooth,
//   Radio,
//   Tv,
//   Smartphone as SmartphoneIcon,
//   Watch,
//   Laptop,
//   Tablet,
//   Speaker
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// // import { useSelector, useDispatch } from 'react-redux'
// // import type { AppDispatch, RootState } from '@/store/store'
// // import { fetchSubscriptionPlans } from './store/subscriptionSlice'
// import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'

// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import type { RootState, AppDispatch } from "../store/index";

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // ===================== TYPES =====================
// interface User {
//   id: string;
//   email: string;
//   name: string;
//   isSubscribed: boolean;
//   role?: 'hotel_admin' | 'staff';
//   hotelName?: string;
//   subscriptionPlan?: string;
// }

// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface UISubscriptionPlan {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   billingCycle: 'monthly' | 'yearly';
//   features: string[];
//   popular?: boolean;
//   maxStaff: number;
//   maxTables: number;
//   maxMenuItems: number;
//   analytics: boolean;
//   support: 'basic' | 'priority' | 'dedicated';
//   plan_code: string;
// }

// interface Feature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   role: string;
//   hotel: string;
//   content: string;
//   rating: number;
//   avatarGradient: string;
// }

// interface Stat {
//   label: string;
//   value: string;
//   change: string;
//   color: string;
// }

// // ===================== HELPER FUNCTIONS =====================
// const transformApiPlanToUiPlan = (apiPlan: SubscriptionPlan): UISubscriptionPlan => {
//   const featuresList: string[] = []

//   // Map API features to user-friendly descriptions
//   const featureMap: Record<string, string> = {
//     multi_device: 'Multi-device access',
//     basic_reports: 'Basic analytics & reports',
//     advanced_reports: 'Advanced analytics dashboard',
//     full_reports: 'Comprehensive analytics suite',
//     email_support: 'Email support (24/7)',
//     phone_support: 'Phone support',
//     sms_support: 'SMS notifications & support',
//     sms_notifications: 'SMS notifications',
//     custom_branding: 'Custom branding & white-label',
//     online_ordering: 'Online ordering system',
//     table_reservations: 'Table reservation management',
//     kitchen_display: 'Kitchen display system (KDS)',
//     loyalty_program: 'Loyalty program & rewards',
//     multi_branch: 'Multi-branch management',
//     priority_support: 'Priority support',
//     dedicated_manager: 'Dedicated account manager',
//     custom_integrations: 'Custom API integrations'
//   }

//   // Add mapped features
//   Object.entries(apiPlan.features).forEach(([key, value]) => {
//     if (value && featureMap[key]) {
//       featuresList.push(featureMap[key])
//     }
//   })

//   // Add core plan limits
//   featuresList.push(`Up to ${apiPlan.max_staff} staff members`)
//   featuresList.push(`${apiPlan.max_tables} tables maximum`)
//   featuresList.push(`${apiPlan.max_menu_items} menu items`)
//   featuresList.push('Real-time order management')
//   featuresList.push('Mobile POS system')
//   featuresList.push('QR code ordering')

//   // Add additional features based on plan tier
//   if (parseFloat(apiPlan.price_per_month) >= 79.99) {
//     featuresList.push('Inventory management')
//     featuresList.push('Staff scheduling')
//   }
//   if (parseFloat(apiPlan.price_per_month) >= 119.99) {
//     featuresList.push('Customer relationship management')
//     featuresList.push('Marketing automation')
//   }

//   // Determine support type
//   let supportType: 'basic' | 'priority' | 'dedicated' = 'basic'
//   if (apiPlan.features.priority_support) {
//     supportType = 'priority'
//   }
//   if (apiPlan.features.dedicated_manager) {
//     supportType = 'dedicated'
//   }

//   return {
//     id: apiPlan.id,
//     name: apiPlan.plan_name,
//     description: apiPlan.description,
//     price: parseFloat(apiPlan.price_per_month),
//     billingCycle: 'monthly',
//     features: featuresList,
//     popular: apiPlan.plan_code === 'BUSINESS' || apiPlan.plan_code === 'ENTERPRISE' || apiPlan.plan_code === 'PREMIUM',
//     maxStaff: apiPlan.max_staff,
//     maxTables: apiPlan.max_tables,
//     maxMenuItems: apiPlan.max_menu_items,
//     analytics: apiPlan.features.advanced_reports || apiPlan.features.full_reports || apiPlan.features.basic_reports,
//     support: supportType,
//     plan_code: apiPlan.plan_code,
//   }
// }

// // ===================== CONSTANTS =====================
// const FEATURES: Feature[] = [
//   {
//     title: 'Smart Order Management',
//     description: 'Streamline orders with real-time updates, split bills, and special requests handling. Reduce order errors by 95% with our intelligent system.',
//     icon: <UtensilsCrossed className="h-8 w-8" />,
//     gradient: 'from-amber-500 to-orange-500',
//     bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
//   },
//   {
//     title: 'Kitchen Display System',
//     description: 'Digital order tickets with prep timers, course sequencing, and chef notes. Optimize kitchen workflow and reduce preparation time by 40%.',
//     icon: <ChefHat className="h-8 w-8" />,
//     gradient: 'from-rose-500 to-pink-600',
//     bgGradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
//   },
//   {
//     title: 'Table Management',
//     description: 'Interactive floor plan with live status, reservations, and waitlist management. Increase table turnover by 25% with smart seating algorithms.',
//     icon: <Table className="h-8 w-8" />,
//     gradient: 'from-emerald-500 to-teal-600',
//     bgGradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
//   },
//   {
//     title: 'Staff Management',
//     description: 'Role-based permissions, shift scheduling, and performance tracking. Reduce scheduling conflicts by 60% with automated shift management.',
//     icon: <Users className="h-8 w-8" />,
//     gradient: 'from-blue-500 to-cyan-600',
//     bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
//   },
//   {
//     title: 'Advanced Analytics',
//     description: 'Real-time insights on sales, inventory, customer behavior, and profitability. Make data-driven decisions with predictive analytics.',
//     icon: <TrendingUp className="h-8 w-8" />,
//     gradient: 'from-violet-500 to-purple-600',
//     bgGradient: 'bg-gradient-to-br from-violet-50 to-purple-50',
//   },
//   {
//     title: 'Mobile POS System',
//     description: 'Take orders and process payments anywhere with our intuitive mobile app. Increase staff efficiency by 35% with mobile order taking.',
//     icon: <TabletSmartphone className="h-8 w-8" />,
//     gradient: 'from-indigo-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50',
//   },
//   {
//     title: 'Inventory Management',
//     description: 'Automated stock tracking, purchase orders, and waste reduction. Reduce inventory costs by 20% with smart forecasting.',
//     icon: <Package className="h-8 w-8" />,
//     gradient: 'from-green-500 to-emerald-600',
//     bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
//   },
//   {
//     title: 'Customer CRM',
//     description: 'Track guest preferences, dining history, and special requests. Increase repeat business by 45% with personalized service.',
//     icon: <UsersIcon className="h-8 w-8" />,
//     gradient: 'from-pink-500 to-rose-600',
//     bgGradient: 'bg-gradient-to-br from-pink-50 to-rose-50',
//   },
//   {
//     title: 'Multi-Branch Control',
//     description: 'Centralized management for multiple locations with consolidated reporting. Streamline operations across all your properties.',
//     icon: <Building className="h-8 w-8" />,
//     gradient: 'from-cyan-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
//   },
// ]

// const TESTIMONIALS: Testimonial[] = [
//   {
//     id: '1',
//     name: 'Isabella Rossi',
//     role: 'General Manager',
//     hotel: 'Grand Palazzo Hotel',
//     content: 'HotelEase transformed our 5-star hotel operations. Guest satisfaction increased by 40% and operational costs decreased by 25%. The ROI was achieved in just 3 months.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-amber-500 to-orange-500',
//   },
//   {
//     id: '2',
//     name: 'Kenji Tanaka',
//     role: 'Restaurant Owner',
//     hotel: 'Sakura Fine Dining',
//     content: 'The kitchen display system reduced order errors by 95%. Our chefs are more efficient and our customers happier than ever. Service speed improved by 30%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
//   },
//   {
//     id: '3',
//     name: 'Sophia Chen',
//     role: 'Operations Director',
//     hotel: 'The Royal Resort',
//     content: 'We manage 3 restaurants and 2 bars seamlessly with HotelEase. The multi-branch feature is a game-changer for our business. Reporting time reduced by 70%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
//   },
//   {
//     id: '4',
//     name: 'Marcus Johnson',
//     role: 'Hotel Director',
//     hotel: 'Oceanview Luxury Resort',
//     content: 'The analytics dashboard provided insights we never had before. We optimized menu pricing and increased profitability by 18% in the first quarter.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
//   },
//   {
//     id: '5',
//     name: 'Elena Vasquez',
//     role: 'F&B Manager',
//     hotel: 'Metropolitan Suites',
//     content: 'Staff scheduling became effortless. We reduced overtime costs by 35% while maintaining excellent service quality. The mobile app is a game-changer.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
//   },
//   {
//     id: '6',
//     name: 'Ahmed Al-Farsi',
//     role: 'CEO',
//     hotel: 'Desert Oasis Hotels',
//     content: 'From implementation to daily use, the support has been exceptional. Our 12 properties now operate seamlessly with centralized control and reporting.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
//   },
// ]

// const STATS: Stat[] = [
//   { label: 'Hotels & Restaurants', value: '2,500+', change: '+40% this year', color: 'text-amber-600' },
//   { label: 'Orders Processed', value: '10M+', change: 'Monthly volume', color: 'text-emerald-600' },
//   { label: 'Customer Rating', value: '4.9/5', change: 'Based on 1,200 reviews', color: 'text-rose-600' },
//   { label: 'Staff Managed', value: '50K+', change: 'Worldwide users', color: 'text-blue-600' },
//   { label: 'Countries', value: '45+', change: 'Global presence', color: 'text-violet-600' },
//   { label: 'Uptime', value: '99.9%', change: 'Service reliability', color: 'text-cyan-600' },
// ]

// const INTEGRATIONS = [
//   { name: 'QuickBooks', icon: <DollarSign className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Xero', icon: <FileText className="h-6 w-6" />, color: 'from-blue-500 to-cyan-600' },
//   { name: 'Stripe', icon: <CreditCardIcon className="h-6 w-6" />, color: 'from-violet-500 to-purple-600' },
//   { name: 'PayPal', icon: <ShoppingBag className="h-6 w-6" />, color: 'from-blue-500 to-indigo-600' },
//   { name: 'Square', icon: <CreditCard className="h-6 w-6" />, color: 'from-emerald-500 to-teal-600' },
//   { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Mailchimp', icon: <Mail className="h-6 w-6" />, color: 'from-amber-500 to-orange-600' },
//   { name: 'Slack', icon: <MessageSquare className="h-6 w-6" />, color: 'from-pink-500 to-rose-600' },
// ]

// // ===================== MAIN COMPONENT =====================
// export default function HotelEaseLandingPage() {
//   const router = useRouter()
//   const dispatch = useDispatch<AppDispatch>()
//   const { plans, loading, error } = useSelector((state: RootState) => state.subscription)

//   const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
//   const [showLoginModal, setShowLoginModal] = useState(false)
//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [user, setUser] = useState<User | null>(null)
//   const isAuthenticated = !!user
//   const [activeFeature, setActiveFeature] = useState(0)

//   useEffect(() => {
//     if (plans.length === 0) {
//       dispatch(fetchSubscriptionPlans())
//     }
//   }, [dispatch, plans.length])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % FEATURES.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   const handleGetStarted = (planId?: string) => {
//     if (isAuthenticated) {
//       toast.success('Redirecting to your dashboard...', {
//         icon: '🚀',
//         style: {
//           background: '#1f2937',
//           color: '#fff',
//           borderRadius: '12px',
//           border: '1px solid #374151',
//         },
//       })
//     } else if (planId) {
//       setSelectedPlan(planId)
//       setShowSubscriptionModal(true)
//     } else {
//       setShowLoginModal(true)
//     }
//   }

//   const handlePlanSelect = (planId: string) => {
//     if (isAuthenticated) {
//       toast.success('Welcome back! Redirecting to dashboard...', {
//         icon: '👋',
//         style: {
//           background: '#1f2937',
//           color: '#fff',
//           borderRadius: '12px',
//           border: '1px solid #374151',
//         },
//       })
//     } else {
//       setSelectedPlan(planId)
//       setShowSubscriptionModal(true)
//     }
//   }

//   const handleLogout = () => {
//     setUser(null)
//     toast.success('Logged out successfully!', {
//       icon: '👋',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleDemoLogin = () => {
//     setUser({
//       id: 'demo-123',
//       email: 'demo@hotelease.com',
//       name: 'Demo User',
//       isSubscribed: true,
//       role: 'hotel_admin',
//       hotelName: 'Demo Hotel',
//       subscriptionPlan: 'PROFESSIONAL'
//     })
//     toast.success('Demo login successful!', {
//       icon: '🎉',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const sortedPlans = [...plans].sort((a, b) => a.display_order - b.display_order)
//   const uiPlans = sortedPlans.map(transformApiPlanToUiPlan)

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Toaster */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//             padding: '16px',
//           },
//           success: {
//             iconTheme: {
//               primary: '#f59e0b',
//               secondary: '#1f2937',
//             },
//           },
//         }}
//       />

//       {/* Navigation */}
//       <nav className="fixed w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-100 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center gap-3">
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
//                 <Hotel className="h-7 w-7 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-10">
//               <a href="#features" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Features</a>
//               <a href="#pricing" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Pricing</a>
//               <a href="#testimonials" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Testimonials</a>
//               <a href="#integrations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Integrations</a>
//               <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">FAQ</a>
//             </div>

//             <div className="hidden lg:flex items-center gap-4">
//               {isAuthenticated ? (
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-700 font-medium">Welcome, {user?.name}</span>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
//                   >
//                     Go to Dashboard
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleDemoLogin}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-6 py-3 rounded-xl hover:bg-amber-50 transition-colors"
//                   >
//                     Try Demo
//                   </button>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
//                   >
//                     <Sparkle className="h-4 w-4" />
//                     Start Free Trial
//                   </button>
//                 </>
//               )}
//             </div>

//             <button
//               className="lg:hidden p-3 text-gray-700"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl">
//               <div className="flex flex-col space-y-4">
//                 <a href="#features" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">Features</a>
//                 <a href="#pricing" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">Pricing</a>
//                 <a href="#testimonials" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">Testimonials</a>
//                 <a href="#integrations" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">Integrations</a>
//                 <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl">FAQ</a>
//                 <div className="pt-6 border-t border-gray-100">
//                   {isAuthenticated ? (
//                     <>
//                       <div className="mb-4 px-4">
//                         <p className="text-sm text-gray-500">Logged in as</p>
//                         <p className="font-semibold text-gray-900">{user?.name}</p>
//                       </div>
//                       <button
//                         onClick={() => {
//                           handleGetStarted()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
//                       >
//                         Go to Dashboard
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => {
//                           handleDemoLogin()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-amber-600 font-semibold py-4 px-8 hover:bg-amber-50 rounded-xl"
//                       >
//                         Try Demo
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleGetStarted()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg mt-3 flex items-center justify-center gap-2"
//                       >
//                         <Sparkle className="h-4 w-4" />
//                         Start Free Trial
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
//         {/* Background gradients */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
//         <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

//         {/* Animated blobs */}
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8 animate-float">
//               <div className="flex items-center gap-2">
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//               <span className="text-sm font-semibold text-amber-800">Trusted by 2,500+ luxury hotels & restaurants worldwide</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//               Revolutionize Your
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h1>

//             <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               The all-in-one SaaS platform designed exclusively for luxury hotels and fine dining establishments.
//               Streamline operations, delight guests, and maximize revenue with AI-powered hospitality solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Free 14-Day Trial
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//               </button>
//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//               >
//                 <Play className="h-5 w-5" />
//                 Watch Live Demo
//                 <span className="text-sm text-gray-500 group-hover:text-amber-500">(2 min)</span>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
//               {STATS.map((stat, index) => (
//                 <div key={index} className="text-center p-4">
//                   <p className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
//                   <p className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
//                   <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-6">
//               <BadgeCheck className="h-4 w-4 text-emerald-600" />
//               <span className="text-sm font-semibold text-emerald-700">PREMIUM FEATURES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Everything You Need for
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
//                   Operational Excellence
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Sophisticated tools designed for the most demanding hospitality businesses
//             </p>
//           </div>

//           {/* Featured Feature Showcase */}
//           <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

//             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <div className={`mb-6 p-5 rounded-2xl ${FEATURES[activeFeature].bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${FEATURES[activeFeature].gradient} p-3 rounded-xl`}>
//                     {FEATURES[activeFeature].icon}
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4">
//                   {FEATURES[activeFeature].title}
//                 </h3>
//                 <p className="text-gray-300 mb-8 text-lg">
//                   {FEATURES[activeFeature].description}
//                 </p>
//                 <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
//                   Learn More
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 {FEATURES.slice(0, 6).map((feature, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveFeature(index)}
//                     className={`p-4 rounded-xl transition-all duration-300 ${
//                       activeFeature === index
//                         ? 'bg-white/10 backdrop-blur-sm border border-white/20'
//                         : 'bg-white/5 hover:bg-white/10'
//                     }`}
//                   >
//                     <div className={`p-3 rounded-lg ${feature.bgGradient} mb-3`}>
//                       <div className={`bg-gradient-to-br ${feature.gradient} p-2 rounded-lg`}>
//                         {feature.icon}
//                       </div>
//                     </div>
//                     <p className="text-sm font-semibold text-white">{feature.title.split(' ')[0]}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* All Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {FEATURES.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className={`mb-6 p-5 rounded-2xl ${feature.bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mb-8">
//                   {feature.description}
//                 </p>
//                 <div className="flex items-center text-amber-600 font-semibold">
//                   Explore feature
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Platform Highlights */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <ShieldCheck className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Enterprise Security</h4>
//                   <p className="text-gray-600">Bank-level protection</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">SOC 2 Type II certified with end-to-end encryption and regular security audits.</p>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//                   <Cloud className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Cloud Infrastructure</h4>
//                   <p className="text-gray-600">99.9% uptime guarantee</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Built on AWS with global CDN for lightning-fast performance worldwide.</p>
//             </div>

//             <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
//                   <Headphones className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">24/7 Premium Support</h4>
//                   <p className="text-gray-600">Dedicated account managers</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Round-the-clock support with dedicated account managers for enterprise clients.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 mb-6">
//               <Trophy className="h-4 w-4 text-violet-600" />
//               <span className="text-sm font-semibold text-violet-700">FLEXIBLE PLANS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Simple, Transparent
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
//                   Pricing
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Choose the perfect plan for your business. All plans include a 14-day free trial with full access.
//             </p>
//           </div>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="text-center">
//                 <Loader2 className="h-12 w-12 text-amber-500 animate-spin mx-auto mb-4" />
//                 <p className="text-gray-600">Loading subscription plans...</p>
//               </div>
//             </div>
//           ) : error ? (
//             <div className="text-center py-20">
//               <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
//                 <div className="p-3 bg-red-100 rounded-full w-fit mx-auto mb-4">
//                   <X className="h-6 w-6 text-red-600" />
//                 </div>
//                 <p className="text-red-600 font-semibold mb-2">Error loading plans</p>
//                 <p className="text-gray-600 mb-4">{error}</p>
//                 <button
//                   onClick={() => dispatch(fetchSubscriptionPlans())}
//                   className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
//                 >
//                   Retry
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {uiPlans.map((plan) => (
//                   <div
//                     key={plan.id}
//                     className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
//                       plan.popular
//                         ? 'transform lg:scale-105 shadow-2xl'
//                         : 'shadow-xl hover:shadow-2xl'
//                     }`}
//                   >
//                     <div className={`absolute inset-0 ${
//                       plan.plan_code === 'STARTER'
//                         ? 'bg-gradient-to-b from-blue-50 to-indigo-50'
//                         : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                         ? 'bg-gradient-to-b from-amber-50 to-orange-50'
//                         : 'bg-gradient-to-b from-gray-900 to-gray-800'
//                     }`}></div>

//                     <div className={`relative p-8 h-full ${
//                       plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                     }`}>
//                       {plan.popular && (
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                           <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2">
//                             <Crown className="h-4 w-4" />
//                             MOST POPULAR
//                           </div>
//                         </div>
//                       )}

//                       {plan.plan_code === 'ENTERPRISE' && (
//                         <div className="absolute top-6 right-6">
//                           <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
//                             <Gem className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       )}

//                       <div className="mb-10">
//                         <div className="flex items-center gap-3 mb-4">
//                           <h3 className={`text-3xl font-bold ${
//                             plan.plan_code === 'STARTER'
//                               ? 'text-blue-600'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'text-amber-600'
//                               : 'text-white'
//                           }`}>
//                             {plan.name}
//                           </h3>
//                           {plan.plan_code === 'ENTERPRISE' && (
//                             <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold">
//                               PREMIUM
//                             </span>
//                           )}
//                         </div>
//                         <p className={`mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-600'
//                         }`}>
//                           {plan.description}
//                         </p>

//                         <div className="mb-8">
//                           <div className="flex items-baseline">
//                             <span className={`text-5xl font-bold ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-700'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-700'
//                                 : 'text-white'
//                             }`}>
//                               ${plan.price}
//                             </span>
//                             <span className={`ml-2 ${
//                               plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                             }`}>
//                               /month
//                             </span>
//                           </div>
//                           <p className={`text-sm mt-2 ${
//                             plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                           }`}>
//                             Billed annually: ${Math.floor(plan.price * 12 * 0.8)}/year (Save 20%)
//                           </p>
//                         </div>

//                         <button
//                           onClick={() => handlePlanSelect(plan.id)}
//                           className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] ${
//                             plan.plan_code === 'STARTER'
//                               ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
//                               : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border border-gray-700'
//                           }`}
//                         >
//                           {isAuthenticated ? 'Go to Dashboard' : 'Continue'}
//                         </button>
//                       </div>

//                       <div className="mb-10">
//                         <h4 className={`font-bold text-lg mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                         }`}>
//                           Everything included:
//                         </h4>
//                         <ul className="space-y-3">
//                           {plan.features.slice(0, 8).map((feature, index) => (
//                             <li key={index} className="flex items-start gap-3">
//                               <div className={`p-1 rounded-lg mt-1 ${
//                                 plan.plan_code === 'STARTER'
//                                   ? 'bg-blue-100'
//                                   : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                   ? 'bg-amber-100'
//                                   : 'bg-gray-800'
//                               }`}>
//                                 <Check className={`h-4 w-4 ${
//                                   plan.plan_code === 'STARTER'
//                                     ? 'text-blue-600'
//                                     : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                     ? 'text-amber-600'
//                                     : 'text-emerald-400'
//                                 }`} />
//                               </div>
//                               <span className={
//                                 plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-700'
//                               }>
//                                 {feature}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="pt-8 border-t border-gray-200">
//                         <div className="grid grid-cols-3 gap-6 text-center">
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxStaff}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Staff
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxTables}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Tables
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxMenuItems}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Menu Items
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-20 text-center">
//                 <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
//                       <Shield className="h-8 w-8 text-emerald-600" />
//                     </div>
//                     <div className="text-left">
//                       <p className="font-bold text-gray-900 text-lg">All plans include</p>
//                       <p className="text-gray-600">14-day free trial • No credit card required • Cancel anytime</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
//                   >
//                     Compare All Plans
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 mb-6">
//               <Award className="h-4 w-4 text-rose-600" />
//               <span className="text-sm font-semibold text-rose-700">CUSTOMER STORIES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Trusted by the
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
//                   World's Best Hotels
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Join luxury hotels and Michelin-star restaurants that trust HotelEase
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {TESTIMONIALS.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="flex items-center gap-2 mb-8">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${
//                         i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">"{testimonial.content}"</p>

//                 <div className="flex items-center gap-4">
//                   <div className={`${testimonial.avatarGradient} h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
//                     <p className="text-gray-500">{testimonial.role}</p>
//                     <p className="text-sm text-amber-600 font-semibold">{testimonial.hotel}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Integrations Section */}
//       <section id="integrations" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
//               <Zap className="h-4 w-4 text-blue-600" />
//               <span className="text-sm font-semibold text-blue-700">SEAMLESS INTEGRATIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Works Perfectly With
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
//                   Your Favorite Tools
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Connect HotelEase with your existing business tools and workflows
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
//             {INTEGRATIONS.map((integration, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
//               >
//                 <div className={`p-4 rounded-xl bg-gradient-to-br ${integration.color} mb-4`}>
//                   <div className="text-white">
//                     {integration.icon}
//                   </div>
//                 </div>
//                 <p className="font-semibold text-gray-900 text-sm text-center">{integration.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
//               <HelpCircle className="h-4 w-4 text-gray-600" />
//               <span className="text-sm font-semibold text-gray-700">FREQUENTLY ASKED QUESTIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Common Questions
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
//                     Answered
//                 </span>
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-6">
//             {[
//               {
//                 question: "How long is the free trial?",
//                 answer: "All plans include a full-featured 14-day free trial. No credit card required. You can upgrade, downgrade, or cancel at any time."
//               },
//               {
//                 question: "Can I switch plans later?",
//                 answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
//               },
//               {
//                 question: "Is there a setup fee?",
//                 answer: "No, there are no setup fees or hidden charges. You only pay the monthly subscription fee for the plan you choose."
//               },
//               {
//                 question: "Do you offer discounts for annual billing?",
//                 answer: "Yes! Choose annual billing and save 20% on all plans. You'll get all the same features at a discounted rate."
//               },
//               {
//                 question: "What kind of support do you offer?",
//                 answer: "We offer email support for all plans, with priority phone support and dedicated account managers for higher-tier plans."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
//                   <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                     <HelpCircle className="h-5 w-5 text-amber-600" />
//                   </div>
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-600 pl-12">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 animate-gradient-x"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: '30px 30px'
//           }}></div>
//         </div>

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
//               <Target className="h-5 w-5 text-amber-300" />
//               <span className="text-amber-100 font-semibold">READY TO TRANSFORM YOUR BUSINESS?</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-10">
//               Experience the Future of
//               <span className="block mt-6">
//                 <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h2>

//             <p className="text-xl sm:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
//               Join thousands of successful hotels and restaurants who have transformed their operations with HotelEase.
//               Start your journey to excellence today.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4"
//               >
//                 <Sparkle className="h-6 w-6" />
//                 {isAuthenticated ? 'Go to Dashboard' : 'Start Your Free Trial'}
//                 <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
//               </button>

//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-700 hover:border-amber-500 text-white hover:text-amber-300 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-4"
//               >
//                 <Play className="h-6 w-6" />
//                 Schedule a Demo
//                 <span className="text-sm text-gray-400 group-hover:text-amber-400">(30 min)</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//                 <span>No setup fees</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                 <span>14-day free trial</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                 <span>No credit card required</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
//                 <span>Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
//             <div>
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <Hotel className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <span className="text-2xl font-bold">HotelEase</span>
//                   <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//                 </div>
//               </div>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 The premier hotel management platform for luxury establishments worldwide.
//                 Transforming hospitality operations since 2018.
//               </p>
//               <div className="flex items-center gap-4">
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Product</h4>
//               <ul className="space-y-4">
//                 <li><a href="#features" className="text-gray-400 hover:text-amber-300 transition-colors">Features</a></li>
//                 <li><a href="#pricing" className="text-gray-400 hover:text-amber-300 transition-colors">Pricing</a></li>
//                 <li><a href="#integrations" className="text-gray-400 hover:text-amber-300 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">API Documentation</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Company</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Blog</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Contact Sales</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Resources</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Help Center</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Community</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Partners</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="text-gray-400">
//               &copy; {new Date().getFullYear()} HotelEase. All rights reserved.
//             </p>
//             <div className="flex items-center gap-8">
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Floating Action Buttons */}
//       {isAuthenticated && (
//         <>
//           <button
//             onClick={handleLogout}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Logout (Demo)"
//           >
//             <div className="flex items-center gap-2">
//               <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Logout</span>
//             </div>
//           </button>

//           <button
//             onClick={() => handleGetStarted()}
//             className="fixed bottom-8 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Go to Dashboard"
//           >
//             <div className="flex items-center gap-2">
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Dashboard</span>
//             </div>
//           </button>
//         </>
//       )}

//       {/* Live Chat Widget */}
//       <button className="fixed bottom-8 right-24 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110">
//         <MessageCircle className="h-5 w-5" />
//       </button>
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   Hotel,
//   Menu,
//   X,
//   Check,
//   Star,
//   ArrowRight,
//   Users,
//   BarChart3,
//   CreditCard,
//   UtensilsCrossed,
//   ChefHat,
//   Table,
//   Receipt,
//   Smartphone,
//   Headphones,
//   Shield,
//   Zap,
//   TrendingUp,
//   Cloud,
//   QrCode,
//   TabletSmartphone,
//   Calendar,
//   Clock,
//   MessageSquare,
//   Award,
//   Trophy,
//   Sparkles,
//   BadgeCheck,
//   Target,
//   ArrowUpRight,
//   ChevronRight,
//   LogOut,
//   Play,
//   Sparkle,
//   Gem,
//   Crown,
//   Loader2,
//   Clock4,
//   Building,
//   Coffee,
//   Utensils,
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   CreditCard as CreditCardIcon,
//   Bell,
//   Settings,
//   HelpCircle,
//   FileText,
//   Lock,
//   CheckCircle,
//   Award as AwardIcon,
//   Users as UsersIcon,
//   CloudRain,
//   Server,
//   Database,
//   Cpu,
//   Wifi,
//   ShieldCheck,
//   Zap as ZapIcon,
//   BarChart,
//   PieChart,
//   LineChart,
//   DollarSign,
//   ShoppingBag,
//   Package,
//   Truck,
//   Home,
//   Gift,
//   Tag,
//   Percent,
//   ShoppingCart,
//   Heart,
//   BookOpen,
//   LifeBuoy,
//   MessageCircle,
//   Video,
//   Download,
//   Upload,
//   Folder,
//   File,
//   Image,
//   Music,
//   Film,
//   Camera,
//   Mic,
//   Headset,
//   Keyboard,
//   Mouse,
//   Monitor,
//   Printer,
//   HardDrive,
//   Battery,
//   BatteryCharging,
//   Power,
//   WifiOff,
//   Bluetooth,
//   Radio,
//   Tv,
//   Smartphone as SmartphoneIcon,
//   Watch,
//   Laptop,
//   Tablet,
//   Speaker
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
// import type { RootState, AppDispatch } from "../store/index"
// import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // ===================== TYPES =====================
// interface User {
//   id: string;
//   email: string;
//   name: string;
//   isSubscribed: boolean;
//   role?: 'hotel_admin' | 'staff';
//   hotelName?: string;
//   subscriptionPlan?: string;
// }

// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface UISubscriptionPlan {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   billingCycle: 'monthly' | 'yearly';
//   features: string[];
//   popular?: boolean;
//   maxStaff: number;
//   maxTables: number;
//   maxMenuItems: number;
//   analytics: boolean;
//   support: 'basic' | 'priority' | 'dedicated';
//   plan_code: string;
// }

// interface Feature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   role: string;
//   hotel: string;
//   content: string;
//   rating: number;
//   avatarGradient: string;
// }

// interface Stat {
//   label: string;
//   value: string;
//   change: string;
//   color: string;
// }

// // ===================== HELPER FUNCTIONS =====================
// const transformApiPlanToUiPlan = (apiPlan: SubscriptionPlan): UISubscriptionPlan => {
//   const featuresList: string[] = []

//   const featureMap: Record<string, string> = {
//     multi_device: 'Multi-device access',
//     basic_reports: 'Basic analytics & reports',
//     advanced_reports: 'Advanced analytics dashboard',
//     full_reports: 'Comprehensive analytics suite',
//     email_support: 'Email support (24/7)',
//     phone_support: 'Phone support',
//     sms_support: 'SMS notifications & support',
//     sms_notifications: 'SMS notifications',
//     custom_branding: 'Custom branding & white-label',
//     online_ordering: 'Online ordering system',
//     table_reservations: 'Table reservation management',
//     kitchen_display: 'Kitchen display system (KDS)',
//     loyalty_program: 'Loyalty program & rewards',
//     multi_branch: 'Multi-branch management',
//     priority_support: 'Priority support',
//     dedicated_manager: 'Dedicated account manager',
//     custom_integrations: 'Custom API integrations'
//   }

//   Object.entries(apiPlan.features).forEach(([key, value]) => {
//     if (value && featureMap[key]) {
//       featuresList.push(featureMap[key])
//     }
//   })

//   featuresList.push(`Up to ${apiPlan.max_staff} staff members`)
//   featuresList.push(`${apiPlan.max_tables} tables maximum`)
//   featuresList.push(`${apiPlan.max_menu_items} menu items`)
//   featuresList.push('Real-time order management')
//   featuresList.push('Mobile POS system')
//   featuresList.push('QR code ordering')

//   if (parseFloat(apiPlan.price_per_month) >= 79.99) {
//     featuresList.push('Inventory management')
//     featuresList.push('Staff scheduling')
//   }
//   if (parseFloat(apiPlan.price_per_month) >= 119.99) {
//     featuresList.push('Customer relationship management')
//     featuresList.push('Marketing automation')
//   }

//   let supportType: 'basic' | 'priority' | 'dedicated' = 'basic'
//   if (apiPlan.features.priority_support) {
//     supportType = 'priority'
//   }
//   if (apiPlan.features.dedicated_manager) {
//     supportType = 'dedicated'
//   }

//   return {
//     id: apiPlan.id,
//     name: apiPlan.plan_name,
//     description: apiPlan.description,
//     price: parseFloat(apiPlan.price_per_month),
//     billingCycle: 'monthly',
//     features: featuresList,
//     popular: apiPlan.plan_code === 'BUSINESS' || apiPlan.plan_code === 'ENTERPRISE' || apiPlan.plan_code === 'PREMIUM',
//     maxStaff: apiPlan.max_staff,
//     maxTables: apiPlan.max_tables,
//     maxMenuItems: apiPlan.max_menu_items,
//     analytics: apiPlan.features.advanced_reports || apiPlan.features.full_reports || apiPlan.features.basic_reports,
//     support: supportType,
//     plan_code: apiPlan.plan_code,
//   }
// }

// // ===================== CONSTANTS =====================
// const FEATURES: Feature[] = [
//   {
//     title: 'Smart Order Management',
//     description: 'Streamline orders with real-time updates, split bills, and special requests handling. Reduce order errors by 95% with our intelligent system.',
//     icon: <UtensilsCrossed className="h-8 w-8" />,
//     gradient: 'from-amber-500 to-orange-500',
//     bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
//   },
//   {
//     title: 'Kitchen Display System',
//     description: 'Digital order tickets with prep timers, course sequencing, and chef notes. Optimize kitchen workflow and reduce preparation time by 40%.',
//     icon: <ChefHat className="h-8 w-8" />,
//     gradient: 'from-rose-500 to-pink-600',
//     bgGradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
//   },
//   {
//     title: 'Table Management',
//     description: 'Interactive floor plan with live status, reservations, and waitlist management. Increase table turnover by 25% with smart seating algorithms.',
//     icon: <Table className="h-8 w-8" />,
//     gradient: 'from-emerald-500 to-teal-600',
//     bgGradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
//   },
//   {
//     title: 'Staff Management',
//     description: 'Role-based permissions, shift scheduling, and performance tracking. Reduce scheduling conflicts by 60% with automated shift management.',
//     icon: <Users className="h-8 w-8" />,
//     gradient: 'from-blue-500 to-cyan-600',
//     bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
//   },
//   {
//     title: 'Advanced Analytics',
//     description: 'Real-time insights on sales, inventory, customer behavior, and profitability. Make data-driven decisions with predictive analytics.',
//     icon: <TrendingUp className="h-8 w-8" />,
//     gradient: 'from-violet-500 to-purple-600',
//     bgGradient: 'bg-gradient-to-br from-violet-50 to-purple-50',
//   },
//   {
//     title: 'Mobile POS System',
//     description: 'Take orders and process payments anywhere with our intuitive mobile app. Increase staff efficiency by 35% with mobile order taking.',
//     icon: <TabletSmartphone className="h-8 w-8" />,
//     gradient: 'from-indigo-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50',
//   },
//   {
//     title: 'Inventory Management',
//     description: 'Automated stock tracking, purchase orders, and waste reduction. Reduce inventory costs by 20% with smart forecasting.',
//     icon: <Package className="h-8 w-8" />,
//     gradient: 'from-green-500 to-emerald-600',
//     bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
//   },
//   {
//     title: 'Customer CRM',
//     description: 'Track guest preferences, dining history, and special requests. Increase repeat business by 45% with personalized service.',
//     icon: <UsersIcon className="h-8 w-8" />,
//     gradient: 'from-pink-500 to-rose-600',
//     bgGradient: 'bg-gradient-to-br from-pink-50 to-rose-50',
//   },
//   {
//     title: 'Multi-Branch Control',
//     description: 'Centralized management for multiple locations with consolidated reporting. Streamline operations across all your properties.',
//     icon: <Building className="h-8 w-8" />,
//     gradient: 'from-cyan-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
//   },
// ]

// const TESTIMONIALS: Testimonial[] = [
//   {
//     id: '1',
//     name: 'Isabella Rossi',
//     role: 'General Manager',
//     hotel: 'Grand Palazzo Hotel',
//     content: 'HotelEase transformed our 5-star hotel operations. Guest satisfaction increased by 40% and operational costs decreased by 25%. The ROI was achieved in just 3 months.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-amber-500 to-orange-500',
//   },
//   {
//     id: '2',
//     name: 'Kenji Tanaka',
//     role: 'Restaurant Owner',
//     hotel: 'Sakura Fine Dining',
//     content: 'The kitchen display system reduced order errors by 95%. Our chefs are more efficient and our customers happier than ever. Service speed improved by 30%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
//   },
//   {
//     id: '3',
//     name: 'Sophia Chen',
//     role: 'Operations Director',
//     hotel: 'The Royal Resort',
//     content: 'We manage 3 restaurants and 2 bars seamlessly with HotelEase. The multi-branch feature is a game-changer for our business. Reporting time reduced by 70%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
//   },
//   {
//     id: '4',
//     name: 'Marcus Johnson',
//     role: 'Hotel Director',
//     hotel: 'Oceanview Luxury Resort',
//     content: 'The analytics dashboard provided insights we never had before. We optimized menu pricing and increased profitability by 18% in the first quarter.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
//   },
//   {
//     id: '5',
//     name: 'Elena Vasquez',
//     role: 'F&B Manager',
//     hotel: 'Metropolitan Suites',
//     content: 'Staff scheduling became effortless. We reduced overtime costs by 35% while maintaining excellent service quality. The mobile app is a game-changer.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
//   },
//   {
//     id: '6',
//     name: 'Ahmed Al-Farsi',
//     role: 'CEO',
//     hotel: 'Desert Oasis Hotels',
//     content: 'From implementation to daily use, the support has been exceptional. Our 12 properties now operate seamlessly with centralized control and reporting.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
//   },
// ]

// const STATS: Stat[] = [
//   { label: 'Hotels & Restaurants', value: '2,500+', change: '+40% this year', color: 'text-amber-600' },
//   { label: 'Orders Processed', value: '10M+', change: 'Monthly volume', color: 'text-emerald-600' },
//   { label: 'Customer Rating', value: '4.9/5', change: 'Based on 1,200 reviews', color: 'text-rose-600' },
//   { label: 'Staff Managed', value: '50K+', change: 'Worldwide users', color: 'text-blue-600' },
//   { label: 'Countries', value: '45+', change: 'Global presence', color: 'text-violet-600' },
//   { label: 'Uptime', value: '99.9%', change: 'Service reliability', color: 'text-cyan-600' },
// ]

// const INTEGRATIONS = [
//   { name: 'QuickBooks', icon: <DollarSign className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Xero', icon: <FileText className="h-6 w-6" />, color: 'from-blue-500 to-cyan-600' },
//   { name: 'Stripe', icon: <CreditCardIcon className="h-6 w-6" />, color: 'from-violet-500 to-purple-600' },
//   { name: 'PayPal', icon: <ShoppingBag className="h-6 w-6" />, color: 'from-blue-500 to-indigo-600' },
//   { name: 'Square', icon: <CreditCard className="h-6 w-6" />, color: 'from-emerald-500 to-teal-600' },
//   { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Mailchimp', icon: <Mail className="h-6 w-6" />, color: 'from-amber-500 to-orange-600' },
//   { name: 'Slack', icon: <MessageSquare className="h-6 w-6" />, color: 'from-pink-500 to-rose-600' },
// ]

// // ===================== MAIN COMPONENT =====================
// export default function HotelEaseLandingPage() {
//   const router = useRouter()
//   const dispatch = useDispatch<AppDispatch>()
//   const { plans, loading, error } = useSelector((state: RootState) => state.subscription)

//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [user, setUser] = useState<User | null>(null)
//   const [activeFeature, setActiveFeature] = useState(0)
//   const [isScrolled, setIsScrolled] = useState(false)

//   const isAuthenticated = !!user

//   useEffect(() => {
//     if (plans.length === 0) {
//       dispatch(fetchSubscriptionPlans())
//     }
//   }, [dispatch, plans.length])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % FEATURES.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Navigation handlers
//   const handleGetStarted = (planId?: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else if (planId) {
//       router.push(`/register?plan=${planId}`)
//     } else {
//       router.push('/register')
//     }
//   }

//   const handlePlanSelect = (planId: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else {
//       router.push(`/register?plan=${planId}`)
//     }
//   }

//   const handleGoToDashboard = () => {
//     if (user?.hotelName) {
//       router.push(`/dashboard/${user.hotelName.toLowerCase().replace(/\s+/g, '-')}`)
//     } else {
//       router.push('/dashboard')
//     }
//   }

//   const handleLogout = () => {
//     setUser(null)
//     toast.success('Logged out successfully!', {
//       icon: '👋',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleDemoLogin = () => {
//     setUser({
//       id: 'demo-123',
//       email: 'demo@hotelease.com',
//       name: 'Demo User',
//       isSubscribed: true,
//       role: 'hotel_admin',
//       hotelName: 'Demo Hotel',
//       subscriptionPlan: 'PROFESSIONAL'
//     })
//     toast.success('Demo login successful!', {
//       icon: '🎉',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleViewFeatures = () => {
//     document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewPricing = () => {
//     document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewTestimonials = () => {
//     document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const sortedPlans = [...plans].sort((a, b) => a.display_order - b.display_order)
//   const uiPlans = sortedPlans.map(transformApiPlanToUiPlan)

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Toaster */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//             padding: '16px',
//           },
//           success: {
//             iconTheme: {
//               primary: '#f59e0b',
//               secondary: '#1f2937',
//             },
//           },
//         }}
//       />

//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg py-3'
//           : 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-5'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
//                 <Hotel className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-10">
//               <button
//                 onClick={handleViewFeatures}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Features
//               </button>
//               <button
//                 onClick={handleViewPricing}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={handleViewTestimonials}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Testimonials
//               </button>
//               <a href="#integrations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Integrations</a>
//               <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">FAQ</a>
//             </div>

//             <div className="hidden lg:flex items-center gap-4">
//               {isAuthenticated ? (
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-700 font-medium text-sm">Welcome, {user?.name}</span>
//                   <button
//                     onClick={handleGoToDashboard}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
//                   >
//                     Go to Dashboard
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleDemoLogin}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Try Demo
//                   </button>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 text-sm"
//                   >
//                     <Sparkle className="h-3.5 w-3.5" />
//                     Start Free Trial
//                   </button>
//                 </>
//               )}
//             </div>

//             <button
//               className="lg:hidden p-2 text-gray-700"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl mt-4">
//               <div className="flex flex-col space-y-3">
//                 <button
//                   onClick={() => {
//                     handleViewFeatures()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Features
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewPricing()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Pricing
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewTestimonials()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Testimonials
//                 </button>
//                 <a
//                   href="#integrations"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   Integrations
//                 </a>
//                 <a
//                   href="#faq"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   FAQ
//                 </a>
//                 <div className="pt-4 border-t border-gray-100">
//                   {isAuthenticated ? (
//                     <>
//                       <div className="mb-3 px-4">
//                         <p className="text-sm text-gray-500">Logged in as</p>
//                         <p className="font-semibold text-gray-900 text-sm">{user?.name}</p>
//                       </div>
//                       <button
//                         onClick={() => {
//                           handleGoToDashboard()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm"
//                       >
//                         Go to Dashboard
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => {
//                           handleDemoLogin()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 hover:bg-amber-50 rounded-xl text-sm mb-2"
//                       >
//                         Try Demo
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleGetStarted()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm"
//                       >
//                         <Sparkle className="h-3.5 w-3.5" />
//                         Start Free Trial
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
//         {/* Background gradients */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
//         <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

//         {/* Animated blobs */}
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8 animate-float">
//               <div className="flex items-center gap-2">
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//               <span className="text-sm font-semibold text-amber-800">Trusted by 2,500+ luxury hotels & restaurants worldwide</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//               Revolutionize Your
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h1>

//             <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               The all-in-one SaaS platform designed exclusively for luxury hotels and fine dining establishments.
//               Streamline operations, delight guests, and maximize revenue with AI-powered hospitality solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Free 14-Day Trial
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//               </button>
//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//               >
//                 <Play className="h-5 w-5" />
//                 Watch Live Demo
//                 <span className="text-sm text-gray-500 group-hover:text-amber-500">(2 min)</span>
//               </button>
//             </div>

//             {/* Quick Navigation Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//               <button
//                 onClick={handleViewFeatures}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
//                     <Sparkles className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Explore Features</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Discover how HotelEase can transform your operations</p>
//                 <div className="flex items-center text-amber-600 font-semibold text-sm">
//                   View all features
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewPricing}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl">
//                     <CreditCardIcon className="h-6 w-6 text-violet-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">View Pricing</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Choose the perfect plan for your business needs</p>
//                 <div className="flex items-center text-violet-600 font-semibold text-sm">
//                   See all plans
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewTestimonials}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl">
//                     <Award className="h-6 w-6 text-rose-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Read Stories</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">See how luxury hotels succeed with HotelEase</p>
//                 <div className="flex items-center text-rose-600 font-semibold text-sm">
//                   View testimonials
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
//               {STATS.map((stat, index) => (
//                 <div key={index} className="text-center p-4">
//                   <p className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
//                   <p className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
//                   <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-6">
//               <BadgeCheck className="h-4 w-4 text-emerald-600" />
//               <span className="text-sm font-semibold text-emerald-700">PREMIUM FEATURES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Everything You Need for
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
//                   Operational Excellence
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Sophisticated tools designed for the most demanding hospitality businesses
//             </p>
//           </div>

//           {/* Featured Feature Showcase */}
//           <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

//             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <div className={`mb-6 p-5 rounded-2xl ${FEATURES[activeFeature].bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${FEATURES[activeFeature].gradient} p-3 rounded-xl`}>
//                     {FEATURES[activeFeature].icon}
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4">
//                   {FEATURES[activeFeature].title}
//                 </h3>
//                 <p className="text-gray-300 mb-8 text-lg">
//                   {FEATURES[activeFeature].description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 {FEATURES.slice(0, 6).map((feature, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveFeature(index)}
//                     className={`p-4 rounded-xl transition-all duration-300 ${
//                       activeFeature === index
//                         ? 'bg-white/10 backdrop-blur-sm border border-white/20'
//                         : 'bg-white/5 hover:bg-white/10'
//                     }`}
//                   >
//                     <div className={`p-3 rounded-lg ${feature.bgGradient} mb-3`}>
//                       <div className={`bg-gradient-to-br ${feature.gradient} p-2 rounded-lg`}>
//                         {feature.icon}
//                       </div>
//                     </div>
//                     <p className="text-sm font-semibold text-white">{feature.title.split(' ')[0]}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* All Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {FEATURES.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className={`mb-6 p-5 rounded-2xl ${feature.bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mb-8">
//                   {feature.description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="flex items-center text-amber-600 font-semibold hover:text-amber-700"
//                 >
//                   Try this feature free
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Platform Highlights */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <ShieldCheck className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Enterprise Security</h4>
//                   <p className="text-gray-600">Bank-level protection</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">SOC 2 Type II certified with end-to-end encryption and regular security audits.</p>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//                   <Cloud className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Cloud Infrastructure</h4>
//                   <p className="text-gray-600">99.9% uptime guarantee</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Built on AWS with global CDN for lightning-fast performance worldwide.</p>
//             </div>

//             <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
//                   <Headphones className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">24/7 Premium Support</h4>
//                   <p className="text-gray-600">Dedicated account managers</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Round-the-clock support with dedicated account managers for enterprise clients.</p>
//             </div>
//           </div>

//           {/* Feature CTA */}
//           <div className="mt-16 text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Sparkle className="h-5 w-5" />
//               Start Your Free Trial with All Features
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 mb-6">
//               <Trophy className="h-4 w-4 text-violet-600" />
//               <span className="text-sm font-semibold text-violet-700">FLEXIBLE PLANS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Simple, Transparent
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
//                   Pricing
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Choose the perfect plan for your business. All plans include a 14-day free trial with full access.
//             </p>
//           </div>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="text-center">
//                 <Loader2 className="h-12 w-12 text-amber-500 animate-spin mx-auto mb-4" />
//                 <p className="text-gray-600">Loading subscription plans...</p>
//               </div>
//             </div>
//           ) : error ? (
//             <div className="text-center py-20">
//               <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
//                 <div className="p-3 bg-red-100 rounded-full w-fit mx-auto mb-4">
//                   <X className="h-6 w-6 text-red-600" />
//                 </div>
//                 <p className="text-red-600 font-semibold mb-2">Error loading plans</p>
//                 <p className="text-gray-600 mb-4">{error}</p>
//                 <button
//                   onClick={() => dispatch(fetchSubscriptionPlans())}
//                   className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
//                 >
//                   Retry
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {uiPlans.map((plan) => (
//                   <div
//                     key={plan.id}
//                     className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
//                       plan.popular
//                         ? 'transform lg:scale-105 shadow-2xl border-2 border-amber-500'
//                         : 'shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-amber-200'
//                     }`}
//                   >
//                     <div className={`absolute inset-0 ${
//                       plan.plan_code === 'STARTER'
//                         ? 'bg-gradient-to-b from-blue-50 to-indigo-50'
//                         : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                         ? 'bg-gradient-to-b from-amber-50 to-orange-50'
//                         : 'bg-gradient-to-b from-gray-900 to-gray-800'
//                     }`}></div>

//                     <div className={`relative p-8 h-full ${
//                       plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                     }`}>
//                       {plan.popular && (
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                           <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2">
//                             <Crown className="h-4 w-4" />
//                             MOST POPULAR
//                           </div>
//                         </div>
//                       )}

//                       {plan.plan_code === 'ENTERPRISE' && (
//                         <div className="absolute top-6 right-6">
//                           <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
//                             <Gem className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       )}

//                       <div className="mb-10">
//                         <div className="flex items-center gap-3 mb-4">
//                           <h3 className={`text-3xl font-bold ${
//                             plan.plan_code === 'STARTER'
//                               ? 'text-blue-600'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'text-amber-600'
//                               : 'text-white'
//                           }`}>
//                             {plan.name}
//                           </h3>
//                           {plan.plan_code === 'ENTERPRISE' && (
//                             <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold">
//                               PREMIUM
//                             </span>
//                           )}
//                         </div>
//                         <p className={`mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-600'
//                         }`}>
//                           {plan.description}
//                         </p>

//                         <div className="mb-8">
//                           <div className="flex items-baseline">
//                             <span className={`text-5xl font-bold ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-700'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-700'
//                                 : 'text-white'
//                             }`}>
//                               ${plan.price}
//                             </span>
//                             <span className={`ml-2 ${
//                               plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                             }`}>
//                               /month
//                             </span>
//                           </div>
//                           <p className={`text-sm mt-2 ${
//                             plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                           }`}>
//                             Billed annually: ${Math.floor(plan.price * 12 * 0.8)}/year (Save 20%)
//                           </p>
//                         </div>

//                         <button
//                           onClick={() => handlePlanSelect(plan.id)}
//                           className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 ${
//                             plan.plan_code === 'STARTER'
//                               ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
//                               : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border border-gray-700'
//                           }`}
//                         >
//                           {isAuthenticated ? 'Go to Dashboard' : (
//                             <>
//                               <Sparkle className="h-5 w-5" />
//                               Start Free Trial
//                             </>
//                           )}
//                         </button>
//                       </div>

//                       <div className="mb-10">
//                         <h4 className={`font-bold text-lg mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                         }`}>
//                           Everything included:
//                         </h4>
//                         <ul className="space-y-3">
//                           {plan.features.slice(0, 8).map((feature, index) => (
//                             <li key={index} className="flex items-start gap-3">
//                               <div className={`p-1 rounded-lg mt-1 ${
//                                 plan.plan_code === 'STARTER'
//                                   ? 'bg-blue-100'
//                                   : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                   ? 'bg-amber-100'
//                                   : 'bg-gray-800'
//                               }`}>
//                                 <Check className={`h-4 w-4 ${
//                                   plan.plan_code === 'STARTER'
//                                     ? 'text-blue-600'
//                                     : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                     ? 'text-amber-600'
//                                     : 'text-emerald-400'
//                                 }`} />
//                               </div>
//                               <span className={
//                                 plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-700'
//                               }>
//                                 {feature}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="pt-8 border-t border-gray-200">
//                         <div className="grid grid-cols-3 gap-6 text-center">
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxStaff}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Staff
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxTables}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Tables
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxMenuItems}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Menu Items
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-20 text-center">
//                 <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
//                       <Shield className="h-8 w-8 text-emerald-600" />
//                     </div>
//                     <div className="text-left">
//                       <p className="font-bold text-gray-900 text-lg">All plans include</p>
//                       <p className="text-gray-600">14-day free trial • No credit card required • Cancel anytime</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
//                   >
//                     <Sparkle className="h-5 w-5" />
//                     Start Free Trial
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 mb-6">
//               <Award className="h-4 w-4 text-rose-600" />
//               <span className="text-sm font-semibold text-rose-700">CUSTOMER STORIES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Trusted by the
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
//                   World's Best Hotels
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Join luxury hotels and Michelin-star restaurants that trust HotelEase
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {TESTIMONIALS.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="flex items-center gap-2 mb-8">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${
//                         i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">"{testimonial.content}"</p>

//                 <div className="flex items-center gap-4">
//                   <div className={`${testimonial.avatarGradient} h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
//                     <p className="text-gray-500">{testimonial.role}</p>
//                     <p className="text-sm text-amber-600 font-semibold">{testimonial.hotel}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonials CTA */}
//           <div className="mt-20 text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 max-w-3xl mx-auto">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Ready to Join Them?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Start your journey with HotelEase today and transform your hotel operations.
//               </p>
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Your Free Trial
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integrations Section */}
//       <section id="integrations" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
//               <Zap className="h-4 w-4 text-blue-600" />
//               <span className="text-sm font-semibold text-blue-700">SEAMLESS INTEGRATIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Works Perfectly With
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
//                   Your Favorite Tools
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Connect HotelEase with your existing business tools and workflows
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
//             {INTEGRATIONS.map((integration, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
//               >
//                 <div className={`p-4 rounded-xl bg-gradient-to-br ${integration.color} mb-4`}>
//                   <div className="text-white">
//                     {integration.icon}
//                   </div>
//                 </div>
//                 <p className="font-semibold text-gray-900 text-sm text-center">{integration.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Integrations CTA */}
//           <div className="text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Zap className="h-5 w-5" />
//               Start Free Trial with All Integrations
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
//               <HelpCircle className="h-4 w-4 text-gray-600" />
//               <span className="text-sm font-semibold text-gray-700">FREQUENTLY ASKED QUESTIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Common Questions
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
//                     Answered
//                 </span>
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-6 mb-16">
//             {[
//               {
//                 question: "How long is the free trial?",
//                 answer: "All plans include a full-featured 14-day free trial. No credit card required. You can upgrade, downgrade, or cancel at any time."
//               },
//               {
//                 question: "Can I switch plans later?",
//                 answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
//               },
//               {
//                 question: "Is there a setup fee?",
//                 answer: "No, there are no setup fees or hidden charges. You only pay the monthly subscription fee for the plan you choose."
//               },
//               {
//                 question: "Do you offer discounts for annual billing?",
//                 answer: "Yes! Choose annual billing and save 20% on all plans. You'll get all the same features at a discounted rate."
//               },
//               {
//                 question: "What kind of support do you offer?",
//                 answer: "We offer email support for all plans, with priority phone support and dedicated account managers for higher-tier plans."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
//                   <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                     <HelpCircle className="h-5 w-5 text-amber-600" />
//                   </div>
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-600 pl-12">{faq.answer}</p>
//               </div>
//             ))}
//           </div>

//           {/* FAQ CTA */}
//           <div className="text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Still Have Questions?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Our team is ready to help you get started with HotelEase.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
//                 >
//                   <Sparkle className="h-5 w-5" />
//                   Start Free Trial Now
//                 </button>
//                 <button
//                   onClick={handleDemoLogin}
//                   className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//                 >
//                   <Play className="h-5 w-5" />
//                   Schedule a Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 animate-gradient-x"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: '30px 30px'
//           }}></div>
//         </div>

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
//               <Target className="h-5 w-5 text-amber-300" />
//               <span className="text-amber-100 font-semibold">READY TO TRANSFORM YOUR BUSINESS?</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-10">
//               Experience the Future of
//               <span className="block mt-6">
//                 <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h2>

//             <p className="text-xl sm:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
//               Join thousands of successful hotels and restaurants who have transformed their operations with HotelEase.
//               Start your journey to excellence today.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4"
//               >
//                 <Sparkle className="h-6 w-6" />
//                 {isAuthenticated ? 'Go to Dashboard' : 'Start Your Free Trial'}
//                 <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
//               </button>

//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-700 hover:border-amber-500 text-white hover:text-amber-300 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-4"
//               >
//                 <Play className="h-6 w-6" />
//                 Schedule a Demo
//                 <span className="text-sm text-gray-400 group-hover:text-amber-400">(30 min)</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//                 <span>No setup fees</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                 <span>14-day free trial</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                 <span>No credit card required</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
//                 <span>Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
//             <div>
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <Hotel className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <span className="text-2xl font-bold">HotelEase</span>
//                   <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//                 </div>
//               </div>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 The premier hotel management platform for luxury establishments worldwide.
//                 Transforming hospitality operations since 2018.
//               </p>
//               <div className="flex items-center gap-4">
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Product</h4>
//               <ul className="space-y-4">
//                 <li><button onClick={handleViewFeatures} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Features</button></li>
//                 <li><button onClick={handleViewPricing} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Pricing</button></li>
//                 <li><a href="#integrations" className="text-gray-400 hover:text-amber-300 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">API Documentation</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Company</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Blog</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Contact Sales</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Resources</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Help Center</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Community</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Partners</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="text-gray-400">
//               &copy; {new Date().getFullYear()} HotelEase. All rights reserved.
//             </p>
//             <div className="flex items-center gap-8">
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Floating Action Buttons */}
//       {isAuthenticated ? (
//         <>
//           <button
//             onClick={handleLogout}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Logout (Demo)"
//           >
//             <div className="flex items-center gap-2">
//               <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Logout</span>
//             </div>
//           </button>

//           <button
//             onClick={handleGoToDashboard}
//             className="fixed bottom-8 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Go to Dashboard"
//           >
//             <div className="flex items-center gap-2">
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Dashboard</span>
//             </div>
//           </button>
//         </>
//       ) : (
//         <button
//           onClick={() => handleGetStarted()}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group flex items-center gap-2"
//           title="Start Free Trial"
//         >
//           <Sparkle className="h-5 w-5" />
//           <span className="text-sm font-semibold">Start Free Trial</span>
//         </button>
//       )}

//       {/* Live Chat Widget */}
//       <button className="fixed bottom-8 right-24 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110">
//         <MessageCircle className="h-5 w-5" />
//       </button>
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   Hotel,
//   Menu,
//   X,
//   Check,
//   Star,
//   ArrowRight,
//   Users,
//   BarChart3,
//   CreditCard,
//   UtensilsCrossed,
//   ChefHat,
//   Table,
//   Receipt,
//   Smartphone,
//   Headphones,
//   Shield,
//   Zap,
//   TrendingUp,
//   Cloud,
//   QrCode,
//   TabletSmartphone,
//   Calendar,
//   Clock,
//   MessageSquare,
//   Award,
//   Trophy,
//   Sparkles,
//   BadgeCheck,
//   Target,
//   ArrowUpRight,
//   ChevronRight,
//   LogOut,
//   Play,
//   Sparkle,
//   Gem,
//   Crown,
//   Loader2,
//   Clock4,
//   Building,
//   Coffee,
//   Utensils,
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   CreditCard as CreditCardIcon,
//   Bell,
//   Settings,
//   HelpCircle,
//   FileText,
//   Lock,
//   CheckCircle,
//   Award as AwardIcon,
//   Users as UsersIcon,
//   CloudRain,
//   Server,
//   Database,
//   Cpu,
//   Wifi,
//   ShieldCheck,
//   Zap as ZapIcon,
//   BarChart,
//   PieChart,
//   LineChart,
//   DollarSign,
//   ShoppingBag,
//   Package,
//   Truck,
//   Home,
//   Gift,
//   Tag,
//   Percent,
//   ShoppingCart,
//   Heart,
//   BookOpen,
//   LifeBuoy,
//   MessageCircle,
//   Video,
//   Download,
//   Upload,
//   Folder,
//   File,
//   Image,
//   Music,
//   Film,
//   Camera,
//   Mic,
//   Headset,
//   Keyboard,
//   Mouse,
//   Monitor,
//   Printer,
//   HardDrive,
//   Battery,
//   BatteryCharging,
//   Power,
//   WifiOff,
//   Bluetooth,
//   Radio,
//   Tv,
//   Smartphone as SmartphoneIcon,
//   Watch,
//   Laptop,
//   Tablet,
//   Speaker
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { useSelector, useDispatch } from 'react-redux'
// import type { RootState, AppDispatch } from "../store/index"
// import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'

// // ===================== TYPES =====================
// interface User {
//   id: string;
//   email: string;
//   name: string;
//   isSubscribed: boolean;
//   role?: 'hotel_admin' | 'staff';
//   hotelName?: string;
//   subscriptionPlan?: string;
// }

// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface UISubscriptionPlan {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   billingCycle: 'monthly' | 'yearly';
//   features: string[];
//   popular?: boolean;
//   maxStaff: number;
//   maxTables: number;
//   maxMenuItems: number;
//   analytics: boolean;
//   support: 'basic' | 'priority' | 'dedicated';
//   plan_code: string;
// }

// interface Feature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   role: string;
//   hotel: string;
//   content: string;
//   rating: number;
//   avatarGradient: string;
// }

// interface Stat {
//   label: string;
//   value: string;
//   change: string;
//   color: string;
// }

// // ===================== HELPER FUNCTIONS =====================
// const transformApiPlanToUiPlan = (apiPlan: SubscriptionPlan): UISubscriptionPlan => {
//   const featuresList: string[] = []

//   const featureMap: Record<string, string> = {
//     multi_device: 'Multi-device access',
//     basic_reports: 'Basic analytics & reports',
//     advanced_reports: 'Advanced analytics dashboard',
//     full_reports: 'Comprehensive analytics suite',
//     email_support: 'Email support (24/7)',
//     phone_support: 'Phone support',
//     sms_support: 'SMS notifications & support',
//     sms_notifications: 'SMS notifications',
//     custom_branding: 'Custom branding & white-label',
//     online_ordering: 'Online ordering system',
//     table_reservations: 'Table reservation management',
//     kitchen_display: 'Kitchen display system (KDS)',
//     loyalty_program: 'Loyalty program & rewards',
//     multi_branch: 'Multi-branch management',
//     priority_support: 'Priority support',
//     dedicated_manager: 'Dedicated account manager',
//     custom_integrations: 'Custom API integrations'
//   }

//   Object.entries(apiPlan.features).forEach(([key, value]) => {
//     if (value && featureMap[key]) {
//       featuresList.push(featureMap[key])
//     }
//   })

//   featuresList.push(`Up to ${apiPlan.max_staff} staff members`)
//   featuresList.push(`${apiPlan.max_tables} tables maximum`)
//   featuresList.push(`${apiPlan.max_menu_items} menu items`)
//   featuresList.push('Real-time order management')
//   featuresList.push('Mobile POS system')
//   featuresList.push('QR code ordering')

//   if (parseFloat(apiPlan.price_per_month) >= 79.99) {
//     featuresList.push('Inventory management')
//     featuresList.push('Staff scheduling')
//   }
//   if (parseFloat(apiPlan.price_per_month) >= 119.99) {
//     featuresList.push('Customer relationship management')
//     featuresList.push('Marketing automation')
//   }

//   let supportType: 'basic' | 'priority' | 'dedicated' = 'basic'
//   if (apiPlan.features.priority_support) {
//     supportType = 'priority'
//   }
//   if (apiPlan.features.dedicated_manager) {
//     supportType = 'dedicated'
//   }

//   return {
//     id: apiPlan.id,
//     name: apiPlan.plan_name,
//     description: apiPlan.description,
//     price: parseFloat(apiPlan.price_per_month),
//     billingCycle: 'monthly',
//     features: featuresList,
//     popular: apiPlan.plan_code === 'BUSINESS' || apiPlan.plan_code === 'ENTERPRISE' || apiPlan.plan_code === 'PREMIUM',
//     maxStaff: apiPlan.max_staff,
//     maxTables: apiPlan.max_tables,
//     maxMenuItems: apiPlan.max_menu_items,
//     analytics: apiPlan.features.advanced_reports || apiPlan.features.full_reports || apiPlan.features.basic_reports,
//     support: supportType,
//     plan_code: apiPlan.plan_code,
//   }
// }

// // ===================== CONSTANTS =====================
// const FEATURES: Feature[] = [
//   {
//     title: 'Smart Order Management',
//     description: 'Streamline orders with real-time updates, split bills, and special requests handling. Reduce order errors by 95% with our intelligent system.',
//     icon: <UtensilsCrossed className="h-8 w-8" />,
//     gradient: 'from-amber-500 to-orange-500',
//     bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
//   },
//   {
//     title: 'Kitchen Display System',
//     description: 'Digital order tickets with prep timers, course sequencing, and chef notes. Optimize kitchen workflow and reduce preparation time by 40%.',
//     icon: <ChefHat className="h-8 w-8" />,
//     gradient: 'from-rose-500 to-pink-600',
//     bgGradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
//   },
//   {
//     title: 'Table Management',
//     description: 'Interactive floor plan with live status, reservations, and waitlist management. Increase table turnover by 25% with smart seating algorithms.',
//     icon: <Table className="h-8 w-8" />,
//     gradient: 'from-emerald-500 to-teal-600',
//     bgGradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
//   },
//   {
//     title: 'Staff Management',
//     description: 'Role-based permissions, shift scheduling, and performance tracking. Reduce scheduling conflicts by 60% with automated shift management.',
//     icon: <Users className="h-8 w-8" />,
//     gradient: 'from-blue-500 to-cyan-600',
//     bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
//   },
//   {
//     title: 'Advanced Analytics',
//     description: 'Real-time insights on sales, inventory, customer behavior, and profitability. Make data-driven decisions with predictive analytics.',
//     icon: <TrendingUp className="h-8 w-8" />,
//     gradient: 'from-violet-500 to-purple-600',
//     bgGradient: 'bg-gradient-to-br from-violet-50 to-purple-50',
//   },
//   {
//     title: 'Mobile POS System',
//     description: 'Take orders and process payments anywhere with our intuitive mobile app. Increase staff efficiency by 35% with mobile order taking.',
//     icon: <TabletSmartphone className="h-8 w-8" />,
//     gradient: 'from-indigo-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50',
//   },
//   {
//     title: 'Inventory Management',
//     description: 'Automated stock tracking, purchase orders, and waste reduction. Reduce inventory costs by 20% with smart forecasting.',
//     icon: <Package className="h-8 w-8" />,
//     gradient: 'from-green-500 to-emerald-600',
//     bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
//   },
//   {
//     title: 'Customer CRM',
//     description: 'Track guest preferences, dining history, and special requests. Increase repeat business by 45% with personalized service.',
//     icon: <UsersIcon className="h-8 w-8" />,
//     gradient: 'from-pink-500 to-rose-600',
//     bgGradient: 'bg-gradient-to-br from-pink-50 to-rose-50',
//   },
//   {
//     title: 'Multi-Branch Control',
//     description: 'Centralized management for multiple locations with consolidated reporting. Streamline operations across all your properties.',
//     icon: <Building className="h-8 w-8" />,
//     gradient: 'from-cyan-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
//   },
// ]

// const TESTIMONIALS: Testimonial[] = [
//   {
//     id: '1',
//     name: 'Isabella Rossi',
//     role: 'General Manager',
//     hotel: 'Grand Palazzo Hotel',
//     content: 'HotelEase transformed our 5-star hotel operations. Guest satisfaction increased by 40% and operational costs decreased by 25%. The ROI was achieved in just 3 months.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-amber-500 to-orange-500',
//   },
//   {
//     id: '2',
//     name: 'Kenji Tanaka',
//     role: 'Restaurant Owner',
//     hotel: 'Sakura Fine Dining',
//     content: 'The kitchen display system reduced order errors by 95%. Our chefs are more efficient and our customers happier than ever. Service speed improved by 30%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
//   },
//   {
//     id: '3',
//     name: 'Sophia Chen',
//     role: 'Operations Director',
//     hotel: 'The Royal Resort',
//     content: 'We manage 3 restaurants and 2 bars seamlessly with HotelEase. The multi-branch feature is a game-changer for our business. Reporting time reduced by 70%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
//   },
//   {
//     id: '4',
//     name: 'Marcus Johnson',
//     role: 'Hotel Director',
//     hotel: 'Oceanview Luxury Resort',
//     content: 'The analytics dashboard provided insights we never had before. We optimized menu pricing and increased profitability by 18% in the first quarter.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
//   },
//   {
//     id: '5',
//     name: 'Elena Vasquez',
//     role: 'F&B Manager',
//     hotel: 'Metropolitan Suites',
//     content: 'Staff scheduling became effortless. We reduced overtime costs by 35% while maintaining excellent service quality. The mobile app is a game-changer.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
//   },
//   {
//     id: '6',
//     name: 'Ahmed Al-Farsi',
//     role: 'CEO',
//     hotel: 'Desert Oasis Hotels',
//     content: 'From implementation to daily use, the support has been exceptional. Our 12 properties now operate seamlessly with centralized control and reporting.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
//   },
// ]

// const STATS: Stat[] = [
//   { label: 'Hotels & Restaurants', value: '2,500+', change: '+40% this year', color: 'text-amber-600' },
//   { label: 'Orders Processed', value: '10M+', change: 'Monthly volume', color: 'text-emerald-600' },
//   { label: 'Customer Rating', value: '4.9/5', change: 'Based on 1,200 reviews', color: 'text-rose-600' },
//   { label: 'Staff Managed', value: '50K+', change: 'Worldwide users', color: 'text-blue-600' },
//   { label: 'Countries', value: '45+', change: 'Global presence', color: 'text-violet-600' },
//   { label: 'Uptime', value: '99.9%', change: 'Service reliability', color: 'text-cyan-600' },
// ]

// const INTEGRATIONS = [
//   { name: 'QuickBooks', icon: <DollarSign className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Xero', icon: <FileText className="h-6 w-6" />, color: 'from-blue-500 to-cyan-600' },
//   { name: 'Stripe', icon: <CreditCardIcon className="h-6 w-6" />, color: 'from-violet-500 to-purple-600' },
//   { name: 'PayPal', icon: <ShoppingBag className="h-6 w-6" />, color: 'from-blue-500 to-indigo-600' },
//   { name: 'Square', icon: <CreditCard className="h-6 w-6" />, color: 'from-emerald-500 to-teal-600' },
//   { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Mailchimp', icon: <Mail className="h-6 w-6" />, color: 'from-amber-500 to-orange-600' },
//   { name: 'Slack', icon: <MessageSquare className="h-6 w-6" />, color: 'from-pink-500 to-rose-600' },
// ]

// // ===================== MAIN COMPONENT =====================
// export default function HotelEaseLandingPage() {
//   const router = useRouter()
//   const dispatch = useDispatch<AppDispatch>()
//   const { plans, loading, error } = useSelector((state: RootState) => state.subscription)

//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [user, setUser] = useState<User | null>(null)
//   const [activeFeature, setActiveFeature] = useState(0)
//   const [isScrolled, setIsScrolled] = useState(false)

//   const isAuthenticated = !!user

//   const navigate= useRouter()

//   useEffect(() => {
//     // Fetch subscription plans on component mount
//     dispatch(fetchSubscriptionPlans())
//   }, [dispatch])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % FEATURES.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Navigation handlers
//   const handleGetStarted = (planId?: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else if (planId) {
//       router.push(`/register?plan=${planId}`)
//     } else {
//       router.push('/register')
//     }
//   }

//   const handlePlanSelect = (planId: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else {
//       router.push(`/register?plan=${planId}`)
//     }
//   }

//   const handleGoToDashboard = () => {
//     if (user?.hotelName) {
//       router.push(`/dashboard/${user.hotelName.toLowerCase().replace(/\s+/g, '-')}`)
//     } else {
//       router.push('/dashboard')
//     }
//   }

//   const handleLogout = () => {
//     setUser(null)
//     toast.success('Logged out successfully!', {
//       icon: '👋',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleDemoLogin = () => {
//     setUser({
//       id: 'demo-123',
//       email: 'demo@hotelease.com',
//       name: 'Demo User',
//       isSubscribed: true,
//       role: 'hotel_admin',
//       hotelName: 'Demo Hotel',
//       subscriptionPlan: 'PROFESSIONAL'
//     })
//     toast.success('Demo login successful!', {
//       icon: '🎉',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleViewFeatures = () => {
//     document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewPricing = () => {
//     document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewTestimonials = () => {
//     document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   // Transform API plans to UI plans
//   const uiPlans = plans.map((plan: any) => transformApiPlanToUiPlan(plan))
//   const sortedUiPlans = [...uiPlans].sort((a, b) => {
//     // Sort by price, but keep popular plans highlighted
//     if (a.popular && !b.popular) return -1
//     if (!a.popular && b.popular) return 1
//     return a.price - b.price
//   })

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Toaster */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//             padding: '16px',
//           },
//           success: {
//             iconTheme: {
//               primary: '#f59e0b',
//               secondary: '#1f2937',
//             },
//           },
//         }}
//       />

//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg py-3'
//           : 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-5'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
//                 <Hotel className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-10">
//               <button
//                 onClick={handleViewFeatures}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Features
//               </button>
//               <button
//                 onClick={handleViewPricing}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={handleViewTestimonials}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Testimonials
//               </button>
//               <a href="#integrations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Integrations</a>
//               <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">FAQ</a>
//             </div>

//             <div className="hidden lg:flex items-center gap-4">
//               {isAuthenticated ? (
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-700 font-medium text-sm">Welcome, {user?.name}</span>
//                   <button
//                     onClick={handleGoToDashboard}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
//                   >
//                     Go to Dashboard
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleDemoLogin}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Try Demo
//                   </button>
//                   <button
//                     onClick={() => navigate.push('/slug')}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Log in
//                   </button>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 text-sm"
//                   >
//                     <Sparkle className="h-3.5 w-3.5" />
//                     Start Free Trial
//                   </button>
//                 </>
//               )}
//             </div>

//             <button
//               className="lg:hidden p-2 text-gray-700"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl mt-4">
//               <div className="flex flex-col space-y-3">
//                 <button
//                   onClick={() => {
//                     handleViewFeatures()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Features
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewPricing()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Pricing
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewTestimonials()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Testimonials
//                 </button>
//                 <a
//                   href="#integrations"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   Integrations
//                 </a>
//                 <a
//                   href="#faq"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   FAQ
//                 </a>
//                 <div className="pt-4 border-t border-gray-100">
//                   {isAuthenticated ? (
//                     <>
//                       <div className="mb-3 px-4">
//                         <p className="text-sm text-gray-500">Logged in as</p>
//                         <p className="font-semibold text-gray-900 text-sm">{user?.name}</p>
//                       </div>
//                       <button
//                         onClick={() => {
//                           handleGoToDashboard()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm"
//                       >
//                         Go to Dashboard
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => {
//                           handleDemoLogin()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 hover:bg-amber-50 rounded-xl text-sm mb-2"
//                       >
//                         Try Demo
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleGetStarted()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm"
//                       >
//                         <Sparkle className="h-3.5 w-3.5" />
//                         Start Free Trial
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
//         {/* Background gradients */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
//         <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

//         {/* Animated blobs */}
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8 animate-float">
//               <div className="flex items-center gap-2">
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//               <span className="text-sm font-semibold text-amber-800">Trusted by 2,500+ luxury hotels & restaurants worldwide</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//               Revolutionize Your
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h1>

//             <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               The all-in-one SaaS platform designed exclusively for luxury hotels and fine dining establishments.
//               Streamline operations, delight guests, and maximize revenue with AI-powered hospitality solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Free 14-Day Trial
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//               </button>
//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//               >
//                 <Play className="h-5 w-5" />
//                 Watch Live Demo
//                 <span className="text-sm text-gray-500 group-hover:text-amber-500">(2 min)</span>
//               </button>
//             </div>

//             {/* Quick Navigation Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//               <button
//                 onClick={handleViewFeatures}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
//                     <Sparkles className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Explore Features</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Discover how HotelEase can transform your operations</p>
//                 <div className="flex items-center text-amber-600 font-semibold text-sm">
//                   View all features
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewPricing}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl">
//                     <CreditCardIcon className="h-6 w-6 text-violet-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">View Pricing</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Choose the perfect plan for your business needs</p>
//                 <div className="flex items-center text-violet-600 font-semibold text-sm">
//                   See all plans
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewTestimonials}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl">
//                     <Award className="h-6 w-6 text-rose-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Read Stories</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">See how luxury hotels succeed with HotelEase</p>
//                 <div className="flex items-center text-rose-600 font-semibold text-sm">
//                   View testimonials
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
//               {STATS.map((stat, index) => (
//                 <div key={index} className="text-center p-4">
//                   <p className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
//                   <p className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
//                   <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-6">
//               <BadgeCheck className="h-4 w-4 text-emerald-600" />
//               <span className="text-sm font-semibold text-emerald-700">PREMIUM FEATURES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Everything You Need for
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
//                   Operational Excellence
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Sophisticated tools designed for the most demanding hospitality businesses
//             </p>
//           </div>

//           {/* Featured Feature Showcase */}
//           <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

//             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <div className={`mb-6 p-5 rounded-2xl ${FEATURES[activeFeature].bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${FEATURES[activeFeature].gradient} p-3 rounded-xl`}>
//                     {FEATURES[activeFeature].icon}
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4">
//                   {FEATURES[activeFeature].title}
//                 </h3>
//                 <p className="text-gray-300 mb-8 text-lg">
//                   {FEATURES[activeFeature].description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 {FEATURES.slice(0, 6).map((feature, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveFeature(index)}
//                     className={`p-4 rounded-xl transition-all duration-300 ${
//                       activeFeature === index
//                         ? 'bg-white/10 backdrop-blur-sm border border-white/20'
//                         : 'bg-white/5 hover:bg-white/10'
//                     }`}
//                   >
//                     <div className={`p-3 rounded-lg ${feature.bgGradient} mb-3`}>
//                       <div className={`bg-gradient-to-br ${feature.gradient} p-2 rounded-lg`}>
//                         {feature.icon}
//                       </div>
//                     </div>
//                     <p className="text-sm font-semibold text-white">{feature.title.split(' ')[0]}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* All Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {FEATURES.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className={`mb-6 p-5 rounded-2xl ${feature.bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mb-8">
//                   {feature.description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="flex items-center text-amber-600 font-semibold hover:text-amber-700"
//                 >
//                   Try this feature free
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Platform Highlights */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <ShieldCheck className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Enterprise Security</h4>
//                   <p className="text-gray-600">Bank-level protection</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">SOC 2 Type II certified with end-to-end encryption and regular security audits.</p>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//                   <Cloud className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Cloud Infrastructure</h4>
//                   <p className="text-gray-600">99.9% uptime guarantee</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Built on AWS with global CDN for lightning-fast performance worldwide.</p>
//             </div>

//             <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
//                   <Headphones className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">24/7 Premium Support</h4>
//                   <p className="text-gray-600">Dedicated account managers</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Round-the-clock support with dedicated account managers for enterprise clients.</p>
//             </div>
//           </div>

//           {/* Feature CTA */}
//           <div className="mt-16 text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Sparkle className="h-5 w-5" />
//               Start Your Free Trial with All Features
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 mb-6">
//               <Trophy className="h-4 w-4 text-violet-600" />
//               <span className="text-sm font-semibold text-violet-700">FLEXIBLE PLANS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Simple, Transparent
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
//                   Pricing
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Choose the perfect plan for your business. All plans include a 14-day free trial with full access.
//             </p>
//           </div>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="text-center">
//                 <Loader2 className="h-12 w-12 text-amber-500 animate-spin mx-auto mb-4" />
//                 <p className="text-gray-600">Loading subscription plans...</p>
//               </div>
//             </div>
//           ) : error ? (
//             <div className="text-center py-20">
//               <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
//                 <div className="p-3 bg-red-100 rounded-full w-fit mx-auto mb-4">
//                   <X className="h-6 w-6 text-red-600" />
//                 </div>
//                 <p className="text-red-600 font-semibold mb-2">Error loading plans</p>
//                 <p className="text-gray-600 mb-4">{error}</p>
//                 <button
//                   onClick={() => dispatch(fetchSubscriptionPlans())}
//                   className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
//                 >
//                   Retry
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {sortedUiPlans.map((plan) => (
//                   <div
//                     key={plan.id}
//                     className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
//                       plan.popular
//                         ? 'transform lg:scale-105 shadow-2xl border-2 border-amber-500'
//                         : 'shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-amber-200'
//                     }`}
//                   >
//                     <div className={`absolute inset-0 ${
//                       plan.plan_code === 'STARTER'
//                         ? 'bg-gradient-to-b from-blue-50 to-indigo-50'
//                         : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                         ? 'bg-gradient-to-b from-amber-50 to-orange-50'
//                         : 'bg-gradient-to-b from-gray-900 to-gray-800'
//                     }`}></div>

//                     <div className={`relative p-8 h-full ${
//                       plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                     }`}>
//                       {plan.popular && (
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                           <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2">
//                             <Crown className="h-4 w-4" />
//                             MOST POPULAR
//                           </div>
//                         </div>
//                       )}

//                       {plan.plan_code === 'ENTERPRISE' && (
//                         <div className="absolute top-6 right-6">
//                           <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
//                             <Gem className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       )}

//                       <div className="mb-10">
//                         <div className="flex items-center gap-3 mb-4">
//                           <h3 className={`text-3xl font-bold ${
//                             plan.plan_code === 'STARTER'
//                               ? 'text-blue-600'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'text-amber-600'
//                               : 'text-white'
//                           }`}>
//                             {plan.name}
//                           </h3>
//                           {plan.plan_code === 'ENTERPRISE' && (
//                             <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold">
//                               PREMIUM
//                             </span>
//                           )}
//                         </div>
//                         <p className={`mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-600'
//                         }`}>
//                           {plan.description}
//                         </p>

//                         <div className="mb-8">
//                           <div className="flex items-baseline">
//                             <span className={`text-5xl font-bold ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-700'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-700'
//                                 : 'text-white'
//                             }`}>
//                               ${plan.price}
//                             </span>
//                             <span className={`ml-2 ${
//                               plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                             }`}>
//                               /month
//                             </span>
//                           </div>
//                           <p className={`text-sm mt-2 ${
//                             plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                           }`}>
//                             Billed annually: ${Math.floor(plan.price * 12 * 0.8)}/year (Save 20%)
//                           </p>
//                         </div>

//                         <button
//                           onClick={() => handlePlanSelect(plan.id)}
//                           className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 ${
//                             plan.plan_code === 'STARTER'
//                               ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
//                               : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border border-gray-700'
//                           }`}
//                         >
//                           {isAuthenticated ? 'Go to Dashboard' : (
//                             <>
//                               <Sparkle className="h-5 w-5" />
//                               Start Free Trial
//                             </>
//                           )}
//                         </button>
//                       </div>

//                       <div className="mb-10">
//                         <h4 className={`font-bold text-lg mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                         }`}>
//                           Everything included:
//                         </h4>
//                         <ul className="space-y-3">
//                           {plan.features.slice(0, 8).map((feature, index) => (
//                             <li key={index} className="flex items-start gap-3">
//                               <div className={`p-1 rounded-lg mt-1 ${
//                                 plan.plan_code === 'STARTER'
//                                   ? 'bg-blue-100'
//                                   : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                   ? 'bg-amber-100'
//                                   : 'bg-gray-800'
//                               }`}>
//                                 <Check className={`h-4 w-4 ${
//                                   plan.plan_code === 'STARTER'
//                                     ? 'text-blue-600'
//                                     : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                     ? 'text-amber-600'
//                                     : 'text-emerald-400'
//                                 }`} />
//                               </div>
//                               <span className={
//                                 plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-700'
//                               }>
//                                 {feature}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="pt-8 border-t border-gray-200">
//                         <div className="grid grid-cols-3 gap-6 text-center">
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxStaff}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Staff
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxTables}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Tables
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxMenuItems}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Menu Items
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-20 text-center">
//                 <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
//                       <Shield className="h-8 w-8 text-emerald-600" />
//                     </div>
//                     <div className="text-left">
//                       <p className="font-bold text-gray-900 text-lg">All plans include</p>
//                       <p className="text-gray-600">14-day free trial • No credit card required • Cancel anytime</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
//                   >
//                     <Sparkle className="h-5 w-5" />
//                     Start Free Trial
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 mb-6">
//               <Award className="h-4 w-4 text-rose-600" />
//               <span className="text-sm font-semibold text-rose-700">CUSTOMER STORIES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Trusted by the
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
//                   World's Best Hotels
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Join luxury hotels and Michelin-star restaurants that trust HotelEase
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {TESTIMONIALS.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="flex items-center gap-2 mb-8">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${
//                         i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">"{testimonial.content}"</p>

//                 <div className="flex items-center gap-4">
//                   <div className={`${testimonial.avatarGradient} h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
//                     <p className="text-gray-500">{testimonial.role}</p>
//                     <p className="text-sm text-amber-600 font-semibold">{testimonial.hotel}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonials CTA */}
//           <div className="mt-20 text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 max-w-3xl mx-auto">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Ready to Join Them?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Start your journey with HotelEase today and transform your hotel operations.
//               </p>
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Your Free Trial
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integrations Section */}
//       <section id="integrations" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
//               <Zap className="h-4 w-4 text-blue-600" />
//               <span className="text-sm font-semibold text-blue-700">SEAMLESS INTEGRATIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Works Perfectly With
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
//                   Your Favorite Tools
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Connect HotelEase with your existing business tools and workflows
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
//             {INTEGRATIONS.map((integration, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
//               >
//                 <div className={`p-4 rounded-xl bg-gradient-to-br ${integration.color} mb-4`}>
//                   <div className="text-white">
//                     {integration.icon}
//                   </div>
//                 </div>
//                 <p className="font-semibold text-gray-900 text-sm text-center">{integration.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Integrations CTA */}
//           <div className="text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Zap className="h-5 w-5" />
//               Start Free Trial with All Integrations
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
//               <HelpCircle className="h-4 w-4 text-gray-600" />
//               <span className="text-sm font-semibold text-gray-700">FREQUENTLY ASKED QUESTIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Common Questions
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
//                     Answered
//                 </span>
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-6 mb-16">
//             {[
//               {
//                 question: "How long is the free trial?",
//                 answer: "All plans include a full-featured 14-day free trial. No credit card required. You can upgrade, downgrade, or cancel at any time."
//               },
//               {
//                 question: "Can I switch plans later?",
//                 answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
//               },
//               {
//                 question: "Is there a setup fee?",
//                 answer: "No, there are no setup fees or hidden charges. You only pay the monthly subscription fee for the plan you choose."
//               },
//               {
//                 question: "Do you offer discounts for annual billing?",
//                 answer: "Yes! Choose annual billing and save 20% on all plans. You'll get all the same features at a discounted rate."
//               },
//               {
//                 question: "What kind of support do you offer?",
//                 answer: "We offer email support for all plans, with priority phone support and dedicated account managers for higher-tier plans."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
//                   <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                     <HelpCircle className="h-5 w-5 text-amber-600" />
//                   </div>
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-600 pl-12">{faq.answer}</p>
//               </div>
//             ))}
//           </div>

//           {/* FAQ CTA */}
//           <div className="text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Still Have Questions?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Our team is ready to help you get started with HotelEase.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
//                 >
//                   <Sparkle className="h-5 w-5" />
//                   Start Free Trial Now
//                 </button>
//                 <button
//                   onClick={handleDemoLogin}
//                   className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//                 >
//                   <Play className="h-5 w-5" />
//                   Schedule a Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 animate-gradient-x"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: '30px 30px'
//           }}></div>
//         </div>

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
//               <Target className="h-5 w-5 text-amber-300" />
//               <span className="text-amber-100 font-semibold">READY TO TRANSFORM YOUR BUSINESS?</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-10">
//               Experience the Future of
//               <span className="block mt-6">
//                 <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h2>

//             <p className="text-xl sm:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
//               Join thousands of successful hotels and restaurants who have transformed their operations with HotelEase.
//               Start your journey to excellence today.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4"
//               >
//                 <Sparkle className="h-6 w-6" />
//                 {isAuthenticated ? 'Go to Dashboard' : 'Start Your Free Trial'}
//                 <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
//               </button>

//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-700 hover:border-amber-500 text-white hover:text-amber-300 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-4"
//               >
//                 <Play className="h-6 w-6" />
//                 Schedule a Demo
//                 <span className="text-sm text-gray-400 group-hover:text-amber-400">(30 min)</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//                 <span>No setup fees</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                 <span>14-day free trial</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                 <span>No credit card required</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
//                 <span>Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
//             <div>
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <Hotel className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <span className="text-2xl font-bold">HotelEase</span>
//                   <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//                 </div>
//               </div>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 The premier hotel management platform for luxury establishments worldwide.
//                 Transforming hospitality operations since 2018.
//               </p>
//               <div className="flex items-center gap-4">
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Product</h4>
//               <ul className="space-y-4">
//                 <li><button onClick={handleViewFeatures} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Features</button></li>
//                 <li><button onClick={handleViewPricing} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Pricing</button></li>
//                 <li><a href="#integrations" className="text-gray-400 hover:text-amber-300 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">API Documentation</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Company</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Blog</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Contact Sales</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Resources</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Help Center</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Community</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Partners</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="text-gray-400">
//               &copy; {new Date().getFullYear()} HotelEase. All rights reserved.
//             </p>
//             <div className="flex items-center gap-8">
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Floating Action Buttons */}
//       {isAuthenticated ? (
//         <>
//           <button
//             onClick={handleLogout}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Logout (Demo)"
//           >
//             <div className="flex items-center gap-2">
//               <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Logout</span>
//             </div>
//           </button>

//           <button
//             onClick={handleGoToDashboard}
//             className="fixed bottom-8 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Go to Dashboard"
//           >
//             <div className="flex items-center gap-2">
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Dashboard</span>
//             </div>
//           </button>
//         </>
//       ) : (
//         <button
//           onClick={() => handleGetStarted()}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group flex items-center gap-2"
//           title="Start Free Trial"
//         >
//           <Sparkle className="h-5 w-5" />
//           <span className="text-sm font-semibold">Start Free Trial</span>
//         </button>
//       )}

//       {/* Live Chat Widget */}
//       <button className="fixed bottom-8 right-24 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110">
//         <MessageCircle className="h-5 w-5" />
//       </button>
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   Hotel,
//   Menu,
//   X,
//   Check,
//   Star,
//   ArrowRight,
//   Users,
//   BarChart3,
//   CreditCard,
//   UtensilsCrossed,
//   ChefHat,
//   Table,
//   Receipt,
//   Smartphone,
//   Headphones,
//   Shield,
//   Zap,
//   TrendingUp,
//   Cloud,
//   QrCode,
//   TabletSmartphone,
//   Calendar,
//   Clock,
//   MessageSquare,
//   Award,
//   Trophy,
//   Sparkles,
//   BadgeCheck,
//   Target,
//   ArrowUpRight,
//   ChevronRight,
//   LogOut,
//   Play,
//   Sparkle,
//   Gem,
//   Crown,
//   Loader2,
//   Clock4,
//   Building,
//   Coffee,
//   Utensils,
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   CreditCard as CreditCardIcon,
//   Bell,
//   Settings,
//   HelpCircle,
//   FileText,
//   Lock,
//   CheckCircle,
//   Award as AwardIcon,
//   Users as UsersIcon,
//   CloudRain,
//   Server,
//   Database,
//   Cpu,
//   Wifi,
//   ShieldCheck,
//   Zap as ZapIcon,
//   BarChart,
//   PieChart,
//   LineChart,
//   DollarSign,
//   ShoppingBag,
//   Package,
//   Truck,
//   Home,
//   Gift,
//   Tag,
//   Percent,
//   ShoppingCart,
//   Heart,
//   BookOpen,
//   LifeBuoy,
//   MessageCircle,
//   Video,
//   Download,
//   Upload,
//   Folder,
//   File,
//   Image,
//   Music,
//   Film,
//   Camera,
//   Mic,
//   Headset,
//   Keyboard,
//   Mouse,
//   Monitor,
//   Printer,
//   HardDrive,
//   Battery,
//   BatteryCharging,
//   Power,
//   WifiOff,
//   Bluetooth,
//   Radio,
//   Tv,
//   Smartphone as SmartphoneIcon,
//   Watch,
//   Laptop,
//   Tablet,
//   Speaker
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { useSelector, useDispatch } from 'react-redux'
// import type { RootState, AppDispatch } from "../store/index"
// import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'
// import Cookies from 'js-cookie'
// // import { cookies } from 'next/headers'

// // ===================== TYPES =====================
// interface User {
//   id: string;
//   email: string;
//   name: string;
//   isSubscribed: boolean;
//   role?: 'hotel_admin' | 'staff';
//   hotelName?: string;
//   subscriptionPlan?: string;
// }

// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface UISubscriptionPlan {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   billingCycle: 'monthly' | 'yearly';
//   features: string[];
//   popular?: boolean;
//   maxStaff: number;
//   maxTables: number;
//   maxMenuItems: number;
//   analytics: boolean;
//   support: 'basic' | 'priority' | 'dedicated';
//   plan_code: string;
// }

// interface Feature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   role: string;
//   hotel: string;
//   content: string;
//   rating: number;
//   avatarGradient: string;
// }

// interface Stat {
//   label: string;
//   value: string;
//   change: string;
//   color: string;
// }

// // ===================== HELPER FUNCTIONS =====================
// const transformApiPlanToUiPlan = (apiPlan: SubscriptionPlan): UISubscriptionPlan => {
//   const featuresList: string[] = []

//   const featureMap: Record<string, string> = {
//     multi_device: 'Multi-device access',
//     basic_reports: 'Basic analytics & reports',
//     advanced_reports: 'Advanced analytics dashboard',
//     full_reports: 'Comprehensive analytics suite',
//     email_support: 'Email support (24/7)',
//     phone_support: 'Phone support',
//     sms_support: 'SMS notifications & support',
//     sms_notifications: 'SMS notifications',
//     custom_branding: 'Custom branding & white-label',
//     online_ordering: 'Online ordering system',
//     table_reservations: 'Table reservation management',
//     kitchen_display: 'Kitchen display system (KDS)',
//     loyalty_program: 'Loyalty program & rewards',
//     multi_branch: 'Multi-branch management',
//     priority_support: 'Priority support',
//     dedicated_manager: 'Dedicated account manager',
//     custom_integrations: 'Custom API integrations'
//   }

//   Object.entries(apiPlan.features).forEach(([key, value]) => {
//     if (value && featureMap[key]) {
//       featuresList.push(featureMap[key])
//     }
//   })

//   featuresList.push(`Up to ${apiPlan.max_staff} staff members`)
//   featuresList.push(`${apiPlan.max_tables} tables maximum`)
//   featuresList.push(`${apiPlan.max_menu_items} menu items`)
//   featuresList.push('Real-time order management')
//   featuresList.push('Mobile POS system')
//   featuresList.push('QR code ordering')

//   if (parseFloat(apiPlan.price_per_month) >= 79.99) {
//     featuresList.push('Inventory management')
//     featuresList.push('Staff scheduling')
//   }
//   if (parseFloat(apiPlan.price_per_month) >= 119.99) {
//     featuresList.push('Customer relationship management')
//     featuresList.push('Marketing automation')
//   }

//   let supportType: 'basic' | 'priority' | 'dedicated' = 'basic'
//   if (apiPlan.features.priority_support) {
//     supportType = 'priority'
//   }
//   if (apiPlan.features.dedicated_manager) {
//     supportType = 'dedicated'
//   }

//   return {
//     id: apiPlan.id,
//     name: apiPlan.plan_name,
//     description: apiPlan.description,
//     price: parseFloat(apiPlan.price_per_month),
//     billingCycle: 'monthly',
//     features: featuresList,
//     popular: apiPlan.plan_code === 'BUSINESS' || apiPlan.plan_code === 'ENTERPRISE' || apiPlan.plan_code === 'PREMIUM',
//     maxStaff: apiPlan.max_staff,
//     maxTables: apiPlan.max_tables,
//     maxMenuItems: apiPlan.max_menu_items,
//     analytics: apiPlan.features.advanced_reports || apiPlan.features.full_reports || apiPlan.features.basic_reports,
//     support: supportType,
//     plan_code: apiPlan.plan_code,
//   }
// }

// // ===================== CONSTANTS =====================
// const FEATURES: Feature[] = [
//   {
//     title: 'Smart Order Management',
//     description: 'Streamline orders with real-time updates, split bills, and special requests handling. Reduce order errors by 95% with our intelligent system.',
//     icon: <UtensilsCrossed className="h-8 w-8" />,
//     gradient: 'from-amber-500 to-orange-500',
//     bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
//   },
//   {
//     title: 'Kitchen Display System',
//     description: 'Digital order tickets with prep timers, course sequencing, and chef notes. Optimize kitchen workflow and reduce preparation time by 40%.',
//     icon: <ChefHat className="h-8 w-8" />,
//     gradient: 'from-rose-500 to-pink-600',
//     bgGradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
//   },
//   {
//     title: 'Table Management',
//     description: 'Interactive floor plan with live status, reservations, and waitlist management. Increase table turnover by 25% with smart seating algorithms.',
//     icon: <Table className="h-8 w-8" />,
//     gradient: 'from-emerald-500 to-teal-600',
//     bgGradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
//   },
//   {
//     title: 'Staff Management',
//     description: 'Role-based permissions, shift scheduling, and performance tracking. Reduce scheduling conflicts by 60% with automated shift management.',
//     icon: <Users className="h-8 w-8" />,
//     gradient: 'from-blue-500 to-cyan-600',
//     bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
//   },
//   {
//     title: 'Advanced Analytics',
//     description: 'Real-time insights on sales, inventory, customer behavior, and profitability. Make data-driven decisions with predictive analytics.',
//     icon: <TrendingUp className="h-8 w-8" />,
//     gradient: 'from-violet-500 to-purple-600',
//     bgGradient: 'bg-gradient-to-br from-violet-50 to-purple-50',
//   },
//   {
//     title: 'Mobile POS System',
//     description: 'Take orders and process payments anywhere with our intuitive mobile app. Increase staff efficiency by 35% with mobile order taking.',
//     icon: <TabletSmartphone className="h-8 w-8" />,
//     gradient: 'from-indigo-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50',
//   },
//   {
//     title: 'Inventory Management',
//     description: 'Automated stock tracking, purchase orders, and waste reduction. Reduce inventory costs by 20% with smart forecasting.',
//     icon: <Package className="h-8 w-8" />,
//     gradient: 'from-green-500 to-emerald-600',
//     bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
//   },
//   {
//     title: 'Customer CRM',
//     description: 'Track guest preferences, dining history, and special requests. Increase repeat business by 45% with personalized service.',
//     icon: <UsersIcon className="h-8 w-8" />,
//     gradient: 'from-pink-500 to-rose-600',
//     bgGradient: 'bg-gradient-to-br from-pink-50 to-rose-50',
//   },
//   {
//     title: 'Multi-Branch Control',
//     description: 'Centralized management for multiple locations with consolidated reporting. Streamline operations across all your properties.',
//     icon: <Building className="h-8 w-8" />,
//     gradient: 'from-cyan-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
//   },
// ]

// const TESTIMONIALS: Testimonial[] = [
//   {
//     id: '1',
//     name: 'Isabella Rossi',
//     role: 'General Manager',
//     hotel: 'Grand Palazzo Hotel',
//     content: 'HotelEase transformed our 5-star hotel operations. Guest satisfaction increased by 40% and operational costs decreased by 25%. The ROI was achieved in just 3 months.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-amber-500 to-orange-500',
//   },
//   {
//     id: '2',
//     name: 'Kenji Tanaka',
//     role: 'Restaurant Owner',
//     hotel: 'Sakura Fine Dining',
//     content: 'The kitchen display system reduced order errors by 95%. Our chefs are more efficient and our customers happier than ever. Service speed improved by 30%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
//   },
//   {
//     id: '3',
//     name: 'Sophia Chen',
//     role: 'Operations Director',
//     hotel: 'The Royal Resort',
//     content: 'We manage 3 restaurants and 2 bars seamlessly with HotelEase. The multi-branch feature is a game-changer for our business. Reporting time reduced by 70%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
//   },
//   {
//     id: '4',
//     name: 'Marcus Johnson',
//     role: 'Hotel Director',
//     hotel: 'Oceanview Luxury Resort',
//     content: 'The analytics dashboard provided insights we never had before. We optimized menu pricing and increased profitability by 18% in the first quarter.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
//   },
//   {
//     id: '5',
//     name: 'Elena Vasquez',
//     role: 'F&B Manager',
//     hotel: 'Metropolitan Suites',
//     content: 'Staff scheduling became effortless. We reduced overtime costs by 35% while maintaining excellent service quality. The mobile app is a game-changer.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
//   },
//   {
//     id: '6',
//     name: 'Ahmed Al-Farsi',
//     role: 'CEO',
//     hotel: 'Desert Oasis Hotels',
//     content: 'From implementation to daily use, the support has been exceptional. Our 12 properties now operate seamlessly with centralized control and reporting.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
//   },
// ]

// const STATS: Stat[] = [
//   { label: 'Hotels & Restaurants', value: '2,500+', change: '+40% this year', color: 'text-amber-600' },
//   { label: 'Orders Processed', value: '10M+', change: 'Monthly volume', color: 'text-emerald-600' },
//   { label: 'Customer Rating', value: '4.9/5', change: 'Based on 1,200 reviews', color: 'text-rose-600' },
//   { label: 'Staff Managed', value: '50K+', change: 'Worldwide users', color: 'text-blue-600' },
//   { label: 'Countries', value: '45+', change: 'Global presence', color: 'text-violet-600' },
//   { label: 'Uptime', value: '99.9%', change: 'Service reliability', color: 'text-cyan-600' },
// ]

// const INTEGRATIONS = [
//   { name: 'QuickBooks', icon: <DollarSign className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Xero', icon: <FileText className="h-6 w-6" />, color: 'from-blue-500 to-cyan-600' },
//   { name: 'Stripe', icon: <CreditCardIcon className="h-6 w-6" />, color: 'from-violet-500 to-purple-600' },
//   { name: 'PayPal', icon: <ShoppingBag className="h-6 w-6" />, color: 'from-blue-500 to-indigo-600' },
//   { name: 'Square', icon: <CreditCard className="h-6 w-6" />, color: 'from-emerald-500 to-teal-600' },
//   { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Mailchimp', icon: <Mail className="h-6 w-6" />, color: 'from-amber-500 to-orange-600' },
//   { name: 'Slack', icon: <MessageSquare className="h-6 w-6" />, color: 'from-pink-500 to-rose-600' },
// ]

// // ===================== MAIN COMPONENT =====================
// export default function  HotelEaseLandingPage() {
//   const router = useRouter()
//   const dispatch = useDispatch<AppDispatch>()
//   const { plans, loading, error } = useSelector((state: RootState) => state.subscription)

//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [user, setUser] = useState<User | null>(null)
//   const [activeFeature, setActiveFeature] = useState(0)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [hotelSlug, setHotelSlug] = useState<string | null>(null)

//   const isAuthenticated = !!user

//   useEffect(() => {
//     // Check for hotel_token cookie on component mount
//     const checkHotelToken = async () => {
//       // const hotelToken = Cookies.get('hotel_token')
//       // console.log('Checking hotel token:', hotelToken)
//       // console.log('these are the cookies:- ', Cookies)

//         const hotelToken = Cookies.get('hotel_token') // string | undefined

//   //     const cookieStore =await cookies()
//   // const hotelToken = cookieStore.get('hotel_token')?.value
//   console.log('this is the hotel token from cookie store', hotelToken)

//       if (hotelToken) {
//         try {
//           // Parse the JWT token to get hotel slug
//           const tokenPayload = JSON.parse(atob(hotelToken.split('.')[1]))
//           const slug = tokenPayload.slug || tokenPayload.hotel_slug

//           if (slug) {
//             setHotelSlug(slug)
//             // If hotel token exists, redirect to hotel dashboard
//             router.push(`/hotel/${slug}/dashboard`)
//           }
//         } catch (error) {
//           console.error('Error parsing hotel token:', error)
//           // If token is invalid, remove it
//           Cookies.remove('hotel_token')
//         }
//       }
//     }

//     checkHotelToken()

//     // Fetch subscription plans on component mount
//     dispatch(fetchSubscriptionPlans())
//   }, [dispatch, router])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % FEATURES.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Navigation handlers
//   const handleGetStarted = (planId?: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else if (planId) {
//       router.push(`/register?plan=${planId}`)
//     } else {
//       router.push('/register')
//     }
//   }

//   const handlePlanSelect = (planId: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else {
//       router.push(`/register?plan=${planId}`)
//     }
//   }

//   const handleGoToDashboard = () => {
//     // Check if hotel token exists first
//     const hotelToken = Cookies.get('hotel_token')

//     if (hotelToken) {
//       try {
//         const tokenPayload = JSON.parse(atob(hotelToken.split('.')[1]))
//         const slug = tokenPayload.slug || tokenPayload.hotel_slug
//         if (slug) {
//           router.push(`/hotel/${slug}/dashboard`)
//           return
//         }
//       } catch (error) {
//         console.error('Error parsing hotel token:', error)
//       }
//     }

//     // Fallback to user's hotel name or generic dashboard
//     if (user?.hotelName) {
//       router.push(`/hotel/${user.hotelName.toLowerCase().replace(/\s+/g, '-')}/dashboard`)
//     } else {
//       router.push('/dashboard')
//     }
//   }

//   const handleLogout = () => {
//     // Remove hotel token cookie
//     Cookies.remove('hotel_token')
//     setUser(null)
//     toast.success('Logged out successfully!', {
//       icon: '👋',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleDemoLogin = () => {
//     setUser({
//       id: 'demo-123',
//       email: 'demo@hotelease.com',
//       name: 'Demo User',
//       isSubscribed: true,
//       role: 'hotel_admin',
//       hotelName: 'Demo Hotel',
//       subscriptionPlan: 'PROFESSIONAL'
//     })
//     toast.success('Demo login successful!', {
//       icon: '🎉',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleViewFeatures = () => {
//     document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewPricing = () => {
//     document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewTestimonials = () => {
//     document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   // Transform API plans to UI plans
//   const uiPlans = plans.map((plan: any) => transformApiPlanToUiPlan(plan))
//   const sortedUiPlans = [...uiPlans].sort((a, b) => {
//     // Sort by price, but keep popular plans highlighted
//     if (a.popular && !b.popular) return -1
//     if (!a.popular && b.popular) return 1
//     return a.price - b.price
//   })

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Toaster */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//             padding: '16px',
//           },
//           success: {
//             iconTheme: {
//               primary: '#f59e0b',
//               secondary: '#1f2937',
//             },
//           },
//         }}
//       />

//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg py-3'
//           : 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-5'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
//                 <Hotel className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-10">
//               <button
//                 onClick={handleViewFeatures}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Features
//               </button>
//               <button
//                 onClick={handleViewPricing}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={handleViewTestimonials}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Testimonials
//               </button>
//               <a href="#integrations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Integrations</a>
//               <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">FAQ</a>
//             </div>

//             <div className="hidden lg:flex items-center gap-4">
//               {isAuthenticated ? (
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-700 font-medium text-sm">Welcome, {user?.name}</span>
//                   <button
//                     onClick={handleGoToDashboard}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
//                   >
//                     Go to Dashboard
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleDemoLogin}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Try Demo
//                   </button>
//                   <button
//                     onClick={() => router.push('/slug')}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Log in
//                   </button>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 text-sm"
//                   >
//                     <Sparkle className="h-3.5 w-3.5" />
//                     Start Free Trial
//                   </button>
//                 </>
//               )}
//             </div>

//             <button
//               className="lg:hidden p-2 text-gray-700"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl mt-4">
//               <div className="flex flex-col space-y-3">
//                 <button
//                   onClick={() => {
//                     handleViewFeatures()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Features
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewPricing()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Pricing
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewTestimonials()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Testimonials
//                 </button>
//                 <a
//                   href="#integrations"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   Integrations
//                 </a>
//                 <a
//                   href="#faq"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   FAQ
//                 </a>
//                 <div className="pt-4 border-t border-gray-100">
//                   {isAuthenticated ? (
//                     <>
//                       <div className="mb-3 px-4">
//                         <p className="text-sm text-gray-500">Logged in as</p>
//                         <p className="font-semibold text-gray-900 text-sm">{user?.name}</p>
//                       </div>
//                       <button
//                         onClick={() => {
//                           handleGoToDashboard()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm"
//                       >
//                         Go to Dashboard
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => {
//                           handleDemoLogin()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 hover:bg-amber-50 rounded-xl text-sm mb-2"
//                       >
//                         Try Demo
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleGetStarted()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm"
//                       >
//                         <Sparkle className="h-3.5 w-3.5" />
//                         Start Free Trial
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
//         {/* Background gradients */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
//         <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

//         {/* Animated blobs */}
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8 animate-float">
//               <div className="flex items-center gap-2">
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//               <span className="text-sm font-semibold text-amber-800">Trusted by 2,500+ luxury hotels & restaurants worldwide</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//               Revolutionize Your
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h1>

//             <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               The all-in-one SaaS platform designed exclusively for luxury hotels and fine dining establishments.
//               Streamline operations, delight guests, and maximize revenue with AI-powered hospitality solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Free 14-Day Trial
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//               </button>
//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//               >
//                 <Play className="h-5 w-5" />
//                 Watch Live Demo
//                 <span className="text-sm text-gray-500 group-hover:text-amber-500">(2 min)</span>
//               </button>
//             </div>

//             {/* Quick Navigation Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//               <button
//                 onClick={handleViewFeatures}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
//                     <Sparkles className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Explore Features</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Discover how HotelEase can transform your operations</p>
//                 <div className="flex items-center text-amber-600 font-semibold text-sm">
//                   View all features
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewPricing}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl">
//                     <CreditCardIcon className="h-6 w-6 text-violet-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">View Pricing</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Choose the perfect plan for your business needs</p>
//                 <div className="flex items-center text-violet-600 font-semibold text-sm">
//                   See all plans
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewTestimonials}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl">
//                     <Award className="h-6 w-6 text-rose-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Read Stories</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">See how luxury hotels succeed with HotelEase</p>
//                 <div className="flex items-center text-rose-600 font-semibold text-sm">
//                   View testimonials
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
//               {STATS.map((stat, index) => (
//                 <div key={index} className="text-center p-4">
//                   <p className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
//                   <p className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
//                   <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-6">
//               <BadgeCheck className="h-4 w-4 text-emerald-600" />
//               <span className="text-sm font-semibold text-emerald-700">PREMIUM FEATURES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Everything You Need for
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
//                   Operational Excellence
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Sophisticated tools designed for the most demanding hospitality businesses
//             </p>
//           </div>

//           {/* Featured Feature Showcase */}
//           <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

//             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <div className={`mb-6 p-5 rounded-2xl ${FEATURES[activeFeature].bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${FEATURES[activeFeature].gradient} p-3 rounded-xl`}>
//                     {FEATURES[activeFeature].icon}
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4">
//                   {FEATURES[activeFeature].title}
//                 </h3>
//                 <p className="text-gray-300 mb-8 text-lg">
//                   {FEATURES[activeFeature].description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 {FEATURES.slice(0, 6).map((feature, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveFeature(index)}
//                     className={`p-4 rounded-xl transition-all duration-300 ${
//                       activeFeature === index
//                         ? 'bg-white/10 backdrop-blur-sm border border-white/20'
//                         : 'bg-white/5 hover:bg-white/10'
//                     }`}
//                   >
//                     <div className={`p-3 rounded-lg ${feature.bgGradient} mb-3`}>
//                       <div className={`bg-gradient-to-br ${feature.gradient} p-2 rounded-lg`}>
//                         {feature.icon}
//                       </div>
//                     </div>
//                     <p className="text-sm font-semibold text-white">{feature.title.split(' ')[0]}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* All Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {FEATURES.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className={`mb-6 p-5 rounded-2xl ${feature.bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mb-8">
//                   {feature.description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="flex items-center text-amber-600 font-semibold hover:text-amber-700"
//                 >
//                   Try this feature free
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Platform Highlights */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <ShieldCheck className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Enterprise Security</h4>
//                   <p className="text-gray-600">Bank-level protection</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">SOC 2 Type II certified with end-to-end encryption and regular security audits.</p>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//                   <Cloud className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Cloud Infrastructure</h4>
//                   <p className="text-gray-600">99.9% uptime guarantee</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Built on AWS with global CDN for lightning-fast performance worldwide.</p>
//             </div>

//             <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
//                   <Headphones className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">24/7 Premium Support</h4>
//                   <p className="text-gray-600">Dedicated account managers</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Round-the-clock support with dedicated account managers for enterprise clients.</p>
//             </div>
//           </div>

//           {/* Feature CTA */}
//           <div className="mt-16 text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Sparkle className="h-5 w-5" />
//               Start Your Free Trial with All Features
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section id="pricing" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 mb-6">
//               <Trophy className="h-4 w-4 text-violet-600" />
//               <span className="text-sm font-semibold text-violet-700">FLEXIBLE PLANS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Simple, Transparent
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
//                   Pricing
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Choose the perfect plan for your business. All plans include a 14-day free trial with full access.
//             </p>
//           </div>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="text-center">
//                 <Loader2 className="h-12 w-12 text-amber-500 animate-spin mx-auto mb-4" />
//                 <p className="text-gray-600">Loading subscription plans...</p>
//               </div>
//             </div>
//           ) : error ? (
//             <div className="text-center py-20">
//               <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
//                 <div className="p-3 bg-red-100 rounded-full w-fit mx-auto mb-4">
//                   <X className="h-6 w-6 text-red-600" />
//                 </div>
//                 <p className="text-red-600 font-semibold mb-2">Error loading plans</p>
//                 <p className="text-gray-600 mb-4">{error}</p>
//                 <button
//                   onClick={() => dispatch(fetchSubscriptionPlans())}
//                   className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
//                 >
//                   Retry
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {sortedUiPlans.map((plan) => (
//                   <div
//                     key={plan.id}
//                     className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
//                       plan.popular
//                         ? 'transform lg:scale-105 shadow-2xl border-2 border-amber-500'
//                         : 'shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-amber-200'
//                     }`}
//                   >
//                     <div className={`absolute inset-0 ${
//                       plan.plan_code === 'STARTER'
//                         ? 'bg-gradient-to-b from-blue-50 to-indigo-50'
//                         : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                         ? 'bg-gradient-to-b from-amber-50 to-orange-50'
//                         : 'bg-gradient-to-b from-gray-900 to-gray-800'
//                     }`}></div>

//                     <div className={`relative p-8 h-full ${
//                       plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                     }`}>
//                       {plan.popular && (
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                           <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2">
//                             <Crown className="h-4 w-4" />
//                             MOST POPULAR
//                           </div>
//                         </div>
//                       )}

//                       {plan.plan_code === 'ENTERPRISE' && (
//                         <div className="absolute top-6 right-6">
//                           <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
//                             <Gem className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       )}

//                       <div className="mb-10">
//                         <div className="flex items-center gap-3 mb-4">
//                           <h3 className={`text-3xl font-bold ${
//                             plan.plan_code === 'STARTER'
//                               ? 'text-blue-600'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'text-amber-600'
//                               : 'text-white'
//                           }`}>
//                             {plan.name}
//                           </h3>
//                           {plan.plan_code === 'ENTERPRISE' && (
//                             <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold">
//                               PREMIUM
//                             </span>
//                           )}
//                         </div>
//                         <p className={`mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-600'
//                         }`}>
//                           {plan.description}
//                         </p>

//                         <div className="mb-8">
//                           <div className="flex items-baseline">
//                             <span className={`text-5xl font-bold ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-700'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-700'
//                                 : 'text-white'
//                             }`}>
//                               ${plan.price}
//                             </span>
//                             <span className={`ml-2 ${
//                               plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                             }`}>
//                               /month
//                             </span>
//                           </div>
//                           <p className={`text-sm mt-2 ${
//                             plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                           }`}>
//                             Billed annually: ${Math.floor(plan.price * 12 * 0.8)}/year (Save 20%)
//                           </p>
//                         </div>

//                         <button
//                           onClick={() => handlePlanSelect(plan.id)}
//                           className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 ${
//                             plan.plan_code === 'STARTER'
//                               ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
//                               : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border border-gray-700'
//                           }`}
//                         >
//                           {isAuthenticated ? 'Go to Dashboard' : (
//                             <>
//                               <Sparkle className="h-5 w-5" />
//                               Start Free Trial
//                             </>
//                           )}
//                         </button>
//                       </div>

//                       <div className="mb-10">
//                         <h4 className={`font-bold text-lg mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                         }`}>
//                           Everything included:
//                         </h4>
//                         <ul className="space-y-3">
//                           {plan.features.slice(0, 8).map((feature, index) => (
//                             <li key={index} className="flex items-start gap-3">
//                               <div className={`p-1 rounded-lg mt-1 ${
//                                 plan.plan_code === 'STARTER'
//                                   ? 'bg-blue-100'
//                                   : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                   ? 'bg-amber-100'
//                                   : 'bg-gray-800'
//                               }`}>
//                                 <Check className={`h-4 w-4 ${
//                                   plan.plan_code === 'STARTER'
//                                     ? 'text-blue-600'
//                                     : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                     ? 'text-amber-600'
//                                     : 'text-emerald-400'
//                                 }`} />
//                               </div>
//                               <span className={
//                                 plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-700'
//                               }>
//                                 {feature}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="pt-8 border-t border-gray-200">
//                         <div className="grid grid-cols-3 gap-6 text-center">
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxStaff}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Staff
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxTables}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Tables
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxMenuItems}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Menu Items
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-20 text-center">
//                 <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
//                       <Shield className="h-8 w-8 text-emerald-600" />
//                     </div>
//                     <div className="text-left">
//                       <p className="font-bold text-gray-900 text-lg">All plans include</p>
//                       <p className="text-gray-600">14-day free trial • No credit card required • Cancel anytime</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
//                   >
//                     <Sparkle className="h-5 w-5" />
//                     Start Free Trial
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 mb-6">
//               <Award className="h-4 w-4 text-rose-600" />
//               <span className="text-sm font-semibold text-rose-700">CUSTOMER STORIES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Trusted by the
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
//                   World's Best Hotels
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Join luxury hotels and Michelin-star restaurants that trust HotelEase
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {TESTIMONIALS.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="flex items-center gap-2 mb-8">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${
//                         i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">"{testimonial.content}"</p>

//                 <div className="flex items-center gap-4">
//                   <div className={`${testimonial.avatarGradient} h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
//                     <p className="text-gray-500">{testimonial.role}</p>
//                     <p className="text-sm text-amber-600 font-semibold">{testimonial.hotel}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonials CTA */}
//           <div className="mt-20 text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 max-w-3xl mx-auto">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Ready to Join Them?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Start your journey with HotelEase today and transform your hotel operations.
//               </p>
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Your Free Trial
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integrations Section */}
//       <section id="integrations" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
//               <Zap className="h-4 w-4 text-blue-600" />
//               <span className="text-sm font-semibold text-blue-700">SEAMLESS INTEGRATIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Works Perfectly With
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
//                   Your Favorite Tools
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Connect HotelEase with your existing business tools and workflows
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
//             {INTEGRATIONS.map((integration, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
//               >
//                 <div className={`p-4 rounded-xl bg-gradient-to-br ${integration.color} mb-4`}>
//                   <div className="text-white">
//                     {integration.icon}
//                   </div>
//                 </div>
//                 <p className="font-semibold text-gray-900 text-sm text-center">{integration.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Integrations CTA */}
//           <div className="text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Zap className="h-5 w-5" />
//               Start Free Trial with All Integrations
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
//               <HelpCircle className="h-4 w-4 text-gray-600" />
//               <span className="text-sm font-semibold text-gray-700">FREQUENTLY ASKED QUESTIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Common Questions
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
//                     Answered
//                 </span>
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-6 mb-16">
//             {[
//               {
//                 question: "How long is the free trial?",
//                 answer: "All plans include a full-featured 14-day free trial. No credit card required. You can upgrade, downgrade, or cancel at any time."
//               },
//               {
//                 question: "Can I switch plans later?",
//                 answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
//               },
//               {
//                 question: "Is there a setup fee?",
//                 answer: "No, there are no setup fees or hidden charges. You only pay the monthly subscription fee for the plan you choose."
//               },
//               {
//                 question: "Do you offer discounts for annual billing?",
//                 answer: "Yes! Choose annual billing and save 20% on all plans. You'll get all the same features at a discounted rate."
//               },
//               {
//                 question: "What kind of support do you offer?",
//                 answer: "We offer email support for all plans, with priority phone support and dedicated account managers for higher-tier plans."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
//                   <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                     <HelpCircle className="h-5 w-5 text-amber-600" />
//                   </div>
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-600 pl-12">{faq.answer}</p>
//               </div>
//             ))}
//           </div>

//           {/* FAQ CTA */}
//           <div className="text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Still Have Questions?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Our team is ready to help you get started with HotelEase.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
//                 >
//                   <Sparkle className="h-5 w-5" />
//                   Start Free Trial Now
//                 </button>
//                 <button
//                   onClick={handleDemoLogin}
//                   className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//                 >
//                   <Play className="h-5 w-5" />
//                   Schedule a Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 animate-gradient-x"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: '30px 30px'
//           }}></div>
//         </div>

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
//               <Target className="h-5 w-5 text-amber-300" />
//               <span className="text-amber-100 font-semibold">READY TO TRANSFORM YOUR BUSINESS?</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-10">
//               Experience the Future of
//               <span className="block mt-6">
//                 <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h2>

//             <p className="text-xl sm:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
//               Join thousands of successful hotels and restaurants who have transformed their operations with HotelEase.
//               Start your journey to excellence today.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4"
//               >
//                 <Sparkle className="h-6 w-6" />
//                 {isAuthenticated ? 'Go to Dashboard' : 'Start Your Free Trial'}
//                 <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
//               </button>

//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-700 hover:border-amber-500 text-white hover:text-amber-300 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-4"
//               >
//                 <Play className="h-6 w-6" />
//                 Schedule a Demo
//                 <span className="text-sm text-gray-400 group-hover:text-amber-400">(30 min)</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//                 <span>No setup fees</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                 <span>14-day free trial</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                 <span>No credit card required</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
//                 <span>Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
//             <div>
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <Hotel className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <span className="text-2xl font-bold">HotelEase</span>
//                   <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//                 </div>
//               </div>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 The premier hotel management platform for luxury establishments worldwide.
//                 Transforming hospitality operations since 2018.
//               </p>
//               <div className="flex items-center gap-4">
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Product</h4>
//               <ul className="space-y-4">
//                 <li><button onClick={handleViewFeatures} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Features</button></li>
//                 <li><button onClick={handleViewPricing} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Pricing</button></li>
//                 <li><a href="#integrations" className="text-gray-400 hover:text-amber-300 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">API Documentation</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Company</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Blog</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Contact Sales</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Resources</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Help Center</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Community</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Partners</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="text-gray-400">
//               &copy; {new Date().getFullYear()} HotelEase. All rights reserved.
//             </p>
//             <div className="flex items-center gap-8">
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Floating Action Buttons */}
//       {isAuthenticated ? (
//         <>
//           <button
//             onClick={handleLogout}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Logout (Demo)"
//           >
//             <div className="flex items-center gap-2">
//               <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Logout</span>
//             </div>
//           </button>

//           <button
//             onClick={handleGoToDashboard}
//             className="fixed bottom-8 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Go to Dashboard"
//           >
//             <div className="flex items-center gap-2">
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Dashboard</span>
//             </div>
//           </button>
//         </>
//       ) : (
//         <button
//           onClick={() => handleGetStarted()}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group flex items-center gap-2"
//           title="Start Free Trial"
//         >
//           <Sparkle className="h-5 w-5" />
//           <span className="text-sm font-semibold">Start Free Trial</span>
//         </button>
//       )}

//       {/* Live Chat Widget */}
//       <button className="fixed bottom-8 right-24 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110">
//         <MessageCircle className="h-5 w-5" />
//       </button>
//     </div>
//   )
// }

// // app/page.tsx - Updated landing page
// 'use client'

// import { useState, useEffect } from 'react'
// import {
//   Hotel,
//   Menu,
//   X,
//   Check,
//   Star,
//   ArrowRight,
//   Users,
//   BarChart3,
//   CreditCard,
//   UtensilsCrossed,
//   ChefHat,
//   Table,
//   Receipt,
//   Smartphone,
//   Headphones,
//   Shield,
//   Zap,
//   TrendingUp,
//   Cloud,
//   QrCode,
//   TabletSmartphone,
//   Calendar,
//   Clock,
//   MessageSquare,
//   Award,
//   Trophy,
//   Sparkles,
//   BadgeCheck,
//   Target,
//   ArrowUpRight,
//   ChevronRight,
//   LogOut,
//   Play,
//   Sparkle,
//   Gem,
//   Crown,
//   Loader2,
//   Clock4,
//   Building,
//   Coffee,
//   Utensils,
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   CreditCard as CreditCardIcon,
//   Bell,
//   Settings,
//   HelpCircle,
//   FileText,
//   Lock,
//   CheckCircle,
//   Award as AwardIcon,
//   Users as UsersIcon,
//   CloudRain,
//   Server,
//   Database,
//   Cpu,
//   Wifi,
//   ShieldCheck,
//   Zap as ZapIcon,
//   BarChart,
//   PieChart,
//   LineChart,
//   DollarSign,
//   ShoppingBag,
//   Package,
//   Truck,
//   Home,
//   Gift,
//   Tag,
//   Percent,
//   ShoppingCart,
//   Heart,
//   BookOpen,
//   LifeBuoy,
//   MessageCircle,
//   Video,
//   Download,
//   Upload,
//   Folder,
//   File,
//   Image,
//   Music,
//   Film,
//   Camera,
//   Mic,
//   Headset,
//   Keyboard,
//   Mouse,
//   Monitor,
//   Printer,
//   HardDrive,
//   Battery,
//   BatteryCharging,
//   Power,
//   WifiOff,
//   Bluetooth,
//   Radio,
//   Tv,
//   Smartphone as SmartphoneIcon,
//   Watch,
//   Laptop,
//   Tablet,
//   Speaker
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { useSelector, useDispatch } from 'react-redux'
// import type { RootState, AppDispatch } from "../store/index"
// import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'
// import { logoutHotel, checkAuthStatus } from '@/store/slices/hotelAuthSlice'
// import { useHotelAuth } from '@/hooks/useHotelAuth'
// import Cookies from 'js-cookie'

// // ===================== TYPES =====================
// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface UISubscriptionPlan {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   billingCycle: 'monthly' | 'yearly';
//   features: string[];
//   popular?: boolean;
//   maxStaff: number;
//   maxTables: number;
//   maxMenuItems: number;
//   analytics: boolean;
//   support: 'basic' | 'priority' | 'dedicated';
//   plan_code: string;
// }

// interface Feature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   role: string;
//   hotel: string;
//   content: string;
//   rating: number;
//   avatarGradient: string;
// }

// interface Stat {
//   label: string;
//   value: string;
//   change: string;
//   color: string;
// }

// // ===================== HELPER FUNCTIONS =====================
// const transformApiPlanToUiPlan = (apiPlan: SubscriptionPlan): UISubscriptionPlan => {
//   const featuresList: string[] = []

//   const featureMap: Record<string, string> = {
//     multi_device: 'Multi-device access',
//     basic_reports: 'Basic analytics & reports',
//     advanced_reports: 'Advanced analytics dashboard',
//     full_reports: 'Comprehensive analytics suite',
//     email_support: 'Email support (24/7)',
//     phone_support: 'Phone support',
//     sms_support: 'SMS notifications & support',
//     sms_notifications: 'SMS notifications',
//     custom_branding: 'Custom branding & white-label',
//     online_ordering: 'Online ordering system',
//     table_reservations: 'Table reservation management',
//     kitchen_display: 'Kitchen display system (KDS)',
//     loyalty_program: 'Loyalty program & rewards',
//     multi_branch: 'Multi-branch management',
//     priority_support: 'Priority support',
//     dedicated_manager: 'Dedicated account manager',
//     custom_integrations: 'Custom API integrations'
//   }

//   Object.entries(apiPlan.features).forEach(([key, value]) => {
//     if (value && featureMap[key]) {
//       featuresList.push(featureMap[key])
//     }
//   })

//   featuresList.push(`Up to ${apiPlan.max_staff} staff members`)
//   featuresList.push(`${apiPlan.max_tables} tables maximum`)
//   featuresList.push(`${apiPlan.max_menu_items} menu items`)
//   featuresList.push('Real-time order management')
//   featuresList.push('Mobile POS system')
//   featuresList.push('QR code ordering')

//   if (parseFloat(apiPlan.price_per_month) >= 79.99) {
//     featuresList.push('Inventory management')
//     featuresList.push('Staff scheduling')
//   }
//   if (parseFloat(apiPlan.price_per_month) >= 119.99) {
//     featuresList.push('Customer relationship management')
//     featuresList.push('Marketing automation')
//   }

//   let supportType: 'basic' | 'priority' | 'dedicated' = 'basic'
//   if (apiPlan.features.priority_support) {
//     supportType = 'priority'
//   }
//   if (apiPlan.features.dedicated_manager) {
//     supportType = 'dedicated'
//   }

//   return {
//     id: apiPlan.id,
//     name: apiPlan.plan_name,
//     description: apiPlan.description,
//     price: parseFloat(apiPlan.price_per_month),
//     billingCycle: 'monthly',
//     features: featuresList,
//     popular: apiPlan.plan_code === 'BUSINESS' || apiPlan.plan_code === 'ENTERPRISE' || apiPlan.plan_code === 'PREMIUM',
//     maxStaff: apiPlan.max_staff,
//     maxTables: apiPlan.max_tables,
//     maxMenuItems: apiPlan.max_menu_items,
//     analytics: apiPlan.features.advanced_reports || apiPlan.features.full_reports || apiPlan.features.basic_reports,
//     support: supportType,
//     plan_code: apiPlan.plan_code,
//   }
// }

// // ===================== CONSTANTS =====================
// const FEATURES: Feature[] = [
//   {
//     title: 'Smart Order Management',
//     description: 'Streamline orders with real-time updates, split bills, and special requests handling. Reduce order errors by 95% with our intelligent system.',
//     icon: <UtensilsCrossed className="h-8 w-8" />,
//     gradient: 'from-amber-500 to-orange-500',
//     bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
//   },
//   // ... rest of your features
// ];

// const TESTIMONIALS: Testimonial[] = [
//   // ... your testimonials
// ];

// const STATS: Stat[] = [
//   { label: 'Hotels & Restaurants', value: '2,500+', change: '+40% this year', color: 'text-amber-600' },
//   { label: 'Orders Processed', value: '10M+', change: 'Monthly volume', color: 'text-emerald-600' },
//   { label: 'Customer Rating', value: '4.9/5', change: 'Based on 1,200 reviews', color: 'text-rose-600' },
//   { label: 'Staff Managed', value: '50K+', change: 'Worldwide users', color: 'text-blue-600' },
//   { label: 'Countries', value: '45+', change: 'Global presence', color: 'text-violet-600' },
//   { label: 'Uptime', value: '99.9%', change: 'Service reliability', color: 'text-cyan-600' },
// ];

// const INTEGRATIONS = [
//   { name: 'QuickBooks', icon: <DollarSign className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   // ... rest of your integrations
// ];

// // ===================== MAIN COMPONENT =====================
// export default function HotelEaseLandingPage() {
//   const router = useRouter()
//   const dispatch = useDispatch<AppDispatch>()
//   const { plans, loading: plansLoading, error: plansError } = useSelector((state: RootState) => state.subscription)

//   // Use the custom auth hook
//   const {
//     isAuthenticated,
//     hotel,
//     hotelSlug,
//     isLoading: authLoading,
//     error: authError
//   } = useHotelAuth()

//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeFeature, setActiveFeature] = useState(0)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [manualAuthCheck, setManualAuthCheck] = useState(false)

//   useEffect(() => {
//     // Fetch subscription plans
//     dispatch(fetchSubscriptionPlans())

//     // Check auth status on mount
//     const checkAuth = async () => {
//       await dispatch(checkAuthStatus());
//       setManualAuthCheck(true);
//     };

//     if (!manualAuthCheck) {
//       checkAuth();
//     }
//   }, [dispatch, manualAuthCheck])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % FEATURES.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Navigation handlers
//   const handleGetStarted = (planId?: string) => {
//     if (isAuthenticated && hotelSlug) {
//       handleGoToDashboard()
//     } else if (planId) {
//       router.push(`/register?plan=${planId}`)
//     } else {
//       router.push('/register')
//     }
//   }

//   const handlePlanSelect = (planId: string) => {
//     if (isAuthenticated && hotelSlug) {
//       handleGoToDashboard()
//     } else {
//       router.push(`/register?plan=${planId}`)
//     }
//   }

//   const handleGoToDashboard = () => {
//     if (hotelSlug) {
//       router.push(`/hotel/${hotelSlug}/dashboard`)
//     } else if (isAuthenticated) {
//       // Try to get slug from hotel object or cookies
//       const slug = hotel?.hotel_slug || Cookies.get('hotel_slug')
//       if (slug) {
//         router.push(`/hotel/${slug}/dashboard`)
//       } else {
//         // Force auth check
//         dispatch(checkAuthStatus()).then((action: any) => {
//           if (action.payload?.user?.hotel_slug) {
//             router.push(`/hotel/${action.payload.user.hotel_slug}/dashboard`)
//           } else {
//             router.push('/login')
//           }
//         })
//       }
//     } else {
//       router.push('/login')
//     }
//   }

//   const handleLogout = async () => {
//     try {
//       await dispatch(logoutHotel()).unwrap()
//       toast.success('Logged out successfully!', {
//         icon: '👋',
//         style: {
//           background: '#1f2937',
//           color: '#fff',
//           borderRadius: '12px',
//           border: '1px solid #374151',
//         },
//       })
//     } catch (error) {
//       toast.error('Logout failed. Please try again.')
//     }
//   }

//   const handleDemoLogin = () => {
//     // For demo, simulate login by setting a cookie
//     Cookies.set('hotel_slug', 'demo-hotel', {
//       expires: 7,
//       path: '/',
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax'
//     })

//     // Force a re-check of auth status
//     dispatch(checkAuthStatus())

//     toast.success('Demo login successful!', {
//       icon: '🎉',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '1212px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleViewFeatures = () => {
//     document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewPricing = () => {
//     document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewTestimonials = () => {
//     document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   // Transform API plans to UI plans
//   const uiPlans = plans.map((plan: any) => transformApiPlanToUiPlan(plan))
//   const sortedUiPlans = [...uiPlans].sort((a, b) => {
//     if (a.popular && !b.popular) return -1
//     if (!a.popular && b.popular) return 1
//     return a.price - b.price
//   })

//   // Loading state
//   const loading = plansLoading || authLoading

//   // Display name for authenticated user
//   const displayName = hotel?.hotel_name || hotel?.admin_name || hotelSlug || ''

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles - keep as is */}
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Toaster */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//             padding: '16px',
//           },
//           success: {
//             iconTheme: {
//               primary: '#f59e0b',
//               secondary: '#1f2937',
//             },
//           },
//         }}
//       />

//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg py-3'
//           : 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-5'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
//                 <Hotel className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-10">
//               <button
//                 onClick={handleViewFeatures}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Features
//               </button>
//               <button
//                 onClick={handleViewPricing}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={handleViewTestimonials}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Testimonials
//               </button>
//               <a href="#integrations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Integrations</a>
//               <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">FAQ</a>
//             </div>

//             <div className="hidden lg:flex items-center gap-4">
//               {isAuthenticated ? (
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-700 font-medium text-sm">
//                     {displayName ? `Welcome, ${displayName}` : 'Welcome back!'}
//                   </span>
//                   <button
//                     onClick={handleGoToDashboard}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
//                   >
//                     Go to Dashboard
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="text-gray-700 hover:text-rose-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-rose-50 transition-colors text-sm"
//                   >
//                     Logout
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={handleDemoLogin}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Try Demo
//                   </button>
//                   <button
//                     onClick={() => router.push('/login')}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Log in
//                   </button>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 text-sm"
//                   >
//                     <Sparkle className="h-3.5 w-3.5" />
//                     Start Free Trial
//                   </button>
//                 </>
//               )}
//             </div>

//             <button
//               className="lg:hidden p-2 text-gray-700"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl mt-4">
//               <div className="flex flex-col space-y-3">
//                 <button
//                   onClick={() => {
//                     handleViewFeatures()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Features
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewPricing()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Pricing
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewTestimonials()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Testimonials
//                 </button>
//                 <a
//                   href="#integrations"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   Integrations
//                 </a>
//                 <a
//                   href="#faq"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   FAQ
//                 </a>
//                 <div className="pt-4 border-t border-gray-100">
//                   {isAuthenticated ? (
//                     <>
//                       <div className="mb-3 px-4">
//                         <p className="text-sm text-gray-500">Logged in as</p>
//                         <p className="font-semibold text-gray-900 text-sm">{displayName}</p>
//                       </div>
//                       <button
//                         onClick={() => {
//                           handleGoToDashboard()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r  from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm mb-2"
//                       >
//                         Go to Dashboard
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleLogout()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-rose-600 font-semibold py-3 px-6 hover:bg-rose-50 rounded-xl text-sm"
//                       >
//                         Logout
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => {
//                           handleDemoLogin()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 hover:bg-amber-50 rounded-xl text-sm mb-2"
//                       >
//                         Try Demo
//                       </button>
//                       <button
//                         onClick={() => {
//                           router.push('/login')
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 hover:bg-amber-50 rounded-xl text-sm mb-2"
//                       >
//                         Log in
//                       </button>
//                       <button
//                         onClick={() => {
//                           handleGetStarted()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm"
//                       >
//                         <Sparkle className="h-3.5 w-3.5" />
//                         Start Free Trial
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
//         {/* Background gradients */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
//         <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

//         {/* Animated blobs */}
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8 animate-float">
//               <div className="flex items-center gap-2">
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//               <span className="text-sm font-semibold text-amber-800">Trusted by 2,500+ luxury hotels & restaurants worldwide</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//               Revolutionize Your
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h1>

//             <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               The all-in-one SaaS platform designed exclusively for luxury hotels and fine dining establishments.
//               Streamline operations, delight guests, and maximize revenue with AI-powered hospitality solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <Loader2 className="h-5 w-5 animate-spin" />
//                     Loading...
//                   </>
//                 ) : (
//                   <>
//                     <Sparkle className="h-5 w-5" />
//                     {isAuthenticated ? 'Go to Dashboard' : 'Start Free 14-Day Trial'}
//                     <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//                   </>
//                 )}
//               </button>
//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//                 disabled={loading}
//               >
//                 <Play className="h-5 w-5" />
//                 Watch Live Demo
//                 <span className="text-sm text-gray-500 group-hover:text-amber-500">(2 min)</span>
//               </button>
//             </div>

//             {/* Quick Navigation Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//               <button
//                 onClick={handleViewFeatures}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
//                     <Sparkles className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Explore Features</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Discover how HotelEase can transform your operations</p>
//                 <div className="flex items-center text-amber-600 font-semibold text-sm">
//                   View all features
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewPricing}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl">
//                     <CreditCardIcon className="h-6 w-6 text-violet-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">View Pricing</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Choose the perfect plan for your business needs</p>
//                 <div className="flex items-center text-violet-600 font-semibold text-sm">
//                   See all plans
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewTestimonials}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl">
//                     <Award className="h-6 w-6 text-rose-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Read Stories</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">See how luxury hotels succeed with HotelEase</p>
//                 <div className="flex items-center text-rose-600 font-semibold text-sm">
//                   View testimonials
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
//               {STATS.map((stat, index) => (
//                 <div key={index} className="text-center p-4">
//                   <p className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
//                   <p className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
//                   <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       {/* ... keep all other sections the same, just update the CTA buttons */}

//       {/* In each section, update buttons like this: */}

//       {/* Features CTA */}
//       <div className="mt-16 text-center">
//         <button
//           onClick={() => handleGetStarted()}
//           className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//           disabled={loading}
//         >
//           {loading ? (
//             <>
//               <Loader2 className="h-5 w-5 animate-spin" />
//               Loading...
//             </>
//           ) : (
//             <>
//               <Sparkle className="h-5 w-5" />
//               {isAuthenticated ? 'Go to Dashboard' : 'Start Your Free Trial with All Features'}
//               <ArrowRight className="h-5 w-5" />
//             </>
//           )}
//         </button>
//       </div>

//       {/* ... rest of your landing page sections */}

//       {/* Floating Action Buttons */}
//       {isAuthenticated ? (
//         <>
//           <button
//             onClick={handleLogout}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Logout"
//           >
//             <div className="flex items-center gap-2">
//               <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Logout</span>
//             </div>
//           </button>

//           <button
//             onClick={handleGoToDashboard}
//             className="fixed bottom-8 my-4 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Go to Dashboard"
//           >
//             <div className="flex items-center gap-2">
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Dashboard</span>
//             </div>
//           </button>
//         </>
//       ) : (
//         <button
//           onClick={() => handleGetStarted()}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group flex items-center gap-2"
//           title="Start Free Trial"
//           disabled={loading}
//         >
//           {loading ? (
//             <Loader2 className="h-5 w-5 animate-spin" />
//           ) : (
//             <>
//               <Sparkle className="h-5 w-5" />
//               <span className="text-sm font-semibold">Start Free Trial</span>
//             </>
//           )}
//         </button>
//       )}

//       {/* Live Chat Widget */}
//       <button className="fixed bottom-8 right-24 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110">
//         <MessageCircle className="h-5 w-5" />
//       </button>
//     </div>
//   )
// }

// 'use client'

// import { useState, useEffect, useRef } from 'react'
// import {
//   Hotel,
//   Menu,
//   X,
//   Check,
//   Star,
//   ArrowRight,
//   Users,
//   BarChart3,
//   CreditCard,
//   UtensilsCrossed,
//   ChefHat,
//   Table,
//   Receipt,
//   Smartphone,
//   Headphones,
//   Shield,
//   Zap,
//   TrendingUp,
//   Cloud,
//   QrCode,
//   TabletSmartphone,
//   Calendar,
//   Clock,
//   MessageSquare,
//   Award,
//   Trophy,
//   Sparkles,
//   BadgeCheck,
//   Target,
//   ArrowUpRight,
//   ChevronRight,
//   LogOut,
//   Play,
//   Sparkle,
//   Gem,
//   Crown,
//   Loader2,
//   Clock4,
//   Building,
//   Coffee,
//   Utensils,
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   CreditCard as CreditCardIcon,
//   Bell,
//   Settings,
//   HelpCircle,
//   FileText,
//   Lock,
//   CheckCircle,
//   Award as AwardIcon,
//   Users as UsersIcon,
//   CloudRain,
//   Server,
//   Database,
//   Cpu,
//   Wifi,
//   ShieldCheck,
//   Zap as ZapIcon,
//   BarChart,
//   PieChart,
//   LineChart,
//   DollarSign,
//   ShoppingBag,
//   Package,
//   Truck,
//   Home,
//   Gift,
//   Tag,
//   Percent,
//   ShoppingCart,
//   Heart,
//   BookOpen,
//   LifeBuoy,
//   MessageCircle,
//   Video,
//   Download,
//   Upload,
//   Folder,
//   File,
//   Image,
//   Music,
//   Film,
//   Camera,
//   Mic,
//   Headset,
//   Keyboard,
//   Mouse,
//   Monitor,
//   Printer,
//   HardDrive,
//   Battery,
//   BatteryCharging,
//   Power,
//   WifiOff,
//   Bluetooth,
//   Radio,
//   Tv,
//   Smartphone as SmartphoneIcon,
//   Watch,
//   Laptop,
//   Tablet,
//   Speaker
// } from 'lucide-react'
// import toast, { Toaster } from 'react-hot-toast'
// import { useRouter } from 'next/navigation'
// import { useSelector, useDispatch } from 'react-redux'
// import type { RootState, AppDispatch } from "../store/index"
// import { fetchSubscriptionPlans } from '@/store/slices/subscriptionSlice'
// import { logoutHotel, checkAuthStatus } from '@/store/slices/hotelAuthSlice'
// import { useHotelAuth } from '@/hooks/useHotelAuth'
// import Cookies from 'js-cookie'

// // ===================== TYPES =====================
// interface User {
//   id: string;
//   email: string;
//   name: string;
//   isSubscribed: boolean;
//   role?: 'hotel_admin' | 'staff';
//   hotelName?: string;
//   subscriptionPlan?: string;
// }

// interface SubscriptionPlan {
//   id: string;
//   plan_name: string;
//   plan_code: string;
//   description: string;
//   price_per_month: string;
//   max_staff: number;
//   max_tables: number;
//   max_menu_items: number;
//   features: {
//     [key: string]: boolean;
//   };
//   display_order: number;
//   is_active: boolean;
//   created_at: string;
// }

// interface UISubscriptionPlan {
//   id: string;
//   name: string;
//   description: string;
//   price: number;
//   billingCycle: 'monthly' | 'yearly';
//   features: string[];
//   popular?: boolean;
//   maxStaff: number;
//   maxTables: number;
//   maxMenuItems: number;
//   analytics: boolean;
//   support: 'basic' | 'priority' | 'dedicated';
//   plan_code: string;
// }

// interface Feature {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
//   gradient: string;
//   bgGradient: string;
// }

// interface Testimonial {
//   id: string;
//   name: string;
//   role: string;
//   hotel: string;
//   content: string;
//   rating: number;
//   avatarGradient: string;
// }

// interface Stat {
//   label: string;
//   value: string;
//   change: string;
//   color: string;
// }

// // ===================== HELPER FUNCTIONS =====================
// const transformApiPlanToUiPlan = (apiPlan: SubscriptionPlan): UISubscriptionPlan => {
//   const featuresList: string[] = []

//   const featureMap: Record<string, string> = {
//     multi_device: 'Multi-device access',
//     basic_reports: 'Basic analytics & reports',
//     advanced_reports: 'Advanced analytics dashboard',
//     full_reports: 'Comprehensive analytics suite',
//     email_support: 'Email support (24/7)',
//     phone_support: 'Phone support',
//     sms_support: 'SMS notifications & support',
//     sms_notifications: 'SMS notifications',
//     custom_branding: 'Custom branding & white-label',
//     online_ordering: 'Online ordering system',
//     table_reservations: 'Table reservation management',
//     kitchen_display: 'Kitchen display system (KDS)',
//     loyalty_program: 'Loyalty program & rewards',
//     multi_branch: 'Multi-branch management',
//     priority_support: 'Priority support',
//     dedicated_manager: 'Dedicated account manager',
//     custom_integrations: 'Custom API integrations'
//   }

//   Object.entries(apiPlan.features).forEach(([key, value]) => {
//     if (value && featureMap[key]) {
//       featuresList.push(featureMap[key])
//     }
//   })

//   featuresList.push(`Up to ${apiPlan.max_staff} staff members`)
//   featuresList.push(`${apiPlan.max_tables} tables maximum`)
//   featuresList.push(`${apiPlan.max_menu_items} menu items`)
//   featuresList.push('Real-time order management')
//   featuresList.push('Mobile POS system')
//   featuresList.push('QR code ordering')

//   if (parseFloat(apiPlan.price_per_month) >= 79.99) {
//     featuresList.push('Inventory management')
//     featuresList.push('Staff scheduling')
//   }
//   if (parseFloat(apiPlan.price_per_month) >= 119.99) {
//     featuresList.push('Customer relationship management')
//     featuresList.push('Marketing automation')
//   }

//   let supportType: 'basic' | 'priority' | 'dedicated' = 'basic'
//   if (apiPlan.features.priority_support) {
//     supportType = 'priority'
//   }
//   if (apiPlan.features.dedicated_manager) {
//     supportType = 'dedicated'
//   }

//   return {
//     id: apiPlan.id,
//     name: apiPlan.plan_name,
//     description: apiPlan.description,
//     price: parseFloat(apiPlan.price_per_month),
//     billingCycle: 'monthly',
//     features: featuresList,
//     popular: apiPlan.plan_code === 'BUSINESS' || apiPlan.plan_code === 'ENTERPRISE' || apiPlan.plan_code === 'PREMIUM',
//     maxStaff: apiPlan.max_staff,
//     maxTables: apiPlan.max_tables,
//     maxMenuItems: apiPlan.max_menu_items,
//     analytics: apiPlan.features.advanced_reports || apiPlan.features.full_reports || apiPlan.features.basic_reports,
//     support: supportType,
//     plan_code: apiPlan.plan_code,
//   }
// }

// // ===================== CONSTANTS =====================
// const FEATURES: Feature[] = [
//   {
//     title: 'Smart Order Management',
//     description: 'Streamline orders with real-time updates, split bills, and special requests handling. Reduce order errors by 95% with our intelligent system.',
//     icon: <UtensilsCrossed className="h-8 w-8" />,
//     gradient: 'from-amber-500 to-orange-500',
//     bgGradient: 'bg-gradient-to-br from-amber-50 to-orange-50',
//   },
//   {
//     title: 'Kitchen Display System',
//     description: 'Digital order tickets with prep timers, course sequencing, and chef notes. Optimize kitchen workflow and reduce preparation time by 40%.',
//     icon: <ChefHat className="h-8 w-8" />,
//     gradient: 'from-rose-500 to-pink-600',
//     bgGradient: 'bg-gradient-to-br from-rose-50 to-pink-50',
//   },
//   {
//     title: 'Table Management',
//     description: 'Interactive floor plan with live status, reservations, and waitlist management. Increase table turnover by 25% with smart seating algorithms.',
//     icon: <Table className="h-8 w-8" />,
//     gradient: 'from-emerald-500 to-teal-600',
//     bgGradient: 'bg-gradient-to-br from-emerald-50 to-teal-50',
//   },
//   {
//     title: 'Staff Management',
//     description: 'Role-based permissions, shift scheduling, and performance tracking. Reduce scheduling conflicts by 60% with automated shift management.',
//     icon: <Users className="h-8 w-8" />,
//     gradient: 'from-blue-500 to-cyan-600',
//     bgGradient: 'bg-gradient-to-br from-blue-50 to-cyan-50',
//   },
//   {
//     title: 'Advanced Analytics',
//     description: 'Real-time insights on sales, inventory, customer behavior, and profitability. Make data-driven decisions with predictive analytics.',
//     icon: <TrendingUp className="h-8 w-8" />,
//     gradient: 'from-violet-500 to-purple-600',
//     bgGradient: 'bg-gradient-to-br from-violet-50 to-purple-50',
//   },
//   {
//     title: 'Mobile POS System',
//     description: 'Take orders and process payments anywhere with our intuitive mobile app. Increase staff efficiency by 35% with mobile order taking.',
//     icon: <TabletSmartphone className="h-8 w-8" />,
//     gradient: 'from-indigo-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50',
//   },
//   {
//     title: 'Inventory Management',
//     description: 'Automated stock tracking, purchase orders, and waste reduction. Reduce inventory costs by 20% with smart forecasting.',
//     icon: <Package className="h-8 w-8" />,
//     gradient: 'from-green-500 to-emerald-600',
//     bgGradient: 'bg-gradient-to-br from-green-50 to-emerald-50',
//   },
//   {
//     title: 'Customer CRM',
//     description: 'Track guest preferences, dining history, and special requests. Increase repeat business by 45% with personalized service.',
//     icon: <UsersIcon className="h-8 w-8" />,
//     gradient: 'from-pink-500 to-rose-600',
//     bgGradient: 'bg-gradient-to-br from-pink-50 to-rose-50',
//   },
//   {
//     title: 'Multi-Branch Control',
//     description: 'Centralized management for multiple locations with consolidated reporting. Streamline operations across all your properties.',
//     icon: <Building className="h-8 w-8" />,
//     gradient: 'from-cyan-500 to-blue-600',
//     bgGradient: 'bg-gradient-to-br from-cyan-50 to-blue-50',
//   },
// ]

// const TESTIMONIALS: Testimonial[] = [
//   {
//     id: '1',
//     name: 'Isabella Rossi',
//     role: 'General Manager',
//     hotel: 'Grand Palazzo Hotel',
//     content: 'HotelEase transformed our 5-star hotel operations. Guest satisfaction increased by 40% and operational costs decreased by 25%. The ROI was achieved in just 3 months.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-amber-500 to-orange-500',
//   },
//   {
//     id: '2',
//     name: 'Kenji Tanaka',
//     role: 'Restaurant Owner',
//     hotel: 'Sakura Fine Dining',
//     content: 'The kitchen display system reduced order errors by 95%. Our chefs are more efficient and our customers happier than ever. Service speed improved by 30%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
//   },
//   {
//     id: '3',
//     name: 'Sophia Chen',
//     role: 'Operations Director',
//     hotel: 'The Royal Resort',
//     content: 'We manage 3 restaurants and 2 bars seamlessly with HotelEase. The multi-branch feature is a game-changer for our business. Reporting time reduced by 70%.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-violet-500 to-purple-600',
//   },
//   {
//     id: '4',
//     name: 'Marcus Johnson',
//     role: 'Hotel Director',
//     hotel: 'Oceanview Luxury Resort',
//     content: 'The analytics dashboard provided insights we never had before. We optimized menu pricing and increased profitability by 18% in the first quarter.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
//   },
//   {
//     id: '5',
//     name: 'Elena Vasquez',
//     role: 'F&B Manager',
//     hotel: 'Metropolitan Suites',
//     content: 'Staff scheduling became effortless. We reduced overtime costs by 35% while maintaining excellent service quality. The mobile app is a game-changer.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-rose-500 to-pink-600',
//   },
//   {
//     id: '6',
//     name: 'Ahmed Al-Farsi',
//     role: 'CEO',
//     hotel: 'Desert Oasis Hotels',
//     content: 'From implementation to daily use, the support has been exceptional. Our 12 properties now operate seamlessly with centralized control and reporting.',
//     rating: 5,
//     avatarGradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
//   },
// ]

// const STATS: Stat[] = [
//   { label: 'Hotels & Restaurants', value: '2,500+', change: '+40% this year', color: 'text-amber-600' },
//   { label: 'Orders Processed', value: '10M+', change: 'Monthly volume', color: 'text-emerald-600' },
//   { label: 'Customer Rating', value: '4.9/5', change: 'Based on 1,200 reviews', color: 'text-rose-600' },
//   { label: 'Staff Managed', value: '50K+', change: 'Worldwide users', color: 'text-blue-600' },
//   { label: 'Countries', value: '45+', change: 'Global presence', color: 'text-violet-600' },
//   { label: 'Uptime', value: '99.9%', change: 'Service reliability', color: 'text-cyan-600' },
// ]

// const INTEGRATIONS = [
//   { name: 'QuickBooks', icon: <DollarSign className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Xero', icon: <FileText className="h-6 w-6" />, color: 'from-blue-500 to-cyan-600' },
//   { name: 'Stripe', icon: <CreditCardIcon className="h-6 w-6" />, color: 'from-violet-500 to-purple-600' },
//   { name: 'PayPal', icon: <ShoppingBag className="h-6 w-6" />, color: 'from-blue-500 to-indigo-600' },
//   { name: 'Square', icon: <CreditCard className="h-6 w-6" />, color: 'from-emerald-500 to-teal-600' },
//   { name: 'Shopify', icon: <ShoppingCart className="h-6 w-6" />, color: 'from-green-500 to-emerald-600' },
//   { name: 'Mailchimp', icon: <Mail className="h-6 w-6" />, color: 'from-amber-500 to-orange-600' },
//   { name: 'Slack', icon: <MessageSquare className="h-6 w-6" />, color: 'from-pink-500 to-rose-600' },
// ]

// // ===================== MAIN COMPONENT =====================
// export default function  HotelEaseLandingPage() {
//   const router = useRouter()
//   const dispatch = useDispatch<AppDispatch>()
//   const { plans, loading, error } = useSelector((state: RootState) => state.subscription)

//     const {
//     isAuthenticated,
//     hotel,
//     hotelSlug,
//     isLoading: authLoading,
//     error: authError
//   } = useHotelAuth()
//   // console.log('data fromo useHotelauth hook:- landing page', isAuthenticated, hotel, hotelSlug, authLoading, authError)

//   const pricingRef= useRef<HTMLElement | null>(null)
//   const fetchedRef= useRef(false);

//   const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [user, setUser] = useState<User | null>(null)
//   const [activeFeature, setActiveFeature] = useState(0)
//   const [isScrolled, setIsScrolled] = useState(false)

//   const [manualAuthCheck, setManualAuthCheck] = useState(false)
//     const displayName = hotel?.hotel_name || hotel?.admin_name || hotelSlug || ''

//   // const isAuthenticated = !!user

//   // useEffect(() => {
//   //   // Check for hotel_token cookie on component mount
//   //   const checkHotelToken = async () => {
//   //     // const hotelToken = Cookies.get('hotel_token')
//   //     // console.log('Checking hotel token:', hotelToken)
//   //     // console.log('these are the cookies:- ', Cookies)

//   //       const hotelToken = Cookies.get('hotel_token') // string | undefined

//   // //     const cookieStore =await cookies()
//   // // const hotelToken = cookieStore.get('hotel_token')?.value
//   // console.log('this is the hotel token from cookie store', hotelToken)

//   //     if (hotelToken) {
//   //       try {
//   //         // Parse the JWT token to get hotel slug
//   //         const tokenPayload = JSON.parse(atob(hotelToken.split('.')[1]))
//   //         const slug = tokenPayload.slug || tokenPayload.hotel_slug

//   //         if (slug) {
//   //           setHotelSlug(slug)
//   //           // If hotel token exists, redirect to hotel dashboard
//   //           router.push(`/hotel/${slug}/dashboard`)
//   //         }
//   //       } catch (error) {
//   //         console.error('Error parsing hotel token:', error)
//   //         // If token is invalid, remove it
//   //         Cookies.remove('hotel_token')
//   //       }
//   //     }
//   //   }

//   //   checkHotelToken()

//   //   // Fetch subscription plans on component mount
//   //   dispatch(fetchSubscriptionPlans())
//   // }, [dispatch, router])

//   // useEffect(() => {
//   //   // Fetch subscription plans
//   //   dispatch(fetchSubscriptionPlans())

//   //   // Check auth status on mount
//   //   const checkAuth = async () => {
//   //     await dispatch(checkAuthStatus());
//   //     setManualAuthCheck(true);
//   //   };

//   //   if (!manualAuthCheck) {
//   //     checkAuth();
//   //   }
//   // }, [dispatch, manualAuthCheck])

//    useEffect(() => {
//     const el = pricingRef.current
//     if (!el) return

//     const obs = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0]
//         if (!entry?.isIntersecting) return

//         // already have plans or already fetched => skip
//         if (fetchedRef.current) return
//         if (plans?.length) return
//         if (loading) return

//         fetchedRef.current = true
//         dispatch(fetchSubscriptionPlans())
//         console.log('Fetching subscription plans via IntersectionObserver...')
//         obs.disconnect() // stop observing after first fetch
//       },
//       {
//         root: null,
//         // fetch a bit BEFORE it fully appears (nice UX)
//         rootMargin: "200px 0px",
//         threshold: 0.1,
//       }
//     )

//     obs.observe(el)
//     return () => obs.disconnect()
//   }, [dispatch, plans?.length, loading])

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % FEATURES.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Navigation handlers
//   const handleGetStarted = (planId?: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else if (planId) {
//       router.push(`/register?plan=${planId}`)
//     } else {
//       router.push('/register')
//     }
//   }

//   const handlePlanSelect = (planId: string) => {
//     if (isAuthenticated) {
//       handleGoToDashboard()
//     } else {
//       router.push(`/register?plan=${planId}`)
//     }
//   }

//   const handleGoToDashboard = () => {
//     if (hotelSlug) {
//       router.push(`/hotel/${hotelSlug}/dashboard`)
//     // } else if (isAuthenticated) {
//     //   // Try to get slug from hotel object or cookies
//     //   const slug = hotel?.hotel_slug || Cookies.get('hotel_slug')
//     //   if (slug) {
//     //     router.push(`/hotel/${slug}/dashboard`)
//       } else {
//         // Force auth check
//         dispatch(checkAuthStatus()).then((action: any) => {
//           if (action.payload?.user?.hotel_slug) {
//             router.push(`/hotel/${action.payload.user.hotel_slug}/dashboard`)
//           } else {
//             router.push('/login')
//           }
//         })
//       }
//     // } else {
//     //   router.push('/login')
//     // }
//   }

//   const handleLogout = () => {
//     // Remove hotel token cookie
//     Cookies.remove('hotel_token')
//     setUser(null)
//     toast.success('Logged out successfully!', {
//       icon: '👋',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleDemoLogin = () => {
//     setUser({
//       id: 'demo-123',
//       email: 'demo@hotelease.com',
//       name: 'Demo User',
//       isSubscribed: true,
//       role: 'hotel_admin',
//       hotelName: 'Demo Hotel',
//       subscriptionPlan: 'PROFESSIONAL'
//     })
//     toast.success('Demo login successful!', {
//       icon: '🎉',
//       style: {
//         background: '#1f2937',
//         color: '#fff',
//         borderRadius: '12px',
//         border: '1px solid #374151',
//       },
//     })
//   }

//   const handleViewFeatures = () => {
//     document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewPricing = () => {
//     document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleViewTestimonials = () => {
//     document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   // Transform API plans to UI plans
//   const uiPlans = plans.map((plan: any) => transformApiPlanToUiPlan(plan))
//   const sortedUiPlans = [...uiPlans].sort((a, b) => {
//     // Sort by price, but keep popular plans highlighted
//     if (a.popular && !b.popular) return -1
//     if (!a.popular && b.popular) return 1
//     return a.price - b.price
//   })

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Global Styles */}
//       <style jsx global>{`
//         @keyframes blob {
//           0%, 100% {
//             transform: translate(0px, 0px) scale(1);
//           }
//           33% {
//             transform: translate(30px, -50px) scale(1.1);
//           }
//           66% {
//             transform: translate(-20px, 20px) scale(0.9);
//           }
//         }
//         @keyframes gradient-x {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-20px);
//           }
//         }
//         @keyframes pulse-glow {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animate-gradient-x {
//           background-size: 200% 200%;
//           animation: gradient-x 15s ease infinite;
//         }
//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }
//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }
//       `}</style>

//       {/* Toaster */}
//       <Toaster
//         position="top-right"
//         toastOptions={{
//           duration: 4000,
//           style: {
//             background: '#1f2937',
//             color: '#fff',
//             borderRadius: '12px',
//             border: '1px solid #374151',
//             padding: '16px',
//           },
//           success: {
//             iconTheme: {
//               primary: '#f59e0b',
//               secondary: '#1f2937',
//             },
//           },
//         }}
//       />

//       {/* Navigation */}
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg py-3'
//           : 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-5'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
//               <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
//                 <Hotel className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
//                   HotelEase
//                 </span>
//                 <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//               </div>
//             </div>

//             <div className="hidden lg:flex items-center gap-10">
//               <button
//                 onClick={handleViewFeatures}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Features
//               </button>
//               <button
//                 onClick={handleViewPricing}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Pricing
//               </button>
//               <button
//                 onClick={handleViewTestimonials}
//                 className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105"
//               >
//                 Testimonials
//               </button>
//               <a href="#integrations" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">Integrations</a>
//               <a href="#faq" className="text-gray-700 hover:text-amber-600 font-medium transition-colors">FAQ</a>
//             </div>

//             <div className="hidden lg:flex items-center gap-4">
//               {isAuthenticated ? (
//                 <div className="flex items-center gap-4">
//                   <span className="text-gray-700 font-medium text-sm">Welcome, {displayName}</span>
//                   <button
//                     onClick={handleGoToDashboard}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm"
//                   >
//                     Go to Dashboard
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => router.push('/slug')}
//                     className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm"
//                   >
//                     Log in
//                   </button>
//                   <button
//                     onClick={() => router.push('/register')}
//                     className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 text-sm"
//                   >
//                     <Sparkle className="h-3.5 w-3.5" />
//                     Register
//                   </button>
//                 </>
//               )}
//             </div>

//             <button
//               className="lg:hidden p-2 text-gray-700"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//           {isMenuOpen && (
//             <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl mt-4">
//               <div className="flex flex-col space-y-3">
//                 <button
//                   onClick={() => {
//                     handleViewFeatures()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Features
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewPricing()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Pricing
//                 </button>
//                 <button
//                   onClick={() => {
//                     handleViewTestimonials()
//                     setIsMenuOpen(false)
//                   }}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left"
//                 >
//                   Testimonials
//                 </button>
//                 <a
//                   href="#integrations"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   Integrations
//                 </a>
//                 <a
//                   href="#faq"
//                   onClick={() => setIsMenuOpen(false)}
//                   className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl"
//                 >
//                   FAQ
//                 </a>
//                 <div className="pt-4 border-t border-gray-100">
//                   {isAuthenticated ? (
//                     <>
//                       <div className="mb-3 px-4">
//                         <p className="text-sm text-gray-500">Logged in as</p>
//                         <p className="font-semibold text-gray-900 text-sm">{user?.name}</p>
//                       </div>
//                       <button
//                         onClick={() => {
//                           handleGoToDashboard()
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm"
//                       >
//                         Go to Dashboard
//                       </button>
//                     </>
//                   ) : (
//                     <>
//                       <button
//                         onClick={() => {
//                           router.push('/login')
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 hover:bg-amber-50 rounded-xl text-sm mb-2"
//                       >
//                         Log in
//                       </button>
//                       <button
//                         onClick={() => {
//                           router.push('/register')
//                           setIsMenuOpen(false)
//                         }}
//                         className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm"
//                       >
//                         <Sparkle className="h-3.5 w-3.5" />
//                         Register
//                       </button>
//                     </>
//                   )}
//                   <button onClick={handleLogout} className='mx-2 my-5 border border-black'>Logout</button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
//         {/* Background gradients */}
//         <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
//         <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

//         {/* Animated blobs */}
//         <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
//         <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>

//         <div className="max-w-7xl mx-auto relative">
//           <div className="text-center max-w-4xl mx-auto">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8 animate-float">
//               <div className="flex items-center gap-2">
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.2s' }}></div>
//                 <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow" style={{ animationDelay: '0.4s' }}></div>
//               </div>
//               <span className="text-sm font-semibold text-amber-800">Trusted by 2,500+ luxury hotels & restaurants worldwide</span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
//               Revolutionize Your
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h1>

//             <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
//               The all-in-one SaaS platform designed exclusively for luxury hotels and fine dining establishments.
//               Streamline operations, delight guests, and maximize revenue with AI-powered hospitality solutions.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Free 14-Day Trial
//                 <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
//               </button>
//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//               >
//                 <Play className="h-5 w-5" />
//                 Watch Live Demo
//                 <span className="text-sm text-gray-500 group-hover:text-amber-500">(2 min)</span>
//               </button>
//             </div>

//             {/* Quick Navigation Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
//               <button
//                 onClick={handleViewFeatures}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
//                     <Sparkles className="h-6 w-6 text-amber-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Explore Features</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Discover how HotelEase can transform your operations</p>
//                 <div className="flex items-center text-amber-600 font-semibold text-sm">
//                   View all features
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewPricing}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl">
//                     <CreditCardIcon className="h-6 w-6 text-violet-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">View Pricing</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">Choose the perfect plan for your business needs</p>
//                 <div className="flex items-center text-violet-600 font-semibold text-sm">
//                   See all plans
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>

//               <button
//                 onClick={handleViewTestimonials}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-left"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl">
//                     <Award className="h-6 w-6 text-rose-600" />
//                   </div>
//                   <h3 className="text-lg font-bold text-gray-900">Read Stories</h3>
//                 </div>
//                 <p className="text-gray-600 text-sm mb-4">See how luxury hotels succeed with HotelEase</p>
//                 <div className="flex items-center text-rose-600 font-semibold text-sm">
//                   View testimonials
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </div>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
//               {STATS.map((stat, index) => (
//                 <div key={index} className="text-center p-4">
//                   <p className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
//                   <p className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">{stat.label}</p>
//                   <p className="text-xs sm:text-sm text-gray-500">{stat.change}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-6">
//               <BadgeCheck className="h-4 w-4 text-emerald-600" />
//               <span className="text-sm font-semibold text-emerald-700">PREMIUM FEATURES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Everything You Need for
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
//                   Operational Excellence
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Sophisticated tools designed for the most demanding hospitality businesses
//             </p>
//           </div>

//           {/* Featured Feature Showcase */}
//           <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
//             <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

//             <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <div className={`mb-6 p-5 rounded-2xl ${FEATURES[activeFeature].bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${FEATURES[activeFeature].gradient} p-3 rounded-xl`}>
//                     {FEATURES[activeFeature].icon}
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold mb-4">
//                   {FEATURES[activeFeature].title}
//                 </h3>
//                 <p className="text-gray-300 mb-8 text-lg">
//                   {FEATURES[activeFeature].description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
//                 >
//                   Start Free Trial
//                 </button>
//               </div>

//               <div className="grid grid-cols-3 gap-4">
//                 {FEATURES.slice(0, 6).map((feature, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveFeature(index)}
//                     className={`p-4 rounded-xl transition-all duration-300 ${
//                       activeFeature === index
//                         ? 'bg-white/10 backdrop-blur-sm border border-white/20'
//                         : 'bg-white/5 hover:bg-white/10'
//                     }`}
//                   >
//                     <div className={`p-3 rounded-lg ${feature.bgGradient} mb-3`}>
//                       <div className={`bg-gradient-to-br ${feature.gradient} p-2 rounded-lg`}>
//                         {feature.icon}
//                       </div>
//                     </div>
//                     <p className="text-sm font-semibold text-white">{feature.title.split(' ')[0]}</p>
//                   </button>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* All Features Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {FEATURES.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className={`mb-6 p-5 rounded-2xl ${feature.bgGradient} w-fit`}>
//                   <div className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}>
//                     {feature.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 mb-8">
//                   {feature.description}
//                 </p>
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="flex items-center text-amber-600 font-semibold hover:text-amber-700"
//                 >
//                   Try this feature free
//                   <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Platform Highlights */}
//           <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <ShieldCheck className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Enterprise Security</h4>
//                   <p className="text-gray-600">Bank-level protection</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">SOC 2 Type II certified with end-to-end encryption and regular security audits.</p>
//             </div>

//             <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
//                   <Cloud className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">Cloud Infrastructure</h4>
//                   <p className="text-gray-600">99.9% uptime guarantee</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Built on AWS with global CDN for lightning-fast performance worldwide.</p>
//             </div>

//             <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
//                   <Headphones className="h-7 w-7 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="text-xl font-bold text-gray-900">24/7 Premium Support</h4>
//                   <p className="text-gray-600">Dedicated account managers</p>
//                 </div>
//               </div>
//               <p className="text-gray-700">Round-the-clock support with dedicated account managers for enterprise clients.</p>
//             </div>
//           </div>

//           {/* Feature CTA */}
//           <div className="mt-16 text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Sparkle className="h-5 w-5" />
//               Start Your Free Trial with All Features
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
// <section
//         id="pricing"
//         ref={(node) => {
//           pricingRef.current = node
//         }}
//         className=" scroll-mt-20 bg-gradient-to-b from-gray-50 to-white"
//       >
//       </section>

//       <section id="pricing" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 mb-6">
//               <Trophy className="h-4 w-4 text-violet-600" />
//               <span className="text-sm font-semibold text-violet-700">FLEXIBLE PLANS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Simple, Transparent
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
//                   Pricing
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Choose the perfect plan for your business. All plans include a 14-day free trial with full access.
//             </p>
//           </div>

//           {loading ? (
//             <div className="flex justify-center items-center py-20">
//               <div className="text-center">
//                 <Loader2 className="h-12 w-12 text-amber-500 animate-spin mx-auto mb-4" />
//                 <p className="text-gray-600">Loading subscription plans...</p>
//               </div>
//             </div>
//           ) : error ? (
//             <div className="text-center py-20">
//               <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
//                 <div className="p-3 bg-red-100 rounded-full w-fit mx-auto mb-4">
//                   <X className="h-6 w-6 text-red-600" />
//                 </div>
//                 <p className="text-red-600 font-semibold mb-2">Error loading plans</p>
//                 <p className="text-gray-600 mb-4">{error}</p>
//                 <button
//                   onClick={() => dispatch(fetchSubscriptionPlans())}
//                   className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow"
//                 >
//                   Retry
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//                 {sortedUiPlans.map((plan) => (
//                   <div
//                     key={plan.id}
//                     className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
//                       plan.popular
//                         ? 'transform lg:scale-105 shadow-2xl border-2 border-amber-500'
//                         : 'shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-amber-200'
//                     }`}
//                   >
//                     <div className={`absolute inset-0 ${
//                       plan.plan_code === 'STARTER'
//                         ? 'bg-gradient-to-b from-blue-50 to-indigo-50'
//                         : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                         ? 'bg-gradient-to-b from-amber-50 to-orange-50'
//                         : 'bg-gradient-to-b from-gray-900 to-gray-800'
//                     }`}></div>

//                     <div className={`relative p-8 h-full ${
//                       plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                     }`}>
//                       {plan.popular && (
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                           <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2">
//                             <Crown className="h-4 w-4" />
//                             MOST POPULAR
//                           </div>
//                         </div>
//                       )}

//                       {plan.plan_code === 'ENTERPRISE' && (
//                         <div className="absolute top-6 right-6">
//                           <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
//                             <Gem className="h-6 w-6 text-white" />
//                           </div>
//                         </div>
//                       )}

//                       <div className="mb-10">
//                         <div className="flex items-center gap-3 mb-4">
//                           <h3 className={`text-3xl font-bold ${
//                             plan.plan_code === 'STARTER'
//                               ? 'text-blue-600'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'text-amber-600'
//                               : 'text-white'
//                           }`}>
//                             {plan.name}
//                           </h3>
//                           {plan.plan_code === 'ENTERPRISE' && (
//                             <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold">
//                               PREMIUM
//                             </span>
//                           )}
//                         </div>
//                         <p className={`mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-600'
//                         }`}>
//                           {plan.description}
//                         </p>

//                         <div className="mb-8">
//                           <div className="flex items-baseline">
//                             <span className={`text-5xl font-bold ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-700'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-700'
//                                 : 'text-white'
//                             }`}>
//                               ${plan.price}
//                             </span>
//                             <span className={`ml-2 ${
//                               plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                             }`}>
//                               /month
//                             </span>
//                           </div>
//                           <p className={`text-sm mt-2 ${
//                             plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'
//                           }`}>
//                             Billed annually: ${Math.floor(plan.price * 12 * 0.8)}/year (Save 20%)
//                           </p>
//                         </div>

//                         <button
//                           onClick={() => handlePlanSelect(plan.id)}
//                           className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 ${
//                             plan.plan_code === 'STARTER'
//                               ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white'
//                               : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                               ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white'
//                               : 'bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border border-gray-700'
//                           }`}
//                         >
//                           {isAuthenticated ? 'Go to Dashboard' : (
//                             <>
//                               <Sparkle className="h-5 w-5" />
//                               Start Free Trial
//                             </>
//                           )}
//                         </button>
//                       </div>

//                       <div className="mb-10">
//                         <h4 className={`font-bold text-lg mb-6 ${
//                           plan.plan_code === 'ENTERPRISE' ? 'text-white' : 'text-gray-900'
//                         }`}>
//                           Everything included:
//                         </h4>
//                         <ul className="space-y-3">
//                           {plan.features.slice(0, 8).map((feature, index) => (
//                             <li key={index} className="flex items-start gap-3">
//                               <div className={`p-1 rounded-lg mt-1 ${
//                                 plan.plan_code === 'STARTER'
//                                   ? 'bg-blue-100'
//                                   : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                   ? 'bg-amber-100'
//                                   : 'bg-gray-800'
//                               }`}>
//                                 <Check className={`h-4 w-4 ${
//                                   plan.plan_code === 'STARTER'
//                                     ? 'text-blue-600'
//                                     : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                     ? 'text-amber-600'
//                                     : 'text-emerald-400'
//                                 }`} />
//                               </div>
//                               <span className={
//                                 plan.plan_code === 'ENTERPRISE' ? 'text-gray-300' : 'text-gray-700'
//                               }>
//                                 {feature}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="pt-8 border-t border-gray-200">
//                         <div className="grid grid-cols-3 gap-6 text-center">
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxStaff}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Staff
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxTables}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Tables
//                             </p>
//                           </div>
//                           <div>
//                             <p className={`text-2xl font-bold mb-1 ${
//                               plan.plan_code === 'STARTER'
//                                 ? 'text-blue-600'
//                                 : plan.plan_code === 'BUSINESS' || plan.plan_code === 'PRO_PLUS'
//                                 ? 'text-amber-600'
//                                 : 'text-white'
//                             }`}>
//                               {plan.maxMenuItems}
//                             </p>
//                             <p className={plan.plan_code === 'ENTERPRISE' ? 'text-gray-400' : 'text-gray-500'}>
//                               Menu Items
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               <div className="mt-20 text-center">
//                 <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
//                   <div className="flex items-center gap-4">
//                     <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
//                       <Shield className="h-8 w-8 text-emerald-600" />
//                     </div>
//                     <div className="text-left">
//                       <p className="font-bold text-gray-900 text-lg">All plans include</p>
//                       <p className="text-gray-600">14-day free trial • No credit card required • Cancel anytime</p>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => handleGetStarted()}
//                     className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3"
//                   >
//                     <Sparkle className="h-5 w-5" />
//                     Start Free Trial
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 mb-6">
//               <Award className="h-4 w-4 text-rose-600" />
//               <span className="text-sm font-semibold text-rose-700">CUSTOMER STORIES</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Trusted by the
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
//                   World's Best Hotels
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Join luxury hotels and Michelin-star restaurants that trust HotelEase
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {TESTIMONIALS.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <div className="flex items-center gap-2 mb-8">
//                   {[...Array(5)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className={`h-5 w-5 ${
//                         i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
//                       }`}
//                     />
//                   ))}
//                 </div>

//                 <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">"{testimonial.content}"</p>

//                 <div className="flex items-center gap-4">
//                   <div className={`${testimonial.avatarGradient} h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}>
//                     {testimonial.name.charAt(0)}
//                   </div>
//                   <div>
//                     <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
//                     <p className="text-gray-500">{testimonial.role}</p>
//                     <p className="text-sm text-amber-600 font-semibold">{testimonial.hotel}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Testimonials CTA */}
//           <div className="mt-20 text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 max-w-3xl mx-auto">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Ready to Join Them?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Start your journey with HotelEase today and transform your hotel operations.
//               </p>
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//               >
//                 <Sparkle className="h-5 w-5" />
//                 Start Your Free Trial
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Integrations Section */}
//       <section id="integrations" className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
//               <Zap className="h-4 w-4 text-blue-600" />
//               <span className="text-sm font-semibold text-blue-700">SEAMLESS INTEGRATIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Works Perfectly With
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
//                   Your Favorite Tools
//                 </span>
//               </span>
//             </h2>
//             <p className="text-lg sm:text-xl text-gray-600">
//               Connect HotelEase with your existing business tools and workflows
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
//             {INTEGRATIONS.map((integration, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
//               >
//                 <div className={`p-4 rounded-xl bg-gradient-to-br ${integration.color} mb-4`}>
//                   <div className="text-white">
//                     {integration.icon}
//                   </div>
//                 </div>
//                 <p className="font-semibold text-gray-900 text-sm text-center">{integration.name}</p>
//               </div>
//             ))}
//           </div>

//           {/* Integrations CTA */}
//           <div className="text-center">
//             <button
//               onClick={() => handleGetStarted()}
//               className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto"
//             >
//               <Zap className="h-5 w-5" />
//               Start Free Trial with All Integrations
//               <ArrowRight className="h-5 w-5" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section id="faq" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
//               <HelpCircle className="h-4 w-4 text-gray-600" />
//               <span className="text-sm font-semibold text-gray-700">FREQUENTLY ASKED QUESTIONS</span>
//             </div>
//             <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
//               Common Questions
//               <span className="block mt-4">
//                 <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
//                     Answered
//                 </span>
//               </span>
//             </h2>
//           </div>

//           <div className="space-y-6 mb-16">
//             {[
//               {
//                 question: "How long is the free trial?",
//                 answer: "All plans include a full-featured 14-day free trial. No credit card required. You can upgrade, downgrade, or cancel at any time."
//               },
//               {
//                 question: "Can I switch plans later?",
//                 answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
//               },
//               {
//                 question: "Is there a setup fee?",
//                 answer: "No, there are no setup fees or hidden charges. You only pay the monthly subscription fee for the plan you choose."
//               },
//               {
//                 question: "Do you offer discounts for annual billing?",
//                 answer: "Yes! Choose annual billing and save 20% on all plans. You'll get all the same features at a discounted rate."
//               },
//               {
//                 question: "What kind of support do you offer?",
//                 answer: "We offer email support for all plans, with priority phone support and dedicated account managers for higher-tier plans."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
//                   <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
//                     <HelpCircle className="h-5 w-5 text-amber-600" />
//                   </div>
//                   {faq.question}
//                 </h3>
//                 <p className="text-gray-600 pl-12">{faq.answer}</p>
//               </div>
//             ))}
//           </div>

//           {/* FAQ CTA */}
//           <div className="text-center">
//             <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
//               <h3 className="text-3xl font-bold text-gray-900 mb-6">
//                 Still Have Questions?
//               </h3>
//               <p className="text-gray-600 text-lg mb-8">
//                 Our team is ready to help you get started with HotelEase.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 justify-center">
//                 <button
//                   onClick={() => handleGetStarted()}
//                   className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3"
//                 >
//                   <Sparkle className="h-5 w-5" />
//                   Start Free Trial Now
//                 </button>
//                 <button
//                   onClick={handleDemoLogin}
//                   className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3"
//                 >
//                   <Play className="h-5 w-5" />
//                   Schedule a Demo
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-24 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//         <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 animate-gradient-x"></div>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
//             backgroundSize: '30px 30px'
//           }}></div>
//         </div>

//         <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
//           <div className="text-center">
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
//               <Target className="h-5 w-5 text-amber-300" />
//               <span className="text-amber-100 font-semibold">READY TO TRANSFORM YOUR BUSINESS?</span>
//             </div>

//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-10">
//               Experience the Future of
//               <span className="block mt-6">
//                 <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
//                   Hotel Management
//                 </span>
//               </span>
//             </h2>

//             <p className="text-xl sm:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
//               Join thousands of successful hotels and restaurants who have transformed their operations with HotelEase.
//               Start your journey to excellence today.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
//               <button
//                 onClick={() => handleGetStarted()}
//                 className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4"
//               >
//                 <Sparkle className="h-6 w-6" />
//                 {isAuthenticated ? 'Go to Dashboard' : 'Start Your Free Trial'}
//                 <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
//               </button>

//               <button
//                 onClick={handleDemoLogin}
//                 className="group border-2 border-gray-700 hover:border-amber-500 text-white hover:text-amber-300 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-4"
//               >
//                 <Play className="h-6 w-6" />
//                 Schedule a Demo
//                 <span className="text-sm text-gray-400 group-hover:text-amber-400">(30 min)</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
//                 <span>No setup fees</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                 <span>14-day free trial</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                 <span>No credit card required</span>
//               </div>
//               <div className="flex items-center gap-3 justify-center text-gray-400">
//                 <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
//                 <span>Cancel anytime</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white pt-16 pb-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
//             <div>
//               <div className="flex items-center gap-3 mb-8">
//                 <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
//                   <Hotel className="h-7 w-7" />
//                 </div>
//                 <div>
//                   <span className="text-2xl font-bold">HotelEase</span>
//                   <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
//                 </div>
//               </div>
//               <p className="text-gray-400 mb-8 leading-relaxed">
//                 The premier hotel management platform for luxury establishments worldwide.
//                 Transforming hospitality operations since 2018.
//               </p>
//               <div className="flex items-center gap-4">
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Facebook className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Twitter className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Instagram className="h-5 w-5" />
//                 </a>
//                 <a href="#" className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors">
//                   <Linkedin className="h-5 w-5" />
//                 </a>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Product</h4>
//               <ul className="space-y-4">
//                 <li><button onClick={handleViewFeatures} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Features</button></li>
//                 <li><button onClick={handleViewPricing} className="text-gray-400 hover:text-amber-300 transition-colors text-left">Pricing</button></li>
//                 <li><a href="#integrations" className="text-gray-400 hover:text-amber-300 transition-colors">Integrations</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">API Documentation</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Company</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">About Us</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Careers</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Blog</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Contact Sales</a></li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-bold text-lg mb-8 text-amber-100">Resources</h4>
//               <ul className="space-y-4">
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Help Center</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Documentation</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Community</a></li>
//                 <li><a href="#" className="text-gray-400 hover:text-amber-300 transition-colors">Partners</a></li>
//               </ul>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
//             <p className="text-gray-400">
//               {/* &copy; {new Date().getFullYear()} HotelEase. All rights reserved. */} date
//             </p>
//             <div className="flex items-center gap-8">
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Privacy Policy</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Terms of Service</a>
//               <a href="#" className="text-gray-400 hover:text-amber-300 transition-colors text-sm">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Floating Action Buttons - FIXED POSITIONING */}
//       {isAuthenticated ? (
//         <>
//           {/* Dashboard button - bottom left */}
//           <button
//             onClick={handleGoToDashboard}
//             className="fixed bottom-8 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Go to Dashboard"
//           >
//             <div className="flex items-center gap-2">
//               <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Dashboard</span>
//             </div>
//           </button>

//           {/* Logout button - bottom right */}
//           <button
//             onClick={handleLogout}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group"
//             title="Logout (Demo)"
//           >
//             <div className="flex items-center gap-2">
//               <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
//               <span className="text-sm font-semibold">Logout</span>
//             </div>
//           </button>
//         </>
//       ) : (
//         <>
//           {/* Start Free Trial button - bottom left */}
//           <button
//             onClick={() => handleGetStarted()}
//             className="fixed bottom-8 left-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group flex items-center gap-2"
//             title="Start Free Trial"
//           >
//             <Sparkle className="h-5 w-5" />
//             <span className="text-sm font-semibold">Start Free Trial</span>
//           </button>

//           {/* Live Chat Widget - bottom right (smaller) */}
//           <button
//             onClick={() => {
//               // Open chat or show chat modal
//               toast.success('Chat support will be available soon!', {
//                 icon: '💬',
//                 style: {
//                   background: '#1f2937',
//                   color: '#fff',
//                   borderRadius: '12px',
//                   border: '1px solid #374151',
//                 },
//               })
//             }}
//             className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-3 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110"
//             title="Live Chat"
//           >
//             <MessageCircle className="h-5 w-5" />
//           </button>
//         </>
//       )}
//     </div>
//   )
// }

"use client";

import { useState, useEffect, useRef } from "react";
import {
  Hotel,
  Menu,
  X,
  Check,
  Star,
  ArrowRight,
  Users,
  BarChart3,
  CreditCard,
  UtensilsCrossed,
  ChefHat,
  Table,
  Receipt,
  Smartphone,
  Headphones,
  Shield,
  Zap,
  TrendingUp,
  Cloud,
  QrCode,
  TabletSmartphone,
  Calendar,
  Clock,
  MessageSquare,
  Award,
  Trophy,
  Sparkles,
  BadgeCheck,
  Target,
  ArrowUpRight,
  ChevronRight,
  LogOut,
  Play,
  Sparkle,
  Gem,
  Crown,
  Loader2,
  Clock4,
  Building,
  Coffee,
  Utensils,
  MapPin,
  Phone,
  Mail,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CreditCard as CreditCardIcon,
  Bell,
  Settings,
  HelpCircle,
  FileText,
  Lock,
  CheckCircle,
  Award as AwardIcon,
  Users as UsersIcon,
  CloudRain,
  Server,
  Database,
  Cpu,
  Wifi,
  ShieldCheck,
  Zap as ZapIcon,
  BarChart,
  PieChart,
  LineChart,
  DollarSign,
  ShoppingBag,
  Package,
  Truck,
  Home,
  Gift,
  Tag,
  Percent,
  ShoppingCart,
  Heart,
  BookOpen,
  LifeBuoy,
  MessageCircle,
  Video,
  Download,
  Upload,
  Folder,
  File,
  Image,
  Music,
  Film,
  Camera,
  Mic,
  Headset,
  Keyboard,
  Mouse,
  Monitor,
  Printer,
  HardDrive,
  Battery,
  BatteryCharging,
  Power,
  WifiOff,
  Bluetooth,
  Radio,
  Tv,
  Smartphone as SmartphoneIcon,
  Watch,
  Laptop,
  Tablet,
  Speaker,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store/index";
import { fetchSubscriptionPlans } from "@/store/slices/subscriptionSlice";
import { logoutHotel, checkAuthStatus } from "@/store/slices/hotelAuthSlice";
import { useHotelAuth } from "@/hooks/useHotelAuth";
import Cookies from "js-cookie";

// ===================== TYPES =====================
interface User {
  id: string;
  email: string;
  name: string;
  isSubscribed: boolean;
  role?: "hotel_admin" | "staff";
  hotelName?: string;
  subscriptionPlan?: string;
}

interface SubscriptionPlan {
  id: string;
  plan_name: string;
  plan_code: string;
  description: string;
  price_per_month: string;
  max_staff: number;
  max_tables: number;
  max_menu_items: number;
  features: {
    [key: string]: boolean;
  };
  display_order: number;
  is_active: boolean;
  created_at: string;
}

interface UISubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  features: string[];
  popular?: boolean;
  maxStaff: number;
  maxTables: number;
  maxMenuItems: number;
  analytics: boolean;
  support: "basic" | "priority" | "dedicated";
  plan_code: string;
}

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  bgGradient: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  hotel: string;
  content: string;
  rating: number;
  avatarGradient: string;
}

interface Stat {
  label: string;
  value: string;
  change: string;
  color: string;
}

// ===================== HELPER FUNCTIONS =====================
const transformApiPlanToUiPlan = (
  apiPlan: SubscriptionPlan,
): UISubscriptionPlan => {
  const featuresList: string[] = [];

  const featureMap: Record<string, string> = {
    multi_device: "Multi-device access",
    basic_reports: "Basic analytics & reports",
    advanced_reports: "Advanced analytics dashboard",
    full_reports: "Comprehensive analytics suite",
    email_support: "Email support (24/7)",
    phone_support: "Phone support",
    sms_support: "SMS notifications & support",
    sms_notifications: "SMS notifications",
    custom_branding: "Custom branding & white-label",
    online_ordering: "Online ordering system",
    table_reservations: "Table reservation management",
    kitchen_display: "Kitchen display system (KDS)",
    loyalty_program: "Loyalty program & rewards",
    multi_branch: "Multi-branch management",
    priority_support: "Priority support",
    dedicated_manager: "Dedicated account manager",
    custom_integrations: "Custom API integrations",
  };

  Object.entries(apiPlan.features).forEach(([key, value]) => {
    if (value && featureMap[key]) {
      featuresList.push(featureMap[key]);
    }
  });

  featuresList.push(`Up to ${apiPlan.max_staff} staff members`);
  featuresList.push(`${apiPlan.max_tables} tables maximum`);
  featuresList.push(`${apiPlan.max_menu_items} menu items`);
  featuresList.push("Real-time order management");
  featuresList.push("Mobile POS system");
  featuresList.push("QR code ordering");

  if (parseFloat(apiPlan.price_per_month) >= 79.99) {
    featuresList.push("Inventory management");
    featuresList.push("Staff scheduling");
  }
  if (parseFloat(apiPlan.price_per_month) >= 119.99) {
    featuresList.push("Customer relationship management");
    featuresList.push("Marketing automation");
  }

  let supportType: "basic" | "priority" | "dedicated" = "basic";
  if (apiPlan.features.priority_support) {
    supportType = "priority";
  }
  if (apiPlan.features.dedicated_manager) {
    supportType = "dedicated";
  }

  return {
    id: apiPlan.id,
    name: apiPlan.plan_name,
    description: apiPlan.description,
    price: parseFloat(apiPlan.price_per_month),
    billingCycle: "monthly",
    features: featuresList,
    popular:
      apiPlan.plan_code === "BUSINESS" ||
      apiPlan.plan_code === "ENTERPRISE" ||
      apiPlan.plan_code === "PREMIUM",
    maxStaff: apiPlan.max_staff,
    maxTables: apiPlan.max_tables,
    maxMenuItems: apiPlan.max_menu_items,
    analytics:
      apiPlan.features.advanced_reports ||
      apiPlan.features.full_reports ||
      apiPlan.features.basic_reports,
    support: supportType,
    plan_code: apiPlan.plan_code,
  };
};

// ===================== CONSTANTS =====================
const FEATURES: Feature[] = [
  {
    title: "Smart Order Management",
    description:
      "Streamline orders with real-time updates, split bills, and special requests handling. Reduce order errors by 95% with our intelligent system.",
    icon: <UtensilsCrossed className="h-8 w-8" />,
    gradient: "from-amber-500 to-orange-500",
    bgGradient: "bg-gradient-to-br from-amber-50 to-orange-50",
  },
  {
    title: "Kitchen Display System",
    description:
      "Digital order tickets with prep timers, course sequencing, and chef notes. Optimize kitchen workflow and reduce preparation time by 40%.",
    icon: <ChefHat className="h-8 w-8" />,
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "bg-gradient-to-br from-rose-50 to-pink-50",
  },
  {
    title: "Table Management",
    description:
      "Interactive floor plan with live status, reservations, and waitlist management. Increase table turnover by 25% with smart seating algorithms.",
    icon: <Table className="h-8 w-8" />,
    gradient: "from-emerald-500 to-teal-600",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50",
  },
  {
    title: "Staff Management",
    description:
      "Role-based permissions, shift scheduling, and performance tracking. Reduce scheduling conflicts by 60% with automated shift management.",
    icon: <Users className="h-8 w-8" />,
    gradient: "from-blue-500 to-cyan-600",
    bgGradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
  },
  {
    title: "Advanced Analytics",
    description:
      "Real-time insights on sales, inventory, customer behavior, and profitability. Make data-driven decisions with predictive analytics.",
    icon: <TrendingUp className="h-8 w-8" />,
    gradient: "from-violet-500 to-purple-600",
    bgGradient: "bg-gradient-to-br from-violet-50 to-purple-50",
  },
  {
    title: "Mobile POS System",
    description:
      "Take orders and process payments anywhere with our intuitive mobile app. Increase staff efficiency by 35% with mobile order taking.",
    icon: <TabletSmartphone className="h-8 w-8" />,
    gradient: "from-indigo-500 to-blue-600",
    bgGradient: "bg-gradient-to-br from-indigo-50 to-blue-50",
  },
  {
    title: "Inventory Management",
    description:
      "Automated stock tracking, purchase orders, and waste reduction. Reduce inventory costs by 20% with smart forecasting.",
    icon: <Package className="h-8 w-8" />,
    gradient: "from-green-500 to-emerald-600",
    bgGradient: "bg-gradient-to-br from-green-50 to-emerald-50",
  },
  {
    title: "Customer CRM",
    description:
      "Track guest preferences, dining history, and special requests. Increase repeat business by 45% with personalized service.",
    icon: <UsersIcon className="h-8 w-8" />,
    gradient: "from-pink-500 to-rose-600",
    bgGradient: "bg-gradient-to-br from-pink-50 to-rose-50",
  },
  {
    title: "Multi-Branch Control",
    description:
      "Centralized management for multiple locations with consolidated reporting. Streamline operations across all your properties.",
    icon: <Building className="h-8 w-8" />,
    gradient: "from-cyan-500 to-blue-600",
    bgGradient: "bg-gradient-to-br from-cyan-50 to-blue-50",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Isabella Rossi",
    role: "General Manager",
    hotel: "Grand Palazzo Hotel",
    content:
      "HotelEase transformed our 5-star hotel operations. Guest satisfaction increased by 40% and operational costs decreased by 25%. The ROI was achieved in just 3 months.",
    rating: 5,
    avatarGradient: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
  {
    id: "2",
    name: "Kenji Tanaka",
    role: "Restaurant Owner",
    hotel: "Sakura Fine Dining",
    content:
      "The kitchen display system reduced order errors by 95%. Our chefs are more efficient and our customers happier than ever. Service speed improved by 30%.",
    rating: 5,
    avatarGradient: "bg-gradient-to-br from-emerald-500 to-teal-600",
  },
  {
    id: "3",
    name: "Sophia Chen",
    role: "Operations Director",
    hotel: "The Royal Resort",
    content:
      "We manage 3 restaurants and 2 bars seamlessly with HotelEase. The multi-branch feature is a game-changer for our business. Reporting time reduced by 70%.",
    rating: 5,
    avatarGradient: "bg-gradient-to-br from-violet-500 to-purple-600",
  },
  {
    id: "4",
    name: "Marcus Johnson",
    role: "Hotel Director",
    hotel: "Oceanview Luxury Resort",
    content:
      "The analytics dashboard provided insights we never had before. We optimized menu pricing and increased profitability by 18% in the first quarter.",
    rating: 5,
    avatarGradient: "bg-gradient-to-br from-blue-500 to-cyan-600",
  },
  {
    id: "5",
    name: "Elena Vasquez",
    role: "F&B Manager",
    hotel: "Metropolitan Suites",
    content:
      "Staff scheduling became effortless. We reduced overtime costs by 35% while maintaining excellent service quality. The mobile app is a game-changer.",
    rating: 5,
    avatarGradient: "bg-gradient-to-br from-rose-500 to-pink-600",
  },
  {
    id: "6",
    name: "Ahmed Al-Farsi",
    role: "CEO",
    hotel: "Desert Oasis Hotels",
    content:
      "From implementation to daily use, the support has been exceptional. Our 12 properties now operate seamlessly with centralized control and reporting.",
    rating: 5,
    avatarGradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
  },
];

const STATS: Stat[] = [
  {
    label: "Hotels & Restaurants",
    value: "2,500+",
    change: "+40% this year",
    color: "text-amber-600",
  },
  {
    label: "Orders Processed",
    value: "10M+",
    change: "Monthly volume",
    color: "text-emerald-600",
  },
  {
    label: "Customer Rating",
    value: "4.9/5",
    change: "Based on 1,200 reviews",
    color: "text-rose-600",
  },
  {
    label: "Staff Managed",
    value: "50K+",
    change: "Worldwide users",
    color: "text-blue-600",
  },
  {
    label: "Countries",
    value: "45+",
    change: "Global presence",
    color: "text-violet-600",
  },
  {
    label: "Uptime",
    value: "99.9%",
    change: "Service reliability",
    color: "text-cyan-600",
  },
];

const INTEGRATIONS = [
  {
    name: "QuickBooks",
    icon: <DollarSign className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Xero",
    icon: <FileText className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600",
  },
  {
    name: "Stripe",
    icon: <CreditCardIcon className="h-6 w-6" />,
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "PayPal",
    icon: <ShoppingBag className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Square",
    icon: <CreditCard className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Shopify",
    icon: <ShoppingCart className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
  },
  {
    name: "Mailchimp",
    icon: <Mail className="h-6 w-6" />,
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "Slack",
    icon: <MessageSquare className="h-6 w-6" />,
    color: "from-pink-500 to-rose-600",
  },
];

// ===================== MAIN COMPONENT =====================
export default function HotelEaseLandingPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const { plans, loading, error } = useSelector(
    (state: RootState) => state.subscription,
  );

  const {
    isAuthenticated,
    hotel,
    hotelSlug,
    isLoading: authLoading,
    error: authError,
  } = useHotelAuth();

  const pricingRef = useRef<HTMLElement | null>(null);
  const fetchedRef = useRef(false);

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [manualAuthCheck, setManualAuthCheck] = useState(false);
  const displayName = hotel?.hotel_name || hotel?.admin_name || hotelSlug || "";

  useEffect(() => {
    const el = pricingRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;

        if (fetchedRef.current) return;
        if (plans?.length) return;
        if (loading) return;

        fetchedRef.current = true;
        dispatch(fetchSubscriptionPlans());
        console.log("Fetching subscription plans via IntersectionObserver...");
        obs.disconnect();
      },
      {
        root: null,
        rootMargin: "200px 0px",
        threshold: 0.1,
      },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [dispatch, plans?.length, loading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % FEATURES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation handlers
  const handleGetStarted = (planId?: string) => {
    if (isAuthenticated) {
      handleGoToDashboard();
    } else if (planId) {
      router.push(`/register?plan=${planId}`);
    } else {
      router.push("/register");
    }
  };

  const handlePlanSelect = (planId: string) => {
    if (isAuthenticated) {
      handleGoToDashboard();
    } else {
      router.push(`/register?plan=${planId}`);
    }
  };

  const handleGoToDashboard = () => {
    if (hotelSlug) {
      router.push(`/hotel/${hotelSlug}/dashboard`);
      // } else if (isAuthenticated) {
      //   const slug = hotel?.hotel_slug || Cookies.get('hotel_slug')
      //   if (slug) {
      //     router.push(`/hotel/${slug}/dashboard`)
    } else {
      dispatch(checkAuthStatus()).then((action: any) => {
        if (action.payload?.user?.hotel_slug) {
          router.push(`/hotel/${action.payload.user.hotel_slug}/dashboard`);
        } else {
          router.push("/login");
        }
      });
    }
    // } else {
    //   router.push('/slugn')
    // }
  };

  const handleLogout = () => {
    Cookies.remove("hotel_token");
    setUser(null);
    toast.success("Logged out successfully!", {
      icon: "👋",
      style: {
        background: "#1f2937",
        color: "#fff",
        borderRadius: "12px",
        border: "1px solid #374151",
      },
    });
  };

  const handleDemoLogin = () => {
    setUser({
      id: "demo-123",
      email: "demo@hotelease.com",
      name: "Demo User",
      isSubscribed: true,
      role: "hotel_admin",
      hotelName: "Demo Hotel",
      subscriptionPlan: "PROFESSIONAL",
    });
    toast.success("Demo login successful!", {
      icon: "🎉",
      style: {
        background: "#1f2937",
        color: "#fff",
        borderRadius: "12px",
        border: "1px solid #374151",
      },
    });
  };

  const handleViewFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewTestimonials = () => {
    document
      .getElementById("testimonials")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Transform API plans to UI plans
  const uiPlans = plans.map((plan: any) => transformApiPlanToUiPlan(plan));
  const sortedUiPlans = [...uiPlans].sort((a, b) => {
    if (a.popular && !b.popular) return -1;
    if (!a.popular && b.popular) return 1;
    return a.price - b.price;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Toaster */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "12px",
            border: "1px solid #374151",
            padding: "16px",
          },
          success: {
            iconTheme: {
              primary: "#f59e0b",
              secondary: "#1f2937",
            },
          },
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg py-3"
            : "bg-white/80 backdrop-blur-xl border-b border-gray-100 py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div
              role="button"
              tabIndex={0}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onKeyDown={(e) =>
                e.key === "Enter" &&
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="flex items-center gap-3 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg p-2"
            >
              <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl shadow-lg">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  HotelEase
                </span>
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-10">
              <button
                onClick={handleViewFeatures}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-3 py-1"
              >
                Features
              </button>
              <button
                onClick={handleViewPricing}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-3 py-1"
              >
                Pricing
              </button>
              <button
                onClick={handleViewTestimonials}
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-3 py-1"
              >
                Testimonials
              </button>
              <a
                href="#integrations"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-3 py-1"
              >
                Integrations
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-amber-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-3 py-1"
              >
                FAQ
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-700 font-medium text-sm">
                    Welcome, {displayName}
                  </span>
                  <button
                    onClick={handleGoToDashboard}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    Go to Dashboard
                  </button>
                </div>
              ) : (
                <>
                  <button
                    onClick={() => router.push("/slug")}
                    className="text-gray-700 hover:text-amber-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-amber-50 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    Log in
                  </button>
                  <button
                    onClick={() => router.push("/register")}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <Sparkle className="h-3.5 w-3.5" />
                    Register
                  </button>
                </>
              )}
            </div>

            <button
              className="lg:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-100 bg-white/95 backdrop-blur-xl mt-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => {
                    handleViewFeatures();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Features
                </button>
                <button
                  onClick={() => {
                    handleViewPricing();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Pricing
                </button>
                <button
                  onClick={() => {
                    handleViewTestimonials();
                    setIsMenuOpen(false);
                  }}
                  className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Testimonials
                </button>
                <a
                  href="#integrations"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Integrations
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-amber-600 font-medium py-3 px-4 hover:bg-amber-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  FAQ
                </a>
                <div className="pt-4 border-t border-gray-100">
                  {isAuthenticated ? (
                    <>
                      <div className="mb-3 px-4">
                        <p className="text-sm text-gray-500">Logged in as</p>
                        <p className="font-semibold text-gray-900 text-sm">
                          {user?.name}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          handleGoToDashboard();
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        Go to Dashboard
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          router.push("/login");
                          setIsMenuOpen(false);
                        }}
                        className="w-full text-gray-700 hover:text-amber-600 font-semibold py-3 px-6 hover:bg-amber-50 rounded-xl text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        Log in
                      </button>
                      <button
                        onClick={() => {
                          router.push("/register");
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      >
                        <Sparkle className="h-3.5 w-3.5" />
                        Register
                      </button>
                    </>
                  )}
                  <button
                    onClick={handleLogout}
                    className="mx-2 my-5 border border-black"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-orange-50"></div>
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white/80 to-transparent"></div>

        {/* Animated blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl animate-blob"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full opacity-20 blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 mb-8 animate-float">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"></div>
                <div
                  className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse-glow"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
              <span className="text-sm font-semibold text-amber-800">
                Trusted by 2,500+ luxury hotels & restaurants worldwide
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Revolutionize Your
              <span className="block mt-4">
                <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-400 bg-clip-text text-transparent">
                  Hotel Management
                </span>
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              The all-in-one SaaS platform designed exclusively for luxury
              hotels and fine dining establishments. Streamline operations,
              delight guests, and maximize revenue with AI-powered hospitality
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <button
                onClick={() => handleGetStarted()}
                className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Sparkle className="h-5 w-5" />
                Start Free 14-Day Trial
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={handleDemoLogin}
                className="group border-2 border-gray-300 hover:border-amber-500 text-gray-700 hover:text-amber-600 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Play className="h-5 w-5" />
                Watch Live Demo
                <span className="text-sm text-gray-500 group-hover:text-amber-500">
                  (2 min)
                </span>
              </button>
            </div>

            {/* Quick Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              {/* Card 1 */}
              <div
                role="button"
                tabIndex={0}
                onClick={handleViewFeatures}
                onKeyDown={(e) => e.key === "Enter" && handleViewFeatures()}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl">
                    <Sparkles className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Explore Features
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Discover how HotelEase can transform your operations
                </p>
                <div className="flex items-center text-amber-600 font-semibold text-sm">
                  View all features
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Card 2 */}
              <div
                role="button"
                tabIndex={0}
                onClick={handleViewPricing}
                onKeyDown={(e) => e.key === "Enter" && handleViewPricing()}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl">
                    <CreditCardIcon className="h-6 w-6 text-violet-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    View Pricing
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Choose the perfect plan for your business needs
                </p>
                <div className="flex items-center text-violet-600 font-semibold text-sm">
                  See all plans
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Card 3 */}
              <div
                role="button"
                tabIndex={0}
                onClick={handleViewTestimonials}
                onKeyDown={(e) => e.key === "Enter" && handleViewTestimonials()}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl">
                    <Award className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Read Stories
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  See how luxury hotels succeed with HotelEase
                </p>
                <div className="flex items-center text-rose-600 font-semibold text-sm">
                  View testimonials
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {STATS.map((stat, index) => (
                <div key={index} className="text-center p-4">
                  <p
                    className={`text-3xl sm:text-4xl font-bold mb-2 ${stat.color}`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-gray-900 font-semibold mb-1 text-sm sm:text-base">
                    {stat.label}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {stat.change}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-6">
              <BadgeCheck className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-emerald-700">
                PREMIUM FEATURES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for
              <span className="block mt-4">
                <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Operational Excellence
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Sophisticated tools designed for the most demanding hospitality
              businesses
            </p>
          </div>

          {/* Featured Feature Showcase */}
          <div className="mb-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div
                  className={`mb-6 p-5 rounded-2xl ${FEATURES[activeFeature].bgGradient} w-fit`}
                >
                  <div
                    className={`bg-gradient-to-br ${FEATURES[activeFeature].gradient} p-3 rounded-xl`}
                  >
                    {FEATURES[activeFeature].icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  {FEATURES[activeFeature].title}
                </h3>
                <p className="text-gray-300 mb-8 text-lg">
                  {FEATURES[activeFeature].description}
                </p>
                <button
                  onClick={() => handleGetStarted()}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  Start Free Trial
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {FEATURES.slice(0, 6).map((feature, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveFeature(index)}
                    className={`p-4 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                      activeFeature === index
                        ? "bg-white/10 backdrop-blur-sm border border-white/20"
                        : "bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${feature.bgGradient} mb-3`}
                    >
                      <div
                        className={`bg-gradient-to-br ${feature.gradient} p-2 rounded-lg`}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      {feature.title.split(" ")[0]}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* All Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`mb-6 p-5 rounded-2xl ${feature.bgGradient} w-fit`}
                >
                  <div
                    className={`bg-gradient-to-br ${feature.gradient} p-3 rounded-xl`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-8">{feature.description}</p>
                <button
                  onClick={() => handleGetStarted()}
                  className="flex items-center text-amber-600 font-semibold hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg px-2 py-1"
                >
                  Try this feature free
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>

          {/* Platform Highlights */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                  <ShieldCheck className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Enterprise Security
                  </h4>
                  <p className="text-gray-600">Bank-level protection</p>
                </div>
              </div>
              <p className="text-gray-700">
                SOC 2 Type II certified with end-to-end encryption and regular
                security audits.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl">
                  <Cloud className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Cloud Infrastructure
                  </h4>
                  <p className="text-gray-600">99.9% uptime guarantee</p>
                </div>
              </div>
              <p className="text-gray-700">
                Built on AWS with global CDN for lightning-fast performance
                worldwide.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
                  <Headphones className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    24/7 Premium Support
                  </h4>
                  <p className="text-gray-600">Dedicated account managers</p>
                </div>
              </div>
              <p className="text-gray-700">
                Round-the-clock support with dedicated account managers for
                enterprise clients.
              </p>
            </div>
          </div>

          {/* Feature CTA */}
          <div className="mt-16 text-center">
            <button
              onClick={() => handleGetStarted()}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <Sparkle className="h-5 w-5" />
              Start Your Free Trial with All Features
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        ref={(node) => {
          pricingRef.current = node;
        }}
        className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 mb-6">
              <Trophy className="h-4 w-4 text-violet-600" />
              <span className="text-sm font-semibold text-violet-700">
                FLEXIBLE PLANS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent
              <span className="block mt-4">
                <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
                  Pricing
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Choose the perfect plan for your business. All plans include a
              14-day free trial with full access.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="text-center">
                <Loader2 className="h-12 w-12 text-amber-500 animate-spin mx-auto mb-4" />
                <p className="text-gray-600">Loading subscription plans...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
                <div className="p-3 bg-red-100 rounded-full w-fit mx-auto mb-4">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-red-600 font-semibold mb-2">
                  Error loading plans
                </p>
                <p className="text-gray-600 mb-4">{error}</p>
                <button
                  onClick={() => dispatch(fetchSubscriptionPlans())}
                  className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  Retry
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {sortedUiPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
                      plan.popular
                        ? "transform lg:scale-105 shadow-2xl border-2 border-amber-500"
                        : "shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-amber-200"
                    }`}
                  >
                    <div
                      className={`absolute inset-0 ${
                        plan.plan_code === "STARTER"
                          ? "bg-gradient-to-b from-blue-50 to-indigo-50"
                          : plan.plan_code === "BUSINESS" ||
                              plan.plan_code === "PRO_PLUS"
                            ? "bg-gradient-to-b from-amber-50 to-orange-50"
                            : "bg-gradient-to-b from-gray-900 to-gray-800"
                      }`}
                    ></div>

                    <div
                      className={`relative p-8 h-full ${
                        plan.plan_code === "ENTERPRISE"
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm font-semibold shadow-2xl flex items-center gap-2">
                            <Crown className="h-4 w-4" />
                            MOST POPULAR
                          </div>
                        </div>
                      )}

                      {plan.plan_code === "ENTERPRISE" && (
                        <div className="absolute top-6 right-6">
                          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-xl">
                            <Gem className="h-6 w-6 text-white" />
                          </div>
                        </div>
                      )}

                      <div className="mb-10">
                        <div className="flex items-center gap-3 mb-4">
                          <h3
                            className={`text-3xl font-bold ${
                              plan.plan_code === "STARTER"
                                ? "text-blue-600"
                                : plan.plan_code === "BUSINESS" ||
                                    plan.plan_code === "PRO_PLUS"
                                  ? "text-amber-600"
                                  : "text-white"
                            }`}
                          >
                            {plan.name}
                          </h3>
                          {plan.plan_code === "ENTERPRISE" && (
                            <span className="px-3 py-1 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 rounded-full text-sm font-semibold">
                              PREMIUM
                            </span>
                          )}
                        </div>
                        <p
                          className={`mb-6 ${
                            plan.plan_code === "ENTERPRISE"
                              ? "text-gray-300"
                              : "text-gray-600"
                          }`}
                        >
                          {plan.description}
                        </p>

                        <div className="mb-8">
                          <div className="flex items-baseline">
                            <span
                              className={`text-5xl font-bold ${
                                plan.plan_code === "STARTER"
                                  ? "text-blue-700"
                                  : plan.plan_code === "BUSINESS" ||
                                      plan.plan_code === "PRO_PLUS"
                                    ? "text-amber-700"
                                    : "text-white"
                              }`}
                            >
                              ${plan.price}
                            </span>
                            <span
                              className={`ml-2 ${
                                plan.plan_code === "ENTERPRISE"
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }`}
                            >
                              /month
                            </span>
                          </div>
                          <p
                            className={`text-sm mt-2 ${
                              plan.plan_code === "ENTERPRISE"
                                ? "text-gray-400"
                                : "text-gray-500"
                            }`}
                          >
                            Billed annually: $
                            {Math.floor(plan.price * 12 * 0.8)}/year (Save 20%)
                          </p>
                        </div>

                        <button
                          onClick={() => handlePlanSelect(plan.id)}
                          className={`w-full py-4 px-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                            plan.plan_code === "STARTER"
                              ? "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                              : plan.plan_code === "BUSINESS" ||
                                  plan.plan_code === "PRO_PLUS"
                                ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white"
                                : "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white border border-gray-700"
                          }`}
                        >
                          {isAuthenticated ? (
                            "Go to Dashboard"
                          ) : (
                            <>
                              <Sparkle className="h-5 w-5" />
                              Start Free Trial
                            </>
                          )}
                        </button>
                      </div>

                      <div className="mb-10">
                        <h4
                          className={`font-bold text-lg mb-6 ${
                            plan.plan_code === "ENTERPRISE"
                              ? "text-white"
                              : "text-gray-900"
                          }`}
                        >
                          Everything included:
                        </h4>
                        <ul className="space-y-3">
                          {plan.features.slice(0, 8).map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div
                                className={`p-1 rounded-lg mt-1 ${
                                  plan.plan_code === "STARTER"
                                    ? "bg-blue-100"
                                    : plan.plan_code === "BUSINESS" ||
                                        plan.plan_code === "PRO_PLUS"
                                      ? "bg-amber-100"
                                      : "bg-gray-800"
                                }`}
                              >
                                <Check
                                  className={`h-4 w-4 ${
                                    plan.plan_code === "STARTER"
                                      ? "text-blue-600"
                                      : plan.plan_code === "BUSINESS" ||
                                          plan.plan_code === "PRO_PLUS"
                                        ? "text-amber-600"
                                        : "text-emerald-400"
                                  }`}
                                />
                              </div>
                              <span
                                className={
                                  plan.plan_code === "ENTERPRISE"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                                }
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-8 border-t border-gray-200">
                        <div className="grid grid-cols-3 gap-6 text-center">
                          <div>
                            <p
                              className={`text-2xl font-bold mb-1 ${
                                plan.plan_code === "STARTER"
                                  ? "text-blue-600"
                                  : plan.plan_code === "BUSINESS" ||
                                      plan.plan_code === "PRO_PLUS"
                                    ? "text-amber-600"
                                    : "text-white"
                              }`}
                            >
                              {plan.maxStaff}
                            </p>
                            <p
                              className={
                                plan.plan_code === "ENTERPRISE"
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }
                            >
                              Staff
                            </p>
                          </div>
                          <div>
                            <p
                              className={`text-2xl font-bold mb-1 ${
                                plan.plan_code === "STARTER"
                                  ? "text-blue-600"
                                  : plan.plan_code === "BUSINESS" ||
                                      plan.plan_code === "PRO_PLUS"
                                    ? "text-amber-600"
                                    : "text-white"
                              }`}
                            >
                              {plan.maxTables}
                            </p>
                            <p
                              className={
                                plan.plan_code === "ENTERPRISE"
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }
                            >
                              Tables
                            </p>
                          </div>
                          <div>
                            <p
                              className={`text-2xl font-bold mb-1 ${
                                plan.plan_code === "STARTER"
                                  ? "text-blue-600"
                                  : plan.plan_code === "BUSINESS" ||
                                      plan.plan_code === "PRO_PLUS"
                                    ? "text-amber-600"
                                    : "text-white"
                              }`}
                            >
                              {plan.maxMenuItems}
                            </p>
                            <p
                              className={
                                plan.plan_code === "ENTERPRISE"
                                  ? "text-gray-400"
                                  : "text-gray-500"
                              }
                            >
                              Menu Items
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-20 text-center">
                <div className="inline-flex flex-col sm:flex-row items-center gap-8 bg-gradient-to-r from-white to-gray-50 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl">
                      <Shield className="h-8 w-8 text-emerald-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-bold text-gray-900 text-lg">
                        All plans include
                      </p>
                      <p className="text-gray-600">
                        14-day free trial • No credit card required • Cancel
                        anytime
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleGetStarted()}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <Sparkle className="h-5 w-5" />
                    Start Free Trial
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-amber-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100 mb-6">
              <Award className="h-4 w-4 text-rose-600" />
              <span className="text-sm font-semibold text-rose-700">
                CUSTOMER STORIES
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Trusted by the
              <span className="block mt-4">
                <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
                  World's Best Hotels
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Join luxury hotels and Michelin-star restaurants that trust
              HotelEase
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-2 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-lg italic mb-10 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`${testimonial.avatarGradient} h-14 w-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500">{testimonial.role}</p>
                    <p className="text-sm text-amber-600 font-semibold">
                      {testimonial.hotel}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Join Them?
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Start your journey with HotelEase today and transform your hotel
                operations.
              </p>
              <button
                onClick={() => handleGetStarted()}
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Sparkle className="h-5 w-5" />
                Start Your Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section
        id="integrations"
        className="py-24 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 mb-6">
              <Zap className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-700">
                SEAMLESS INTEGRATIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Works Perfectly With
              <span className="block mt-4">
                <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
                  Your Favorite Tools
                </span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Connect HotelEase with your existing business tools and workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-16">
            {INTEGRATIONS.map((integration, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center"
              >
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${integration.color} mb-4`}
                >
                  <div className="text-white">{integration.icon}</div>
                </div>
                <p className="font-semibold text-gray-900 text-sm text-center">
                  {integration.name}
                </p>
              </div>
            ))}
          </div>

          {/* Integrations CTA */}
          <div className="text-center">
            <button
              onClick={() => handleGetStarted()}
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 mx-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Zap className="h-5 w-5" />
              Start Free Trial with All Integrations
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 mb-6">
              <HelpCircle className="h-4 w-4 text-gray-600" />
              <span className="text-sm font-semibold text-gray-700">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Common Questions
              <span className="block mt-4">
                <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Answered
                </span>
              </span>
            </h2>
          </div>

          <div className="space-y-6 mb-16">
            {[
              {
                question: "How long is the free trial?",
                answer:
                  "All plans include a full-featured 14-day free trial. No credit card required. You can upgrade, downgrade, or cancel at any time.",
              },
              {
                question: "Can I switch plans later?",
                answer:
                  "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
              },
              {
                question: "Is there a setup fee?",
                answer:
                  "No, there are no setup fees or hidden charges. You only pay the monthly subscription fee for the plan you choose.",
              },
              {
                question: "Do you offer discounts for annual billing?",
                answer:
                  "Yes! Choose annual billing and save 20% on all plans. You'll get all the same features at a discounted rate.",
              },
              {
                question: "What kind of support do you offer?",
                answer:
                  "We offer email support for all plans, with priority phone support and dedicated account managers for higher-tier plans.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg">
                    <HelpCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  {faq.question}
                </h3>
                <p className="text-gray-600 pl-12">{faq.answer}</p>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Our team is ready to help you get started with HotelEase.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => handleGetStarted()}
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <Sparkle className="h-5 w-5" />
                  Start Free Trial Now
                </button>
                <button
                  onClick={handleDemoLogin}
                  className="border-2 border-amber-500 text-amber-600 hover:bg-amber-50 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <Play className="h-5 w-5" />
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 animate-gradient-x"></div>
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-8">
              <Target className="h-5 w-5 text-amber-300" />
              <span className="text-amber-100 font-semibold">
                READY TO TRANSFORM YOUR BUSINESS?
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-10">
              Experience the Future of
              <span className="block mt-6">
                <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                  Hotel Management
                </span>
              </span>
            </h2>

            <p className="text-xl sm:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful hotels and restaurants who have
              transformed their operations with HotelEase. Start your journey to
              excellence today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={() => handleGetStarted()}
                className="group bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center justify-center gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Sparkle className="h-6 w-6" />
                {isAuthenticated ? "Go to Dashboard" : "Start Your Free Trial"}
                <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </button>

              <button
                onClick={handleDemoLogin}
                className="group border-2 border-gray-700 hover:border-amber-500 text-white hover:text-amber-300 px-8 sm:px-12 py-5 sm:py-6 rounded-2xl text-xl font-bold transition-all duration-300 flex items-center justify-center gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <Play className="h-6 w-6" />
                Schedule a Demo
                <span className="text-sm text-gray-400 group-hover:text-amber-400">
                  (30 min)
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div className="flex items-center gap-3 justify-center text-gray-400">
                <div className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-3 justify-center text-gray-400">
                <div
                  className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-3 justify-center text-gray-400">
                <div
                  className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.4s" }}
                ></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-3 justify-center text-gray-400">
                <div
                  className="h-2 w-2 bg-emerald-400 rounded-full animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                ></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl">
                  <Hotel className="h-7 w-7" />
                </div>
                <div>
                  <span className="text-2xl font-bold">HotelEase</span>
                  <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-1"></div>
                </div>
              </div>
              <p className="text-gray-400 mb-8 leading-relaxed">
                The premier hotel management platform for luxury establishments
                worldwide. Transforming hospitality operations since 2018.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-gray-800 hover:bg-amber-600 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-amber-100">Product</h4>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={handleViewFeatures}
                    className="text-gray-400 hover:text-amber-300 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleViewPricing}
                    className="text-gray-400 hover:text-amber-300 transition-colors text-left focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <a
                    href="#integrations"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-amber-100">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 text-amber-100">
                Resources
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-amber-300 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1 inline-block"
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} HotelEase. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-300 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 rounded px-2 py-1"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons - FIXED POSITIONING */}
      {isAuthenticated ? (
        <>
          {/* Dashboard button - bottom left */}
          <button
            onClick={handleGoToDashboard}
            className="fixed bottom-8 left-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-emerald-500"
            title="Go to Dashboard"
          >
            <div className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              <span className="text-sm font-semibold">Dashboard</span>
            </div>
          </button>

          {/* Logout button - bottom right */}
          <button
            onClick={handleLogout}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group focus:outline-none focus:ring-2 focus:ring-amber-500"
            title="Logout (Demo)"
          >
            <div className="flex items-center gap-2">
              <LogOut className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold">Logout</span>
            </div>
          </button>
        </>
      ) : (
        <>
          {/* Start Free Trial button - bottom left */}
          <button
            onClick={() => handleGetStarted()}
            className="fixed bottom-8 left-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white p-4 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
            title="Start Free Trial"
          >
            <Sparkle className="h-5 w-5" />
            <span className="text-sm font-semibold">Start Free Trial</span>
          </button>

          {/* Live Chat Widget - bottom right (smaller) */}
          <button
            onClick={() => {
              toast.success("Chat support will be available soon!", {
                icon: "💬",
                style: {
                  background: "#1f2937",
                  color: "#fff",
                  borderRadius: "12px",
                  border: "1px solid #374151",
                },
              });
            }}
            className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white p-3 rounded-xl shadow-2xl z-50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
            title="Live Chat"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
}
