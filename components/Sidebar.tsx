"use client";

import { motion } from "framer-motion";
import {
    Plus,
    Search,
    LayoutGrid,
    Clock,
    Box,
    FileText,
    ChevronDown,
    ChevronRight,
    Star,
    MoreVertical,
    Pin,
    Pencil,
    Copy,
    Archive,
    Trash,
    Download
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface SidebarProps {
    isExpanded: boolean;
}

export default function Sidebar({ isExpanded }: SidebarProps) {
    const router = useRouter();
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(true);
    const [isRecentsOpen, setIsRecentsOpen] = useState(true);
    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

    const navItems = [
        { icon: Search, label: "Search" },
        { icon: LayoutGrid, label: "Projects" },
        { icon: Clock, label: "Recents" },
        { icon: Box, label: "Design Systems" },
        { icon: FileText, label: "Templates" },
    ];

    const recentProjects = [
        "Fernando Alonso landing ..",
        "AI Council Vibecoder",
        "MethaneViz AI design",
        "Telemetry Insight AI",
        "Abstract Stock website",
        "Onedot2 UI Specification",
        "Onedot2 AI Workspace",
        "Marathon registration sys..",
        "Kindle niche finder",
    ];

    // Close menu when clicking outside (simple implementation for now, could use a ref/hook later)
    const toggleMenu = (e: React.MouseEvent, idx: number) => {
        e.preventDefault();
        e.stopPropagation();
        setActiveMenuIndex(activeMenuIndex === idx ? null : idx);
    };

    return (
        <motion.div
            animate={{ width: isExpanded ? 260 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="h-full bg-[var(--color-sidebar-bg)] flex flex-col overflow-hidden"
        >
            <div className={`w-[260px] h-full flex flex-col ${!isExpanded ? 'opacity-0' : 'opacity-100 transition-opacity duration-200 delay-100'}`}>
                {/* Top Section */}
                <div className="p-4 flex flex-col gap-6">
                    {/* Logo Area */}
                    <button
                        onClick={() => router.push("/")}
                        className="h-12 flex items-center overflow-hidden hover:opacity-80 transition-opacity"
                    >
                        <div className="flex items-center gap-3">
                            <Image src="/Kaizen.png" alt="Logo" width={40} height={40} className="rounded-lg" />
                            <span className="font-bold text-2xl tracking-tight text-zinc-900">Z.ai</span>
                        </div>
                    </button>

                    {/* New Chat Button */}
                    <button className="flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-black font-semibold w-full py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                        <Plus size={20} strokeWidth={2.5} />
                        <span className="text-base">New Chat</span>
                    </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-3 flex flex-col gap-1 overflow-y-auto custom-scrollbar">
                    {navItems.map((item, idx) => (
                        <button
                            key={idx}
                            className="flex items-center gap-4 p-3 w-full rounded-xl hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-all group"
                        >
                            <item.icon size={22} className="shrink-0" />
                            <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                        </button>
                    ))}

                    <div className="mt-8 mb-2">
                        <div className="flex items-center justify-between px-3 mb-2">
                            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Chat History</span>
                            <button className="p-1 hover:bg-zinc-100 rounded-md text-zinc-400 hover:text-zinc-600 transition-colors">
                                <Plus size={14} />
                            </button>
                        </div>

                        {isRecentsOpen && (
                            <div className="flex flex-col gap-0.5" onMouseLeave={() => setActiveMenuIndex(null)}>
                                {recentProjects.map((project, idx) => (
                                    <div key={idx} className="relative group">
                                        <button
                                            className={`flex items-center justify-between w-full px-3 py-2.5 text-sm rounded-lg text-left truncate transition-colors ${activeMenuIndex === idx ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                                                }`}
                                        >
                                            <span className="truncate pr-8">{project}</span>

                                            <div
                                                onClick={(e) => toggleMenu(e, idx)}
                                                className={`absolute right-2 p-1 rounded-md hover:bg-zinc-200 text-zinc-400 hover:text-zinc-600 transition-colors ${activeMenuIndex === idx ? 'opacity-100 bg-zinc-200 text-zinc-900' : 'opacity-0 group-hover:opacity-100'
                                                    }`}
                                            >
                                                <MoreVertical size={14} />
                                            </div>
                                        </button>

                                        {/* Context Menu */}
                                        {activeMenuIndex === idx && (
                                            <div className="absolute top-8 right-2 z-50 w-48 bg-white border border-zinc-200 rounded-xl shadow-2xl p-1.5 flex flex-col gap-0.5 animate-in fade-in zoom-in-95 duration-100 origin-top-right">
                                                <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 text-xs font-medium transition-colors">
                                                    <Pin size={14} className="text-zinc-400" />
                                                    Pin
                                                </button>
                                                <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 text-xs font-medium transition-colors">
                                                    <Pencil size={14} className="text-zinc-400" />
                                                    Rename
                                                </button>
                                                <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 text-xs font-medium transition-colors">
                                                    <Copy size={14} className="text-zinc-400" />
                                                    Clone
                                                </button>
                                                <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 text-xs font-medium transition-colors">
                                                    <Archive size={14} className="text-zinc-400" />
                                                    Archive
                                                </button>
                                                <div className="h-px bg-zinc-100 my-0.5" />
                                                <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-red-50 text-red-500 hover:text-red-600 text-xs font-medium transition-colors">
                                                    <Trash size={14} />
                                                    Delete
                                                </button>
                                                <button className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-zinc-100 text-zinc-700 hover:text-zinc-900 text-xs font-medium transition-colors">
                                                    <Download size={14} className="text-zinc-400" />
                                                    Download
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
