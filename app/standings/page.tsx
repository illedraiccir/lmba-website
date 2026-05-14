import { StandingsTable } from "@/components/StandingsTable";
import { getStandings } from "@/lib/standings";

export default function StandingsPage() {
  const standings = getStandings("2026");

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">
            Standings
          </h1>
          <p className="mt-2 text-slate-600">
            2026 regular season standings.
          </p>
        </div>

        <StandingsTable standings={standings} />

        <p className="mt-4 text-sm text-slate-500">
          Tiebreakers shown during the regular season: win percentage,
          head-to-head, then points allowed. Official playoff seeding may use
          league-defined best-win / worst-loss rules.
        </p>
      </div>
    </main>
  );
}