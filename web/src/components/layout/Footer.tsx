import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-muted py-macro-md">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-lg font-semibold text-brand">Atlas</h2>
            <p className="mt-4 max-w-sm text-sm text-text-muted">
              The independent travel companion for Tajikistan. Practical truth, verified routes, and respectful visiting.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand">Trust & Standards</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-text-muted hover:text-text-main">Editorial Independence</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-main">Verification Process</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-main">Corrections Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-brand">Utility</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="text-text-muted hover:text-text-main">Saved Trips</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-main">Report an Issue</a></li>
              <li><a href="#" className="text-text-muted hover:text-text-main">Terms & Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-macro-md border-t border-border pt-8 text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Atlas. Independent Travel Guide.
        </div>
      </Container>
    </footer>
  );
}
