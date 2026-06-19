"use client";

import { useEffect } from "react";

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "textarea:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export function useFocusTrap(ref, active) {
  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;
    const previouslyFocused = document.activeElement;

    const focusable = () => [...el.querySelectorAll(FOCUSABLE)];
    const first = () => focusable()[0];
    const last = () => focusable()[focusable().length - 1];

    const first0 = first();
    if (first0) first0.focus();

    function handleKeyDown(e) {
      if (e.key !== "Tab") return;
      const all = focusable();
      if (!all.length) return;
      if (e.shiftKey) {
        if (document.activeElement === all[0]) {
          e.preventDefault();
          all[all.length - 1].focus();
        }
      } else {
        if (document.activeElement === all[all.length - 1]) {
          e.preventDefault();
          all[0].focus();
        }
      }
    }

    el.addEventListener("keydown", handleKeyDown);
    return () => {
      el.removeEventListener("keydown", handleKeyDown);
      if (previouslyFocused?.focus) previouslyFocused.focus();
    };
  }, [active, ref]);
}
