export type WeeklyAward = {
  seasonId: string;
  week: number;
  awardName: string;
  playerId: string;
  seasonTeamId: string;
  title: string;
  body: string;
};

export const weeklyAwards: WeeklyAward[] = [];
