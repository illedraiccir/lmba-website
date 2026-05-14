import Link from "next/link";
import { teams } from "@/data";
import type { Game } from "@/data/games";

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
      <div className="grid h-2 grid-cols-2">
        <div style={{ backgroundColor: awayTeam?.primaryColor ?? "#CBD5E1" }} />
        <div style={{ backgroundColor: homeTeam?.primaryColor ?? "#CBD5E1" }} />
      </div>

      <div className="flex h-full flex-col p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3 text-xs font-semibold text-slate-500 sm:text-sm">
          <span>{formatGameDate(game.date)}</span>
          <span className="shrink-0">{game.time}</span>
        </div>

        <div className="grid min-h-18 grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Away
            </p>

            <h3 className="text-base font-extrabold leading-tight text-slate-900 sm:text-xl">
              {awayTeam?.teamName ?? game.awayTeamId}
            </h3>
          </div>

          <div className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-500 sm:px-3 sm:text-sm">
            @
          </div>

          <div className="min-w-0 text-right">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
              Home
            </p>

            <h3 className="text-base font-extrabold leading-tight text-slate-900 sm:text-xl">
              {homeTeam?.teamName ?? game.homeTeamId}
            </h3>
          </div>
        </div>

        <div className="mt-auto border-t border-slate-100 pt-4">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 sm:text-sm">
            <span>Week {game.week}</span>
            <span className="text-right">{game.location}</span>
          </div>

          {game.status === "final" && (
            <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl bg-slate-100 px-3 py-3 sm:px-4">
              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Away
                </p>

                <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  {game.awayScore}
                </p>
              </div>

              <div className="text-xs font-bold uppercase tracking-wide text-slate-400 sm:text-sm">
                Final
              </div>

              <div className="text-center">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Home
                </p>

                <p className="text-xl font-extrabold text-slate-900 sm:text-2xl">
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