export function SeasonalTimeline({ recommended }: { recommended: string[] }) {
  const seasons = ["Spring", "Summer", "Autumn", "Winter"];
  
  return (
    <div className="mt-8">
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">Best Season</h4>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-base">
        {seasons.map((season) => {
          const isRecommended = recommended.includes(season);
          return (
            <span 
              key={season} 
              className={`font-light ${
                isRecommended 
                  ? "border-b border-brand pb-1 font-medium text-brand" 
                  : "text-border"
              }`}
            >
              {season}
            </span>
          );
        })}
      </div>
    </div>
  );
}
