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
      <p className="text-xs font-extrabold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <h2 className="mt-1 text-2xl font-black leading-tight text-slate-950">
        {teamName}
      </h2>

      <p
        className={`mt-3 text-6xl font-black ${
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
  const hasHalftimeScores =
    typeof game.firstHalfAwayScore === "number" &&
    typeof game.firstHalfHomeScore === "number" &&
    typeof game.secondHalfAwayScore === "number" &&
    typeof game.secondHalfHomeScore === "number";

  const awayTeamName = awayTeam?.teamName ?? game.awayTeamId;
  const homeTeamName = homeTeam?.teamName ?? game.homeTeamId;

  const awayWon = (game.awayScore ?? 0) > (game.homeScore ?? 0);
  const homeWon = (game.homeScore ?? 0) > (game.awayScore ?? 0);

  return (
    <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow">
      <div className="grid h-3 grid-cols-2">
        <div style={{ backgroundColor: awayTeam?.primaryColor ?? "#CBD5E1" }} />
        <div style={{ backgroundColor: homeTeam?.primaryColor ?? "#CBD5E1" }} />
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-extrabold uppercase tracking-wide text-slate-500">
            Week {game.week} • {formatDate(game.date)} • {game.time}
          </span>

          <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-extrabold uppercase text-white">
            Final{game.overtimePeriods ? ` / ${game.overtimePeriods}OT` : ""}
          </span>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <TeamScore
            label="Away"
            teamName={awayTeamName}
            score={game.awayScore}
            isWinner={awayWon}
          />

          <div className="rounded-full bg-slate-100 px-4 py-3 text-lg font-black text-slate-400">
            @
          </div>

          <TeamScore
            label="Home"
            teamName={homeTeamName}
            score={game.homeScore}
            isWinner={homeWon}
            alignRight
          />
        </div>

        {hasHalftimeScores && (
          <div className="mt-8 rounded-3xl bg-slate-50 p-5">
            <div className="grid grid-cols-[1fr_80px_80px] items-center gap-3 text-center">
              <p className="text-lg font-extrabold text-slate-500">Team</p>
              <p className="text-lg font-extrabold text-slate-500">1H</p>
              <p className="text-lg font-extrabold text-slate-500">2H</p>

              <p className="font-extrabold text-slate-950">{awayTeamName}</p>
              <p className="text-lg text-slate-700">
                {game.firstHalfAwayScore}
              </p>
              <p className="text-lg text-slate-700">
                {game.secondHalfAwayScore}
              </p>

              <p className="font-extrabold text-slate-950">{homeTeamName}</p>
              <p className="text-lg text-slate-700">
                {game.firstHalfHomeScore}
              </p>
              <p className="text-lg text-slate-700">
                {game.secondHalfHomeScore}
              </p>
            </div>
          </div>
        )}

        {game.headline && (
          <h1 className="mt-8 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
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