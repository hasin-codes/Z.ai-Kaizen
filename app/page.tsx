"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import { AiPrompt } from "@/components/AiPrompt";
import { BusinessCard } from "@/components/BusinessCard";
import { GenImageCard } from "@/components/GenImageCard";
import { PitchDeckCard } from "@/components/PitchDeckCard";
import { LinkedinCard } from "@/components/LinkedinCard";

import { motion } from "framer-motion";

export default function Home() {
    const [prompt, setPrompt] = useState("");
    const router = useRouter();

    const handleGenerate = () => {
        if (!prompt.trim()) return;
        router.push(`/c/chat?q=${encodeURIComponent(prompt)}`);
    };

    return (
        <LayoutWrapper>
            <div className="flex flex-col h-full w-full max-w-6xl mx-auto pt-[15vh]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 text-center px-4 md:px-0"
                >
                    <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-zinc-900 tracking-tight leading-tight">
                        Good Morning, <span className="italic text-zinc-500">Hasin</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="w-full"
                >
                    <AiPrompt
                        prompt={prompt}
                        setPrompt={setPrompt}
                        handleGenerate={handleGenerate}
                    />
                </motion.div>

                {/* Business Cards Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-12 px-4 md:px-0"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <BusinessCard />
                        <GenImageCard />
                        <PitchDeckCard />
                        <LinkedinCard />

                    </div>
                </motion.div>
            </div>
        </LayoutWrapper>
    );
}
