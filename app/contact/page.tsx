import type { Metadata } from "next";
import Contact from "@/components/Section/Contact/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mark Ivor Glorioso for full-time roles or freelance projects.",
};

export default function Page() {
  return <Contact />;
}
