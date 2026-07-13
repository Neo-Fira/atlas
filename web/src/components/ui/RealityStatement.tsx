import type { ReactNode } from "react";

export function RealityStatement({ children }: { children: ReactNode }) {
  return (
    <div className="border-l border-brand pl-6 py-1">
      <p className="text-xl font-light italic text-brand leading-relaxed">
        &quot;{children}&quot;
      </p>
    </div>
  );
}
