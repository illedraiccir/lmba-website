import Link from "next/link";

type Leader = {
  playerId: string;
  playerName: string;
  teamName: string;
  value: string;
};

type LeagueLeaderListProps = {
  title: string;
  leaders: Leader[];
};

export function LeagueLeaderList({
  title,
  leaders,
}: LeagueLeaderListProps) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="mb-2 text-xs font-extrabold uppercase tracking-wide text-blue-600">
        {title}
      </p>

      <div className="space-y-2">
        {leaders.map((player, index) => (
          <div
            key={player.playerId}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span className="w-4 shrink-0 text-xs font-black text-slate-400">
                {index + 1}
              </span>

              <div className="min-w-0">
                <Link
                  href={`/players/${player.playerId}`}
                  className="block truncate text-sm font-extrabold text-slate-900 hover:text-blue-700"
                >
                  {player.playerName}
                </Link>

                <p className="truncate text-xs font-semibold text-slate-500">
                  {player.teamName}
                </p>
              </div>
            </div>

            <span className="shrink-0 text-lg font-black text-slate-950">
              {player.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}