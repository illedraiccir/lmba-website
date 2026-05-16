"use client";

import { useState } from "react";
import type { WeeklyAward } from "@/data/weeklyAwards";

type TeamAwardDialogProps = {
  award: WeeklyAward;
};

export function TeamAwardDialog({ award }: TeamAwardDialogProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full rounded-2xl bg-white p-5 text-left shadow transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">
          Week {award.week} • {award.awardName}
        </p>

        <h3 className="mt-2 text-xl font-black text-slate-900">
          {award.recipientName}
        </h3>

        <p className="mt-1 font-bold text-slate-600">{award.title}</p>

        <p className="mt-3 text-sm font-semibold text-blue-700">
          View award details →
        </p>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4">
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl md:p-8">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-slate-100 px-3 py-1 text-sm font-black text-slate-600 hover:bg-slate-200"
            >
              ✕
            </button>

            <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-600">
              Week {award.week}
            </p>

            <h2 className="mt-3 text-3xl font-black text-slate-950">
              {award.awardName}
            </h2>

            <p className="mt-2 text-xl font-bold text-slate-700">
              {award.title}
            </p>

            <div className="mt-5 rounded-2xl bg-slate-100 p-4">
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Recipient
              </p>
              <p className="mt-1 text-2xl font-black text-slate-950">
                {award.recipientName}
              </p>
            </div>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              {award.body}
            </p>
          </div>
        </div>
      )}
    </>
  );
}