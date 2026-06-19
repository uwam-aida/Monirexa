
"use client";

import Link from "next/link";
import { 
  LayoutDashboard, ArrowRightLeft, Globe, ShieldCheck, Zap, 
  Briefcase, BarChart3, Settings, Bell, User, LogOut, 
  DollarSign, Users, Activity, TrendingUp, ChevronLeft
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans antialiased overflow-hidden">
      
      {/* SIDEBAR */}
      <aside className="w-64 bg-slate-900 bg-gradient-to-b from-[#0f2e5c] to-teal-900 text-slate-300 flex flex-col justify-between hidden md:flex">
        <div>
          {/* Logo */}
          <div className="h-20 flex items-center gap-3 px-6 border-b border-white/10">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-teal-400">
              <Globe size={18} />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Monirexa</span>
          </div>

          {/* Nav Links */}
          <nav className="p-4 space-y-1">
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium border border-white/5 shadow-sm cursor-pointer">
              <LayoutDashboard size={18} className="text-teal-400" />
              <span>Overview</span>
            </div>
            {[
             { icon: ArrowRightLeft, label: "Payments", href: "/dashboard/payments" },              { icon: Globe, label: "FX Rates" },
              { icon: ShieldCheck, label: "KYC / Identity" },
              { icon: Zap, label: "Integrations" },
              { icon: Briefcase, label: "SME Tools" },
              { icon: BarChart3, label: "Analytics" },
              { icon: Settings, label: "Settings" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                <item.icon size={18} />
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Collapse Button */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-colors cursor-pointer text-sm">
            <ChevronLeft size={18} />
            <span>Collapse</span>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* Top Header Navigation */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 shrink-0">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-500">Welcome back! Here's your financial overview.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 transition-colors shadow-sm">
              <User size={20} />
            </button>
            <div className="h-6 w-px bg-slate-200 mx-2" />
            <Link href="/" className="w-10 h-10 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500 transition-colors">
              <LogOut size={20} />
            </Link>
          </div>
        </header>

        {/* Scrollable Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* TOP METRICS GRID (With Hover Effects) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Total Volume", value: "$2.4M", change: "+12.5%", isUp: true, icon: DollarSign },
                { title: "Active Users", value: "8,432", change: "+8.2%", isUp: true, icon: Users },
                { title: "FX Transactions", value: "1,247", change: "+23.1%", isUp: true, icon: Globe },
                { title: "Avg. Settlement", value: "14s", change: "-35%", isUp: true, icon: TrendingUp },
              ].map((metric, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 group cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <p className="text-sm font-medium text-slate-500">{metric.title}</p>
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 group-hover:scale-110 group-hover:bg-teal-100 transition-all">
                      <metric.icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">{metric.value}</h3>
                  <p className="text-xs font-semibold flex items-center gap-1">
                    <TrendingUp size={14} className={metric.isUp ? "text-emerald-500" : "text-rose-500"} />
                    <span className={metric.isUp ? "text-emerald-500" : "text-rose-500"}>{metric.change}</span>
                    <span className="text-slate-400 font-normal">vs last month</span>
                  </p>
                </div>
              ))}
            </div>

            {/* CHARTS GRID (With Hover Effects) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Line Chart Placeholder */}
              <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300">
                <h3 className="text-sm font-bold text-slate-900 mb-6">Transaction Volume</h3>
                <div className="h-[250px] w-full relative flex items-end">
                  {/* CSS Representation of the line chart */}
                  <div className="absolute inset-0 flex flex-col justify-between pb-8">
                    {["$600k", "$450k", "$300k", "$150k", "$0k"].map((val, i) => (
                      <div key={i} className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="w-10">{val}</span>
                        <div className="flex-1 border-b border-slate-100 border-dashed" />
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-full pb-8 pl-14 relative z-10">
                    <div className="w-full h-full bg-gradient-to-t from-teal-50 to-transparent border-t-2 border-teal-500 rounded-t-lg [clip-path:polygon(0%_80%,20%_75%,40%_60%,60%_65%,80%_40%,100%_35%,100%_100%,0%_100%)]" />
                  </div>
                  <div className="absolute bottom-0 left-14 right-0 flex justify-between text-xs text-slate-400">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                  </div>
                </div>
              </div>

              {/* Bar Chart Placeholder */}
              <div className="col-span-1 bg-white p-6 rounded-2xl border border-slate-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300">
                <h3 className="text-sm font-bold text-slate-900 mb-6">Transactions by Month</h3>
                <div className="h-[250px] w-full relative flex items-end">
                  <div className="absolute inset-0 flex flex-col justify-between pb-8">
                    {["1000", "750", "500", "250", "0"].map((val, i) => (
                      <div key={i} className="flex items-center gap-4 text-xs text-slate-400">
                        <span className="w-8">{val}</span>
                        <div className="flex-1 border-b border-slate-100 border-dashed" />
                      </div>
                    ))}
                  </div>
                  <div className="w-full h-full pb-8 pl-12 relative z-10 flex items-end justify-between gap-2">
                    {[40, 50, 60, 55, 70, 80, 90].map((height, i) => (
                      <div key={i} className="w-full bg-[#0f2e5c] rounded-t-sm hover:bg-teal-500 transition-colors cursor-pointer" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                  <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-slate-400 px-2">
                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT TRANSACTIONS TABLE (With Hover Effects) */}
            <div className="bg-white rounded-2xl border border-slate-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-sm font-bold text-slate-900">Recent Transactions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-400 uppercase bg-slate-50/50">
                    <tr>
                      <th className="px-6 py-4 font-medium">ID</th>
                      <th className="px-6 py-4 font-medium">Route</th>
                      <th className="px-6 py-4 font-medium">Amount</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                      <th className="px-6 py-4 font-medium">Time</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {[
                      { id: "TX-8842", route: "Rwanda → Kenya", amount: "$12,500", status: "Completed", time: "2 min ago", sColor: "text-emerald-600 bg-emerald-50" },
                      { id: "TX-8841", route: "Nigeria → Ghana", amount: "$8,200", status: "Completed", time: "5 min ago", sColor: "text-emerald-600 bg-emerald-50" },
                      { id: "TX-8840", route: "Tanzania → Uganda", amount: "$3,750", status: "Pending", time: "12 min ago", sColor: "text-amber-600 bg-amber-50" },
                      { id: "TX-8839", route: "Rwanda → DRC", amount: "$21,000", status: "Completed", time: "18 min ago", sColor: "text-emerald-600 bg-emerald-50" },
                      { id: "TX-8838", route: "Kenya → Ethiopia", amount: "$6,100", status: "Processing", time: "25 min ago", sColor: "text-blue-600 bg-blue-50" },
                    ].map((tx, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors cursor-pointer">
                        <td className="px-6 py-4 font-medium text-slate-900">{tx.id}</td>
                        <td className="px-6 py-4 text-slate-500">{tx.route}</td>
                        <td className="px-6 py-4 font-bold text-slate-900">{tx.amount}</td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${tx.sColor}`}>
                            {tx.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-slate-400 text-xs">{tx.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
