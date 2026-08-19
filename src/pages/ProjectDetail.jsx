import { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';
import projectDetails from '../data/projectDetails';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const sectionRef = useScrollAnimation();
  const techRef = useRef(null);
  const project = projectDetails[id];

  useEffect(() => {
    document.title = project ? `${project.title} | winner.dev` : 'Project Not Found | winner.dev';
  }, [project]);

  // Staggered tech pill entrance
  useEffect(() => {
    if (!techRef.current || !project) return;
    const pills = techRef.current.querySelectorAll('.tech-pill');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pills.forEach((pill, i) => {
              setTimeout(() => pill.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(techRef.current);
    return () => observer.disconnect();
  }, [project]);

  // Staggered paragraph reveals
  useEffect(() => {
    if (!sectionRef.current || !project) return;
    const paragraphs = sectionRef.current.querySelectorAll('.reveal-paragraph');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    paragraphs.forEach((p) => observer.observe(p));
    return () => paragraphs.forEach((p) => observer.unobserve(p));
  }, [project, sectionRef]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-[72px]">
        <div className="text-center page-transition">
          <div className="text-8xl sm:text-9xl font-extrabold bg-gradient-to-r from-accent to-emerald-400 bg-clip-text text-transparent">
            404
          </div>
          <h2 className="mt-4 text-2xl font-bold" style={{ color: 'var(--c-text)' }}>Project Not Found</h2>
          <p className="mt-3 max-w-md mx-auto" style={{ color: 'var(--c-text-sec)' }}>
            {"The project you're looking for doesn't exist or may have been moved."}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent rounded-xl font-semibold text-sm btn-magnetic"
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
    <div className="page-transition pt-[72px]">
      <section ref={sectionRef} className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background ambient orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[150px]"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)',
              animation: 'orb-float-1 14s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-15 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)',
              animation: 'orb-float-2 18s ease-in-out infinite',
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6">
          {/* Back Navigation */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mb-10 text-sm font-medium transition-all duration-300 hover:text-accent hover:-translate-x-1 animate-on-scroll"
            style={{ color: 'var(--c-text-sec)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="animate-on-scroll animate-delay-1">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{
                backgroundColor: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.15)',
                color: 'var(--c-accent, #10b981)',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Featured Project
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1]"
              style={{ color: 'var(--c-text)' }}
            >
              {project.title}
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-14 animate-on-scroll animate-delay-2">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent rounded-xl font-semibold text-sm btn-magnetic"
              style={{ color: '#0c1210' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Visit Live Site
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <button
              onClick={() => navigate('/projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm btn-magnetic"
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

          {/* Project Content — Staggered paragraphs */}
          <div className="space-y-6">
            {project.description.map((paragraph, i) => (
              <p
                key={i}
                className="reveal-paragraph text-base sm:text-lg leading-relaxed"
                style={{
                  color: 'var(--c-text-sec)',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tech Stack & Role */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll animate-delay-4">
            {/* Tech Stack */}
            <div
              ref={techRef}
              className="rounded-2xl p-6 card-glow"
              style={{
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-card)',
              }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--c-text-muted)' }}>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill px-3.5 py-2 rounded-xl text-sm font-medium text-accent cursor-default"
                    style={{
                      backgroundColor: 'rgba(16,185,129,0.1)',
                      border: '1px solid rgba(16,185,129,0.18)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Role */}
            <div
              className="rounded-2xl p-6 card-glow"
              style={{
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-card)',
              }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-5" style={{ color: 'var(--c-text-muted)' }}>
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
              className="mt-6 rounded-2xl p-6 milestone-pulse animate-on-scroll animate-delay-5"
              style={{
                border: '1px solid rgba(16,185,129,0.2)',
                backgroundColor: 'rgba(16,185,129,0.04)',
              }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--c-text-muted)' }}>
                Milestone
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(16,185,129,0.12)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l4 4 4-4" />
                    <path d="M12 3v12" />
                    <path d="M5 21h14" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>
                  {project.milestone}
                </p>
              </div>
            </div>
          )}

          {/* Bottom navigation */}
          <div className="mt-16 pt-10 animate-on-scroll animate-delay-5" style={{ borderTop: '1px solid var(--c-border)' }}>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
              style={{
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-card)',
                color: 'var(--c-text)',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:-translate-x-1"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
