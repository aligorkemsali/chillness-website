"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_mvdacau";
const TEMPLATE_ID = "template_vaqnhv1";
const PUBLIC_KEY = "OQRYUJftHa8Dybz8-";

export default function ContactModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => setStatus("sent"))
      .catch(() => setStatus("error"));
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/85" />

      {/* Modal */}
      <div
        className="relative w-full max-w-lg bg-[#166954] border border-sand/15 rounded-2xl p-8 md:p-10 shadow-2xl"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-sand/50 hover:text-sand transition-colors text-xl leading-none"
        >
          ✕
        </button>

        <div className="text-xs uppercase tracking-[0.3em] text-sunset font-mono mb-2">
          [ Get in touch ]
        </div>
        <h2 className="font-display italic text-4xl md:text-5xl leading-tight mb-8">
          Reach <span className="text-sunset">Us</span>
        </h2>

        {status === "sent" ? (
          <div className="text-center py-10">
            <div className="font-display italic text-3xl mb-3">Message sent! 🌊</div>
            <p className="text-sand/60 text-sm">We'll get back to you soon.</p>
            <button
              onClick={onClose}
              className="mt-8 px-8 py-3 rounded-full bg-sunset text-deep font-semibold uppercase tracking-[0.2em] text-sm hover:bg-sand transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-sand/50 font-mono mb-2">
                Name
              </label>
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-sand/5 border border-sand/15 rounded-xl px-4 py-3 text-sand placeholder-sand/30 focus:outline-none focus:border-sunset/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-sand/50 font-mono mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className="w-full bg-sand/5 border border-sand/15 rounded-xl px-4 py-3 text-sand placeholder-sand/30 focus:outline-none focus:border-sunset/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-sand/50 font-mono mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="What's on your mind?"
                className="w-full bg-sand/5 border border-sand/15 rounded-xl px-4 py-3 text-sand placeholder-sand/30 focus:outline-none focus:border-sunset/60 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm font-mono">
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sunset text-deep font-semibold uppercase tracking-[0.2em] text-sm hover:bg-sand transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
              {status !== "sending" && (
                <span className="transition-transform group-hover:translate-x-1">→</span>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
