import { teams } from "@/data";
import type { Game } from "@/data/games";
import Link from "next/link";

type GameCardProps = {
  game: Game;
};

function getTeam(teamId: string) {
  return teams.find((team) => team.teamId === teamId);
}

function formatGameDate(date: string) {
  const gameDate = new Date(`${date}T12:00:00`);

  return gameDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
}

export function GameCard({ game }: GameCardProps) {
  const awayTeam = getTeam(game.awayTeamId);
  const homeTeam = getTeam(game.homeTeamId);

  return (
    <Link
        href={`/results/${game.gameId}`}
        className="block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
      >
      <div className="h-2 grid grid-cols-2">
        <div style={{ backgroundColor: awayTeam?.primaryColor ?? "#CBD5E1" }} />
        <div style={{ backgroundColor: homeTeam?.primaryColor ?? "#CBD5E1" }} />
      </div>

      <div className="flex h-full flex-col p-5">
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-slate-500">
          <span>{formatGameDate(game.date)}</span>
          <span>{game.time}</span>
        </div>

        <div className="grid min-h-18 grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Away
            </p>
            <h3 className="text-lg font-extrabold leading-tight text-slate-900 sm:text-xl">
              {awayTeam?.teamName ?? game.awayTeamId}
            </h3>
          </div>

          <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-500">
            @
          </div>

          <div className="min-w-0 text-right">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Home
            </p>
            <h3 className="text-lg font-extrabold leading-tight text-slate-900 sm:text-xl">
              {homeTeam?.teamName ?? game.homeTeamId}
            </h3>
          </div>
        </div>

        <div className="mt-auto border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between gap-4 text-sm text-slate-500">
            <span>Week {game.week}</span>
            <span className="text-right">{game.location}</span>
          </div>

          {game.status === "final" && (
            <div className="mt-3 flex items-center justify-center gap-6 rounded-xl bg-slate-100 px-4 py-3">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Away
                </p>

                <p className="text-2xl font-extrabold text-slate-900">
                  {game.awayScore}
                </p>
              </div>

              <div className="text-sm font-bold uppercase tracking-wide text-slate-400">
                Final
              </div>

              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Home
                </p>

                <p className="text-2xl font-extrabold text-slate-900">
                  {game.homeScore}
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </Link>
  );
}