"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { motion, AnimatePresence } from "framer-motion";
import { PanelLeft } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="relative flex h-screen w-full bg-[var(--color-main-bg)] overflow-hidden">
            {/* Topbar: Fixed at the top, z-10, sits behind Sidebar when expanded */}
            <div className="absolute top-0 left-0 w-full z-10">
                <Topbar isExpanded={isExpanded} />
            </div>

            {/* Sidebar: Flex item, Z-20 to cover Topbar, smoothly transitions width */}
            <div className={`relative z-20 flex flex-col h-full bg-transparent transition-all duration-300 ${isExpanded ? 'w-[260px]' : 'w-0'}`}>
                <Sidebar isExpanded={isExpanded} />
            </div>

            {/* Main Application Area (Right Side) */}
            <div
                className={`relative z-0 flex flex-col flex-1 h-full transition-all duration-300 pt-[var(--topbar-height)] ${isExpanded
                    ? 'pr-[16px] pb-[16px] pl-0'
                    : 'px-[16px] pb-[16px]'
                    }`}
            >
                {/* Main Content Card/Area with Ambient Background */}
                <div className="flex-1 flex flex-col overflow-hidden rounded-lg relative">
                    {/* Ambient Background Layer - Fixed position within container */}
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <AmbientBackground />
                    </div>

                    {/* Main content with scroll containment */}
                    <main className="relative z-10 flex-1 flex flex-col items-center justify-center p-4 overflow-hidden">
                        {/* Toggle Button - Manual override */}
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="absolute top-4 left-4 p-2 hover:bg-black/5 rounded-md transition-colors text-black/40 hover:text-black z-50"
                        >
                            <PanelLeft size={20} />
                        </button>
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}

