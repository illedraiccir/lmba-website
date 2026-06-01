import type { Game } from "@/data/games";

export function getGameLabel(game: Game) {
  if (game.gameType === "playoffs") {
    if (game.playoffRound === "semifinal") return "Semifinal";
    return "Quarterfinal";
  }

  if (game.gameType === "championship") {
    return "Championship";
  }

  return `Week ${game.week}`;
}