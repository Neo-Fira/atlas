export interface RouteSnapshotProps {
  time: string;
  cost: string;
  season: string;
  difficulty: string;
  status: string;
}

export function RouteSnapshot({ time, cost, season, difficulty, status }: RouteSnapshotProps) {
  return (
    <div className="grid grid-cols-2 gap-y-12 gap-x-12 pt-8 lg:grid-cols-5 border-t border-brand">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Time</span>
        <span className="text-xl font-light text-brand">{time}</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Cost</span>
        <span className="text-xl font-light text-brand">{cost}</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Season</span>
        <span className="text-xl font-light text-brand">{season}</span>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Difficulty</span>
        <span className="text-xl font-light text-brand">{difficulty}</span>
      </div>
      <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Status</span>
        <span className="text-xl font-light text-brand">{status}</span>
      </div>
    </div>
  );
}
