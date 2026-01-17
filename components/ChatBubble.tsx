"use client";

import React, { useState } from 'react';
import { Sparkles, Copy, ThumbsUp, ThumbsDown, StopCircle, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
export interface Message {
    role: 'user' | 'assistant';
    text: string;
    isTyping?: boolean;
}

interface AIMessageBubbleProps {
    message: Message;
}

interface UserMessageProps {
    message: Message;
}

interface StopGeneratingButtonProps {
    onClick: () => void;
}

// Typing Indicator Component
const TypingIndicator: React.FC = () => (
    <div className="flex gap-1.5 py-2">
        <div
            className="w-[6px] h-[6px] bg-zinc-400 rounded-full animate-bounce"
            style={{ animationDelay: '0ms', animationDuration: '0.6s' }}
        />
        <div
            className="w-[6px] h-[6px] bg-zinc-400 rounded-full animate-bounce"
            style={{ animationDelay: '150ms', animationDuration: '0.6s' }}
        />
        <div
            className="w-[6px] h-[6px] bg-zinc-400 rounded-full animate-bounce"
            style={{ animationDelay: '300ms', animationDuration: '0.6s' }}
        />
    </div>
);

// AI Message Bubble Component
export const AIMessageBubble: React.FC<AIMessageBubbleProps> = ({ message }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(message.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Format text with line breaks
    const formatText = (text: string) => {
        return text.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
                {line}
                {idx < text.split('\n').length - 1 && <br />}
            </React.Fragment>
        ));
    };

    return (
        <div
            className={cn(
                "bg-white text-zinc-900",
                "rounded-[28px] p-6 relative mb-6",
                "w-full max-w-4xl",
                "shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05),0_1px_4px_-1px_rgba(0,0,0,0.02)]",
                "border border-zinc-100",
                "animate-in fade-in slide-in-from-bottom-6 duration-700"
            )}
        >
            {/* Section 1: Header - Avatar and Copy Button */}
            <div className="flex justify-between items-start mb-4">
                {/* AI Avatar */}
                <div className="w-9 h-9 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Sparkles size={18} className="text-[#ff4d94]" fill="currentColor" />
                </div>

                {/* Copy Button */}
                <button
                    className={cn(
                        "p-2 rounded-full transition-all duration-200",
                        "text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100"
                    )}
                    onClick={handleCopy}
                    aria-label={copied ? "Copied" : "Copy message"}
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
            </div>

            {/* Section 2: Message Content */}
            <div className="text-[15px] leading-[1.75] font-normal text-zinc-900 pl-0">
                {message.isTyping ? (
                    <TypingIndicator />
                ) : (
                    formatText(message.text)
                )}
            </div>

            {/* Section 3: Action Buttons - Only show when message is complete */}
            {!message.isTyping && message.text && (
                <div className="flex gap-1 mt-4">
                    <button
                        className={cn(
                            "p-2 rounded-full transition-all duration-200",
                            "text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100"
                        )}
                        aria-label="Like response"
                    >
                        <ThumbsUp size={18} />
                    </button>
                    <button
                        className={cn(
                            "p-2 rounded-full transition-all duration-200",
                            "text-zinc-400 hover:text-zinc-600 hover:bg-zinc-100"
                        )}
                        aria-label="Dislike response"
                    >
                        <ThumbsDown size={18} />
                    </button>
                </div>
            )}
        </div>
    );
};

// User Message Component
export const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
    return (
        <div className="flex items-start gap-4 py-6 animate-in fade-in slide-in-from-bottom-4 duration-500 group">
            {/* User Avatar */}
            <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 flex-shrink-0 shadow-sm">
                <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexa&backgroundColor=e5e5e5"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Message Text */}
            <div className="flex-1 text-zinc-900 text-[16px] leading-[1.6] font-medium pt-1.5">
                {message.text}
            </div>
        </div>
    );
};

// Stop Generating Button Component
export const StopGeneratingButton: React.FC<StopGeneratingButtonProps> = ({ onClick }) => {
    return (
        <div className="flex justify-center my-4 animate-in fade-in duration-300">
            <button
                onClick={onClick}
                className={cn(
                    "bg-white/90 backdrop-blur-sm",
                    "border border-zinc-200",
                    "text-zinc-900 px-5 py-2.5 rounded-full",
                    "flex items-center gap-2",
                    "text-xs font-semibold",
                    "shadow-lg shadow-black/5",
                    "hover:bg-zinc-50 transition-colors"
                )}
            >
                <StopCircle size={14} className="text-zinc-400" />
                Stop generating
            </button>
        </div>
    );
};

// Chat Messages Container Component
interface ChatMessagesProps {
    messages: Message[];
    isTyping?: boolean;
    onStopGenerating?: () => void;
    messagesEndRef?: React.RefObject<HTMLDivElement>;
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({
    messages,
    isTyping = false,
    onStopGenerating,
    messagesEndRef
}) => {
    return (
        <div className="space-y-2 pt-2 pb-48">
            {messages.map((msg, idx) => (
                <React.Fragment key={idx}>
                    {msg.role === 'user' ? (
                        <UserMessage message={msg} />
                    ) : (
                        <AIMessageBubble message={msg} />
                    )}
                </React.Fragment>
            ))}

            {/* Stop generating button - show when AI is typing */}
            {isTyping && onStopGenerating && (
                <StopGeneratingButton onClick={onStopGenerating} />
            )}

            {/* Scroll anchor */}
            {messagesEndRef && <div ref={messagesEndRef} />}
        </div>
    );
};

export default ChatMessages;
