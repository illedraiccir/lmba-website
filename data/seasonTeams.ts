export type SeasonTeam = {
  seasonId: string;
  seasonTeamId: string;
  teamId: string;
  captainPlayerId?: string;
  manualStandingRank?: number;
};

export const seasonTeams: SeasonTeam[] = [
  {
    "seasonId": "2026",
    "teamId": "ball-starz",
    "seasonTeamId": "2026-ball-starz",
    "captainPlayerId": "ryan-fontanazza"
  },
  {
    "seasonId": "2026",
    "teamId": "lmba-jam",
    "seasonTeamId": "2026-lmba-jam",
    "captainPlayerId": "chris-clemente"
  },
  {
    "seasonId": "2026",
    "teamId": "thrillers",
    "seasonTeamId": "2026-thrillers",
    "captainPlayerId": "connor-stine"
  },
  {
    "seasonId": "2026",
    "teamId": "trust-the-process",
    "seasonTeamId": "2026-trust-the-process",
    "captainPlayerId": "kyle-ginter"
  },
  {
    "seasonId": "2026",
    "teamId": "department-of-offense",
    "seasonTeamId": "2026-department-of-offense",
    "captainPlayerId": "eli-ratliff"
  },
  {
    "seasonId": "2026",
    "teamId": "prestige-worldwide",
    "seasonTeamId": "2026-prestige-worldwide",
    "captainPlayerId": "david-hays"
  },
  {
    "seasonId": "2026",
    "teamId": "hash-slinging-slashers",
    "seasonTeamId": "2026-hash-slinging-slashers",
    "captainPlayerId": "connor-thomas"
  },
  {
    "seasonId": "2026",
    "teamId": "free-agent-team",
    "seasonTeamId": "2026-free-agent-team",
    "captainPlayerId": "jordan-williams"
  }
];
