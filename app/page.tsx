import Link from "next/link";
import { GameCard } from "@/components/GameCard";
import { LeagueLeaderCard } from "@/components/LeagueLeaderCard";
import { ResultCard } from "@/components/ResultCard";
import { games, teams } from "@/data";
import { getCurrentWeekGames } from "@/lib/games";
import { getPlayerSeasonStats } from "@/lib/playerStats";
import { getStandings } from "@/lib/standings";

export default function HomePage() {
  const standings = getStandings("2026");
  const currentWeekGames = getCurrentWeekGames("2026");

  const recentResults = games
    .filter((game) => game.seasonId === "2026" && game.status === "final")
    .sort(
      (a, b) =>
        new Date(`${b.date}T00:00:00`).getTime() -
        new Date(`${a.date}T00:00:00`).getTime()
    )
    .slice(0, 3);

  const playerStats = getPlayerSeasonStats("2026");

  const ppgLeader = [...playerStats].sort((a, b) => b.ppg - a.ppg)[0];
  const pointsLeader = [...playerStats].sort((a, b) => b.points - a.points)[0];
  const threePointLeader = [...playerStats].sort(
    (a, b) => b.threeFgm - a.threeFgm
  )[0];

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        

        <div className="grid gap-8 xl:grid-cols-[2fr_1fr]">
          <section>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-3xl font-extrabold text-slate-900">
                This Week’s Slate
              </h2>

              <Link
                href="/schedule"
                className="font-semibold text-blue-700 hover:underline"
              >
                Full Schedule →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {currentWeekGames.map((game) => (
                <GameCard key={game.gameId} game={game} />
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-white p-6 shadow">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Standings
              </h2>

              <Link
                href="/standings"
                className="font-semibold text-blue-700 hover:underline"
              >
                View →
              </Link>
            </div>

            <div className="space-y-3">
              {standings.map((team, index) => {
                const teamData = teams.find((t) => t.teamId === team.teamId);

                return (
                  <div
                    key={team.teamId}
                    className="flex items-center justify-between rounded-xl border border-slate-100 px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 text-sm font-bold text-slate-400">
                        {index + 1}
                      </span>

                      <div
                        className="h-3 w-3 rounded-full"
                        style={{
                          backgroundColor:
                            teamData?.primaryColor ?? "#CBD5E1",
                        }}
                      />

                      <Link
                        href={`/teams/${team.teamId}`}
                        className="font-semibold text-slate-900 hover:text-blue-700"
                      >
                        {team.teamName}
                      </Link>
                    </div>

                    <span className="font-bold text-slate-700">
                      {team.wins}-{team.losses}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Recent Results
            </h2>

            <Link
              href="/results"
              className="font-semibold text-blue-700 hover:underline"
            >
              View Results →
            </Link>
          </div>

          <div className="space-y-6">
            {recentResults.map((game) => (
              <ResultCard key={game.gameId} game={game} />
            ))}
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-extrabold text-slate-900">
              League Leaders
            </h2>

            <Link
              href="/stats"
              className="font-semibold text-blue-700 hover:underline"
            >
              Full Stats →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <LeagueLeaderCard
              title="PPG Leader"
              playerName={ppgLeader.playerName}
              playerId={ppgLeader.playerId}
              value={ppgLeader.ppg.toFixed(1)}
              subtitle={`${ppgLeader.teamName} • ${ppgLeader.gamesPlayed} GP`}
            />

            <LeagueLeaderCard
              title="Points Leader"
              playerName={pointsLeader.playerName}
              playerId={pointsLeader.playerId}
              value={pointsLeader.points.toString()}
              subtitle={pointsLeader.teamName}
            />

            <LeagueLeaderCard
              title="3FGM Leader"
              playerName={threePointLeader.playerName}
              playerId={threePointLeader.playerId}
              value={threePointLeader.threeFgm.toString()}
              subtitle={threePointLeader.teamName}
            />
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-white p-8 shadow">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Weekly Awards
              </h2>

              <p className="mt-2 text-slate-600">
                Player awards, league superlatives, and weekly highlights.
              </p>
            </div>

            <Link
              href="/awards"
              className="font-semibold text-blue-700 hover:underline"
            >
              View Awards →
            </Link>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
            <p className="text-lg font-semibold text-slate-600">
              Weekly awards coming soon.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}