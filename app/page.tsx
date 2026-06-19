"use client"; // <-- Added this to prevent the server crash

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, Globe, Lock, ShieldCheck, Zap, 
  Layers, Server, CreditCard, BarChart3, Users, Scale, Heart, Eye, CheckCircle2, Circle, Clock
} from "lucide-react";

const ACCENT_COLOR = "text-cyan-400";

export default function MarketingHomePage() {
  return (
    <div className="min-h-screen text-gray-100 font-sans antialiased relative overflow-hidden bg-gray-900">
      
      {/* NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full bg-gray-900/90 backdrop-blur-md border-b border-gray-700 shadow-sm">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400">
              <Globe size={20} />
            </div>
            <span className="text-xl font-bold text-white">Monirexa</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#ethics" className="hover:text-cyan-400 transition-colors">Ethics</a>
            <a href="#roadmap" className="hover:text-cyan-400 transition-colors">Roadmap</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-cyan-400">Log in</Link>
            <Button asChild className="bg-cyan-500 text-gray-950 hover:bg-cyan-600">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* --- Main Content Area (HOMEPAGE BG-BLUE-700) --- */}
      <div className="bg-blue-700">
        {/* CHANGED: Replaced py-16 with pt-6 pb-16 to pull the content up towards the navbar */}
        <main className="max-w-7xl mx-auto px-6 pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-10 lg:pb-32 z-10 relative">
          <section className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-10 md:pr-12">
              <Badge variant="outline" className={`text-xs md:text-sm font-medium ${ACCENT_COLOR} border-cyan-400/30 flex items-center gap-2 px-3 py-1 w-max bg-blue-900/40`}>
                <Globe className="w-4 h-4" />
                From Rwanda - Connecting Africa
              </Badge>

              <h1 className="text-4xl xs:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] text-white">
                One Platform. <span className={`${ACCENT_COLOR}`}>We Connect Finance</span> Across Africa.
              </h1>

              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">
                Monirexa is the smart digital financial infrastructure platform that connects individuals, SMEs, banks, fintechs, and institutions — solving fragmented systems, high FX costs, and slow cross-border payments.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-wrap">
                <Button size="lg" className="bg-cyan-500 text-gray-900 font-semibold px-10 hover:bg-cyan-400 transition-colors gap-2 w-full sm:w-auto">
                  Start Free <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="lg" variant="ghost" className="bg-blue-600 text-white border border-blue-500 font-medium px-8 hover:bg-blue-800 transition-colors w-full sm:w-auto">
                  View Demo
                </Button>
              </div>
            </div>
          </section>

          {/* --- Bottom Features Cards Section (Inside Hero) --- */}
          <section className="mt-20 md:mt-32 lg:mt-10">
              <h2 className="sr-only">Our Core Services</h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                      { title: "Instant Cross-Border Payments", text: "Send money across Africa in seconds with guaranteed low-fee transparency.", icon: Zap },
                      { title: "Digital KYC & Identity", text: "Compliant, automated onboarding for individuals and businesses across jurisdictions.", icon: ShieldCheck },
                      { title: "Real-Time FX Rates", text: "Transparent, fair exchange rates for efficient currency conversion.", icon: Globe }
                  ].map((feature, i) => (
                      <Card key={i} className="bg-blue-800 border-blue-600 border-[1.5px] hover:border-cyan-400 hover:scale-[1.02] transition-all shadow-xl shadow-blue-900/40 group">
                          <CardHeader className="pb-3 flex flex-row items-center gap-4">
                              <div className="w-12 h-12 rounded-lg bg-blue-900 border border-blue-700 flex items-center justify-center">
                                  <feature.icon className={`w-6 h-6 ${ACCENT_COLOR}`} />
                              </div>
                              <CardTitle className="text-xl font-semibold text-white tracking-tight leading-tight">{feature.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                              <p className="text-sm text-blue-200 leading-relaxed">{feature.text}</p>
                          </CardContent>
                      </Card>
                  ))}
              </div>
          </section>
        </main>
      </div>

      {/* FULL FEATURES SECTION (FEATURE BG-GRAY-700) */}
      <section id="features" className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 font-semibold text-sm tracking-wider uppercase mb-2 block">Platform Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything Africa's Financial Ecosystem Needs</h2>
            <p className="text-slate-600">A comprehensive suite of tools designed to unify and modernize financial infrastructure across the continent.</p></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Zap />, title: "Cross-Border Payments", desc: "Fast, low-cost transfers across 54 African countries with real-time settlement." },
              { icon: <Globe />, title: "FX Transparency", desc: "Live exchange rates from multiple providers with no hidden fees or markups." },
              { icon: <ShieldCheck />, title: "Digital KYC/Identity", desc: "Unified identity verification for individuals and businesses across jurisdictions." },
              { icon: <Layers />, title: "Interoperability Hub", desc: "Connect banks, mobile money, fintechs and payment processors via single API." },
              { icon: <Server />, title: "SME Financial Tools", desc: "Invoicing, cash flow management, credit scoring, and trade finance for SMEs." },
              { icon: <BarChart3 />, title: "Analytics & Insights", desc: "Real-time dashboards with transaction trends, FX analysis, and compliance reports." },
              { icon: <Users />, title: "Multi-Tenant Platform", desc: "Tailored experiences for individuals, SMEs, banks, and institutions." },
              { icon: <CreditCard />, title: "Payment Simulator", desc: "Test and simulate cross-border payment flows before going live." }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-teal-500 transition-all duration-200">
  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white mb-6">
    {feature.icon}
  </div>
  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
  <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* ETHICS & PRIVACY SECTION (ETHICS BG-BLUE-600) */}
      <section id="ethics" className="py-24 relative bg-blue-900 border-t border-blue-500">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase mb-2 block">Ethics & Privacy</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built on Trust, Transparency & Inclusion</h2>
            <p className="text-blue-100">Monirexa is committed to ethical finance. Every feature is designed with privacy, fairness, and accessibility at its core.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Lock />, title: "Data Privacy First", desc: "End-to-end encryption, GDPR compliance, and data sovereignty — your financial data stays yours." },
              { icon: <Scale />, title: "Fair & Transparent", desc: "No hidden fees, transparent FX rates, and open pricing for all users and partners." },
              { icon: <Heart />, title: "Financial Inclusion", desc: "Designed for the unbanked and underbanked — accessible interfaces, low-cost services, and local language support." },
              { icon: <Eye />, title: "Open & Accountable", desc: "Regular transparency reports, open audit trails, and community governance participation." },
            ].map((item, i) => (
              <div key={i} className="bg-blue-800 border border-blue-500 p-8 rounded-xl flex gap-6 hover:border-cyan-400 transition-colors">
                <div className="w-12 h-12 bg-blue-900 border border-blue-700 rounded-lg flex-shrink-0 flex items-center justify-center text-cyan-400">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section id="roadmap" className="py-24 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#2dd4bf] font-semibold text-sm tracking-wider uppercase mb-2 block">Future Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Building Africa's Financial Future</h2>
            <p className="text-slate-500 text-lg">Our vision for connecting every financial institution, business, and individual across the continent.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { q: "Q1 2025", title: "Foundation", items: ["Core platform architecture", "User authentication & KYC module", "Individual & SME onboarding", "Cross-border payment simulator"], status: "completed" },
              { q: "Q2 2025", title: "Growth", items: ["FX transparency engine", "Institutional onboarding", "Analytics dashboard v1", "Multi-currency wallets"], status: "completed" },
              { q: "Q3 2025", title: "Scale", items: ["API marketplace launch", "Mobile money integration", "Credit scoring for SMEs", "Regulatory sandbox partnerships"], status: "current" },
              { q: "Q4 2025", title: "Expansion", items: ["Blockchain settlement layer", "Pan-African trade finance", "AI-powered fraud detection", "20+ country coverage"], status: "future" },
            ].map((phase, i) => {
              
              // Determine styles and icons based on the phase status
              let borderClass = "border-slate-200";
              let Icon = Circle;
              let iconColor = "text-slate-400";

              if (phase.status === "completed") {
                Icon = CheckCircle2;
                iconColor = "text-emerald-500";
              } else if (phase.status === "current") {
                borderClass = "border-slate-200";
                Icon = Clock;
                iconColor = "text-amber-500";
              }

              return (
                <div key={i} className={`p-8 rounded-2xl bg-white border ${borderClass} hover:border-amber-400 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-center gap-2 text-sm font-semibold mb-6 text-slate-500">
                    <Icon size={20} className={iconColor} /> {phase.q}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{phase.title}</h3>
                  <ul className="space-y-4">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-500">
                        <div className="w-2 h-2 rounded-full flex-shrink-0 bg-[#2dd4bf]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-cyan-400">
                  <Globe size={20} />
                </div>
                <span className="text-xl font-bold text-white">Monirexa</span>
              </div>
              <p className="text-sm text-gray-400 max-w-xs">
                One Platform from Rwanda — We Connect Finance Across Africa.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><Link href="/pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link></li>
                <li><Link href="/docs" className="hover:text-cyan-400 transition-colors">API Docs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
                <li><a href="#ethics" className="hover:text-cyan-400 transition-colors">Ethics</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            © 2026 Monirexa. Made with ❤️ in Kigali, Rwanda. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}