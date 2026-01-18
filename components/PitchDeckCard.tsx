"use client";

import React, { useState, useRef, useEffect } from "react";

interface PitchDeckCardProps {
    className?: string;
}

export const PitchDeckCard: React.FC<PitchDeckCardProps> = ({ className }) => {
    const [animationsPaused, setAnimationsPaused] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Pause after 5 loops (~50s for 10s animations)
        const timer = setTimeout(() => {
            setAnimationsPaused(true);
        }, 50000);

        return () => clearTimeout(timer);
    }, []);

    const handleMouseEnter = () => setAnimationsPaused(false);
    const handleMouseLeave = () => setAnimationsPaused(true);

    return (
        <div
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full aspect-[4/3] bg-white rounded-[1.25rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col group transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-default ${className || ""}`}
        >

            {/* Main Screen Area */}
            <div className="relative flex-1 w-full bg-[#FAFAFA] overflow-hidden flex flex-col items-center justify-center p-2">

                {/* Subtle Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]"
                     style={{
                         backgroundImage: `linear-gradient(#94A3B8 1px, transparent 1px), linear-gradient(to right, #94A3B8 1px, transparent 1px)`,
                         backgroundSize: '20px 20px'
                     }}>
                </div>

                {/* Background Atmosphere - No blur */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] bg-gradient-to-b from-blue-50 via-indigo-50 to-violet-50"></div>
                    <div className="absolute top-[30%] left-[5%] w-32 h-32 bg-blue-200/15 rounded-full blur-0 mix-blend-multiply animate-blob"></div>
                    <div className="absolute bottom-[20%] right-[10%] w-36 h-36 bg-violet-200/15 rounded-full blur-0 mix-blend-multiply animate-blob" style={{animationDelay: '2s'}}></div>
                </div>

                {/* The Application Window */}
                <div className="relative z-10 w-full max-w-[280px] bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col overflow-hidden transition-all duration-700">

                    {/* Window Title Bar */}
                    <div className="h-6 bg-slate-50 flex items-center px-2 gap-1.5 border-b border-slate-200 shrink-0">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                        </div>
                        <div className="flex-1 text-center pr-6">
                            <span className="text-[8px] font-medium text-slate-500 flex items-center justify-center gap-1">
                                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                                Pitch.ai — Unicorn Deck
                            </span>
                        </div>
                    </div>

                    {/* App Interface Body */}
                    <div className="flex flex-1 overflow-hidden relative">

                        {/* Sidebar (Slide Navigator) */}
                        <div className="w-12 bg-slate-50 border-r border-slate-200 flex flex-col gap-1.5 p-1.5 shrink-0">
                            <div className="w-full aspect-video bg-slate-200 rounded border border-slate-300 opacity-0 animate-thumb-in" style={{animationDelay: '0.4s'}}></div>
                            <div className="w-full aspect-video bg-white rounded border-2 border-blue-400 opacity-0 animate-thumb-in" style={{animationDelay: '0.8s'}}>
                                <div className="w-full h-full p-0.5 flex flex-col gap-0.5">
                                    <div className="w-1/2 h-0.5 bg-slate-400 rounded-full"></div>
                                    <div className="flex gap-0.5 mt-auto">
                                        <div className="w-1/3 h-1.5 bg-blue-400/60 rounded-[1px]"></div>
                                        <div className="w-1/3 h-2 bg-blue-400/60 rounded-[1px]"></div>
                                        <div className="w-1/3 h-2.5 bg-blue-400/60 rounded-[1px]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full aspect-video bg-slate-200 rounded border border-slate-300 opacity-0 animate-thumb-in" style={{animationDelay: '1.2s'}}></div>
                            <div className="w-full aspect-video bg-slate-200 rounded border border-slate-300 opacity-0 animate-thumb-in" style={{animationDelay: '1.6s'}}></div>
                        </div>

                        {/* Main Canvas (Editor Stage) */}
                        <div className="flex-1 bg-white relative p-2 flex items-center justify-center">

                            {/* The Slide Being Built */}
                            <div className="relative w-full aspect-video bg-white shadow-md border border-slate-100">

                                {/* Slide Content: Header */}
                                <div className="absolute top-2 left-3 w-24 h-2 bg-slate-800 rounded opacity-0 animate-content-in" style={{animationDelay: '2.4s'}}></div>
                                <div className="absolute top-5 left-3 w-32 h-1 bg-slate-300 rounded opacity-0 animate-content-in" style={{animationDelay: '2.8s'}}></div>

                                {/* Slide Content: Chart Area */}
                                <div className="absolute bottom-3 right-3 w-20 h-14 flex items-end gap-0.5 opacity-0 animate-content-in" style={{animationDelay: '3.2s'}}>
                                    <div className="w-1/4 bg-blue-300 h-[20%] animate-bar-grow" style={{animationDelay: '9s'}}></div>
                                    <div className="w-1/4 bg-blue-400 h-[40%] animate-bar-grow" style={{animationDelay: '9.2s'}}></div>
                                    <div className="w-1/4 bg-blue-500 h-[70%] animate-bar-grow" style={{animationDelay: '9.4s'}}></div>
                                    <div className="w-1/4 bg-blue-600 h-[100%] animate-bar-grow" style={{animationDelay: '9.6s'}}></div>
                                </div>

                                {/* Slide Content: Key Metrics */}
                                <div className="absolute bottom-3 left-3 flex flex-col gap-1 opacity-0 animate-content-in" style={{animationDelay: '3.6s'}}>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        <div className="w-10 h-1 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                        <div className="w-9 h-1 bg-slate-200 rounded-full"></div>
                                    </div>
                                </div>

                                {/* Live Badge */}
                                <div className="absolute top-1.5 right-1.5 flex gap-0.5 animate-present-ui">
                                    <div className="px-1 py-0.5 bg-rose-500 text-white text-[5px] font-bold rounded uppercase tracking-wider animate-pulse">Live</div>
                                </div>

                            </div>
                        </div>

                        {/* Audio Wave Overlay */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-200 flex items-center gap-1.5 shadow-lg opacity-0 animate-pitch-overlay z-30">
                            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="flex items-center gap-0.5 h-2.5">
                                {[...Array(6)].map((_, i) => (
                                    <div key={i} className="w-0.5 bg-slate-700 rounded-full animate-wave" style={{
                                        height: '100%',
                                        animationDelay: `${i * 0.05}s`,
                                        animationDuration: '0.6s'
                                    }}></div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Term Sheet Notification */}
                <div className="absolute top-4 w-[180px] bg-white rounded-lg shadow-lg border border-slate-200 p-2 flex items-start gap-2 transform translate-y-[-150%] animate-notification z-40">
                    <div className="w-6 h-6 bg-emerald-500/10 rounded-md flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                        <h4 className="text-[9px] font-semibold text-slate-900">Term Sheet Received</h4>
                        <p className="text-[7px] text-slate-500 mt-0.5 truncate">Y Combinator • Series A</p>
                    </div>
                </div>

            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes thumb-in {
                    0% { opacity: 0; transform: scale(0.8); }
                    100% { opacity: 1; transform: scale(1); }
                }
                @keyframes content-in {
                    0% { opacity: 0; transform: translateY(5px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes bar-grow {
                    0% { transform: scaleY(0); }
                    100% { transform: scaleY(1); }
                }
                @keyframes present-ui {
                    0%, 70% { opacity: 0; }
                    80%, 95% { opacity: 1; }
                    100% { opacity: 0; }
                }
                @keyframes pitch-overlay {
                    0%, 75% { opacity: 0; transform: translateX(-50%) translateY(10px); }
                    85%, 95% { opacity: 1; transform: translateX(-50%) translateY(0); }
                    100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
                }
                @keyframes wave {
                    0%, 100% { transform: scaleY(0.3); }
                    50% { transform: scaleY(1); }
                }
                @keyframes notification {
                    0%, 85% { transform: translateY(-150%); }
                    90% { transform: translateY(0); }
                    95%, 100% { transform: translateY(-150%); }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(20px, -30px) scale(1.1); }
                    66% { transform: translate(-15px, 15px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-thumb-in {
                    animation: thumb-in 1s ease-out forwards;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
                .animate-content-in {
                    animation: content-in 1s ease-out forwards;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
                .animate-bar-grow {
                    animation: bar-grow 2s ease-out backwards;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
                .animate-present-ui {
                    animation: present-ui 20s infinite;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
                .animate-pitch-overlay {
                    animation: pitch-overlay 20s infinite;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
                .animate-wave {
                    animation: wave 0.4s ease-in-out infinite;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
                .animate-notification {
                    animation: notification 20s cubic-bezier(0.34, 1.56, 0.64, 1) infinite;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
                .animate-blob {
                    animation: blob 20s infinite;
                    animation-play-state: ${animationsPaused ? 'paused' : 'running'};
                }
            `}</style>
        </div>
    );
};

export default PitchDeckCard;
