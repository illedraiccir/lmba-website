import Link from "next/link";
import { weeklyAwards, seasonAwards, teams } from "@/data";

function getTeamName(seasonTeamId?: string) {
  if (!seasonTeamId) return "";

  const teamId = seasonTeamId.replace(/^2026-/, "");
  return teams.find((team) => team.teamId === teamId)?.teamName ?? teamId;
}

export default function AwardsPage() {
  const currentSeasonWeeklyAwards = weeklyAwards
    .filter((award) => award.seasonId === "2026")
    .sort((a, b) => b.week - a.week);

  const currentSeasonAwards = seasonAwards.filter(
    (award) => award.seasonId === "2026"
  );

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Awards</h1>

          <p className="mt-2 text-slate-600">
            Weekly honors, league superlatives, and end-of-season awards.
          </p>
        </div>

        <section className="rounded-3xl bg-slate-950 p-8 text-white shadow-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-200">
            2026 Awards Hub
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Where stat lines become storylines.
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-300">
            From Player of the Week to the most oddly specific men’s league
            superlatives imaginable, this is where the league personality lives.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="mb-5 text-3xl font-extrabold text-slate-900">
            Weekly Awards
          </h2>

          {currentSeasonWeeklyAwards.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {currentSeasonWeeklyAwards.map((award) => (
                <article
                  key={`${award.seasonId}-${award.week}-${award.awardName}-${award.playerId}`}
                  className="rounded-2xl bg-white p-6 shadow"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                      Week {award.week}
                    </span>

                    <span className="text-sm font-semibold text-slate-500">
                      {getTeamName(award.seasonTeamId)}
                    </span>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-wide text-slate-400">
                    {award.awardName}
                  </p>

                  <Link
                    href={`/players/${award.playerId}`}
                    className="mt-2 block text-2xl font-extrabold text-blue-700 hover:underline"
                  >
                    {award.title}
                  </Link>

                  <p className="mt-3 leading-7 text-slate-600">{award.body}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow">
              <p className="text-lg font-semibold text-slate-600">
                Weekly awards coming soon.
              </p>

              <p className="mt-2 text-slate-500">
                Once the weekly awards tab is populated, they’ll show up here.
              </p>
            </div>
          )}
        </section>

        <section className="mt-12">
          <h2 className="mb-5 text-3xl font-extrabold text-slate-900">
            Season Awards
          </h2>

          {currentSeasonAwards.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2">
              {currentSeasonAwards.map((award) => (
                <article
                  key={`${award.seasonId}-${award.awardName}-${award.rank}-${award.playerId}`}
                  className="rounded-2xl bg-white p-6 shadow"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-sm font-bold text-white">
                      {award.awardName}
                    </span>

                    <span className="text-sm font-semibold text-slate-500">
                      Rank {award.rank}
                    </span>
                  </div>

                  <Link
                    href={`/players/${award.playerId}`}
                    className="text-2xl font-extrabold text-blue-700 hover:underline"
                  >
                    {award.title}
                  </Link>

                  <p className="mt-3 leading-7 text-slate-600">{award.body}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow">
              <p className="text-lg font-semibold text-slate-600">
                Season awards will be added after the regular season.
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}