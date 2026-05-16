import Link from "next/link";
import { AwardCard } from "@/components/AwardCard";
import { GameCard } from "@/components/GameCard";
import { ResultCard } from "@/components/ResultCard";
import { games, teams } from "@/data";
import { weeklyAwards } from "@/data/weeklyAwards";
import { getCurrentWeekGames } from "@/lib/games";
import { getPlayerSeasonStats } from "@/lib/playerStats";
import { getStandings } from "@/lib/standings";
import { LeagueLeaderList } from "@/components/LeagueLeaderList";

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

  const topPpgLeaders = [...playerStats]
  .sort((a, b) => b.ppg - a.ppg)
  .slice(0, 3)
  .map((player) => ({
    playerId: player.playerId,
    playerName: player.playerName,
    teamName: player.teamName,
    value: player.ppg.toFixed(1),
  }));

const topPointsLeaders = [...playerStats]
  .sort((a, b) => b.points - a.points)
  .slice(0, 3)
  .map((player) => ({
    playerId: player.playerId,
    playerName: player.playerName,
    teamName: player.teamName,
    value: player.points.toString(),
  }));

const topThreePointLeaders = [...playerStats]
  .sort((a, b) => b.threeFgm - a.threeFgm)
  .slice(0, 3)
  .map((player) => ({
    playerId: player.playerId,
    playerName: player.playerName,
    teamName: player.teamName,
    value: player.threeFgm.toString(),
  }));

  const latestAwardWeek = Math.max(
    ...weeklyAwards
      .filter((award) => award.seasonId === "2026")
      .map((award) => award.week)
  );

  const latestWeeklyAwards = weeklyAwards.filter(
    (award) => award.seasonId === "2026" && award.week === latestAwardWeek
  );

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[1fr_360px]">
        <div className="space-y-12">
          <section id="slate" className="scroll-mt-28">
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

          <section id="results" className="scroll-mt-28">
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

          <section id="awards" className="scroll-mt-28">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-600">
                  Weekly Awards
                </p>

                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900">
                  Week {latestAwardWeek} Honors
                </h2>
              </div>

              <Link
                href="/awards"
                className="shrink-0 text-sm font-bold text-blue-600 transition hover:text-blue-800"
              >
                View All Awards →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {latestWeeklyAwards.map((award) => (
                <AwardCard key={award.awardId} award={award} />
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-6 xl:self-start">
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
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="w-5 shrink-0 text-sm font-bold text-slate-400">
                        {index + 1}
                      </span>

                      <div
                        className="h-3 w-3 shrink-0 rounded-full"
                        style={{
                          backgroundColor:
                            teamData?.primaryColor ?? "#CBD5E1",
                        }}
                      />

                      <Link
                        href={`/teams/${team.teamId}`}
                        className="truncate font-semibold text-slate-900 hover:text-blue-700"
                      >
                        {team.teamName}
                      </Link>
                    </div>

                    <span className="shrink-0 pl-3 font-bold text-slate-700">
                      {team.wins}-{team.losses}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          <section
            id="leaders"
            className="scroll-mt-28 rounded-2xl bg-white p-5 shadow"
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                League Leaders
              </h2>

              <Link
                href="/stats"
                className="text-sm font-bold text-blue-700 hover:underline"
              >
                Full Stats →
              </Link>
            </div>

            <div className="space-y-4">
              <LeagueLeaderList
                title="PPG"
                leaders={topPpgLeaders}
              />

              <LeagueLeaderList
                title="Points"
                leaders={topPointsLeaders}
              />

              <LeagueLeaderList
                title="3FGM"
                leaders={topThreePointLeaders}
              />
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}