"use client";

import { useMemo, useState } from "react";
import { teams } from "@/data";
import type { StandingRow } from "@/lib/standings";
import Link from "next/link";

type SortKey =
  | "rank"
  | "teamName"
  | "wins"
  | "losses"
  | "winPct"
  | "pointsFor"
  | "pointsAgainst"
  | "pointDifferential";

type SortDirection = "asc" | "desc";

type Props = {
  standings: StandingRow[];
};

export function StandingsTable({ standings }: Props) {
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const sortedStandings = useMemo(() => {
    const rows = standings.map((team, index) => ({
      ...team,
      rank: index + 1,
    }));

    return rows.sort((a, b) => {
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
  }, [standings, sortKey, sortDirection]);

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      return;
    }

    setSortKey(key);
    setSortDirection(key === "rank" || key === "teamName" ? "asc" : "desc");
  }

  function sortLabel(key: SortKey) {
    if (key !== sortKey) return "";
    return sortDirection === "asc" ? " ▲" : " ▼";
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">
      <table className="w-full border-collapse text-left text-slate-900">
        <thead className="bg-slate-900 text-white">
          <tr>
            <Header label="Rank" sortKey="rank" onSort={handleSort} sortLabel={sortLabel} />
            <Header label="Team" sortKey="teamName" onSort={handleSort} sortLabel={sortLabel} />
            <Header label="W" sortKey="wins" onSort={handleSort} sortLabel={sortLabel} center />
            <Header label="L" sortKey="losses" onSort={handleSort} sortLabel={sortLabel} center />
            <Header label="Win %" sortKey="winPct" onSort={handleSort} sortLabel={sortLabel} center />
            <Header label="PF" sortKey="pointsFor" onSort={handleSort} sortLabel={sortLabel} center />
            <Header label="PA" sortKey="pointsAgainst" onSort={handleSort} sortLabel={sortLabel} center />
            <Header label="Diff" sortKey="pointDifferential" onSort={handleSort} sortLabel={sortLabel} center />
          </tr>
        </thead>

        <tbody>
          {sortedStandings.map((team) => {
            const teamData = teams.find((t) => t.teamId === team.teamId);

            return (
              <tr
                key={team.seasonTeamId}
                className="border-b border-slate-100 last:border-0"
              >
                <td className="px-4 py-4 font-bold">{team.rank}</td>

                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-8 w-1 rounded-full"
                      style={{
                        backgroundColor: teamData?.primaryColor ?? "#CBD5E1",
                      }}
                    />

                    <div
                      className="h-3 w-3 rounded-full border border-slate-300"
                      style={{
                        backgroundColor: teamData?.primaryColor ?? "#CBD5E1",
                      }}
                    />

                    <Link
                      href={`/teams/${team.teamId}`}
                      className="font-bold text-blue-700 hover:underline"
                    >
                      {team.teamName}
                    </Link>
                  </div>
                </td>

                <td className="px-4 py-4 text-center">{team.wins}</td>
                <td className="px-4 py-4 text-center">{team.losses}</td>
                <td className="px-4 py-4 text-center">
                  {team.winPct.toFixed(3).replace(/^0/, "")}
                </td>
                <td className="px-4 py-4 text-center">{team.pointsFor}</td>
                <td className="px-4 py-4 text-center">
                  {team.pointsAgainst}
                </td>
                <td className="px-4 py-4 text-center">
                  {team.pointDifferential > 0
                    ? `+${team.pointDifferential}`
                    : team.pointDifferential}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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