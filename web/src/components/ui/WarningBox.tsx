import type { ReactNode } from "react";

export function WarningBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-8 border-t border-brand pt-4">
      <p className="text-lg font-medium leading-relaxed text-brand">
        {children}
      </p>
    </div>
  );
}
