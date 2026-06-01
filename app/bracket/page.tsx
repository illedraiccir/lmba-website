import Link from "next/link";

const quarterfinals = [
  {
    gameId: "2026-p-qf-g01",
    topSeed: 1,
    topTeam: "Ball Starz",
    bottomSeed: 8,
    bottomTeam: "Free Agent Team",
    time: "Tue 6/2 · 7:30 PM",
  },
  {
    gameId: "2026-p-qf-g03",
    topSeed: 4,
    topTeam: "Department of Offense",
    bottomSeed: 5,
    bottomTeam: "Hash-Slinging Slashers",
    time: "Wed 6/3 · 6:30 PM",
  },
  {
    gameId: "2026-p-qf-g04",
    topSeed: 3,
    topTeam: "Trust The Process",
    bottomSeed: 6,
    bottomTeam: "Prestige Worldwide",
    time: "Wed 6/3 · 7:30 PM",
  },
  {
    gameId: "2026-p-qf-g02",
    topSeed: 2,
    topTeam: "LMBA Jam",
    bottomSeed: 7,
    bottomTeam: "Thrillers",
    time: "Tue 6/2 · 8:30 PM",
  },
];

function MatchupCard({
  title,
  gameId,
  topSeed,
  topTeam,
  bottomSeed,
  bottomTeam,
  time,
}: {
  title: string;
  gameId?: string;
  topSeed?: number;
  topTeam: string;
  bottomSeed?: number;
  bottomTeam: string;
  time?: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow">
      <p className="mb-3 text-xs font-extrabold uppercase tracking-wide text-blue-600">
        {title}
      </p>

      <div className="space-y-2">
        <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
          {topSeed && (
            <span className="w-6 text-sm font-black text-slate-400">
              {topSeed}
            </span>
          )}
          <span className="font-extrabold text-slate-900">{topTeam}</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3">
          {bottomSeed && (
            <span className="w-6 text-sm font-black text-slate-400">
              {bottomSeed}
            </span>
          )}
          <span className="font-extrabold text-slate-900">{bottomTeam}</span>
        </div>
      </div>

      {time && <p className="mt-3 text-sm font-semibold text-slate-500">{time}</p>}

      {gameId && (
        <Link
          href={`/results/${gameId}`}
          className="mt-4 inline-block text-sm font-bold text-blue-700 hover:underline"
        >
          View Game →
        </Link>
      )}
    </div>
  );
}

export default function BracketPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-blue-600">
            2026 Playoffs
          </p>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-950">
            Playoff Bracket
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            The road to the LM Moorestown Basketball League championship starts
            with the quarterfinals.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <section>
            <h2 className="mb-4 text-2xl font-extrabold text-slate-900">
              Quarterfinals
            </h2>

            <div className="space-y-5">
              {quarterfinals.map((game) => (
                <MatchupCard
                  key={game.gameId}
                  title="Quarterfinal"
                  {...game}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-extrabold text-slate-900">
              Semifinals
            </h2>

            <div className="space-y-5">
              <MatchupCard
                title="Semifinal"
                topTeam="Ball Starz / Free Agent Team"
                bottomTeam="DOO / HSH"
              />

              <MatchupCard
                title="Semifinal"
                topTeam="TTP / Prestige"
                bottomTeam="LMBA Jam / Thrillers"
              />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-extrabold text-slate-900">
              Championship
            </h2>

            <MatchupCard
              title="Championship"
              topTeam="Semifinal Winner"
              bottomTeam="Semifinal Winner"
            />
          </section>
        </div>
      </div>
    </main>
  );
}