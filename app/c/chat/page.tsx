"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LayoutWrapper from "@/components/LayoutWrapper";
import { AiPrompt } from "@/components/AiPrompt";
import { ChatMessages, Message } from "@/components/ChatBubble";

function ChatContent() {
    const searchParams = useSearchParams();
    const initialQuery = searchParams.get("q") || "";

    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);

    // Initialize chat with query param if present
    useEffect(() => {
        if (initialQuery && !hasInitialized.current) {
            hasInitialized.current = true;
            handleGenerate(initialQuery);
        }
    }, [initialQuery]);

    // Scroll to bottom when new messages arrive
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleGenerate = (textOverride?: string) => {
        const textToUse = textOverride || prompt;
        if (!textToUse.trim()) return;

        // Add user message
        const userMessage: Message = { role: 'user', text: textToUse };
        setMessages(prev => [...prev, userMessage]);
        setPrompt("");

        // Simulate AI typing
        setIsTyping(true);
        const aiMessage: Message = { role: 'assistant', text: '', isTyping: true };
        setMessages(prev => [...prev, aiMessage]);

        // Simulate streaming response after delay
        setTimeout(() => {
            const sampleResponses = [
                `Here is a detailed breakdown of the request:
1. Analysis of current architecture
2. Identification of bottlenecks
3. Proposed optimization strategy
4. Implementation timeline
5. Resource requirements`,
                `I have analyzed the data and found some interesting patterns. The primary trend suggests a shift towards more modular components, while the secondary data points to a need for better state management.`,
                `Based on your input, here's a suggested workflow:
• Step 1: Initialize project configuration
• Step 2: Set up core dependencies
• Step 3: Implement basic routing
• Step 4: Develop key UI components`
            ];

            const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];

            setMessages(prev => {
                const updated = [...prev];
                const lastIdx = updated.length - 1;
                if (lastIdx >= 0) {
                    updated[lastIdx] = {
                        role: 'assistant',
                        text: randomResponse,
                        isTyping: false
                    };
                }
                return updated;
            });
            setIsTyping(false);
        }, 2000);
    };

    const handleStopGenerating = () => {
        setIsTyping(false);
        setMessages(prev => {
            const updated = [...prev];
            if (updated.length > 0 && updated[updated.length - 1].isTyping) {
                updated[updated.length - 1] = {
                    ...updated[updated.length - 1],
                    text: 'Response stopped by user.',
                    isTyping: false
                };
            }
            return updated;
        });
    };

    return (
        <LayoutWrapper>
            <div className="w-full h-full flex flex-col overflow-hidden">
                {/* Scrollable messages area - full width with scrollbar on far right */}
                <div className="flex-1 overflow-y-auto custom-scrollbar min-h-0 pr-2">
                    <div className="max-w-[1120px] mx-auto px-4 md:px-0">
                        <ChatMessages
                            messages={messages}
                            isTyping={isTyping}
                            onStopGenerating={handleStopGenerating}
                            messagesEndRef={messagesEndRef as React.RefObject<HTMLDivElement>}
                        />
                    </div>
                </div>

                {/* Input Area - Fixed at bottom with z-index */}
                <div className="relative z-20 flex-shrink-0 pb-4 pt-2 bg-transparent">
                    <div className="max-w-[1120px] mx-auto">
                        <AiPrompt
                            prompt={prompt}
                            setPrompt={setPrompt}
                            handleGenerate={() => handleGenerate()}
                        />
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
}

export default function ChatPage() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            <ChatContent />
        </Suspense>
    );
}
