"use client";

import { useState } from "react";
import { ArrowRight, Paperclip, Layout, Search, Globe, Image, Presentation, Code2, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import ImageNext from "next/image";
import { VoiceInput } from "./VoiceInput";

interface AiPromptProps {
    prompt: string;
    setPrompt: (val: string) => void;
    handleGenerate: () => void;
    className?: string;
}

export function AiPrompt({ prompt, setPrompt, handleGenerate, className }: AiPromptProps) {
    const [isFocused, setIsFocused] = useState(false);
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: 72,
        maxHeight: 300,
    });

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            if (prompt.trim()) {
                handleGenerate();
            }
        }
    };

    // Brand color for selected state
    const [selectedAction, setSelectedAction] = useState<string | null>(null);

    const actions = [
        { icon: Search, label: "Search", id: "search" },
        { icon: Globe, label: "DeepThink", id: "deepthink" },

        { icon: Presentation, label: "Slide Deck", id: "slides" },
        { icon: Code2, label: "Code", id: "code" },
        { icon: Layers, label: "Full Stack", id: "fullstack" },
    ];

    return (
        <div className={cn("relative z-20 w-full max-w-[1120px] px-4 md:px-0 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200", className)}>

            {/* Removed top action bar */}

            <div
                className={cn(
                    "rounded-[2rem] relative transition-all duration-300",
                    isFocused ? `shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] scale-[1.002]` : `hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]`
                )}
                style={{
                    background: "rgba(255, 255, 255, 0.4)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    boxShadow: isFocused
                        ? "0 8px 32px -4px rgba(0, 0, 0, 0.05), inset 0 0 0 1px rgba(255,255,255,0.5)"
                        : "0 4px 24px -1px rgba(0, 0, 0, 0.02), inset 0 0 0 1px rgba(255,255,255,0.3)",
                }}
            >
                <div className="p-2 relative h-full w-full">
                    <div className="flex items-center gap-3 mb-1 mx-2 mt-2">
                        <div className="flex-1 flex items-center gap-2">

                        </div>
                    </div>

                    <div className="relative flex flex-col">
                        <div
                            className="overflow-y-auto custom-scrollbar"
                            style={{ maxHeight: "400px" }}
                        >
                            <textarea
                                value={prompt}
                                placeholder="What can I build for you?"
                                className={cn(
                                    "w-full px-4 py-3 border-none text-zinc-900 placeholder:text-zinc-400 resize-none focus:outline-none focus:ring-0",
                                    "min-h-[72px] text-xl md:text-2xl bg-transparent font-medium"
                                )}
                                ref={textareaRef}
                                onKeyDown={handleKeyDown}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                onChange={(e) => {
                                    setPrompt(e.target.value);
                                    adjustHeight();
                                }}
                            />
                        </div>

                        <div className="h-16 flex items-center">
                            <div className="flex items-center justify-between w-full px-3">
                                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                                    <label
                                        className={cn(
                                            "rounded-xl p-2.5 cursor-pointer flex-shrink-0 transition-all duration-200",
                                            "hover:bg-zinc-100/80 hover:scale-105 active:scale-95",
                                            "text-zinc-400 hover:text-zinc-900"
                                        )}
                                        aria-label="Attach file"
                                    >
                                        <input type="file" className="hidden" />
                                        <Paperclip className="w-5 h-5" />
                                    </label>

                                    {/* Action Buttons - with selection state */}
                                    <div className="flex items-center gap-1.5 p-1 bg-white/60 backdrop-blur-md rounded-xl border border-white/50 shadow-sm">
                                        {actions.map((action) => {
                                            const isSelected = selectedAction === action.id;
                                            return (
                                                <button
                                                    key={action.id}
                                                    className={cn(
                                                        "flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all duration-200",
                                                        "group active:scale-95",
                                                        isSelected
                                                            ? "bg-[rgba(255,77,148,0.15)] text-[#ff4d94]"
                                                            : "hover:bg-white text-zinc-500 hover:text-zinc-900 font-medium"
                                                    )}
                                                    type="button"
                                                    onClick={() => setSelectedAction(isSelected ? null : action.id)}
                                                >
                                                    <action.icon
                                                        className={cn(
                                                            "w-3.5 h-3.5 md:w-4 md:h-4",
                                                            isSelected
                                                                ? "text-[#ff4d94]"
                                                                : "text-zinc-400 group-hover:text-zinc-600"
                                                        )}
                                                        strokeWidth={2}
                                                    />
                                                    <span className={cn(
                                                        "hidden md:inline-block text-[10px] font-bold uppercase tracking-wider whitespace-nowrap",
                                                        isSelected && "text-[#ff4d94]"
                                                    )}>
                                                        {action.label}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <VoiceInput />

                                    <button
                                        type="button"
                                        className={cn(
                                            "rounded-xl p-3 flex-shrink-0 transition-all duration-200 shadow-md",
                                            prompt.trim()
                                                ? "bg-zinc-900 text-white hover:bg-black hover:scale-105"
                                                : "bg-zinc-200 text-zinc-400 cursor-not-allowed"
                                        )}
                                        disabled={!prompt.trim()}
                                        onClick={handleGenerate}
                                    >
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
