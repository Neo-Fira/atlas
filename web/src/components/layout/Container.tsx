import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Container component enforcing the strict max-width reading column
 * and central alignment as dictated by the Atlas Design System.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
