import type { Metadata } from "next";
import Header from "@/components/Section/Header/header";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Footer from "@/components/Section/Footer/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const description =
  "Mark Ivor Glorioso, AI & software engineer. Builds full-stack web apps end to end, with a focus on generative AI.";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-glorioso.vercel.app"),
  title: {
    default: "Mark Ivor Glorioso | AI & Software Engineer",
    template: "%s | Mark Ivor Glorioso",
  },
  description,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    siteName: "Mark Ivor Glorioso",
    description,
    images: ["/ivor.jpg"],
  },
};

// Runs before paint so a saved/system dark theme doesn't flash light.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${mono.variable} !scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans antialiased bg-surface text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-surface"
        >
          Skip to content
        </a>
        <ThemeContextProvider>
          <Header />
          <main id="content" className="px-6 mx-auto max-w-5xl">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
