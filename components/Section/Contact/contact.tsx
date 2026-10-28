"use client";

import React from "react";
import Section from "@/components/Module/section";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "../../Module/submit-btn";
import toast from "react-hot-toast";
import { email as EMAIL } from "@/lib/data";

const fieldClass =
  "w-full rounded-lg border border-gray-300 bg-surface px-3 text-[15px] text-ink placeholder:text-gray-400 transition-colors focus:border-accent focus:outline-none";

export default function Contact() {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied");
    } catch {
      toast.error("Couldn't copy, select it instead");
    }
  };

  return (
    <Section id="contact" title="contact" caption="let's talk">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <div className="overflow-hidden relative p-6 rounded-2xl border border-gray-200 bg-gray-50/60">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.12] dots" />
          <div className="relative">
          <p className="font-mono text-2xl font-bold leading-tight">
            Got a project?<br />
            <span className="text-accent">Say hello.</span>
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
            For work, freelance projects, or just to say hi: drop me a line.
          </p>
          <div className="flex flex-wrap gap-2 items-center p-1.5 mt-5 rounded-lg border border-gray-200 bg-gray-50">
            <span className="px-2 py-1.5 font-mono text-[13px] break-all basis-full">{EMAIL}</span>
            <button
              type="button"
              onClick={copyEmail}
              className="px-3 h-9 text-[12px] font-medium rounded-md shrink-0 bg-ink text-surface hover:opacity-85"
            >
              Copy
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center px-3 h-9 text-[12px] font-medium rounded-md border border-gray-300 shrink-0 hover:border-ink"
            >
              Open mail
            </a>
          </div>
          <p className="mt-5 font-mono text-[11px] text-gray-500">
            <span className="text-accent">▹</span> open to full-time roles and freelance projects
          </p>
          </div>
        </div>

        <form
          className="p-5 space-y-4 rounded-2xl border border-gray-200 bg-gray-50/60"
          action={async (formData) => {
            const { error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }}
        >
          <div>
            <label htmlFor="senderEmail" className="block mb-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-500">
              Your email
            </label>
            <input
              id="senderEmail"
              className={`${fieldClass} h-11`}
              name="senderEmail"
              type="email"
              autoComplete="email"
              required
              maxLength={500}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-500">
              Message
            </label>
            <textarea
              id="message"
              className={`${fieldClass} h-36 py-2.5`}
              name="message"
              required
              maxLength={5000}
              placeholder="What are you building?"
            />
          </div>
          <SubmitBtn />
        </form>
      </div>
    </Section>
  );
}
