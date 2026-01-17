"use client";

import { Mic } from "lucide-react";
import { cn } from "@/lib/utils";

export function VoiceInput() {
    return (
        <button
            type="button"
            className={cn(
                "rounded-lg p-2 transition-all duration-200",
                "bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10"
            )}
            aria-label="Voice input"
        >
            <Mic className="w-4 h-4" />
        </button>
    );
}
