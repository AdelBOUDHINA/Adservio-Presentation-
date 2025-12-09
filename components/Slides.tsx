import React, { useState, useRef } from 'react';
import { SlideContainer } from './SlideContainer';
import { AdservioLogo } from './AdservioLogo';
import { 
  Users, Shield, Briefcase, Activity, 
  Lightbulb, Map as MapIcon, Layers, Cpu, 
  CheckCircle, Globe, Zap, Database, 
  Lock, ArrowRight, TrendingUp, Linkedin, Mail, Flag,
  Code as CodeIcon, Settings as SettingsIcon,
  Compass, Sliders, Check, Target, Bot, Filter,
  FileText, Search, MapPin, Phone, Server, Cloud, Layout,
  Landmark, Folder, FolderOpen, File, HardDrive, Monitor, Star, 
  Download, ArrowLeft, ArrowUp, ChevronRight, LayoutGrid, List, MoreHorizontal,
  Minus, Square, X, Home, Clock, PieChart, Gem, Building, ChevronsRight, Upload,
  BarChart3, FileSpreadsheet, ShieldCheck, Award, GraduationCap, Quote,
  Heart, Trophy, BrainCircuit
} from 'lucide-react';

// --- SLIDE 1: HERO (McKinsey/BCG Style Redesign) ---
export const HeroSlide: React.FC = () => (
  <div className="w-full h-full bg-[#020617] relative overflow-hidden flex flex-col p-12 md:p-20">
      {/* Subtle Premium Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-950/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* 1. TOP: Logo Only (Top Left) */}
      <div className="relative z-10">
         <AdservioLogo className="h-12 md:h-16" textClassName="text-white/90 text-2xl md:text-3xl" />
      </div>

      {/* 2. MAIN CONTENT: Vertically Centered */}
      <div className="flex-1 flex flex-col justify-center max-w-7xl relative z-10 pl-2">
        
        {/* Main Tagline: The Hero Statement */}
        <div className="flex flex-col gap-4 mb-14">
          <h1 className="text-6xl md:text-[7rem] font-bold tracking-tight leading-[1.05]">
            <span className="block text-slate-500">Resilient Systems.</span>
            <span className="block text-slate-300">Resilient Operations.</span>
            <span className="block text-white">Resilient Business.</span>
          </h1>
        </div>

        {/* Positioning Statement */}
        <div className="mb-12 border-l-4 border-blue-500 pl-8 py-2">
           <p className="text-xl md:text-2xl text-blue-400 font-medium uppercase tracking-widest mb-2">
             Trusted by Europe's Most Regulated Industries
           </p>
           {/* Industry Focus: Horizontal Line */}
           <div className="flex flex-wrap items-center gap-6 text-lg md:text-xl text-gray-400 font-light">
              <span className="text-white font-medium">Banking</span>
              <span className="text-blue-900 text-xs mx-1">●</span>
              <span className="text-white font-medium">Asset Management</span>
              <span className="text-blue-900 text-xs mx-1">●</span>
              <span className="text-white font-medium">Insurance</span>
              <span className="text-blue-900 text-xs mx-1">●</span>
              <span className="text-white font-medium">Fund Administration</span>
           </div>
        </div>
      </div>

      {/* 5. SERVICE PILLARS (Bottom) */}
      <div className="relative z-10 border-t border-white/10 pt-8 mt-auto">
        <div className="flex gap-16 text-xs md:text-sm font-bold text-gray-500 uppercase tracking-[0.25em]">
           <span className="hover:text-blue-400 transition-colors cursor-default">Consulting</span>
           <span className="text-blue-800 font-light">|</span>
           <span className="hover:text-blue-400 transition-colors cursor-default">Technology</span>
           <span className="text-blue-800 font-light">|</span>
           <span className="hover:text-blue-400 transition-colors cursor-default">Operations</span>
        </div>
      </div>
  </div>
);

// --- SLIDE 2: WHO WE ARE (Exact Match to Reference with Logos) ---
export const ProfileSlide: React.FC = () => (
  <SlideContainer>
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
         <div className="h-1 w-12 bg-blue-500"></div>
         <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Firm Profile</div>
      </div>
      <h2 className="text-6xl md:text-7xl font-bold mb-12 text-white">Who We Are</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 flex-1 min-h-0">
          {/* LEFT COLUMN - Main Content */}
          <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="bg-[#0b1221]/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl shadow-xl flex-1 flex flex-col justify-center">
                <p className="text-2xl md:text-3xl text-gray-200 leading-relaxed font-light">
                  <span className="text-blue-400 font-bold">Adservio Group</span> is a European technology consultancy built for regulated industries. From Luxembourg, Brussels, and Paris, we serve Banking, Asset Management, Insurance, and Fund Administration — sectors where compliance is not optional and failure is not acceptable.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  <div className="bg-[#0b1221] border border-blue-900/30 p-8 rounded-2xl flex flex-col">
                      <h3 className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4">The Context</h3>
                      <p className="text-lg text-gray-300 leading-relaxed flex-1">
                        European financial institutions face converging pressures: Cloud and AI adoption, cost and margin compression, DORA and ESG compliance. Leaders now embed regulatory excellence into transformation.
                      </p>
                  </div>
                  <div className="bg-[#0b1221] border border-blue-900/30 p-8 rounded-2xl flex flex-col">
                      <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Luxembourg Anchor</h3>
                      <p className="text-lg text-gray-300 leading-relaxed flex-1">
                        Luxembourg sits at the intersection of European regulation and global capital. This is where we pressure-test every solution against CSSF, ESMA, and ECB expectations.
                      </p>
                  </div>
              </div>
          </div>

          {/* RIGHT COLUMN (Stats) */}
          <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
              {[
                  { val: '+300', lbl: 'Consultants', icon: Users },
                  { val: '+15Y', lbl: 'Experience', icon: Shield },
                  { val: '+500', lbl: 'Projects', icon: Briefcase },
                  { val: '+25M€', lbl: 'Revenue', icon: TrendingUp },
              ].map((stat, i) => (
                  <div key={i} className="bg-[#0b1221] border border-blue-900/30 p-6 rounded-2xl flex items-center justify-between flex-1 hover:border-blue-500/50 transition-colors group cursor-default shadow-lg">
                      <div>
                          <div className="text-5xl font-bold text-white mb-2">{stat.val}</div>
                          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors">{stat.lbl}</div>
                      </div>
                      <div className="text-blue-500 bg-blue-500/10 p-4 rounded-xl group-hover:bg-blue-500 group-hover:text-white transition-all transform group-hover:scale-110">
                          <stat.icon size={32} />
                      </div>
                  </div>
              ))}
          </div>
      </div>

      {/* FOOTER LOGOS */}
      <div className="mt-8 pt-6 border-t border-white/10">
          <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">Trusted by Industry Leaders</div>
          <div className="flex flex-wrap gap-12 justify-between items-center opacity-70 px-4">
             {/* Text-based logo representations tailored for high-res look */}
             <span className="text-3xl font-serif font-bold text-white tracking-widest hover:text-blue-400 transition-colors cursor-default">cssf</span>
             <span className="text-2xl font-bold text-white tracking-tighter hover:text-green-500 transition-colors cursor-default">BNP PARIBAS</span>
             <span className="text-2xl font-bold text-white italic hover:text-cyan-600 transition-colors cursor-default">CRÉDIT AGRICOLE</span>
             <span className="text-2xl font-bold text-white tracking-tight hover:text-red-500 transition-colors cursor-default">caceis</span>
             <span className="text-2xl font-bold text-white hover:text-purple-500 transition-colors cursor-default">BIL</span>
             <span className="text-xl font-bold text-white hover:text-blue-300 transition-colors cursor-default">Spuerkeess</span>
          </div>
      </div>
    </div>
  </SlideContainer>
);

