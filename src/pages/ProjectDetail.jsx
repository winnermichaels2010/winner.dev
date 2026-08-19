import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';
import projectDetails from '../data/projectDetails';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation();
  const project = projectDetails[id];

  useEffect(() => {
    document.title = project ? `${project.title} | winner.dev` : 'Project Not Found | winner.dev';
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-[72px]">
        <div className="text-center">
          <div className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
            404
          </div>
          <h2 className="mt-4 text-2xl font-bold" style={{ color: 'var(--c-text)' }}>Project Not Found</h2>
          <p className="mt-3 max-w-md mx-auto" style={{ color: 'var(--c-text-sec)' }}>
            {"The project you're looking for doesn't exist or may have been moved."}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent rounded-xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20"
            style={{ color: '#0c1210' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[72px]">
      <section ref={sectionRef} className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Navigation */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-accent animate-on-scroll"
            style={{ color: 'var(--c-text-sec)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="animate-on-scroll animate-delay-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{project.icon}</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight" style={{ color: 'var(--c-text)' }}>
                {project.title}
              </h1>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-on-scroll animate-delay-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent rounded-xl font-semibold text-sm hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-accent/20"
              style={{ color: '#0c1210' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Visit Live Site
            </a>
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-card)',
                color: 'var(--c-text)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
              All Projects
            </button>
          </div>

          {/* Project Content */}
          <div className="space-y-6 animate-on-scroll animate-delay-3">
            {project.description.map((paragraph, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed"
                style={{ color: 'var(--c-text-sec)' }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tech Stack & Role */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll animate-delay-4">
            {/* Tech Stack */}
            <div
              className="rounded-2xl p-6"
              style={{
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-card)',
              }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--c-text-muted)' }}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-accent"
                    style={{ backgroundColor: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.15)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div
              className="rounded-2xl p-6"
              style={{
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-card)',
              }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--c-text-muted)' }}>
                Role
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-sec)' }}>
                {project.role}
              </p>
            </div>
          </div>

          {/* Milestone (if exists) */}
          {project.milestone && (
            <div
              className="mt-6 rounded-2xl p-6 animate-on-scroll"
              style={{
                border: '1px solid rgba(16,185,129,0.2)',
                backgroundColor: 'rgba(16,185,129,0.05)',
              }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--c-text-muted)' }}>
                Milestone
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎉</span>
                <p className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>
                  {project.milestone}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
