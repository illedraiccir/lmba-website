import Link from "next/link";
import type { WeeklyAward } from "@/data/weeklyAwards";

type AwardCardProps = {
  award: WeeklyAward;
};

function getAwardLabel(week: number) {
  if (week === 8) return "Quarterfinal";
  if (week === 9) return "Semifinal";
  if (week === 10) return "Championship";
  return `Week ${week}`;
}

export function AwardCard({ award }: AwardCardProps) {
  const href = award.playerId
    ? `/players/${award.playerId}`
    : award.seasonTeamId
      ? `/teams/${award.seasonTeamId.replace("2026-", "")}`
      : undefined;

  const cardContent = (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
          {getAwardLabel(award.week)}
        </span>

        {href && (
          <span className="text-sm font-bold text-slate-400">
            View →
          </span>
        )}
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

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-2xl bg-white p-6 shadow transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <article className="rounded-2xl bg-white p-6 shadow">
      {cardContent}
    </article>
  );
}