import Link from "next/link";

const quarterfinals = [
  {
    gameId: "2026-p-qf-g01",
    seedA: 1,
    teamA: "Ball Starz",
    recordA: "9-1",
    seedB: 8,
    teamB: "Free Agent Team",
    recordB: "1-9",
    time: "Tue 6/2 · 7:30 PM",
  },
  {
    gameId: "2026-p-qf-g03",
    seedA: 4,
    teamA: "Department of Offense",
    recordA: "5-5",
    seedB: 5,
    teamB: "Hash-Slinging Slashers",
    recordB: "5-5",
    time: "Wed 6/3 · 6:30 PM",
  },
  {
    gameId: "2026-p-qf-g04",
    seedA: 3,
    teamA: "Trust The Process",
    recordA: "7-3",
    seedB: 6,
    teamB: "Prestige Worldwide",
    recordB: "3-7",
    time: "Wed 6/3 · 7:30 PM",
  },
  {
    gameId: "2026-p-qf-g02",
    seedA: 2,
    teamA: "LMBA Jam",
    recordA: "7-3",
    seedB: 7,
    teamB: "Thrillers",
    recordB: "3-7",
    time: "Tue 6/2 · 8:30 PM",
  },
];

function TeamRow({
  seed,
  team,
  record,
  muted = false,
}: {
  seed?: number;
  team: string;
  record?: string;
  muted?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-3 rounded-xl px-4 py-3 ${
        muted ? "bg-slate-100 text-slate-400" : "bg-slate-50 text-slate-950"
      }`}
    >
      <div className="flex min-w-0 items-center gap-3">
        {seed ? (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white">
            {seed}
          </span>
        ) : (
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-black text-slate-500">
            —
          </span>
        )}

        <span className="truncate font-extrabold">{team}</span>
      </div>

      {record && (
        <span className="shrink-0 text-sm font-bold text-slate-500">
          {record}
        </span>
      )}
    </div>
  );
}

function MatchupCard({
  round,
  gameId,
  seedA,
  teamA,
  recordA,
  seedB,
  teamB,
  recordB,
  time,
  note,
  muted = false,
}: {
  round: string;
  gameId?: string;
  seedA?: number;
  teamA: string;
  recordA?: string;
  seedB?: number;
  teamB: string;
  recordB?: string;
  time?: string;
  note?: string;
  muted?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border p-5 shadow-sm ${
        muted
          ? "border-dashed border-slate-300 bg-white/70"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
          {round}
        </p>

        {time && (
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-extrabold text-blue-700">
            {time}
          </span>
        )}
      </div>

      <div className="space-y-2">
        <TeamRow seed={seedA} team={teamA} record={recordA} muted={muted} />
        <TeamRow seed={seedB} team={teamB} record={recordB} muted={muted} />
      </div>

      {note && <p className="mt-4 text-sm font-semibold text-slate-500">{note}</p>}

      {gameId && (
        <Link
          href={`/results/${gameId}`}
          className="mt-4 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          View Matchup →
        </Link>
      )}
    </article>
  );
}

export default function BracketPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <section className="mb-8 overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl">
          <div className="bg-gradient-to-r from-blue-600 via-slate-900 to-slate-950 p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-200">
              2026 LMBA Playoffs
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
              The road to the championship starts now.
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
              Eight teams enter. One team leaves with the LM Moorestown
              Basketball League title.
            </p>
          </div>
        </section>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm font-bold text-slate-500">No. 1 Seed</p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              Ball Starz
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm font-bold text-slate-500">Top Contenders</p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              LMBA / TTP
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm font-bold text-slate-500">Chaos Zone</p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              Seeds 4-6
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow">
            <p className="text-sm font-bold text-slate-500">Format</p>
            <p className="mt-1 text-2xl font-black text-slate-950">
              Single Elim
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          <section>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-2xl font-black text-slate-950">
                Quarterfinals
              </h2>
              <div className="h-px flex-1 bg-slate-300" />
            </div>

            <div className="space-y-5">
              {quarterfinals.map((game) => (
                <MatchupCard
                  key={game.gameId}
                  round="Quarterfinal"
                  gameId={game.gameId}
                  seedA={game.seedA}
                  teamA={game.teamA}
                  recordA={game.recordA}
                  seedB={game.seedB}
                  teamB={game.teamB}
                  recordB={game.recordB}
                  time={game.time}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-2xl font-black text-slate-950">
                Semifinals
              </h2>
              <div className="h-px flex-1 bg-slate-300" />
            </div>

            <div className="space-y-5 lg:pt-20">
              <MatchupCard
                round="Semifinal"
                teamA="Ball Starz / Free Agent Team"
                teamB="DOO / HSH"
                note="Winner advances to the championship."
                muted
              />

              <div className="hidden h-20 lg:block" />

              <MatchupCard
                round="Semifinal"
                teamA="TTP / Prestige"
                teamB="LMBA Jam / Thrillers"
                note="Winner advances to the championship."
                muted
              />
            </div>
          </section>

          <section>
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-2xl font-black text-slate-950">
                Championship
              </h2>
              <div className="h-px flex-1 bg-slate-300" />
            </div>

            <div className="lg:pt-48">
              <MatchupCard
                round="Championship"
                teamA="Semifinal Winner"
                teamB="Semifinal Winner"
                note="Winner claims the 2026 LMBA championship."
                muted
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}