import { Container } from "./Container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-brand">Atlas</span>
            <span className="hidden text-sm text-text-muted md:inline-block">Independent Guide</span>
          </div>
          
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm font-medium">
              <li><a href="#" className="text-text-main hover:text-brand-muted">Explore</a></li>
              <li><a href="#" className="text-text-main hover:text-brand-muted">Plan a Trip</a></li>
              <li><a href="#" className="text-text-main hover:text-brand-muted">Routes</a></li>
              <li><a href="#" className="text-text-main hover:text-brand-muted">Guides</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="hidden rounded-md border border-border px-3 py-1.5 text-sm text-text-muted md:block">
              Search routes, borders...
            </div>
            <a href="#" className="text-sm font-medium text-text-main hover:text-brand-muted">My Trip</a>
            <button className="md:hidden" aria-label="Open menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
