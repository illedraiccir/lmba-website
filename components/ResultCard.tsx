import Link from "next/link";
import { teams } from "@/data";
import type { Game } from "@/data/games";

type ResultCardProps = {
  game: Game;
};

function getTeam(teamId: string) {
  return teams.find((team) => team.teamId === teamId);
}

function formatGameDate(date: string) {
  const gameDate = new Date(`${date}T12:00:00`);

  return gameDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function ResultCard({ game }: ResultCardProps) {
  const awayTeam = getTeam(game.awayTeamId);
  const homeTeam = getTeam(game.homeTeamId);

  const awayWon = (game.awayScore ?? 0) > (game.homeScore ?? 0);
  const homeWon = (game.homeScore ?? 0) > (game.awayScore ?? 0);

  return (
    <Link
      href={`/results/${game.gameId}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow transition hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className="grid h-2 grid-cols-2">
        <div style={{ backgroundColor: awayTeam?.primaryColor ?? "#CBD5E1" }} />
        <div style={{ backgroundColor: homeTeam?.primaryColor ?? "#CBD5E1" }} />
      </div>

      <div className="p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-600">
            Week {game.week} • {formatGameDate(game.date)}
          </span>

          <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-bold text-white">
            Final{game.overtimePeriods ? ` / ${game.overtimePeriods}OT` : ""}
          </span>
        </div>

        <div className="grid items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          <TeamResult
            label="Away"
            teamName={awayTeam?.teamName ?? game.awayTeamId}
            score={game.awayScore ?? 0}
            isWinner={awayWon}
          />

          <div className="hidden rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-400 md:block">
            @
          </div>

          <TeamResult
            label="Home"
            teamName={homeTeam?.teamName ?? game.homeTeamId}
            score={game.homeScore ?? 0}
            isWinner={homeWon}
            alignRight
          />
        </div>

        {game.firstHalfAwayScore !== undefined &&
          game.firstHalfHomeScore !== undefined &&
          game.secondHalfAwayScore !== undefined &&
          game.secondHalfHomeScore !== undefined && (
            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <div className="grid grid-cols-3 text-center text-sm">
                <div className="font-bold text-slate-500">Team</div>
                <div className="font-bold text-slate-500">1H</div>
                <div className="font-bold text-slate-500">2H</div>

                <div className="mt-2 font-semibold text-slate-900">
                  {awayTeam?.teamName ?? game.awayTeamId}
                </div>
                <div className="mt-2 text-slate-700">{game.firstHalfAwayScore}</div>
                <div className="mt-2 text-slate-700">{game.secondHalfAwayScore}</div>

                <div className="mt-2 font-semibold text-slate-900">
                  {homeTeam?.teamName ?? game.homeTeamId}
                </div>
                <div className="mt-2 text-slate-700">{game.firstHalfHomeScore}</div>
                <div className="mt-2 text-slate-700">{game.secondHalfHomeScore}</div>
              </div>
            </div>
        )}

        {game.headline && (
          <h2 className="mt-6 border-t border-slate-100 pt-5 text-2xl font-extrabold leading-tight text-slate-900 group-hover:text-blue-700">
            {game.headline}
          </h2>
        )}

        {game.recapTeaser && (
          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            {game.recapTeaser}
          </p>
        )}

        <p className="mt-5 text-sm font-bold text-blue-700">
          View Box Score →
        </p>
      </div>
    </Link>
  );
}

function TeamResult({
  label,
  teamName,
  score,
  isWinner,
  alignRight = false,
}: {
  label: string;
  teamName: string;
  score: number;
  isWinner: boolean;
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "text-right" : ""}>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <h3 className="text-xl font-extrabold leading-tight text-slate-900">
        {teamName}
      </h3>

      <p
        className={`mt-2 text-5xl font-black ${
          isWinner ? "text-slate-950" : "text-slate-400"
        }`}
      >
        {score}
      </p>
    </div>
  );
}