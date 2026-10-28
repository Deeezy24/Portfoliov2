import React from "react";
import { Send } from "lucide-react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex gap-2 justify-center items-center px-5 h-11 text-sm font-medium rounded-lg transition-opacity bg-ink text-surface hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? (
        <>
          <span className="w-4 h-4 rounded-full border-2 animate-spin border-surface/40 border-t-surface" aria-hidden="true" />
          Sending…
        </>
      ) : (
        <>
          Send message
          <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </>
      )}
    </button>
  );
}
