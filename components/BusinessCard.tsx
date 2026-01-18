"use client";

import React, { useState, useRef, useEffect } from "react";

interface BusinessCardProps {
    className?: string;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ className }) => {
    const [animationsPaused, setAnimationsPaused] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);
    const loopCountRef = useRef(0);

    useEffect(() => {
        // Track animation iterations and pause after 5 loops (~30s for 6s animations)
        const timer = setTimeout(() => {
            setAnimationsPaused(true);
        }, 30000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => setAnimationsPaused(false);
    const handleMouseLeave = () => {
        if (loopCountRef.current >= 5) {
            setAnimationsPaused(true);
        }
    };
    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full aspect-[4/3] bg-white rounded-[1.25rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col group transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-default ${className || ""}`}
            style={{ animationPlayState: animationsPaused ? 'paused' : 'running' } as React.CSSProperties}
        >

            {/* Visual Workspace Section */}
            <div className="relative flex-1 w-full overflow-hidden bg-[#FBFBFD] p-2.5">

                {/* Subtle Depth Layers - No blur */}
                <div className="absolute inset-0 transition-opacity duration-1000 group-hover:opacity-80">
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#F2F2F7] rounded-full blur-0 opacity-30"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E5E5EA] rounded-full blur-0 opacity-30"></div>
                </div>

                {/* 3D Focal Container */}
                <div className="relative w-full h-full flex flex-col gap-1.5 z-10">
                    <div className="relative w-full h-full transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02]">

                        {/* The "Glass Canvas" */}
                        <div className="w-full h-full bg-white/60 border border-white/80 rounded-[1.25rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden flex flex-col p-2 gap-1 ring-1 ring-black/[0.01]">

                            {/* Minimal Tool Items */}
                            <div className="flex-1 flex flex-col gap-1">

                                {/* 1. Market Summary - Dynamic Equilibrium */}
                                <div className="flex-1 bg-white/50 rounded-lg border border-white/60 px-2 py-1.5 flex items-center justify-between group/item transition-all duration-500 hover:bg-white/90 min-h-0">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-semibold text-slate-900 leading-tight">Market Summary</span>
                                        <span className="text-[6px] text-slate-400 font-medium tracking-wide uppercase leading-tight">Real-time Pulse</span>
                                    </div>
                                    <div className="flex items-end gap-0.5 h-3.5">
                                        {[0.2, 0.5, 0.3, 0.7, 0.4].map((delay, i) => (
                                            <div key={i} className="w-0.5 bg-slate-300 rounded-full animate-[bar-bounce_6s_infinite_ease-in-out]" style={{ animationDelay: `${delay * 2}s`, height: `${40 + delay * 60}%` }}></div>
                                        ))}
                                    </div>
                                </div>

                                {/* 2. Client Proposal - Flow Signature */}
                                <div className="flex-1 bg-white/50 rounded-lg border border-white/60 px-2 py-1.5 flex items-center justify-between group/item transition-all duration-500 hover:bg-white/90 min-h-0">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-semibold text-slate-900 leading-tight">Client Proposal</span>
                                        <span className="text-[6px] text-slate-400 font-medium tracking-wide uppercase leading-tight">Smart Drafts</span>
                                    </div>
                                    <div className="relative w-6 h-6 flex items-center justify-center">
                                        <svg className="w-4 h-4 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                        <svg className="absolute w-4 h-4 text-slate-900" viewBox="0 0 50 50">
                                            <path d="M10,35 Q20,20 30,30 T45,15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="100" className="animate-[signature-draw_3s_infinite_alternate_ease-in-out]" />
                                        </svg>
                                    </div>
                                </div>

                                {/* 3. Business Plan - The Blueprint */}
                                <div className="flex-1 bg-white/50 rounded-lg border border-white/60 px-2 py-1.5 flex items-center justify-between group/item transition-all duration-500 hover:bg-white/90 min-h-0">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-semibold text-slate-900 leading-tight">Business Plan</span>
                                        <span className="text-[6px] text-slate-400 font-medium tracking-wide uppercase leading-tight">Growth Engine</span>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {[0, 1, 2].map((i) => (
                                            <div key={i} className="w-1.5 h-1.5 rounded-md border-2 border-slate-200 flex items-center justify-center relative overflow-hidden">
                                                <div className="absolute inset-0 bg-slate-900 opacity-0 animate-[blueprint-fill_10s_infinite]" style={{ animationDelay: `${i * 0.8}s` }}></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* 4. Competitive Research - Radar Scan */}
                                <div className="flex-1 bg-white/50 rounded-lg border border-white/60 px-2 py-1.5 flex items-center justify-between group/item transition-all duration-500 hover:bg-white/90 min-h-0">
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-semibold text-slate-900 leading-tight">Competitive Research</span>
                                        <span className="text-[6px] text-slate-400 font-medium tracking-wide uppercase leading-tight">Market Clarity</span>
                                    </div>
                                    <div className="relative w-4 h-4 rounded-full border border-slate-200 flex items-center justify-center overflow-hidden">
                                        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,#000_360deg)] opacity-[0.05] animate-[spin_12s_linear_infinite]"></div>
                                        <div className="w-1 h-1 bg-slate-900 rounded-full animate-pulse"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Interaction Highlight - No blur */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.3)_0%,transparent_50%)] blur-0"></div>
        </div>
    );
};

export default BusinessCard;
