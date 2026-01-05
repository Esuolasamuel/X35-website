"use client";

import { useActionState, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { FloatingInput } from "./FloatingInput";
import { FloatingTextarea } from "./FloatingTextarea";

export default function ContactForm({ onSuccess }) {
  const [state, formAction, isPending] = useActionState(submitContactForm, { success: false });

  useEffect(() => {
    if (state?.success) {
      onSuccess(); // Trigger the Header's transition
    }
  }, [state?.success, onSuccess]);

  return (
    <form action={formAction} className="space-y-6">
      <FloatingInput label="Full Name" name="name" required />
      <FloatingInput label="Email Address" name="email" type="email" required />
      <FloatingTextarea label="Message" name="message" required />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#0C0C1C] font-bold py-4 rounded-full transition disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}