export interface CostBreakdownProps {
  transport: string;
  food: string;
  entrance: string;
  optional: string;
}

export function CostBreakdown({ transport, food, entrance, optional }: CostBreakdownProps) {
  return (
    <div className="mt-12 border-t border-border pt-8">
      <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Cost Breakdown</h4>
      <ul className="flex flex-col text-base">
        <li className="flex justify-between border-b border-border py-4">
          <span className="font-light text-text-muted">Transport</span>
          <span className="font-medium text-brand">{transport}</span>
        </li>
        <li className="flex justify-between border-b border-border py-4">
          <span className="font-light text-text-muted">Food</span>
          <span className="font-medium text-brand">{food}</span>
        </li>
        <li className="flex justify-between border-b border-border py-4">
          <span className="font-light text-text-muted">Entrance Fees</span>
          <span className="font-medium text-brand">{entrance}</span>
        </li>
        <li className="flex justify-between py-4">
          <span className="font-light text-text-muted">Optional Costs</span>
          <span className="font-medium text-brand">{optional}</span>
        </li>
      </ul>
    </div>
  );
}
