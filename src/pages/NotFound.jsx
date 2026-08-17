import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound.css';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | winner.dev';
  }, []);

  return (
    <div className="page">
      <div className="not-found">
        <div className="not-found-content">
          <div className="not-found-code">404</div>
          <h2>Page Not Found</h2>
          <p>
            {"Looks like this page doesn't exist. It may have been moved or the URL might be incorrect. Let's get you back on track."}
          </p>
          <Link to="/" className="btn btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
