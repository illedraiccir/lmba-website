import Link from "next/link";

type TeamCardProps = {
  team: {
    teamId: string;
    teamName: string;
    primaryColor: string;
    secondaryColor: string;
    wins: number;
    losses: number;
  };
};

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Link
      href={`/teams/${team.teamId}`}
      className="group overflow-hidden rounded-2xl bg-white shadow transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className="h-3"
        style={{
          background: `linear-gradient(to right, ${team.primaryColor}, ${team.secondaryColor})`,
        }}
      />

      <div className="p-6">
        <div className="mb-5 flex items-center gap-4">
          <div
            className="h-5 w-5 rounded-full border border-slate-300"
            style={{
              backgroundColor: team.primaryColor,
            }}
          />

          <h2 className="text-2xl font-extrabold text-slate-900">
            {team.teamName}
          </h2>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-wide text-slate-400">
              Record
            </p>

            <p className="text-xl font-bold text-slate-900">
              {team.wins}-{team.losses}
            </p>
          </div>

        </div>

        <div className="mt-6 text-sm font-semibold text-blue-600 group-hover:text-blue-800">
          View Team →
        </div>
      </div>
    </Link>
  );
}