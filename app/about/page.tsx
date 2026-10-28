import type { Metadata } from "next";
import About from "@/components/Section/About/about";

export const metadata: Metadata = {
  title: "About",
  description: "Computer Engineering graduate turned AI & software engineer building full-stack web apps.",
};

export default function Page() {
  return <About />;
}
