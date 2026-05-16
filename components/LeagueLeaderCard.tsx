import Link from "next/link";

type LeagueLeaderCardProps = {
  title: string;
  playerName: string;
  playerId: string;
  value: string;
  subtitle?: string;
};

export function LeagueLeaderCard({
  title,
  playerName,
  playerId,
  value,
  subtitle,
}: LeagueLeaderCardProps) {
  return (
    <article className="rounded-xl bg-white p-4 shadow">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-extrabold uppercase tracking-wide text-blue-600">
            {title}
          </p>

          <Link
            href={`/players/${playerId}`}
            className="mt-1 block truncate text-base font-black text-slate-900 hover:text-blue-700"
          >
            {playerName}
          </Link>

          {subtitle && (
            <p className="mt-1 truncate text-xs font-semibold text-slate-500">
              {subtitle}
            </p>
          )}
        </div>

        <p className="shrink-0 text-3xl font-black text-slate-950">{value}</p>
      </div>
    </article>
  );
}