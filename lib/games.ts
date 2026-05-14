import { games } from "@/data";

function startOfToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

function parseGameDate(date: string) {
  return new Date(`${date}T00:00:00`);
}

export function getCurrentWeekGames(seasonId = "2026") {
  const today = startOfToday();

  const seasonGames = games
    .filter((game) => game.seasonId === seasonId)
    .sort(
      (a, b) =>
        parseGameDate(a.date).getTime() - parseGameDate(b.date).getTime()
    );

  const upcomingGame = seasonGames.find(
    (game) =>
      game.status === "scheduled" &&
      parseGameDate(game.date) >= today
  );

  if (upcomingGame) {
    return seasonGames.filter(
        (game) =>
            game.week === upcomingGame.week &&
            game.status === "scheduled" &&
            parseGameDate(game.date) >= today
    );
}

  const completedGames = seasonGames.filter(
    (game) => game.status === "final"
  );

  if (completedGames.length === 0) return [];

  const latestWeek = Math.max(
    ...completedGames.map((game) => game.week)
  );

  return seasonGames.filter(
    (game) => game.week === latestWeek
  );
}