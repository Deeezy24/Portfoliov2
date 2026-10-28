"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import toast from "react-hot-toast";
import { email, links, socials } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

type Command = { name: string; hint: string; run: () => void };

type CommandPaletteProps = {
  open: boolean;
  onClose: () => void;
};

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const { toggleTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [error, setError] = useState("");

  const commands = useMemo<Command[]>(
    () => [
      ...links.map((link) => ({
        name: link.name.toLowerCase(),
        hint: `cd ${link.hash}`,
        run: () => router.push(link.hash),
      })),
      { name: "cv", hint: "open my resume (pdf)", run: () => window.open("/CV_GLORIOSO.pdf", "_blank") },
      {
        name: "email",
        hint: "copy my email",
        run: () =>
          navigator.clipboard.writeText(email).then(
            () => toast.success("Email copied"),
            () => toast.error("Couldn't copy, it's " + email)
          ),
      },
      ...socials.map((s) => ({
        name: s.label,
        hint: s.href.replace("https://", ""),
        run: () => window.open(s.href, "_blank", "noopener,noreferrer"),
      })),
      { name: "theme", hint: "toggle light / dark", run: toggleTheme },
    ],
    [router, toggleTheme]
  );

  const q = query.trim().toLowerCase();
  const matches = commands.filter((c) => c.name.includes(q));

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    setQuery("");
    setError("");
    setActive(0);
    inputRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previous?.focus();
    };
  }, [open]);

  if (!open) return null;

  const run = (cmd?: Command) => {
    if (!cmd) {
      setError(`command not found: ${q}. try "help"`);
      return;
    }
    onClose();
    cmd.run();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "Tab") e.preventDefault(); // focus stays in the dialog
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (i + 1) % Math.max(matches.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => (i - 1 + matches.length) % Math.max(matches.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (q === "help" || q === "ls") setQuery("");
      else run(matches.find((c) => c.name === q) ?? matches[active]);
    }
  };

  return (
    <div
      className="flex fixed inset-0 z-[70] justify-center items-start px-4 pt-[15vh] bg-black/50 backdrop-blur-sm"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command line"
        className="overflow-hidden w-full max-w-lg font-mono rounded-xl border border-gray-200 shadow-2xl reveal bg-surface"
      >
        <div className="flex gap-1.5 items-center px-4 h-9 border-b border-gray-200 bg-gray-50">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-accent" />
          <span className="ml-2 text-[11px] text-gray-500">ivor.sh</span>
          <kbd className="ml-auto text-[10px] text-gray-500">esc</kbd>
        </div>

        <label className="flex gap-2 items-center px-4 h-12 text-[14px] border-b border-gray-200">
          <span className="text-accent shrink-0">~/ivor $</span>
          <input
            ref={inputRef}
            role="combobox"
            aria-expanded="true"
            aria-controls="cmd-list"
            aria-activedescendant={matches[active] ? `cmd-${matches[active].name}` : undefined}
            aria-label="Type a command"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
              setError("");
            }}
            onKeyDown={onKeyDown}
            placeholder="type a command, or help"
            spellCheck={false}
            autoComplete="off"
            className="flex-1 bg-transparent outline-none placeholder:text-gray-400"
          />
        </label>

        {error && (
          <p role="alert" className="px-4 pt-3 text-[12px] text-accent">
            {error}
          </p>
        )}

        <ul id="cmd-list" role="listbox" className="overflow-y-auto py-2 max-h-72">
          {matches.map((cmd, i) => (
            <li
              key={cmd.name}
              id={`cmd-${cmd.name}`}
              role="option"
              aria-selected={i === active}
              onMouseEnter={() => setActive(i)}
              onClick={() => run(cmd)}
              className={clsx(
                "flex justify-between gap-4 px-4 py-2 text-[13px] cursor-pointer",
                i === active ? "bg-gray-100 text-ink" : "text-gray-600"
              )}
            >
              <span>
                <span className={clsx("mr-2 text-accent", i !== active && "invisible")}>›</span>
                {cmd.name}
              </span>
              <span className="text-[11px] text-gray-500 truncate">{cmd.hint}</span>
            </li>
          ))}
          {matches.length === 0 && !error && (
            <li className="px-4 py-2 text-[12px] text-gray-500">no match. press enter to run anyway</li>
          )}
        </ul>

        <p className="px-4 py-2 text-[10px] text-gray-500 border-t border-gray-200">
          ↑↓ move · enter run · esc close
        </p>
      </div>
    </div>
  );
}
