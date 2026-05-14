import { ScheduleView } from "@/components/ScheduleView";
import { games, teams } from "@/data";

export default function SchedulePage() {
  const seasonGames = games
    .filter((game) => game.seasonId === "2026")
    .sort((a, b) => {
      const dateComparison =
        new Date(`${a.date}T00:00:00`).getTime() -
        new Date(`${b.date}T00:00:00`).getTime();

      if (dateComparison !== 0) return dateComparison;

      return a.time.localeCompare(b.time);
    });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Schedule</h1>

          <p className="mt-2 text-slate-600">
            Full 2026 LM Moorestown Basketball League schedule.
          </p>
        </div>

        <ScheduleView games={seasonGames} teams={teams} />
      </div>
    </main>
  );
}