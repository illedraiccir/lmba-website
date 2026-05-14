import { games, seasonTeams, teams } from "@/data";

export type StandingRow = {
  seasonTeamId: string;
  teamId: string;
  teamName: string;
  wins: number;
  losses: number;
  winPct: number;
  pointsFor: number;
  pointsAgainst: number;
  pointDifferential: number;
  manualStandingRank?: number;
};

export function getStandings(seasonId = "2026"): StandingRow[] {
  const regularSeasonGames = games.filter(
    (game) =>
      game.seasonId === seasonId &&
      game.gameType === "regularSeason" &&
      game.status === "final"
  );

  const rows: StandingRow[] = seasonTeams
    .filter((seasonTeam) => seasonTeam.seasonId === seasonId)
    .map((seasonTeam) => {
      const team = teams.find((t) => t.teamId === seasonTeam.teamId);

      const teamGames = regularSeasonGames.filter(
        (game) =>
          game.homeTeamId === seasonTeam.teamId ||
          game.awayTeamId === seasonTeam.teamId
      );

      let wins = 0;
      let losses = 0;
      let pointsFor = 0;
      let pointsAgainst = 0;

      for (const game of teamGames) {
        const isHome = game.homeTeamId === seasonTeam.teamId;

        const teamScore = isHome ? game.homeScore ?? 0 : game.awayScore ?? 0;
        const opponentScore = isHome ? game.awayScore ?? 0 : game.homeScore ?? 0;

        pointsFor += teamScore;
        pointsAgainst += opponentScore;

        if (teamScore > opponentScore) wins += 1;
        if (teamScore < opponentScore) losses += 1;
      }

      const gamesPlayed = wins + losses;

      return {
        seasonTeamId: seasonTeam.seasonTeamId,
        teamId: seasonTeam.teamId,
        teamName: team?.teamName ?? seasonTeam.teamId,
        wins,
        losses,
        winPct: gamesPlayed > 0 ? wins / gamesPlayed : 0,
        pointsFor,
        pointsAgainst,
        pointDifferential: pointsFor - pointsAgainst,
        manualStandingRank: seasonTeam.manualStandingRank,
      };
    });

  return rows.sort((a, b) => {
    if (a.manualStandingRank && b.manualStandingRank) {
      return a.manualStandingRank - b.manualStandingRank;
    }

    if (a.manualStandingRank) return -1;
    if (b.manualStandingRank) return 1;

    if (b.winPct !== a.winPct) return b.winPct - a.winPct;

    const headToHead = getHeadToHeadRecord(
      a.teamId,
      b.teamId,
      regularSeasonGames
    );

    if (headToHead !== 0) return headToHead;

    return a.pointsAgainst - b.pointsAgainst;
  });
}

function getHeadToHeadRecord(
  teamAId: string,
  teamBId: string,
  regularSeasonGames: typeof games
) {
  const h2hGames = regularSeasonGames.filter(
    (game) =>
      (game.homeTeamId === teamAId && game.awayTeamId === teamBId) ||
      (game.homeTeamId === teamBId && game.awayTeamId === teamAId)
  );

  let teamAWins = 0;
  let teamBWins = 0;

  for (const game of h2hGames) {
    const teamAScore =
      game.homeTeamId === teamAId ? game.homeScore ?? 0 : game.awayScore ?? 0;

    const teamBScore =
      game.homeTeamId === teamBId ? game.homeScore ?? 0 : game.awayScore ?? 0;

    if (teamAScore > teamBScore) teamAWins += 1;
    if (teamBScore > teamAScore) teamBWins += 1;
  }

  if (teamAWins > teamBWins) return -1;
  if (teamBWins > teamAWins) return 1;

  return 0;
}