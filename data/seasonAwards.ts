export type SeasonAward = {
  seasonId: string;
  awardName: string;
  rank?: number;
  playerId: string;
  seasonTeamId: string;
  title: string;
  body: string;
};

export const seasonAwards: SeasonAward[] = [];
