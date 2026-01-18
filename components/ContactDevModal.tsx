"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ContactDevModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactDevModal: React.FC<ContactDevModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsVisible(true), 50);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-[99999] flex items-center justify-center p-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 backdrop-blur-3xl' : 'opacity-0 backdrop-blur-0'}`}
    >
      {/* Deep Overlay */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Main Modal Container: Industrial Dark Aesthetic */}
      <div
        className={`relative w-full max-w-[900px] min-h-[580px] bg-[#0A0A0B] rounded-[2rem] shadow-[0_120px_240px_-50px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden transform transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] border border-white/10 ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-24 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Artistic Sidebar: The "Laboratory" Side */}
        <div className="relative w-full md:w-[40%] bg-[#050505] overflow-hidden flex flex-col p-10 select-none border-b md:border-b-0 md:border-r border-white/5">

          {/* Animated Tech Grid */}
          <div className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
          </div>

          {/* Glowing Pulse Orb */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_60%)] animate-pulse" />
            <div className="absolute w-[250px] h-[250px] bg-blue-500/10 blur-[80px] rounded-full animate-[pulse_6s_infinite_alternate]" />
          </div>

          {/* Centered Brand Icon - No Image */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center">
            <div className="relative mb-8">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
                <svg className="w-16 h-16 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                </svg>
              </div>
            </div>
            <div className="space-y-2">
              <span className="text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase opacity-80">Experimental</span>
              <h2 className="text-4xl font-display font-bold text-white tracking-tighter">Private Workflow</h2>
            </div>
          </div>

          {/* Bottom Status Info */}
          <div className="relative z-10 flex items-center gap-3 mt-auto">
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse [animation-delay:200ms]" />
              <div className="w-1 h-1 rounded-full bg-blue-500 animate-pulse [animation-delay:400ms]" />
            </div>
            <span className="text-[10px] text-white/30 font-medium uppercase tracking-widest">Evolution Phase: 04</span>
          </div>
        </div>

        {/* Content Side: Refined Information */}
        <div className="flex-1 p-10 md:p-14 flex flex-col relative overflow-y-auto">
          {/* Close Icon for Desktop */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/20 hover:text-white transition-colors p-2"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          <div className="max-w-[480px]">
            <div className="mb-10 inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
              <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
              <span className="text-[10px] text-white/60 font-bold uppercase tracking-widest">Restricted Access</span>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-white/90 font-medium leading-relaxed">
                These modes are part of my <span className="text-blue-400">private experimentation workflow</span> and are not publicly enabled by default.
              </p>

              <p className="text-[15px] text-white/60 leading-relaxed font-medium">
                Access is granted manually on a case by case basis. Before using this mode, please reach out to me directly.
              </p>

              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0951 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0951 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[11px] text-white/40 font-bold uppercase tracking-wider">Contact via Discord</span>
                    <span className="text-lg text-white font-mono select-all cursor-copy hover:text-blue-400 transition-colors">hasinraiyan</span>
                  </div>
                </div>
              </div>

              <p className="text-[13px] text-white/40 leading-relaxed italic">
                This is intentional. These features are evolving, sometimes unstable, and shared selectively for feedback, collaboration, or testing purposes.
              </p>
            </div>
          </div>

          <div className="mt-auto pt-10">
            <button
              onClick={onClose}
              className="w-full py-4 bg-white text-black rounded-xl font-bold text-[15px] transition-all duration-300 hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] active:scale-[0.98] group"
            >
              Got it
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(4deg); }
        }
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.1; }
          100% { transform: scale(1.1); opacity: 0.2; }
        }
      `}</style>
    </div>,
    document.body
  );
};

export default ContactDevModal;
