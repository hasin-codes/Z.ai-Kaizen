"use client";

import React, { useState, useRef, useEffect } from "react";

interface LinkedinCardProps {
    className?: string;
    onClick?: () => void;
}

export const LinkedinCard: React.FC<LinkedinCardProps> = ({ className, onClick }) => {
    const [animationsPaused, setAnimationsPaused] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pause after 5 loops (~35s for 7s animations)
        const timer = setTimeout(() => {
            setAnimationsPaused(true);
        }, 35000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => setAnimationsPaused(false);
    const handleMouseLeave = () => setAnimationsPaused(true);

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full aspect-[4/3] bg-white rounded-[1.25rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col group transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-pointer ${className || ""}`}
            onClick={onClick}
        >

            {/* Visual Header */}
            <div className="relative flex-1 w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 overflow-hidden font-sans p-2">

                {/* Subtle Grid Background */}
                <div className="absolute inset-0 opacity-[0.05]"
                     style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
                </div>

                {/* Ambient Glows - No blur */}
                <div className="absolute -top-10 -right-10 w-56 h-56 bg-blue-100/40 rounded-full blur-0"></div>
                <div className="absolute top-1/2 -left-20 w-48 h-48 bg-indigo-100/30 rounded-full blur-0"></div>

                {/* 3D Container */}
                <div className="absolute inset-0 flex items-center justify-center perspective-[800px] z-10">
                    <div className="relative w-[240px] transform rotate-x-12 rotate-y-[-8deg] rotate-z-1 transition-transform duration-500 group-hover:rotate-x-0 group-hover:rotate-y-0 group-hover:rotate-z-0">

                        {/* Glass Panel */}
                        <div className="bg-white/80 backdrop-blur-xl border border-white/90 rounded-xl shadow-lg overflow-hidden flex flex-col p-1.5 gap-1.5">

                            {/* Header */}
                            <div className="h-7 border-b border-slate-200/60 flex items-center justify-between px-2 bg-white/50">
                                <div className="flex gap-1">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                                </div>
                                <div className="text-[7px] font-bold text-blue-900/40 uppercase tracking-wider">POST ARCHITECT</div>
                            </div>

                            {/* Item 1: Topic Research */}
                            <div className="relative h-10 bg-white/60 rounded-lg flex items-center px-2 gap-2 border border-transparent hover:border-blue-200 transition-colors group/item">
                                <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 relative overflow-hidden shrink-0">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-5 h-5 border border-blue-200 rounded-full opacity-0 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                    </div>
                                    <svg className="w-3.5 h-3.5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-[9px] font-bold text-slate-700">Topic Research</div>
                                    <div className="text-[7px] text-slate-400">Trend Analysis</div>
                                </div>
                            </div>

                            {/* Item 2: Fact Verification */}
                            <div className="relative h-10 bg-white/60 rounded-lg flex items-center px-2 gap-2 border border-transparent hover:border-cyan-200 transition-colors">
                                <div className="w-7 h-7 rounded-md bg-cyan-50 flex items-center justify-center text-cyan-600 relative shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="text-[9px] font-bold text-slate-700 leading-none mb-1">Fact Verification</div>
                                    <div className="flex items-center gap-1">
                                        <div className="h-0.5 w-10 bg-slate-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-cyan-400 animate-[loading_3s_ease-in-out_infinite]"></div>
                                        </div>
                                        <span className="text-[7px] text-cyan-500 font-medium">100%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Item 3: Smart Drafting */}
                            <div className="relative h-10 bg-white/60 rounded-lg flex items-center px-2 gap-2 border border-transparent hover:border-indigo-200 transition-colors">
                                <div className="w-7 h-7 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="text-[9px] font-bold text-slate-700 leading-none">Smart Drafting</div>
                                    <div className="flex gap-0.5 mt-1">
                                        <div className="h-1 w-2 bg-indigo-200 rounded-[1px]"></div>
                                        <div className="h-1 w-3 bg-indigo-300 rounded-[1px]"></div>
                                        <div className="h-1 w-4 bg-indigo-400 rounded-[1px]"></div>
                                        <div className="h-1 w-3 bg-indigo-300 rounded-[1px]"></div>
                                        <div className="h-1 w-2 bg-indigo-200 rounded-[1px]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Item 4: Scheduling */}
                            <div className="relative h-10 bg-white/60 rounded-lg flex items-center px-2 gap-2 border border-transparent hover:border-violet-200 transition-colors">
                                <div className="w-7 h-7 rounded-md bg-violet-50 flex items-center justify-center text-violet-500 shrink-0">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="text-[9px] font-bold text-slate-700 leading-none">Auto Schedule</div>
                                    <div className="flex gap-0.5 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-violet-200 text-[6px] flex items-center justify-center text-violet-500">M</div>
                                        <div className="w-2 h-2 rounded-full bg-violet-300 text-[6px] flex items-center justify-center text-violet-600">T</div>
                                        <div className="w-2 h-2 rounded-full bg-violet-200 text-[6px] flex items-center justify-center text-violet-500">W</div>
                                    </div>
                                </div>
                            </div>

                            {/* Scanning Beam Overlay - No blur */}
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-0 shadow-[0_0_5px_rgba(59,130,246,0.2)] animate-[scan-vertical_7s_linear_infinite] pointer-events-none"></div>

                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes scan-vertical {
                        0% { top: 0%; opacity: 0; }
                        15% { opacity: 1; }
                        85% { opacity: 1; }
                        100% { top: 100%; opacity: 0; }
                    }
                    @keyframes loading {
                        0% { width: 0%; }
                        50% { width: 70%; }
                        100% { width: 100%; }
                    }
                    .animate-\\[scan-vertical_7s_linear_infinite\\] {
                        animation: scan-vertical 7s linear infinite;
                        animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                    }
                    .animate-\\[loading_3s_ease-in-out_infinite\\] {
                        animation: loading 3s ease-in-out infinite;
                        animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                    }
                    .animate-\\[ping_4s_cubic-bezier\\(0\\2c 0\\2c 0\\.2\\2c 1\\)_infinite\\] {
                        animation: ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;
                        animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                    }
                `}</style>
            </div>

        </div>
    );
};

export default LinkedinCard;
