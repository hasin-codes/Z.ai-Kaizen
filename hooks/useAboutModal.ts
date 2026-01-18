"use client";

import { useState, useEffect } from 'react';

const MODAL_COOLDOWN_MS = 15 * 60 * 1000; // 15 minutes
const STORAGE_KEY = 'zai-about-modal-last-shown';

export function useAboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if we should show the modal
    const lastShownStr = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (!lastShownStr) {
      // First time visitor - show modal immediately
      localStorage.setItem(STORAGE_KEY, now.toString());
      setIsOpen(true);
    } else {
      const lastShown = parseInt(lastShownStr, 10);
      const timeSinceLastShown = now - lastShown;

      // Show modal if cooldown period has passed
      if (timeSinceLastShown >= MODAL_COOLDOWN_MS) {
        localStorage.setItem(STORAGE_KEY, now.toString());
        setIsOpen(true);
      }
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, handleClose, handleOpen };
}
