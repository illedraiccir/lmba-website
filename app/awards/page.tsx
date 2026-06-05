import { AwardCard } from "@/components/AwardCard";
import { weeklyAwards } from "@/data/weeklyAwards";

function getAwardPeriodLabel(week: number) {
  if (week === 8) return "Quarterfinal Awards";
  if (week === 9) return "Semifinal Awards";
  if (week === 10) return "Championship Awards";

  return `Week ${week}`;
}

function groupAwardsByWeek(awards: typeof weeklyAwards) {
  return awards.reduce<Record<number, typeof weeklyAwards>>((acc, award) => {
    if (!acc[award.week]) acc[award.week] = [];
    acc[award.week].push(award);
    return acc;
  }, {});
}

export default function AwardsPage() {
  const sortedWeeklyAwards = [...weeklyAwards].sort((a, b) => {
    if (b.week !== a.week) return b.week - a.week;
    return a.awardName.localeCompare(b.awardName);
  });

  const playoffAwards = sortedWeeklyAwards.filter((award) => award.week >= 8);
  const regularSeasonAwards = sortedWeeklyAwards.filter(
    (award) => award.week <= 7
  );

  const playoffAwardsByWeek = groupAwardsByWeek(playoffAwards);
  const regularSeasonAwardsByWeek = groupAwardsByWeek(regularSeasonAwards);

  const playoffWeeks = Object.keys(playoffAwardsByWeek)
    .map(Number)
    .sort((a, b) => b - a);

  const regularSeasonWeeks = Object.keys(regularSeasonAwardsByWeek)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10 text-slate-900">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight">Awards</h1>
          <p className="mt-2 text-slate-600">
            Playoff honors, weekly awards, league superlatives, and
            end-of-season recognition.
          </p>
        </div>

        <section className="mb-10 rounded-3xl bg-slate-950 p-8 text-white shadow-xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-blue-300">
            2026 Awards Hub
          </p>

          <h2 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">
            Where stat lines become storylines.
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-slate-200">
            From playoff chaos to oddly specific men’s league superlatives,
            this is where the league personality lives.
          </p>
        </section>

        {playoffWeeks.length > 0 && (
          <section className="mb-14">
            <h2 className="mb-6 text-3xl font-extrabold">Playoff Awards</h2>

            <div className="space-y-10">
              {playoffWeeks.map((week) => (
                <section key={week}>
                  <div className="mb-4 flex items-center gap-3">
                    <h3 className="text-2xl font-extrabold">
                      {getAwardPeriodLabel(week)}
                    </h3>
                    <div className="h-px flex-1 bg-slate-300" />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    {playoffAwardsByWeek[week].map((award) => (
                      <AwardCard key={award.awardId} award={award} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="mb-6 text-3xl font-extrabold">
            Regular Season Weekly Awards
          </h2>

          <div className="space-y-10">
            {regularSeasonWeeks.map((week) => (
              <section key={week}>
                <div className="mb-4 flex items-center gap-3">
                  <h3 className="text-2xl font-extrabold">Week {week}</h3>
                  <div className="h-px flex-1 bg-slate-300" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {regularSeasonAwardsByWeek[week].map((award) => (
                    <AwardCard key={award.awardId} award={award} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}