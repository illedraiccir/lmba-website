import Link from "next/link";
import { awardsVoting } from "@/data/awardsVoting";

export default function VotingPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <section className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-blue-300">
            2026 Season Awards
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            Awards Voting Is Open
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-200">
            Cast your vote for MVP, All-LM teams, and other season-end awards.
          </p>

          <p className="mt-3 font-semibold text-blue-200">
            {awardsVoting.closesAt}
          </p>

          <a
            href={awardsVoting.votingUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-blue-600 px-6 py-3 text-lg font-extrabold text-white transition hover:bg-blue-500"
          >
            Vote Now →
          </a>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {[
            "Most Valuable Player",
            "First Team All-LM",
            "Second Team All-LM",
            "Rookie of the Year",
            "Most Improved Player",
            "Defensive / Hustle Award",
          ].map((award) => (
            <div key={award} className="rounded-2xl bg-white p-5 shadow">
              <p className="font-extrabold text-slate-900">{award}</p>
            </div>
          ))}
        </section>

        <Link
          href="/awards"
          className="mt-8 inline-block font-bold text-blue-700 hover:underline"
        >
          View Weekly Awards →
        </Link>
      </div>
    </main>
  );
}