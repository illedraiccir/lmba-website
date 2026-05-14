import { ResultCard } from "@/components/ResultCard";
import { games } from "@/data";

export default function ResultsPage() {
  const completedGames = games
    .filter((game) => game.seasonId === "2026" && game.status === "final")
    .sort((a, b) => {
      const dateComparison =
        new Date(`${b.date}T00:00:00`).getTime() -
        new Date(`${a.date}T00:00:00`).getTime();

      if (dateComparison !== 0) return dateComparison;

      return b.time.localeCompare(a.time);
    });

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Results</h1>

          <p className="mt-2 text-slate-600">
            Final scores, headlines, and recaps from the 2026 season.
          </p>
        </div>

        <div className="space-y-6">
          {completedGames.map((game) => (
            <ResultCard key={game.gameId} game={game} />
          ))}
        </div>
      </div>
    </main>
  );
}