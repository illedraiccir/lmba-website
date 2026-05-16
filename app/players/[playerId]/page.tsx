import Link from "next/link";
import { notFound } from "next/navigation";
import { playerGameStats, players, teams } from "@/data";
import { PlayerGameLogTable } from "@/components/PlayerGameLogTable";
import { getPlayerSeasonStats } from "@/lib/playerStats";
import { weeklyAwards } from "@/data/weeklyAwards";
import { AwardCard } from "@/components/AwardCard";

type PageProps = {
  params: Promise<{
    playerId: string;
  }>;
};

export default async function PlayerPage({ params }: PageProps) {
  const { playerId } = await params;

  const player = players.find((p) => p.playerId === playerId);

  if (!player) {
    notFound();
  }

  const playerAwards = weeklyAwards
    .filter(
      (award) =>
        award.seasonId === "2026" && award.playerId === player.playerId
    )
    .sort((a, b) => b.week - a.week);

  const seasonStats = getPlayerSeasonStats("2026");

  const playerSeasonStats = seasonStats.find(
    (stat) => stat.playerId === player.playerId
  );

  const ppgRank =
    [...seasonStats]
      .sort((a, b) => b.ppg - a.ppg)
      .findIndex((p) => p.playerId === player.playerId) + 1;

  const pointsRank =
    [...seasonStats]
      .sort((a, b) => b.points - a.points)
      .findIndex((p) => p.playerId === player.playerId) + 1;

  const threePointRank =
    [...seasonStats]
      .sort((a, b) => b.threeFgm - a.threeFgm)
      .findIndex((p) => p.playerId === player.playerId) + 1;

  const playerGames = playerGameStats
    .filter(
      (stat) =>
        stat.seasonId === "2026" &&
        stat.playerId === player.playerId
    )
    .sort(
      (a, b) =>
        new Date(`${b.date}T00:00:00`).getTime() -
        new Date(`${a.date}T00:00:00`).getTime()
    );

  const currentTeam = teams.find(
    (team) => team.teamId === playerSeasonStats?.teamId
  );

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/stats" className="font-semibold text-blue-600">
          ← Back to Stats
        </Link>

        <section className="mt-6 overflow-hidden rounded-3xl bg-white shadow-2xl">
          <div
            className="h-3"
            style={{
              background: currentTeam
                ? `linear-gradient(to right, ${currentTeam.primaryColor}, ${currentTeam.secondaryColor})`
                : "#CBD5E1",
            }}
          />

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-4">
                  <h1 className="text-5xl font-black tracking-tight text-slate-900">
                    {player.displayName}
                  </h1>

                  {playerSeasonStats?.jerseyNumber && (
                    <span className="rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white">
                      #{playerSeasonStats.jerseyNumber}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-slate-600">
                  {currentTeam && (
                    <Link
                      href={`/teams/${currentTeam.teamId}`}
                      className="font-bold text-blue-700 hover:underline"
                    >
                      {currentTeam.teamName}
                    </Link>
                  )}

                  <span>•</span>

                  <span>{playerSeasonStats?.gamesPlayed ?? 0} GP</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <RankBadge label="PPG Rank" rank={ppgRank} />
                <RankBadge label="Points Rank" rank={pointsRank} />
                <RankBadge label="3FGM Rank" rank={threePointRank} />
              </div>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
              <PlayerStatCard
                label="PPG"
                value={playerSeasonStats?.ppg.toFixed(1) ?? "0.0"}
              />

              <PlayerStatCard
                label="PTS"
                value={playerSeasonStats?.points ?? 0}
              />

              <PlayerStatCard
                label="2FGM"
                value={playerSeasonStats?.fgm ?? 0}
              />

              <PlayerStatCard
                label="3FGM"
                value={playerSeasonStats?.threeFgm ?? 0}
              />

              <PlayerStatCard
                label="FT%"
                value={
                  playerSeasonStats?.ftPct !== null &&
                  playerSeasonStats?.ftPct !== undefined
                    ? `${(playerSeasonStats.ftPct * 100).toFixed(1)}%`
                    : "—"
                }
              />
            </div>
          </div>
        </section>

        {playerAwards.length > 0 && (
          <section className="mt-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Awards & Honors
              </h2>

              <Link
                href="/awards"
                className="font-semibold text-blue-700 hover:underline"
              >
                View All Awards →
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {playerAwards.map((award) => (
                <AwardCard key={award.awardId} award={award} />
              ))}
            </div>
          </section>
        )}

        <PlayerGameLogTable playerGames={playerGames} />
      </div>
    </main>
  );
}

function PlayerStatCard({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-3 text-4xl font-black tracking-tight text-slate-900">
        {value}
      </p>
    </div>
  );
}

function RankBadge({ label, rank }: { label: string; rank: number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-center">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-2xl font-black text-slate-900">#{rank}</p>
    </div>
  );
}