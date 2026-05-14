import Link from "next/link";
import { games, teams } from "@/data";
import type { PlayerGameStat } from "@/data/playerGameStats";

type Props = {
  playerGames: PlayerGameStat[];
};

export function PlayerGameLogTable({ playerGames }: Props) {
  return (
    <section className="mt-8 overflow-hidden rounded-2xl bg-white shadow">
      <div className="bg-slate-900 px-5 py-4 text-white">
        <h2 className="text-2xl font-extrabold">Game Log</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Opponent</th>
              <th className="px-4 py-3 text-center">PTS</th>
              <th className="px-4 py-3 text-center">2FGM</th>
              <th className="px-4 py-3 text-center">3FGM</th>
              <th className="px-4 py-3 text-center">FTM</th>
              <th className="px-4 py-3 text-center">FTA</th>
              <th className="px-4 py-3 text-center">Box</th>
            </tr>
          </thead>

          <tbody>
            {playerGames.map((gameStat) => {
              const game = games.find((g) => g.gameId === gameStat.gameId);

              const opponent =
                game?.homeTeamId === gameStat.teamId
                  ? teams.find((t) => t.teamId === game.awayTeamId)
                  : teams.find((t) => t.teamId === game?.homeTeamId);

              return (
                <tr
                  key={`${gameStat.gameId}-${gameStat.playerId}`}
                  className="border-b border-slate-100 last:border-0"
                >
                  <td className="px-4 py-3">{gameStat.date}</td>

                  <td className="px-4 py-3 font-semibold">
                    {opponent?.teamName ?? "Unknown"}
                  </td>

                  <td className="px-4 py-3 text-center font-bold">
                    {gameStat.points}
                  </td>

                  <td className="px-4 py-3 text-center">{gameStat.fgm}</td>
                  <td className="px-4 py-3 text-center">
                    {gameStat.threeFgm}
                  </td>
                  <td className="px-4 py-3 text-center">{gameStat.ftm}</td>
                  <td className="px-4 py-3 text-center">{gameStat.fta}</td>

                  <td className="px-4 py-3 text-center">
                    <Link
                      href={`/results/${gameStat.gameId}`}
                      className="font-semibold text-blue-700 hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}