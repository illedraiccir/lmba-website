import { TeamCard } from "@/components/TeamCard";
import { teams } from "@/data";
import { getStandings } from "@/lib/standings";

export default function TeamsPage() {
  const standings = getStandings("2026");

  const teamsWithRecords = teams.map((team) => {
    const standing = standings.find((s) => s.teamId === team.teamId);

    return {
      ...team,
      wins: standing?.wins ?? 0,
      losses: standing?.losses ?? 0,
    };
  });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Teams</h1>

          <p className="mt-2 text-slate-600">
            2026 LM Moorestown Basketball League teams.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teamsWithRecords.map((team) => (
            <TeamCard key={team.teamId} team={team} />
          ))}
        </div>
      </div>
    </main>
  );
}