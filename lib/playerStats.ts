import { playerGameStats, teams } from "@/data";

export type PlayerSeasonStat = {
  playerId: string;
  playerName: string;
  jerseyNumber: number | null;
  teamId: string;
  teamName: string;
  gamesPlayed: number;
  points: number;
  ppg: number;
  fgm: number;
  threeFgm: number;
  ftm: number;
  fta: number;
  ftPct: number | null;
};

export function getPlayerSeasonStats(seasonId = "2026"): PlayerSeasonStat[] {
  const statRows = playerGameStats.filter((stat) => stat.seasonId === seasonId);

  const statsByPlayer = new Map<string, PlayerSeasonStat>();

  for (const stat of statRows) {
    const team = teams.find((t) => t.teamId === stat.teamId);

    const existing = statsByPlayer.get(stat.playerId);

    if (!existing) {
      statsByPlayer.set(stat.playerId, {
        playerId: stat.playerId,
        playerName: stat.playerName,
        jerseyNumber: stat.jerseyNumber ?? null,
        teamId: stat.teamId,
        teamName: team?.teamName ?? stat.teamId,
        gamesPlayed: 1,
        points: stat.points,
        ppg: stat.points,
        fgm: stat.fgm,
        threeFgm: stat.threeFgm,
        ftm: stat.ftm,
        fta: stat.fta,
        ftPct: stat.fta > 0 ? stat.ftm / stat.fta : null,
      });
    } else {
      existing.gamesPlayed += 1;
      existing.points += stat.points;
      existing.fgm += stat.fgm;
      existing.threeFgm += stat.threeFgm;
      existing.ftm += stat.ftm;
      existing.fta += stat.fta;
      existing.ppg = existing.points / existing.gamesPlayed;
      existing.ftPct = existing.fta > 0 ? existing.ftm / existing.fta : null;
    }
  }

  return Array.from(statsByPlayer.values()).sort((a, b) => b.ppg - a.ppg);
}