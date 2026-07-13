export interface TrustBoxProps {
  verified: string;
  source: string;
  confidence: string;
}

export function TrustBox({ verified, source, confidence }: TrustBoxProps) {
  return (
    <div className="flex flex-col gap-8 border-l-2 border-brand py-2 pl-8 md:flex-row md:items-start md:gap-16">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Verified</span>
        <span className="text-lg font-light text-brand">{verified}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Source</span>
        <span className="text-lg font-light text-brand">{source}</span>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Confidence</span>
        <span className="text-lg font-light text-brand">{confidence}</span>
      </div>
    </div>
  );
}
