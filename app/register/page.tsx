
"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Building, Landmark, Globe, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  // Track selected account type and the current onboarding step
  const [selectedType, setSelectedType] = useState<string>("individual");
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <div className="min-h-screen grid md:grid-cols-12 font-sans antialiased bg-slate-50">
      
      {/* LEFT SIDEBAR */}
      <div className="hidden md:flex md:col-span-5 lg:col-span-4 bg-slate-900 bg-gradient-to-b from-slate-900 via-blue-900 to-teal-900 p-12 flex-col justify-between text-white relative overflow-hidden">
        
        {/* Logo Section */}
        <div className="space-y-12 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-teal-400">
              <Globe size={22} />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Monirexa</span>
          </div>

          {/* Heading Description */}
          <div className="space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Join Africa's Financial Network
            </h1>
            <p className="text-blue-100/70 text-sm leading-relaxed">
              Create your account in minutes. Whether you're an individual, SME, or institution — Monirexa has you covered.
            </p>
          </div>
        </div>

        {/* Dynamic Onboarding Progress Steps Indicator */}
        <div className="space-y-4 relative z-10 my-auto pt-12">
          {/* Step 1 */}
          <div className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${currentStep >= 1 ? "bg-white/10" : "opacity-40"}`}>
            <div className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center ${currentStep >= 1 ? "bg-teal-400 text-slate-900" : "bg-white/10 text-white border border-white/20"}`}>
              1
            </div>
            <span className="text-sm font-medium text-white">Step 1: Choose account type</span>
          </div>

          {/* Step 2 */}
          <div className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${currentStep >= 2 ? "bg-white/10" : "opacity-40"}`}>
            <div className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center ${currentStep >= 2 ? "bg-teal-400 text-slate-900" : "bg-white/10 text-white border border-white/20"}`}>
              2
            </div>
            <span className="text-sm font-medium text-white">Step 2: Basic information</span>
          </div>

          {/* Step 3 */}
          <div className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${currentStep >= 3 ? "bg-white/10" : "opacity-40"}`}>
            <div className={`w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center ${currentStep >= 3 ? "bg-teal-400 text-slate-900" : "bg-white/10 text-white border border-white/20"}`}>
              3
            </div>
            <span className="text-sm font-medium text-white">Step 3: Verification</span>
          </div>
        </div>

        {/* Subtle decorative mesh back illumination element */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-500/10 blur-3xl pointer-events-none" />
      </div>

      {/* RIGHT INTERACTIVE CONTENT FORM CONTAINER */}
      <div className="col-span-12 md:col-span-7 lg:col-span-8 flex flex-col justify-center items-center px-6 py-12 md:p-20 bg-slate-50">
        
        {/* STEP 1: CHOOSE ACCOUNT TYPE */}
        {currentStep === 1 && (
          <div className="w-full max-w-lg space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Form Top Headers */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Choose your account type
              </h2>
              <p className="text-slate-500 text-sm">
                Select the type that best describes you
              </p>
            </div>

            {/* Account Interactive Selectors Block */}
            <div className="space-y-4">
              <div 
                onClick={() => setSelectedType("individual")}
                className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  selectedType === "individual" 
                    ? "border-teal-500 bg-white ring-1 ring-teal-500 shadow-sm" 
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                  <User size={20} />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-900 text-sm">Individual</h4>
                  <p className="text-xs text-slate-500 font-medium">Personal account for sending & receiving</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedType("sme")}
                className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  selectedType === "sme" 
                    ? "border-teal-500 bg-white ring-1 ring-teal-500 shadow-sm" 
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                  <Building size={20} />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-900 text-sm">SME / Business</h4>
                  <p className="text-xs text-slate-500 font-medium">Business tools, invoicing & trade</p>
                </div>
              </div>

              <div 
                onClick={() => setSelectedType("institution")}
                className={`flex items-center gap-5 p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  selectedType === "institution" 
                    ? "border-teal-500 bg-white ring-1 ring-teal-500 shadow-sm" 
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                  <Landmark size={20} />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-bold text-slate-900 text-sm">Institution</h4>
                  <p className="text-xs text-slate-500 font-medium">Banks, fintechs & government</p>
                </div>
              </div>
            </div>

            {/* Action Trigger */}
            <div className="space-y-6 pt-2">
              <Button 
                onClick={() => setCurrentStep(2)} 
                className="w-full py-6 rounded-xl text-sm font-semibold text-white bg-slate-500 hover:bg-slate-600 active:scale-[0.99] transition-all"
              >
                Continue
              </Button>

              <div className="flex flex-col items-center gap-4 text-xs font-medium text-slate-500">
                <p>Already have an account? <Link href="/login" className="text-teal-600 font-semibold hover:underline">Sign in</Link></p>
                <Link href="/" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors pt-2"><ArrowLeft size={14} /> Back to home</Link>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: BASIC INFORMATION FORM */}
        {currentStep === 2 && (
          <div className="w-full max-w-lg space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Form Top Headers */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Basic Information
              </h2>
              <p className="text-slate-500 text-sm">
                Tell us about yourself
              </p>
            </div>

            {/* Input Fields */}
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-slate-800">First Name</Label>
                  <Input placeholder="Jean" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold text-slate-800">Last Name</Label>
                  <Input placeholder="Mugabo" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-800">Email</Label>
                <Input type="email" placeholder="jean@email.com" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-800">Phone</Label>
                <Input type="tel" placeholder="+250 7XX XXX XXX" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-800">Country</Label>
                <Input placeholder="Rwanda" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
              </div>
            </div>

            {/* Action Triggers */}
            <div className="space-y-6 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={() => setCurrentStep(1)} 
                  variant="outline" 
                  className="w-full py-6 rounded-xl text-sm font-bold text-slate-700 bg-white border-slate-200 hover:bg-slate-50 active:scale-[0.99] transition-all shadow-sm"
                >
                  Back
                </Button>
                
                <Button 
                  onClick={() => setCurrentStep(3)} 
                  className="w-full py-6 rounded-xl text-sm font-bold text-white bg-[#0f2e5c] hover:bg-[#0a1e3f] active:scale-[0.99] transition-all shadow-md"
                >
                  Continue
                </Button>
              </div>

              <div className="flex flex-col items-center gap-4 text-xs font-medium text-slate-500">
                <p>Already have an account? <Link href="/login" className="text-teal-600 font-semibold hover:underline">Sign in</Link></p>
                <Link href="/" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors pt-2"><ArrowLeft size={14} /> Back to home</Link>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: VERIFICATION */}
        {currentStep === 3 && (
          <div className="w-full max-w-lg space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Form Top Headers */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                Verify Your Identity
              </h2>
              <p className="text-slate-500 text-sm">
                Complete KYC verification to activate your account
              </p>
            </div>

            {/* Input Fields */}
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-800">ID Type</Label>
                <Input placeholder="National ID / Passport" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-800">ID Number</Label>
                <Input placeholder="1199XXXXXXXXXX" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
              </div>

              {/* Upload Document Box area */}
              <div className="border border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-white hover:border-teal-400 transition-colors shadow-sm cursor-pointer group">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors">
                  <User size={24} />
                </div>
                <div className="text-center space-y-1">
                  <p className="text-sm font-bold text-slate-900">Upload ID Document</p>
                  <p className="text-xs text-slate-500">PNG, JPG or PDF up to 5MB</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-xs font-bold text-slate-800">Password</Label>
                <Input type="password" placeholder="Create a secure password" className="bg-white border-slate-200 py-6 rounded-xl focus-visible:ring-teal-500 shadow-sm" />
              </div>
            </div>

            {/* Action Triggers */}
            <div className="space-y-6 pt-2">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={() => setCurrentStep(2)} 
                  variant="outline" 
                  className="w-full py-6 rounded-xl text-sm font-bold text-slate-700 bg-white border-slate-200 hover:bg-slate-50 active:scale-[0.99] transition-all shadow-sm"
                >
                  Back
                </Button>
                
                <Button 
                 onClick={() => window.location.href = "/dashboard"}
                  className="w-full py-6 rounded-xl text-sm font-bold text-white bg-[#0f2e5c] hover:bg-[#0a1e3f] active:scale-[0.99] transition-all shadow-md"
                >
                  Create Account
                </Button>
              </div>

              <div className="flex flex-col items-center gap-4 text-xs font-medium text-slate-500">
                <p>Already have an account? <Link href="/login" className="text-teal-600 font-semibold hover:underline">Sign in</Link></p>
                <Link href="/" className="flex items-center gap-1.5 hover:text-slate-800 transition-colors pt-2"><ArrowLeft size={14} /> Back to home</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

