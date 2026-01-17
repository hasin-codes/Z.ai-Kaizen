import { useRef, useEffect, useCallback } from "react";

interface useAutoResizeTextareaProps {
    minHeight?: number;
    maxHeight?: number;
}

export function useAutoResizeTextarea({
    minHeight = 72,
    maxHeight = 300,
}: useAutoResizeTextareaProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustHeight = useCallback(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            const newHeight = Math.min(
                Math.max(textarea.scrollHeight, minHeight),
                maxHeight
            );
            textarea.style.height = `${newHeight}px`;
        }
    }, [minHeight, maxHeight]);

    useEffect(() => {
        adjustHeight();
    }, [adjustHeight]);

    return { textareaRef, adjustHeight };
}
