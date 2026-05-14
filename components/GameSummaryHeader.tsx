import type { Game } from "@/data/games";
import type { Team } from "@/data/teams";

type GameSummaryHeaderProps = {
  game: Game;
  awayTeam?: Team;
  homeTeam?: Team;
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function TeamScore({
  label,
  teamName,
  score,
  isWinner,
  alignRight = false,
}: {
  label: string;
  teamName: string;
  score?: number;
  isWinner: boolean;
  alignRight?: boolean;
}) {
  return (
    <div className={alignRight ? "text-right" : ""}>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <h2 className="text-2xl font-extrabold text-slate-900">{teamName}</h2>

      <p
        className={`mt-2 text-5xl font-extrabold ${
          isWinner ? "text-slate-950" : "text-slate-400"
        }`}
      >
        {score}
      </p>
    </div>
  );
}

export function GameSummaryHeader({
  game,
  awayTeam,
  homeTeam,
}: GameSummaryHeaderProps) {
  return (
    <section className="mt-6 overflow-hidden rounded-2xl bg-white shadow">
      <div className="grid h-3 grid-cols-2">
        <div style={{ backgroundColor: awayTeam?.primaryColor ?? "#CBD5E1" }} />
        <div style={{ backgroundColor: homeTeam?.primaryColor ?? "#CBD5E1" }} />
      </div>

      <div className="p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Week {game.week} • {formatDate(game.date)} • {game.time}
        </p>

        <div className="mt-6 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <TeamScore
            label="Away"
            teamName={awayTeam?.teamName ?? game.awayTeamId}
            score={game.awayScore}
            isWinner={(game.awayScore ?? 0) > (game.homeScore ?? 0)}
          />

          <div className="text-center text-sm font-bold uppercase tracking-wide text-slate-400">
            Final{game.overtimePeriods ? ` / ${game.overtimePeriods}OT` : ""}
          </div>

          <TeamScore
            label="Home"
            teamName={homeTeam?.teamName ?? game.homeTeamId}
            score={game.homeScore}
            isWinner={(game.homeScore ?? 0) > (game.awayScore ?? 0)}
            alignRight
          />
        </div>

        {game.firstHalfAwayScore !== undefined &&
        game.firstHalfHomeScore !== undefined &&
        game.secondHalfAwayScore !== undefined &&
        game.secondHalfHomeScore !== undefined && (
          <div className="mt-5 rounded-2xl bg-slate-50 p-4">
            <div className="grid grid-cols-3 text-center text-sm">
              <div className="font-bold text-slate-700">Team</div>
              <div className="font-bold text-slate-700">1H</div>
              <div className="font-bold text-slate-700">2H</div>

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
          <h1 className="mt-8 text-3xl font-extrabold text-slate-900">
            {game.headline}
          </h1>
        )}

        {game.recapTeaser && (
          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-600">
            {game.recapTeaser}
          </p>
        )}
      </div>
    </section>
  );
}