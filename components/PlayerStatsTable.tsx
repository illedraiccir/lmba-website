"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { PlayerSeasonStat } from "@/lib/playerStats";

type SortKey =
  | "playerName"
  | "jerseyNumber"
  | "teamName"
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
  stats: PlayerSeasonStat[];
};

export function PlayerStatsTable({ stats }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("ppg");
  const [sortDirection, setSortDirection] =
    useState<SortDirection>("desc");

  const sortedStats = useMemo(() => {
    return [...stats].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      if (aValue === null) return 1;
      if (bValue === null) return -1;

      return 0;
    });
  }, [stats, sortKey, sortDirection]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection(
        sortDirection === "asc" ? "desc" : "asc"
      );
      return;
    }

    setSortKey(key);
    setSortDirection(
      key === "playerName" || key === "teamName"
        ? "asc"
        : "desc"
    );
  }

  function sortLabel(key: SortKey) {
    if (key !== sortKey) return "";
    return sortDirection === "asc" ? " ▲" : " ▼";
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-900">
          <thead className="bg-slate-900 text-white">
            <tr>
              <Header label="#" sortKey="jerseyNumber" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="Player" sortKey="playerName" onSort={handleSort} sortLabel={sortLabel} />
              <Header label="Team" sortKey="teamName" onSort={handleSort} sortLabel={sortLabel} />
              <Header label="GP" sortKey="gamesPlayed" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="PTS" sortKey="points" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="PPG" sortKey="ppg" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="2FGM" sortKey="fgm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="3FGM" sortKey="threeFgm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FTM" sortKey="ftm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FTA" sortKey="fta" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FT%" sortKey="ftPct" onSort={handleSort} sortLabel={sortLabel} center />
            </tr>
          </thead>

          <tbody>
            {sortedStats.map((player) => (
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

                <td className="px-4 py-3">
                  {player.teamName}
                </td>

                <td className="px-4 py-3 text-center">
                  {player.gamesPlayed}
                </td>

                <td className="px-4 py-3 text-center font-bold">
                  {player.points}
                </td>

                <td className="px-4 py-3 text-center font-bold">
                  {player.ppg.toFixed(1)}
                </td>

                <td className="px-4 py-3 text-center">
                  {player.fgm}
                </td>

                <td className="px-4 py-3 text-center">
                  {player.threeFgm}
                </td>

                <td className="px-4 py-3 text-center">
                  {player.ftm}
                </td>

                <td className="px-4 py-3 text-center">
                  {player.fta}
                </td>

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
    </div>
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
        className="font-bold hover:text-blue-200"
      >
        {label}
        {sortLabel(sortKey)}
      </button>
    </th>
  );
}