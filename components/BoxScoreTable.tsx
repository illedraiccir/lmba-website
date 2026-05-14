"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { PlayerGameStat } from "@/data/playerGameStats";

type SortKey =
  | "jerseyNumber"
  | "playerName"
  | "points"
  | "fgm"
  | "threeFgm"
  | "ftm"
  | "fta";

type SortDirection = "asc" | "desc";

type BoxScoreTableProps = {
  teamName: string;
  stats: PlayerGameStat[];
};

export function BoxScoreTable({ teamName, stats }: BoxScoreTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>("points");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

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
        return sortDirection === "asc" ? aValue - bValue : bValue - aValue;
      }

      return 0;
    });
  }, [stats, sortKey, sortDirection]);

  const totals = stats.reduce(
    (acc, stat) => ({
      points: acc.points + stat.points,
      fgm: acc.fgm + stat.fgm,
      threeFgm: acc.threeFgm + stat.threeFgm,
      ftm: acc.ftm + stat.ftm,
      fta: acc.fta + stat.fta,
    }),
    { points: 0, fgm: 0, threeFgm: 0, ftm: 0, fta: 0 }
  );

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      return;
    }

    setSortKey(key);
    setSortDirection(key === "playerName" || key === "jerseyNumber" ? "asc" : "desc");
  }

  function sortLabel(key: SortKey) {
    if (key !== sortKey) return "";
    return sortDirection === "asc" ? " ▲" : " ▼";
  }

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow">
      <div className="bg-slate-900 px-5 py-4 text-white">
        <h2 className="text-xl font-extrabold">{teamName} Box Score</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-900">
          <thead className="bg-slate-100 text-slate-600">
            <tr>
              <Header label="#" sortKey="jerseyNumber" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="Player" sortKey="playerName" onSort={handleSort} sortLabel={sortLabel} />
              <Header label="PTS" sortKey="points" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="2FGM" sortKey="fgm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="3FGM" sortKey="threeFgm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FTM" sortKey="ftm" onSort={handleSort} sortLabel={sortLabel} center />
              <Header label="FTA" sortKey="fta" onSort={handleSort} sortLabel={sortLabel} center />
            </tr>
          </thead>

          <tbody>
            {sortedStats.map((stat) => (
              <tr
                key={`${stat.gameId}-${stat.playerId}`}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-3 text-center font-semibold text-slate-500">
                  {stat.jerseyNumber}
                </td>
                <td className="px-4 py-3 font-semibold">
                  <Link
                    href={`/players/${stat.playerId}`}
                    className="text-blue-700 hover:underline"
                  >
                    {stat.playerName}
                  </Link>
                </td>
                <td className="px-4 py-3 text-center font-bold">{stat.points}</td>
                <td className="px-4 py-3 text-center">{stat.fgm}</td>
                <td className="px-4 py-3 text-center">{stat.threeFgm}</td>
                <td className="px-4 py-3 text-center">{stat.ftm}</td>
                <td className="px-4 py-3 text-center">{stat.fta}</td>
              </tr>
            ))}

            <tr className="bg-slate-50 font-extrabold">
              <td className="px-4 py-3 text-center">—</td>
              <td className="px-4 py-3">TOTAL</td>
              <td className="px-4 py-3 text-center">{totals.points}</td>
              <td className="px-4 py-3 text-center">{totals.fgm}</td>
              <td className="px-4 py-3 text-center">{totals.threeFgm}</td>
              <td className="px-4 py-3 text-center">{totals.ftm}</td>
              <td className="px-4 py-3 text-center">{totals.fta}</td>
            </tr>
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