// --- SLIDE 3: APPROACH (Refined Visualization) ---
interface ApproachCardProps {
  number: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  quote: string;
  items: string[];
  outcomeText: string;
  color: string;
  showArrow?: boolean;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ number, icon: Icon, title, subtitle, quote, items, outcomeText, color, showArrow }) => (
  <div className="bg-[#0b1221] border border-white/5 rounded-2xl p-8 flex flex-col h-full hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-2xl relative group">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
         <span className="text-7xl font-bold text-[#1e293b] font-sans leading-none select-none">{number}</span>
         <div className={`p-3 rounded-xl bg-[#0f172a] border border-white/5 ${color} shadow-lg`}>
            <Icon size={28} />
         </div>
      </div>

      {/* Content */}
      <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">{subtitle}</div>

      <div className="mb-8 relative bg-white/5 p-4 rounded-lg">
        <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-lg ${color.replace('text-', 'bg-')}`}></div>
        <p className="text-sm text-slate-300 italic leading-relaxed">
           "{quote}"
        </p>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
         {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-snug">
               <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${color.replace('text-', 'bg-')}`}></span>
               <span>{item}</span>
            </li>
         ))}
      </ul>

      {/* Outcome Footer */}
      <div className="mt-auto pt-6 border-t border-white/5">
         <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${color}`}>Outcome</div>
         <p className="text-sm text-slate-300 leading-relaxed font-medium">
            {outcomeText}
         </p>
      </div>

      {/* Flow Arrow */}
      {showArrow && (
        <div className="hidden lg:flex absolute left-full top-1/2 -translate-y-1/2 w-8 justify-center items-center -ml-[1px] z-20">
           <ArrowRight className="text-slate-600" size={32} strokeWidth={1.5} />
        </div>
      )}
  </div>
);

export const ApproachSlide: React.FC = () => (
  <SlideContainer>
    <div className="flex flex-col h-full">
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="h-1 w-12 bg-blue-500"></div>
            <span className="text-blue-500 text-sm font-bold uppercase tracking-[0.2em]">Our Approach</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-white uppercase leading-tight">
            From Insight To Impact
          </h2>
        </div>
        
        <div className="bg-white/5 border-l-4 border-blue-500 p-6 rounded-r-xl max-w-3xl backdrop-blur-sm">
           <p className="text-gray-300 italic font-light text-lg">
             "Strategy without execution is conversation. Execution without strategy is chaos. Our approach ensures both move together."
           </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 flex-1 relative">
         <ApproachCard 
            number="01" 
            icon={Lightbulb} 
            title="THINK" 
            subtitle="STRATEGY & DECISION INTELLIGENCE"
            quote="Before committing resources, we build certainty."
            color="text-blue-400"
            showArrow={true}
            items={["Diagnostic 360°", "Regulatory gap analysis", "Digital & AI readiness", "Target Operating Model", "Business case Go/No-Go"]}
            outcomeText="A validated direction with clarity on costs, risks, and returns."
         />
         <ApproachCard 
            number="02" 
            icon={MapIcon} 
            title="PLAN" 
            subtitle="ROADMAP & GOVERNANCE"
            quote="Structure turns ambition into execution."
            color="text-indigo-400"
            showArrow={true}
            items={["Transformation roadmap", "Regulatory-by-design", "Budget & resource modelling", "Governance Frameworks", "Risk mitigation protocols"]}
            outcomeText="A blueprint that holds under scrutiny and pressure."
         />
         <ApproachCard 
            number="03" 
            icon={Cpu} 
            title="BUILD" 
            subtitle="TECHNOLOGY & ENGINEERING"
            quote="Strategy becomes infrastructure."
            color="text-cyan-400"
            showArrow={true}
            items={["Custom apps & APIs", "Data platforms & BI", "Cloud & DevOps", "Cybersecurity", "RegTech automation", "QA/UAT validation"]}
            outcomeText="Technology that is compliant, secure, and performing."
         />
         <ApproachCard 
            number="04" 
            icon={Activity} 
            title="RUN" 
            subtitle="OPERATIONAL EXCELLENCE"
            quote="Delivery is not the destination. Performance is."
            color="text-emerald-400"
            showArrow={false}
            items={["Middle/Back-office ops", "AML/KYC remediation", "Regulatory reporting", "AI-augmented workflows", "Continuous improvement"]}
            outcomeText="Operations that perform today and improve tomorrow."
         />
      </div>
    </div>
  </SlideContainer>
);

// --- SLIDE 4: SERVICES ---
interface ServiceCardProps {
  number: string;
  title: string;
  icon: React.ElementType;
  quote: string;
  listTitle: string;
  listItems: string[];
  footerTitle: string;
  footerItems: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, icon: Icon, quote, listTitle, listItems, footerTitle, footerItems }) => (
  <div className="bg-[#0b1221] border border-white/5 rounded-2xl flex flex-col h-full hover:border-white/20 transition-colors shadow-xl">
     {/* Top Section */}
     <div className="p-8 pb-6">
        <div className="flex justify-between items-start mb-4">
           <span className="text-lg font-bold text-blue-500 opacity-80">{number}</span>
           <div className="p-3 bg-[#1e293b] rounded-full border border-white/10 text-cyan-400 shadow-md">
              <Icon size={24} />
           </div>
        </div>
        <h3 className="text-3xl font-bold text-white mb-6 uppercase leading-tight">{title}</h3>
        <p className="text-sm text-gray-400 italic leading-relaxed border-l-2 border-white/20 pl-4 py-1">
           "{quote}"
        </p>
     </div>
     
     {/* Divider */}
     <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

     {/* Middle Section: Capabilities */}
     <div className="p-8 flex-1">
        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-6">{listTitle}</h4>
        <ul className="space-y-4">
           {listItems.map((item, i) => (
             <li key={i} className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                <span className="text-base text-gray-300 leading-snug">{item}</span>
             </li>
           ))}
        </ul>
     </div>

     {/* Bottom Section: Footer */}
     <div className="p-8 bg-[#0f172a]/80 rounded-b-2xl border-t border-white/5">
        <div className="flex items-center gap-3 mb-4">
           <CheckCircle size={18} className="text-emerald-400" />
           <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">{footerTitle}</h4>
        </div>
        <ul className="space-y-2">
           {footerItems.map((item, i) => (
             <li key={i} className="flex items-start gap-3">
                <span className="text-xs text-gray-500 mt-1">→</span>
                <span className="text-sm text-gray-400 leading-snug">{item}</span>
             </li>
           ))}
        </ul>
     </div>
  </div>
);

export const ServicesSlide: React.FC = () => (
  <SlideContainer>
    {/* Header */}
    <div className="flex items-center gap-4 mb-4">
       <div className="h-1 w-12 bg-blue-500"></div>
       <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Our Services</div>
    </div>
    <h2 className="text-6xl md:text-7xl font-bold mb-12 text-white">Core Capabilities</h2>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full pb-4">
      <ServiceCard 
         number="01"
         title="Strategy & Transformation"
         icon={Compass}
         quote="We align business, compliance, and technology for long-term performance."
         listTitle="Core Capabilities"
         listItems={["Strategy & digital transformation", "Regulatory readiness (DORA, MiCA)", "Data & cloud strategy", "Operating model design", "Risk & resilience planning", "Technology benchmarking"]}
         footerTitle="Deliverables"
         footerItems={["Transformation roadmap", "Compliance gap analysis", "AI/digital maturity assessment", "Target operating model"]}
      />

      <ServiceCard 
         number="02"
         title="Technologies & Engineering"
         icon={CodeIcon}
         quote="We build secure, resilient, and scalable digital foundations."
         listTitle="Expert Domains"
         listItems={["Custom application development", "APIs & integrations", "Data engineering & BI", "DevOps / CloudOps", "Cybersecurity frameworks", "RegTech automation", "Compliance workflow engineering"]}
         footerTitle="Use Cases"
         footerItems={["Cloud migration for banking", "Automated AIFMD/ESG reporting", "AI-powered compliance back-office", "Secure onboarding (KYC/KYB)"]}
      />

      <ServiceCard 
         number="03"
         title="Operations"
         icon={Sliders}
         quote="A network of operational experts with deep experience in the fund, PSF and banking industry."
         listTitle="Domains"
         listItems={["TA / FA / BO-MO", "AML/KYC review & remediation", "Investor onboarding", "Reconciliations", "Reporting & data quality", "Compliance operations", "AI-augmented workflows"]}
         footerTitle="Value Delivered"
         footerItems={["Reduced operational cost", "Elevated compliance quality", "Faster processing times", "Scalable processes"]}
      />
    </div>
  </SlideContainer>
);

// --- SLIDE 5: AI PRACTICE ---
export const AISlide: React.FC = () => (
  <SlideContainer>
    <div className="flex items-center gap-4 mb-4">
       <div className="h-1 w-12 bg-blue-500"></div>
       <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Adservio AI</div>
    </div>
    <h2 className="text-5xl md:text-6xl font-bold mb-10 text-white">AI as a Strategic Accelerator</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full pb-4">
      
      {/* LEFT COLUMN (Span 5) */}
      <div className="lg:col-span-5 flex flex-col gap-8">
         <div className="bg-[#0b1221] border border-white/10 rounded-2xl p-10 relative overflow-hidden shadow-2xl">
            <p className="text-3xl text-gray-100 font-light leading-snug mb-8">
               "AI is not the destination. Your strategic objectives are. AI is the accelerator that compresses timelines, sharpens decisions, and delivers measurable results."
            </p>
            <div className="h-1.5 w-16 bg-blue-500 rounded-full"></div>
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
         </div>

         <div className="bg-[#0b1221]/50 rounded-2xl p-8 border border-white/5 flex-1 flex flex-col justify-center">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">Why Adservio</div>
            <div className="space-y-8">
               <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e293b] flex items-center justify-center text-blue-400 border border-blue-900/30 shadow-lg">
                     <Target size={28} />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-white uppercase mb-1">Ecosystem Navigation</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">Curating the right tools, ignoring hype for fit.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e293b] flex items-center justify-center text-blue-400 border border-blue-900/30 shadow-lg">
                     <Bot size={28} />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-white uppercase mb-1">Agentic Engineering</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">Building agents that execute complex tasks autonomously.</p>
                  </div>
               </div>
               <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e293b] flex items-center justify-center text-emerald-400 border border-emerald-900/30 shadow-lg">
                     <Shield size={28} />
                  </div>
                  <div>
                     <h4 className="text-lg font-bold text-white uppercase mb-1">Regulatory Alignment</h4>
                     <p className="text-sm text-gray-400 leading-relaxed">Native compliance with EU AI Act, DORA, and GDPR.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* RIGHT COLUMN (Span 7) */}
      <div className="lg:col-span-7 flex flex-col gap-8">
         <div className="bg-[#0b1221] border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-sm font-bold text-white uppercase tracking-widest">Strategic Framework</h3>
               <span className="text-xs bg-[#1e293b] text-gray-400 px-3 py-1.5 rounded border border-white/5">Decision Gate</span>
            </div>
            <div className="grid gap-4">
               {["What problem are we solving? | AI without a clear target creates cost, not value.", "What is the measurable impact? | Speed, quality, cost, risk — pick your KPI.", "Can we operate it at scale? | A prototype is not a product. Plan for day 2."].map((text, i) => (
                   <div key={i} className="bg-[#111827] rounded-xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-white/5">
                      <span className="text-base font-bold text-white">{text.split('|')[0]}</span>
                      <span className="text-sm text-gray-500 text-right">{text.split('|')[1]}</span>
                   </div>
               ))}
            </div>
         </div>

         <div className="bg-[#0b1221] border border-white/10 rounded-2xl p-8 flex-1 relative overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-10 relative z-10">
               <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest">Execution Methodology</h3>
               <span className="text-xs text-gray-600 uppercase tracking-widest">End-to-End Value Chain</span>
            </div>
            {/* Diagram Container */}
            <div className="flex-1 flex items-center justify-center relative z-10 w-full overflow-x-auto">
               <div className="flex items-center min-w-[700px] justify-between px-8 w-full relative">
                  
                  {/* CONTINUOUS LINE BACKGROUND */}
                  {/* Positioned to pass through the center of the Circle and aligned icons */}
                  <div className="absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-slate-700 via-blue-500 to-slate-700 opacity-50 -translate-y-1/2 rounded-full" />

                  {/* Init */}
                  <div className="flex flex-col items-center gap-4 relative z-10 mt-6">
                     <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-slate-700 flex items-center justify-center text-gray-400 shadow-xl transition-transform hover:scale-110 bg-opacity-100 relative z-20"><Layers size={28} /></div>
                     <span className="text-xs font-bold text-gray-400 uppercase">Init.</span>
                  </div>

                  {/* Qualify - Now matches styling of others */}
                  <div className="flex flex-col items-center gap-4 relative z-10 mt-6">
                     <div className="w-16 h-16 rounded-2xl bg-[#1e293b] border border-slate-700 flex items-center justify-center text-blue-500 shadow-xl transition-transform hover:scale-110 bg-opacity-100 relative z-20"><Filter size={28} /></div>
                     <span className="text-xs font-bold text-blue-400 uppercase">Qualify</span>
                  </div>

                  {/* Circle Cycle */}
                  <div className="relative w-48 h-48 shrink-0 mx-6">
                      <div className="absolute inset-4 border-2 border-dashed border-slate-700 rounded-full animate-[spin_60s_linear_infinite]"></div>
                      {/* Center Cross/Hub */}
                      
                      {/* POC - Left */}
                      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                         <div className="w-10 h-10 rounded-full bg-[#0f172a] border-2 border-blue-500 text-[10px] font-bold text-blue-400 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)]">POC</div>
                      </div>
                      
                      {/* TEST - Top */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                         <div className="w-10 h-10 rounded-full bg-[#0f172a] border-2 border-slate-600 text-[10px] font-bold text-gray-400 flex items-center justify-center hover:border-white transition-colors cursor-default">TEST</div>
                      </div>
                      
                      {/* VAL - Right */}
                      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                         <div className="w-10 h-10 rounded-full bg-[#0f172a] border-2 border-slate-600 text-[10px] font-bold text-gray-400 flex items-center justify-center hover:border-white transition-colors cursor-default">VAL</div>
                      </div>
                      
                      {/* IMP - Bottom */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex flex-col items-center z-20">
                         <div className="w-10 h-10 rounded-full bg-[#0f172a] border-2 border-slate-600 text-[10px] font-bold text-gray-400 flex items-center justify-center hover:border-white transition-colors cursor-default">IMP</div>
                      </div>
                  </div>

                  {/* Deliver */}
                  <div className="flex flex-col items-center gap-4 relative z-10 mt-6">
                     <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-amber-500/50 flex items-center justify-center text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)] bg-opacity-100 relative z-20"><Zap size={28} fill="currentColor" /></div>
                     <span className="text-xs font-bold text-amber-400 uppercase">Deliver</span>
                  </div>

                  {/* Value */}
                  <div className="flex flex-col items-center gap-4 relative z-10 mt-6">
                     <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] bg-opacity-100 relative z-20"><TrendingUp size={28} /></div>
                     <span className="text-xs font-bold text-emerald-400 uppercase">Value</span>
                  </div>
               </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-900/10 blur-3xl -z-0 pointer-events-none"></div>
         </div>
      </div>
    </div>
  </SlideContainer>
);

// --- SLIDE 6: DELIVERABLES ---
export const DeliverablesSlide: React.FC = () => (
  <SlideContainer>
    <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-end mb-6 flex-shrink-0">
          <div>
            <div className="flex items-center gap-4 mb-2">
               <div className="h-1 w-12 bg-blue-500"></div>
               <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Adservio AI</div>
            </div>
            <h2 className="text-6xl font-bold text-white">What We Deliver</h2>
          </div>
          <div className="text-right hidden md:block">
             <div className="px-4 py-2 bg-blue-900/30 rounded-lg border border-blue-500/30">
                <div className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Impact Focus</div>
                <div className="text-xl font-bold text-white">Measurable Outcomes</div>
             </div>
          </div>
        </div>

        {/* TOP ROW: Metrics (High Level) */}
        <div className="grid grid-cols-4 gap-6 mb-6 flex-shrink-0">
            {[
              { icon: Zap, c: 'text-amber-400', l: 'Speed', v: 'Minutes vs Hours' },
              { icon: TrendingUp, c: 'text-blue-400', l: 'Throughput', v: '10x Volume' },
              { icon: CheckCircle, c: 'text-emerald-400', l: 'Quality', v: 'Zero Defects' },
              { icon: Shield, c: 'text-indigo-400', l: 'Control', v: 'Full Audit' },
            ].map((m, i) => (
               <div key={i} className="bg-[#0f172a] border border-white/10 p-5 rounded-xl flex items-center justify-between shadow-lg">
                   <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{m.l}</div>
                      <div className="text-xl font-bold text-white">{m.v}</div>
                   </div>
                   <div className={`p-3 rounded-full bg-white/5 ${m.c}`}>
                      <m.icon size={24} />
                   </div>
               </div>
            ))}
        </div>

        {/* MIDDLE SECTION: Two big columns (Velocity vs Solutions) */}
        <div className="grid grid-cols-2 gap-8 mb-6 flex-1 min-h-0">
           {/* Left: Engineering Velocity */}
           <div className="bg-[#0b1221] border border-blue-900/30 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-blue-500/30 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CodeIcon size={120} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-3">
                 <div className="p-2 bg-blue-600 rounded-lg"><CodeIcon size={20} className="text-white"/></div>
                 Engineering Velocity
              </h3>
              
              <div className="flex-1 grid grid-cols-2 gap-4 content-start">
                 {[
                   { l: 'Code Generation', r: '30-50% Faster', desc: 'Boilerplate & Unit Tests' },
                   { l: 'Legacy Migration', r: '-70% Effort', desc: 'Cobol/Java to Modern Stack' },
                   { l: 'Documentation', r: 'Automated', desc: 'Always up-to-date specs' },
                   { l: 'Quality Assurance', r: '<1% Defects', desc: 'AI-driven edge case testing' },
                 ].map((item, i) => (
                    <div key={i} className="bg-[#1e293b]/40 border border-white/5 p-4 rounded-xl">
                        <div className="text-xs text-blue-400 font-bold uppercase mb-1">{item.l}</div>
                        <div className="text-lg font-bold text-white mb-1">{item.r}</div>
                        <div className="text-[10px] text-gray-500">{item.desc}</div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Right: Business Solutions */}
           <div className="bg-[#0b1221] border border-emerald-900/30 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Briefcase size={120} />
              </div>
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-3">
                 <div className="p-2 bg-emerald-600 rounded-lg"><Briefcase size={20} className="text-white"/></div>
                 Business Solutions
              </h3>

              <div className="flex-1 grid grid-cols-2 gap-4 content-start">
                 {[
                   { t: 'Ops Copilots', d: 'Assistants for Back-Office teams to query policies & data.', i: Bot },
                   { t: 'Doc Intelligence', d: 'Automated extraction from IDs, Deeds, and Contracts.', i: FileText },
                   { t: 'Regulatory RAG', d: 'Chat with your compliance corpus (CSSF, ESMA).', i: Search },
                   { t: 'Smart Reporting', d: 'Auto-generation of ESG & Fund reports.', i: Database },
                 ].map((item, i) => (
                   <div key={i} className="bg-[#1e293b]/40 border border-white/5 p-4 rounded-xl flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                         <div className="text-sm font-bold text-white">{item.t}</div>
                         <item.i size={16} className="text-emerald-400" />
                      </div>
                      <div className="text-xs text-gray-400 leading-relaxed">{item.d}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* BOTTOM SECTION: Industry Use Cases (Grid) */}
        <div className="h-auto mt-auto">
             <div className="flex items-center gap-3 mb-3">
                <div className="p-1.5 bg-purple-500/20 rounded text-purple-400 border border-purple-500/30">
                    <BrainCircuit size={18} />
                </div>
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Industry Use Cases</h3>
                <div className="h-px bg-white/10 flex-1"></div>
             </div>
             
             <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
                {[
                    { 
                        industry: "Asset Mgmt", 
                        icon: PieChart, 
                        color: "text-cyan-400",
                        cases: ["Generative Research", "Portfolio Optimization", "ESG Data Scoring", "RFP Agent"]
                    },
                    { 
                        industry: "Private & Wealth", 
                        icon: Gem, 
                        color: "text-amber-400",
                        cases: ["Hyper-personalization", "Churn Prediction", "Augmented AML/KYC", "Next-Best-Action"]
                    },
                    { 
                        industry: "Fund Admin & Cust.", 
                        icon: Building, 
                        color: "text-blue-400",
                        cases: ["Auto-Reconciliation", "NAV Anomalies", "Cash Flow Forecast", "Reg. Reporting"]
                    },
                    { 
                        industry: "Insurance", 
                        icon: Shield, 
                        color: "text-emerald-400",
                        cases: ["Claims Automation", "Risk Modeling", "Policy Underwriting", "Fraud Detection"]
                    },
                    { 
                        industry: "Banking", 
                        icon: Landmark, 
                        color: "text-indigo-400",
                        cases: ["Fraud Detection", "Credit Scoring", "Transaction Monitor", "Virtual Assistants"]
                    },
                    { 
                        industry: "Fiduciary", 
                        icon: Briefcase, 
                        color: "text-pink-400",
                        cases: ["Doc Extraction", "Compliance Checks", "Entity Management", "Trust Accounting"]
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-[#1e293b]/60 border border-white/5 rounded-xl p-3 hover:bg-[#1e293b] transition-all hover:scale-105 group">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1">
                                <item.icon size={16} className={item.color} />
                                <span className="text-[10px] lg:text-xs font-bold text-white uppercase tracking-wider truncate">{item.industry}</span>
                            </div>
                            <div className="space-y-1">
                                {item.cases.map((useCase, idx) => (
                                    <div key={idx} className="flex items-start gap-1.5">
                                        <div className={`w-1 h-1 rounded-full mt-1.5 ${item.color.replace('text-', 'bg-')}`}></div>
                                        <p className="text-[9px] text-gray-400 leading-tight group-hover:text-gray-200">{useCase}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
             </div>
        </div>
    </div>
  </SlideContainer>
);

// --- SLIDE 7: INDUSTRIES ---
interface IndustryCardProps {
   icon: React.ElementType;
   title: string;
   features: string[];
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon: Icon, title, features }) => (
   <div className="bg-[#161e2e] border border-slate-700/50 rounded-xl p-6 flex flex-col hover:border-blue-500/30 transition-all hover:scale-[1.02] shadow-lg h-full">
      <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#1e293b] flex items-center justify-center text-blue-400 transition-colors shadow-inner">
             <Icon size={24} />
          </div>
          <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <ul className="space-y-3 mt-auto">
         {features.map((feat, i) => (
             <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mt-1.5 shrink-0 group-hover:bg-blue-400 transition-colors"></span>
                <span>{feat}</span>
             </li>
         ))}
      </ul>
   </div>
);

const SidebarMenuItem = ({ label, active = false, icon: Icon }: any) => (
   <div className={`flex items-center justify-between px-6 py-4 rounded-lg cursor-pointer text-base font-medium transition-colors ${active ? 'bg-[#1e3a8a] text-white shadow-md' : 'text-slate-400 hover:bg-slate-800'}`}>
       <div className="flex items-center gap-4">
          {Icon && <Icon size={20} />}
          <span>{label}</span>
       </div>
       {active && <div className="w-2 h-2 rounded-full bg-blue-400"></div>}
   </div>
);

export const IndustriesSlide: React.FC = () => (
  <SlideContainer>
     <div className="fixed top-0 left-0 w-[800px] h-[800px] bg-blue-950/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

     <div className="flex flex-col h-full relative z-10">
         <div className="mb-10">
             <div className="flex items-center gap-4 mb-2">
               <div className="h-1 w-12 bg-blue-500"></div>
               <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Industry Focus</div>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-4">Sector Expertise</h2>
         </div>

         <div className="flex-1 bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden flex shadow-2xl">
            <div className="w-80 bg-[#0b1221] border-r border-slate-800 flex flex-col p-6 hidden md:flex">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 mt-2 pl-6">Locations</div>
                <div className="space-y-2 mb-10">
                   <SidebarMenuItem label="LUXEMBOURG" active icon={MapPin} />
                   <SidebarMenuItem label="France" />
                   <SidebarMenuItem label="Belgium" />
                </div>

                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 pl-6">Sectors</div>
                <div className="space-y-2 mb-auto">
                   <SidebarMenuItem label="Financial Markets" active icon={Folder} />
                   <SidebarMenuItem label="Transport" icon={Folder} />
                   <SidebarMenuItem label="Hospitality" icon={Folder} />
                   <SidebarMenuItem label="Retail" icon={Folder} />
                </div>
            </div>

            <div className="flex-1 flex flex-col bg-[#0f172a]">
                <div className="h-20 border-b border-slate-800 flex items-center px-8 gap-3 text-base text-slate-400">
                    <span className="hover:text-white cursor-pointer transition-colors">Adservio</span>
                    <ChevronRight size={16} className="text-slate-600" />
                    <span className="hover:text-white cursor-pointer transition-colors">Locations</span>
                    <ChevronRight size={16} className="text-slate-600" />
                    <span className="hover:text-white cursor-pointer transition-colors">Luxembourg</span>
                    <ChevronRight size={16} className="text-slate-600" />
                    <div className="flex items-center gap-3 bg-[#1e293b] px-4 py-2 rounded-lg text-white border border-slate-700 shadow-sm">
                       <Folder size={16} className="text-blue-400" />
                       <span className="font-medium">Financial Markets</span>
                    </div>
                </div>

                <div className="p-8 overflow-y-auto">
                   <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                       <IndustryCard title="Asset Management" icon={PieChart} features={['UCITS/AIFMD compliance', 'Portfolio operations', 'ESG reporting', 'Investor servicing']} />
                       <IndustryCard title="Private & Wealth Mgmt" icon={Gem} features={['Client onboarding', 'Regulatory reporting', 'Digital client experience', 'AML/KYC']} />
                       <IndustryCard title="Custodian & Fund Admin" icon={Building} features={['NAV operations', 'Transfer Agency', 'Reconciliations', 'Depositary oversight']} />
                       <IndustryCard title="Insurance" icon={Shield} features={['Solvency II', 'Claims processing', 'Policy administration', 'Distribution platforms']} />
                       <IndustryCard title="Banking & Neo Banks" icon={Landmark} features={['Core banking', 'Payments infrastructure', 'PSD2/DORA compliance', 'Credit operations']} />
                       <IndustryCard title="Fiduciary & Prof. Services" icon={Briefcase} features={['Document automation', 'Compliance workflows', 'Client lifecycle', 'Knowledge management']} />
                   </div>
                </div>
            </div>
         </div>
     </div>
  </SlideContainer>
);

// --- SLIDE 8: ECOSYSTEM ---
export const EcosystemSlide: React.FC = () => (
  <SlideContainer>
     <div className="fixed top-[-20%] left-[20%] w-[1000px] h-[1000px] bg-blue-900/10 rounded-full blur-3xl pointer-events-none z-0" />
     
     <div className="flex flex-col h-full relative z-10">
        <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
               <div className="h-1 w-12 bg-blue-500"></div>
               <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Our Ecosystem</div>
            </div>
            <h2 className="text-6xl font-bold text-white mb-2">Your Technology Catalyst</h2>
            <p className="text-gray-400 text-2xl font-light">
               Bridging the gap between complex technology and regulated business needs.
            </p>
        </div>

        <div className="flex-1 flex items-center relative">
            {/* SVG Lines Layer */}
            <div className="absolute inset-0 z-0 pointer-events-none">
               <svg className="w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                      <stop offset="100%" stopColor="rgba(59, 130, 246, 0.8)" />
                    </linearGradient>
                    <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                      <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Left connections (Tech to Center) - Coordinates approx based on layout */}
                  {[240, 360, 480, 600, 720].map((y, i) => (
                     <path 
                        key={`l-${i}`} 
                        d={`M 400 ${y} C 550 ${y}, 650 450, 800 450`} 
                        fill="none" 
                        stroke="url(#lineGradientLeft)" 
                        strokeWidth="2"
                        className="opacity-60"
                        style={{ animation: `dash 3s linear infinite`, strokeDasharray: 20 }}
                     />
                  ))}

                  {/* Right connections (Center to Financials) */}
                  {[240, 360, 480, 600, 720].map((y, i) => (
                     <path 
                        key={`r-${i}`} 
                        d={`M 800 450 C 950 450, 1050 ${y}, 1200 ${y}`} 
                        fill="none" 
                        stroke="url(#lineGradientRight)" 
                        strokeWidth="2"
                        className="opacity-60"
                     />
                  ))}
               </svg>
            </div>

            <div className="w-full flex justify-between items-center relative z-10 px-8 gap-16">
                
                {/* LEFT COLUMN - Tech Landscape */}
                <div className="w-[450px] flex flex-col items-end z-10">
                    <div className="flex items-center gap-4 mb-8 text-blue-400 text-sm font-bold tracking-widest uppercase self-end">
                        <span>Tech Landscape</span>
                        <div className="h-6 w-1 bg-blue-500"></div>
                    </div>
                    <div className="w-full space-y-4">
                         {[
                            { t: 'DATA INTELLIGENCE', d: 'Snowflake, PowerBI, Tableau, Qlik, Databricks, SAS', i: Database, c: 'text-cyan-400' },
                            { t: 'CLOUD & DEVOPS', d: 'Azure, AWS, Google Cloud, OpenShift, Terraform', i: Cloud, c: 'text-blue-400' },
                            { t: 'CORE BANKING', d: 'Olympic, Temenos T24, Avaloq, Sopra Banking, Thaler', i: Landmark, c: 'text-indigo-400' },
                            { t: 'INVESTMENT TECH', d: 'SimCorp, Multifonds, eFront, Aladdin, NeoXam, GP3', i: PieChart, c: 'text-orange-400' },
                            { t: 'ERP & REGTECH', d: 'SAP S/4, Oracle, Workday, OneSumX, Fenergo', i: Layers, c: 'text-purple-400' },
                            { t: 'AI & AUTOMATION', d: 'MS Copilot, UiPath, Blue Prism, OpenAI, Mistral', i: Bot, c: 'text-emerald-400' },
                         ].map((card, i) => (
                            <div key={i} className="group bg-[#0f172a]/90 backdrop-blur-md border border-slate-800 rounded-xl p-4 flex items-center justify-between relative hover:border-blue-500/50 hover:shadow-lg transition-all transform hover:scale-105 h-[100px]">
                               <div className="flex-1 mr-4">
                                  <div className="text-white font-bold text-sm">{card.t}</div>
                                  <div className="text-[10px] text-gray-400 mt-1 leading-tight">{card.d}</div>
                               </div>
                               <card.i className={card.c} size={24} />
                               {/* Dot connector - Hide for first item */}
                               {i !== 0 && (
                                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-blue-500 rounded-full border-2 border-[#0f172a]"></div>
                               )}
                            </div>
                         ))}
                    </div>
                </div>

                {/* CENTER - Adservio */}
                <div className="flex flex-col items-center justify-center z-10 shrink-0 relative">
                     <div className="absolute inset-0 bg-blue-600/20 blur-[100px] rounded-full"></div>
                     <div className="w-64 h-64 rounded-full bg-gradient-to-b from-blue-500 to-blue-900 p-1 shadow-[0_0_80px_rgba(59,130,246,0.4)] z-10 relative">
                         <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center relative overflow-hidden">
                            <AdservioLogo className="h-32 w-auto drop-shadow-[0_0_20px_rgba(59,130,246,0.8)]" showText={false} />
                         </div>
                     </div>
                     <div className="mt-8 text-center relative z-10 flex flex-col items-center">
                        <h3 className="text-5xl font-bold text-white tracking-widest drop-shadow-lg mb-6">ADSERVIO</h3>
                        <div className="space-y-1.5 flex flex-col items-start">
                            {['Scan', 'Select', 'Implement', 'Improve', 'Scale'].map((step, i) => (
                                <div key={i} className="flex items-center gap-3">
                                   <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
                                   <span className="text-sm font-bold text-blue-100 uppercase tracking-[0.15em] opacity-90">{step}</span>
                                </div>
                            ))}
                        </div>
                     </div>
                </div>

                {/* RIGHT COLUMN - Financial Inst */}
                <div className="w-[450px] flex flex-col items-start z-10">
                     <div className="flex items-center gap-4 mb-8 text-emerald-400 text-sm font-bold tracking-widest uppercase">
                        <div className="h-6 w-1 bg-emerald-500"></div>
                        <span>Financial Inst.</span>
                    </div>
                    <div className="w-full space-y-4">
                        {[
                           { l: 'Asset Management', i: PieChart },
                           { l: 'Private Banking', i: Gem },
                           { l: 'Custodian & Fund', i: Building },
                           { l: 'Insurance', i: Shield },
                           { l: 'Retail Banking', i: Landmark },
                           { l: 'Professional Svcs', i: Briefcase }
                        ].map((item, i) => (
                           <div key={i} className="group bg-[#0f172a]/90 backdrop-blur-md border border-slate-800 rounded-xl p-6 flex items-center gap-6 relative hover:border-emerald-500/50 hover:shadow-lg transition-all transform hover:scale-105 h-[100px]">
                               {/* Dot connector - Hide for first item */}
                               {i !== 0 && (
                                <div className="absolute left-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0f172a]"></div>
                               )}
                               {/* Replaced bullet point with Icon */}
                               <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                                  <item.i size={24} />
                               </div>
                               <span className="text-white font-bold text-lg">{item.l}</span>
                           </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
     </div>
  </SlideContainer>
);

// --- SLIDE 9: LEADERSHIP ---
interface LeaderCardProps {
  leader: any;
  index: number;
  onUpdate: (index: number, field: string, value: any) => void;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, index, onUpdate }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onUpdate(index, 'image', e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="bg-[#0b1221] border border-white/5 rounded-2xl flex flex-col group hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden shadow-xl h-full p-6">
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        className="hidden" 
        accept="image/*"
      />
      
      {/* Photo Area */}
      <div className="flex-1 flex items-center justify-center relative mb-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="w-40 h-40 rounded-full border-4 border-[#1e293b] bg-[#1e293b] shadow-2xl overflow-hidden cursor-pointer relative group/img transition-transform duration-300 hover:scale-105"
            title="Click to upload image"
          >
              {leader.image ? (
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-slate-700 to-slate-900">
                   <Users size={48} className="text-white/20" />
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 bg-black/40 transition-opacity">
                        <Upload size={24} className="text-white" />
                   </div>
                </div>
              )}
          </div>
      </div>

      {/* Name & Role */}
      <div className="text-center relative z-10">
          <input 
            type="text"
            value={leader.name}
            onChange={(e) => onUpdate(index, 'name', e.target.value)}
            className="text-2xl font-bold text-white mb-2 bg-transparent border border-transparent hover:border-white/10 focus:border-blue-500 rounded px-1 outline-none w-full text-center"
            placeholder="Name"
          />
          <input 
            type="text"
            value={leader.role}
            onChange={(e) => onUpdate(index, 'role', e.target.value)}
            className="text-blue-400 font-bold uppercase text-xs tracking-[0.2em] bg-transparent border border-transparent hover:border-white/10 focus:border-blue-500 rounded px-1 outline-none w-full text-center"
            placeholder="Role Title"
          />
      </div>
    </div>
  );
};

// Global variable to persist leaders data
let savedLeaders = [
    { 
        role: 'Managing Partner', 
        name: 'Jean Dupont',
        image: null as string | null
    },
    { 
        role: 'Partner, Technology', 
        name: 'Sarah Connor',
        image: null as string | null
    },
    { 
        role: 'Partner, Operations', 
        name: 'Marc Lefevre',
        image: null as string | null
    },
    { 
        role: 'Head of AI & Innovation', 
        name: 'Elena Rossi',
        image: null as string | null
    }
];

export const LeadershipSlide: React.FC = () => {
    const [leaders, setLeaders] = useState(savedLeaders);

    const handleUpdate = (index: number, field: string, value: any) => {
        const updated = [...leaders];
        updated[index] = { ...updated[index], [field]: value };
        setLeaders(updated);
        savedLeaders = updated;
    };

    return (
    <SlideContainer>
        <div className="flex flex-col h-full justify-center relative">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-2">
                   <div className="h-1 w-12 bg-blue-500"></div>
                   <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Our Team</div>
                   <div className="h-1 w-12 bg-blue-500"></div>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">Leadership & Expertise</h2>
                <p className="text-lg text-gray-400 max-w-4xl mx-auto font-light">
                    Built by engineers, led by experts.
                </p>
            </div>

            {/* Leaders Row - simplified 4 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 h-72">
                 {leaders.map((leader, i) => (
                     <LeaderCard key={i} index={i} leader={leader} onUpdate={handleUpdate} />
                 ))}
            </div>

            {/* TEAM ANALYTICS DASHBOARD - 3 Distinct Sections */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
               
               {/* SECTION 1: PYRAMID (The Structure) - Span 4 */}
               <div className="lg:col-span-4 bg-[#0f172a]/50 border border-blue-900/30 rounded-2xl p-6 flex flex-col shadow-lg backdrop-blur-sm relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Users size={20} /></div>
                          <div>
                            <h3 className="text-white font-bold uppercase tracking-wider text-xs">The Structure</h3>
                            <div className="text-lg font-bold text-white">300+ Consultants</div>
                          </div>
                      </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center justify-end gap-1.5 relative z-10 pb-2">
                      {/* Level 1 - Partners & Directors - 5% */}
                      <div className="w-[30%] h-8 bg-indigo-600 rounded-t-lg flex items-center justify-between px-3 shadow-lg border-t border-white/20 hover:w-[35%] transition-all duration-300 cursor-default group/l1">
                         <span className="text-[8px] font-bold text-white tracking-wide truncate mr-1">PARTNERS & DIRECTORS</span>
                         <span className="text-[8px] font-bold text-indigo-200">5%</span>
                      </div>
                      {/* Level 2 - Managers & Senior Managers - 15% */}
                      <div className="w-[55%] h-9 bg-blue-600 flex items-center justify-between px-4 shadow-lg border-t border-white/10 hover:w-[60%] transition-all duration-300 cursor-default group/l2">
                         <span className="text-[8px] font-bold text-white tracking-wide truncate mr-1">MANAGERS & SNR. MGRS</span>
                         <span className="text-[8px] font-bold text-blue-200">15%</span>
                      </div>
                      {/* Level 3 - Senior Consultants - 30% */}
                      <div className="w-[75%] h-10 bg-cyan-600 flex items-center justify-between px-6 shadow-lg border-t border-white/10 hover:w-[80%] transition-all duration-300 cursor-default group/l3">
                         <span className="text-[8px] font-bold text-white tracking-wide truncate mr-1">SENIOR CONSULTANTS</span>
                         <span className="text-[8px] font-bold text-cyan-200">30%</span>
                      </div>
                      {/* Level 4 - Consultants & Analysts - 50% */}
                      <div className="w-full h-11 bg-slate-700 rounded-b-lg flex items-center justify-between px-8 shadow-lg border-t border-white/5 hover:bg-slate-600 transition-colors cursor-default group/l4">
                         <span className="text-[8px] font-bold text-white tracking-wide truncate mr-1">CONSULTANTS & ANALYSTS</span>
                         <span className="text-[8px] font-bold text-slate-300">50%</span>
                      </div>
                  </div>
               </div>

               {/* SECTION 2: CERTIFICATIONS (Verified Expertise) - Span 4 */}
               <div className="lg:col-span-4 bg-[#0f172a]/50 border border-amber-900/30 rounded-2xl p-6 flex flex-col shadow-lg backdrop-blur-sm relative overflow-hidden">
                  <div className="flex items-center gap-3 mb-4 relative z-10">
                      <div className="p-2 bg-amber-500/20 rounded-lg text-amber-400"><Award size={20} /></div>
                      <div>
                        <h3 className="text-white font-bold uppercase tracking-wider text-xs">Verified Expertise</h3>
                        <div className="text-[10px] text-gray-400">Professional Certifications</div>
                      </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-4 relative z-10 overflow-y-auto pr-1 custom-scrollbar">
                      {/* Management */}
                      <div className="bg-[#1e293b]/50 p-3 rounded-xl border border-white/5">
                          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Management & Agile</div>
                          <div className="flex flex-wrap gap-1.5">
                              {['PMP®', 'Prince2', 'SAFe® Agilist', 'PSM I/II', 'CSPO', 'Lean Six Sigma'].map((cert, i) => (
                                  <span key={i} className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded text-[9px] font-bold text-amber-200">{cert}</span>
                              ))}
                          </div>
                      </div>
                      {/* Technical */}
                      <div className="bg-[#1e293b]/50 p-3 rounded-xl border border-white/5">
                          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Technical & Cloud</div>
                          <div className="flex flex-wrap gap-1.5">
                              {['AWS Sol. Arch.', 'Azure Expert', 'GCP Pro', 'CKA (K8s)', 'Terraform', 'CISSP', 'CISA', 'ISTQB'].map((cert, i) => (
                                  <span key={i} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] font-bold text-cyan-200">{cert}</span>
                              ))}
                          </div>
                      </div>
                      {/* Analysis */}
                      <div className="bg-[#1e293b]/50 p-3 rounded-xl border border-white/5">
                          <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">Analysis & Arch</div>
                          <div className="flex flex-wrap gap-1.5">
                              {['TOGAF 9', 'CBAP', 'IREB', 'ArchiMate'].map((cert, i) => (
                                  <span key={i} className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-[9px] font-bold text-purple-200">{cert}</span>
                              ))}
                          </div>
                      </div>
                  </div>
               </div>

               {/* SECTION 3: TALENT POOL (Profiles) - Span 4 */}
               <div className="lg:col-span-4 bg-[#0f172a]/50 border border-emerald-900/30 rounded-2xl p-6 flex flex-col shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400"><GraduationCap size={20} /></div>
                      <div>
                          <h3 className="text-white font-bold uppercase tracking-wider text-xs">Talent Pool</h3>
                          <div className="text-[10px] text-gray-400">Our Profile Types</div>
                      </div>
                  </div>
                  
                  <div className="flex-1 grid grid-rows-2 gap-4">
                      {/* Think, Plan, Build */}
                      <div className="bg-[#1e293b]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                          <div className="flex items-center gap-2 mb-2 text-blue-400">
                              <Lightbulb size={14} />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Think, Plan, Build</span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                              {['Project Managers', 'Business Analysts', 'Solution Architects', 'Fullstack Devs', 'DevOps Engineers', 'QA Automation'].map((p, i) => (
                                  <div key={i} className="flex items-center gap-1.5">
                                      <div className="w-1 h-1 rounded-full bg-blue-500"></div>
                                      <span className="text-[9px] text-gray-300">{p}</span>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Empower Operations */}
                      <div className="bg-[#1e293b]/50 p-4 rounded-xl border border-white/5 flex flex-col">
                           <div className="flex items-center gap-2 mb-2 text-emerald-400">
                              <Activity size={14} />
                              <span className="text-[10px] font-bold uppercase tracking-wider">Empower Operations</span>
                          </div>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                              {['KYC/AML Analysts', 'Fund Accountants', 'Transfer Agents', 'Compliance Officers', 'Data Stewards', 'Reporting Officers'].map((p, i) => (
                                  <div key={i} className="flex items-center gap-1.5">
                                      <div className="w-1 h-1 rounded-full bg-emerald-500"></div>
                                      <span className="text-[9px] text-gray-300">{p}</span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </div>
               </div>

            </div>
        </div>
    </SlideContainer>
    );
};

// --- SLIDE 10: PARTNERS (Why Us) ---
export const PartnerSlide: React.FC = () => (
  <SlideContainer>
    <div className="flex flex-col h-full relative z-10">
      {/* Header */}
      <div className="mb-8 flex-shrink-0">
         <div className="flex items-center gap-4 mb-2">
            <div className="h-1 w-12 bg-blue-500"></div>
            <div className="text-blue-500 text-sm font-bold uppercase tracking-widest">Why Clients Trust Adservio</div>
         </div>
         <h2 className="text-5xl md:text-6xl font-bold text-white mb-2">Proven, Committed</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-0">
          
          {/* COLUMN 1: QUOTE + 6 DIFFERENTIATORS (Span 8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* MD Quote */}
              <div className="bg-[#1e293b]/40 border-l-4 border-blue-500 p-6 rounded-r-xl relative backdrop-blur-sm shadow-lg">
                  <Quote className="absolute top-4 left-4 text-blue-500 opacity-30 transform -scale-x-100" size={32} />
                  <div className="pl-10 relative z-10">
                      <p className="text-lg md:text-xl text-gray-200 italic font-light leading-relaxed mb-4">
                        "Big enough to deliver. Small enough to care. Committed enough to stay until it's done right. Fifteen years of consistent growth have reinforced one conviction: client success is the only strategy that lasts. We succeed when you succeed — and every consultant who works with you carries our reputation. We take that personally."
                      </p>
                      <div className="text-right border-t border-white/5 pt-3 mt-2 inline-block float-right">
                          <div className="text-white font-bold text-lg">Adel BOUDHINA</div>
                          <div className="text-xs text-blue-400 font-bold uppercase tracking-widest">Managing Director BeLux</div>
                      </div>
                  </div>
              </div>

              {/* Differentiators Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 content-start">
                {/* 1. Track Record */}
                <div className="bg-[#1e293b]/40 border border-white/5 p-5 rounded-xl hover:border-blue-500/30 transition-all group flex flex-col hover:bg-[#1e293b]/60">
                    <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/10 group-hover:bg-blue-500/20 transition-colors"><CheckCircle size={22} /></div>
                        <span className="text-3xl font-bold text-white/5 group-hover:text-blue-500/10 transition-colors font-mono">01</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Proven Local Track Record</h4>
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">Trusted by 5+ Leaders</p>
                    <p className="text-sm text-gray-400 leading-snug">CSSF • CACEIS • CARMIGNAC • Advanzia • MANGOPAY</p>
                </div>

                {/* 2. Growth */}
                <div className="bg-[#1e293b]/40 border border-white/5 p-5 rounded-xl hover:border-emerald-500/30 transition-all group flex flex-col hover:bg-[#1e293b]/60">
                    <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 border border-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors"><TrendingUp size={22} /></div>
                        <span className="text-3xl font-bold text-white/5 group-hover:text-emerald-500/10 transition-colors font-mono">02</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">15 Years Growth</h4>
                    <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">Profitable since 2010</p>
                    <p className="text-sm text-gray-400 leading-snug">Stable, founder-led, long-term vision driving consistent results.</p>
                </div>

                {/* 3. Scale */}
                <div className="bg-[#1e293b]/40 border border-white/5 p-5 rounded-xl hover:border-indigo-500/30 transition-all group flex flex-col hover:bg-[#1e293b]/60">
                    <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 border border-indigo-500/10 group-hover:bg-indigo-500/20 transition-colors"><Globe size={22} /></div>
                        <span className="text-3xl font-bold text-white/5 group-hover:text-indigo-500/10 transition-colors font-mono">03</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Local & European</h4>
                    <p className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-2">Lux Roots, EU Scale</p>
                    <p className="text-sm text-gray-400 leading-snug">Local team + European network + Nearshore delivery center.</p>
                </div>

                 {/* 4. Dual Expertise */}
                <div className="bg-[#1e293b]/40 border border-white/5 p-5 rounded-xl hover:border-purple-500/30 transition-all group flex flex-col hover:bg-[#1e293b]/60">
                    <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-400 border border-purple-500/10 group-hover:bg-purple-500/20 transition-colors"><Layers size={22} /></div>
                        <span className="text-3xl font-bold text-white/5 group-hover:text-purple-500/10 transition-colors font-mono">04</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Dual Expertise Model</h4>
                    <p className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-2">One Partner. Full Spectrum.</p>
                    <p className="text-sm text-gray-400 leading-snug">IT (Dev, Arch, PM, QA) + Operations (Fund Admin, Compliance, KYC).</p>
                </div>

                {/* 5. AI */}
                <div className="bg-[#1e293b]/40 border border-white/5 p-5 rounded-xl hover:border-cyan-500/30 transition-all group flex flex-col hover:bg-[#1e293b]/60">
                    <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-cyan-500/10 rounded-lg text-cyan-400 border border-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors"><Bot size={22} /></div>
                        <span className="text-3xl font-bold text-white/5 group-hover:text-cyan-500/10 transition-colors font-mono">05</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">AI Built-In</h4>
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">Innovation as Standard</p>
                    <p className="text-sm text-gray-400 leading-snug">Embedded AI capabilities driving real efficiency gains.</p>
                </div>

                {/* 6. Agility */}
                <div className="bg-[#1e293b]/40 border border-white/5 p-5 rounded-xl hover:border-amber-500/30 transition-all group flex flex-col hover:bg-[#1e293b]/60">
                    <div className="flex justify-between items-start mb-3">
                        <div className="p-2.5 bg-amber-500/10 rounded-lg text-amber-400 border border-amber-500/10 group-hover:bg-amber-500/20 transition-colors"><Zap size={22} /></div>
                        <span className="text-3xl font-bold text-white/5 group-hover:text-amber-500/10 transition-colors font-mono">06</span>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">Boutique Agility</h4>
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">Big Firm Quality</p>
                    <p className="text-sm text-gray-400 leading-snug">Stable teams, direct access, accountable delivery.</p>
                </div>
              </div>
          </div>

          {/* COLUMN 2: AWARDS (Span 4) */}
          <div className="lg:col-span-4 flex flex-col h-full bg-[#0f172a] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none"></div>
              
              <div className="p-6 border-b border-white/10 bg-white/5 backdrop-blur-sm relative z-10">
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest flex items-center gap-3">
                     <div className="p-2 bg-amber-500/20 rounded-md"><Trophy size={18} className="text-amber-400" /></div>
                     Recognized Excellence
                  </h3>
              </div>

              <div className="p-6 space-y-8 overflow-y-auto custom-scrollbar relative z-10 flex-1">
                 {/* Growth */}
                 <div className="relative pl-6 border-l-2 border-amber-500/30 group">
                     <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-amber-500 group-hover:shadow-[0_0_8px_rgba(245,158,11,0.8)] transition-shadow"></div>
                     <h4 className="text-sm font-bold text-amber-400 uppercase tracking-widest mb-3">Growth</h4>
                     <ul className="space-y-3">
                        {['Inc. 5000 Europe (2017-19)', 'FT 1000 (2017-2023)', 'Deloitte Fast 50 (2021-23)', 'Champions de la Croissance'].map((a, i) => (
                           <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                              <div className="mt-1.5 w-1 h-1 bg-amber-500 rounded-full shrink-0 opacity-50"></div>
                              <span className="leading-snug">{a}</span>
                           </li>
                        ))}
                     </ul>
                 </div>

                 {/* Innovation */}
                 <div className="relative pl-6 border-l-2 border-cyan-500/30 group">
                     <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-shadow"></div>
                     <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-widest mb-3">Innovation</h4>
                     <ul className="space-y-3">
                        {['AmEx Innovation Prize (2017)', 'BPI Entreprise Innovante', 'EU Seal of Excellence (2021)', 'Prix Innovation IFTEC'].map((a, i) => (
                           <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                              <div className="mt-1.5 w-1 h-1 bg-cyan-500 rounded-full shrink-0 opacity-50"></div>
                              <span className="leading-snug">{a}</span>
                           </li>
                        ))}
                     </ul>
                 </div>

                 {/* Workplace */}
                 <div className="relative pl-6 border-l-2 border-emerald-500/30 group">
                     <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-shadow"></div>
                     <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-3">Workplace</h4>
                     <ul className="space-y-3">
                        {['Great Place to Work (2019-24)', 'Happy at Work (2019-24)', 'Positive Workplace (2022-23)'].map((a, i) => (
                           <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                              <div className="mt-1.5 w-1 h-1 bg-emerald-500 rounded-full shrink-0 opacity-50"></div>
                              <span className="leading-snug">{a}</span>
                           </li>
                        ))}
                     </ul>
                 </div>
              </div>
          </div>
      </div>
      
      {/* Bottom Tagline */}
      <div className="mt-6 flex justify-center pb-2">
          <div className="flex items-center gap-8 opacity-50">
             <span className="text-xs font-bold text-white uppercase tracking-[0.4em]">Proven</span>
             <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
             <span className="text-xs font-bold text-white uppercase tracking-[0.4em]">Agile</span>
             <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
             <span className="text-xs font-bold text-white uppercase tracking-[0.4em]">Committed</span>
          </div>
      </div>
    </div>
  </SlideContainer>
);

// --- SLIDE 11: CONTACT ---
export const ContactSlide: React.FC = () => (
  <SlideContainer>
    <div className="flex flex-col h-full relative z-10">
        {/* Decorative background - kept subtle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>

        {/* Top Content: Logo & Headlines */}
        <div className="flex-1 flex flex-col items-center justify-center text-center mt-10">
            <div className="mb-16 scale-110">
                 <AdservioLogo className="h-20" textClassName="text-6xl" />
            </div>

            <h2 className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-none drop-shadow-2xl">
                Let's Shape<br/>Your Future
            </h2>
            
            <div className="w-32 h-1.5 bg-blue-500 mb-10 rounded-full"></div>

            <p className="text-2xl md:text-4xl text-gray-300 font-light max-w-4xl leading-relaxed">
                Your toughest challenges deserve a committed partner.
            </p>
        </div>

        {/* Bottom Content: Contact Grid */}
        <div className="w-full max-w-7xl mx-auto mb-24 relative z-20">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                 {/* Email */}
                 <a href="mailto:contact@deltacc.net" className="group flex flex-col items-center p-10 rounded-3xl border border-white/5 bg-[#1e293b]/30 backdrop-blur-md hover:bg-[#1e293b]/60 hover:border-blue-500/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                     <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                         <Mail size={32} />
                     </div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Email Us</span>
                     <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">contact@deltacc.net</span>
                 </a>

                 {/* Location */}
                 <div className="flex flex-col items-center p-10 rounded-3xl border border-white/5 bg-[#1e293b]/30 backdrop-blur-md hover:bg-[#1e293b]/60 hover:border-emerald-500/30 transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-default group">
                     <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform border border-emerald-500/20">
                         <MapPin size={32} />
                     </div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Visit Us</span>
                     <div className="text-xl md:text-2xl font-bold text-white text-center leading-snug">
                        33 Boulevard Prince Henri<br/>
                        <span className="text-lg font-medium text-gray-400 mt-1 block">Luxembourg</span>
                     </div>
                 </div>

                 {/* Social */}
                 <a href="https://linkedin.com/company/adservio" target="_blank" rel="noreferrer" className="group flex flex-col items-center p-10 rounded-3xl border border-white/5 bg-[#1e293b]/30 backdrop-blur-md hover:bg-[#1e293b]/60 hover:border-blue-600/30 transition-all duration-300 shadow-xl hover:-translate-y-1">
                     <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform border border-blue-600/20">
                         <Linkedin size={32} />
                     </div>
                     <span className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Connect</span>
                     <span className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Adservio Group</span>
                 </a>
             </div>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-8 left-0 w-full text-center">
            <div className="inline-block px-4 py-2 rounded-full border border-white/5 bg-black/20 backdrop-blur-sm">
                <span className="text-gray-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
                    © Adservio. All rights reserved 2026
                </span>
            </div>
        </div>
    </div>
  </SlideContainer>
);