"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  LayoutDashboard, ArrowRightLeft, Globe, ShieldCheck, Zap, 
  Briefcase, BarChart3, Settings, Bell, User, LogOut, 
  ChevronLeft, ArrowRight, RefreshCw, CheckCircle2, Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PaymentsPage() {
  // State to track if the simulation button has been clicked
  const [isSimulated, setIsSimulated] = useState(false);

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
            <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
              <LayoutDashboard size={18} />
              <span>Overview</span>
            </Link>
            
            {/* ACTIVE STATE: Payments */}
            <div className="flex items-center gap-3 px-4 py-3 bg-white/10 text-white rounded-xl font-medium border border-white/5 shadow-sm cursor-pointer">
              <ArrowRightLeft size={18} className="text-teal-400" />
              <span>Payments</span>
            </div>

            {[
              { icon: Globe, label: "FX Rates", href: "#" },
              { icon: ShieldCheck, label: "KYC / Identity", href: "#" },
              { icon: Zap, label: "Integrations", href: "#" },
              { icon: Briefcase, label: "SME Tools", href: "#" },
              { icon: BarChart3, label: "Analytics", href: "#" },
              { icon: Settings, label: "Settings", href: "#" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium hover:bg-white/5 hover:text-white transition-colors cursor-pointer">
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
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
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-end px-8 z-10 shrink-0">
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

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-6xl space-y-6">
            
            {/* Page Title */}
            <div>
              <h1 className="text-2xl font-extrabold text-slate-900">Cross-Border Payment Simulator</h1>
              <p className="text-sm text-slate-500">Simulate transfers across African corridors</p>
            </div>

            {/* Dynamic Grid Layout: 1 column before simulation, 2 columns after */}
            <div className={`grid gap-6 items-start ${isSimulated ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-2xl'}`}>
              
              {/* LEFT SIDE: Simulation Form */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="font-bold text-slate-900">New Transfer</h3>
                
                <div className="space-y-6">
                  {/* From Section */}
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-slate-800">From Currency</Label>
                    <div className="px-4 py-3 border border-slate-200 rounded-xl bg-white text-sm flex items-center justify-between cursor-pointer shadow-sm">
                      <span className="font-medium text-slate-700">🇷🇼 RWF — Rwandan Franc</span>
                      <ChevronLeft className="w-4 h-4 text-slate-400 -rotate-90" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-slate-800">Amount</Label>
                    <Input defaultValue="100000" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm font-medium" />
                  </div>

                  {/* Arrow Separator */}
                  <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <ArrowRight size={18} />
                    </div>
                  </div>

                  {/* To Section */}
                  <div className="space-y-2">
                    <Label className="text-xs font-bold text-slate-800">To Currency</Label>
                    <div className="px-4 py-3 border border-slate-200 rounded-xl bg-white text-sm flex items-center justify-between cursor-pointer shadow-sm">
                      <span className="font-medium text-slate-700">🇰🇪 KES — Kenyan Shilling</span>
                      <ChevronLeft className="w-4 h-4 text-slate-400 -rotate-90" />
                    </div>
                  </div>

                  {/* Calculation Summary Box */}
                  <div className="bg-slate-50 rounded-xl p-5 space-y-3 text-sm">
                    <div className="flex justify-between text-slate-500">
                      <span>Exchange Rate</span>
                      <span className="font-medium text-slate-900">1 RWF = 0.0929 KES</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Fee (0.5%)</span>
                      <span className="font-medium text-slate-900">500.00 RWF</span>
                    </div>
                    <div className="h-px bg-slate-200 w-full my-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Recipient Gets</span>
                      <span className="font-extrabold text-lg text-slate-900">9290.00 KES</span>
                    </div>
                  </div>

                  {/* Submit Button triggers state change */}
                  <Button 
                    onClick={() => setIsSimulated(true)}
                    className="w-full py-6 rounded-xl text-sm font-bold text-white bg-[#0f2e5c] hover:bg-[#0a1e3f] active:scale-[0.99] transition-all shadow-md flex items-center gap-2"
                  >
                    <RefreshCw size={16} /> Simulate Transfer
                  </Button>
                </div>
              </div>

              {/* RIGHT SIDE: Simulated Receipt (Only shows when isSimulated is true) */}
              {isSimulated && (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-right-8 duration-500 space-y-8">
                  
                  {/* Success Header */}
                  <div className="flex flex-col items-center text-center space-y-3 pt-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-2">
                      <CheckCircle2 size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">Transfer Simulated</h3>
                    <p className="text-sm text-slate-500">This is a demo — no real funds were moved</p>
                  </div>

                  {/* Receipt Details Table */}
                  <div className="space-y-4 text-sm pt-4">
                    <div className="flex justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">Reference</span>
                      <span className="font-medium text-slate-900">SIM-ZBX89U</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">From</span>
                      <span className="font-bold text-slate-900">100000 RWF</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">To</span>
                      <span className="font-bold text-slate-900">9290.00 KES</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">Fee</span>
                      <span className="font-medium text-slate-900">500.00 RWF</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">Rate</span>
                      <span className="font-medium text-slate-900">1 RWF = 0.0929 KES</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-3">
                      <span className="text-slate-500">Settlement</span>
                      <span className="font-medium text-slate-900">~14 seconds</span>
                    </div>
                    <div className="flex justify-between pb-3">
                      <span className="text-slate-500">Status</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">Simulated ✓</span>
                    </div>
                  </div>

                  {/* Production Alert Banner */}
                  <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700 leading-relaxed">
                      In production, this transfer would settle in under 14 seconds via Monirexa's instant settlement engine.
                    </p>
                  </div>

                </div>
              )}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}