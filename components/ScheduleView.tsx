"use client";

import { useMemo, useState } from "react";
import { GameCard } from "@/components/GameCard";
import type { Game } from "@/data/games";
import type { Team } from "@/data/teams";

type Props = {
  games: Game[];
  teams: Team[];
};

export function ScheduleView({ games, teams }: Props) {
  const [selectedTeamId, setSelectedTeamId] = useState("all");

  const filteredGames = useMemo(() => {
    if (selectedTeamId === "all") return games;

    return games.filter(
      (game) =>
        game.homeTeamId === selectedTeamId ||
        game.awayTeamId === selectedTeamId
    );
  }, [games, selectedTeamId]);

  const gamesByWeek = filteredGames.reduce<Record<number, Game[]>>(
    (acc, game) => {
      if (!acc[game.week]) {
        acc[game.week] = [];
      }

      acc[game.week].push(game);
      return acc;
    },
    {}
  );

  return (
    <>
      <div className="mb-8 rounded-2xl bg-white p-5 shadow">
        <label
          htmlFor="teamFilter"
          className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-500"
        >
          Filter by Team
        </label>

        <select
          id="teamFilter"
          value={selectedTeamId}
          onChange={(event) => setSelectedTeamId(event.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-800 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 md:max-w-sm"
        >
          <option value="all">All Teams</option>

          {teams.map((team) => (
            <option key={team.teamId} value={team.teamId}>
              {team.teamName}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-10">
        {Object.entries(gamesByWeek).map(([week, weekGames]) => (
          <section key={week}>
            <h2 className="mb-4 text-2xl font-extrabold text-slate-800">
              Week {week}
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {weekGames.map((game) => (
                <GameCard key={game.gameId} game={game} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}