import Link from "next/link";
import { notFound } from "next/navigation";
import {
  games,
  playerGameStats,
  players,
  rosterSpots,
  teams,
} from "@/data";
import { GameCard } from "@/components/GameCard";
import { TeamRosterStatsTable } from "@/components/TeamRosterStatsTable";
import { getPlayerSeasonStats } from "@/lib/playerStats";
import { getStandings } from "@/lib/standings";

type PageProps = {
  params: Promise<{
    teamId: string;
  }>;
};

export default async function TeamPage({ params }: PageProps) {
  const { teamId } = await params;

  const team = teams.find((t) => t.teamId === teamId);

  if (!team) {
    notFound();
  }

  const standings = getStandings("2026");
  const standing = standings.find((s) => s.teamId === team.teamId);

  const roster = rosterSpots
    .filter((spot) => spot.seasonId === "2026" && spot.teamId === team.teamId)
    .map((spot) => {
      const player = players.find((p) => p.playerId === spot.playerId);

      return {
        ...spot,
        playerName: player?.displayName ?? spot.playerId,
      };
    })
    .sort((a, b) => a.playerName.localeCompare(b.playerName));

  const teamGames = games
    .filter(
      (game) =>
        game.seasonId === "2026" &&
        (game.homeTeamId === team.teamId || game.awayTeamId === team.teamId)
    )
    .sort(
      (a, b) =>
        new Date(`${a.date}T00:00:00`).getTime() -
        new Date(`${b.date}T00:00:00`).getTime()
    );

  const teamRosterStats = getPlayerSeasonStats("2026").filter(
    (player) => player.teamId === team.teamId
  );

  const topScorer = [...teamRosterStats].sort(
    (a, b) => b.points - a.points
  )[0];

  const ppgLeader = [...teamRosterStats].sort((a, b) => b.ppg - a.ppg)[0];

  const threePointLeader = [...teamRosterStats].sort(
    (a, b) => b.threeFgm - a.threeFgm
  )[0];

  const finalGames = teamGames.filter((game) => game.status === "final");

  const recentForm = finalGames.map((game) => {
    const isHome = game.homeTeamId === team.teamId;
    const teamScore = isHome ? game.homeScore ?? 0 : game.awayScore ?? 0;
    const opponentScore = isHome ? game.awayScore ?? 0 : game.homeScore ?? 0;

    return teamScore > opponentScore ? "W" : "L";
  });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/teams" className="font-semibold text-blue-600">
          ← Back to Teams
        </Link>

        <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div
            className="h-4"
            style={{
              background: `linear-gradient(to right, ${team.primaryColor}, ${team.secondaryColor})`,
            }}
          />

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-400">
                  2026 Team Profile
                </p>

                <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-900">
                  {team.teamName}
                </h1>

                <div className="mt-5">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400">
                    Season Results
                  </p>
                  <div className="flex flex-wrap gap-3"></div>
                  {recentForm.map((result, index) => (
                    <span
                      key={`${result}-${index}`}
                      className={`rounded-full px-3 py-1 text-sm font-black ${
                        result === "W"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <TeamStatCard
                  label="Record"
                  value={`${standing?.wins ?? 0}-${standing?.losses ?? 0}`}
                />
                <TeamStatCard label="PF" value={standing?.pointsFor ?? 0} />
                <TeamStatCard
                  label="PA"
                  value={standing?.pointsAgainst ?? 0}
                />
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <LeaderCard
                label="Points Leader"
                player={topScorer}
                value={topScorer ? `${topScorer.points} pts` : "—"}
              />

              <LeaderCard
                label="PPG Leader"
                player={ppgLeader}
                value={ppgLeader ? `${ppgLeader.ppg.toFixed(1)} ppg` : "—"}
              />

              <LeaderCard
                label="3FGM Leader"
                player={threePointLeader}
                value={threePointLeader ? `${threePointLeader.threeFgm}` : "—"}
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1fr_2fr]">
          <section className="rounded-2xl bg-white p-6 shadow">
            <h2 className="mb-4 text-2xl font-extrabold text-slate-900">
              Roster
            </h2>

            <div className="space-y-3">
              {roster.map((player) => (
                <Link
                  key={player.playerId}
                  href={`/players/${player.playerId}`}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3 hover:bg-slate-50"
                >
                  <span className="font-semibold text-blue-700">
                    {player.playerName}
                  </span>

                  <span className="text-sm font-bold text-slate-400">
                    #{player.jerseyNumber}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <TeamRosterStatsTable players={teamRosterStats} />
        </section>

        <section className="mt-8">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Team Schedule
            </h2>

            <Link
              href="/schedule"
              className="font-semibold text-blue-700 hover:underline"
            >
              Full Schedule →
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {teamGames.map((game) => (
              <GameCard key={game.gameId} game={game} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function TeamStatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-center">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-3xl font-black text-slate-900">{value}</p>
    </div>
  );
}

function LeaderCard({
  label,
  player,
  value,
}: {
  label: string;
  player?: {
    playerId: string;
    playerName: string;
  };
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      {player ? (
        <Link
          href={`/players/${player.playerId}`}
          className="mt-2 block text-xl font-black text-blue-700 hover:underline"
        >
          {player.playerName}
        </Link>
      ) : (
        <p className="mt-2 text-xl font-black text-slate-400">—</p>
      )}

      <p className="mt-3 text-2xl font-black text-slate-900">{value}</p>
    </div>
  );
}