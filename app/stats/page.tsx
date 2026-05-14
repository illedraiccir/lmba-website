import { PlayerStatsTable } from "@/components/PlayerStatsTable";
import { getPlayerSeasonStats } from "@/lib/playerStats";

export default function StatsPage() {
  const stats = getPlayerSeasonStats("2026");

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Player Stats
          </h1>

          <p className="mt-2 text-slate-600">
            2026 LM Moorestown Basketball League statistical leaders.
          </p>
        </div>

        <PlayerStatsTable stats={stats} />
      </div>
    </main>
  );
}