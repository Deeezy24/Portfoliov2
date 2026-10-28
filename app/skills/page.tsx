import type { Metadata } from "next";
import Skills from "@/components/Section/Skills/skills";

export const metadata: Metadata = {
  title: "Stack",
  description: "The languages, frameworks and tools Mark Ivor Glorioso builds with.",
};

export default function Page() {
  return <Skills />;
}
