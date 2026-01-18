"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Overlay Backdrop */}
      <div className="absolute inset-0 bg-black/75" onClick={onClose} />

      {/* Main Modal Container */}
      <div
        className={`relative w-full max-w-[900px] bg-[#0A0A0B] rounded-[2rem] shadow-[0_120px_240px_-50px_rgba(0,0,0,1)] flex overflow-hidden transform transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] border border-white/10 ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-24 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 z-50 text-white/20 hover:text-white transition-colors p-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side: Artistic Galactic Portal with Warm Pink Ambience */}
        <div className="relative w-[45%] bg-[#020206] overflow-hidden flex flex-col select-none border-b md:border-b-0 md:border-r border-white/5 shrink-0">

          {/* Base Grainy Texture Layer */}
          <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
          </div>

          {/* Artistic Nebula & Galaxy Effects - Warm Pink Theme */}
          <div className="absolute inset-0">
            <div className="absolute bottom-[-20%] left-[-20%] w-[140%] h-[140%] opacity-90 animate-[slow-rotate_100s_linear_infinite]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(248,187,217,0.25)_0%,rgba(233,30,99,0.08)_40%,transparent_80%)] blur-[100px]" />
              <div className="absolute top-[45%] left-[35%] w-[80%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(248,187,217,0.2)_0%,transparent_70%)] blur-[120px] animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border-b-[100px] border-pink-500/10 rounded-full blur-[110px] rotate-[35deg]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-b-[50px] border-rose-400/15 rounded-full blur-[90px] rotate-[-15deg]" />
            </div>
            <div className="absolute top-[-5%] right-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(248,187,217,0.08)_0%,transparent_80%)] blur-[120px]" />
          </div>

          {/* Foreground Starfield */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-white rounded-full opacity-50"
                style={{
                  width: (Math.random() * 2 + 0.5) + 'px',
                  height: (Math.random() * 2 + 0.5) + 'px',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%',
                  boxShadow: Math.random() > 0.85 ? '0 0 12px 2px rgba(255,255,255,0.6)' : 'none',
                  animation: `pulseStar ${2 + Math.random() * 4}s infinite alternate`
                }}
              />
            ))}
          </div>

          {/* KAIZEN LOGO - Centered in the left panel */}
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            {/* Rectangular Warm Pink Glow Behind Logo */}
            <div className="absolute w-[280px] h-[280px] bg-gradient-to-br from-[rgba(248,187,217,0.25)] via-[rgba(233,30,99,0.1)] to-[rgba(248,187,217,0.15)] blur-[80px] animate-[glow-expand_6s_infinite_alternate] rounded-2xl" />
            <div className="absolute w-[180px] h-[180px] bg-white/15 blur-[60px] rounded-2xl" />

            {/* The Logo Container */}
            <div className="relative animate-[logo-float_15s_ease-in-out_infinite] flex items-center justify-center">
              <Image
                src="/Kaizen.png"
                alt="Kaizen Logo"
                width={160}
                height={160}
                className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
              />
            </div>
          </div>

          {/* Overlay Text Content */}
          <div className="relative z-40 flex flex-col justify-between h-full p-12">
            {/* Top: Author Credit */}
            <div>
              <a
                href="https://www.linkedin.com/in/hasin-raiyan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:opacity-80 transition-opacity"
              >
                <span className="text-white/90 font-medium text-[1.3rem] tracking-tight font-serif drop-shadow-lg">
                  A <span className="text-rose-300">Hasin Raiyan</span> Creation
                </span>
              </a>
            </div>

            {/* Bottom: GLM-4.7 Title */}
            <div className="flex flex-col">
              <h2 className="text-[3rem] font-serif leading-[1] text-white tracking-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                Kaizen
              </h2>
              <div className="h-[2px] w-48 bg-gradient-to-r from-rose-400 via-white/60 to-transparent mt-6" />
            </div>
          </div>
        </div>

        {/* Right Side: Information Content */}
        <div className="flex-1 bg-[#0A0A0B] p-12 pl-16 pr-12 flex flex-col relative overflow-y-auto">
          <div className="flex-1">
            <h3 className="text-[1.8rem] font-bold text-white/90 mb-8 tracking-tight font-serif">Introducing Z.ai Kaizen</h3>

            <ul className="space-y-6">
              {[
                { title: 'Personal Dev Playground', desc: 'This is Hasin Raiyan\'s personal dev playground for experimenting with GLM models and Z.ai UI. I use it to test capabilities, give structured feedback, explore UI and UX ideas, and build small product experiments powered by GLM.' },
                { title: 'Not Competition', desc: 'This project is not intended to replace, impersonate, or compete with Z.ai. In most cases, it is shared privately with Z.ai team members for feedback and discussion, not promoted as a public product.' },
                { title: 'Production Practices', desc: 'The backend follows standard production practices. Auth, access control, and basic security measures are in place to prevent misuse or exposure.' },
                { title: 'Get In Touch', desc: 'If you\'re curious about how I\'m using vector databases, image and text models, or dev containers in this setup, feel free to reach out to me via email or Discord. This space exists for learning, iteration, and improving real-world usage of GLM through hands-on experimentation.' }
              ].map((item, i) => (
                <li
                  key={i}
                  className={`flex gap-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
                  style={{ transitionDelay: `${400 + i * 150}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-rose-400 mt-[9px] shrink-0 shadow-sm" />
                  <div className="text-[14px] leading-relaxed">
                    <span className="font-extrabold text-white/90">{item.title}: </span>
                    <span className="text-white/60 font-medium">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 sticky bottom-0 bg-[#0A0A0B] pt-3">
            <button
              onClick={onClose}
              className="w-full py-4 bg-white hover:bg-white/90 text-black rounded-xl font-bold text-[15px] transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] active:scale-[0.98]"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes shimmer-btn {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slow-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        @keyframes logo-float {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.02) rotate(1deg); }
        }
        @keyframes glow-expand {
          0% { transform: scale(0.9); opacity: 0.5; }
          100% { transform: scale(1.3); opacity: 0.8; }
        }
        @keyframes pulseStar {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
};

export default AboutModal;