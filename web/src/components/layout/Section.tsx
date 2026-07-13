import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Section component enforcing vertical rhythm and macro-spacing 
 * between distinct page elements according to the Design System.
 */
export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-macro-md md:py-macro-lg ${className}`}>
      {children}
    </section>
  );
}
