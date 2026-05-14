import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { MainNav } from "@/components/MainNav";

export const metadata: Metadata = {
  title: "LM Moorestown Basketball League",
  description: "Lockheed Martin Moorestown Basketball League website",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 text-slate-900">
        <header className="relative overflow-hidden border-b border-slate-800 bg-slate-950 text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.45),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.35),transparent_28%)]" />

          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
                Welcome to the home of the
              </p>

              <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                LM Moorestown
                <span className="block text-blue-400">
                  Basketball League
                </span>
              </h1>

              <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-wide text-slate-200 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                2026 Season Live
              </div>
            </div>

            
          </div>
        </header>

        <MainNav />

        {children}
        <footer className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>
              LM Moorestown Basketball League © 2026
            </p>

            <p>
              Built by Ryan Ricciardelli
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}