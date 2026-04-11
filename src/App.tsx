/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { 
  LayoutDashboard, 
  Quote, 
  ChevronLeft, 
  ExternalLink,
  Monitor,
  Smartphone,
  Maximize2,
  Settings,
  Terminal,
  Cpu,
  Code2,
  Activity,
  Zap,
  Layers,
  MousePointer2,
  Mail,
  Phone,
  Calendar,
  X,
  Clock,
  ArrowRight
} from "lucide-react";

interface AppConfig {
  id: string;
  name: string;
  url: string;
  icon: React.ElementType;
  description: string;
  gradient: string;
  glow: string;
}

const APPS: AppConfig[] = [
  {
    id: "po-dashboard",
    name: "PO Dashboard",
    url: "https://maniranjanpo.netlify.app/",
    icon: LayoutDashboard,
    description: "Enterprise purchase order management system with real-time tracking.",
    gradient: "from-violet-600 to-indigo-600",
    glow: "shadow-violet-500/20",
  },
  {
    id: "quote-dashboard",
    name: "Quote Dashboard",
    url: "https://ethenquotes.netlify.app/",
    icon: Quote,
    description: "Advanced sales quotation engine with dynamic pricing models.",
    gradient: "from-fuchsia-600 to-rose-600",
    glow: "shadow-fuchsia-500/20",
  },
];

