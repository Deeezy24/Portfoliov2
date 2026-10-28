import type { Metadata } from "next";
import Projects from "@/components/Section/Projects/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal and freelance projects by Mark Ivor Glorioso, from web apps to client platforms.",
};

export default function Page() {
  return <Projects />;
}
