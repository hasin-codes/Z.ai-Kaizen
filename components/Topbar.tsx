"use client";

import { MessageSquare, Gift, CreditCard, Sparkles } from "lucide-react";
import Image from "next/image";

interface TopbarProps {
    isExpanded: boolean;
}

export default function Topbar({ isExpanded }: TopbarProps) {
    return (
        <div className={`h-[var(--topbar-height)] flex items-center justify-between px-4 bg-transparent transition-all`}>
            <div className="flex items-center">
                <div className="flex items-center gap-2">
                    <Image src="/Kaizen.png" alt="Logo" width={24} height={24} className="rounded-sm" />
                    <span className="font-bold text-lg tracking-tight text-zinc-900">Z.ai</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-600 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-colors uppercase tracking-tight">
                    Upgrade
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-600 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-colors uppercase tracking-tight">
                    Feedback
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 text-zinc-600 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-colors uppercase tracking-tight">
                    <Gift size={14} />
                    Refer
                </button>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200 text-sm font-bold bg-zinc-50 text-zinc-900">
                    <div className="w-4 h-4 rounded-full border border-zinc-300 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                    </div>
                    5.00
                </div>
            </div>
        </div>
    );
}
