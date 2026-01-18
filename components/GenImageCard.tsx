"use client";

import React from "react";

interface GenImageCardProps {
    className?: string;
}

export const GenImageCard: React.FC<GenImageCardProps> = ({ className }) => {
    return (
        <div className={`relative w-full aspect-[4/3] bg-white rounded-[1.25rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden flex flex-col group transition-all duration-700 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.12)] hover:-translate-y-1 cursor-default ${className || ""}`}>

            {/* Visual Header: Creative Studio */}
            <div className="relative flex-1 w-full bg-[#FAFAFA] overflow-hidden font-sans p-4">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 opacity-60 overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-rose-50 via-purple-50 to-blue-50"></div>
                    <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-orange-200/30 rounded-full blur-[60px] mix-blend-multiply animate-blob"></div>
                    <div className="absolute bottom-[10%] right-[5%] w-36 h-36 bg-indigo-200/30 rounded-full blur-[60px] mix-blend-multiply animate-blob" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-[35%] right-[25%] w-28 h-28 bg-pink-200/30 rounded-full blur-[60px] mix-blend-multiply animate-blob" style={{ animationDelay: '4s' }}></div>
                </div>

                {/* Main 3D Composition */}
                <div className="absolute inset-4 flex items-center justify-center z-10">
                    <div className="relative w-full h-full flex flex-col items-center overflow-hidden group-hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.12)] transition-all duration-500">

                        {/* Scene Container */}
                        <div className="absolute inset-0 overflow-hidden rounded-lg">

                            {/* Layer A: Wireframe Sketch */}
                            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                    <filter id="pencil-texture">
                                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                                    </filter>
                                </defs>

                                <g stroke="#94A3B8" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'url(#pencil-texture)' }}>
                                    <circle cx="180" cy="50" r="20" strokeDasharray="130" className="animate-draw-sketch" style={{ animationDelay: '0.2s' }} />
                                    <path d="M10 140 L60 50 L140 140" strokeDasharray="300" className="animate-draw-sketch" style={{ animationDelay: '0.5s' }} />
                                    <path d="M100 140 L160 70 L230 160" strokeDasharray="300" className="animate-draw-sketch" style={{ animationDelay: '0.8s' }} />
                                    <path d="M0 175 C40 150 90 175 140 160 C190 145 220 170 240 170" strokeDasharray="400" className="animate-draw-sketch" style={{ animationDelay: '1.2s' }} />
                                    <path d="M40 50 Q50 35 65 40 Q75 30 90 40 Q100 40 95 55" strokeDasharray="200" className="animate-draw-sketch" style={{ animationDelay: '1.5s' }} />
                                </g>
                            </svg>

                            {/* Layer B: Generative Art */}
                            <div className="absolute inset-0 animate-art-reveal mix-blend-multiply">
                                <svg className="w-full h-full" viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet">
                                    <defs>
                                        <linearGradient id="sky-gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#FFF0F5" />
                                            <stop offset="100%" stopColor="#E0F2FE" />
                                        </linearGradient>
                                        <linearGradient id="sun-gradient" x1="0" y1="0" x2="1" y2="1">
                                            <stop offset="0%" stopColor="#FDBA74" />
                                            <stop offset="100%" stopColor="#FB7185" />
                                        </linearGradient>
                                        <linearGradient id="mtn-back" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#C4B5FD" />
                                            <stop offset="100%" stopColor="#818CF8" />
                                        </linearGradient>
                                        <linearGradient id="mtn-front" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#F472B6" />
                                            <stop offset="100%" stopColor="#DB2777" />
                                        </linearGradient>
                                    </defs>

                                    <rect width="240" height="180" fill="url(#sky-gradient)" />
                                    <circle cx="180" cy="50" r="20" fill="url(#sun-gradient)" className="animate-pulse-slow" />
                                    <path d="M0 140 L60 50 L140 140 L0 140 Z" fill="url(#mtn-back)" opacity="0.8" />
                                    <path d="M100 140 L160 70 L240 165 L100 165 Z" fill="url(#mtn-front)" opacity="0.9" />
                                    <path d="M0 180 C40 150 90 175 140 160 C190 145 220 170 240 170 V180 H0 Z" fill="#60A5FA" opacity="0.4" />
                                </svg>
                            </div>

                            {/* Layer C: Magic Processing Shine */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/60 to-transparent w-[200%] h-full translate-x-[-150%] skew-x-12 animate-shimmer-sweep pointer-events-none"></div>

                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-100">
                            <div className="h-full bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 animate-progress-loading"></div>
                        </div>
                    </div>

                    {/* Floating Palette Tools */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                        <div className="w-7 h-7 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-400 animate-float-delayed hover:scale-110 hover:text-pink-500 transition-all cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-400 animate-float-delayed-2 hover:scale-110 hover:text-indigo-500 transition-all cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-400 to-violet-500 shadow-lg shadow-purple-200 border border-white/50 flex items-center justify-center text-white animate-float-delayed hover:scale-110 transition-all cursor-pointer">
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                    </div>

                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes draw-sketch {
                    0% { stroke-dashoffset: 400; opacity: 0; }
                    10% { opacity: 1; }
                    100% { stroke-dashoffset: 0; opacity: 1; }
                }
                @keyframes art-reveal {
                    0% { opacity: 0; filter: grayscale(100%) blur(4px); transform: scale(0.95); }
                    40% { opacity: 0; filter: grayscale(100%) blur(4px); transform: scale(0.95); }
                    70% { opacity: 1; filter: grayscale(0%) blur(0px); transform: scale(1); }
                    90% { opacity: 1; }
                    100% { opacity: 0; }
                }
                @keyframes shimmer-sweep {
                    0% { transform: translateX(-150%) skewX(12deg); }
                    40% { transform: translateX(-150%) skewX(12deg); }
                    70% { transform: translateX(100%) skewX(12deg); }
                    100% { transform: translateX(100%) skewX(12deg); }
                }
                @keyframes progress-loading {
                    0% { width: 0%; opacity: 1; }
                    30% { width: 10%; }
                    60% { width: 40%; }
                    80% { width: 100%; opacity: 1; }
                    90% { opacity: 0; }
                    100% { width: 0%; opacity: 0; }
                }
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                @keyframes float-delayed {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes float-delayed-2 {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }
                .animate-draw-sketch {
                    animation: draw-sketch 6s ease-out infinite;
                }
                .animate-art-reveal {
                    animation: art-reveal 6s ease-in-out infinite;
                }
                .animate-shimmer-sweep {
                    animation: shimmer-sweep 6s ease-in-out infinite;
                }
                .animate-progress-loading {
                    animation: progress-loading 6s ease-in-out infinite;
                }
                .animate-blob {
                    animation: blob 10s infinite;
                }
                .animate-float-delayed {
                    animation: float-delayed 4s ease-in-out infinite;
                    animation-delay: 1s;
                }
                .animate-float-delayed-2 {
                    animation: float-delayed-2 4s ease-in-out infinite;
                    animation-delay: 2s;
                }
                .animate-pulse-slow {
                    animation: pulse-slow 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default GenImageCard;