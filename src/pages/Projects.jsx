import { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useScrollAnimation from '../components/useScrollAnimation';
import projects from '../data/projects';

export default function Projects() {
  const sectionRef = useScrollAnimation();

  useEffect(() => {
    document.title = 'Projects | winner.dev';
  }, []);

  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  }, []);

  return (
    <div className="page-transition pt-[72px]">
      {/* Hero Section */}
      <section className="relative pt-16 pb-10 sm:pt-20 sm:pb-14 overflow-hidden">
        {/* Ambient background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.15), transparent 70%)',
              animation: 'orb-float-1 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px]"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.12), transparent 70%)',
              animation: 'orb-float-2 15s ease-in-out infinite',
            }}
          />
          {/* Subtle grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight animate-on-scroll leading-[1.1]">
                My{' '}
                <span
                  className="gradient-shimmer"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #10b981, #22d3ee, #10b981, #34d399, #10b981)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Projects
                </span>
              </h1>
              <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed animate-on-scroll animate-delay-1" style={{ color: 'var(--c-text-sec)' }}>
                Every project is a chance to learn something new and solve a real problem. Here's what I've been building.
              </p>
            </div>
            {/* Project count badge */}
            <div
              className="animate-on-scroll animate-delay-2 flex items-center gap-3 px-5 py-3 rounded-2xl shrink-0"
              style={{
                border: '1px solid var(--c-border)',
                backgroundColor: 'var(--c-card)',
              }}
            >
              <div className="flex -space-x-2">
                {projects.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm ring-2"
                    style={{
                      backgroundColor: 'var(--c-bg)',
                      ringColor: 'var(--c-card)',
                      border: '2px solid var(--c-card)',
                    }}
                  >
                    {p.icon}
                  </div>
                ))}
              </div>
              <div>
                <span className="text-lg font-extrabold text-accent count-number">{projects.length}</span>
                <span className="text-xs ml-1.5" style={{ color: 'var(--c-text-muted)' }}>Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={sectionRef} className="pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`animate-on-scroll animate-delay-${(i % 4) + 1} card-glow group rounded-2xl overflow-hidden cursor-pointer`}
                style={{ border: '1px solid var(--c-border)', backgroundColor: 'var(--c-card)' }}
                onMouseMove={handleMouseMove}
              >
                {/* Browser header */}
                <div className="relative z-10" style={{ borderBottom: '1px solid var(--c-border)' }}>
                  <div className="flex items-center gap-2 px-4 py-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/60 transition-all duration-300 group-hover:bg-red-400 group-hover:shadow-[0_0_6px_rgba(248,113,113,0.5)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60 transition-all duration-300 group-hover:bg-yellow-400 group-hover:shadow-[0_0_6px_rgba(251,191,36,0.5)]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/60 transition-all duration-300 group-hover:bg-green-400 group-hover:shadow-[0_0_6px_rgba(74,222,128,0.5)]" />
                    </div>
                    <div className="flex-1 mx-2">
                      <div
                        className="rounded-md px-3 py-1 text-xs font-mono truncate transition-all duration-300 group-hover:bg-accent/5"
                        style={{ backgroundColor: 'var(--c-input-bg)', color: 'var(--c-text-muted)' }}
                      >
                        {project.demoUrl !== '#' ? project.demoUrl.replace('https://', '') : 'localhost'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live site preview */}
                <div className="relative h-52 overflow-hidden bg-white">
                  {project.demoUrl !== '#' ? (
                    <div className="w-full h-full overflow-hidden">
                      <iframe
                        src={project.demoUrl}
                        title={project.title}
                        className="w-full h-full border-0 pointer-events-none iframe-zoom"
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                        style={{ transform: 'scale(0.5)', transformOrigin: 'top left', width: '200%', height: '200%' }}
                      />
                    </div>
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-110"
                      style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(20,184,166,0.1))' }}
                    >
                      <span className="text-4xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">{project.icon}</span>
                    </div>
                  )}

                  {/* Premium hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-3"
                    style={{ backgroundColor: 'rgba(12,18,16,0.65)', backdropFilter: 'blur(6px)' }}
                  >
                    <div className="flex items-center gap-3 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                      <span
                        className="px-6 py-3 rounded-xl text-sm font-bold shadow-xl transition-all duration-300 hover:scale-105"
                        style={{
                          background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                          color: '#0c1210',
                          boxShadow: '0 8px 30px rgba(16,185,129,0.3)',
                        }}
                      >
                        Visit Site
                      </span>
                      <Link
                        to={`/projects/${project.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 hover:scale-105"
                        style={{
                          border: '1px solid rgba(255,255,255,0.2)',
                          color: 'rgba(255,255,255,0.9)',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        Details
                      </Link>
                    </div>
                    {/* Gradient line accent */}
                    <div
                      className="w-12 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 translate-y-4 group-hover:translate-y-0"
                      style={{ background: 'linear-gradient(90deg, #10b981, #06b6d4)' }}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5">
                  <h3
                    className="text-lg font-semibold transition-all duration-300 group-hover:text-accent group-hover:translate-x-1"
                    style={{ color: 'var(--c-text)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed line-clamp-3 transition-colors duration-300" style={{ color: 'var(--c-text-sec)' }}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={tag}
                        className="tag-pill px-2.5 py-1 rounded-full text-xs font-medium text-accent"
                        style={{
                          backgroundColor: 'rgba(16,185,129,0.1)',
                          border: '1px solid rgba(16,185,129,0.15)',
                          transitionDelay: `${j * 0.03}s`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Details Button */}
                  <Link
                    to={`/projects/${project.id}`}
                    className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold btn-magnetic group/btn"
                    style={{
                      background: 'linear-gradient(135deg, var(--color-accent), var(--color-accent-hover))',
                      color: '#0c1210',
                      border: 'none',
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-500 group-hover/btn:rotate-[360deg]"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Details
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