const FawwazLogo = ({ className = "" }: { className?: string }) => (
  <motion.div 
    className={`flex items-center gap-4 font-sans ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative flex items-center justify-center">
      <motion.div 
        className="text-5xl font-black leading-none tracking-tighter"
        initial={{ scale: 0.5, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <span className="text-white">F</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-fuchsia-500">C</span>
      </motion.div>
      <motion.div 
        className="absolute -inset-4 border-2 border-violet-500/20 rounded-2xl"
        animate={{ 
          rotate: [0, 90, 180, 270, 360],
          borderRadius: ["20%", "50%", "20%"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-xl font-extrabold uppercase tracking-tighter text-white">Fawwaz</span>
      <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-violet-400/80">Creations</span>
    </div>
  </motion.div>
);

const SupportModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] glass-card p-8 sm:p-12"
          >
            <button 
              onClick={onClose}
              className="absolute right-8 top-8 rounded-full bg-white/5 p-2 hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5 text-zinc-400" />
            </button>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] text-violet-400 uppercase">Support Center</span>
              </div>
              <h3 className="text-4xl font-black tracking-tight text-white">Get in Touch</h3>
            </div>

            <div className="space-y-6 mb-12">
              <a 
                href="mailto:fawwazwasique@gmail.com"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400 group-hover:bg-violet-500 group-hover:text-white transition-all">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Address</div>
                  <div className="text-lg font-bold text-white">fawwazwasique@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+918681896147"
                className="group flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-fuchsia-500/30 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Phone Number</div>
                  <div className="text-lg font-bold text-white">+91 8681896147</div>
                </div>
              </a>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <button className="relative w-full flex items-center justify-between gap-4 p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center gap-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Availability</div>
                    <div className="text-lg font-bold text-white">Schedule a Visit</div>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </button>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest">
              <Clock className="h-3 w-3" />
              Response Time: &lt; 2 Hours
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const TiltCard = ({ app, index, onClick }: { app: AppConfig; index: number; onClick: () => void; key?: string | number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      <button
        onClick={onClick}
        className="relative flex w-full flex-col overflow-hidden rounded-[2.5rem] glass-card p-12 text-left transition-all hover:border-violet-500/50"
      >
        <div style={{ transform: "translateZ(50px)" }} className="relative z-10 w-full">
          <div className={`mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${app.gradient} text-white shadow-2xl ${app.glow} ring-1 ring-white/20`}>
            <app.icon className="h-8 w-8" />
          </div>
          
          <h3 className="text-3xl font-extrabold text-white mb-4 group-hover:text-gradient transition-all">
            {app.name}
          </h3>
          
          <p className="text-zinc-400 leading-relaxed text-lg font-medium mb-12">
            {app.description}
          </p>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-white group-hover:translate-x-2 transition-transform">
              Launch System
              <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-violet-500 transition-colors">
                <Maximize2 className="h-4 w-4" />
              </div>
            </div>
            <div className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
          </div>
        </div>

        {/* Background Glow */}
        <div className={`absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${app.gradient} opacity-0 group-hover:opacity-20 transition-opacity blur-[80px]`} />
      </button>
    </motion.div>
  );
};

const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    <div className="absolute inset-0 aurora-bg opacity-40" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
    
    {/* Floating Orbs */}
    <motion.div 
      className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-violet-600/20 rounded-full blur-[120px]"
      animate={{ 
        x: [0, 100, 0],
        y: [0, 50, 0],
        scale: [1, 1.2, 1]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div 
      className="absolute bottom-[20%] right-[10%] w-[25vw] h-[25vw] bg-fuchsia-600/20 rounded-full blur-[120px]"
      animate={{ 
        x: [0, -80, 0],
        y: [0, -40, 0],
        scale: [1.2, 1, 1.2]
      }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

export default function App() {
  const [activeApp, setActiveApp] = useState<AppConfig | null>(null);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [isLoading, setIsLoading] = useState(true);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenApp = (app: AppConfig) => {
    setActiveApp(app);
  };

  const handleBack = () => {
    setActiveApp(null);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-violet-500/30">
      <AnimatedBackground />
      <SupportModal isOpen={isSupportOpen} onClose={() => setIsSupportOpen(false)} />

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.1,
              filter: "blur(20px)"
            }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303]"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center gap-12"
            >
              <FawwazLogo className="scale-150" />
              
              <div className="relative w-64 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500"
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                />
                <motion.div 
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-4"
              >
                {["INIT", "LOAD", "SYNC", "READY"].map((step, i) => (
                  <motion.span
                    key={step}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ delay: 1 + i * 0.2, duration: 2, repeat: Infinity }}
                    className="text-[10px] font-mono tracking-widest text-violet-400"
                  >
                    {step}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full glass-nav">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
          <div className="flex items-center gap-6">
            {activeApp && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={handleBack}
                className="group flex items-center justify-center rounded-xl bg-white/5 p-2.5 hover:bg-white/10 transition-all border border-white/10"
              >
                <ChevronLeft className="h-5 w-5 text-zinc-400 group-hover:text-violet-400" />
              </motion.button>
            )}
            <FawwazLogo className={activeApp ? "scale-75 origin-left" : ""} />
          </div>

          <div className="flex items-center gap-4">
            {activeApp && (
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1 rounded-xl bg-white/5 p-1.5 border border-white/10 sm:flex">
                  <button
                    onClick={() => setViewMode("desktop")}
                    className={`rounded-lg px-4 py-2 text-xs font-bold transition-all flex items-center gap-2 ${
                      viewMode === "desktop"
                        ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <Monitor className="h-3.5 w-3.5" />
                    DESKTOP
                  </button>
                  <button
                    onClick={() => setViewMode("mobile")}
                    className={`rounded-lg px-4 py-2 text-xs font-bold transition-all flex items-center gap-2 ${
                      viewMode === "mobile"
                        ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20"
                        : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <Smartphone className="h-3.5 w-3.5" />
                    MOBILE
                  </button>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={activeApp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-violet-500/20"
                >
                  <span className="hidden sm:inline">LIVE PREVIEW</span>
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </div>
            )}
            {!activeApp && (
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-6 text-[10px] font-bold tracking-[0.2em] text-zinc-500">
                  <span className="hover:text-violet-400 cursor-pointer transition-colors">DOCS</span>
                  <span 
                    onClick={() => setIsSupportOpen(true)}
                    className="hover:text-violet-400 cursor-pointer transition-colors"
                  >
                    SUPPORT
                  </span>
                  <span className="hover:text-violet-400 cursor-pointer transition-colors">API</span>
                </div>
                <button className="rounded-xl bg-white/5 p-2.5 border border-white/10 hover:bg-white/10 transition-all">
                  <Settings className="h-5 w-5 text-zinc-400" />
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {!activeApp ? (
            <motion.div
              key="launcher"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-8"
            >
              <div className="mb-24 relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-px w-12 bg-violet-500" />
                    <span className="text-xs font-bold tracking-[0.4em] text-violet-400 uppercase">Next Gen Interface</span>
                  </div>
                  <h2 className="text-6xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl mb-8 leading-[0.9]">
                    Experience <br />
                    <span className="text-gradient">The Future.</span>
                  </h2>
                  <p className="max-w-2xl text-xl text-zinc-400 leading-relaxed font-medium">
                    Deploy and manage your digital ecosystem with unparalleled precision. 
                    Crafted for visionaries, powered by <span className="text-white">Fawwaz Creations</span>.
                  </p>
                </motion.div>
                
                {/* Floating Elements */}
                <div className="absolute top-0 right-0 hidden lg:block">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-64 h-64"
                  >
                    <Layers className="absolute top-0 left-0 h-12 w-12 text-violet-500/20" />
                    <Zap className="absolute bottom-0 right-0 h-16 w-16 text-fuchsia-500/20" />
                    <MousePointer2 className="absolute top-1/2 left-1/2 h-8 w-8 text-cyan-500/20" />
                  </motion.div>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
                {APPS.map((app, index) => (
                  <TiltCard 
                    key={app.id} 
                    app={app} 
                    index={index} 
                    onClick={() => handleOpenApp(app)} 
                  />
                ))}
              </div>

              <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Uptime", val: "99.99%", color: "text-green-400" },
                  { label: "Latency", val: "14ms", color: "text-cyan-400" },
                  { label: "Security", val: "Level 5", color: "text-violet-400" },
                  { label: "Nodes", val: "24 Active", color: "text-fuchsia-400" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col gap-2"
                  >
                    <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-500 uppercase">{stat.label}</span>
                    <span className={`text-2xl font-black ${stat.color}`}>{stat.val}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="app-view"
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="flex w-full flex-col items-center p-4 sm:p-8"
              style={{ height: "calc(100vh - 80px)" }}
            >
              <div 
                className={`h-full w-full transition-all duration-1000 cubic-bezier(0.22,1,0.36,1) ${
                  viewMode === "mobile" 
                    ? "max-w-[400px] rounded-[4rem] border-[16px] border-zinc-900 shadow-[0_0_120px_rgba(139,92,246,0.3)] overflow-hidden relative" 
                    : "max-w-full rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden"
                }`}
              >
                {viewMode === "mobile" && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-zinc-900 rounded-b-[2rem] z-20 flex items-center justify-center">
                    <div className="w-12 h-1 bg-zinc-800 rounded-full" />
                  </div>
                )}
                <iframe
                  src={activeApp.url}
                  className="h-full w-full border-none bg-white"
                  title={activeApp.name}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
