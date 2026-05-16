import Link from "next/link";
import type { WeeklyAward } from "@/data/weeklyAwards";

type AwardCardProps = {
  award: WeeklyAward;
};

export function AwardCard({ award }: AwardCardProps) {
  const cardContent = (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
          Week {award.week}
        </span>
        
      </div>

      <p className="text-sm font-extrabold uppercase tracking-wide text-blue-600">
        {award.awardName}
      </p>

      <h3 className="mt-2 text-2xl font-extrabold leading-tight text-slate-950">
        {award.recipientName}
      </h3>

      <p className="mt-2 text-lg font-bold text-slate-700">{award.title}</p>

      <p className="mt-4 leading-7 text-slate-600">{award.body}</p>
    </>
  );

  if (award.playerId) {
    return (
      <Link
        href={`/players/${award.playerId}`}
        className="block rounded-2xl bg-white p-6 shadow transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="rounded-2xl bg-white p-6 shadow">{cardContent}</article>
  );
}