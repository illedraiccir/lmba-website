export type Season = {
  seasonId: string;
  seasonName: string;
  year: number;
  isActive: boolean;
};

export const seasons: Season[] = [
  {
    "seasonId": "2026",
    "seasonName": "2026 Season",
    "year": 2026,
    "isActive": true
  },
  {
    "seasonId": "2025",
    "seasonName": "2025 Season",
    "year": 2025,
    "isActive": false
  }
];
