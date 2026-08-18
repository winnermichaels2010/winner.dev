import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | winner.dev';
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
          404
        </div>
        <h2 className="mt-4 text-2xl font-bold" style={{ color: 'var(--c-text)' }}>Page Not Found</h2>
        <p className="mt-3 max-w-md mx-auto" style={{ color: 'var(--c-text-sec)' }}>
          {"Looks like this page doesn't exist. It may have been moved or the URL might be incorrect. Let's get you back on track."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent rounded-xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20"
          style={{ color: '#0c1210' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
