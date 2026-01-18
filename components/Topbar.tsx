"use client";

import { MessageSquare, Gift, CreditCard, Sparkles, Github } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface TopbarProps {
    isExpanded: boolean;
    onUpgradeClick?: () => void;
}

export default function Topbar({ isExpanded, onUpgradeClick }: TopbarProps) {
    const router = useRouter();

    return (
        <div className={`h-[var(--topbar-height)] flex items-center justify-between px-4 bg-transparent transition-all`}>
            <div className="flex items-center">
                <button
                    onClick={() => router.push("/")}
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                    <Image src="/Kaizen.png" alt="Logo" width={24} height={24} className="rounded-sm" />
                    <span className="font-bold text-lg tracking-tight text-zinc-900">Z.ai</span>
                </button>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={onUpgradeClick}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-600 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-colors uppercase tracking-tight"
                >
                    About
                </button>
                <a
                    href="mailto:hasin.codes@gmail.com"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-600 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-colors uppercase tracking-tight"
                >
                    Feedback
                </a>
                <a
                    href="https://github.com/hasin-codes/Z.ai-Kaizen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-zinc-600 text-xs font-semibold hover:bg-zinc-100 hover:text-zinc-900 transition-colors uppercase tracking-tight"
                >
                    <Github size={14} />
                    GitHub
                </a>
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
