import Link from "next/link";
import { notFound } from "next/navigation";
import { BoxScoreTable } from "@/components/BoxScoreTable";
import { GameSummaryHeader } from "@/components/GameSummaryHeader";
import { games, playerGameStats, teams } from "@/data";

type PageProps = {
  params: Promise<{
    gameId: string;
  }>;
};

function getTeam(teamId: string) {
  return teams.find((team) => team.teamId === teamId);
}

function getGameStats(gameId: string, teamId: string) {
  return playerGameStats
    .filter((stat) => stat.gameId === gameId && stat.teamId === teamId)
    .sort((a, b) => b.points - a.points);
}

export default async function GameResultPage({ params }: PageProps) {
  const { gameId } = await params;

  const game = games.find((g) => g.gameId === gameId);

  if (!game) {
    notFound();
  }

  const awayTeam = getTeam(game.awayTeamId);
  const homeTeam = getTeam(game.homeTeamId);

  const awayStats = getGameStats(game.gameId, game.awayTeamId);
  const homeStats = getGameStats(game.gameId, game.homeTeamId);

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Link href="/results" className="font-semibold text-blue-600">
          ← Back to Results
        </Link>

        <GameSummaryHeader game={game} awayTeam={awayTeam} homeTeam={homeTeam} />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <BoxScoreTable
            teamName={awayTeam?.teamName ?? game.awayTeamId}
            stats={awayStats}
          />

          <BoxScoreTable
            teamName={homeTeam?.teamName ?? game.homeTeamId}
            stats={homeStats}
          />
        </div>
      </div>
    </main>
  );
}