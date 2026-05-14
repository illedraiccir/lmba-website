import Link from "next/link";

type Props = {
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
}: Props) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <div className="mt-4">
        <Link
          href={`/players/${playerId}`}
          className="text-2xl font-extrabold text-blue-700 hover:underline"
        >
          {playerName}
        </Link>

        {subtitle && (
          <p className="mt-1 text-sm text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      <p className="mt-5 text-4xl font-extrabold text-slate-900">
        {value}
      </p>
    </div>
  );
}