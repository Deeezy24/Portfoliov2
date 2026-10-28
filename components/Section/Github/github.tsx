import React from "react";
import clsx from "clsx";
import Section from "@/components/Module/section";
import { githubUser } from "@/lib/data";

type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LEVEL = ["bg-gray-200/70", "bg-accent/25", "bg-accent/50", "bg-accent/75", "bg-accent"];

// Public contribution calendar (same data as the profile graph). Refreshed daily.
// shortcut: relies on a free third-party API; switch to GitHub GraphQL + token if it goes away.
async function getContributions(): Promise<{ total: number; days: Day[] } | null> {
  try {
    const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUser}?y=last`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!Array.isArray(json.contributions)) return null;
    return { total: json.total?.lastYear ?? 0, days: json.contributions };
  } catch {
    return null;
  }
}

function summarize(days: Day[]) {
  let longest = 0;
  let run = 0;
  let best: Day | undefined;
  for (const d of days) {
    run = d.count > 0 ? run + 1 : 0;
    longest = Math.max(longest, run);
    if (!best || d.count > best.count) best = d;
  }
  const activeDays = days.filter((d) => d.count > 0).length;
  return { longest, best, activeDays };
}

const fmtDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

export default async function Github() {
  const data = await getContributions();
  const profile = `https://github.com/${githubUser}`;

  if (!data || data.days.length === 0) {
    return (
      <Section id="github" title="github" caption="commit activity" more={{ href: profile, label: "view profile" }}>
        <p className="text-[15px] text-gray-600">
          Activity graph is unavailable right now.{" "}
          <a href={profile} className="underline underline-offset-2 hover:text-accent">
            See it on GitHub
          </a>
          .
        </p>
      </Section>
    );
  }

  // Columns are weeks starting Sunday; pad the first week so weekdays line up.
  const pad = new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay();
  const cells: (Day | null)[] = [...Array(pad).fill(null), ...data.days];
  const weeks: (Day | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  const rawLabels = weeks.map((week, i) => {
    const first = week.find(Boolean);
    if (!first) return "";
    const m = Number(first.date.slice(5, 7)) - 1;
    const prev = i > 0 ? weeks[i - 1].find(Boolean) : undefined;
    return !prev || Number(prev.date.slice(5, 7)) - 1 !== m ? MONTHS[m] : "";
  });
  // Drop a label that would collide with the next one (e.g. a 1-week month at the start).
  const monthLabels = rawLabels.map((l, i) => (l && (rawLabels[i + 1] || rawLabels[i + 2]) ? "" : l));

  const { longest, best, activeDays } = summarize(data.days);
  const stats = [
    { value: data.total.toLocaleString("en-US"), label: "contributions" },
    { value: `${activeDays}`, label: "active days" },
    { value: `${longest}d`, label: "longest streak" },
    { value: best ? `${best.count}` : "0", label: best ? `best day · ${fmtDate(best.date)}` : "best day" },
  ];

  return (
    <Section id="github" title="github" caption="commit activity" more={{ href: profile, label: `@${githubUser}` }}>
      <div className="p-4 rounded-2xl border border-gray-200 sm:p-5 bg-gray-50/60">
        <div className="flex flex-wrap gap-2 justify-between items-baseline mb-4">
          <p className="font-mono text-[12px] text-gray-500">
            <span className="text-accent">~/ivor</span> $ git log --since=&quot;1 year ago&quot;
          </p>
          <p className="font-mono text-[11px] text-gray-500">last 12 months</p>
        </div>

        {/* On phones the graph keeps readable squares and scrolls inside the card; rtl starts it at the newest week. */}
        <div dir="rtl" tabIndex={0} aria-label="Contribution graph, scrolls to older weeks" className="overflow-x-auto pb-1">
        <div
          dir="ltr"
          role="img"
          aria-label={`${data.total} GitHub contributions in the last year`}
          className="grid gap-[3px] min-w-[600px] sm:min-w-0"
          style={{ gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))` }}
        >
          {monthLabels.map((label, i) => (
            <span key={`m${i}`} aria-hidden="true" className="overflow-visible font-mono text-[9px] leading-4 text-gray-500 whitespace-nowrap">
              {label}
            </span>
          ))}
          {weeks.map((week, w) =>
            Array.from({ length: 7 }, (_, d) => {
              const day = week[d];
              return (
                <span
                  key={`${w}-${d}`}
                  title={day ? `${day.count} contribution${day.count === 1 ? "" : "s"} on ${fmtDate(day.date)}` : undefined}
                  className={clsx("aspect-square rounded-[2px]", day ? LEVEL[day.level] : "bg-transparent")}
                  style={{ gridColumn: w + 1, gridRow: d + 2 }}
                />
              );
            })
          )}
        </div>
        </div>

        <div className="flex gap-1.5 justify-end items-center mt-3 font-mono text-[10px] text-gray-500" aria-hidden="true">
          less
          {LEVEL.map((c) => (
            <span key={c} className={`w-2.5 h-2.5 rounded-[2px] ${c}`} />
          ))}
          more
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 mt-3 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="p-4 rounded-2xl border border-gray-200 bg-gray-50/60">
            <dd className="font-mono text-xl font-bold leading-none">{s.value}</dd>
            <dt className="mt-2 font-mono text-[10px] uppercase tracking-wider text-gray-500">{s.label}</dt>
          </div>
        ))}
      </dl>
    </Section>
  );
}
