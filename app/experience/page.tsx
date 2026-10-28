import type { Metadata } from "next";
import Experience from "@/components/Section/Experience/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work history of Mark Ivor Glorioso, from front-end internships to leading technology at Innovare HP.",
};

export default function Page() {
  return <Experience />;
}
