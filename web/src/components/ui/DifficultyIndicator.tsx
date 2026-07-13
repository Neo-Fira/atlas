export interface DifficultyProps {
  driving: string;
  walking: string;
  altitude: string;
  familyFriendly: string;
}

export function DifficultyIndicator({ driving, walking, altitude, familyFriendly }: DifficultyProps) {
  return (
    <div>
      <h4 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Effort Required</h4>
      <ul className="flex flex-col text-base">
        <li className="flex justify-between border-b border-border py-4">
          <span className="font-light text-text-muted">Driving</span>
          <span className="font-medium text-brand">{driving}</span>
        </li>
        <li className="flex justify-between border-b border-border py-4">
          <span className="font-light text-text-muted">Walking</span>
          <span className="font-medium text-brand">{walking}</span>
        </li>
        <li className="flex justify-between border-b border-border py-4">
          <span className="font-light text-text-muted">Altitude</span>
          <span className="font-medium text-brand">{altitude}</span>
        </li>
        <li className="flex justify-between py-4">
          <span className="font-light text-text-muted">Family Friendly</span>
          <span className="font-medium text-brand">{familyFriendly}</span>
        </li>
      </ul>
    </div>
  );
}
