"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PlayerSeasonStat } from "@/lib/playerStats";

type SortKey =
  | "jerseyNumber"
  | "playerName"
  | "gamesPlayed"
  | "points"
  | "ppg"
  | "fgm"
  | "threeFgm"
  | "ftm"
  | "fta"
  | "ftPct";

type SortDirection = "asc" | "desc";

type Props = {
  players: PlayerSeasonStat[];
};

export function TeamRosterStatsTable({ players }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("ppg");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedPlayers = useMemo(() => {
    return [...players].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      if (aValue === null) return 1;
      if (bValue === null) return -1;

      return 0;
    });
  }, [players, sortKey, sortDirection]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      return;
    }

    setSortKey(key);
    setSortDirection(
      key === "playerName" || key === "jerseyNumber" ? "asc" : "desc"
    );
  }

  function sortLabel(key: SortKey) {
    if (key !== sortKey) return "";
    return sortDirection === "asc" ? " ▲" : " ▼";
  }

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow">
      <div className="bg-slate-900 px-5 py-4 text-white">
        <h2 className="text-xl font-extrabold">Roster Stats</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <Header label="#" sortKey="jerseyNumber" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="Player" sortKey="playerName" onSort={handleSort} sortLabel={sortLabel} />
              <Header label="GP" sortKey="gamesPlayed" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="PPG" sortKey="ppg" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="PTS" sortKey="points" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="2FGM" sortKey="fgm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="3FGM" sortKey="threeFgm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FTM" sortKey="ftm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FTA" sortKey="fta" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FT%" sortKey="ftPct" onSort={handleSort} sortLabel={sortLabel} center />
            </tr>
          </thead>

          <tbody>
            {sortedPlayers.map((player) => (
              <tr
                key={player.playerId}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 text-center font-semibold text-slate-500">
                  {player.jerseyNumber ?? "—"}
                </td>

                <td className="px-4 py-3 font-semibold">
                  <Link
                    href={`/players/${player.playerId}`}
                    className="text-blue-700 hover:underline"
                  >
                    {player.playerName}
                  </Link>
                </td>

                <td className="px-4 py-3 text-center">{player.gamesPlayed}</td>
                <td className="px-4 py-3 text-center font-bold">
                  {player.ppg.toFixed(1)}
                </td>
                <td className="px-4 py-3 text-center font-bold">
                  {player.points}
                </td>
                <td className="px-4 py-3 text-center">{player.fgm}</td>
                <td className="px-4 py-3 text-center">{player.threeFgm}</td>
                <td className="px-4 py-3 text-center">{player.ftm}</td>
                <td className="px-4 py-3 text-center">{player.fta}</td>
                <td className="px-4 py-3 text-center">
                  {player.ftPct !== null
                    ? `${(player.ftPct * 100).toFixed(1)}%`
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Header({
  label,
  sortKey,
  onSort,
  sortLabel,
  center = false,
}: {
  label: string;
  sortKey: SortKey;
  onSort: (key: SortKey) => void;
  sortLabel: (key: SortKey) => string;
  center?: boolean;
}) {
  return (
    <th className={`px-4 py-3 ${center ? "text-center" : ""}`}>
      <button
        type="button"
        onClick={() => onSort(sortKey)}
        className="font-bold hover:text-slate-900"
      >
        {label}
        {sortLabel(sortKey)}
      </button>
    </th>
  );
}